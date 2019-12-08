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
		document.getElementById(elem+"-stance").selectedIndex =0;
		document.getElementById(elem+"-fatigue").value=skirmishcharacters[elem].fatigue;
		document.getElementById(elem+"-strife").value=skirmishcharacters[elem].strife;
		document.getElementById(elem+"-endurance").value=skirmishcharacters[elem].endurance;
		document.getElementById(elem+"-composure").value=skirmishcharacters[elem].composure;
		document.getElementById(elem+"-physres").value=skirmishcharacters[elem].physres;
		document.getElementById(elem+"-supres").value=skirmishcharacters[elem].supres;
		document.getElementById(elem+"-engaged").value=skirmishcharacters[elem].engaged;
		document.getElementById(elem+"-notes").value=skirmishcharacters[elem].notes;

		updateStance(chosenChar);

		}
	}


function makeSkirmish(){

	newdiv("addnewcontainer","skirmishcontainer","button inline margin10")
	makeButton("addnewcontainer","addnewbutton","button inline","makeNewChar()","Add new character to skirmish")


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
	document.getElementById("name").value = name

}

function selectClan(){
	newdiv("skirmishschool","makenewchar","inline margin10");
	makeSelect("skirmishschool","newSchool","styledselect inline","selectSchool();")

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
	makeButton("addtoskirmish","addtoskirmish","button inline","addToSkirmish()","Add Character")

}


var skirmishcharacters={};


