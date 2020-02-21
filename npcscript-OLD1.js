














function selectArchetype(){

	selectedType = document.getElementById("type").value

	selectedArchetype = document.getElementById("archetype").value

	for (i = 0; i < archetypes.length; i++){
		if (archetypes[i].fullname == selectedArchetype){
			selectedArchetype = archetypes[i]
		}
	}

	if (selectedType == "Rokugani"){	
		show("npctemplate");
		hide("npcstats")
		hide("npcnotes")
		hide("npcfamily");
		hide("npcschool");
		hide("npcsave");
		hide("npcclan");
		hide("npcronintype");
		hide("npcroninclanbg");
		hide("npcroninfamilybg");

		selectedArcTitle = document.getElementById("archetype").value;

		for (elem in archetypes){
			if (archetypes[elem].title == selectedArcTitle){
				selectedArchetype = archetypes[elem]
				}
		}

		if (selectedArchetype.ring.type !== "set"){
					selectedArchetype.extra();
		}
	} else if (selectedType == "Ronin, Riffraff and Gaijin"){
		hide("npctemplate");
		hide("npcstats")
		hide("npcnotes")
		hide("npcfamily");
		hide("npcschool");
		hide("npcsave");
		hide("npcclan");
		show("npcronintype");
		hide("npcroninclanbg");
		hide("npcroninfamilybg");

		selectedArcTitle = document.getElementById("archetype").value;

		for (elem in archetypes){
			if (archetypes[elem].title == "Ronin"){
				selectedArchetype = archetypes[elem]
				}
		}

		if (selectedArchetype.ring.type !== "set"){
					selectedArchetype.extra();
	}
}

	else {
		hide("npcstats")
		hide("npcnotes")
		hide("npcfamily");
		hide("npcschool");
		hide("npcsave");
		hide("npcclan");
		hide("npcronintype");
		hide("npcroninclanbg");
		hide("npcroninfamilybg");
		fillStats()
		document.getElementById("npcnameinput").value = selectedArchetype.fullname;
		thisnpc.name = selectedArchetype.fullname;
		thisnpc.title = selectedArchetype.title;
	}
}




function selectNPCRoninClanBg(){
	show("npcroninclanbg");
	hide("npcclan");
	hide("npcstats")
	hide("npcnotes")
	hide("npcfamily");
	hide("npcschool");
	show("npcronintype");
	show("npcroninfamilybg");
	hide("npcsave");

	selectedClan = document.getElementById("npcroninclanbgselect").value;

	familybg = [];

	for (i=0; i<clans.length; i++){
		if (selectedClan == clans[i]){
			for (each in families[selectedClan]){
				if (families[selectedClan][each].clan == selectedClan){
					familybg.push(families[selectedClan][each].name)
				}
			}
		} }

	for (each in roninupbringings){
			familybg.push(roninupbringings[each].name)
		}
		
		makeSelectDropdown("npcroninfamilybgselect","Select Upbringing",familybg)

}


function selectNPCRoninFamilyBg(){

	setRoninStatus();

	hide("npcclan");
	hide("npcstats")
	hide("npcnotes")
	hide("npcfamily");
	show("npcschool");
	show("npcronintype");
	show("npcroninclanbg");
	show("npcroninfamilybg");
	show("npcsave");

	roninschools = []

	for (each in schools.Other){
		if (schools.Other[each].keyword.includes("Unaligned")){
			roninschools.push(schools.Other[each].name)
		}
	}

	makeSelectDropdown("npcschoolselect","Select School",roninschools)

}

function setRoninStatus(){
	selectedFamily = document.getElementById("npcroninfamilybgselect").value

	for (each in roninupbringings){
		if (selectedFamily == roninupbringings[each].name){

			ronintype = document.getElementById("npcronintypeselect").value

			switch (ronintype) {
				case "Ronin":
				thisnpc.status = 24;
				break;

				case "Peasant":
				thisnpc.status = 15;
				break;

				case "Gaijin":
				thisnpc.status = 0;
				break;				
			}

			selectedFamily = roninupbringings[each]
			thisnpc.status = thisnpc.status + selectedFamily.status

			if (thisnpc.status < 0){
				thisnpc.status = 0
			}
		}
	}
}







