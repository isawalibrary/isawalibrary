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


function addToDiv (divname,contents){ //set contents of a div
	document.getElementById(divname).innerHTML += contents;
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
	};
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



function removeDuplicates(array){  //array must be global or this function won't change the array
	uniqueSet = new Set(array);
	array = [...uniqueSet]
	return(array)
}

function addToArray(arrayToAddTo,arrayToAdd){
		if (arrayToAdd.length > 0){
		for (i = 0; i < arrayToAdd.length; i++){
			arrayToAddTo.push(arrayToAdd[i])
		}
	}
}


function addToSelect(selectorForm,listName){
	var el = document.createElement("option");
	selectorForm=document.getElementById(selectorForm);
	for(var i = 0; i < listName.length; i++) {
		var selectedOption = listName[i];
		
	    for (var j = 0; j < selectorForm.options.length; j++) {
	    	formOption = selectorForm.options[j].value
	    	if (selectedOption == formOption){
	    		listName.splice(i-1, 1)
    	}}
    }

	for(var i = 0; i < listName.length; i++) {
    var selectedOption = listName[i];

    var el = document.createElement("option");
    el.textContent = selectedOption;
    el.value = selectedOption;
    selectorForm.appendChild(el);
		};
}

function addValuesToSelect(selectorForm,droplist,valuelist){
			var el = document.createElement("option");
			select=document.getElementById(selectorForm);
			select.innerHTML="";

			for(var j = 0; j < valuelist.length; j++) {
		    var el = document.createElement("option");
		    el.textContent = droplist[j];
		    el.value = valuelist[j];
		    select.appendChild(el);
}}


function getRandomSelect(selectId){
	var select = document.getElementById(selectId)
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint);
}


function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            
        }
    }
}

function clearSelect(selectId){
	document.getElementById(selectId).options.length = 0
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
		if (typeof parentName === 'string' || parentName instanceof String){
				document.getElementById(parentName).appendChild(newForm);}
		else {parentName.appendChild(newForm)}

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


function makeTextArea(parentName,inputId,inputClasses){
	if (document.getElementById(inputId) == null){
		var textarea = document.createElement("textarea");

		textarea.type = "text";
		textarea.id = inputId
		textarea.classList = inputClasses; 

		document.getElementById(parentName).appendChild(textarea);

	}
}

function makeSelect(parentName,selectId,selectClasses,onChangeFunction){
	if (document.getElementById(selectId) == null){

		var select = document.createElement("select");

		if (typeof parentName === 'string' || parentName instanceof String){
				document.getElementById(parentName).appendChild(select);}
		else {parentName.appendChild(select)}

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


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function makeTechSelectDropdown(selectorForm,defaultText,listName,valueName){
	var el = document.createElement("option");
	selectorForm=document.getElementById(selectorForm);
	selectorForm.innerHTML="";
	el.textContent = defaultText;

	selectorForm.appendChild(el);

	for(var i = 0; i < listName.length; i++) {
    var selectedOption = listName[i];
    var el = document.createElement("option");
    el.textContent = selectedOption;
    var selectedValue = valueName[i];
    el.value = selectedValue;
    selectorForm.appendChild(el);
		};
	};