function addToSkirmish(){
 	newName=document.getElementById("name").value;

 	skirmishcharacters[newName]=new Object();
 	skirmishcharacters[newName].name=newName;
 	skirmishcharacters[newName].clan=selectedClan;
 	skirmishcharacters[newName].school=selectedSchool;
 	skirmishcharacters[newName].endurance=parseInt(document.getElementById("xendurance").value);
 	skirmishcharacters[newName].composure=parseInt(document.getElementById("xcomposure").value);
  	skirmishcharacters[newName].physres=parseInt(document.getElementById("xphysres").value);
 	skirmishcharacters[newName].supres=parseInt(document.getElementById("xsupres").value);
 	skirmishcharacters[newName].ability=document.getElementById("skirmishability").innerHTML;

 	if (skirmishcharacters[newName].physres==NaN){
 		skirmishcharacters[newName].physres=0
 	}
 	if (skirmishcharacters[newName].supres==NaN){
 		skirmishcharacters[newName].supres=0
 	}


 	if(document.getElementById("skirmishplayer").checked){
 		skirmishcharacters[newName].player=1;  //sets character as PC
 	} else {skirmishcharacters[newName].player=0;}  //sets character as NPC

 	skirmishcharacters[newName].fatigue=0;
 	skirmishcharacters[newName].strife=0;
 	skirmishcharacters[newName].initiative=0;
 	skirmishcharacters[newName].stance="Stance";
 	skirmishcharacters[newName].notes="";
 	skirmishcharacters[newName].engaged="";
 	skirmishcharacters[newName].status="alive";

 	buildSkirmishCharacter(newName);

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

		if (name.id != undefined){
			name = name.id;
		} else if (name.name != undefined){
			name = name.name
		}

	stancebox=name+'-stance';
	stanceicon=name+'-stanceicon';
	switch(document.getElementById(name+'-stance').value){
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


function buildSkirmishCharacter (nom){

	newdiv (nom,"skirmish","block margin10") //creates container for all char stats

 	newdiv (nom+"-name",nom," styledselect namelength");  //creates name container
 		
 		if (skirmishcharacters[nom].player==1){		//sets PC or NPC
				divcontents (nom+"-name","<b>"+nom+"</b>");
			} else {
				divcontents (nom+"-name",nom); 
			}

 	newdiv (nom+"-clan",nom,"margin10 styledselect clanlength");  //creates clan and school container


	x='class="inline" onmouseover=hideshow("'+nom+'-xschoolability") onmouseout=hideshow("'+nom+'-xschoolability")'
 	divcontents (nom+"-clan",'<div '+x+'>'+"("+skirmishcharacters[nom].clan+" / "+skirmishcharacters[nom].school+")</div>");  //enters clan and school
 	

 	newdiv (nom+"-xschoolability",nom,"tooltiptext tooltipclass hide")  //creates school ability tooltip
 	divcontents (nom+'-xschoolability',skirmishcharacters[nom].ability);


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




//NPC BUILDER

var thisnpc = {};


function selectType(){
	var archetypelist = [];
	for (elem in archetypes){

	if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
		archetypelist.push(archetypes[elem].title);
	}}

	makeSelectDropdown("archetype","Select Archetype",archetypelist);
	buildNpcMenu1();

	document.getElementById("npcstats").classList.add("hide");

	var type = document.getElementById("type").value

	template = document.getElementById("npctemplate")
	clan = document.getElementById("npcclan")
	school = document.getElementById("npcschool")
	save = document.getElementById("npcsave")


	if (type == "Animals"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (type == "Creatures"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (type == "Rokugani"){

		template.classList.remove("hide");
		clan.classList.remove("hide");
		school.classList.remove("hide");
		save.classList.remove("hide")

		document.getElementById("npcsavebutton").classList.add("hide");

	}
	if (type == "Pregen"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}
}


function buildNpcMenu(){

	document.getElementById("npcmenu").innerHTML = "";

	newdiv("npctype","npcmenu","inline");
	makeSelect("npctype","type","styledselect","selectType();")

	var typelist = ["Rokugani","Animals","Creatures","Pregen",];
	makeSelectDropdown1("type",typelist);

	newdiv("npcarchetype","npcmenu","inline margin10");
	makeSelect("npcarchetype","archetype","styledselect","getNPCName();selectArchetype();blankTemplateClanAndSchool();")

	var archetypelist = [];
	for (elem in archetypes){

	if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
		archetypelist.push(archetypes[elem].title);
	}}
	archetypelist.sort();

	makeSelectDropdown("archetype","Select Archetype",archetypelist);

	buildNpcMenu1();
}


function buildNpcMenu1(){

	newdiv("npctemplate","npcmenu","inline hide");
	if (document.getElementById("template") == null){
		makeSelect("npctemplate","template","styledselect inline margin10","selectTemplate();")
	}

	var templatelist = [];

	for (elem in templates){
			templatelist.push(templates[elem].title);
			}

	templatelist.sort();

	makeSelectDropdown("template","Select Template",templatelist);
	
	newdiv("npcclan","npcmenu","inline margin10 hide");

	if (document.getElementById("npcclanselect") == null){
		makeSelect("npcclan","npcclanselect","styledselect inline","selectNPCClan();makeSchoolDropdown();")
	}

	makeSelectDropdown("npcclanselect","Select Clan",clans);

	newdiv("npcschool","npcmenu","inline margin10 hide");
	if (document.getElementById("npcschoolselect") == null){
		makeSelect("npcschool","npcschoolselect","styledselect","selectNPCSchool();")
	}	

	newdiv("npcsave","npcmenu","inline margin10 hide");
	if (document.getElementById("npcsavebutton") == null){
		makeButton("npcsave","npcsavebutton","button inline","saveNPC()","save NPC")
	}
}


function selectArchetype(){
	show("npctemplate");
	show("npcclan");
	show("npcschool");
	show("npcsave");
	show("npcstats")

	selectedArcTitle = document.getElementById("archetype").value;

	for (elem in archetypes){
	if (archetypes[elem].title == selectedArcTitle){
		selectedArchetype = archetypes[elem]
		}
	}

	x = '<i>'+selectedArchetype.title+'</i> <span class="l5r">m</span> <span id="npcconflictcombat">'+selectedArchetype.conflictcombat+'</span> <span class="l5r">c</span> <span id="npcconflictintrigue">'+selectedArchetype.conflictintrigue+'</span>';
	divcontents("npcinfo",x);

	if (selectedArchetype.ring.type !== "set"){
				selectedArchetype.extra();
		}


	x = '<div class="paddingtopbottom">Rings: <span class="margin10 air l5r">a</span> <span id="npcAir">'+selectedArchetype.ring.Air+'</span>'+
		'<span class="l5r earth margin10">e</span> <span id="npcEarth">'+selectedArchetype.ring.Earth+'</span>'+
		'<span class="l5r fire margin10">f</span> <span id="npcFire">'+selectedArchetype.ring.Fire+ '</span>'+
		'<span class="l5r water margin10">w</span> <span id="npcWater">'+selectedArchetype.ring.Water+ '</span>'+
		'<span class="margin10 void l5r">v</span> <span id="npcVoid">'+selectedArchetype.ring.Void+'</div>'+'</span>'+
		'Endurance: <span id="npcendurance">'+selectedArchetype.endurance+'</span>'+
		'<span class="margin10">Composure:</span> <span id="npccomposure">'+selectedArchetype.composure+'</span>'+
		'<span class="margin10">Focus:</span> <span id="npcfocus">'+selectedArchetype.focus+'</span>'+
		'<span class="margin10">Vigilance:</span> <span id="npcvigilance">'+selectedArchetype.vigilance+'</span>' 
	divcontents("npcrings",x) 
	makeButton("npcrings","calcderivedstatbutton","button inline margin10","calculateDerivedStats()","calculate derived stats")


	x = '<div class="techresults"><span>Honor: </span><span id="npchonor">'+selectedArchetype.honor+'</span>'+
		'<span class="margin10">Glory: </span><span id="npcglory">'+selectedArchetype.glory+'</span>'+
		'<span class="margin10">Status: </span><span id="npcstatus">'+selectedArchetype.status+'</span>'+
		'<span class="margin10">Demeanor: <select id="npcdemeanor" class="styledselect inline margintopbottom" onchange="setDemeanor()"></select>'+
		'<span id="npcdemeanornotes" class="inline margin10"></span>'+
		'<button class="button inline hide margin10" id="npccalcsocial" onclick="npcCalcSocial()">calculate social stats</button></div>' +
		'<div class="paddingtopbottom">Skills: <span class="margin10">Artisan: </span><span id="npcartisanskill">'+selectedArchetype.skills.artisanskill+'</span>'+
		'<span class="margin10">Martial: </span><span id="npcmartialskill">'+selectedArchetype.skills.martialskill+'</span>'+
		'<span class="margin10">Social: </span><span id="npcsocialskill">'+selectedArchetype.skills.socialskill+'</span>'+
		'<span class="margin10">Scholar: </span><span id="npcscholarskill">'+selectedArchetype.skills.scholarskill+'</span>'+
		'<span class="margin10">Trade: </span><span id="npctradeskill">'+selectedArchetype.skills.tradeskill+'</span></div>';
	divcontents("npcskills",x);

	makeSelectDropdown1("npcdemeanor",selectedArchetype.demeanor);

	x = 'Weapon: <select id="npcweapon" class="styledselect inline margintopbottom" onchange="selectNPCWeapon();"></select>';
	divcontents("npcequip",x);

	makeSelectDropdown1("npcweapon",selectedArchetype.weapon); 

	x = 'Clothing: <select id="npcarmor" class="styledselect inline margintopbottom" onchange="selectNPCArmor();"></select>';
	divcontents("npcequiparmor",x);

	makeSelectDropdown1("npcarmor",selectedArchetype.armor); 

	x = 'Advantages: <select id="npcadv" class="styledselect inline margintopbottom"></select><br>'+
		'Disadvantages: <select id="npcdisadv" class="styledselect inline margintopbottom"></select>';
	divcontents("npcadvdisadv",x)

	makeSelectDropdown1("npcadv",selectedArchetype.advantages)

	makeSelectDropdown1("npcdisadv",selectedArchetype.disadvantages)

	x = "";
	if(selectedArchetype.abilities.length>0){
	for (i=0; i<selectedArchetype.abilities.length; i++){
		x += selectedArchetype.abilities[i]+'<br>';
		}
	} else {
		x += 'None'
	}

	divcontents("npcabilities",x)

	x = "";
	if(selectedArchetype.techniques.length>0){
		for (i=0; i<selectedArchetype.techniques.length; i++){
			x += selectedArchetype.techniques[i]+'<br>';
		}
	} else {
		x += 'None'
	}

	divcontents("npctechniquecontainer",x)

	setNPCArchetypeStats();
	setDemeanor();
	selectNPCWeapon();
	selectNPCArmor();

	var template = document.getElementById("npctemplate")
	var clan = document.getElementById("npcclan")
	var school = document.getElementById("npcschool")
	var save = document.getElementById("npcsave") 

	if (selectedArchetype.type == "Animals"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.remove("hide");

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (selectedArchetype.type == "Creatures"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.remove("hide");

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (selectedArchetype.type == "Rokugani"){

		template.classList.remove("hide");
		clan.classList.remove("hide");
		school.classList.remove("hide");
		document.getElementById("npcsavebutton").classList.add("hide");

	}
	if (selectedArchetype.type == "Pregen"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		save.classList.remove("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;


	}

}

function buildNpcStats(){

	document.getElementById("npcstats").innerHTML = "";

	newdiv("npcname","npcstats","inline");
	makeTextInput("npcname","newnpcname","styledselect inline margin10",'<span id="npcnameword" onclick="getNPCName()">Name: </span>',"npcnameinput","styledselect")

	newdiv("npcinfo","npcstats","inline margin10")

	newdiv("npcrings","npcstats","block margin10")

	newdiv("npcskills","npcstats","block margin10")

	newdiv("npcequip","npcstats","block margin10")

	newdiv("npcweaponstats","npcequip","inline")

	newdiv("npcequiparmor","npcstats","block margin10")
	
	newdiv("npcarmorstats","npcequiparmor","inline")
	
	newdiv("npcadvdisadv","npcstats","block margin10")
	
	newdiv("npcabilitycontainer","npcstats","block margin10 defcategory")
	divcontents("npcabilitycontainer","Abilities:<br>");

	newdiv("npcschoolability","npcabilitycontainer","inline block")

	newdiv("npcabilities","npcabilitycontainer","inline block")
	
	newdiv("npctechs","npcstats","block margin10 defcategory")
	divcontents("npctechs","Techniques:<br>");

	newdiv("npcschooltechnique","npctechs","block")
	newdiv("npcschooltechniquedetails","npctechs","block")

	newdiv("npctechniquecontainer","npctechs","block")
}


function getNPCName(){
	name = nameMaker();
	document.getElementById("npcnameinput").value = name

	thisnpc.name = name;
}

function blankTemplateClanAndSchool(){

		document.getElementById("template").value = "Select Template";
		document.getElementById("npcclanselect").value = "Select Clan";

		document.getElementById("npcschoolselect").innerHTML = "";
}

var selectedArchetype = {};

var selectedTemplate = {
	title:"",
	conflictintrigue:0,
	conflictcombat:0,
	ring:{Air:0,Earth:0,Fire:0,Water:0,Void:0},
	endurance:0,
	composure:0,
	focus:0,
	vigilance:0,
	artisanskill:0,
	martialskill:0,
	socialskill:0,
	scholarskill:0,
	tradeskill:0,
	advantages:[],
	disadvantages:[],
	extratechs:0,
	techtypes:[],
	demeanor:[],
};

var selectedClan = {
			clanring:"",
			clanskill:"",
			clanstatus:0,
			weapons:[],
			armor:[],
			advantages:[],
			disadvantages:[],
};

var selectedSchool = {
		name: "",
		schoolskills: {
			Artisan:0,Martial:0,Social:0,Scholar:0,Trade:0,
		},
		techniquetypes: [],
		role: [],
		advantages: [],
		disadvantages: [],
		startingtechs: [],
		startingtechoptions: [],
		ability: "",
};



function npcCalcSocial(){
	thisnpc.honor = selectedSchool.honor;
	updateSpans("honor");
	
	thisnpc.status = selectedClan.clanstatus;
	updateSpans("status");

	family = selectedSchool.family
	thisnpc.glory = selectedClan[family].glory;
	updateSpans("glory");
}


function setNPCArchetypeStats(){
	thisnpc.name = document.getElementById("npcnameinput").value
	thisnpc.archetype = selectedArchetype.title;
	thisnpc.type = selectedArchetype.type;
	thisnpc.equiptype = selectedArchetype.equiptype;
	thisnpc.conflictcombat = selectedArchetype.conflictcombat;
	thisnpc.conflictintrigue = selectedArchetype.conflictintrigue;
	thisnpc.Air = selectedArchetype.ring.Air;
	thisnpc.Earth = selectedArchetype.ring.Earth;
	thisnpc.Fire = selectedArchetype.ring.Fire;
	thisnpc.Water = selectedArchetype.ring.Water;
	thisnpc.Void = selectedArchetype.ring.Void;
	thisnpc.max = selectedArchetype.max;
	thisnpc.endurance = selectedArchetype.endurance;
	thisnpc.composure = selectedArchetype.composure;
	thisnpc.focus = selectedArchetype.focus;
	thisnpc.vigilance = selectedArchetype.vigilance;
	thisnpc.honor = selectedArchetype.honor;
	thisnpc.glory = selectedArchetype.glory;
	thisnpc.status = selectedArchetype.status;
	thisnpc.artisanskill = selectedArchetype.skills.artisanskill;
	thisnpc.martialskill = selectedArchetype.skills.martialskill;
	thisnpc.socialskill = selectedArchetype.skills.socialskill;
	thisnpc.scholarskill = selectedArchetype.skills.scholarskill;
	thisnpc.tradeskill = selectedArchetype.skills.tradeskill;
	thisnpc.demeanor = selectedArchetype.demeanor;
	thisnpc.weapon = selectedArchetype.weapon;
	thisnpc.armor = selectedArchetype.armor
	thisnpc.advantage = selectedArchetype.advantages;
	thisnpc.disadvantage = selectedArchetype.disadvantages;
	thisnpc.ability = selectedArchetype.abilities;
	thisnpc.techniques = selectedArchetype.techniques;
}

function makeSchoolDropdown(){
	var e = document.getElementById("npcclanselect");
	selectedClan = e.options[e.selectedIndex].value;

	var el = document.createElement("option");
	document.getElementById("npcschoolselect").innerHTML="";
	el.textContent="Select School";
	npcschoolselect.appendChild(el);

	var schoolsList=document.getElementById("npcschoolselect");

	sSchool=schools[selectedClan];

	for (let elem in sSchool){
		var chosenSchool = sSchool[elem];
		var el=document.createElement("option");
		el.textContent=chosenSchool.name;
		
		schoolsList.appendChild(el);
		}	
}

function setNPCStats(){

	selectedArcetype = document.getElementById("archetype").value;
	for (elem in archetypes){
	if (archetypes[elem].title == selectedArchetype){
		selectedArchetype = archetypes[elem]
		}
	}

	if (document.getElementById("template").value !== "Select Template"){
		selectedTemplate = document.getElementById("template").value;
		for (elem in templates){
		if (templates[elem].title == selectedTemplate){
			selectedTemplate = templates[elem]
			}
		}}

	if (document.getElementById("npcclanselect").value !== "Select Clan"){
		selectedClan = document.getElementById("npcclanselect").value;
		for (elem in families){
		if (elem == selectedClan){
			selectedClan = families[elem]
			}
		}}

	if (document.getElementById("npcschoolselect").value !== ""){
		selectedSchool = document.getElementById("npcschoolselect").value;
		for (elem in schools){
		for (each in schools[elem]){
		if (schools[elem][each].name == selectedSchool){
			selectedSchool = schools[elem][each]
			}
		}}}

			if (selectedSchool == "Select School"){
				selectedSchool = {
				name: "",
				schoolskills: {
					Artisan:0,Martial:0,Social:0,Scholar:0,Trade:0,
				},
				techniquetypes: [],
				role: [],
				advantages: [],
				disadvantages: [],
				startingtechs: [],
				startingtechoptions: [],
				ability: "",
					};
				}

	if (selectedTemplate.ring.type == "random"){
		numbers = [2,1,1,0,0];
		shuffle(numbers);
		selectedTemplate.ring.Air = numbers[1];
		selectedTemplate.ring.Earth = numbers[2];
		selectedTemplate.ring.Fire = numbers[3];
		selectedTemplate.ring.Water = numbers[4];
		selectedTemplate.ring.Void = numbers[0];
	}

	thisnpc.name = document.getElementById("npcnameinput").value
	thisnpc.archetype = selectedArchetype.title;
	thisnpc.type = selectedArchetype.type;
	thisnpc.conflictcombat = selectedArchetype.conflictcombat + selectedTemplate.conflictcombat;
	thisnpc.conflictintrigue = selectedArchetype.conflictintrigue + selectedTemplate.conflictintrigue;

	thisnpc.Air = selectedArchetype.ring.Air + selectedTemplate.ring.Air;
	thisnpc.Earth = selectedArchetype.ring.Earth + selectedTemplate.ring.Earth;
	thisnpc.Fire = selectedArchetype.ring.Fire + selectedTemplate.ring.Fire;
	thisnpc.Water = selectedArchetype.ring.Water + selectedTemplate.ring.Water;
	thisnpc.Void = selectedArchetype.ring.Void + selectedTemplate.ring.Void;

	rings = ["Air","Earth", "Fire", "Water", "Void"]

	if (selectedClan.clanring !== ""){

	if (selectedClan.clanring == "random"){	
			array = ["Earth","Air","Fire","Water","Void"]

			ring = getRandom(array);

			selectedClan.clanring = ring;
			}

		clanring = selectedClan.clanring

		for (each in clanring){
		ring = thisnpc[each]

		if (ring <= (thisnpc.max -1)){
			for (elem in thisnpc){
				if (elem == each){
					thisnpc[elem] = thisnpc[elem] + selectedClan.clanring[each];
				}	}
		} else {
			clanring = getRandom(rings)
			ring = thisnpc[clanring]
			if (ring <= thisnpc.max -1){
				for (elem in thisnpc){
					if (elem == clanring){
						thisnpc[elem] = thisnpc[elem] + selectedClan.clanring[each];
				}	};}}
			}}

	updateSpans("Air");
	updateSpans("Earth");
	updateSpans("Fire");
	updateSpans("Water");
	updateSpans("Void");

	thisnpc.endurance = selectedArchetype.endurance + selectedTemplate.endurance;
	thisnpc.composure = selectedArchetype.composure + selectedTemplate.composure;
	thisnpc.focus = selectedArchetype.focus + selectedTemplate.focus;
	thisnpc.vigilance = selectedArchetype.vigilance + selectedTemplate.vigilance;

	thisnpc.honor = selectedArchetype.honor;
	thisnpc.glory = selectedArchetype.glory;
	thisnpc.status = selectedArchetype.status;

	thisnpc.artisanskill = selectedArchetype.skills.artisanskill + selectedTemplate.artisanskill + selectedSchool.schoolskills.Artisan;
	thisnpc.martialskill = selectedArchetype.skills.martialskill + selectedTemplate.martialskill + selectedSchool.schoolskills.Martial;
	thisnpc.socialskill = selectedArchetype.skills.socialskill + selectedTemplate.socialskill +  + selectedSchool.schoolskills.Social;
	thisnpc.scholarskill = selectedArchetype.skills.scholarskill + selectedTemplate.scholarskill + selectedSchool.schoolskills.Scholar;
	thisnpc.tradeskill = selectedArchetype.skills.tradeskill + selectedTemplate.tradeskill +  + selectedSchool.schoolskills.Trade;

	thisnpc.demeanor = [];

	for (i=0; i<selectedArchetype.demeanor.length; i++){
			thisnpc.demeanor.push(selectedArchetype.demeanor[i]) 
		}

	for (i=0; i< selectedTemplate.demeanor.length; i++){
		if (thisnpc.demeanor.includes(selectedTemplate.demeanor[i]) == false){
				thisnpc.demeanor.push(selectedTemplate.demeanor[i])
			}
	}

	thisnpc.weapon = [];
	for (j=0; j< selectedArchetype.weapon.length; j++){
		thisnpc.weapon.push(selectedArchetype.weapon[j]);
	}

	for (i=0; i< selectedClan.weapons.length; i++){
		if (thisnpc.weapon.includes(selectedClan.weapons[i]) == false){
				thisnpc.weapon.push(selectedClan.weapons[i])
			}
	}

	thisnpc.armor = [];
	for (j=0; j< selectedArchetype.armor.length; j++){
		thisnpc.armor.push(selectedArchetype.armor[j]);
	}
	for (i=0; i< selectedClan.armor.length; i++){
		if (thisnpc.armor.includes(selectedClan.armor[i]) == false){
				thisnpc.armor.push(selectedClan.armor[i])
			}
	}

	thisnpc.advantage = [];
	for (i=0; i<selectedArchetype.advantages.length; i++){
		thisnpc.advantage.push(selectedArchetype.advantages[i]) 
		}
	for (i=0; i<selectedTemplate.advantages.length; i++){
		thisnpc.advantage.push(selectedTemplate.advantages[i]);
		}
	for (i=0; i<selectedClan.advantages.length; i++){
		thisnpc.advantage.push(selectedClan.advantages[i]);
		}

	thisnpc.disadvantage = [];
	for (i=0; i<selectedArchetype.disadvantages.length; i++){
		thisnpc.disadvantage.push(selectedArchetype.disadvantages[i]) 
		}
	for (i=0; i<selectedTemplate.disadvantages.length; i++){
		thisnpc.disadvantage.push(selectedTemplate.disadvantages[i]);
		}
	for (i=0; i<selectedClan.disadvantages.length; i++){
		thisnpc.disadvantage.push(selectedClan.disadvantages[i]);
		}

	thisnpc.ability = selectedArchetype.abilities;
	thisnpc.techniques = selectedArchetype.techniques;
}

function selectNPCClan(){

	selectTemplate()
	document.getElementById("npcschooltechniquedetails").innerHTML = "";
}

function selectNPCSchool(){
	selectTemplate();

	skillgroups = ["Artisan","Martial","Social","Scholar","Trade"];

	if (selectedClan.clanskill !== ""){

		clanskill = selectedClan.clanskill.toLowerCase() 
		clanskill = clanskill + "skill"; 

		skill = thisnpc[clanskill]
		if (skill <= (thisnpc.max -1)){
			for (elem in thisnpc){
				if (elem == clanskill){
					thisnpc[elem] ++;
				}
			}
		} else {
			clanskill = getRandom(skillgroups)
			skill = thisnpc[clanskill]
			if (skill <= thisnpc.max -1){
				for (elem in thisnpc){
					if (elem == clanskill){
						thisnpc[elem] ++;
				}
	};}}}

	selectedSchool = document.getElementById('npcschoolselect').options[document.getElementById('npcschoolselect').selectedIndex].text;

	selectedClan = document.getElementById('npcclanselect').options[document.getElementById('npcclanselect').selectedIndex].text;

	if (document.getElementById("npcabilities").textContent == "None"){
		document.getElementById("npcabilities").innerHTML = "";
	}	

	document.getElementById("npcschooltechniquedetails").innerHTML = "";

		x=schools[selectedClan];
	for (let elem in x){
		y=x[elem]
		if(selectedSchool==y.name){
		selectedSchool = y;
		document.getElementById("npcschoolability").innerHTML="";
		document.getElementById("npcschoolability").innerHTML="<u>"+y.name+"</u>: "+y.ability;
		thisnpc.ability = document.getElementById("npcschoolability").innerHTML;
		}
	}

		if (selectedSchool == "Select School"){
				selectedSchool = {
				name: "",
				schoolskills: {
					Artisan:0,Martial:0,Social:0,Scholar:0,Trade:0,
				},
				advantages: [],
				disadvantages: [],
				techniquetypes: [],
				role: [],
				startingtechs: [],
				startingtechoptions: [],
				ability: "",
					};
				}

	techobjs = [];

	if (selectedSchool.startingtechs !== undefined){

	for (i = 0; i < selectedSchool.startingtechs.length; i++){
		techobjs.push(selectedSchool.startingtechs[i])
	}

	for (i = 0; i < selectedSchool.startingtechoptions.length; i++){
		techobjs.push(selectedSchool.startingtechoptions[i])
	}	

	npcrank = selectedArchetype.rank;

	ranks = [1,2,3,4,5];

	for (i = 1; i-1 < ranks.length; i++){
		if (ranks[i]-1 <= npcrank){
			a = "rank"+i+"techs"
			for (j = 0; j < selectedSchool[a].length; j++){
				techobjs.push(selectedSchool[a][j])
			}
		}
	}
}

	var x = selectedSchool.family
	y = families[selectedClan]
	y = y[x]
	advantage = y.advantages
	disadvantage = y.disadvantages

	addToSelect("npcadv",advantage)
	addToSelect("npcdisadv",disadvantage)

	var techlist = [];
	var techdroplist = [];

	for ( i = 0; i < techobjs.length; i++){
		for ( j = 0; j < techniquelist.length; j++){
			if (techobjs[i] == techniquelist[j].title){
					techlist.push (techniquelist[j].title);
					techdroplist.push (techniquelist[j].title+" ["+techniquelist[j].type+" Rank "+techniquelist[j].rank+"] ("+techniquelist[j].ring+") ("+techniquelist[j].reference+")")
			}
		}
	}
		if (document.getElementById("schooltechdrop") == null){
 			makeSelect("npcschooltechnique","schooltechdrop","styledselect inline margintopbottom","showSelectedTechnique(schooltechdrop,npcschooltechniquedetails)")
 		}

			var el = document.createElement("option");
			npcschooltech=document.getElementById("schooltechdrop");
			npcschooltech.innerHTML="";
			el.textContent = "Select School Technique";

			npcschooltech.appendChild(el);

			for(var j = 0; j < techlist.length; j++) {
		    var el = document.createElement("option");
		    el.textContent = techdroplist[j];
		    el.value = techlist[j];
		    npcschooltech.appendChild(el);
		};
	
	var select = document.getElementById('npcdemeanor')
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint);
	setDemeanor();

	var select = document.getElementById('npcadv')
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint);

	var select = document.getElementById('npcdisadv')
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint);

	var select = document.getElementById('npcweapon')
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint)
	selectNPCWeapon();	

	var select = document.getElementById('npcarmor')
	var options = select.children;
	maxint = options.length
	minint = 0
	
	select.selectedIndex = getRndInteger(minint,maxint)
	selectNPCArmor();	

	var select = document.getElementById('npctechniquesearchrank')
	var options = select.children;
	rank = selectedArchetype.rank;
	select.selectedIndex = rank;
	setTechs();

	document.getElementById("npcsavebutton").classList.remove("hide");
	document.getElementById("npccalcsocial").classList.remove("hide");

	selectedClan = families[selectedClan]

}

function setEditTech(id){
	abilitydiv = document.getElementById("edittechsability"+id);
	techselect = document.getElementById("edittechselect"+id)

	for (j=0; j< techniquelist.length; j++){
		if (techselect.options[techselect.selectedIndex].value == techniquelist[j].title){
			effect = techniquelist[j].effect
			effect = effect.replace("<br><br>","<br>");
				effect = effect.replace("<br><br>","<br>");
					effect = effect.replace("<br><br>","<br>");
						effect = effect.replace("<br><br>","<br>");
			abilitydiv.innerHTML = effect
		}
	}

	divcontents("edittechfilter"+id,"");


}

function showSelectedTechnique(dropId,displayDiv){
	abilitydiv = displayDiv;
	techselect = dropId;

	if  (techselect.selectedIndex !== -1){

		for (j=0; j< techniquelist.length; j++){
		if (techselect.options[techselect.selectedIndex].value == techniquelist[j].title){
			effect = techniquelist[j].effect
			effect = effect.replace("<br><br>","<br>");
				effect = effect.replace("<br><br>","<br>");
					effect = effect.replace("<br><br>","<br>");
						effect = effect.replace("<br><br>","<br>");
			abilitydiv.innerHTML = effect
		}
	}}

}


function updateSpans(variable){
	document.getElementById("npc"+variable).innerHTML = thisnpc[variable]
}

function selectTemplate(){
	setNPCStats();

	updateSpans("conflictcombat");
	updateSpans("conflictintrigue");

	updateSpans("Air");
	updateSpans("Earth");
	updateSpans("Fire");
	updateSpans("Water");
	updateSpans("Void");	

	updateSpans("endurance");
	updateSpans("composure");
	updateSpans("focus");
	updateSpans("vigilance");	

	makeSelectDropdown1("npcdemeanor",thisnpc.demeanor)

	updateSpans("artisanskill");
	updateSpans("martialskill");
	updateSpans("socialskill");
	updateSpans("scholarskill");
	updateSpans("tradeskill");

	makeSelectDropdown1("npcweapon",thisnpc.weapon)
	makeSelectDropdown1("npcarmor",thisnpc.armor)

	makeSelectDropdown1("npcadv",thisnpc.advantage)
	makeSelectDropdown1("npcdisadv",thisnpc.disadvantage)

	makeTechDropdowns();
	setTechs();
	
}



function setDemeanor(){
	selectedDemeanor = document.getElementById("npcdemeanor").value

	for (i = 0; demeanors.length > i; i++){
		if (selectedDemeanor == demeanors[i].demeanor){
			x = "Social TNs ("+demeanors[i].tns+"), Unmasking: "+demeanors[i].unmasking;
			divcontents("npcdemeanornotes",x);
		} 
	}
}

function selectNPCWeapon(){
	selectedWeapon = document.getElementById("npcweapon").value;

	if (document.getElementById("npcweaponstats") == null){
		newdiv("npcweaponstats","npcequip","inline margin10");
	} else { document.getElementById("npcweaponstats").innerHTML = ""; }

	for(i=0; i < tabledata[5].children.length; i++){
		if (tabledata[5].children[i].name == selectedWeapon){
			selectedWeapon = tabledata[5].children[i]

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents("npcweaponstats",x);
		}	
	} 

	for (i=0; npcweapons.length > i; i++){
		if ( npcweapons[i].title == selectedWeapon){
			selectedWeapon = npcweapons[i];

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents("npcweaponstats",x);
		}
	}
}



function selectNPCArmor(){
	selectedArmor = document.getElementById("npcarmor").value;

	if (document.getElementById("npcarmorstats") == null){
		newdiv("npcarmorstats","npcequiparmor","inline margin10");
	} else { document.getElementById("npcarmorstats").innerHTML = ""; }

	for(i=0; i < tabledata[6].children.length; i++){
		if (tabledata[6].children[i].armor == selectedArmor){
			selectedArmor = tabledata[6].children[i]

			x = 'Physical Res: '+selectedArmor.phys+
				'<span class="margin10">Supernatural Res: </span>'+selectedArmor.sup+
				'<span class="margin10">Qualities: </span>'+selectedArmor.qualities;

			divcontents("npcarmorstats",x);
		}
	} 

	for (i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].title == selectedArmor){
			selectedArmor = npcarmor[i];

			x = 'Physical Res: '+selectedArmor.phys+
				'<span class="margin10">Supernatural Res: </span>'+selectedArmor.sup+
				'<span class="margin10">Qualities: </span>'+selectedArmor.qualities;

			divcontents("npcarmorstats",x);
		}
	}
}


