(function() {

	// just place a div at top right
	var button = document.createElement('button');
	button.textContent = 'Zainstaluj na swojej stacji!';
	button.style.cssText = 'margin:3px;background: #0747a6; border: 1px solid #0747a6;border-radius: 3px;color: #fff;display: inline-block;font-size: 11px;font-weight: bold;line-height: 99%;margin: 0;padding: 2px 5px;text-align: center;text-decoration: none;text-transform: uppercase;'
	var branch = document.getElementsByClassName('branch-name')[0].textContent;
	console.log(branch);
	
		var currentPageURL = window.location.toString();
		var packageName = currentPageURL.match(/repos\/(.*?)\//)[1];
		console.log(packageName);
	
	
	var url='http://192.168.9.102:8080/job/'+packageName+'/parambuild/?SERVER_ADDRESS=192.168.11.21&SUBSTITUTION_PROPERTIES=newEnv&GIT_BRANCH='+branch;
	button.addEventListener('click', function(){redirect(url)});
	const branchNameElement = document.getElementsByClassName('pull-request-metadata')[0];
	branchNameElement.appendChild(button);
})();

function redirect(url) {
	window.location.href = url;
}
