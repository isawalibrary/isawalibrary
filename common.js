function hideshow(x){
	document.getElementById(x).classList.toggle("hide");
	}


function newdiv (divname,parentName,classname){ //create new div
	nw = document.createElement('div');
	document.getElementById(parentName).appendChild(nw);
	nw.id = divname;
	nw.classList = classname;
	};


function divcontents (divname,contents){ //set contents of a div
	document.getElementById(divname).innerHTML = contents;
	}


function show(x) { //unhides via CSS
	document.getElementById(x).classList.remove("hide");
	}


function hide(x) { //hides via CSS
	document.getElementById(x).classList.add("hide");
	}


function getRandom(listname){
	return listname[Math.floor(Math.random()*listname.length)]
};



function trailingCommaKiller(){
	trailingCommaStringList = document.getElementsByClassName('trailingcommafinder')

	for (i = 0; i < trailingCommaStringList.length; i++){

	thisString = trailingCommaStringList[i];

	thisString.innerHTML = thisString.innerHTML.trim();

 	if(thisString.innerHTML.slice(-1)==","){
 		thisString.innerHTML = thisString.innerHTML.slice(0,-1);
 	}	
 }
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
	}


function makeSelectDropdown1(selectorForm,listName){
	
	selectorForm=document.getElementById(selectorForm);
	selectorForm.innerHTML="";

	for(var i = 0; i < listName.length; i++) {
    var selectedOption = listName[i];
    var el = document.createElement("option");
    el.textContent = selectedOption;
    el.value = selectedOption;
    selectorForm.appendChild(el);
    	if (i==0){
    		
    	}};
}	


function makeSelectDropdown(selectorForm,defaultText,listName){
	var el = document.createElement("option");
	selectorForm=document.getElementById(selectorForm);
	selectorForm.innerHTML="";
	el.textContent = defaultText;

	selectorForm.appendChild(el);

	for(var i = 0; i < listName.length; i++) {
    var selectedOption = listName[i];
    var el = document.createElement("option");
    el.textContent = selectedOption;
    el.value = selectedOption;
    selectorForm.appendChild(el);
		};
}


function addToSelect(selectorForm,listName){
	var el = document.createElement("option");
	selectorForm=document.getElementById(selectorForm);

	for(var i = 0; i < listName.length; i++) {
    var selectedOption = listName[i];
    var el = document.createElement("option");
    el.textContent = selectedOption;
    el.value = selectedOption;
    selectorForm.appendChild(el);
		};
}


function makeButton(parentName,buttonId,buttonClasses,onClickFunction,buttonText){
	if (document.getElementById(buttonId) == null){
	newButton = document.createElement('button');
	document.getElementById(parentName).appendChild(newButton);

	newButton.id = buttonId;
	newButton.classList = buttonClasses;
	newButton.setAttribute("onclick",onClickFunction);
	newButton.innerHTML = buttonText;
}
}


function makeTextInput(parentName,formId,formClasses,spanInnerHTML,inputId,inputClasses){
	if (document.getElementById(formId) == null){
	var newForm = document.createElement('form');
	document.getElementById(parentName).appendChild(newForm);

	newForm.id = formId;
	newForm.classList = formClasses;
	newForm.innerHTML = spanInnerHTML;
	newForm.setAttribute("onsubmit", "return false")

	var input = document.createElement("input");
	input.type = "text";
	input.id = inputId
	input.classList = inputClasses; 

	newForm.appendChild(input);
	}
}

function makeSelect(parentName,selectId,selectClasses,onChangeFunction){
	if (document.getElementById(selectId) == null){

	var select = document.createElement("select");
	document.getElementById(parentName).appendChild(select);

	select.id = selectId;
	select.classList = selectClasses;
	select.setAttribute("onchange",onChangeFunction);
	}
}


function makeNumberInput(parentName,formId,formClasses,formHTML,inputId,inputClasses){
	if (document.getElementById(formId) == null){
	var newForm = document.createElement('form');
	document.getElementById(parentName).appendChild(newForm);

	newForm.id = formId;
	newForm.classList = formClasses;
	newForm.innerHTML = formHTML;
	newForm.setAttribute("onsubmit", "return false")

	var input = document.createElement("input");
	input.type = "number";
	input.id = inputId
	input.classList = inputClasses; 
	newForm.appendChild(input);
}
}