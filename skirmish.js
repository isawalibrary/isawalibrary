var save ={};


function saveSkirmish(){
	saveskirmish.skirmishcharacters=skirmishcharacters;
	saveskirmish.skirmish=document.getElementById("skirmish").innerHTML;
	localStorage.setItem("saveskirmish",JSON.stringify(saveskirmish));
	}


function loadSkirmish(){
	save = JSON.parse(localStorage.getItem("saveskirmish"));

	if (save !== null){
	skirmishcharacters=save.skirmishcharacters;
}
	document.getElementById("skirmish").innerHTML="";

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

		valueToSet = skirmishcharacters[elem].stance;
		selectObj = document.getElementById(elem+"-stance")
		for (var i = 0; i < selectObj.options.length; i++) {
		        if (selectObj.options[i].text== valueToSet) {
		            selectObj.options[i].selected = true;

		        }
		    }

		updateStance(chosenChar);

		}
	}


function makeSkirmish(){

	newdiv("addnewcontainer","skirmishcontainer","button inline margin10")
	makeButton("addnewcontainer","addnewbutton","button inline skirmishbuttonstyle","makeNewChar()","Add new character to skirmish")

	newdiv("reorderskirmish","skirmishcontainer","button inline margin10")
	makeButton("reorderskirmish","reorderskirmishbutton","button inline","reorderSkirmish()","Reorder skirmish by initiative")

	newdiv("saveskirmish","skirmishcontainer","button inline margin10")
	makeButton("saveskirmish","saveskirmishbutton","button inline","saveSkirmish()","save skirmish")

	newdiv("loadskirmish","skirmishcontainer","button inline margin10")
	makeButton("loadskirmish","loadskirmishbutton","button inline","loadSkirmish()","load skirmish")

	newdiv("skirmish","skirmishcontainer","block")

}


var char={};

function makeNewChar(){
	newdiv("makenewchar","skirmishcontainer","block");
	makeTextInput("makenewchar","newcharname","styledselect inline margin10",'<span id="nameword" onclick="getRandomName()">Name: </span>',"name","styledselect")

	newdiv("skirmishplayerbox","makenewchar","inline margin10");
		x = '<form class="inline styledselect"><input type="checkbox" id="skirmishplayer" name="player" value="player">Player </form>';
	divcontents("skirmishplayerbox",x);

	newdiv("skirmishclan","makenewchar","inline margin10");
	makeSelect("skirmishclan","newClan","styledselect inline","selectClan();")
	makeSelectDropdown("newClan","Select Clan",clans);
}


function getRandomName(){
	name = nameMaker();
	document.getElementById("name").innerText = name
	document.getElementById("name").value = name

}

function selectClan(){
	newdiv("skirmishschool","makenewchar","inline margin10");

	if (document.getElementById("newSchool") == null || document.getElementById("newSchool") == undefined){
			makeSelect("skirmishschool","newSchool","styledselect inline","selectSchool();")
		}

	newdiv("skirmishability","skirmishcontainer","block margin10");

	var c = document.getElementById("newClan");
	selectedClan = c.options[c.selectedIndex].value;

	var option = document.createElement("option");
	document.getElementById("newSchool").innerHTML="";
	option.textContent="Select School";
	newSchool.appendChild(option);

	var schoolsList=document.getElementById("newSchool");

	sSchool=schools[selectedClan];

	for (let elem in sSchool){
		var chosenSchool = sSchool[elem];
		var option=document.createElement("option");
		option.textContent=chosenSchool.name;
		
		schoolsList.appendChild(option);
		document.getElementById("skirmishability").innerHTML="";
		}	
	}


function selectSchool(){
	var s = document.getElementById("newSchool");
	selectedSchool = s.options[s.selectedIndex].label;

	x = schools[selectedClan];
	for (let elem in x){
		y = x[elem]
		if(selectedSchool == y.name){
		document.getElementById("skirmishability").innerHTML="";

		disp = "School Ability: "+y.ability

		document.getElementById("skirmishability").innerHTML=disp
		}
	}

	newdiv("divendurance","makenewchar","inline margin10")
	makeNumberInput("divendurance","endurance","styledselect","Endurance:","xendurance","numberform")

	newdiv("divcomposure","makenewchar","inline margin10")
	makeNumberInput("divcomposure","composure","styledselect","Composure:","xcomposure","numberform")

	newdiv("divphysres","makenewchar","inline margin10")
	makeNumberInput("divphysres","physicalres","styledselect","Phys Res:","xphysres","numberform")

	newdiv("divsupres","makenewchar","inline margin10")
	makeNumberInput("divsupres","supernaturalres","styledselect","Sup Res:","xsupres","numberform")

	newdiv("addtoskirmish","makenewchar","inline margin10");
	makeButton("addtoskirmish","addtoskirmishbutton","button inline","addToSkirmish()","Add Character")

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
 	skirmishcharacters[title].status=skirmishcharacters[elem].status;

 	buildSkirmishCharacter(title);

	hideAddElements();
	}


