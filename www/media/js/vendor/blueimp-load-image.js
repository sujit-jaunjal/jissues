!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}([function(e,t,i){var n;!function(r){"use strict";function o(e,t,i){var n,r=document.createElement("img");if(r.onerror=function(n){return o.onerror(r,n,e,t,i)},r.onload=function(n){return o.onload(r,n,e,t,i)},o.isInstanceOf("Blob",e)||o.isInstanceOf("File",e))n=r._objectURL=o.createObjectURL(e);else{if("string"!=typeof e)return!1;n=e,i&&i.crossOrigin&&(r.crossOrigin=i.crossOrigin)}return n?(r.src=n,r):o.readFile(e,function(e){var i=e.target;i&&i.result?r.src=i.result:t&&t(e)})}var a=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;function s(e,t){!e._objectURL||t&&t.noRevoke||(o.revokeObjectURL(e._objectURL),delete e._objectURL)}o.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},o.transform=function(e,t,i,n,r){i(o.scale(e,t,r),r)},o.onerror=function(e,t,i,n,r){s(e,r),n&&n.call(e,t)},o.onload=function(e,t,i,n,r){s(e,r),n&&o.transform(e,r,n,i,{})},o.transformCoordinates=function(){},o.getTransformedOptions=function(e,t){var i,n,r,o,a=t.aspectRatio;if(!a)return t;for(n in i={},t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i.crop=!0,(r=e.naturalWidth||e.width)/(o=e.naturalHeight||e.height)>a?(i.maxWidth=o*a,i.maxHeight=o):(i.maxWidth=r,i.maxHeight=r/a),i},o.renderImageToCanvas=function(e,t,i,n,r,o,a,s,l,c){return e.getContext("2d").drawImage(t,i,n,r,o,a,s,l,c),e},o.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},o.scale=function(e,t,i){t=t||{};var n,r,a,s,l,c,u,d,f,g,h,p=document.createElement("canvas"),m=e.getContext||o.hasCanvasOption(t)&&p.getContext,S=e.naturalWidth||e.width,b=e.naturalHeight||e.height,x=S,y=b;function v(){var e=Math.max((a||x)/x,(s||y)/y);e>1&&(x*=e,y*=e)}function P(){var e=Math.min((n||x)/x,(r||y)/y);e<1&&(x*=e,y*=e)}if(m&&(u=(t=o.getTransformedOptions(e,t,i)).left||0,d=t.top||0,t.sourceWidth?(l=t.sourceWidth,void 0!==t.right&&void 0===t.left&&(u=S-l-t.right)):l=S-u-(t.right||0),t.sourceHeight?(c=t.sourceHeight,void 0!==t.bottom&&void 0===t.top&&(d=b-c-t.bottom)):c=b-d-(t.bottom||0),x=l,y=c),n=t.maxWidth,r=t.maxHeight,a=t.minWidth,s=t.minHeight,m&&n&&r&&t.crop?(x=n,y=r,(h=l/c-n/r)<0?(c=r*l/n,void 0===t.top&&void 0===t.bottom&&(d=(b-c)/2)):h>0&&(l=n*c/r,void 0===t.left&&void 0===t.right&&(u=(S-l)/2))):((t.contain||t.cover)&&(a=n=n||a,s=r=r||s),t.cover?(P(),v()):(v(),P())),m){if((f=t.pixelRatio)>1&&(p.style.width=x+"px",p.style.height=y+"px",x*=f,y*=f,p.getContext("2d").scale(f,f)),(g=t.downsamplingRatio)>0&&g<1&&x<l&&y<c)for(;l*g>x;)p.width=l*g,p.height=c*g,o.renderImageToCanvas(p,e,u,d,l,c,0,0,p.width,p.height),l=p.width,c=p.height,(e=document.createElement("canvas")).width=l,e.height=c,o.renderImageToCanvas(e,p,0,0,l,c,0,0,l,c);return p.width=x,p.height=y,o.transformCoordinates(p,t),o.renderImageToCanvas(p,e,u,d,l,c,0,0,x,y)}return e.width=x,e.height=y,e},o.createObjectURL=function(e){return!!a&&a.createObjectURL(e)},o.revokeObjectURL=function(e){return!!a&&a.revokeObjectURL(e)},o.readFile=function(e,t,i){if(window.FileReader){var n=new FileReader;if(n.onload=n.onerror=t,n[i=i||"readAsDataURL"])return n[i](e),n}return!1},void 0===(n=function(){return o}.call(t,i,t,e))||(e.exports=n)}(window)},function(e,t,i){var n,r,o;!function(a){"use strict";r=[i(0)],void 0===(o="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=o)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){return(this.slice||this.webkitSlice||this.mozSlice).apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,i,n,r){n=n||{},r=r||{};var o=this,a=n.maxMetaDataSize||262144;!!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice)&&e.readFile(e.blobSlice.call(t,0,a),function(t){if(t.target.error)return console.log(t.target.error),void i(r);var a,s,l,c,u=t.target.result,d=new DataView(u),f=2,g=d.byteLength-4,h=f;if(65496===d.getUint16(0)){for(;f<g&&((a=d.getUint16(f))>=65504&&a<=65519||65534===a);){if(f+(s=d.getUint16(f+2)+2)>d.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(l=e.metaDataParsers.jpeg[a])for(c=0;c<l.length;c+=1)l[c].call(o,d,f,s,r,n);h=f+=s}!n.disableImageHead&&h>6&&(u.slice?r.imageHead=u.slice(0,h):r.imageHead=new Uint8Array(u).subarray(0,h))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(r)},"readAsArrayBuffer")||i(r)},e.hasMetaOption=function(e){return e.meta};var i=e.transform;e.transform=function(t,n,r,o,a){e.hasMetaOption(n||{})?e.parseMetaData(o,function(a){i.call(e,t,n,r,o,a)},n,a):i.apply(e,arguments)}})},function(e,t,i){var n,r,o;!function(a){"use strict";r=[i(0),i(1)],void 0===(o="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=o)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,i){var n,r,o;if(i&&!(t+i>e.byteLength)){for(n=[],r=0;r<i;r+=1)o=e.getUint8(t+r),n.push((o<16?"0":"")+o.toString(16));return"data:image/jpeg,%"+n.join("%")}console.log("Invalid Exif data: Invalid thumbnail data.")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,i,n,r,o,a){var s,l,c,u,d,f,g=e.exifTagTypes[r];if(g){if(!((l=(s=g.size*o)>4?i+t.getUint32(n+8,a):n+8)+s>t.byteLength)){if(1===o)return g.getValue(t,l,a);for(c=[],u=0;u<o;u+=1)c[u]=g.getValue(t,l+u*g.size,a);if(g.ascii){for(d="",u=0;u<c.length&&"\0"!==(f=c[u]);u+=1)d+=f;return d}return c}console.log("Invalid Exif data: Invalid data offset.")}else console.log("Invalid Exif data: Invalid tag type.")},e.parseExifTag=function(t,i,n,r,o){var a=t.getUint16(n,r);o.exif[a]=e.getExifValue(t,i,n,t.getUint16(n+2,r),t.getUint32(n+4,r),r)},e.parseExifTags=function(e,t,i,n,r){var o,a,s;if(i+6>e.byteLength)console.log("Invalid Exif data: Invalid directory offset.");else{if(!((a=i+2+12*(o=e.getUint16(i,n)))+4>e.byteLength)){for(s=0;s<o;s+=1)this.parseExifTag(e,t,i+2+12*s,n,r);return e.getUint32(a,n)}console.log("Invalid Exif data: Invalid directory size.")}},e.parseExifData=function(t,i,n,r,o){if(!o.disableExif){var a,s,l,c=i+10;if(1165519206===t.getUint32(i+4))if(c+8>t.byteLength)console.log("Invalid Exif data: Invalid segment size.");else if(0===t.getUint16(i+8)){switch(t.getUint16(c)){case 18761:a=!0;break;case 19789:a=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}42===t.getUint16(c+2,a)?(s=t.getUint32(c+4,a),r.exif=new e.ExifMap,(s=e.parseExifTags(t,c,c+s,a,r))&&!o.disableExifThumbnail&&(l={exif:{}},s=e.parseExifTags(t,c,c+s,a,l),l.exif[513]&&(r.exif.Thumbnail=e.getExifThumbnail(t,c+l.exif[513],l.exif[514]))),r.exif[34665]&&!o.disableExifSub&&e.parseExifTags(t,c,c+r.exif[34665],a,r),r.exif[34853]&&!o.disableExifGps&&e.parseExifTags(t,c,c+r.exif[34853],a,r)):console.log("Invalid Exif data: Missing TIFF marker.")}else console.log("Invalid Exif data: Missing byte alignment offset.")}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)})},function(e,t,i){i(4),e.exports=i(7)},function(e,t,i){e.exports=i(0),i(1),i(2),i(5),i(6)},function(e,t,i){var n,r,o;!function(a){"use strict";r=[i(0),i(2)],void 0===(o="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=o)}(function(e){"use strict";e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,i=e.tags,n=e.map;for(t in i)i.hasOwnProperty(t)&&(n[i[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e])&&(i[t]=this.getText(t));return i}})},function(e,t,i){var n,r,o;!function(a){"use strict";r=[i(0)],void 0===(o="function"==typeof(n=a)?n.apply(t,r):n)||(e.exports=o)}(function(e){"use strict";var t=e.hasCanvasOption,i=e.hasMetaOption,n=e.transformCoordinates,r=e.getTransformedOptions;e.hasCanvasOption=function(i){return!!i.orientation||t.call(e,i)},e.hasMetaOption=function(t){return!0===t.orientation||i.call(e,t)},e.transformCoordinates=function(t,i){n.call(e,t,i);var r=t.getContext("2d"),o=t.width,a=t.height,s=t.style.width,l=t.style.height,c=i.orientation;if(c&&!(c>8))switch(c>4&&(t.width=a,t.height=o,t.style.width=l,t.style.height=s),c){case 2:r.translate(o,0),r.scale(-1,1);break;case 3:r.translate(o,a),r.rotate(Math.PI);break;case 4:r.translate(0,a),r.scale(1,-1);break;case 5:r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:r.rotate(.5*Math.PI),r.translate(0,-a);break;case 7:r.rotate(.5*Math.PI),r.translate(o,-a),r.scale(-1,1);break;case 8:r.rotate(-.5*Math.PI),r.translate(-o,0)}},e.getTransformedOptions=function(t,i,n){var o,a,s=r.call(e,t,i),l=s.orientation;if(!0===l&&n&&n.exif&&(l=n.exif.get("Orientation")),!l||l>8||1===l)return s;for(a in o={},s)s.hasOwnProperty(a)&&(o[a]=s[a]);switch(o.orientation=l,l){case 2:o.left=s.right,o.right=s.left;break;case 3:o.left=s.right,o.top=s.bottom,o.right=s.left,o.bottom=s.top;break;case 4:o.top=s.bottom,o.bottom=s.top;break;case 5:o.left=s.top,o.top=s.left,o.right=s.bottom,o.bottom=s.right;break;case 6:o.left=s.top,o.top=s.right,o.right=s.bottom,o.bottom=s.left;break;case 7:o.left=s.bottom,o.top=s.right,o.right=s.top,o.bottom=s.left;break;case 8:o.left=s.bottom,o.top=s.left,o.right=s.top,o.bottom=s.right}return o.orientation>4&&(o.maxWidth=s.maxHeight,o.maxHeight=s.maxWidth,o.minWidth=s.minHeight,o.minHeight=s.minWidth,o.sourceWidth=s.sourceHeight,o.sourceHeight=s.sourceWidth),o}})},function(e,t){}]);