(function() {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          var url = details.url.replace(/^http:/, "https:");
          console.log(url);
          return {redirectUrl: url};
        },
        {urls: ["*://rm.gnb.pl/*"]},
        ["blocking"]
      );
})();