function makeNpcBgFamily(){
	makeSelect("npcschool","npcbackgroundfamilyselect","styledselect inline margin10","selectNpcBgFamily();fillstats()")

	selectedBgClan = document.getElementById("npcbackgroundclanselect").value
	selectedBgClan = families[selectedBgClan]

	clanFamilies = [];

	for (elem in selectedBgClan){
		if (selectedBgClan[elem].clan == document.getElementById("npcbackgroundclanselect").value){
			clanFamilies.push(selectedBgClan[elem].name)
		}
	}

	makeSelectDropdown("npcbackgroundfamilyselect","Select Background Family",clanFamilies)
}

function selectNpcBgFamily(){

	bgClan = document.getElementById("npcbackgroundclanselect").value
	bgClan = families[bgClan]

	bgFamily = document.getElementById("npcbackgroundfamilyselect").value
	bgFamily = bgFamily.toLowerCase()
	bgFamily = bgClan[bgFamily]

	selectedClan.clanring = bgClan.clanring
	selectedClan.clanskill = bgClan.clanskill

	if (selectedSchool.clanstatus !== undefined || selectedSchool.clanstatus !== null){
		selectedClan.clanstatus = selectedSchool.clanstatus
	} else {
		selectedClan.clanstatus = bgClan.clanstatus
	}

	selectedFamily.ring1 = bgFamily.ring1;
	selectedFamily.ring2 = bgFamily.ring2;
	selectedFamily.glory = bgFamily.glory

	show("npcsave");
	fillStats()
}