function selectNPCWeaponEdit(selectid,divid){
	selectedWeapon = document.getElementById(selectid).value;

	if (document.getElementById(divid) == null){
		newdiv(divid,"editstats","inline margin10");
	} else { document.getElementById(divid).innerHTML = ""; }

	for(i=0; i < tabledata[5].children.length; i++){
		if (tabledata[5].children[i].name == selectedWeapon){
			selectedWeapon = tabledata[5].children[i]

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents(divid,x);
		}	
	} 

	for (i=0; npcweapons.length > i; i++){
		if ( npcweapons[i].title == selectedWeapon){
			selectedWeapon = npcweapons[i];

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents(divid,x);
		}
	}
}


function selectNPCArmorEdit(){
	selectedArmor = document.getElementById("editarmorinput").value;

	if (document.getElementById("editarmorstats") == null){
		newdiv("editarmorstats","npcequiparmor","inline margin10");
	} else { document.getElementById("editarmorstats").innerHTML = ""; }

	for(i=0; i < tabledata[6].children.length; i++){
		if (tabledata[6].children[i].armor == selectedArmor){
			selectedArmor = tabledata[6].children[i]

			x = 'Physical Res: '+selectedArmor.phys+
				'<span class="margin10">Supernatural Res: </span>'+selectedArmor.sup+
				'<span class="margin10">Qualities: </span>'+selectedArmor.qualities;

			divcontents("editarmorstats",x);
		}	
	} 

	for (i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].title == selectedArmor){
			selectedArmor = npcarmor[i];

			x = 'Physical Res: '+selectedArmor.phys+
				'<span class="margin10">Supernatural Res: </span>'+selectedArmor.sup+
				'<span class="margin10">Qualities: </span>'+selectedArmor.qualities;

			divcontents("editarmorstats",x);

		}
	}
}

