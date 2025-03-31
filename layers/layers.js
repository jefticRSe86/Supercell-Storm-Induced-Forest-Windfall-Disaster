ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32634").setExtent([381013.224503, 5004723.803142, 396194.649503, 5017147.817615]);
var wms_layers = [];

var lyr_NRG_Begec_28072023_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NRG_Begec_28072023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NRG_Begec_28072023_0.png",
            attributions: ' ',
            projection: 'EPSG:32634',
            alwaysInRange: true,
            imageExtent: [381374.687003, 5005206.283943, 395833.187003, 5016665.336814]
        })
    });
var lyr_RGB_Begec_28072023_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB_Begec_28072023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_Begec_28072023_1.png",
            attributions: ' ',
            projection: 'EPSG:32634',
            alwaysInRange: true,
            imageExtent: [381374.687003, 5005206.283943, 395833.187003, 5016665.336814]
        })
    });
var lyr_NRG_Begec_18072023_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NRG_Begec_18072023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NRG_Begec_18072023_2.png",
            attributions: ' ',
            projection: 'EPSG:32634',
            alwaysInRange: true,
            imageExtent: [381374.687003, 5005206.283943, 395833.187003, 5016665.336814]
        })
    });
var lyr_RGB_Begec_18072023_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB_Begec_18072023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_Begec_18072023_3.png",
            attributions: ' ',
            projection: 'EPSG:32634',
            alwaysInRange: true,
            imageExtent: [381374.687003, 5005206.283943, 395833.187003, 5016665.336814]
        })
    });
var lyr_BegecsettlementGoogleImage_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Begec settlement Google Image<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BegecsettlementGoogleImage_4.png",
            attributions: ' ',
            projection: 'EPSG:32634',
            alwaysInRange: true,
            imageExtent: [391284.874881, 5009488.868347, 393092.187381, 5010921.249956]
        })
    });
var format_PrePostNDVIdisasterchangedetectionlayer_5 = new ol.format.GeoJSON();
var features_PrePostNDVIdisasterchangedetectionlayer_5 = format_PrePostNDVIdisasterchangedetectionlayer_5.readFeatures(json_PrePostNDVIdisasterchangedetectionlayer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32634'});
var jsonSource_PrePostNDVIdisasterchangedetectionlayer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrePostNDVIdisasterchangedetectionlayer_5.addFeatures(features_PrePostNDVIdisasterchangedetectionlayer_5);
var lyr_PrePostNDVIdisasterchangedetectionlayer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrePostNDVIdisasterchangedetectionlayer_5, 
                style: style_PrePostNDVIdisasterchangedetectionlayer_5,
                popuplayertitle: 'Pre-Post NDVI disaster change detection layer',
                interactive: true,
                title: '<img src="styles/legend/PrePostNDVIdisasterchangedetectionlayer_5.png" /> Pre-Post NDVI disaster change detection layer'
            });
var group_Changedetectionlayer = new ol.layer.Group({
                                layers: [lyr_BegecsettlementGoogleImage_4,lyr_PrePostNDVIdisasterchangedetectionlayer_5,],
                                fold: "open",
                                title: 'Change detection layer'});
var group_PreDisasterImages18072023 = new ol.layer.Group({
                                layers: [lyr_NRG_Begec_18072023_2,lyr_RGB_Begec_18072023_3,],
                                fold: "open",
                                title: 'Pre-Disaster Images 18.07.2023.'});
var group_PostDisasterImages28072023 = new ol.layer.Group({
                                layers: [lyr_NRG_Begec_28072023_0,lyr_RGB_Begec_28072023_1,],
                                fold: "open",
                                title: 'Post-Disaster Images 28.07.2023.'});

lyr_NRG_Begec_28072023_0.setVisible(true);lyr_RGB_Begec_28072023_1.setVisible(true);lyr_NRG_Begec_18072023_2.setVisible(true);lyr_RGB_Begec_18072023_3.setVisible(true);lyr_BegecsettlementGoogleImage_4.setVisible(true);lyr_PrePostNDVIdisasterchangedetectionlayer_5.setVisible(true);
var layersList = [group_PostDisasterImages28072023,group_PreDisasterImages18072023,group_Changedetectionlayer];
lyr_PrePostNDVIdisasterchangedetectionlayer_5.set('fieldAliases', {'DN': 'DN', });
lyr_PrePostNDVIdisasterchangedetectionlayer_5.set('fieldImages', {'DN': 'TextEdit', });
lyr_PrePostNDVIdisasterchangedetectionlayer_5.set('fieldLabels', {'DN': 'hidden field', });
lyr_PrePostNDVIdisasterchangedetectionlayer_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});