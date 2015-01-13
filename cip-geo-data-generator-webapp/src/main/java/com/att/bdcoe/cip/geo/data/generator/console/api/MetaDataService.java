package com.att.bdcoe.cip.geo.data.generator.console.api;

import com.att.bdcoe.cip.geo.data.generator.model.FileName;
import com.att.bdcoe.cip.geo.data.generator.model.Output;

import java.util.Collection;
import java.util.List;

public interface MetaDataService {
    public Collection<FileName> getJobFilesList();

    public Collection<FileName> getScenarioFilesList();


    public List<Output> getAllOutputs();
    public List<Output> getLocationOutputs();
    public List<Output> getNonLocationOutputs();
}
