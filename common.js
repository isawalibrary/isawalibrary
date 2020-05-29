function hideShow(x){
	var divclasses=document.getElementById(x).classList
	document.getElementById(x).classList.toggle("hide");
	}


function newDiv (divname,parentName,classlist){ //create new div

	if (document.getElementById(divname) == null){
		var nw = document.createElement('div');
	if (typeof parentName === 'string' || parentName instanceof String){
				document.getElementById(parentName).appendChild(nw);
			} else {
				parentName.appendChild(nw);	
			}

	nw.id = divname;
	nw.classList = classlist;
	}};

function noSpaces(hasSpacesAndCommas){
		var nospaces = hasSpacesAndCommas.replace(/ /g, "")
		nospaces = nospaces.replace(/,/g, "")
		nospaces = nospaces.replace("(", "")
		nospaces = nospaces.replace(")", "")
		nospaces = nospaces.replace("'", "")

		return nospaces;
}


function divContents (divname,contents){ //set contents of a div
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


function getRandom(listname){  //x = getRandom(listname)
	return listname[Math.floor(Math.random()*listname.length)]
	};


function trailingCommaKiller(){
	var trailingCommaStringList = document.getElementsByClassName('trailingcommafinder')

	for (var i = 0; i < trailingCommaStringList.length; i++){

		var thisString = trailingCommaStringList[i];

		thisString.innerHTML = thisString.innerHTML.trim();

	 	if (thisString.innerHTML.slice(-1)==","){
	 		thisString.innerHTML = thisString.innerHTML.slice(0,-1);
	 	}	
	 }}


function getRndInteger(min, max) { //x = getRandom(listname)
  	return Math.floor(Math.random() * (max - min) ) + min;
	}


function capitalizeFirstLetter(string) { //x = getRandom(listname)
    return string.charAt(0).toUpperCase() + string.slice(1);
	}

function removeDuplicates(array){  //array must be global or this function won't change the array  x = removeDuplicates()
	uniqueSet = new Set(array);
	array = [...uniqueSet]
	return(array)
	}	

function shuffle(array) {  //x = shuffle(array)
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


function fillSelectDropdown(selectorForm,listName){
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


function fillSelectDropdownDefault(selectorForm,defaultText,listName){
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

function fillSelectDropdownValues(selectorForm,valueListName,textcontentListName){
	
	selectorForm=document.getElementById(selectorForm);
	selectorForm.innerHTML="";

	for(var i = 0; i < valueListName.length; i++) {
	    var el = document.createElement("option");
	    el.textContent = textcontentListName[i];
	    el.value = valueListName[i];
	    selectorForm.appendChild(el);
	};
}	


function addToArray(arrayToAddTo,arrayToAdd){
		if (arrayToAdd.length > 0){
		for (var i = 0; i < arrayToAdd.length; i++){
			arrayToAddTo.push(arrayToAdd[i])
		}
	}
}


function addToSelect(selectorForm,listName){
	var el = document.createElement("option");

     if (typeof selectorForm === 'string' || selectorForm instanceof String){
				selectorForm=document.getElementById(selectorForm);
			} 

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
			var select=document.getElementById(selectorForm);
			select.innerHTML="";

			for(var j = 0; j < valuelist.length; j++) {
		    var el = document.createElement("option");
		    el.textContent = droplist[j];
		    el.value = valuelist[j];
		    select.appendChild(el);
}}

function addOptgroupToSelect(selectorForm,optgroupName,listname){
	var select = document.getElementById(selectorForm);

	var newGroup = document.createElement('OPTGROUP')

	newGroup.label = optgroupName;

	for (var i = 0; i < listname.length; i++){
		var opt = document.createElement("option");
			opt.textContent = listname[i];
		    newGroup.appendChild(opt);
	}
	select.appendChild(newGroup)
}

function getRandomSelect(selectId){
	var select = document.getElementById(selectId)
	var options = select.children;
	var maxint = options.length
	var minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint);
}


function setSelectedText(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            
        }
    }
}

function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
    	weapname = selectObj.options[i].value

        if (selectObj.options[i].value== valueToSet) {
            selectObj.options[i].selected = true;
            
        }
    }
}

function setSelectedIndex(selectObj, valueToSet) {
            if (typeof selectObj === 'string' || selectObj instanceof String){
				document.getElementById(selectObj).options[valueToSet].selected = true;
			} else {
				selectObj.options[valueToSet].selected = true;
			}
   }

function removeElement(elementId){
	var element = document.getElementById(elementId);
	element.parentNode.removeChild(element);
}

function clearSelect(selectId){
	document.getElementById(selectId).options.length = 0;
}

function clearInput(selectId){
	document.getElementById(selectId).value = "";
}

function newButton(parentName,buttonId,buttonClasses,onClickFunction,buttonText){
	if (document.getElementById(buttonId) == null){
		var newButton = document.createElement('button');
		document.getElementById(parentName).appendChild(newButton);

		newButton.id = buttonId;
		newButton.classList = buttonClasses;
		newButton.setAttribute("onclick",onClickFunction);
		newButton.innerHTML = buttonText;
	}
}


function newTextInput(parentName,formId,formClasses,spanInnerHTML,inputId,inputClasses){

	if (document.getElementById(formId) == null){
		var newForm = document.createElement('form');
		if (typeof parentName === 'string' || parentName instanceof String){
				document.getElementById(parentName).appendChild(newForm);
			}
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


function newTextArea(parentName,inputId,inputClasses){
	if (document.getElementById(inputId) == null){
		var textarea = document.createElement("textarea");

		textarea.type = "text";
		textarea.id = inputId
		textarea.classList = inputClasses; 

		document.getElementById(parentName).appendChild(textarea);

	}
}

function newSelect(parentName,selectId,selectClasses,onChangeFunction){
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


function newNumberInput(parentName,formId,formClasses,formHTML,inputId,inputClasses){
	if (document.getElementById(formId) == null){
		var newForm = document.createElement('form');

		if (typeof parentName === 'string' || parentName instanceof String){
				document.getElementById(parentName).appendChild(newForm);
			} else {
				parentName.appendChild(newForm);	
			}

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


function newTechSelectDropdown(selectorForm,defaultText,listName,valueName){
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
