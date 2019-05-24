package com.cdweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BaseController {

//	@RequestMapping(value = { "/login", "/" })
//	public String login(@RequestParam(value = "error", required = false) final String error, final Model model) {
//		if (error != null) {
//			model.addAttribute("message", "Login Failed!");
//		}
//		return "login";
//	}
//
//	@RequestMapping("/loginAdmin")
//	public String login1(@RequestParam(required = false) String message, final Model model) {
//		if (message != null && !message.isEmpty()) {
//			if (message.equals("logout")) {
//				model.addAttribute("message", "Logout!");
//			}
//			if (message.equals("error")) {
//				model.addAttribute("message", "Login Failed!");
//			}
//		}
//		return "loginAdmin";
//	}
//
//	@RequestMapping("/loginHR")
//	public String login2(@RequestParam(required = false) String message, final Model model) {
//		if (message != null && !message.isEmpty()) {
//			if (message.equals("logout")) {
//				model.addAttribute("message", "Logout!");
//			}
//			if (message.equals("error")) {
//				model.addAttribute("message", "Login Failed!");
//			}
//		}
//		return "loginHR";
//	}
//	
//	@RequestMapping("/loginInterviewer")
//	public String login3(@RequestParam(required = false) String message, final Model model) {
//		if (message != null && !message.isEmpty()) {
//			if (message.equals("logout")) {
//				model.addAttribute("message", "Logout!");
//			}
//			if (message.equals("error")) {
//				model.addAttribute("message", "Login Failed!");
//			}
//		}
//		return "loginInterviewer";
//	}
//
//	@RequestMapping("/admin/admin")
//	public String admin() {
//		return "admin";
//	}
//
//	@RequestMapping("/hr/hr")
//	public String user() {
//		return "hr";
//	}
//	
//	@RequestMapping("/interviewer")
//	public String interviewer() {
//		return "interviewer";
//	}
//

}