function setClanGear(){

	selectedArchetype = document.getElementById("archetype").value;

	for (i=0; i<archetypes.length; i++){
		if (archetypes[i].title == selectedArchetype){
			selectedArchetype = archetypes[i];
		}
	}

	x = 'Weapon: <select id="npcweapon" class="styledselect inline margintopbottom" onchange="selectNPCWeapon();"></select>';
	divcontents("npcequip",x);

	makeSelectDropdown1("npcweapon",selectedArchetype.weapon); 

	x = 'Clothing: <select id="npcarmor" class="styledselect inline margintopbottom" onchange="selectNPCArmor();"></select>';
	divcontents("npcequiparmor",x);

	makeSelectDropdown1("npcarmor",selectedArchetype.armor);

	var weaponlist=[]

	selectedClan = document.getElementById("npcclanselect").value;

	for (elem in families){
		if (elem == selectedClan){
			selectedClan = families[elem]
		}
	}

	let archetypeweaponlist = document.getElementById("npcweapon");

	if (selectedClan !== "Select Clan"){
		for (i = 0; i < selectedClan.weapons.length; i++){

			if (archetypeweaponlist.textContent.includes(selectedClan.weapons[i]) == false){
				weaponlist.push(selectedClan.weapons[i])
			}
		}
	}
	thisnpc.weapons = weaponlist;
	addToSelect("npcweapon",weaponlist)

	var armorlist=[]

	let archetypearmorlist = document.getElementById("npcarmor");

	if (selectedClan !== "Select Clan"){
		for (i = 0; i < selectedClan.armor.length; i++){

			if (archetypearmorlist.textContent.includes(selectedClan.armor[i]) == false){
				armorlist.push(selectedClan.armor[i])
			}
		}
	}
	thisnpc.armor = armorlist;
	addToSelect("npcarmor",armorlist)

	selectNPCArmor();
	selectNPCWeapon();
}


function makeTechDropdowns(){
	document.getElementById("npctechniquecontainer").innerHTML = "";

	if (selectedTemplate.extratechs>0){
		x = "Select up to "+selectedTemplate.extratechs+" ";

			for (i=0; selectedTemplate.techtypes.length > i; i++){
			
				if (selectedTemplate.techtypes.length == i+2){
					x += selectedTemplate.techtypes[i]+" or ";
				}
				else if (selectedTemplate.techtypes.length > i+1){
					x += selectedTemplate.techtypes[i]+", ";
				} 	

				else if (selectedTemplate.techtypes.length == i+1){
					x += selectedTemplate.techtypes[i]+".";
				}
			}

			if (document.getElementById("npctechniquecontainer").innerHTML == "None"){
					document.getElementById("npctechniquecontainer").innerHTML = "";
					document.getElementById("npctechniquecontainer").innerHTML = x;
		} else {
		document.getElementById("npctechniquecontainer").innerHTML += x
	}
}
		x = ' Rank: =< <select class="margin10 styledselect" id="npctechniquesearchrank" onchange="setTechs()" class="styledselect"><option value="any">Any</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><div id="npctechselector">';
		document.getElementById("npctechniquecontainer").innerHTML += x;

	}

function setTechs(){

		document.getElementById("npctechselector").innerHTML="";
	var techobjs = [];
	var techlist = [];
	var techdroplist = [];

		for (i=0; selectedTemplate.techtypes.length > i; i++){
			for (j=0; j < techniquelist.length; j++){
				if (techniquelist[j].type == selectedTemplate.techtypes[i]){
					techobjs.push (techniquelist[j]);

				}
			}
		}

	searchRank = document.getElementById("npctechniquesearchrank").value;

	if (searchRank !== "any"){

		searchRank = parseInt(document.getElementById("npctechniquesearchrank").value)
		
		techobjs = techobjs.filter(function(tech)	{

			rank = parseInt(tech.rank);

		 if (rank > searchRank){
		 	return false;
		 } else {
		 	return true;
		 }
		});
	}

	for (j=0; j < techobjs.length ; j++){
		techlist.push (techobjs[j].title);
		techdroplist.push (techobjs[j].title+" ["+techobjs[j].type+" Rank "+techobjs[j].rank+"] ("+techobjs[j].ring+") ("+techobjs[j].reference+")")
	}

	for (i = 0; selectedTemplate.extratechs > i; i++){

		npctechselecti = "npctechselect"+i

		x = '<select id="npctechselect'+i+'" class="styledselect block margintopbottom"></select>'
 		document.getElementById("npctechselector").innerHTML += x;

 		newdiv("npctechselectdetails"+i,"npctechselector")

		npctechselectdetailsi = document.getElementById("npctechselectdetails"+i)

		npctechselecti = document.getElementById(npctechselecti);

 		npctechselecti.setAttribute("onchange","showSelectedTechnique(npctechselect"+i+",npctechselectdetails"+i+")");

			var el = document.createElement("option");
			npctechselecti=document.getElementById("npctechselect"+i);
			npctechselecti.innerHTML="";
			el.textContent = "Select Techniques";

			npctechselecti.appendChild(el);

			for(var j = 0; j < techlist.length; j++) {
		    var el = document.createElement("option");
		    el.textContent = techdroplist[j];
		    el.value = techlist[j];
		    npctechselecti.appendChild(el);
		};
	}
}


function calculateDerivedStats(){
	thisnpc.endurance = (thisnpc.Earth + thisnpc.Fire)*2;
	thisnpc.composure = (thisnpc.Earth + thisnpc.Water)*2;
	thisnpc.focus = thisnpc.Fire + thisnpc.Air;
	thisnpc.vigilance = Math.ceil((thisnpc.Air + thisnpc.Water)/2);

	updateSpans("endurance");
	updateSpans("composure");
	updateSpans("focus");
	updateSpans("vigilance");
}


//CHECKED UP TO HERE
//WHEN NPCBUILDER IS USED, NPC HAS NO MAX ENDURANCE OR COMPOSURE



















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


var npc = {};

