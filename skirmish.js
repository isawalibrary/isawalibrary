var save ={};


function saveSkirmish(){
	saveskirmish.skirmishcharacters=skirmishcharacters;
	saveskirmish.skirmish=document.getElementById("skirmishtable").innerHTML;
	localStorage.setItem("saveskirmish",JSON.stringify(saveskirmish));
	}


function loadSkirmish(){
	save = JSON.parse(localStorage.getItem("saveskirmish"));

	if (save !== null){
	skirmishcharacters=save.skirmishcharacters;
}
	clearSkirmishRows()

	for (let elem in skirmishcharacters){
		buildSkirmishCharacter(elem);
		}

	for (let elem in skirmishcharacters){
		var chosenChar = skirmishcharacters[elem];

		document.getElementById(elem+"-initiative").value=skirmishcharacters[elem].initiative;
		document.getElementById(elem+"-fatigue").value=skirmishcharacters[elem].fatigue;
		document.getElementById(elem+"-strife").value=skirmishcharacters[elem].strife;
		document.getElementById(elem+"-endurance").value=skirmishcharacters[elem].endurance;
		document.getElementById(elem+"-composure").value=skirmishcharacters[elem].composure;
		document.getElementById(elem+"-physres").value=skirmishcharacters[elem].physres;
		document.getElementById(elem+"-supres").value=skirmishcharacters[elem].supres;
		document.getElementById(elem+"-engaged").value=skirmishcharacters[elem].engaged;
		document.getElementById(elem+"-notes").value=skirmishcharacters[elem].notes;
		document.getElementById(elem+"-status").value=skirmishcharacters[elem].status;

		var valueToSet = skirmishcharacters[elem].stance;
		selectObj = document.getElementById(elem+"-stance")
		for (var i = 0; i < selectObj.options.length; i++) {
		        if (selectObj.options[i].text== valueToSet) {
		            selectObj.options[i].selected = true;

		        }
		    }

		updateStance(chosenChar);

		}
	}

function clearSkirmishRows(){
	var table = document.getElementById("skirmishtable")

	while (table.rows.length > 1){
		for (var i = 1; i < table.rows.length;){
			table.deleteRow(i)
		}}
}


function makeSkirmish(){

	newDiv("addnewcontainer","skirmishcontainer","inline ml10")
	newButton("addnewcontainer","addnewbutton","inline","makeNewChar()","Quick add")

	newDiv("reorderskirmish","skirmishcontainer","inline ml10")
	newButton("reorderskirmish","reorderskirmishbutton","inline","reorderSkirmish()","Reorder skirmish by initiative")

	newDiv("saveskirmish","skirmishcontainer","inline ml10")
	newButton("saveskirmish","saveskirmishbutton","inline","saveSkirmish()","save skirmish")

	newDiv("loadskirmish","skirmishcontainer","inline ml10")
	newButton("loadskirmish","loadskirmishbutton","inline","loadSkirmish()","load skirmish")

	newDiv("skirmish","skirmishcontainer","block")

		var skirmishtable = document.createElement("TABLE")
			skirmishtable.id = "skirmishtable"
			skirmishtable.classList.add("mt10")
			document.getElementById("skirmish").appendChild(skirmishtable);

	var itemlist = [];
	var thisBody = document.getElementById("skirmishtable").createTBody();
	var itemnumber = 0;

		
		var thisHead = document.getElementById("skirmishtable").createTHead();
		var thisRow = thisHead.insertRow(0);
	

	var array = ["","Initiative","Stance","Fatigue","","Strife","","Phys Res","Sup Res","Engaged With:","Notes","Status",""]

	for (var elem in array){	
		var thisItemData = array[elem];

		var thisCell = thisRow.insertCell(itemnumber);
		thisCell.innerHTML="<span>"+thisItemData+"</span>";
		itemnumber ++

		}			

}


var char={};


function makeNewChar(){
	newDiv("makenewchar","skirmishcontainer","block pt10 pb10");
	newTextInput("makenewchar","newcharname"," inline ml10",'<span id="nameword" onclick="getRandomName()">Name: </span>',"name","")

	newDiv("skirmishplayerbox","makenewchar","inline ml10");
		x = '<form class="inline ml"><input type="checkbox" id="skirmishplayer" name="player" value="player"><span class="ml10">Player </span></form>';
	divContents("skirmishplayerbox",x);

	newDiv("skirmishclan","makenewchar","inline ml10");
	newSelect("skirmishclan","newClan"," inline","selectSkirmishClan();")
	fillSelectDropdownDefault("newClan","Select Clan",clans);
}


function getRandomName(){
	var name = nameMaker();
	document.getElementById("name").innerText = name
	document.getElementById("name").value = name

}