function hideAddElements(){
	document.getElementById("makenewchar").innerHTML=""; //clears form
	document.getElementById("skirmishability").innerHTML="";
	}


function update(name,property){
	name = name.id
	skirmishcharacters[name][property]=document.getElementById(name+"-"+property).value;
	}


function updateStance(name){

		if (name.id !== undefined){
			name = name.id;
		} else if (name.name !== undefined){
			name = name.name
		}

		fullname = name;
		name = name.replace(/ /g, '');
		name = name.replace(/,/g, "")

	stancebox=name+'-stance';
	stanceicon=name+'-stanceicon';
	n = document.getElementById(name+"-stance").options[document.getElementById(name+"-stance").selectedIndex].value
	switch(n){
		case "air":
			hide(name+'-defaulticon');
			show(name+'-air');
			hide(name+'-earth');
			hide(name+'-fire');
			hide(name+'-water');
			hide(name+'-void');
		break;

		case "earth":
			hide(name+'-defaulticon');
			hide(name+'-air');
			show(name+'-earth');
			hide(name+'-fire');
			hide(name+'-water');
			hide(name+'-void');
		break;

		case "fire":
			hide(name+'-defaulticon');
			hide(name+'-air');
			hide(name+'-earth');
			show(name+'-fire');
			hide(name+'-water');
			hide(name+'-void');
		break;

		case "water":
			hide(name+'-defaulticon');
			hide(name+'-air');
			hide(name+'-earth');
			hide(name+'-fire');
			show(name+'-water');
			hide(name+'-void');
		break;

		case "void":
			hide(name+'-defaulticon');
			hide(name+'-air');
			hide(name+'-earth');
			hide(name+'-fire');
			hide(name+'-water');
			show(name+'-void');
		break;
	}
			u=document.getElementById(name+"-stance").value;
			v=stances[u].ability;
			divcontents(name+'-stancetool',v)	;	
}

function showThisNpc(nom){
	if (document.getElementById("library").classList.contains("containerx")){
		highlight("npclibrarybutton","library")
	}

	showNpc(nom)
}

