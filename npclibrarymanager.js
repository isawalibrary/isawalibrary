var npcGroup = {}

function makeLibraryManager(){

	//Makes the buttons and modals for adding npc sets, saving and loading

	newButton("npcmanager","savenpcset","inlineblock","openLibraryModal()","Save NPC Set")
	newButton("npcmanager","loadnpcset","inlineblock ml10","openSetModal()","Load NPC Set")

	//Make modal content
	newTextInput("modalbox","npcSetInputForm","inlineblock ml10","Enter a name for the NPC set:","npcSetInput","ml10 bgevenlighter w400")

	newButton("modalbox","saveNpcSetButton","ml10 inlineblock","saveNpcSet()","Save NPC Set")

	document.getElementById("modalbox").innerHTML += "<p><span class='ml10'>Select NPCs from the roster to add to the NPC set</span>"

	//make set modal content

	document.getElementById("modalsetbox").innerHTML += "<span class='ml10 inline'>Select set: </span>"
	newButton("modalsetbox","addnpcset","inline ml10 mb10","loadNpcSet()","Add NPCs in set to roster")
	newButton("modalsetbox","deletenpcset","inline ml10 mb10","deleteSet()","Delete set")
	newButton("modalsetbox","deletenpcsetandadd","inline ml10 mb10","loadNpcSet();deleteSet();closeSetModal();","Delete set and add the NPCs from it to roster")

	//make add to set modal content
	document.getElementById("modaladdbox").innerHTML += "<span class='ml10 inline'>Select set to add NPC to: </span>";
	newButton("modaladdbox","addnpctoset","inline ml10 mb10","addNpcToSet()","Add NPC to selected set")
}

function addModalProperties(modal, span){
		//make modal visible
		  modal.style.display = "block";

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
		    modal.style.display = "none";
		  }
		}
}

