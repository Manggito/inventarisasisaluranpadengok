var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SUNGAI_1 = new ol.format.GeoJSON();
var features_SUNGAI_1 = format_SUNGAI_1.readFeatures(json_SUNGAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_1.addFeatures(features_SUNGAI_1);
var lyr_SUNGAI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_1, 
                style: style_SUNGAI_1,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_1.png" /> SUNGAI'
            });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_LUAS_FUNGSIONAL_3 = new ol.format.GeoJSON();
var features_LUAS_FUNGSIONAL_3 = format_LUAS_FUNGSIONAL_3.readFeatures(json_LUAS_FUNGSIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUAS_FUNGSIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUAS_FUNGSIONAL_3.addFeatures(features_LUAS_FUNGSIONAL_3);
var lyr_LUAS_FUNGSIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUAS_FUNGSIONAL_3, 
                style: style_LUAS_FUNGSIONAL_3,
                popuplayertitle: 'LUAS_FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/LUAS_FUNGSIONAL_3.png" /> LUAS_FUNGSIONAL'
            });
var format_JALURPIPA_4 = new ol.format.GeoJSON();
var features_JALURPIPA_4 = format_JALURPIPA_4.readFeatures(json_JALURPIPA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALURPIPA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALURPIPA_4.addFeatures(features_JALURPIPA_4);
var lyr_JALURPIPA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALURPIPA_4, 
                style: style_JALURPIPA_4,
                popuplayertitle: 'JALUR PIPA',
                interactive: true,
                title: '<img src="styles/legend/JALURPIPA_4.png" /> JALUR PIPA'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_5 = format_KETERANGAN_KERUSAKAN_SALURAN_5.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_5);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_5, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_5,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_5_0.png" /> Baik<br />' });
var format_JENIS_SALURAN_6 = new ol.format.GeoJSON();
var features_JENIS_SALURAN_6 = format_JENIS_SALURAN_6.readFeatures(json_JENIS_SALURAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_SALURAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_SALURAN_6.addFeatures(features_JENIS_SALURAN_6);
var lyr_JENIS_SALURAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS_SALURAN_6, 
                style: style_JENIS_SALURAN_6,
                popuplayertitle: 'JENIS_SALURAN',
                interactive: true,
    title: 'JENIS_SALURAN<br />\
    <img src="styles/legend/JENIS_SALURAN_6_0.png" /> Saluran Sekunder<br />' });
var format_Tikungan_7 = new ol.format.GeoJSON();
var features_Tikungan_7 = format_Tikungan_7.readFeatures(json_Tikungan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_7.addFeatures(features_Tikungan_7);
var lyr_Tikungan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_7, 
                style: style_Tikungan_7,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_7.png" /> Tikungan'
            });
var format_Titik_Per50_m_8 = new ol.format.GeoJSON();
var features_Titik_Per50_m_8 = format_Titik_Per50_m_8.readFeatures(json_Titik_Per50_m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per50_m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per50_m_8.addFeatures(features_Titik_Per50_m_8);
var lyr_Titik_Per50_m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per50_m_8, 
                style: style_Titik_Per50_m_8,
                popuplayertitle: 'Titik_Per-50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per50_m_8.png" /> Titik_Per-50_m'
            });
var format_Box_Alva_Valve_9 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_9 = format_Box_Alva_Valve_9.readFeatures(json_Box_Alva_Valve_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_9.addFeatures(features_Box_Alva_Valve_9);
var lyr_Box_Alva_Valve_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_9, 
                style: style_Box_Alva_Valve_9,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_9.png" /> Box_Alva_Valve'
            });
var format_Box_Gate_Valve_10 = new ol.format.GeoJSON();
var features_Box_Gate_Valve_10 = format_Box_Gate_Valve_10.readFeatures(json_Box_Gate_Valve_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Gate_Valve_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Gate_Valve_10.addFeatures(features_Box_Gate_Valve_10);
var lyr_Box_Gate_Valve_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Gate_Valve_10, 
                style: style_Box_Gate_Valve_10,
                popuplayertitle: 'Box_Gate_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Gate_Valve_10.png" /> Box_Gate_Valve'
            });
var format_Rumah_Pompa_11 = new ol.format.GeoJSON();
var features_Rumah_Pompa_11 = format_Rumah_Pompa_11.readFeatures(json_Rumah_Pompa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_11.addFeatures(features_Rumah_Pompa_11);
var lyr_Rumah_Pompa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_11, 
                style: style_Rumah_Pompa_11,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_11.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Box_Alva_Valve_9,lyr_Box_Gate_Valve_10,lyr_Rumah_Pompa_11,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_7,lyr_Titik_Per50_m_8,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SUNGAI_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_LUAS_FUNGSIONAL_3.setVisible(true);lyr_JALURPIPA_4.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_5.setVisible(true);lyr_JENIS_SALURAN_6.setVisible(true);lyr_Tikungan_7.setVisible(true);lyr_Titik_Per50_m_8.setVisible(true);lyr_Box_Alva_Valve_9.setVisible(true);lyr_Box_Gate_Valve_10.setVisible(true);lyr_Rumah_Pompa_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SUNGAI_1,lyr_JALAN_2,lyr_LUAS_FUNGSIONAL_3,lyr_JALURPIPA_4,lyr_KETERANGAN_KERUSAKAN_SALURAN_5,lyr_JENIS_SALURAN_6,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LUAS_FUNGSIONAL_3.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_JALURPIPA_4.set('fieldAliases', {'Id': 'Id', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldAliases', {'Id': 'Id', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS_SALURAN_6.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_Tikungan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Titik_Per50_m_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Box_Alva_Valve_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Box_Gate_Valve_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Rumah_Pompa_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_SUNGAI_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LUAS_FUNGSIONAL_3.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_JALURPIPA_4.set('fieldImages', {'Id': 'Range', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldImages', {'Id': 'Range', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS_SALURAN_6.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_Tikungan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Titik_Per50_m_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Box_Alva_Valve_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Box_Gate_Valve_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Rumah_Pompa_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_SUNGAI_1.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LUAS_FUNGSIONAL_3.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', });
lyr_JALURPIPA_4.set('fieldLabels', {'Id': 'hidden field', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_5.set('fieldLabels', {'Id': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS_SALURAN_6.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'KETERANGAN': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_Tikungan_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'ALAMAT': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Titik_Per50_m_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'ALAMAT': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Box_Alva_Valve_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'ALAMAT': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Box_Gate_Valve_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'ALAMAT': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NAMA': 'inline label - visible with data', 'ALAMAT': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});