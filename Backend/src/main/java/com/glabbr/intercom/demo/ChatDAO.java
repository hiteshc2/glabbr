package com.glabbr.intercom.demo;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class ChatDAO {

	String selectQuery="select sender,body,timestamp,profile from chat_log";
	
	String selectByProfileQuery="SELECT sender,body,timestamp,profile FROM chat_log where profile = ?;";
	
	String insertQuery="insert into chat_log (sender,body,timestamp,profile) values (?,?,?,?)";
	
	private final JdbcTemplate jdbcTemplate;
	
	@Autowired
	public ChatDAO(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Message> getAllChats() throws SQLException{ 
		return jdbcTemplate.query(selectQuery, new BeanPropertyRowMapper(Message.class));
	}
	
	public List<Message> getChatsByProfile(String profile) throws SQLException{ 
		return jdbcTemplate.query(selectByProfileQuery,new Object[] {profile}, new BeanPropertyRowMapper(Message.class));
	}
	
	public int insertChatDetails(Message message) throws SQLException{ 
		return jdbcTemplate.update(insertQuery, new Object[] { 
				message.getSender(),
				message.getBody(),
				message.getTimestamp(),
				message.getProfile()
			});
	
	}
	
}
