package com.glabbr.intercom.demo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("service/chatlogs")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatController {

	@Autowired
	ChatBO chatBO;
	
	@GetMapping("/chat")
	public List<Message> getAllChats() {
		List<Message> list = new ArrayList<>();
		try {
			list = chatBO.getAllChats();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	} 
	
	@GetMapping("/chat/profile")
	public List<Message> getAllChats(@RequestParam String profile) {
		List<Message> list = new ArrayList<>();
		try {
			list = chatBO.getChatsByProfile(profile);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	@PostMapping("/chat")
	public int insertChat(@RequestBody Message message) {
		try {
			return chatBO.insertChatDetails(message);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return 0;
	}
	
	
	
	
	
}
