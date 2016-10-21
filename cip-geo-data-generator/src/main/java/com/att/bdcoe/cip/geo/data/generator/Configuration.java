package com.att.bdcoe.cip.geo.data.generator;

import java.util.List;

public interface Configuration {
    boolean isConsoleMode();

    String getDefaultOptionsFilename();

    List<String> getOptionFilenames();

    int getConsolePort();

    String getOutputPath();

    String getFactoryClassName();

    String getFactoryPakageName();

    String getWifiOutputPath();

    boolean hasErrors();

    public boolean isOutputPartitioned();

    public int getPartitionsNumber();

    public String getDelimiter();
}
