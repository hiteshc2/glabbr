package com.glabbr.intercom.demo;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatBO {

	
	@Autowired
	public ChatDAO chatDAO;

	public List<Message> getAllChats() throws SQLException { 
		return chatDAO.getAllChats();
	}
	
	public List<Message> getChatsByProfile(String profile) throws SQLException { 
		return chatDAO.getChatsByProfile(profile);
	}
	
	public int insertChatDetails(Message message) throws SQLException { 
		return chatDAO.insertChatDetails(message);
	}
	
}
