package com.att.bdcoe.cip.geo.data.generator.console.api;

import java.lang.ArrayIndexOutOfBoundsException;

public enum FileType {
    Scenario(0),
    Job(1);
    private static String[] fileExtension = {"scenario","job"};
    private int value;
    private FileType(int value){
        this.value = value;
    }
    public int getValue() {
        return value;
    }
    public static String getFileExtension(FileType i) {
        try {
            return fileExtension[i.getValue()];
        }catch(ArrayIndexOutOfBoundsException ex) {
            return "*";
        }
    }
}
