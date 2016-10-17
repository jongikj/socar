package com.socar.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // has a 관계 
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@RequestMapping("/notice")
	public String goMain(){
		logger.info("AdminController ! goMain()");
		return "admin:admin/notice.tiles";
	}
	@RequestMapping("/faq_0")
	public String gofaq_0(){
		logger.info("AdminController ! gofaq_0()");
		return "admin:admin/faq_0.tiles";
	}
	@RequestMapping("/faq_1")
	public String gofaq_1(){
		logger.info("AdminController ! gofaq_1()");
		return "admin:admin/faq_1.tiles";
	}
	@RequestMapping("/faq_2")
	public String gofaq_2(){
		logger.info("AdminController ! gofaq_2()");
		return "admin:admin/faq_2.tiles";
	}
	@RequestMapping("/faq_3")
	public String gofaq_3(){
		logger.info("AdminController ! gofaq_3()");
		return "admin:admin/faq_3.tiles";
	}
	@RequestMapping("/faq_4")
	public String gofaq_4(){
		logger.info("AdminController ! gofaq_4()");
		return "admin:admin/faq_4.tiles";
	}
	@RequestMapping("/faq_5")
	public String gofaq_5(){
		logger.info("AdminController ! gofaq_5()");
		return "admin:admin/faq_5.tiles";
	}
	@RequestMapping("/faq_6")
	public String gofaq_6(){
		logger.info("AdminController ! gofaq_6()");
		return "admin:admin/faq_6.tiles";
	}
	@RequestMapping("/faq_7")
	public String gofaq_7(){
		logger.info("AdminController ! gofaq_7()");
		return "admin:admin/faq_7.tiles";
	}
	@RequestMapping("/inquiry")
	public String goinquiry(){
		logger.info("AdminController ! goinquiry()");
		return "admin:admin/inquiry.tiles";
	}
	@RequestMapping("/voc")
	public String govoc(){
		logger.info("AdminController ! govoc()");
		return "admin:admin/voc.tiles"; 
	}
	@RequestMapping("/notice_content")
	public String gonotice_content(){
		logger.info("AdminController ! gonotice_content()");
		return "admin:admin/notice_content.tiles"; 
	}
	
}
