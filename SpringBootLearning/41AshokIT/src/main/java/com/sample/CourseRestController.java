package com.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class CourseRestController {
	
	@GetMapping(value="/course",produces= {"text/plain"})
	public String getCourseDetails(String name)
	{
		String msg="";
		if("SBMS".equals(name)){
			msg="NEw Bath for SBMX From 18-OCT-2024";
		
		}
		else if("JRTP".equals(name)){
			msg="NEw Bath for JRTP From 18-OCT-2024";

			}
		else if("AWS".equals(name)){
			msg="NEw Bath for AWS From 18-OCT-2024";

		}
		else {
			msg="Please visit www.ashoit.in for more details";

		}
		
		return msg;
		
	}
	
	@GetMapping(value="/course",produces= {"text/plain"})
	public String getCourseDetails(@RequestParam("cname")String cname,@RequestParam("tname") String tname)
	{
		return cname+" By "+tname+" is 5000 INR Only";
	}

}
