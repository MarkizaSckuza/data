package com.att.bdcoe.cip.geo.data.generator.data;

import com.att.bdcoe.cip.geo.data.generator.model.Options;

import java.io.IOException;

public interface OptionsProvider {
	public Options read(String filename) throws IOException;
	public void write(String filename, Options options) throws IOException;
}
