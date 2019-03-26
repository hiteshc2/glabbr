package com.glabbr.intercom.demo;

import java.util.Date;

public class Message {

	private int id;
	private String sender;
	private String body;
	private Date timestamp;
	private String profile;
	
	public Message() {
		super();
	}
	
	public Message(int id, String sender, String body, Date timestamp, String profile) {
		super();
		this.id = id;
		this.sender = sender;
		this.body = body;
		this.timestamp = timestamp;
		this.profile = profile;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getSender() {
		return sender;
	}
	
	public void setSender(String sender) {
		this.sender = sender;
	}
	
	public String getBody() {
		return body;
	}
	
	public void setBody(String body) {
		this.body = body;
	}
	
	public Date getTimestamp() {
		return timestamp;
	}
	
	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", sender=" + sender + ", body=" + body + ", timestamp=" + timestamp + ", profile="
				+ profile + "]";
	}

}
