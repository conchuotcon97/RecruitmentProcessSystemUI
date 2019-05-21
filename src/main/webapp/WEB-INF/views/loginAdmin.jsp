<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<title>Login Admin</title>
</head>
<body>
	<h1>Spring MVC 5 - Spring Security 5 - Hibernate 5</h1>
	<h2>${message}</h2>

	<form name='loginForm'  action="admin/j_spring_security_login"
		method='POST'>
		<table>
			<tr>
				<td>User:</td>
				<td><input id="username" type='text' name='username'></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input id="password" type='password' name='password' /></td>
			</tr>
			<tr>
				<td colspan='2'><input id="loginAdmin" name="submit"
					type="submit" value="login" /></td>
			</tr>
		</table>
		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />

	</form>
	<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>