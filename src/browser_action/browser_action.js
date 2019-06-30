document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("saveButton").addEventListener('click', function() {saveSettings()} );
});

function saveSettings() {
  var settings = {
    jenkins_address: document.getElementById("jenkins_address").value,
    docker_address: document.getElementById("docker_address").value,
    propertyFileName: document.getElementById("propertyFileName").value
  };

  console.log(settings);

  for (const [key, value] of Object.entries(settings)) {
    chrome.storage.local.set({key: value});
    console.log('zapisuje');
    }

    var jenkins_address = chrome.storage.local.get('jenkins_address', function(data) {
        if (chrome.runtime.lastError) {
            console.log('error');
            return; 
        }
        console.log(data);
        return data;
    });
       
    console.log(jenkins_address);
};