function setTechs(){

	if (document.getElementById("npctechselector") !== null){
			document.getElementById("npctechselector").innerHTML="";
		} else {
			newdiv("npctechselector","npctechniquecontainer")
		}

	var techobjs = [];
	var techlist = [];
	var techdroplist = [];

	if (document.getElementById("type").value == "Rokugani"){
		for (i=0; selectedTemplate.techtypes.length > i; i++){
			for (j=0; j < techniquelist.length; j++){
				if (techniquelist[j].type == selectedTemplate.techtypes[i]){
					techobjs.push (techniquelist[j]);

				}
			}
		}
	} else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		for (i=0; selectedSchool.techniquetypes.length > i; i++){
			for (j=0; j < techniquelist.length; j++){
				if (techniquelist[j].type == selectedSchool.techniquetypes[i]){
					techobjs.push (techniquelist[j]);

				}
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

		makeSelect("npctechselector",'npctechselect'+i,"styledselect block margintopbottom","")

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


function showSelectedTechnique(dropId,displayDiv){
	abilitydiv = displayDiv;
	techselect = dropId;

	if  (techselect.selectedIndex !== -1){

		for (j=0; j< techniquelist.length; j++){
		if (techselect.options[techselect.selectedIndex].value == techniquelist[j].title){
			effect = techniquelist[j].effect

			while (effect.includes("<br><br>")){
				effect = effect.replace("<br><br>","<br>");
			}

			abilitydiv.innerHTML = effect
		}
	}}

}

function selectNPCWeapon(){
	selectedWeapon = document.getElementById("npcweapon").value;

	if (document.getElementById("npcweaponstats") == null){
		newdiv("npcweaponstats","npcequip","inline margin10");
	} else { document.getElementById("npcweaponstats").innerHTML = ""; }

	for(i=0; i < tabledata[8].children.length; i++){
		if (tabledata[8].children[i].name == selectedWeapon){
			selectedWeapon = tabledata[8].children[i]

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











function npcsave() {
	savenpc=npc;
	localStorage.setItem("savenpc",JSON.stringify(savenpc));
}

var savenpc = {};


function deleteSave(){
	localStorage.removeItem("savenpc")
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

	document.getElementById("editcharacter").innerHTML = "";
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
	skirmishcharacters[nom].name = npc[nom].fullname;
	nom = npc[nom].fullname.replace(/ /g, '');
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


function makeNpcEdit(nom){

	nom = npc[nom]

	equiptype = nom.equiptype

	document.getElementById("editcharacter").classList.remove("hide")
	document.getElementById("statblock").classList.add("hide")
	
	newdiv("edittype","editcharacter","inline")

	makeTextInput("edittype","editname","inline schoolskillswidth","<span class='topboxwidthx inlineblock'>Name: </span>","editnameinput","margintopbottom styledselect")

	makeTextInput("edittype","editarchetype","inline schoolskillswidth","<span class='topboxwidth inlineblock'>Archetype: </span>","editarchetypeinput","styledselect")

	makeTextInput("edittype","edittemplate","inline schoolskillswidth","<span class='topboxwidth inlineblock'>Template: </span>","edittemplateinput","styledselect")

	newdiv("editbackground","editcharacter","block")
	makeTextInput("editbackground","editclan","inline schoolskillswidth","<span class='topboxwidthx inlineblock'>Clan: </span>","editclaninput","styledselect")

	makeTextInput("editbackground","editfamily","inline schoolskillswidth","<span class='topboxwidth inlineblock'>Family: </span>","editfamilyinput","styledselect")

	makeTextInput("editbackground","editschool","inline schoolskillswidth","<span class='topboxwidth inlineblock'>School: </span>","editschoolinput","styledselect")

	newdiv("editplayer","edittype","inline margin10")
	x ='PC?: <form class="inline styledselect"><input onchange="setNpcPlayer()" type="checkbox" id="npceditplayer" name="npcplayer" value="npcplayer">Player </form>'
	divcontents("editplayer",x)

	newdiv("editSaveNpc","edittype","inline margin10")
	makeButton("editSaveNpc","editSaveNpcButton","button",'saveEditNpc('+'"'+nom.title+'"'+')',"Save NPC")

	newdiv("editstats","editcharacter","block")
	newdiv("editnotes","editcharacter","block")

	newdiv("editrings","editstats","block margintop")
	divcontents("editrings","<span class='groupboxwidth inlineblock'>Rings: </span>")

	makeNumberInput("editrings","editair","editboxwidth inlineblock",'<span class="l5r air margin10">a</span>: ',"editairinput"," numberform styledselect")

	makeNumberInput("editrings","editearth","inlineblock margin10 editboxwidth",'<span class="l5r earth margin10">e</span>: ',"editearthinput","numberform styledselect")

	makeNumberInput("editrings","editfire","inlineblock margin10 editboxwidth",'<span class="l5r fire margin10">f</span>: ',"editfireinput","numberform styledselect")

	makeNumberInput("editrings","editwater","inlineblock margin10 editboxwidth",'<span class="l5r water margin10">w</span>: ',"editwaterinput","numberform styledselect")

	makeNumberInput("editrings","editvoid","inlineblock margin10 editboxwidth",'<span class="l5r void margin10">v</span>: ',"editvoidinput","numberform styledselect")

	newdiv("editderivedstats","editstats","block margintop")
	divcontents("editderivedstats","<span class='groupboxwidth inlineblock'>Derived: </span>")

	makeNumberInput("editderivedstats","editendurance","inlineblock editboxwidth",'Endurance: ',"editenduranceinput"," numberform styledselect")

	makeNumberInput("editderivedstats","editcomposure","inlineblock margin10 editboxwidth",'Composure: ',"editcomposureinput","numberform styledselect")

	makeNumberInput("editderivedstats","editfocus","inlineblock margin10 editboxwidth",'Focus: ',"editfocusinput","numberform styledselect")

	makeNumberInput("editderivedstats","editvigilance","inlineblock margin10 editboxwidth",'Vigilance: ',"editvigilanceinput","numberform styledselect")

	newdiv("editsocialstats","editstats","block margintop")
	divcontents("editsocialstats","<span class='groupboxwidth inlineblock'>Social: </span>")

	makeNumberInput("editsocialstats","edithonor","inlineblock editboxwidth",'Honor: ',"edithonorinput","numberform styledselect ")

	makeNumberInput("editsocialstats","editglory","inlineblock margin10 editboxwidth",'Glory: ',"editgloryinput","numberform styledselect")

	makeNumberInput("editsocialstats","editstatus","inlineblock margin10 editboxwidth",'Status: ',"editstatusinput","numberform styledselect")

	newdiv("editdemeanor","editsocialstats","inlineblock editboxwidth margin10")
	divcontents("editdemeanor",'Demeanor:')
	makeSelect("editdemeanor","editdemeanorinput","styledselect inline editboxwidth","selectNPCDemeanor();")

	demeanor = [];

	for (i=0; i < demeanors.length; i++){
		demeanor.push(demeanors[i].demeanor)
	}

	makeSelectDropdown1("editdemeanorinput",demeanor)

	newdiv("editdemeanorinfo","editsocialstats","inline margin10")

	makeTextInput("editstats","editadvantage","block margin10 ywidth","<br>Advantage: ","editadvantageinput"," styledselect xwidth")

	makeTextInput("editstats","editdisadvantage","block margin10 ywidth","<br>Disadvantage: ","editdisadvantageinput"," styledselect xwidth")

	newdiv("editskills","editstats","inline")
	divcontents("editskills",'<br>Skills:')

	makeNumberInput("editskills","editartisan","inlineblock margin10 editboxwidth",'Artisan: ',"editartisaninput","margintopbottom numberform styledselect")

	makeNumberInput("editskills","editsocial","inlineblock margin10 editboxwidth",'Social: ',"editsocialinput","margintopbottom numberform styledselect")

	makeNumberInput("editskills","editmartial","inlineblock margin10 editboxwidth",'Martial: ',"editmartialinput","numberform styledselect")

	makeNumberInput("editskills","editscholar","inlineblock margin10 editboxwidth",'Scholar: ',"editscholarinput","numberform styledselect")

	makeNumberInput("editskills","edittrade","inlineblock margin10 editboxwidth",'Trade: ',"edittradeinput","numberform styledselect")

	newdiv("editweapon","editstats","inline margin10")
	
	divcontents("editweapon","<br>Weapon: ")
	makeSelect("editweapon","editweaponinput","margintopbottom styledselect inline","selectNPCWeaponEdit('editweaponinput','editweaponstats');")

	weapons = [];

	if (equiptype == "equipped"){
		for (each in tabledata[8].children){
			if (tabledata[8].children[each].name !== "NAME"){
				weapons.push(tabledata[8].children[each].name)
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
	makeButton("editweapon0","editAddWeaponButton",'button','editAddWeapon()',"add extra weapon")

	newdiv("editweapon0stats","editstats","inline margin10")

	newdiv("editarmor","editstats","inline margin10")
	divcontents("editarmor","<br>Armor: ")
	makeSelect("editarmor","editarmorinput","margintopbottom styledselect inline","selectNPCArmorEdit();")

	armor = [];

	if (equiptype == "equipped"){
		for (each in tabledata[9].children){
			if (tabledata[9].children[each].armor !== "ARMOR"){
				armor.push(tabledata[9].children[each].armor)
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

	newdiv("editability","editstats","inline margin10 margintopbottom paddingbottom marginbottom")
	divcontents("editability","<br><i>Ability:</i>")

	newdiv("editschoolability","editability","inline margin10")
	newdiv("editschoolability1","editability","inline margin10 paddingbottom marginbottom")

	newdiv("edittechs","editstats","inline margin10 margintopbottom paddingtop")
	divcontents("edittechs","<br><br><i>Techniques:</i>")

	i=0;

	for (each in nom.techs){
		newdiv("techwrap"+i,"edittechs","marginbottom")
		newdiv("edittechs"+i,"techwrap"+i,"inline")

		makeSelect("edittechs"+i,"edittechselect"+i,"styledselect inline","setEditTech("+i+")")

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

	divcontents("editnotes","<b>Notes:</b><br>")
	makeTextArea("editnotes","editnotesinput","styledselect margintopbottom")

	populateNpcEdit(nom);

}


function selectNPCDemeanor(){
	chosenDemeanor = document.getElementById("editdemeanorinput").value;

	for (elem in demeanors){
		if (demeanors[elem].demeanor == chosenDemeanor){
			document.getElementById("editdemeanorinfo").innerHTML = demeanors[elem].tns+" Unmasking:" +demeanors[elem].unmasking
		}
	}
}


var nom={};

function populateNpcEdit(nom){
	var nom = npc[nom];
	thisnpc = nom

	document.getElementById("editnameinput").value = nom.fullname;

	if (nom.player == 1){
		document.getElementById("editarchetypeinput").value = "PC";
	} else {document.getElementById("editarchetypeinput").value = nom.archetype}

	document.getElementById("edittemplateinput").value = nom.template;
	document.getElementById("editclaninput").value = nom.clan;
	document.getElementById("editfamilyinput").value = nom.family;	
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

	selectNPCDemeanor()
	
	document.getElementById("editartisaninput").value = nom.skills.artisan;
	document.getElementById("editsocialinput").value = nom.skills.social;
	document.getElementById("editmartialinput").value = nom.skills.martial;
	document.getElementById("editscholarinput").value = nom.skills.scholar;
	document.getElementById("edittradeinput").value = nom.skills.trade;
	document.getElementById("editadvantageinput").value = nom.advantage;
	document.getElementById("editdisadvantageinput").value = nom.disadvantage;
	document.getElementById("editnotesinput").value = nom.notes;

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

	if (nom.ability !== "" && nom.ability !== "None" && nom.ability !== undefined){
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

function selectNPCWeaponEdit(selectid,divid){
	selectedWeapon = document.getElementById(selectid).value;

	if (document.getElementById(divid) == null){
		newdiv(divid,"editstats","inline margin10");
	} else { document.getElementById(divid).innerHTML = ""; }

	for(i=0; i < tabledata[8].children.length; i++){
		if (tabledata[8].children[i].name == selectedWeapon){
			selectedWeapon = tabledata[8].children[i]

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

	for(i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == selectedArmor){
			selectedArmor = tabledata[9].children[i]

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


function saveEditNpc(nom){

	nom = npc[nom]

	nom.title = document.getElementById("editnameinput").value;
	nom.archetype = document.getElementById("editarchetypeinput").value;
	nom.template = document.getElementById("edittemplateinput").value
	nom.clan = document.getElementById("editclaninput").value;
	nom.family = document.getElementById("editfamilyinput").value
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
	nom.notes = document.getElementById("editnotesinput").value 

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

	nom.notes = document.getElementById("editnotesinput").value

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
	buildNpcStatsDiv();

	if (document.getElementById("library").classList.contains("containerx")){
		highlight("npclibrarybutton","library")
	}

	showNpc(nom.title)
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

function editAddWeapon(){

	divcontents("editweapon0","<br>And: ")
	makeSelect("editweapon0","editweapon0input","margintopbottom styledselect inline","selectNPCWeaponEdit('editweapon0input','editweapon0stats')")

	weapons = [];

	if (thisnpc.equiptype == "equipped"){

	for (each in tabledata[8].children){
		if (tabledata[8].children[each].name !== "NAME"){
			weapons.push(tabledata[8].children[each].name)
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
	}}

	weapons.sort();

	makeSelectDropdown("editweapon0input","Select Weapon",weapons)
}

techtypearray = []

function editAddTech(i){

		document.getElementById("addextratech").innerHTML = "";

		newdiv("techwrap"+i,"edittechs","inline")
		divcontents("techwrap"+i,"")

		newdiv("edittechs"+i,"techwrap"+i,"inline")

		makeSelect("edittechs"+i,"edittechselect"+i,"styledselect inline","setEditTech("+i+")")

		newdiv("edittechfilter"+i,"techwrap"+i,"inline")

		addToDiv("edittechfilter"+i,"Type: ")
		makeSelect("edittechfilter"+i,"edittechsearchtype","styledselect","edittechfilter("+i+")")
		
		for (each in techniquelist){	
			if (techtypearray.includes(techniquelist[each].type)){} else {techtypearray.push(techniquelist[each].type)}
		}

		makeSelectDropdown("edittechsearchtype","Any",techtypearray)
		addToDiv("edittechfilter"+i,"Ring: ")
		makeSelect("edittechfilter"+i,"edittechsearchring","styledselect","edittechfilter("+i+")")
		ringtypearray = ["Air","Earth","Fire","Water","Void"]
		makeSelectDropdown("edittechsearchring","Any",ringtypearray)
		addToDiv("edittechfilter"+i,"Rank: ")

		makeSelect("edittechfilter"+i,"edittechsearchrank1","styledselect","edittechfilter("+i+")")
		var option = document.createElement("option");
		option.text = "=<";
		option.value = "2"
		document.getElementById("edittechsearchrank1").add(option)

		var option = document.createElement("option");
		option.text = "=";
		option.value = "1"
		document.getElementById("edittechsearchrank1").add(option)

		makeSelect("edittechfilter"+i,"edittechsearchrank","styledselect","edittechfilter("+i+")")
		rankarray = ["1","2","3","4","5"]
		makeSelectDropdown("edittechsearchrank","Any",rankarray)


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
			if (techtype !== false && techtype !== "Any")					{
			techlist = techlist.filter(function(tech)				{
				if (tech.type == techtype){
					return true;
				};

				return false;
			});
		}
		if (techring !== false && techring !== "default")					{
			techlist = techlist.filter(function(tech)				{
				if (tech.ring == techring || techring == "Any"){
					return true;
				}
				if (tech.ring.includes(techring)){
					return true;
				};
				return false;
			});
		}


		techrank = Number(techrank);

		if (techrank == NaN){
			techrank = 1
		}



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
