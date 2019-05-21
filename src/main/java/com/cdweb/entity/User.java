package com.cdweb.entity;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity(name = "user")
@Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames = "username"))
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idUser", unique = true, nullable = false)
	private int idUser;

	private String userNumber;
	private String fullName;
	private String email;

	@Column(name = "username", unique = true)
	private String username;

	private String password;

	@JoinColumn(name = "idPosition")
	@OneToOne
	private Position position;

	@JoinColumn(name = "idDepartment")
	@OneToOne()
	private Department department;

	private String avatar;
	private Date birthday;
	private boolean gender;
	private String phone;
	private String address;

	@Column(name = "enabled", nullable = false, columnDefinition = "TINYINT(1)")
	private boolean enabled;

	@JoinColumn(name = "idUser")
	@OneToMany(fetch = FetchType.EAGER)
	private Set<UserRole> listUserRole = new HashSet<UserRole>(0);
	
	@JoinColumn(name="idUser")
	@OneToMany
	private List<Vacancy> listVacancy;
	
	@JoinColumn(name="idUser")
	@OneToMany
	private List<InterviewerScheduleInterview> listInterviewerScheduleInterview;
	
	

	public User(String username, String password, boolean enabled, Set<UserRole> listUserRole) {
		super();
		this.username = username;
		this.password = password;
		this.enabled = enabled;
		this.listUserRole = listUserRole;
	}

	public User() {
		// TODO Auto-generated constructor stub
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public Set<UserRole> getListUserRole() {
		return listUserRole;
	}

	public void setListUserRole(Set<UserRole> listUserRole) {
		this.listUserRole = listUserRole;
	}

	public String getUserNumber() {
		return userNumber;
	}

	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public boolean isGender() {
		return gender;
	}

	public void setGender(boolean gender) {
		this.gender = gender;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Vacancy> getListVacancy() {
		return listVacancy;
	}

	public void setListVacancy(List<Vacancy> listVacancy) {
		this.listVacancy = listVacancy;
	}

	public List<InterviewerScheduleInterview> getListInterviewerScheduleInterview() {
		return listInterviewerScheduleInterview;
	}

	public void setListInterviewerScheduleInterview(List<InterviewerScheduleInterview> listInterviewerScheduleInterview) {
		this.listInterviewerScheduleInterview = listInterviewerScheduleInterview;
	}

	@Transient
	public List<GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		for (UserRole userRole : this.listUserRole) {
			authorities.add(new SimpleGrantedAuthority(userRole.getRole().getRoleName()));
		}
		return authorities;
	}
}