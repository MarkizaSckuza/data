package com.att.bdcoe.cip.geo.data.generator.console.api;


import com.att.bdcoe.cip.geo.data.generator.Configuration;
import com.att.bdcoe.cip.geo.data.generator.data.OptionsProvider;
import com.att.bdcoe.cip.geo.data.generator.model.Options;
import com.sun.jersey.api.core.InjectParam;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;

@Path("/optionsload")
@org.springframework.stereotype.Service
public class OptionsLoadImpl implements OptionsLoad<Options> {

    private static Log log = LogFactory.getLog(OptionsServiceImpl.class);
    private final Configuration configuration;
    private OptionsProvider optionsProvider;
    @Autowired
    public OptionsLoadImpl(Configuration configuration, OptionsProvider optionsProvider) {
        this.configuration = configuration;
        this.optionsProvider = optionsProvider;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({"application/json"})
    public Options load(String fileName) {
        try {
            Options options = optionsProvider.read(fileName);
            options.setFileName(fileName);
            return options;
        } catch (IOException ex) {
            log.error("Error reading generator options",ex);
            return Options.getDefault();
        }
    }
}
