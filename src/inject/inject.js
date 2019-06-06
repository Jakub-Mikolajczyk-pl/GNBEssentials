(function() {

	// just place a div at top right
	var button = document.createElement('button');
	button.textContent = 'Zainstaluj na swojej stacji!';
	button.style.cssText = 'margin:3px;background: #0747a6; border: 1px solid #0747a6;border-radius: 3px;color: #fff;display: inline-block;font-size: 11px;font-weight: bold;line-height: 99%;margin: 0;padding: 2px 5px;text-align: center;text-decoration: none;text-transform: uppercase;'
	const branchNameElement = document.getElementsByClassName('pull-request-metadata')[0];
	branchNameElement.appendChild(button);

})();





// var aButton = document.createElement("button");
// aButton.id = "aButton";
// textElement.parentElement.insertBefore(aButton, textElement.nextElementSibling);

// aButton.addEventListener("click", function() {
//   alert("damn");
// });
