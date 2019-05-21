package com.cdweb.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "role")
public class Role implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idRole", unique = true, nullable = false)
	private int idRole;

	private String roleName;

	@JoinColumn(name = "idRole")
	@OneToMany(fetch = FetchType.LAZY)
	private List<UserRole> listUserRole;

	public Role(String roleName, List<UserRole> listUserRole) {
		super();
		this.roleName = roleName;
		this.listUserRole = listUserRole;
	}

	public Role() {
		// TODO Auto-generated constructor stub
	}

	public int getIdRole() {
		return idRole;
	}

	public void setIdRole(int idRole) {
		this.idRole = idRole;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<UserRole> getListUserRole() {
		return listUserRole;
	}

	public void setListUserRole(List<UserRole> listUserRole) {
		this.listUserRole = listUserRole;
	}

}
