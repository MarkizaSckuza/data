package com.att.bdcoe.cip.geo.data.core.gen;


import com.att.bdcoe.cip.geo.data.core.Circle;
import com.att.bdcoe.cip.geo.data.core.Coord;
import com.att.bdcoe.cip.geo.data.core.Route;

import java.util.Collection;
import java.util.List;
import java.util.Map;

public interface WiFiSesionManager<W extends Circle,R extends Route,C extends Coord> {
    public String getNewSesionId();
    public void submitWiFiZones(Collection<W> wiFiZones);
    public void addWiFiZonePoints(List<R> routes);
    public Map<C,W> cordToCircleMap();
}
