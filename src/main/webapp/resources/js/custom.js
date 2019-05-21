$(document).ready(function() {
	$("#loginAdmin").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		$.ajax({
			url : "/admin/j_spring_security_login",
			type : "post",
			data : {
				username : username,
				password : password
			},
			success: function(data){
				if(data.success) {
					successCallback();
				} else {
					var errors = [];
					errors.push("Unexpected Error: Unable to log in automatically.");
					// show errors
				}
			}
		})
	})
})