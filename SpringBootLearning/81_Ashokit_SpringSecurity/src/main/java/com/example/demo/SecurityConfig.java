package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Define SecurityFilterChain as a Bean
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .requestMatchers("/home").permitAll()  
                .requestMatchers("/welcome").authenticated() 
                .requestMatchers("/admin").hasAuthority("ADMIN")
                .requestMatchers("/emp").hasAuthority("EMP")
                .requestMatchers("/mgr").hasAuthority("MANAGER")
                .requestMatchers("/common").hasAnyAuthority("EMPLOYEE","MANAGER")
            .anyRequest().authenticated()
          .and()
          .formLogin()
          .defaultSuccessUrl("/welcome",true)
          .and()
          .logout()
          .logoutRequestMatcher(new  AntPathRequestMatcher("/logout"))
          
          .and()
          .exceptionHandling()
          .accessDeniedPage("/accessDenied");
        return http.build();
    }
    
    protected void configure(AuthenticationManagerBuilder auth)throws Exception{
    	auth.inMemoryAuthentication().withUser("devs").password("devs").authorities("ADMIN");
    	auth.inMemoryAuthentication().withUser("ns").password("devs").authorities("EMPLOYEE");
    	auth.inMemoryAuthentication().withUser("vs").password("devs").authorities("MANAGER");
    }
    
    
}
