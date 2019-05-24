package com.cdweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.entity.Vacancy;
import com.cdweb.service.VacancyService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class VacancyController {
	@Autowired
	private VacancyService vacancyService;
	
	
//	Get All Vacancy
	@RequestMapping(value = {"/"},method = RequestMethod.GET)
	public ResponseEntity<List<Vacancy>> vacancyList(){
		List<Vacancy> vacancys=vacancyService.getAllVacancy();
		return ResponseEntity.ok().body(vacancys);
	}
	
//	@GetMapping()
//	@ResponseBody
//	public String vacancyList(Model model){
//		List<Vacancy> vacancys=vacancyService.getAllVacancy();
//		
//		return vacancys.toString();
//	}
}
