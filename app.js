!function(e){function n(n){for(var a,l,s=n[0],r=n[1],c=n[2],u=0,_=[];u<s.length;u++)l=s[u],t[l]&&_.push(t[l][0]),t[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(n);_.length;)_.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,n=0;n<o.length;n++){for(var i=o[n],a=!0,s=1;s<i.length;s++){var r=i[s];0!==t[r]&&(a=!1)}a&&(o.splice(n--,1),e=l(l.s=i[0]))}return e}var a={},t={0:0},o=[];function l(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=a,l.d=function(e,n,i){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(i,a,function(n){return e[n]}.bind(null,a));return i},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var d=r;o.push([0,1]),i()}({"/KVF":function(e,n,i){var a={"./en":"7dT6","./en.json":"7dT6"};function t(e){var n=o(e);return i(n)}function o(e){var n=a[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(a)},t.resolve=o,e.exports=t,t.id="/KVF"},"/kYV":function(e,n,i){},0:function(e,n,i){i("201c"),e.exports=i("LiWt")},"2E0U":function(e,n,i){"use strict";var a=function(e){return e.find("grandlyon.charge")};i.d(n,"a",function(){return a});n.b={charge:{doctype:"grandlyon.charge",attributes:{},relationships:{}}}},"7dT6":function(e){e.exports={Nav:{todos:"Todos",hello_nav_2:"Second",hello_nav_3:"Third"}}},Kxp2:function(e,n,i){"use strict";var a=i("q1tI"),t=i.n(a),o=i("zGKU"),l=i("SUMQ"),s=i("4cdY"),r=i("J+eN"),c=i("b+jq"),d=i("nJDY"),u=i("y9N3"),_=i("Yjvw"),m=i("wcMh"),b=i("wd/R"),v=i.n(b),f=function(e){return v()(e).format("DD/MM")},j=Object(l.withStyles)({card:{maxWidth:275,marginBottom:50},classes:{marginBottom:16,fontSize:14},pos:{marginBottom:12}})(function(e){var n=e.chargeList;return n&&n.length?t.a.createElement("div",null,t.a.createElement("h2",null,"Données Enedis:"),t.a.createElement("div",null,t.a.createElement(s.a,{data:n,width:800,height:400},t.a.createElement(r.a,{dataKey:"Horodate",scale:"time",domain:["auto","auto"],type:"number",tickFormatter:f}),t.a.createElement(c.a,null),t.a.createElement(d.a,null),t.a.createElement(u.a,{strokeDasharray:"3 3"}),t.a.createElement(_.a,{verticalAlign:"top",height:36}),t.a.createElement(m.a,{name:"Courbe de charge (W)",type:"monotone",dataKey:"Valeur",stroke:"#8884d8"})))):t.a.createElement("div",null,t.a.createElement("h2",null,"Données Enedis:"),t.a.createElement("div",null,t.a.createElement("p",null,"No data to display")))}),g=i("SH7X"),p=i("2E0U"),x=function(e){var n=[];for(var i in e)""!==e[i].Valeur&&new Date(e[i].Horodate)<new Date("2017-11-29")&&n.push({Horodate:new Date(e[i].Horodate).getTime(),Valeur:e[i].Valeur});return n};n.a=Object(g.queryConnect)({chargeList:{query:p.a,as:"charge"}})(function(e){var n=e.chargeList,i=n.data,a=n.fetchStatus,l="loading"===a||"pending"===a;return t.a.createElement("div",{className:"chargeList"},l?t.a.createElement(o.a,{size:"xxlarge",middle:!0}):t.a.createElement("div",null,t.a.createElement(j,{chargeList:x(i)})))})},LiWt:function(e,n,i){"use strict";i.r(n);i("/kYV");var a,t=i("q1tI"),o=i.n(t),l=i("SH7X"),s=i.n(l),r=i("i8i4"),c=i("XOpu"),d=i("2E0U"),u=function(e,n){return/^\{\{\.[a-zA-Z]*\}\}$/.test(e)?n:e};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("[role=application]").dataset,n=u(e.cozyIconPath,i("ZAKO")),t=u(e.cozyAppNamePrefix||i("pZg0").name_prefix,""),_=u(e.cozyAppName,i("pZg0").name);a=u(e.cozyLocale,"en");var m=window.location?window.location.protocol:"https:",b=new s.a({uri:"".concat(m,"//").concat(e.cozyDomain),token:e.cozyToken,schema:d.b});cozy.bar.init({appName:_,appNamePrefix:t,iconPath:n,lang:a,replaceTitleOnMobile:!0}),function(e){var n=i("xYwX").default;Object(r.render)(o.a.createElement(c.b,{lang:a,dictRequire:function(e){return i("/KVF")("./".concat(e))}},o.a.createElement(l.CozyProvider,{client:e},o.a.createElement(n,null))),document.querySelector("[role=application]"))}(b)})},RnhZ:function(e,n,i){var a={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function t(e){var n=o(e);return i(n)}function o(e){var n=a[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(a)},t.resolve=o,e.exports=t,t.id="RnhZ"},ZAKO:function(e,n){e.exports="/img/icon.987172dfb4476e75424507f2fb3cb962.svg"},fH6n:function(e,n,i){"use strict";var a=i("q1tI"),t=i.n(a),o=i("B7OX"),l=i("XOpu"),s=i("uNOt"),r=i("4BeY"),c=i.n(r),d=i("IaFt"),u=i.n(d),_=new c.a({id:"icon-bullet-point_d352b52b7796892e87fcb971b42de3a6",use:"icon-bullet-point_d352b52b7796892e87fcb971b42de3a6-usage",viewBox:"0 0 16 16",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="icon-bullet-point_d352b52b7796892e87fcb971b42de3a6">\n  <path d="M14,5c0,-1.656 -1.344,-3 -3,-3l-6,0c-1.656,0 -3,1.344 -3,3l0,6c0,1.656 1.344,3 3,3l6,0c1.656,0 3,-1.344 3,-3l0,-6Z" />\n</symbol>'}),m=(u.a.add(_),_);n.a=Object(l.c)()(function(e){var n=e.t;return t.a.createElement("aside",{className:"o-sidebar"},t.a.createElement("nav",null,t.a.createElement("ul",{className:"c-nav"},t.a.createElement("li",{className:"c-nav-item"},t.a.createElement(s.a,{to:"/chargeDisplay",className:"c-nav-link",activeClassName:"is-active"},t.a.createElement(o.a,{className:"c-nav-icon",icon:m}),n("Charge"))))))})},nY3O:function(e,n,i){var a={"./_lib/build_formatting_tokens_reg_exp/index":"kOWh","./ar/build_distance_in_words_locale/index":"XxX6","./ar/build_format_locale/index":"alis","./ar/index":"EDRf","./bg/build_distance_in_words_locale/index":"7K3h","./bg/build_format_locale/index":"RrdL","./bg/index":"isx8","./ca/build_distance_in_words_locale/index":"wqqj","./ca/build_format_locale/index":"qcV0","./ca/index":"Vwa+","./cs/build_distance_in_words_locale/index":"ZKDM","./cs/build_format_locale/index":"ipyF","./cs/index":"dvhP","./da/build_distance_in_words_locale/index":"2Mgc","./da/build_format_locale/index":"Gned","./da/index":"7ur/","./de/build_distance_in_words_locale/index":"5IWf","./de/build_format_locale/index":"THCn","./de/index":"bgw5","./el/build_distance_in_words_locale/index":"o/GB","./el/build_format_locale/index":"8T9h","./el/index":"dH0v","./en/build_distance_in_words_locale/index":"LZbM","./en/build_format_locale/index":"6DAA","./en/index":"Us+F","./eo/build_distance_in_words_locale/index":"qrnn","./eo/build_format_locale/index":"Bl15","./eo/index":"UB7v","./es/build_distance_in_words_locale/index":"GEfZ","./es/build_format_locale/index":"O+zC","./es/index":"/S0t","./fi/build_distance_in_words_locale/index":"VHtQ","./fi/build_format_locale/index":"Oydx","./fi/index":"ndVD","./fil/build_distance_in_words_locale/index":"uq4p","./fil/build_format_locale/index":"d7hw","./fil/index":"pNfm","./fr/build_distance_in_words_locale/index":"IzMR","./fr/build_format_locale/index":"I3Zg","./fr/index":"LKA2","./hr/build_distance_in_words_locale/index":"DPvn","./hr/build_format_locale/index":"puw3","./hr/index":"L9Jq","./hu/build_distance_in_words_locale/index":"w2RQ","./hu/build_format_locale/index":"/0iD","./hu/index":"Nm+E","./id/build_distance_in_words_locale/index":"JbvB","./id/build_format_locale/index":"0wlw","./id/index":"A6C3","./is/build_distance_in_words_locale/index":"qzMC","./is/build_format_locale/index":"S3yD","./is/index":"N4bE","./it/build_distance_in_words_locale/index":"MDEp","./it/build_format_locale/index":"aUJd","./it/index":"hmb4","./ja/build_distance_in_words_locale/index":"nNvt","./ja/build_format_locale/index":"buui","./ja/index":"uAXs","./ko/build_distance_in_words_locale/index":"oEw+","./ko/build_format_locale/index":"9SQf","./ko/index":"iW8+","./mk/build_distance_in_words_locale/index":"nmwZ","./mk/build_format_locale/index":"htxJ","./mk/index":"GzBU","./nb/build_distance_in_words_locale/index":"SL1f","./nb/build_format_locale/index":"CJ5F","./nb/index":"73vv","./nl/build_distance_in_words_locale/index":"Uyu0","./nl/build_format_locale/index":"doCD","./nl/index":"hCQt","./pl/build_distance_in_words_locale/index":"FUBD","./pl/build_format_locale/index":"nOYf","./pl/index":"B6yL","./pt/build_distance_in_words_locale/index":"aTPA","./pt/build_format_locale/index":"TTT0","./pt/index":"gdks","./ro/build_distance_in_words_locale/index":"gI+A","./ro/build_format_locale/index":"njjO","./ro/index":"r2yp","./ru/build_distance_in_words_locale/index":"KmPx","./ru/build_format_locale/index":"UUBw","./ru/index":"nz/o","./sk/build_distance_in_words_locale/index":"q2Bs","./sk/build_format_locale/index":"9sxn","./sk/index":"Wqan","./sl/build_distance_in_words_locale/index":"mlv2","./sl/build_format_locale/index":"vHkZ","./sl/index":"KYSo","./sv/build_distance_in_words_locale/index":"UNBN","./sv/build_format_locale/index":"zTNB","./sv/index":"hxgj","./th/build_distance_in_words_locale/index":"XAGa","./th/build_format_locale/index":"We2s","./th/index":"Pk+z","./tr/build_distance_in_words_locale/index":"aFZF","./tr/build_format_locale/index":"jh7A","./tr/index":"3ZWG","./zh_cn/build_distance_in_words_locale/index":"KdB7","./zh_cn/build_format_locale/index":"l4EP","./zh_cn/index":"8tMq","./zh_tw/build_distance_in_words_locale/index":"vyyr","./zh_tw/build_format_locale/index":"uYH7","./zh_tw/index":"QPlQ"};function t(e){var n=o(e);return i(n)}function o(e){var n=a[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(a)},t.resolve=o,e.exports=t,t.id="nY3O"},pZg0:function(e,n){e.exports={name:"DataVisualisation",slug:"cozytestapp_original",icon:"icon.svg",categories:[],version:"0.1.0",licence:"AGPL-3.0",editor:"",source:"https://github.com/hsubtil/cozytestapp_original.git@build",developer:{name:"hsubtil",url:""},routes:{"/":{folder:"/",index:"index.html",public:!1}},permissions:{apps:{description:"Required by the cozy-bar to display the icons of the apps",type:"io.cozy.apps",verbs:["GET"]},charge:{description:"Auth to get data from enedis connector",type:"grandlyon.charge"}}}},qpCy:function(e,n,i){var a={"./arrow.svg":"P/8p","./check.svg":"9iSV","./dash.svg":"U9gP","./icon-album-add.svg":"5x66","./icon-album-remove.svg":"RV+3","./icon-album.svg":"9rpN","./icon-back.svg":"59c+","./icon-bottom-select.svg":"Knxi","./icon-bottom.svg":"pcTF","./icon-calendar.svg":"/B2L","./icon-check-circleless.svg":"1ECO","./icon-check.svg":"2EDk","./icon-clock.svg":"bcQu","./icon-connector.svg":"hQcG","./icon-cozy-negative.svg":"73VO","./icon-cozy.svg":"kmSa","./icon-cross-white.svg":"HI5d","./icon-cross.svg":"7TtZ","./icon-cube.svg":"6/9n","./icon-delete-grey08.svg":"R7v0","./icon-delete.svg":"cO7s","./icon-destroy.svg":"8Hn0","./icon-device-laptop.svg":"3SDN","./icon-dots-white.svg":"miDc","./icon-dots.svg":"R7bq","./icon-download.svg":"9l3e","./icon-exchange.svg":"SC1W","./icon-file-none.svg":"epSw","./icon-file.svg":"C+Jv","./icon-folder.svg":"tIvl","./icon-forward.svg":"gCkc","./icon-gear.svg":"KMe8","./icon-help.svg":"Mk9D","./icon-hourglass.svg":"s+ea","./icon-image.svg":"sZ1/","./icon-moveto.svg":"FU52","./icon-openwith.svg":"UoIl","./icon-paperplane.svg":"00J/","./icon-people.svg":"Zvjo","./icon-phone-download.svg":"OEEX","./icon-plus.svg":"yD7k","./icon-rename.svg":"ioVM","./icon-restore.svg":"0l3x","./icon-share-grey08.svg":"jZ9B","./icon-share.svg":"RxhU","./icon-small-arrow.svg":"+UCZ","./icon-spinner.svg":"dKCs","./icon-top-select.svg":"3/YG","./icon-top.svg":"Jao+","./icon-trash.svg":"Q/my","./icon-upload-grey08.svg":"nc+0","./icon-upload.svg":"JOZg","./icon-warn.svg":"P6GH","./icon-warning.svg":"NjZy","./spinner-blue.svg":"f1E/","./spinner-grey.svg":"lGEs","./spinner-red.svg":"cSpx","./spinner-white.svg":"CW5A"};function t(e){var n=o(e);return i(n)}function o(e){var n=a[e];if(!(n+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n}t.keys=function(){return Object.keys(a)},t.resolve=o,e.exports=t,t.id="qpCy"},xYwX:function(e,n,i){"use strict";i.r(n),function(e){var a=i("q1tI"),t=i.n(a),o=i("0cfB"),l=i("IN8/"),s=i("jKe7"),r=i("2INN"),c=i("mf+E"),d=i("e2oC"),u=i("fH6n"),_=i("Kxp2");n.default=Object(o.hot)(e)(function(){return t.a.createElement(l.a,null,t.a.createElement(d.b,null,t.a.createElement(u.a,null),t.a.createElement(d.c,null,t.a.createElement(d.a,{className:"app-content"},t.a.createElement(s.a,null,t.a.createElement(r.a,{path:"/chargedisplay",component:_.a}),t.a.createElement(c.a,{from:"/",to:"/chargedisplay"}),t.a.createElement(c.a,{from:"*",to:"/chargedisplay"}))))))})}.call(this,i("3UD+")(e))}});