function buildSkirmishCharacter (nom){

	newdiv (nom,"skirmish","block margin10") //creates container for all char stats

 	newdiv (nom+"-name",nom," styledselect namelength");  //creates name container
 		
 		if (skirmishcharacters[nom].player==1){		//sets PC or NPC
				divcontents (nom+"-name","<b>"+skirmishcharacters[nom].name+"</b>");
			} else {
				divcontents (nom+"-name",skirmishcharacters[nom].name); 
			}

 	newdiv (nom+"-clan",nom,"margin10 styledselect clanlength");  //creates clan and school container


	x='class="inline" onclick=showThisNpc("'+nom+'");'

 	divcontents (nom+"-clan",'<div '+x+'>'+"("+skirmishcharacters[nom].clan+" / "+skirmishcharacters[nom].school+")</div>");  //enters clan and school
 	

 	newdiv (nom+"-xinitiative",nom,"inline margin10");  //creates initiative container


	makeNumberInput(nom+"-xinitiative",nom+'-yinitiative',"inline styledselect","Init:",nom+"-initiative","numberform")
	formid = nom+'-yinitiative'
	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"initiative")')


 	newdiv (nom+"-xstance",nom,"inline margin10");  //creates stance container
 	makeSelect(nom+"-xstance",nom+"-stance","styledselect","update("+nom+",'stance');updateStance("+nom+")")

		y = document.getElementById(nom+'-stance'); //creates stance dropdown

		var stanceList = document.getElementById(y);
		for (elem in stances){

				var el = document.createElement("option");			
			    el.textContent = elem;
			    el.value = elem;
			    y.appendChild(el);
			}

		    y.selectedOption=0;

 	newdiv (nom+"-stanceicon",nom,"inline stancediv stancelength");  //creates stance tooltip
		    v=' onmouseover=hideshow("'+nom+'-stancetool") onmouseout=hideshow("'+nom+'-stancetool")'
		    x = '<span class="icon" id="'+nom+'-defaulticon">p</span><span class="icon air hide" id="'+nom+'-air">a</span><span class="icon hide earth" id="'+nom+'-earth">e</span><span class="icon fire hide" id="'+nom+'-fire">f</span><span class="icon water hide" id="'+nom+'-water">w</span><span class="icon void hide" id="'+nom+'-void">v</span>';
			divcontents(nom+"-stanceicon","<div class='inline' "+v+">"+x+"</div>");


 	newdiv (nom+"-zendurance",nom,"fatiguelength margin10");  //creates endurance&fatigue container
	makeNumberInput(nom+"-zendurance",nom+'-yendurance',"inline styledselect","Fatigue:",nom+'-fatigue',"numberform")
	formid = nom+'-yendurance';
	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"fatigue")')
	newdiv (nom+"-endurance",nom+"-zendurance","inline")


 	newdiv (nom+"-zcomposure",nom," strifelength margin10");  //creates composure and strife container
 	makeNumberInput(nom+"-zcomposure",nom+'-ycomposure',"inline styledselect","Strife:",nom+'-strife',"numberform")
 	formid = nom+'-ycomposure';
	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"strife")')
	newdiv (nom+"-composure",nom+"-zcomposure","inline")

  	newdiv (nom+"-physres",nom," reslength margin10");  //creates phys res container
  	makeNumberInput(nom+"-physres",nom+'-yphysres',"inline styledselect","Phys:",nom+'-nphysres',"numberform")
  	 formid = nom+'-yphysres';
	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"physres")')


 	newdiv (nom+"-supres",nom," reslength margin10");  //creates supres container
 	makeNumberInput(nom+"-supres",nom+'-ysupres',"inline styledselect","Sup:",nom+'-nsupres',"numberform")
 	 formid = nom+'-ysupres';
	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"supres")')


 	document.getElementById(nom+"-nphysres").value=skirmishcharacters[nom].physres;
	document.getElementById(nom+"-nsupres").value=skirmishcharacters[nom].supres;


   	newdiv (nom+"-xengaged",nom,"margin10 inline");  //creates engaged with container
   	makeTextInput(nom+"-xengaged",nom+'-yengaged',"inline styledselect","Engaged:",nom+'-engaged',"styledselect")
   	formid=nom+'-yengaged'
   	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"engaged")')
	document.getElementById(formid).style.width = "70px"


  	newdiv (nom+"-xnotes",nom," margin10 inline");  //creates conditions and notes container
 	makeTextInput(nom+"-xnotes",nom+'-ynotes',"inline styledselect","Notes:",nom+'-notes',"noteslength styledselect")
    formid=nom+'-ynotes'
   	document.getElementById(formid).setAttribute("oninput",'update('+nom+',"notes")')


  	newdiv (nom+"-xstatus",nom," margin10 inline");  //status selector
	makeSelect(nom+"-xstatus",nom+'-status',"styledselect",'update('+nom+',"status")')

		y = document.getElementById(nom+'-status');

		for(var i = 0; i < statuslist.length; i++) {
			z=statuslist[i];
			
		var el = document.createElement("option");			
		    el.textContent = statuslist[i];
		    el.value = statuslist[i];
		    y.appendChild(el);}
 

	newdiv (nom+"-xdelete",nom,"margin10 inline");
	makeButton(nom+"-xdelete",nom+'-delete',"button","deletechar("+nom+")","x") //makes delete button

	newdiv (nom+"-stancetool",nom,"hide tooltiptext tooltipstance");

	document.getElementById(nom+"-endurance").innerHTML = " /"+skirmishcharacters[nom].endurance
	document.getElementById(nom+"-composure").innerHTML = " /"+skirmishcharacters[nom].composure
	}


function deletechar (name){
	skirmishdiv=document.getElementById('skirmish');
	skirmishdiv.removeChild(name);
	delete skirmishcharacters[name.id];
	}


function reorderSkirmish(){
	var orderarray=[]; //start by clearing the data to begin anew
	var initarray=[];
	var namesarray=[];

	for (let elem in skirmishcharacters){ //builds array of name:init value pairs
			init=parseInt(skirmishcharacters[elem].initiative,10);
			
			if (skirmishcharacters[elem].player==1){ //prioritises players
				init+=0.5;
			} else {orderarray[elem]=orderarray[elem]}

			if (skirmishcharacters[elem].status=="out" || skirmishcharacters[elem].status=="dead"){
				init=-1  //deprioritises unconscious and dead characters
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
	document.getElementById("skirmish").innerHTML=""; //clears skirmish div

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