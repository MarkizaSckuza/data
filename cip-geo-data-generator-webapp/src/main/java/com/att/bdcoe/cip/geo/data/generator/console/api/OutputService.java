package com.att.bdcoe.cip.geo.data.generator.console.api;


import com.att.bdcoe.cip.geo.data.generator.model.Output;

import java.util.List;

public interface OutputService {
    public List<Output> getLocation();
    public List<Output> getNonLocation();

}