function saveNPC (){
	name = thisnpc.name;

	npcarchetype = document.getElementById('archetype').options[document.getElementById('archetype').selectedIndex].text;
	
	npcclan = document.getElementById('npcclanselect').options[document.getElementById('npcclanselect').selectedIndex].text;
	if (npcclan == "Select Clan"){npcclan = "None"};

	if (document.getElementById('npcschoolselect').options[document.getElementById('npcschoolselect').selectedIndex] == undefined){
		npcschool = "None";
		} else {
		npcschool = document.getElementById('npcschoolselect').options[document.getElementById('npcschoolselect').selectedIndex].text;
		}
		if (npcschool == "Select School"){npcschool = "None"};

	npctemplate = document.getElementById('template').options[document.getElementById('template').selectedIndex].text;
	if (npctemplate == "Select Template"){npctemplate = "None"};

	demeanor = document.getElementById('npcdemeanor').options[document.getElementById('npcdemeanor').selectedIndex].text;
	demeanornotes = document.getElementById("npcdemeanornotes").innerHTML;

	weapon = document.getElementById('npcweapon').options[document.getElementById('npcweapon').selectedIndex].text;
	npcweaponstats = document.getElementById("npcweaponstats").innerHTML;

	armor = document.getElementById('npcarmor').options[document.getElementById('npcarmor').selectedIndex].text;
	npcarmorstats = document.getElementById("npcarmorstats").innerHTML;

	for(i=0; i < tabledata[6].children.length; i++){
		if (tabledata[6].children[i].armor == selectedArmor){
			selectedArmor = tabledata[6].children[i]
		}	
			thisnpc.armorphys = selectedArmor.phys
			thisnpc.armorsup = selectedArmor.sup
	} 

	for (i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].title == armor){
			selectedArmor = npcarmor[i];
		}
			thisnpc.armorphys = selectedArmor.phys
			thisnpc.armorsup = selectedArmor.sup
	}

	npcadv = document.getElementById('npcadv').options[document.getElementById('npcadv').selectedIndex].text;
	npcdisadv = document.getElementById('npcdisadv').options[document.getElementById('npcdisadv').selectedIndex].text;
	npcabilities = document.getElementById("npcabilities").innerHTML;

	if (document.getElementById("npcschoolability") == null){npcschoolability = "None"} else {
	npcschoolability = document.getElementById("npcschoolability").innerHTML;}

	if (document.getElementById("schooltechdrop") == null){schooltechdrop = "None"} else {
	schooltechdrop = document.getElementById('schooltechdrop').options[document.getElementById('schooltechdrop').selectedIndex].value;
	if (schooltechdrop == "Select School Technique"){schooltechdrop = "None"};
}

	npc[name] = new Object;

	npc[name].title = thisnpc.name;
	npc[name].archetype = thisnpc.archetype;
	npc[name].type = thisnpc.type;
	npc[name].equiptype = thisnpc.equiptype;
	npc[name].clan = npcclan;
	npc[name].school = npcschool;

	npc[name].template = npctemplate;
	npc[name].rings = {};		
	npc[name].rings.air = thisnpc.Air;
	npc[name].rings.earth = thisnpc.Earth;
	npc[name].rings.fire = thisnpc.Fire;
	npc[name].rings.water = thisnpc.Water;
	npc[name].rings.void = thisnpc.Void;
	npc[name].derived = {};
	npc[name].derived.endurance = thisnpc.endurance;
	npc[name].derived.composure = thisnpc.composure;
	npc[name].derived.focus = thisnpc.focus;
	npc[name].derived.vigilance = thisnpc.vigilance;
	npc[name].social = {};
	npc[name].social.honor = thisnpc.honor;
	npc[name].social.glory = thisnpc.glory;
	npc[name].social.status = thisnpc.status;
	npc[name].social.demeanor = demeanor;
	npc[name].social.demeanornotes = demeanornotes;
	npc[name].skills = {};
	npc[name].skills.artisan = thisnpc.artisanskill;
	npc[name].skills.martial = thisnpc.martialskill;
	npc[name].skills.social = thisnpc.socialskill;
	npc[name].skills.scholar = thisnpc.scholarskill;
	npc[name].skills.trade = thisnpc.tradeskill;
	npc[name].weapon = weapon;
	npc[name].weaponstats = npcweaponstats;
	npc[name].armor = armor;
	npc[name].armorstats = npcarmorstats;
	npc[name].armorphys = thisnpc.armorphys;
	npc[name].armorsup = thisnpc.armorsup;
	npc[name].advantage = npcadv;
	npc[name].disadvantage = npcdisadv;
	npc[name].ability = npcabilities;
	npc[name].schoolability = npcschoolability;

	npc[name].techs = [];
	npc[name].techs.push(schooltechdrop);

	if (document.getElementById('npctechselector') !== null){
		var childDivs = document.getElementById('npctechselector').getElementsByTagName('select');

		for( i=0; i< childDivs.length; i++ )	{
			 var childDiv = childDivs[i];
			 x = childDiv.options[childDiv.selectedIndex].value;
			 if (x !== "Select Techniques"){
			 npc[name].techs.push(x)
	}}
	}

	savenpc=npc;
	localStorage.setItem("savenpc",JSON.stringify(savenpc));

	buildNpcStats();
	makeNpcLibrary();
	buildNpcMenu();
	
	highlight('npcbutton','npccontainer')
	hide("npcstats");

	if (document.getElementById("library").classList.contains("containerx")){
			highlight("npclibrarybutton","library");
	}

	showNpc(name);

selectedArchetype = {};

thisnpc = {};

selectedTemplate = {
	title:"",
	conflictintrigue:0,
	conflictcombat:0,
	ring:{Air:0,Earth:0,Fire:0,Water:0,Void:0},
	endurance:0,
	composure:0,
	focus:0,
	vigilance:0,
	artisanskill:0,
	martialskill:0,
	socialskill:0,
	scholarskill:0,
	tradeskill:0,
	advantages:[],
	disadvantages:[],
	extratechs:0,
	techtypes:[],
	demeanor:[],
};

selectedClan = {
			clanring:"",
			clanskill:"",
			clanstatus:0,
			weapons:[],
			armor:[],
			advantages:[],
			disadvantages:[],
};

selectedSchool = {
		name: "",
		schoolskills: {
			Artisan:0,Martial:0,Social:0,Scholar:0,Trade:0,
		},
		techniquetypes: [],
		role: [],
		advantages: [],
		disadvantages: [],
		startingtechs: [],
		startingtechoptions: [],
		ability: "",

};
}

function npcsave() {
	savenpc=npc;
	localStorage.setItem("savenpc",JSON.stringify(savenpc));
}

var savenpc = {};

function loadNPC(){

	save = JSON.parse(localStorage.getItem("savenpc"));

	if (save !== undefined){

	npc=save;
}
	if (npc==null){
		npc={}
	}
}

function deleteSave(){
	localStorage.removeItem("savenpc")
}

function makeNpcLibrary(){

	document.getElementById("menu").innerHTML = "";
	document.getElementById("statblock").innerHTML = ""

	for (each in npc){

		dem = npc[each].social.demeanor

		each = npc[each];
		

	for (i=0; i< demeanors.length; i++){
		
		if (demeanors[i].demeanor == dem){
			npcdemeanor = demeanors[i]
		}
	}

		newdiv("div"+each.title,"menu","block");
		divcontents("div"+each.title,"<span id='menu"+each.title+"' onclick='showNpc("+'"'+each.title+'"'+")'></span><br>");
		document.getElementById('menu'+each.title).innerHTML = '<button id="'+each.title+'-delete" class="button" onclick="deletenpc('+"'"+each.title+"'"+')">x</button> ' + each.title + 
															' [' + each.clan +
															'/' + each.school +
															'] (' + each.archetype +
															'/' + each.template +
															')' 
															;
;
		newdiv("npc-"+each.title,"statblock","block hide librarywidth");
		document.getElementById("npc-"+each.title).innerHTML='<b>'+ each.title + 
												' [' + each.clan +
												'/' + each.school +
												'] (' + each.archetype +
												'/' + each.template +
												')</b> ' + 
												'<button id="'+each.title+'-toskirmish" class="button" onclick="npcskirmish('+"'"+each.title+"'"+')">add to skirmish</button> '
												+ '<button id="'+each.title+'-edit" class="button" onclick="makeNpcEdit('+"'"+each.title+"'"+')">edit NPC</button> '; 
												
		newdiv("stat"+each.title,"npc-"+each.title,"block statwidth");
		document.getElementById("stat"+each.title).innerHTML= 
												'Rings:<span class="l5r air margin10">a</span>: '+ each.rings.air +
												'<span class="l5r earth margin10">e</span>: '+ each.rings.earth +
												'<span class="l5r fire margin10">f</span>: '+ each.rings.fire +
												'<span class="l5r water margin10">w</span>: '+ each.rings.water +
												'<span class="l5r void margin10">v</span>: '+ each.rings.void +
												'<br>' +
												'Endurance:' + each.derived.endurance +
												'<span class="margin10">Composure</span>: ' + each.derived.composure +
												'<span class="margin10">Focus</span>: ' + each.derived.focus +
												'<span class="margin10">Vigilance</span>: ' + each.derived.vigilance +
												'<br>' +
												'Social: <span class="margin10">Honor</span>: ' + each.social.honor +
												'<span class="margin10">Glory</span>: ' + each.social.glory +
												'<span class="margin10">Status</span>: ' + each.social.status +
												'<span class="margin10">Demeanor</span>: ' + each.social.demeanor + 
												" (" + npcdemeanor.tns + ") Unmasking:" + npcdemeanor.unmasking +
												'<br>Skills: <span class="margin10">Artisan</span>: ' + each.skills.artisan +
												'<span class="margin10">Social</span>: ' + each.skills.social +
												'<span class="margin10">Martial</span>: ' + each.skills.martial +
												'<span class="margin10">Scholar</span>: ' + each.skills.scholar +
												'<span class="margin10">Trade</span>: ' + each.skills.trade +
												'<br>' +
												'Weapon: ' + each.weapon + ' [' + each.weaponstats + ']' +
												'<br>' 
		if (each.weapon0 !== undefined){
			document.getElementById("stat"+each.title).innerHTML +=
												'Weapon: ' + each.weapon0 + ' [' + each.weapon0stats + ']' + '<br>'
		}										
		document.getElementById("stat"+each.title).innerHTML +=
												'Armor: ' + each.armor + ' [' + each.armorstats + ']' +
												'<br>' +
												'Advantage: ' + each.advantage +
												'<br>' +
												'Disadvantage: ' + each.disadvantage +
												'<br>' +
												'<i>Ability</i>: ' 
												 

		if (each.schoolability !== "None" && each.schoolability !== "" && each.schoolability !== undefined){
			 document.getElementById("stat"+each.title).innerHTML += each.schoolability
		} 
												

		if (each.ability !== ""){
			document.getElementById("stat"+each.title).innerHTML += '<br>' + each.ability 
		}

		document.getElementById("stat"+each.title).innerHTML += '<br><i>Techniques</i>: <br>'

		techs = [];

				for (i = 0; i < each.techs.length; i++){

					thistech = each.techs[i];

					for (j = 0; j < techniquelist.length; j++){
						if (thistech == techniquelist[j].title){

							eff = techniquelist[j].effect.replace("<br><br>","<br>");
							eff = eff.replace("<br><br>","<br>");
							eff = eff.replace("<br><br>","<br>");

							x = '<u>'+techniquelist[j].title + " (" + techniquelist[j].ring +
								') [' + techniquelist[j].type + " Rank " + techniquelist[j].rank + ']' +
								'</u><br>' + eff + '<br>'

							techs.push(x);

						}
					}

				if (techs[i] !== undefined){
					document.getElementById("stat"+each.title).innerHTML += techs[i] 
				}

				}
		if (techs.length == 0){
			document.getElementById("stat"+each.title).innerHTML += 'None';
		}

	}
	document.getElementById("statblock").innerHTML = document.getElementById("statblock").innerHTML.replace("<br><br>","<br>")

}

