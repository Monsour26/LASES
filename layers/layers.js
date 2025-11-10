var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_SoilType_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:da_soil",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Soil Type',
                            popuplayertitle: 'Soil Type',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SoilType_2, 1]);
var lyr_GroundWaterAvailability_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:groundwater",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Ground Water Availability',
                            popuplayertitle: 'Ground Water Availability',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GroundWaterAvailability_3, 1]);
var lyr_RoadPavementandSurfaceType_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:dpwh_roadpavement_20201106",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Road (Pavement and Surface Type)',
                            popuplayertitle: 'Road (Pavement and Surface Type)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RoadPavementandSurfaceType_4, 1]);
var lyr_SlopeMapofLaguna_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:slp_laguna",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Slope Map of Laguna',
                            popuplayertitle: 'Slope Map of Laguna',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SlopeMapofLaguna_5, 1]);
var lyr_Flood110000Susceptibility_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:flood10ksuscep",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Flood 1: 10,000 Susceptibility',
                            popuplayertitle: 'Flood 1: 10,000 Susceptibility',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Flood110000Susceptibility_6, 1]);
var lyr_Landslide110000Susceptibility_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:landslide10ksusceptibility",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landslide 1: 10,000 Susceptibility',
                            popuplayertitle: 'Landslide 1: 10,000 Susceptibility',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landslide110000Susceptibility_7, 1]);
var lyr_ActivefaultsValleyFaultSystem_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.geoportal.gov.ph/geoserver/ows?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geoportal:ground_rupture_10k",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Active faults (Valley Fault System)',
                            popuplayertitle: 'Active faults (Valley Fault System)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ActivefaultsValleyFaultSystem_8, 1]);

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SoilType_2.setVisible(true);lyr_GroundWaterAvailability_3.setVisible(true);lyr_RoadPavementandSurfaceType_4.setVisible(true);lyr_SlopeMapofLaguna_5.setVisible(true);lyr_Flood110000Susceptibility_6.setVisible(true);lyr_Landslide110000Susceptibility_7.setVisible(true);lyr_ActivefaultsValleyFaultSystem_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_SoilType_2,lyr_GroundWaterAvailability_3,lyr_RoadPavementandSurfaceType_4,lyr_SlopeMapofLaguna_5,lyr_Flood110000Susceptibility_6,lyr_Landslide110000Susceptibility_7,lyr_ActivefaultsValleyFaultSystem_8];
