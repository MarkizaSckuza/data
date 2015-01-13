package com.att.bdcoe.cip.geo.data.generator.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;


import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import java.io.IOException;


@Configuration
@ComponentScan(basePackages = "com.att.bdcoe.cip.geo.data")
@PropertySource("classpath:application.properties")
public class GeneratorConfiguration implements ServletContextAware{

    @Value("${generator.metadata.folder}")
    private String path;
    private ServletContext servletContext;


    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        String current = null;
        try {
            current = new java.io.File( "." ).getCanonicalPath();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new PropertySourcesPlaceholderConfigurer();
    }


    @Bean
    public DefaultServletHandlerConfigurer defaultServletHandlerConfigurer(){
        return new DefaultServletHandlerConfigurer(this.servletContext);
    }

    @Override
    public void setServletContext(ServletContext servletContext) {
        this.servletContext = servletContext;
    }
}