function deletenpc (name){
	menudiv=document.getElementById('menu');
	item = document.getElementById('div'+name);
	menudiv.removeChild(item);
	delete npc[name];
	npcsave();

	statdiv=document.getElementById('statblock');
	item = document.getElementById('npc-'+name)
	statdiv.removeChild(item);
	}


function showNpc(thisnpc){

	npcstat = "npc-"+thisnpc;
	npcmenu = "div"+thisnpc;

	
	thatNpc = document.getElementById(npcstat);

	if (thatNpc !== null){

	children = document.getElementById("statblock").childNodes;

	for (i = 0; i < children.length; i++){
		children[i].classList.add("hide")
	}

	thatNpc.classList.remove("hide")


	thatNpc = document.getElementById(npcmenu);

	children = document.getElementById("menu").childNodes;

	for (i = 0; i < children.length; i++){
		children[i].classList.remove("bold")
	}

	thatNpc.classList.add("bold")


}
}

function npcskirmish(nom){


	dropcontent = document.getElementById("stat"+nom).innerHTML;

	skirmishcharacters[nom] = new Object;
	skirmishcharacters[nom].name = nom;
	skirmishcharacters[nom].initiative = 0;
	skirmishcharacters[nom].stance = "Stance";
	skirmishcharacters[nom].clan = npc[nom].clan;
	skirmishcharacters[nom].school = npc[nom].school;

	skirmishcharacters[nom].player = npc[nom].player;

	skirmishcharacters[nom].composure = npc[nom].derived.composure;
	skirmishcharacters[nom].endurance = npc[nom].derived.endurance;
	skirmishcharacters[nom].ability = dropcontent;
	skirmishcharacters[nom].engaged = "";
	skirmishcharacters[nom].fatigue = 0;
	skirmishcharacters[nom].strife = 0;
	skirmishcharacters[nom].physres = npc[nom].armorphys;
	skirmishcharacters[nom].supres = npc[nom].armorsup;
	skirmishcharacters[nom].notes = "";
	skirmishcharacters[nom].status = "alive";

	saveSkirmish();
	loadSkirmish();



	if (document.getElementById("skirmishcontainer").classList.contains("containerx")){
			highlight("skirmishbutton","skirmishcontainer");
	}
}




function loadFrameTheme(){
	save = JSON.parse(localStorage.getItem("savetheme"));
	theme=save;

	frameSwitcher(theme)
}

function frameSwitcher(theme){
	savetheme=theme;
	localStorage.setItem("savetheme",JSON.stringify(savetheme));

	theme = color[theme]

	if (theme !== undefined){

  document.documentElement.style.setProperty('--bg', theme.bg);
  document.documentElement.style.setProperty('--bgposition', theme.bgposition);
  document.documentElement.style.setProperty('--opacity-bg-overlay', theme.opacitybgoverlay);
  document.documentElement.style.setProperty('--highlight-mainbutton-text-color', theme.highlightmainbuttontextcolor)  ;
  document.documentElement.style.setProperty('--tooltip-bg-color', theme.tooltipbgcolor);
  document.documentElement.style.setProperty('--tooltip-border',theme.tooltipborder);
  document.documentElement.style.setProperty('--table-header-bg', theme.tableheaderbg);
  document.documentElement.style.setProperty('--table-header-font', theme.tableheaderfont)
  document.documentElement.style.setProperty('--button-centre', theme.buttoncentre)
  document.documentElement.style.setProperty('--button-border-light', theme.buttonborderlight)
  document.documentElement.style.setProperty('--button-border-dark', theme.buttonborderdark)
  document.documentElement.style.setProperty('--font-color', theme.fontcolor)
  document.documentElement.style.setProperty('--buttontext', theme.buttontext)
  document.documentElement.style.setProperty('--tooltipfont', theme.tooltipfont)
  document.documentElement.style.setProperty('--greentea', theme.greentea)

  document.documentElement.style.setProperty('--bg-image', "none");
	}	

	//	document.getElementById('rulesframe').src = document.getElementById('rulesframe').src
	

}



function makeNpcEdit(nom){

	nom = npc[nom]

	equiptype = nom.equiptype

	document.getElementById("editcharacter").classList.remove("hide")
	document.getElementById("statblock").classList.add("hide")
	
	newdiv("edittype","editcharacter","inline")

	newdiv("editname","edittype","inline ")
	x =' Name: <input type="text" id="editnameinput" class="margintopbottom styledselect"></input>'
	divcontents("editname",x)

	newdiv("editarchetype","edittype","inline")
	x =' Archetype: <input type="text" id="editarchetypeinput" class="styledselect"></input>'
	divcontents("editarchetype",x)

	newdiv("edittemplate","edittype","inline margin10")
	x ='Template: <input type="text" id="edittemplateinput" class="styledselect"></input>'
	divcontents("edittemplate",x)

	newdiv("editclan","edittype","inline margin10")
	x ='Clan: <input type="text" id="editclaninput" class="styledselect"></input>'
	divcontents("editclan",x)

	newdiv("editschool","edittype","inline margin10")
	x ='School: <input type="text" id="editschoolinput" class="styledselect"></input>'
	divcontents("editschool",x)

	newdiv("editplayer","edittype","inline margin10")
	x ='PC?: <form class="inline styledselect"><input onchange="setNpcPlayer()" type="checkbox" id="npceditplayer" name="npcplayer" value="npcplayer">Player </form>'
	divcontents("editplayer",x)

	newdiv("editSaveNpc","edittype","inline margin10")
	x =  "<button class='button' onclick='saveEditNpc(&apos;"+nom.title+"&apos;)'>Save NPC</button>"
	divcontents("editSaveNpc",x)

	newdiv("editstats","editcharacter","inline")

	newdiv("editrings","editstats","inline")
	divcontents("editrings","<br>Rings: ")

	newdiv("editair","editstats","inline")
	x ='<span class="l5r air margin10">a</span>: <input type="number" id="editairinput" class="margintopbottom numberform styledselect"></input>'
	divcontents("editair",x)

	newdiv("editearth","editstats","inline margin10")
	x ='<span class="l5r earth margin10">e</span>: <input type="number" id="editearthinput" class="numberform styledselect"></input>'
	divcontents("editearth",x)

	newdiv("editfire","editstats","inline margin10")
	x ='<span class="l5r fire margin10">f</span>: <input type="number" id="editfireinput" class="numberform styledselect"></input>'
	divcontents("editfire",x)

	newdiv("editwater","editstats","inline margin10")
	x ='<span class="l5r water margin10">w</span>: <input type="number" id="editwaterinput" class="numberform styledselect"></input>'
	divcontents("editwater",x)

	newdiv("editvoid","editstats","inline margin10")
	x ='<span class="l5r void margin10">v</span>: <input type="number" id="editvoidinput" class="numberform styledselect"></input>'
	divcontents("editvoid",x)

	newdiv("editendurance","editstats","inline")
	x ='<br>Endurance: <input type="number" id="editenduranceinput" class="margintopbottom numberform styledselect"></input>'
	divcontents("editendurance",x)

	newdiv("editcomposure","editstats","inline margin10")
	x ='Composure: <input type="number" id="editcomposureinput" class="numberform styledselect"></input>'
	divcontents("editcomposure",x)

	newdiv("editfocus","editstats","inline margin10")
	x ='Focus: <input type="number" id="editfocusinput" class="numberform styledselect"></input>'
	divcontents("editfocus",x)

	newdiv("editvigilance","editstats","inline margin10")
	x ='Vigilance: <input type="number" id="editvigilanceinput" class="numberform styledselect"></input>'
	divcontents("editvigilance",x)

	newdiv("edithonor","editstats","inline margin10")
	x ='<br>Honor: <input type="number" id="edithonorinput" class="margintopbottom numberform styledselect"></input>'
	divcontents("edithonor",x)

	newdiv("editglory","editstats","inline margin10")
	x ='Glory: <input type="number" id="editgloryinput" class="numberform styledselect"></input>'
	divcontents("editglory",x)

	newdiv("editstatus","editstats","inline margin10")
	x ='Status: <input type="number" id="editstatusinput" class="numberform styledselect"></input>'
	divcontents("editstatus",x)

	newdiv("editdemeanor","editstats","inline margin10")
	x = '<select id="editdemeanorinput" class="styledselect inline" onchange="selectNPCDemeanor();"></select>'
	divcontents("editdemeanor",x)

	demeanor = [];

	for (i=0; i < demeanors.length; i++){
		demeanor.push(demeanors[i].demeanor)
	}

	makeSelectDropdown1("editdemeanorinput",demeanor)

	newdiv("editdemeanorinfo","editstats","inline margin10")

	newdiv("editskills","editstats","inline")
	x ='<br>Skills:'
	divcontents("editskills",x)

	newdiv("editartisan","editstats","inline margin10")
	x ='Artisan: <input type="number" id="editartisaninput" class="margintopbottom numberform styledselect"></input>'
	divcontents("editartisan",x)

	newdiv("editsocial","editstats","inline margin10")
	x ='Social: <input type="number" id="editsocialinput" class="numberform styledselect"></input>'
	divcontents("editsocial",x)

	newdiv("editmartial","editstats","inline margin10")
	x ='Martial: <input type="number" id="editmartialinput" class="numberform styledselect"></input>'
	divcontents("editmartial",x)

	newdiv("editscholar","editstats","inline margin10")
	x ='Scholar: <input type="number" id="editscholarinput" class="numberform styledselect"></input>'
	divcontents("editscholar",x)

	newdiv("edittrade","editstats","inline margin10")
	x ='Trade: <input type="number" id="edittradeinput" class="numberform styledselect"></input>'
	divcontents("edittrade",x)

	newdiv("editadvantage","editstats","inline margin10")
	x ='<br>Advantage: <input type="text" id="editadvantageinput" class="margintopbottom styledselect xwidth"></input>'
	divcontents("editadvantage",x)

	newdiv("editdisadvantage","editstats","inline margin10")
	x ='<br>Disadvantage: <input type="text" id="editdisadvantageinput" class="margintopbottom styledselect xwidth"></input>'
	divcontents("editdisadvantage",x)


	newdiv("editweapon","editstats","inline margin10")
	x ='<br>Weapon: <select id="editweaponinput" class="margintopbottom styledselect inline" onchange="selectNPCWeaponEdit(&apos;editweaponinput&apos;,&apos;editweaponstats&apos;);"></select>'
	divcontents("editweapon",x)

	weapons = [];

	if (equiptype == "equipped"){

	for (each in tabledata[5].children){
		if (tabledata[5].children[each].name !== "NAME"){
			weapons.push(tabledata[5].children[each].name)
		}
	}}

	weapons.sort();

	if (equiptype == "equipped"){

	for (each in npcweapons){
		if (npcweapons[each].type == "equipped"){
			weapons.push(npcweapons[each].title)
		}
	}}
	if (equiptype == "natural"){

	for (each in npcweapons){
		if (npcweapons[each].type == "natural"){
			weapons.push(npcweapons[each].title)
		}
	}}


	
	makeSelectDropdown1("editweaponinput",weapons)

	newdiv("editweaponstats","editstats","inline margin10")

	newdiv("editweapon0","editstats"," margin10 inline")
	x = "<br><button class='button' onclick='editAddWeapon()'>add extra weapon</button>"
	divcontents("editweapon0",x)

	newdiv("editweapon0stats","editstats","inline margin10")


	newdiv("editarmor","editstats","inline margin10")
	x ='<br>Armor: <select id="editarmorinput" class="margintopbottom styledselect inline" onchange="selectNPCArmorEdit();"></select>'
	divcontents("editarmor",x)

	armor = [];

	if (equiptype == "equipped"){

		for (each in tabledata[6].children){
			if (tabledata[6].children[each].armor !== "ARMOR"){
				armor.push(tabledata[6].children[each].armor)
			}
	}}

	armor.sort();

	if (equiptype == "equipped"){

	for (each in npcarmor){
		if (npcweapons[each].type == "equipped"){

			armor.push(npcarmor[each].title)
	}}}
	if (equiptype == "natural"){

	for (each in npcarmor){
		if (npcweapons[each].type == "natural"){

			armor.push(npcarmor[each].title)
	}}}

	makeSelectDropdown1("editarmorinput",armor)

	newdiv("editarmorstats","editstats","inline margin10")

	newdiv("editability","editstats","inline margin10 margintopbottom")
	divcontents("editability","<br><i>Ability:</i>")

	newdiv("editschoolability","editability","inline margin10")
	newdiv("editschoolability1","editability","inline margin10")

	newdiv("edittechs","editstats","inline margin10 margintopbottom")
	x ='<br><i>Techniques:</i>'
	divcontents("edittechs",x)

	i=0;

	for (each in nom.techs){
		newdiv("techwrap"+i,"edittechs","margintopbottom")
		newdiv("edittechs"+i,"techwrap"+i,"inline")

		y = "setEditTech("+i+")"

		x ='<select id="edittechselect'+i+'" class="styledselect inline" onchange='+y+'></select>'
		divcontents("edittechs"+i,x)

		newdiv("edittechsability"+i,"techwrap"+i,"block small")

		newdiv("edittechfilter"+i,"edittechs"+i,"inlineblock");

		techniquestext = [];
		techniquesvalues = [];
		for (each in techniquelist){
			techniquestext.push(techniquelist[each].title+" ("+techniquelist[each].ring+") ["+techniquelist[each].type+" Rank "+techniquelist[each].rank+"]")
			techniquesvalues.push(techniquelist[each].title)
		}

		makeTechSelectDropdown("edittechselect"+i,"Select Tech",techniquestext,techniquesvalues)

		i++;
	}

	newdiv("addextratech","editstats","inline")
	x = "<button class='button' onclick='editAddTech("+i+")'>add extra technique</button>"
	divcontents("addextratech",x)

	nom = nom.title

	populateNpcEdit(nom);
	selectNPCDemeanor()
}

