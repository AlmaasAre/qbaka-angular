
window.qbaka = window.qbaka || {};
window.qbaka.angular = function (module, apiKey) {
  window.qbaka = null;
  window.qbaka||function(e,t){var n=[];var r=e.qbaka=function(){n.push(arguments)};e.__qbaka_eh=e.onerror;e.onerror=function(){r("onerror",arguments);if(e.__qbaka_eh)try{e.__qbaka_eh.apply(e,arguments)}catch(t){}};e.onerror.qbaka=1;r.sv=2;r._=n;r.log=function(){r("log",arguments)};r.report=function(){r("report",arguments,new Error)};var i=t.createElement("script"),s=t.getElementsByTagName("script")[0],o=function(){s.parentNode.insertBefore(i,s)};i.type="text/javascript";i.async=!0;i.src=("https:"==t.location.protocol?"https:":"http:")+"//qbaka.r.worldssl.net/reporting.js";typeof i.async=="undefined"&&t.addEventListener?t.addEventListener("DOMContentLoaded",o):o();r.key=apiKey}(window,document);qbaka.options={autoStacktrace:1,trackEvents:1};
  
  module = typeof module === 'string' ? angular.module(module) : module;
  module.factory('$exceptionHandler', function ($log) {
    return function (exception) {
      $log.error(exception);
      window.qbaka.report(exception);
    };
  });
};
