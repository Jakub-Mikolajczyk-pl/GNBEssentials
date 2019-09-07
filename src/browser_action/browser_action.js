var settings = {
  jenkins_address: "",
  docker_address:  "",
  propertyFileName: ""
};

function getSettings(settings) {
  console.log(settings);
   for (var propt in settings) {
    chrome.storage.sync.get(settings[propt], function(result) {
      console.log(result);
      
      if(Object.entries(result).length !== 0) {
        console.log(result.seetings[propt]);
        document.getElementById(setting[propt]).value = result.seetings[propt];
      }
    });
     }
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("saveButton").addEventListener('click', function() {saveSettings(settings)} );
    chrome.storage.sync.onChanged.addListener(getSettings(settings));
});

function saveSettings(settings) {
  settings.jenkins_address = document.getElementById("jenkins_address").value;
  settings.docker_address = document.getElementById("docker_address").value;
  settings.propertyFileName = document.getElementById("propertyFileName").value;

  console.log(settings);

  
    chrome.storage.sync.set(settings, function() {
      console.log('Settings saved');
    });
    
       
};