function selectNPCDemeanor(){
	chosenDemeanor = document.getElementById("editdemeanorinput").value;

	for (elem in demeanors){
		if (demeanors[elem].demeanor == chosenDemeanor){
			document.getElementById("editdemeanorinfo").innerHTML = demeanors[elem].tns+" Unmasking:" +demeanors[elem].unmasking
		}
	}
}

function setNpcPlayer(){
	if (document.getElementById("npceditplayer").checked == true){
		document.getElementById("editarchetypeinput").value = "PC";
	}
}


var nom={};

function populateNpcEdit(nom){
	var nom = npc[nom];
	thisnpc = nom

	document.getElementById("editnameinput").value = nom.title;

	if (nom.player == 1){
		document.getElementById("editarchetypeinput").value = "PC";
	} else {document.getElementById("editarchetypeinput").value = nom.archetype}

	document.getElementById("edittemplateinput").value = nom.template;
	document.getElementById("editclaninput").value = nom.clan;
	document.getElementById("editschoolinput").value = nom.school;

	if (nom.player == 1){
		document.getElementById("npceditplayer").checked = true
	} else {document.getElementById("npceditplayer").checked = false}

	document.getElementById("editairinput").value = nom.rings.air;
	document.getElementById("editearthinput").value = nom.rings.earth;
	document.getElementById("editwaterinput").value = nom.rings.water;
	document.getElementById("editfireinput").value = nom.rings.fire;
	document.getElementById("editvoidinput").value = nom.rings.void;
	document.getElementById("editenduranceinput").value = nom.derived.endurance;
	document.getElementById("editcomposureinput").value = nom.derived.composure;
	document.getElementById("editfocusinput").value = nom.derived.focus;
	document.getElementById("editvigilanceinput").value = nom.derived.vigilance;
	document.getElementById("edithonorinput").value = nom.social.honor;
	document.getElementById("editgloryinput").value = nom.social.glory;
	document.getElementById("editstatusinput").value = nom.social.status;

	for (each in document.getElementById('editdemeanorinput').options){
		demeanor = document.getElementById('editdemeanorinput').options[each].value;
		if (demeanor == nom.social.demeanor){
			document.getElementById("editdemeanorinput").options.selectedIndex = document.getElementById("editdemeanorinput").options[each].index
		}
	}

	document.getElementById("editartisaninput").value = nom.skills.artisan;
	document.getElementById("editsocialinput").value = nom.skills.social;
	document.getElementById("editmartialinput").value = nom.skills.martial;
	document.getElementById("editscholarinput").value = nom.skills.scholar;
	document.getElementById("edittradeinput").value = nom.skills.trade;
	document.getElementById("editadvantageinput").value = nom.advantage;
	document.getElementById("editdisadvantageinput").value = nom.disadvantage;

	for (each in document.getElementById('editweaponinput').options){
		weapon = document.getElementById('editweaponinput').options[each].value;
		if (weapon == nom.weapon){
			document.getElementById("editweaponinput").options.selectedIndex = document.getElementById("editweaponinput").options[each].index
		}
	}

	selectNPCWeaponEdit("editweaponinput","editweaponstats");

	for (each in document.getElementById('editarmorinput').options){
		armor = document.getElementById('editarmorinput').options[each].value;
		if (armor == nom.armor){
			document.getElementById("editarmorinput").options.selectedIndex = document.getElementById("editarmorinput").options[each].index
		}
	}

	selectNPCArmorEdit();

	if (nom.ability !== "" && nom.ability !== "None"){
	document.getElementById("editschoolability").innerHTML = nom.ability
	}

	if (nom.schoolability !== "" && nom.schoolability !== "None"){
	document.getElementById("editschoolability1").innerHTML = nom.schoolability;
	}

	if (nom.techs.length > 0){
		for (i=0; i<nom.techs.length; i++){
			techselect = document.getElementById("edittechselect"+i)
			
			for (each in techselect.options){
				thistech = techselect.options[each]

				if (thistech.value == nom.techs[i]){

					techselect.options.selectedIndex = thistech.index;

					setEditTech(i)
				}
			}
		}
	}

}
function editAddWeapon(){

	y="selectNPCWeaponEdit('editweapon0input','editweapon0stats')"

	document.getElementById("editweapon0").innerHTML ='<br>And: <select id="editweapon0input" class="margintopbottom styledselect inline" onchange='+y+'></select>'

	weapons = [];

	if (thisnpc.equiptype == "equipped"){

	for (each in tabledata[5].children){
		if (tabledata[5].children[each].name !== "NAME"){
			weapons.push(tabledata[5].children[each].name)
		}
	}
	for (each in npcweapons){
		if (npcweapons[each].type == "equipped"){
			weapons.push(npcweapons[each].title)
		}
	}}

	if (thisnpc.equiptype == "natural"){
		for (each in npcweapons){
		if (npcweapons[each].type == "natural"){
			weapons.push(npcweapons[each].title)
		}
	}
	}

	weapons.sort();

	makeSelectDropdown("editweapon0input","Select Weapon",weapons)
}

function editAddTech(i){

		document.getElementById("addextratech").innerHTML = "";

		newdiv("techwrap"+i,"edittechs","inline")
		divcontents("techwrap"+i,"")

		newdiv("edittechs"+i,"techwrap"+i,"inline")

		y = "setEditTech("+i+")"

		x ='<select id="edittechselect'+i+'" class="styledselect inline" onchange='+y+'></select>'
		divcontents("edittechs"+i,x)

		newdiv("edittechfilter"+i,"techwrap"+i,"inline")
		z = '<div class="inlineblock margin10">Type: <select id="edittechsearchtype" onchange="edittechfilter('+i+')" class="styledselect"><option value="any">Any</option><option value="invocation">Invocation</option><option value="kata">Kata</option><option value="kiho">Kiho</option><option value="maho">Maho</option><option value="ninjutsu">Ninjutsu</option><option value="ritual">Ritual</option><option value="shuji">Shuji</option></select></div><div class="inline defs">Ring: <select id="edittechsearchring" onchange="edittechfilter('+i+')" class="styledselect"><option value="default">select</option><option value="air">Air</option><option value="earth">Earth</option><option value="fire">Fire</option><option value="water">Water</option><option value="void">Void</option><option value="any">None</option></select></div><div class="inline defs">Rank: <select id="edittechsearchrank1" onchange="edittechfilter('+i+')" class="styledselect"><option value="1">=</option><option value="2">=<</option></select><select class="margin10 styledselect" id="edittechsearchrank" onchange="edittechfilter('+i+')" class="styledselect"><option value="any">Any</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
		divcontents("edittechfilter"+i,z);


		newdiv("edittechsability"+i,"techwrap"+i,"inlineblock small")

		techniquestext = [];
		techniquesvalues = [];
		for (each in techniquelist){
			techniquestext.push(techniquelist[each].title+" ("+techniquelist[each].ring+") ["+techniquelist[each].type+" Rank "+techniquelist[each].rank+"]")
			techniquesvalues.push(techniquelist[each].title)
		}

		makeTechSelectDropdown("edittechselect"+i,"Select Tech",techniquestext,techniquesvalues)



}

