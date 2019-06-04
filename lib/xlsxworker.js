/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
importScripts('https://system.na2.netsuite.com/core/media/media.nl?id=17062&c=1889283&h=f1f6109eb725231d8af0&_xt=.js');
importScripts('https://system.na2.netsuite.com/core/media/media.nl?id=17061&c=1889283&h=cfcac0e4102e2e03249e&_xt=.js');
postMessage({t:"ready"});

onmessage = function (evt) {
  var v;
  try {
    v = XLSX.read(evt.data.d, {type: evt.data.b});
postMessage({t:"xlsx", d:JSON.stringify(v)});
  } catch(e) { postMessage({t:"e",d:e.stack||e}); }
};
