package com.sample;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class User {
	@NotEmpty(message="Please Enter username")
	private String uname;
	@NotEmpty(message="Please Enter password")

	private String pwd;
	@NotEmpty(message="Please Enter email")

	private String email;
	@NotNull(message="Please Enter phno")

	private Long phno;

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhno() {
		return phno;
	}

	public void setPhno(Long phno) {
		this.phno = phno;
	}

	@Override
	public String toString() {
		return "User [uname=" + uname + ", pwd=" + pwd + ", email=" + email + ", phno=" + phno + "]";
	}
	
}