function edittechfilter(i){
	
		techniquestext = [];
		techniquesvalues = [];

		techtype = document.getElementById("edittechsearchtype").value;
		techring = document.getElementById("edittechsearchring").value;
		techrank1 = document.getElementById("edittechsearchrank1").value;
		techrank = document.getElementById("edittechsearchrank").value;

		techlist = techniquelist

		for(var j = 0; j < techlist.length; j++){
			if (techtype !== false && techtype !== "any")					{
			techlist = techlist.filter(function(tech)				{
				if (tech.type.toLowerCase() == techtype){
					return true;
				};

				return false;
			});
		}
		if (techring !== false && techring !== "default")					{
			techlist = techlist.filter(function(tech)				{
				if (tech.ring.toLowerCase() == techring){
					return true;
				}
				if (tech.ring.toLowerCase().includes(techring)){
					return true;
				};
				return false;
			});
		}


		techrank = Number(techrank);

	if (isNaN(techrank)){techlist=techlist}
		else {

		if (techrank1 == "1")					{
			techlist = techlist.filter(function(tech)				{
				tech.rank = Number(tech.rank);
				if (tech.rank == techrank){
					return true;
				}
				return false;
			});
			} else if (techrank1 == "2")									{
				techlist = techlist.filter(function(tech){
					tech.rank = Number(tech.rank);
					if (tech.rank <= techrank){
						return true;
					}
					return false;
				});
			}
		} 

			techniquestext.push(techlist[j].title+" ("+techlist[j].ring+") ["+techlist[j].type+" Rank "+techlist[j].rank+"]")
			techniquesvalues.push(techlist[j].title)
		}

		makeTechSelectDropdown("edittechselect"+i,"Select Tech",techniquestext,techniquesvalues)
}


function setEditTech(id){

	abilitydiv = document.getElementById("edittechsability"+id);
	techselect = document.getElementById("edittechselect"+id)

	for (j=0; j< techniquelist.length; j++){
		if (techselect.options[techselect.selectedIndex].value == techniquelist[j].title){
			effect = techniquelist[j].effect
			effect = effect.replace("<br><br>","<br>");
				effect = effect.replace("<br><br>","<br>");
					effect = effect.replace("<br><br>","<br>");
						effect = effect.replace("<br><br>","<br>");
			abilitydiv.innerHTML = effect
		}
	}

	divcontents("edittechfilter"+id,"");


}
function saveEditNpc(nom){

	nom = npc[nom]

	nom.title = document.getElementById("editnameinput").value;
	nom.archetype = document.getElementById("editarchetypeinput").value;
	nom.template = document.getElementById("edittemplateinput").value
	nom.clan = document.getElementById("editclaninput").value;
	nom.school = document.getElementById("editschoolinput").value

	if(document.getElementById("npceditplayer").checked == true){
 		nom.player=1;  //sets character as PC
 	} else {nom.player=0;}  //sets character as NPC

	nom.rings.air = document.getElementById("editairinput").value
	nom.rings.earth = document.getElementById("editearthinput").value
	nom.rings.fire = document.getElementById("editfireinput").value
	nom.rings.water = document.getElementById("editwaterinput").value
	nom.rings.void = document.getElementById("editvoidinput").value
	nom.derived.endurance = document.getElementById("editenduranceinput").value
	nom.derived.composure = document.getElementById("editcomposureinput").value
	nom.derived.focus = document.getElementById("editfocusinput").value
	nom.derived.vigilance = document.getElementById("editvigilanceinput").value
	nom.social.honor = document.getElementById("edithonorinput").value
	nom.social.glory = document.getElementById("editgloryinput").value
	nom.social.status = document.getElementById("editstatusinput").value
	nom.social.demeanor = document.getElementById('editdemeanorinput').options[document.getElementById('editdemeanorinput').selectedIndex].value
	nom.skills.artisan = document.getElementById("editartisaninput").value
	nom.skills.social = document.getElementById("editsocialinput").value
	nom.skills.martial = document.getElementById("editmartialinput").value
	nom.skills.scholar = document.getElementById("editscholarinput").value
	nom.skills.trade = document.getElementById("edittradeinput").value
	nom.advantage = document.getElementById("editadvantageinput").value
	nom.disadvantage = document.getElementById("editdisadvantageinput").value

	nom.weapon = document.getElementById('editweaponinput').options[document.getElementById('editweaponinput').selectedIndex].value
	nom.weaponstats = document.getElementById("editweaponstats").innerHTML;

	if (document.getElementById('editweapon0input') !== null){
		nom.weapon0 = document.getElementById("editweapon0input").value
		nom.weapon0stats = document.getElementById("editweapon0stats").innerHTML;
	}

	nom.armor = document.getElementById("editarmorinput").value
	nom.armorstats = document.getElementById("editarmorstats").innerHTML;

	nom.ability = document.getElementById("editschoolability1").innerHTML
	nom.schoolability = document.getElementById("editschoolability").innerHTML;

	nom.techs = [];

	var childDivs = document.getElementById('edittechs').children;

		for( i=0; i< childDivs.length; i++ ){
		 	var childDiv = childDivs[i];
		 	divname = 'edittechselect'+i;
		 	if (document.getElementById(divname) !== null){
		 	nom.techs.push(document.getElementById(divname).options[document.getElementById(divname).selectedIndex].value);
			}}

	document.getElementById("editstats").innerHTML = "";
	document.getElementById("editcharacter").classList.add("hide")
	document.getElementById("statblock").classList.remove("hide")
	npcsave()
	loadNPC();
	makeNpcLibrary();
	buildNpcMenu();
	buildNpcStats();

	if (document.getElementById("library").classList.contains("containerx")){
		highlight("npclibrarybutton","library")
	}

	showNpc(nom.title)
}



function makechangelog(){
	document.getElementById("log").innerHTML = changelog.txt;
}



function unlock(){
	show("secretbutton")
}



function loadCampaign(){
	x="<b>+Duel House Rules</b><br><br>1) Any ring can be called when using Predict.<br>RAW: Predict can only be called for Air, Earth, Fire and Water, not for Void.<br>Rationale: I don't see any reason why void should be different & immune to Predict in this case.<br><br>2) Duelists in the staredown phase get an action which cannot be used to attack.  Draw, Center or Predict can be used here, as well as shuji or school abilities if appropriate.  Iaijutsu techs can use 2 Opportunities to sheathe their blade, 'reloading' the technique.<br>RAW: No actions can be taken during the staredown phase, it is just for initiative.  Predict, Center and Draw can only be used in the third phase of a duel.<br>Rationale: a) If a duelist does not have an Iaijutsu tech, Water stance in first round is pretty much mandatory if that duelist is trying to win.  It is boring to have mandatory stances and Water stance is useful enough with its ability to unStrife the user.  This house rule makes Iaijutsu techs a little bit less powerful, but the Iaijutsu tech user still has a significant advantage as he can spend his action here on Predict to potentially compromise his opponent and open him up for a Finishing Blow, or he can choose to Center and potentially guarantee his next strike will be successful.  In order to balance this small nerf, Iaijutsu tech users can commit 2 Opportunities in order to sheathe their blade as part of the same movement after use, effectively reloading the tech so it can be used in successive turns.  <br>b) Additionally, in RAW, Predict is a fun choice but does not make tactical sense - I want Predict and Center to be usable rather than novelties which don’t make sense to use in earnest.<br><br>3) When striking or otherwise making an attack, if the strike misses, the attacker takes the defender's vigilance in strife.  <br>RAW: There is no penalty to missing a strike in a duel.<br>Rationale: This is to stop duels becoming two people slashing wildly at the air around each other until one connects - pretty sure duels should not look like this - as with the rules as written, this is pretty much the most effective tactic.  When there is a penalty to missing, Center action becomes useful.  A high composure character can still slash wildly all around a low vigilance opponent for a while before he strifes out, but it is no longer the best strategy for everyone.<br><br>"
	x += "<b>+Mirumoto Niten User Nerf</b><br><br>1) Mirumoto Niten school ability can only be used with a daisho.  No using karate chops with it, no using it with kusari-gama, no using it with anything other than your normal daisho.<br>RAW: You can use it with your hands, or with anything you want.<br>Rationale: Abusable, unthematic, OP.<br><br>"
	x += "<b>+Resist Checks Opportunity Spend House Rules</b><br><br>1) You cannot use Opportunities from your resist checks.  <br>RAW: You can use Opportunities from resist checks.<br>Rationale: This results in perplexing situations where your opponent has made you stronger by trying to inflict a condition on you.  Also speeds things up.<br><br>"
	x += "<b>+Prone House Rule</b><br><br>1) Prone characters cannot take actions that require checks.<br>RAW: Prone is an advantage, try not to make your opponents prone because it will make them stronger, it doesn't make anything more difficult for them except they move more slowly because they are not standing, lifeprotip: don't get up out of bed in the morning, spend all day slithering on the floor, be more effective or no less effective for less energy spent.<br>Rationale: The RAW is retarded in this case.<br><br>"
	x += "<b>+Animal Handling Skill</b><br><br>1) Animal Handling is a separate skill under Trade skills, split from Survival.  If you can take Survival during character creation, you can choose to take Animal Handling instead.<br><br>"
	x += "<b>+Dark Theology Skill</b><br><br>1) Dark Theology is a separate skill under Scholar skills, split from Theology.  If Theology covers 'the way things should be', Dark Theology covers things which are taboo or forbidden - diagnosing the Taint, being able to identify maho use, knowledge about oni etc.  If you can take Theology in character creation and your backstory or clan function support it, then you can choose to take Dark Theology instead (i.e. a Kuni shugenja would probably have access to Dark Theology learning materials and mentors, but an Asahina artificer would have no exposure under normal circumstances.)<br><br>"
	x += "<b>+Taint House Rules</b><br><br>I am using a 1 to 100 scale for Taint, similar to Honor and Glory, where the Shadowlands Taint disadvantages happen when the character gets to 20, 40, 60, 80 and 100 points.  This lets Taint happen to a character more than 5 times in their lives before they are lost, lets the Taint grow over time to consume the victim’s mind and body slowly, and I might throw in Shadowlands Taint advantages when they hit 10, 30, 50, 70, and 90.<br><br>Afflicted condition is applied normally.<br><br>When an Afflicted character is Afflicted again, roll Fitness to resist the Taint, failing on that roll results in a Tainted character.<br><br>When an Afflicted character becomes Compromised, roll Meditation to resist the Taint.  Failing on that roll results in a Tainted character.<br><br>Using evil items Afflicts, then Taints you.  Using maho straight up taints you.<br><br>"
	x += "<b>+Critical Strike Rules</b><br><br>Coming Soon, my issue here is that Dying is less bad than being drastically maimed, it is really hard to die as long as you have a half decent medic around but really super easy to get life changing injuries.  I am sort of glad that you don't die by accident all the time, as I want to be able to make fights without worrying that Random Basic Bandit #348 will roll 3 10s on his damage roll and decapitate your samurai, because that is really uncinematic and also sort of disruptive - mainly I just want a smoother graph of Crit Severity-to-Badness rather than the weird up and down curve it makes at the moment.<br><br>"
	divcontents("houserules",x)
}
