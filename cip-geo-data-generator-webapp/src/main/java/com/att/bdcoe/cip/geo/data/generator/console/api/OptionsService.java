package com.att.bdcoe.cip.geo.data.generator.console.api;

public interface OptionsService<T> {
	public T get();
	public void saveAs(T entity);
}