function selectSkirmishClan(){
	newDiv("skirmishschool","makenewchar","inline ml10");

	if (document.getElementById("newSchool") == null || document.getElementById("newSchool") == undefined){
			newSelect("skirmishschool","newSchool"," inline","selectSkirmishSchool();")
		}

	newDiv("skirmishability","skirmishcontainer","block ml10");

	var c = document.getElementById("newClan");
	selectedClan = c.options[c.selectedIndex].value;

	var option = document.createElement("option");
	document.getElementById("newSchool").innerHTML="";
	option.textContent="Select School";
	newSchool.appendChild(option);

	var schoolsList=document.getElementById("newSchool");

	var sSchool=schools[selectedClan];

	for (let elem in sSchool){
		var chosenSchool = sSchool[elem];
		option=document.createElement("option");
		option.textContent=chosenSchool.name;
		
		schoolsList.appendChild(option);
		document.getElementById("skirmishability").innerHTML="";
		}	
	}


function selectSkirmishSchool(){
	var s = document.getElementById("newSchool");
	selectedSchool = s.options[s.selectedIndex].label;

	var x = schools[selectedClan];
	for (let elem in x){
		var y = x[elem]
		if(selectedSchool == y.name){
		document.getElementById("skirmishability").innerHTML="";

		var disp = "School Ability: "+y.ability

		document.getElementById("skirmishability").innerHTML=disp
		}
	}

	newDiv("divendurance","makenewchar","inline ml10")
	newNumberInput("divendurance","endurance","inline","Endurance:","xendurance","w35")

	newDiv("divcomposure","makenewchar","inline ml10")
	newNumberInput("divcomposure","composure","inline","Composure:","xcomposure","w35")

	newDiv("divphysres","makenewchar","inline ml10")
	newNumberInput("divphysres","physicalres","inline","Phys Res:","xphysres","w35")

	newDiv("divsupres","makenewchar","inline ml10")
	newNumberInput("divsupres","supernaturalres","inline","Sup Res:","xsupres","w35")

	newDiv("addtoskirmish","makenewchar","inline ml10");
	newButton("addtoskirmish","addtoskirmishbutton","inline","addToSkirmish()","Add Character")

}


var skirmishcharacters={};


function addToSkirmish(){
 	fullname=document.getElementById("name").value;
 	title = fullname.replace(/ /g, "")
 	title = fullname.replace(/,/g, "")

 	skirmishcharacters[title]=new Object();
 	skirmishcharacters[title].name=fullname;
 	skirmishcharacters[title].clan=selectedClan;
 	skirmishcharacters[title].school=selectedSchool;
 	skirmishcharacters[title].endurance=parseInt(document.getElementById("xendurance").value);
 	skirmishcharacters[title].composure=parseInt(document.getElementById("xcomposure").value);
  	skirmishcharacters[title].physres=parseInt(document.getElementById("xphysres").value);
 	skirmishcharacters[title].supres=parseInt(document.getElementById("xsupres").value);
 	skirmishcharacters[title].ability=document.getElementById("skirmishability").innerHTML;

 	if (skirmishcharacters[title].physres==NaN){
 		skirmishcharacters[title].physres=0
 	}
 	if (skirmishcharacters[title].supres==NaN){
 		skirmishcharacters[title].supres=0
 	}


 	if(document.getElementById("skirmishplayer").checked){
 		skirmishcharacters[title].player=1;  //sets character as PC
 	} else {skirmishcharacters[title].player=0;}  //sets character as NPC

 	skirmishcharacters[title].fatigue=0;
 	skirmishcharacters[title].strife=0;
 	skirmishcharacters[title].initiative=0;
 	skirmishcharacters[title].stance="Stance";
 	skirmishcharacters[title].notes="";
 	skirmishcharacters[title].engaged="";
 	skirmishcharacters[title].status="alive";

 	buildSkirmishCharacter(title);

	hideAddElements();
	}


function hideAddElements(){
	document.getElementById("makenewchar").innerHTML=""; //clears form
	document.getElementById("skirmishability").innerHTML="";
	}


function update(name,property){
	if (name.id !== undefined){
		name = name.id
	}
	skirmishcharacters[name][property]=document.getElementById(name+"-"+property).value;
	}


function updateStance(name){

		if (name.id !== undefined){
			name = name.id;
		} else if (name.name !== undefined){
			name = name.name
		}

		var fullname = name;
		name = name.replace(/ /g, '');
		name = name.replace(/,/g, "")

	var stancebox=name+'-stance';
	var stanceicon=name+'-stanceicon';
	var n = document.getElementById(name+"-stance").options[document.getElementById(name+"-stance").selectedIndex].value

	hideAllIcons(name)

	switch(n){
		case "Air": 
			show(name+'-air');
		break;

		case "Earth":
			show(name+'-earth');
		break;

		case "Fire":
			show(name+'-fire');
		break;

		case "Water":
			show(name+'-water');
		break;

		case "Void":
			show(name+'-void');
		break;
	}
			var u=document.getElementById(name+"-stance").value;
			u = u.toLowerCase()
			divContents(name+'-stancetool',stances[u].ability)	;	
}

