!function(e){function n(n){for(var o,l,c=n[0],d=n[1],r=n[2],u=0,_=[];u<c.length;u++)l=c[u],t[l]&&_.push(t[l][0]),t[l]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);for(s&&s(n);_.length;)_.shift()();return a.push.apply(a,r||[]),i()}function i(){for(var e,n=0;n<a.length;n++){for(var i=a[n],o=!0,c=1;c<i.length;c++){var d=i[c];0!==t[d]&&(o=!1)}o&&(a.splice(n--,1),e=l(l.s=i[0]))}return e}var o={},t={0:0},a=[];function l(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=o,l.d=function(e,n,i){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(i,o,function(n){return e[n]}.bind(null,o));return i},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=n,c=c.slice();for(var r=0;r<c.length;r++)n(c[r]);var s=d;a.push([0,1]),i()}({"/KVF":function(e,n,i){var o={"./en":"7dT6","./en.json":"7dT6"};function t(e){var n=a(e);return i(n)}function a(e){var n=o[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(o)},t.resolve=a,e.exports=t,t.id="/KVF"},"/kYV":function(e,n,i){},0:function(e,n,i){i("201c"),e.exports=i("LiWt")},"2E0U":function(e,n,i){"use strict";var o=function(e){return e.find("grandlyon.charge")};i.d(n,"a",function(){return o});n.b={charge:{doctype:"grandlyon.charge",attributes:{},relationships:{}}}},"7dT6":function(e){e.exports={Nav:{todos:"Todos",hello_nav_2:"Second",hello_nav_3:"Third"}}},Kxp2:function(e,n,i){"use strict";var o=i("q1tI"),t=i.n(o),a=i("zGKU"),l=i("SUMQ"),c=i("OsJn"),d=Object(l.withStyles)({card:{maxWidth:275,marginBottom:50},classes:{marginBottom:16,fontSize:14},pos:{marginBottom:12}})(function(e){var n=e.chargeList;return n&&n.length?t.a.createElement("div",null,t.a.createElement("h2",null,"Données Enedis:"),t.a.createElement("div",null,t.a.createElement(c.a,{chartType:"LineChart",width:"100%",height:"400px",data:n,options:{title:"Courbe de charge",legend:{position:"bottom"},hAxis:{format:"dd.MM.yyyy"}}}))):null}),r=i("SH7X"),s=i("2E0U"),u=function(e){var n=[["Time","Energie active (en W)"]];for(var i in e)""!==e[i].Valeur&&new Date(e[i].Horodate)<new Date("2017-11-29")&&n.push([new Date(e[i].Horodate),e[i].Valeur]);return n};n.a=Object(r.queryConnect)({charges:{query:s.a,as:"todos"}})(function(e){var n=e.data,i=e.fetchStatus,o="loading"===i||"pending"===i;return t.a.createElement("div",{className:"todos"},o?t.a.createElement(a.a,{size:"xxlarge",middle:!0}):t.a.createElement("div",null,t.a.createElement(d,{chargeList:u(n)})))})},LiWt:function(e,n,i){"use strict";i.r(n);i("/kYV");var o,t=i("q1tI"),a=i.n(t),l=i("SH7X"),c=i.n(l),d=i("i8i4"),r=i("XOpu"),s=i("2E0U"),u=function(e,n){return/^\{\{\.[a-zA-Z]*\}\}$/.test(e)?n:e};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("[role=application]").dataset,n=u(e.cozyIconPath,i("ZAKO")),t=u(e.cozyAppNamePrefix||i("pZg0").name_prefix,""),_=u(e.cozyAppName,i("pZg0").name);o=u(e.cozyLocale,"en");var b=window.location?window.location.protocol:"https:",f=new c.a({uri:"".concat(b,"//").concat(e.cozyDomain),token:e.cozyToken,schema:s.b});cozy.bar.init({appName:_,appNamePrefix:t,iconPath:n,lang:o,replaceTitleOnMobile:!0}),function(e){var n=i("xYwX").default;Object(d.render)(a.a.createElement(r.b,{lang:o,dictRequire:function(e){return i("/KVF")("./".concat(e))}},a.a.createElement(l.CozyProvider,{client:e},a.a.createElement(n,null))),document.querySelector("[role=application]"))}(f)})},ZAKO:function(e,n){e.exports="/img/icon.987172dfb4476e75424507f2fb3cb962.svg"},fH6n:function(e,n,i){"use strict";var o=i("q1tI"),t=i.n(o),a=i("B7OX"),l=i("XOpu"),c=i("uNOt"),d=i("4BeY"),r=i.n(d),s=i("IaFt"),u=i.n(s),_=new r.a({id:"icon-bullet-point_d352b52b7796892e87fcb971b42de3a6",use:"icon-bullet-point_d352b52b7796892e87fcb971b42de3a6-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-bullet-point_d352b52b7796892e87fcb971b42de3a6">\n  <path d="M14,5c0,-1.656 -1.344,-3 -3,-3l-6,0c-1.656,0 -3,1.344 -3,3l0,6c0,1.656 1.344,3 3,3l6,0c1.656,0 3,-1.344 3,-3l0,-6Z" />\n</symbol>'}),b=(u.a.add(_),_);n.a=Object(l.c)()(function(e){var n=e.t;return t.a.createElement("aside",{className:"o-sidebar"},t.a.createElement("nav",null,t.a.createElement("ul",{className:"c-nav"},t.a.createElement("li",{className:"c-nav-item"},t.a.createElement(c.a,{to:"/chargeDisplay",className:"c-nav-link",activeClassName:"is-active"},t.a.createElement(a.a,{className:"c-nav-icon",icon:b}),n("Nav.todos"))))))})},nY3O:function(e,n,i){var o={"./_lib/build_formatting_tokens_reg_exp/index":"kOWh","./ar/build_distance_in_words_locale/index":"XxX6","./ar/build_format_locale/index":"alis","./ar/index":"EDRf","./bg/build_distance_in_words_locale/index":"7K3h","./bg/build_format_locale/index":"RrdL","./bg/index":"isx8","./ca/build_distance_in_words_locale/index":"wqqj","./ca/build_format_locale/index":"qcV0","./ca/index":"Vwa+","./cs/build_distance_in_words_locale/index":"ZKDM","./cs/build_format_locale/index":"ipyF","./cs/index":"dvhP","./da/build_distance_in_words_locale/index":"2Mgc","./da/build_format_locale/index":"Gned","./da/index":"7ur/","./de/build_distance_in_words_locale/index":"5IWf","./de/build_format_locale/index":"THCn","./de/index":"bgw5","./el/build_distance_in_words_locale/index":"o/GB","./el/build_format_locale/index":"8T9h","./el/index":"dH0v","./en/build_distance_in_words_locale/index":"LZbM","./en/build_format_locale/index":"6DAA","./en/index":"Us+F","./eo/build_distance_in_words_locale/index":"qrnn","./eo/build_format_locale/index":"Bl15","./eo/index":"UB7v","./es/build_distance_in_words_locale/index":"GEfZ","./es/build_format_locale/index":"O+zC","./es/index":"/S0t","./fi/build_distance_in_words_locale/index":"VHtQ","./fi/build_format_locale/index":"Oydx","./fi/index":"ndVD","./fil/build_distance_in_words_locale/index":"uq4p","./fil/build_format_locale/index":"d7hw","./fil/index":"pNfm","./fr/build_distance_in_words_locale/index":"IzMR","./fr/build_format_locale/index":"I3Zg","./fr/index":"LKA2","./hr/build_distance_in_words_locale/index":"DPvn","./hr/build_format_locale/index":"puw3","./hr/index":"L9Jq","./hu/build_distance_in_words_locale/index":"w2RQ","./hu/build_format_locale/index":"/0iD","./hu/index":"Nm+E","./id/build_distance_in_words_locale/index":"JbvB","./id/build_format_locale/index":"0wlw","./id/index":"A6C3","./is/build_distance_in_words_locale/index":"qzMC","./is/build_format_locale/index":"S3yD","./is/index":"N4bE","./it/build_distance_in_words_locale/index":"MDEp","./it/build_format_locale/index":"aUJd","./it/index":"hmb4","./ja/build_distance_in_words_locale/index":"nNvt","./ja/build_format_locale/index":"buui","./ja/index":"uAXs","./ko/build_distance_in_words_locale/index":"oEw+","./ko/build_format_locale/index":"9SQf","./ko/index":"iW8+","./mk/build_distance_in_words_locale/index":"nmwZ","./mk/build_format_locale/index":"htxJ","./mk/index":"GzBU","./nb/build_distance_in_words_locale/index":"SL1f","./nb/build_format_locale/index":"CJ5F","./nb/index":"73vv","./nl/build_distance_in_words_locale/index":"Uyu0","./nl/build_format_locale/index":"doCD","./nl/index":"hCQt","./pl/build_distance_in_words_locale/index":"FUBD","./pl/build_format_locale/index":"nOYf","./pl/index":"B6yL","./pt/build_distance_in_words_locale/index":"aTPA","./pt/build_format_locale/index":"TTT0","./pt/index":"gdks","./ro/build_distance_in_words_locale/index":"gI+A","./ro/build_format_locale/index":"njjO","./ro/index":"r2yp","./ru/build_distance_in_words_locale/index":"KmPx","./ru/build_format_locale/index":"UUBw","./ru/index":"nz/o","./sk/build_distance_in_words_locale/index":"q2Bs","./sk/build_format_locale/index":"9sxn","./sk/index":"Wqan","./sl/build_distance_in_words_locale/index":"mlv2","./sl/build_format_locale/index":"vHkZ","./sl/index":"KYSo","./sv/build_distance_in_words_locale/index":"UNBN","./sv/build_format_locale/index":"zTNB","./sv/index":"hxgj","./th/build_distance_in_words_locale/index":"XAGa","./th/build_format_locale/index":"We2s","./th/index":"Pk+z","./tr/build_distance_in_words_locale/index":"aFZF","./tr/build_format_locale/index":"jh7A","./tr/index":"3ZWG","./zh_cn/build_distance_in_words_locale/index":"KdB7","./zh_cn/build_format_locale/index":"l4EP","./zh_cn/index":"8tMq","./zh_tw/build_distance_in_words_locale/index":"vyyr","./zh_tw/build_format_locale/index":"uYH7","./zh_tw/index":"QPlQ"};function t(e){var n=a(e);return i(n)}function a(e){var n=o[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(o)},t.resolve=a,e.exports=t,t.id="nY3O"},pZg0:function(e,n){e.exports={name:"Cozytestapp",slug:"cozytestapp_original",icon:"icon.svg",categories:[],version:"0.1.0",licence:"AGPL-3.0",editor:"",source:"https://github.com/hsubtil/cozytestapp_original.git@build",developer:{name:"hsubtil",url:""},routes:{"/":{folder:"/",index:"index.html",public:!1}},permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET"]},charge:{description:"Auth to get data from enedis connector",type:"grandlyon.charge"}}}},qpCy:function(e,n,i){var o={"./arrow.svg":"P/8p","./check.svg":"9iSV","./dash.svg":"U9gP","./icon-album-add.svg":"5x66","./icon-album-remove.svg":"RV+3","./icon-album.svg":"9rpN","./icon-back.svg":"59c+","./icon-bottom-select.svg":"Knxi","./icon-bottom.svg":"pcTF","./icon-calendar.svg":"/B2L","./icon-check-circleless.svg":"1ECO","./icon-check.svg":"2EDk","./icon-clock.svg":"bcQu","./icon-connector.svg":"hQcG","./icon-cozy-negative.svg":"73VO","./icon-cozy.svg":"kmSa","./icon-cross-white.svg":"HI5d","./icon-cross.svg":"7TtZ","./icon-cube.svg":"6/9n","./icon-delete-grey08.svg":"R7v0","./icon-delete.svg":"cO7s","./icon-destroy.svg":"8Hn0","./icon-device-laptop.svg":"3SDN","./icon-dots-white.svg":"miDc","./icon-dots.svg":"R7bq","./icon-download.svg":"9l3e","./icon-exchange.svg":"SC1W","./icon-file-none.svg":"epSw","./icon-file.svg":"C+Jv","./icon-folder.svg":"tIvl","./icon-forward.svg":"gCkc","./icon-gear.svg":"KMe8","./icon-help.svg":"Mk9D","./icon-hourglass.svg":"s+ea","./icon-image.svg":"sZ1/","./icon-moveto.svg":"FU52","./icon-openwith.svg":"UoIl","./icon-paperplane.svg":"00J/","./icon-people.svg":"Zvjo","./icon-phone-download.svg":"OEEX","./icon-plus.svg":"yD7k","./icon-rename.svg":"ioVM","./icon-restore.svg":"0l3x","./icon-share-grey08.svg":"jZ9B","./icon-share.svg":"RxhU","./icon-small-arrow.svg":"+UCZ","./icon-spinner.svg":"dKCs","./icon-top-select.svg":"3/YG","./icon-top.svg":"Jao+","./icon-trash.svg":"Q/my","./icon-upload-grey08.svg":"nc+0","./icon-upload.svg":"JOZg","./icon-warn.svg":"P6GH","./icon-warning.svg":"NjZy","./spinner-blue.svg":"f1E/","./spinner-grey.svg":"lGEs","./spinner-red.svg":"cSpx","./spinner-white.svg":"CW5A"};function t(e){var n=a(e);return i(n)}function a(e){var n=o[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(o)},t.resolve=a,e.exports=t,t.id="qpCy"},xYwX:function(e,n,i){"use strict";i.r(n),function(e){var o=i("q1tI"),t=i.n(o),a=i("0cfB"),l=i("IN8/"),c=i("jKe7"),d=i("2INN"),r=i("mf+E"),s=i("e2oC"),u=i("fH6n"),_=i("Kxp2");n.default=Object(a.hot)(e)(function(){return t.a.createElement(l.a,null,t.a.createElement(s.b,null,t.a.createElement(u.a,null),t.a.createElement(s.c,null,t.a.createElement(s.a,{className:"app-content"},t.a.createElement(c.a,null,t.a.createElement(d.a,{path:"/chargedisplay",component:_.a}),t.a.createElement(r.a,{from:"/",to:"/chargedisplay"}),t.a.createElement(r.a,{from:"*",to:"/chargedisplay"}))))))})}.call(this,i("3UD+")(e))}});