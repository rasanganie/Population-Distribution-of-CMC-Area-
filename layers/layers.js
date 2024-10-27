var wms_layers = [];

var format_WesternProvince_0 = new ol.format.GeoJSON();
var features_WesternProvince_0 = format_WesternProvince_0.readFeatures(json_WesternProvince_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WesternProvince_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WesternProvince_0.addFeatures(features_WesternProvince_0);
var lyr_WesternProvince_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WesternProvince_0, 
                style: style_WesternProvince_0,
                popuplayertitle: "Western Province",
                interactive: true,
                title: '<img src="styles/legend/WesternProvince_0.png" /> Western Province'
            });
var format_CMC_boundary_1 = new ol.format.GeoJSON();
var features_CMC_boundary_1 = format_CMC_boundary_1.readFeatures(json_CMC_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMC_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMC_boundary_1.addFeatures(features_CMC_boundary_1);
var lyr_CMC_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CMC_boundary_1, 
                style: style_CMC_boundary_1,
                popuplayertitle: "CMC_boundary",
                interactive: true,
    title: 'CMC_boundary<br />\
    <img src="styles/legend/CMC_boundary_1_0.png" /> 653 - 2000<br />\
    <img src="styles/legend/CMC_boundary_1_1.png" /> 2000 - 4000<br />\
    <img src="styles/legend/CMC_boundary_1_2.png" /> 4000 - 6000<br />\
    <img src="styles/legend/CMC_boundary_1_3.png" /> 6000 - 8000<br />\
    <img src="styles/legend/CMC_boundary_1_4.png" /> 8000 - 10000<br />\
    <img src="styles/legend/CMC_boundary_1_5.png" /> 10000 - 12000<br />\
    <img src="styles/legend/CMC_boundary_1_6.png" /> 12000 - 14000<br />\
    <img src="styles/legend/CMC_boundary_1_7.png" /> 14000 - 16000<br />\
    <img src="styles/legend/CMC_boundary_1_8.png" /> 16000 - 18000<br />\
    <img src="styles/legend/CMC_boundary_1_9.png" /> 18000 - 20000<br />\
    <img src="styles/legend/CMC_boundary_1_10.png" /> 20000 - 22000<br />\
    <img src="styles/legend/CMC_boundary_1_11.png" /> 22000 - 24000<br />\
    <img src="styles/legend/CMC_boundary_1_12.png" /> 24000 - 26000<br />\
    <img src="styles/legend/CMC_boundary_1_13.png" /> 26000 - 27776<br />'
        });
var format_MinorRoads_2 = new ol.format.GeoJSON();
var features_MinorRoads_2 = format_MinorRoads_2.readFeatures(json_MinorRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinorRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinorRoads_2.addFeatures(features_MinorRoads_2);
var lyr_MinorRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinorRoads_2, 
                style: style_MinorRoads_2,
                popuplayertitle: "Minor Roads",
                interactive: true,
                title: '<img src="styles/legend/MinorRoads_2.png" /> Minor Roads'
            });
var format_MajorRoads_3 = new ol.format.GeoJSON();
var features_MajorRoads_3 = format_MajorRoads_3.readFeatures(json_MajorRoads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_3.addFeatures(features_MajorRoads_3);
var lyr_MajorRoads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_3, 
                style: style_MajorRoads_3,
                popuplayertitle: "Major Roads",
                interactive: true,
                title: '<img src="styles/legend/MajorRoads_3.png" /> Major Roads'
            });
var format_TransportationNodes_4 = new ol.format.GeoJSON();
var features_TransportationNodes_4 = format_TransportationNodes_4.readFeatures(json_TransportationNodes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportationNodes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportationNodes_4.addFeatures(features_TransportationNodes_4);
var lyr_TransportationNodes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportationNodes_4, 
                style: style_TransportationNodes_4,
                popuplayertitle: "Transportation Nodes",
                interactive: true,
                title: '<img src="styles/legend/TransportationNodes_4.png" /> Transportation Nodes'
            });

lyr_WesternProvince_0.setVisible(true);lyr_CMC_boundary_1.setVisible(true);lyr_MinorRoads_2.setVisible(true);lyr_MajorRoads_3.setVisible(true);lyr_TransportationNodes_4.setVisible(true);
var layersList = [lyr_WesternProvince_0,lyr_CMC_boundary_1,lyr_MinorRoads_2,lyr_MajorRoads_3,lyr_TransportationNodes_4];
lyr_WesternProvince_0.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_CMC_boundary_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_MinorRoads_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_MajorRoads_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_TransportationNodes_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_WesternProvince_0.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_CMC_boundary_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_MinorRoads_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_MajorRoads_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TransportationNodes_4.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_WesternProvince_0.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'RANK_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', });
lyr_CMC_boundary_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_NO': 'no label', 'GND_C': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_C': 'no label', 'GN_UID': 'no label', 'OID_': 'no label', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'RANK_POP': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'RATIOSEX': 'no label', 'RANK_SR': 'no label', '0TO14': 'no label', '15TO59': 'no label', 'OVER60': 'no label', 'RATIODEPEN': 'no label', 'RANK_DR': 'no label', 'BUDDHIST': 'no label', 'HINDU': 'no label', 'ISLAM': 'no label', 'ROMANCATHO': 'no label', 'OTHERCHRIS': 'no label', 'OTHERELIGI': 'no label', 'SINHALESE': 'no label', 'SRILANKATA': 'no label', 'INDIANTAMI': 'no label', 'SRILANKAMO': 'no label', 'OTHERETHGR': 'no label', 'NAME_DIST_': 'no label', 'NUM_GN': 'no label', 'Area': 'no label', });
lyr_MinorRoads_2.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_MajorRoads_3.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_TransportationNodes_4.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_TransportationNodes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});