function hideAllIcons(name){
			hide(name+'-defaulticon');
			hide(name+'-air');
			hide(name+'-earth');
			hide(name+'-fire');
			hide(name+'-water');
			hide(name+'-void');
}

function showThisNpc(nom){
	if (document.getElementById("library").classList.contains("containerhidden")){
		highlight("npclibrarybutton","library")
	}

	showNpc(nom)
}

function buildSkirmishCharacter (nom){

	var array = []

	var namehtml = "<span onclick='onclick=showThisNpc(&quot;"+nom+"&quot;)'>"+skirmishcharacters[nom].name+" ("+skirmishcharacters[nom].clan+" / "+skirmishcharacters[nom].school+")</span>"

	array.push(namehtml)

	array.push("")
	array.push("")
	array.push("")
	array.push("/<span id='"+nom+"-endurance'>"+skirmishcharacters[nom].endurance+"</span>")
	array.push("")
	array.push("/<span id='"+nom+"-composure'>"+skirmishcharacters[nom].endurance+"</span>")
	array.push("")
	array.push("")
	array.push("")
	array.push("")
	array.push("")
	array.push("")

	var table = document.getElementById("skirmishtable").getElementsByTagName('tbody')

	var thisRow = table[0].insertRow(-1)

		for (var i = 0; i < array.length; i++){	
			var thisItemData = array[i];

			var thisCell = thisRow.insertCell(i);

			thisCell.innerHTML=thisItemData;
		}

	//makes player rows bold

	if (skirmishcharacters[nom].player == 1){
		thisRow.classList.add("bold")
	}

	//inserts all the inputs

	var parent = thisRow.cells[1]
	newNumberInput(parent,nom+'-skirmishinitiative',"aligncentre","",nom+"-initiative","w35")
	document.getElementById(nom+"-initiative").setAttribute("oninput",'update("'+nom+'","initiative")')
	document.getElementById(nom+"-initiative").value = 0 //set initial initiative to 0

	var parent = thisRow.cells[3]
	newNumberInput(parent,nom+'-skirmishfatigue',"aligncentre","",nom+"-fatigue","w35")
	document.getElementById(nom+'-fatigue').setAttribute("oninput",'update("'+nom+'","fatigue")')
	document.getElementById(nom+"-fatigue").value = 0 //set initial fatigue to 0

	var parent = thisRow.cells[5]
	newNumberInput(parent,nom+'-skirmishstrife',"aligncentre","",nom+"-strife","w35")
	document.getElementById(nom+'-strife').setAttribute("oninput",'update("'+nom+'","strife")')
	document.getElementById(nom+"-strife").value = 0 //set initial strife to 0

	var parent = thisRow.cells[7]
	newNumberInput(parent,nom+'-skirmishphysres',"aligncentre","",nom+"-physres","w35")
	document.getElementById(nom+"-physres").setAttribute("oninput",'update("'+nom+'","physres")')
	document.getElementById(nom+"-physres").value = skirmishcharacters[nom].physres //set initial physres

	var parent = thisRow.cells[8]
	newNumberInput(parent,nom+'-skirmishsupsres',"aligncentre","",nom+"-supres","w35")
	document.getElementById(nom+"-supres").setAttribute("oninput",'update("'+nom+'","supres")')
	document.getElementById(nom+"-supres").value = skirmishcharacters[nom].supres //set initial supres


	var parent = thisRow.cells[9]
	newTextInput(parent,nom+'-skirmishengaged',"aligncentre","",nom+"-engaged","w100")
	document.getElementById(nom+"-engaged").setAttribute("onchange",'update("'+nom+'","engaged")')


	var parent = thisRow.cells[10]
	newTextInput(parent,nom+'-skirmishnotes',"aligncentre","",nom+"-notes","w200")
	document.getElementById(nom+"-notes").setAttribute("onchange",'update("'+nom+'","notes")')
	

	var parent = thisRow.cells[2]
	var rings = ["Air","Earth","Fire","Water","Void"]
	newSelect(parent,nom+"-stance","inline","update('"+nom+"','stance');updateStance('"+nom+"')")
	fillSelectDropdownDefault(nom+"-stance","Stance",rings)

	newDiv(nom+"-stanceicon",parent,"inline w35")
	divContents(nom+"-stanceicon",'<span class="icon" id="'+nom+'-defaulticon">p</span><span class="icon air hide" id="'+nom+'-air">a</span><span class="icon hide earth" id="'+nom+'-earth">e</span><span class="icon fire hide" id="'+nom+'-fire">f</span><span class="icon water hide" id="'+nom+'-water">w</span><span class="icon void hide" id="'+nom+'-void">v</span>')
	document.getElementById(nom+"-stanceicon").setAttribute('onmouseover','hideShow("'+nom+'-stancetool")')
	document.getElementById(nom+"-stanceicon").setAttribute('onmouseout','hideShow("'+nom+'-stancetool")')

	newDiv (nom+"-stancetool",parent,"hide tooltiptext tooltipstance");	

	var parent = thisRow.cells[11];
	var statuslist = ["Alive","Out","Dead"];
	newSelect(parent,nom+'-status',"inline",'update("'+nom+'","status")');
	fillSelectDropdown(nom+'-status',statuslist);

	var parent = thisRow.cells[12];
	newDiv (nom+"-xdelete",parent,"inline");
	newButton(nom+"-xdelete",nom+'-delete',"button","deletechar('"+nom+"')","x") //makes delete button

	if (thisRow.rowIndex & 1){
		thisRow.classList.add("odd");
	}
	}