function openLibraryModal(){

		//select modal box
		var modal = document.getElementById("myModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		addModalProperties(modal, span)

		var roster = document.getElementById("modalnpcroster")
		roster.innerHTML = "" //clear the roster box

		var npcSetInput = document.getElementById("npcSetInput")
		npcSetInput.value = ""; // clear the 'Enter set name box'

		for (var each in npc){
			newDiv("modal"+npc[each].title, roster, "buttoncolor pt10 pb10 pl10 pr10 mb3 w650")

			var modalnpc = document.getElementById("modal" + npc[each].title)

			var x = "modal" + npc[each].title

			modalnpc.setAttribute("onclick","npcRosterSelect('"+x+"')")

			var npcText = document.getElementById("menu"+npc[each].title)
			npcText = npcText.innerText.substring(1)

			divContents("modal"+npc[each].title, npcText)
		}

}

function openSetModal(){

		//select modal box
		var modal = document.getElementById("npcSetModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("closesetmodal")[0];

		addModalProperties(modal, span)

		document.getElementById("modalsetcontents").innerText = "";

		var roster = document.getElementById("modalsetroster")
		roster.innerHTML = "" //clear the roster box

		npcGroupLoad()

		for (var each in npcGroup){
			newDiv("modalset" + each, roster, "buttoncolor pt10 pb10 pl10 pr10 mb3 w200")
			document.getElementById("modalset" + each).innerHTML = each

			var div = document.getElementById("modalset" + each)
			var divId = "modalset" + each
			div.setAttribute("onclick","setModalHighlight('"+ divId +"')")
			}

}

function openAddToSetModal(npctitle){

		//select modal box
		var modal = document.getElementById("myAddToSetModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("closeaddtoset")[0];

		addModalProperties(modal, span)

		newDiv("identifier","myAddToSetModal","hide")
		divContents("identifier",npctitle)

		document.getElementById("addnpctoset").setAttribute("onclick","addNpcToSet('"+npctitle+"')")

		var roster = document.getElementById("modaladdsetroster")
		roster.innerHTML = "" //clear the roster box
		npcGroupLoad()

		for (var each in npcGroup){
			newDiv("modaladdset" + each, roster, "buttoncolor pt10 pb10 pl10 pr10 mb3 w200")
			document.getElementById("modaladdset" + each).innerHTML = each

			var div = document.getElementById("modaladdset" + each)
			var divId = "modaladdset" + each
			div.setAttribute("onclick","setAddModalHighlight('"+ divId +"')")

			}

}

function closeSetModal(){
	var modal = document.getElementById("npcSetModal");
	modal.style.display = "none";

}

function setModalHighlight(selectedDivId){
				var div = document.getElementById(selectedDivId)
				var setName = div.innerText
				var roster = document.getElementById("modalsetroster")
				for (var i = 0; i < roster.children.length; i ++){
					if (roster.children[i].classList.contains("bgevenlighter")){
						roster.children[i].classList.remove("bgevenlighter") //removes highlight from all
						roster.children[i].classList.add("buttoncolor")
					}
				}
				div.classList.add("bgevenlighter")  //puts highlight back on this div
				div.classList.remove("buttoncolor")

				var text = "Selected set contains:"


				for (var npc in npcGroup[setName]){
					var text = text + "<p>" + npcGroup[setName][npc].fullname + " (" + npcGroup[setName][npc].type + "/" + npcGroup[setName][npc].template + ")"
				}
				document.getElementById("modalsetcontents").innerHTML = text
}

function setAddModalHighlight(selectedDivId){
				var div = document.getElementById(selectedDivId)
				var setName = div.innerText
				var roster = document.getElementById("modaladdsetroster")
				for (var i = 0; i < roster.children.length; i ++){
					if (roster.children[i].classList.contains("bgevenlighter")){
						roster.children[i].classList.remove("bgevenlighter") //removes highlight from all
						roster.children[i].classList.add("buttoncolor")
					}
				}
				div.classList.add("bgevenlighter")  //puts highlight back on this div
				div.classList.remove("buttoncolor")

				var text = "Selected set contains:"


				for (var npc in npcGroup[setName]){
					var text = text + "<p>" + npcGroup[setName][npc].fullname + " (" + npcGroup[setName][npc].type + "/" + npcGroup[setName][npc].template + ")"
				}
				document.getElementById("modaladdsetcontents").innerHTML = text
}

function npcRosterSelect(npcDivId){
	var div = document.getElementById(npcDivId)

	if (div.classList.contains("buttoncolor")){

		div.classList.remove("buttoncolor")
		div.classList.add("bgevenlighter")

	} else {

		div.classList.add("buttoncolor")
		div.classList.remove("bgevenlighter")

	}
}


function saveNpcSet(){
	//check there is a valid name (no spaces, weird letters, not empty) in npcSetInput input, if no name then put in a random provisional name

	var name = document.getElementById("npcSetInput").value

	if (name == ""){
		window.alert("Enter a set name to save an NPC set.")
		return
		openLibraryModal()
	}

	//check whether the valid name == name of existing set, ask user if ok to overwrite existing set

	for (var set in npcGroup){
		while (set == name){
			var name = window.prompt("Set already exists with that name.  Enter an unique name:",name);
		}
	}

	//get list of highlighted childdivs in npc roster div modalnpcroster

	npcGroup[name] = {}
	var array = []
	var i = 0

	var parent = document.getElementById("modalnpcroster")

	for (var j=0; j < parent.children.length; j++){
		if (parent.children[j].classList.contains("bgevenlighter")){
			array.push(i)
		}
		i ++
	}

	//make a set of npcs in npcgroup - the npcs appear in the same order for the modal as they do in the menu and the npc object

	for (var m = 0; m < array.length ; m++){
		var k = 0
		for (var eachnpc in npc){
			if (k == array[m]){
				while (npc[name]){
					var oldName = name
					name = window.prompt("NPC with that name is already in roster.  Enter a different name.",name)
					var nameNoSpaces = noSpaces(name)
				}
				npcGroup[name][eachnpc] = npc[eachnpc]
				npcGroup[name][eachnpc].title = noSpaces(npcGroup[name][eachnpc].fullname)
			}
			k ++
		}

	}

	//save to json using npcgroupsave, close the modal
	npcGroupSave(name)
	var modal = document.getElementById("myModal");
	modal.style.display = "none";

}

function loadNpcSet(){

	//get selected set
	var parentDiv = document.getElementById("modalsetroster")
	for (var i = 0; i < parentDiv.children.length; i++){
		if (parentDiv.children[i].classList.contains("bgevenlighter")){
			var setName = parentDiv.children[i].innerText
		}
	}

	//add each npc in set to roster
	for (var character in npcGroup[setName]){

		if (npc[character]){
			while (npc[character]){
				var oldName = character

				var character = window.prompt("NPC with that name is already in roster.  Enter a different name or overwrite roster npc.", npc[character].fullname)

				let char = Object.assign({}, npcGroup[setName][oldName])
				char.fullname = character
				char.title = noSpaces(character)
			}
		} else {

				char = npcGroup[setName][character]
			}
    var title = noSpaces(character)
		npc[title] = Object.assign({}, char)
	}

	//save roster, close modal, reload tab
	npcsave()
	npcGroupSave()
	document.getElementById("npcSetModal").style.display = "none"
	makeNpcLibrary();
	buildNpcMenu();
}


function npcGroupSave(groupName) {

	localStorage.setItem("npcSets",JSON.stringify(npcGroup));
}

function npcGroupLoad(){

	npcGroup = JSON.parse(localStorage.getItem("npcSets"));

}

function deleteSet(){
	//get the set name
	var parentDiv = document.getElementById("modalsetroster")
	for (var i = 0; i < parentDiv.children.length; i++){
		if (parentDiv.children[i].classList.contains("bgevenlighter")){
			var setName = parentDiv.children[i].innerText
		}
	}

	//remove from npcGroups
	for (var each in npcGroup){
		if (each == setName){
			delete npcGroup[each]
		}
	}

	//save npcGroups, modal
	npcGroupSave()
	openSetModal()
}

function addNpcToSet(npctitle){
	npcGroupLoad()

	var character = npc[npctitle]; var npcnamefullname

	//get the set name
	var parentDiv = document.getElementById("modaladdsetroster")
	for (var i = 0; i < parentDiv.children.length; i++){
		if (parentDiv.children[i].classList.contains("bgevenlighter")){
			var setName = parentDiv.children[i].innerText
		}
	}

	npcname = document.getElementById("identifier").innerText


	if (setName == undefined){
		window.alert("Select a set to add the NPC to.")
	} else {
		//add the character to the set
		while (npcGroup[setName][npcname]){
			npcnamefullname = window.prompt("NPC with that name is already in set.  Enter a different name.",npcGroup[setName][npcname].fullname)
			npcnametitle = noSpaces(npcname)
				}
		if (npcnamefullname == undefined){
			npcnamefullname	= npc[npcname].fullname
			npcnametitle = npc[npcname].title
		}
	    npcGroup[setName][npcnametitle] = npc[npcnametitle]
	    npcGroup[setName][npcnametitle].title = npcnametitle
	    npcGroup[setName][npcnametitle].fullname = npcnamefullname
	    document.getElementById("myAddToSetModal").style.display = "none"
	    npcGroupSave()
	}

}
