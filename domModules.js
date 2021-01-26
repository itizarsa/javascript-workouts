function createDiv (divId, divClass, parentId) {
	var createDiv = document.createElement("div");
	createDiv.id = divId;
	createDiv.className = divClass;
	document.getElementById(parentId).appendChild(createDiv);
}

function createLabel (forValue, labelInnerHtml, parentId) {
	var label = document.createElement("label");
	label.setAttribute("for", forValue);
	label.innerHTML = labelInnerHtml;
	document.getElementById(parentId).appendChild(label);
}

function createInput (inputId, inputClass, inputPlaceholder, parentId) {
	var input = document.createElement("input");
	input.id = inputId;
	input.className = inputClass;
	input.placeholder = inputPlaceholder;
	document.getElementById(parentId).appendChild(input);
}

function createButton (buttonId, buttonClass, buttonType, buttonInnerHTML, buttonClick, parentId) {
	var button = document.createElement("button");
	button.id = buttonId;
	button.className = buttonClass;
	button.type = buttonType;
	button.innerHTML = buttonInnerHTML;
	button.onclick = buttonClick;
	document.getElementById(parentId).appendChild(button);
}

function capitalizeFirstLetter (string) {
	return string[0].toUpperCase() + string.slice(1);
}