function deletechar (name){
	skirmishdiv=document.getElementById('skirmishtable');

	var tablerows = document.getElementById("skirmishtable").rows;

	delete skirmishcharacters[name];

	for (var i = 1; i < tablerows.length ; i++){
		if (tablerows[i].cells[0].textContent.includes(name)){  //deletes the row for the name
			skirmishdiv.deleteRow(i);
		}
	}
	for (var i = 1; i < tablerows.length ; i++){	
		if (tablerows[i].classList.contains("odd")){  //removes all the colour bands if they have it
			tablerows[i].classList.remove("odd");
		}
		if (i & 1){
			tablerows[i].classList.add("odd")  //adds them back on to every other row
		}
	}
	}


function reorderSkirmish(){
	var orderarray=[]; //start by clearing the data to begin anew
	var initarray=[];
	var namesarray=[];

	for (let elem in skirmishcharacters){ //builds array of name:init value pairs
			init=parseInt(skirmishcharacters[elem].initiative,10);
			
			if (skirmishcharacters[elem].player==1){ //prioritises players
				init += 0.5;
			} else {orderarray[elem]=orderarray[elem]}

			var div = document.getElementById(elem+"-status").value

			if (div =="Out" || div =="Dead"){
				init = -1;  //deprioritises unconscious and dead characters
			}
			
			orderarray[elem]=init;
			initarray.push(init); //builds array just of init values
		}
	initarray.sort(function(a,b){return b-a;});	 //sorts init values into highest->lowest

	for(var i = 0; i < initarray.length; i++) {
    		var highestInit = initarray[i];

    		for (let elem in orderarray){
    			if(orderarray[elem]==highestInit){
    				if (namesarray.includes(elem)){
    					;
    				} else {
    				namesarray.push(elem);	
    				}		//makes namesarray into ordered list of names in init order
    			} else {;}
		}
	}
	 clearSkirmishRows() //clears skirmish rows

	for(var i = 0; i < namesarray.length; i++) {
		elem = namesarray[i];
		buildSkirmishCharacter(elem);

		elem = namesarray[i];
		document.getElementById(elem+"-initiative").value=skirmishcharacters[elem].initiative;
		document.getElementById(elem+"-stance").value=skirmishcharacters[elem].stance;
		document.getElementById(elem+"-fatigue").value=skirmishcharacters[elem].fatigue;
		document.getElementById(elem+"-strife").value=skirmishcharacters[elem].strife;
		document.getElementById(elem+"-endurance").value=skirmishcharacters[elem].endurance;
		document.getElementById(elem+"-composure").value=skirmishcharacters[elem].composure;
		document.getElementById(elem+"-physres").value=skirmishcharacters[elem].physres;
		document.getElementById(elem+"-supres").value=skirmishcharacters[elem].supres;
		document.getElementById(elem+"-engaged").value=skirmishcharacters[elem].engaged;
		document.getElementById(elem+"-notes").value=skirmishcharacters[elem].notes;
		document.getElementById(elem+"-status").value=skirmishcharacters[elem].status;

		var chosenChar = skirmishcharacters[elem];
		updateStance(chosenChar);
	}
	}

	function updatestatus(name){
	statusbox = name+'-status';
	stanceicon = name+'-status';
	switch(document.getElementById(statusbox).value){
		case "alive":
			skirmishcharacters[name].status = "alive";
		break;

		case "out":
			skirmishcharacters[name].status = "out";
		break;

		case "dead":
			skirmishcharacters[name].status = "dead";
		break;
	}
}