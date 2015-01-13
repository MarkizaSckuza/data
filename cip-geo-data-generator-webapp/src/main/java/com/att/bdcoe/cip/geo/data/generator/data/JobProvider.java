package com.att.bdcoe.cip.geo.data.generator.data;


import com.att.bdcoe.cip.geo.data.generator.model.Job;

import java.io.IOException;
import java.util.List;

public interface JobProvider {
    public Job read(String filename) throws IOException;
    public List<Job> getAll() throws IOException;
    public void write(Job job) throws IOException;
}

