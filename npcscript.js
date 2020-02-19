function loadNPC(){

	save = JSON.parse(localStorage.getItem("savenpc"));

	if (save !== undefined){
		npc=save;
	}

	if (npc==null){
		npc={}
	}
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
		makeButton('menu'+each.title,each.title+'--delete','button',"deletenpc("+"'"+each.title+"'"+")","x")
		document.getElementById('menu'+each.title).innerHTML += each.fullname + 
															' [' + each.clan +
															'/' + each.school +
															'] (' + each.archetype +
															'/' + each.template +
															')' 
															;
;
		newdiv("npc-"+each.title,"statblock","block hide librarywidth");
		document.getElementById("npc-"+each.title).innerHTML='<b>'+ each.fullname + 
												' [' + each.clan +
												'/' + each.school +
												'] (' + each.archetype +
												'/' + each.template +
												')</b> ';
		newdiv("addskirmishbuttondiv"+each.title,"npc-"+each.title,"inline") 
		makeButton("addskirmishbuttondiv"+each.title,each.title+'-toskirmish',"button margin10",'npcskirmish('+"'"+each.title+"'"+')',"add to skirmish")
		makeButton("addskirmishbuttondiv"+each.title,each.title+'-edit',"button margin10",'makeNpcEdit('+"'"+each.title+"'"+')',"edit NPC")
												
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
												" (" + npcdemeanor.tns + ") Unmasking: " + npcdemeanor.unmasking +
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

		if (each.ability !== "" && each.ability != undefined){
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

			document.getElementById("stat"+each.title).innerHTML +=
						'<br>Notes: ' + each.notes;
	}
	document.getElementById("statblock").innerHTML = document.getElementById("statblock").innerHTML.replace("<br><br>","<br>");

}


var thisnpc = {};
var selectedType = {}
var selectedTemplate = {};
var selectedArchetype = {};
var selectedClan = {};
var selectedFamily = {};
var selectedSchool = {};
var npcs = {};


function buildNpcMenu1(){

	//create all the hidden empty dropdowns

	//creates and populates template dropdown

	if (document.getElementById("template") == null){
		newdiv("npctemplate","npcmenu","inline hide");
		makeSelect("npctemplate","template","styledselect inline margin10","selectTemplate();")
	}

	var templatelist = [];

	for (elem in templates){
			templatelist.push(templates[elem].title);
			}

	templatelist.sort();

	makeSelectDropdown("template","Select Template",templatelist);

	if (document.getElementById("npcronintypeselect") == null){
		newdiv("npcronintype","npcmenu","inline margin10 hide");
		makeSelect("npcronintype","npcronintypeselect","styledselect","selectNPCRoninType();")
	}

	makeSelectDropdown("npcronintypeselect","Select Type",ronintypelist);	
	
	if (document.getElementById("npcclanselect") == null){
		newdiv("npcclan","npcmenu","inline margin10 hide");
		makeSelect("npcclan","npcclanselect","styledselect inline","selectNPCClan();makeFamilyDropdown();")
	}

	makeSelectDropdown("npcclanselect","Select Clan",clans);

	if (document.getElementById("npcroninclanbgselect") == null){
		newdiv("npcroninclanbg","npcmenu","inline margin10 hide");
		makeSelect("npcroninclanbg","npcroninclanbgselect","styledselect","selectNPCRoninClanBg();")
	}	

	if (document.getElementById("npcfamilyselect") == null){
		newdiv("npcfamily","npcmenu","inline margin10 hide");
		makeSelect("npcfamily","npcfamilyselect","styledselect","selectNPCFamily();")
	}

	if (document.getElementById("npcroninfamilybgselect") == null){
		newdiv("npcroninfamilybg","npcmenu","inline margin10 hide");
		makeSelect("npcroninfamilybg","npcroninfamilybgselect","styledselect","selectNPCRoninFamilyBg();")
	}

	if (document.getElementById("npcschoolselect") == null){
		newdiv("npcschool","npcmenu","inline margin10 hide");
		makeSelect("npcschool","npcschoolselect","styledselect","selectNPCSchool();")
	}	

	if (document.getElementById("npcsavebutton") == null){
		newdiv("npcsave","npcmenu","inline margin10 hide");
		makeButton("npcsave","npcsavebutton","button inline","saveNPC()","save NPC")
	}
}


function selectType(){
	var archetypelist = [];
	for (elem in archetypes){
		if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
			archetypelist.push(archetypes[elem].fullname);
	}  else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		if ("Rokugani" == archetypes[elem].type)
			archetypelist.push(archetypes[elem].fullname);
	}}

	makeSelectDropdown("archetype","Select Archetype",archetypelist);
	buildNpcMenu1();

	document.getElementById("npcstats").classList.add("hide");
	document.getElementById("npcnotes").classList.add("hide");

	var type = document.getElementById("type").value

	template = document.getElementById("npctemplate")
	clan = document.getElementById("npcclan")
	family = document.getElementById("npcfamily")
	school = document.getElementById("npcschool")
	save = document.getElementById("npcsave")
	ronintype = document.getElementById("npcronintype")
	roninclanbg = document.getElementById("npcroninclanbg")
	roninfamilybg = document.getElementById("npcroninfamilybg")


	if (type == "Animals"){

		template.classList.add("hide");
		clan.classList.add("hide");
		family.classList.add("hide");
		school.classList.add("hide");
		ronintype.classList.add("hide");
		roninclanbg.classList.add("hide");
		roninfamilybg.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Creatures"){

		template.classList.add("hide");
		clan.classList.add("hide");
		family.classList.add("hide");
		school.classList.add("hide");
		ronintype.classList.add("hide");
		roninclanbg.classList.add("hide");
		roninfamilybg.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Rokugani"){

		template.classList.remove("hide");
		clan.classList.remove("hide");
		family.classList.remove("hide");
		school.classList.remove("hide");
		ronintype.classList.add("hide");
		roninclanbg.classList.add("hide");
		roninfamilybg.classList.add("hide");
		save.classList.remove("hide")

		document.getElementById("npcsave").classList.add("hide");
	}

	if (type == "Pregen"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		family.classList.remove("hide");
		ronintype.classList.add("hide");
		roninclanbg.classList.add("hide");
		roninfamilybg.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Ronin, Riffraff and Gaijin"){

		template.classList.add("hide");
		clan.classList.add("hide");
		family.classList.add("hide");
		school.classList.add("hide");
		ronintype.classList.add("hide");
		roninclanbg.classList.add("hide");
		roninfamilybg.classList.add("hide");
		save.classList.remove("hide")

		document.getElementById("npcsave").classList.add("hide");

		var type = document.getElementById("type").value

			selectObj = document.getElementById("archetype")
	valueToSet = "Rank 1"
	setSelectedValue(selectObj, valueToSet)
	selectArchetype();
	}

	selectedType = document.getElementById("type").value

}

function buildNpcMenu(){

	document.getElementById("npcmenu").innerHTML = "";

	newdiv("npctype","npcmenu","inline");
	makeSelect("npctype","type","styledselect","selectType();")

	var typelist = ["Rokugani","Ronin, Riffraff and Gaijin","Animals","Creatures","Pregen",];
	makeSelectDropdown1("type",typelist);

	newdiv("npcarchetype","npcmenu","inline margin10");
	makeSelect("npcarchetype","archetype","styledselect","selectArchetype();")

	var archetypelist = [];
	for (elem in archetypes){

	if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
		archetypelist.push(archetypes[elem].fullname);
	}}
	archetypelist.sort();

	makeSelectDropdown1("archetype",archetypelist);

	buildNpcMenu1();
	selectType();

	selectObj = document.getElementById("archetype")
	valueToSet = "Rank 1"
	setSelectedValue(selectObj, valueToSet)
	selectArchetype();
}


function getNPCName(){
	name = nameMaker();
	document.getElementById("npcnameinput").value = name

	thisnpc.name = name;
}


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

function selectNPCRoninType(){
	ronintype = document.getElementById("npcronintypeselect").value

	switch (ronintype){
		case "Ronin":
		thisnpc.status = 24;
	}

	switch (ronintype){
		case "Peasant":
		thisnpc.status = 15;
	}

	switch (ronintype){
		case "Gaijin":
		thisnpc.status = 0;
	}

	show("npcroninclanbg");
	hide("npcclan");
	hide("npcstats")
	hide("npcnotes")
	hide("npcfamily");
	hide("npcschool");
	show("npcronintype");
	hide("npcroninfamilybg");
	hide("npcsave");

	regions = []

	for (each in roninregions){
		regions.push(roninregions[each].name)
	}

	for (i=0; i< clans.length; i++){
		regions.push(clans[i])
	}

	makeSelectDropdown("npcroninclanbgselect","Select Background Region or Clan",regions)
	
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

function selectTemplate(){
	show("npcclan");
	hide("npcstats")
	hide("npcnotes")
	hide("npcfamily");
	hide("npcschool");
	hide("npcronintype");
	hide("npcroninclanbg");
	hide("npcroninfamilybg");
	hide("npcsave");

	selectedTemplate = document.getElementById("template").value;

	for (i=0; i<templates.length; i++){
		if (templates[i].title == selectedTemplate ){
			selectedTemplate = templates[i]
		}
	}
	selectObj = document.getElementById("npcclanselect")
	setSelectedValue(selectObj, "Select Clan")

	nom = document.getElementById("npcnameinput").value
	if (nom == ""){
		getNPCName();
	}
}

function selectNPCClan(){
	show("npcfamily");
	show("npcschool");
	clearSelect("npcschoolselect")
	hide("npcstats")
		hide("npcnotes")
	hide("npcsave");

	selectedClan = document.getElementById("npcclanselect").value;
	selectedClan = families[selectedClan]

	clanName = document.getElementById("npcclanselect").value

	clanSchools = [];

	for (elem in schools[clanName]){
		clanSchools.push(schools[clanName][elem].name)
	}


	for (elem in schools.Other){
		if (schools.Other[elem].keyword.includes("Unaligned")){
			clanSchools.push(schools.Other[elem].name)
		}
		
	}

	makeSelectDropdown("npcschoolselect","Select School",clanSchools)
	makeFamilyDropdown()
	
}

function makeFamilyDropdown(){

	clanFamilies = [];

	for (elem in selectedClan){
		if (selectedClan[elem].clan == document.getElementById("npcclanselect").value){
			clanFamilies.push(selectedClan[elem].name)
		}
	}

	makeSelectDropdown("npcfamilyselect","Select Family",clanFamilies)
}

function selectNPCFamily(){
	show("npcschool");
	hide("npcsave");

	selectedFamily = document.getElementById("npcfamilyselect").value;

	if (selectedFamily.includes(" ")){
		for (each in families.Other){
			if (families.Other[each].name == selectedFamily){
				selectedFamily = families.Other[each]
			}
		}
	}

	else {
	selectedFamily = selectedFamily.toLowerCase()
	selectedFamily = selectedClan[selectedFamily]
	}

	clanName = selectedFamily.clan

	clanSchools = [];

	for (elem in schools[clanName]){
		clanSchools.push(schools[clanName][elem].name)
	}

	for (elem in schools.Other){
		if (schools.Other[elem].keyword.includes("Unaligned")){
			clanSchools.push(schools.Other[elem].name)
		}
		
	}

	makeSelectDropdown("npcschoolselect","Select School",clanSchools)
}

function selectNPCSchool(){

	if (document.getElementById("npcschooltechnique") !== undefined && document.getElementById("npcschooltechnique") !== null){
		document.getElementById("npcschooltechnique").innerHTML = "";
		newdiv("npcstartingschooltechnique","npcschooltechnique")
	}
	

	selectedSchool = document.getElementById("npcschoolselect").value;

	for (elem in schools){
		for (scho in schools[elem]){
			if (schools[elem][scho].name == selectedSchool){
				selectedSchool = schools[elem][scho]
			}
		}
	}

	if (document.getElementById("npcclan").classList.contains("hide")){
		clanName = document.getElementById("npcroninclanbgselect").value
	} else if (document.getElementById("npcroninclanbg").classList.contains("hide")){
		clanName = document.getElementById("npcclanselect").value
	}

	if (document.getElementById("npcfamily").classList.contains("hide")){
		text = document.getElementById("npcroninfamilybgselect").value
	} else if (document.getElementById("npcroninfamilybg").classList.contains("hide")){
		text = document.getElementById("npcfamilyselect").value
	}
	
	if (text == "Select Family"){
		if (selectedSchool.family !== "Other"){
			selectedFamily = selectedSchool.family
			selectedFamily = families[clanName][selectedFamily]
			selectedFamilyName = selectedFamily.name
			npcfamilyselect = document.getElementById("npcfamilyselect")
			setSelectedValue(npcfamilyselect, selectedFamilyName)
		}

		if (selectedSchool.family == "Other"){
			selectedFamily = families.Other.other
			selectedFamilyName = selectedFamily.name
			npcfamilyselect = document.getElementById("npcfamilyselect")
			setSelectedValue(npcfamilyselect, selectedFamilyName)
		}
	}

	selectedArchetypeName = document.getElementById("archetype").value;

	if (document.getElementById("npcclanselect").value == "Other" && document.getElementById("npcfamilyselect").value == "Other"){
		makeSelect("npcschool","npcbackgroundclanselect","styledselect inline margin10","makeNpcBgFamily();")
		makeSelectDropdown("npcbackgroundclanselect","Select Background Clan",clans)
		hide("npcsave");

	} else {
		fillStats();
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


function setRokuganiStats(){

	thisnpc.name = document.getElementById("npcnameinput").value
	thisnpc.archetype = selectedArchetype.title;
	thisnpc.type = selectedArchetype.type;

	thisnpc.clan = selectedSchool.clan
	thisnpc.family = selectedFamily.name
	thisnpc.school = selectedSchool.name

	thisnpc.equiptype = selectedArchetype.equiptype;
	thisnpc.conflictcombat = selectedArchetype.conflictcombat;
	thisnpc.conflictintrigue = selectedArchetype.conflictintrigue;

	setRokuganiRings()

	thisnpc.endurance = (thisnpc.Earth + thisnpc.Fire)*2
	thisnpc.composure = (thisnpc.Earth + thisnpc.Water)*2
	thisnpc.focus = (thisnpc.Air + thisnpc.Fire);
	thisnpc.vigilance = Math.ceil((thisnpc.Air + thisnpc.Water)/2);

		thisnpc.honor = selectedSchool.honor;

	if (document.getElementById("type").value == "Rokugani"){
		thisnpc.glory = selectedFamily.glory;
		thisnpc.status = selectedClan.clanstatus;
	} else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		thisnpc.glory = selectedClan.clanglory;
	}


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

	thisnpc.ability = selectedSchool.ability;

	thisnpc.techniques = selectedArchetype.techniques;
}

function setRokuganiRings(){
	
	var rings = {Air:0, Earth:0, Fire:0, Water:0, Void:0};

//get base stats for the rank

	selectedArchetype = document.getElementById("archetype").value

	for (i=0; i<archetypes.length; i++){
		if (archetypes[i].fullname == selectedArchetype){
			selectedArchetype = archetypes[i]
		}
	}

	if (selectedArchetype.ring.type !== "set"){
			selectedArchetype.extra();
		}

	maxRing = selectedArchetype.max - 1;

	if (selectedClan.clanring == undefined){
		if (document.getElementById("type").value == "Rokugani"){
			family = selectedSchool.clan
			selectedFamily = families[clan][family]
			selectedClan.clanring = selectedFamily.clanring
			selectedClan.clanskill = selectedFamily.clanskill	
		} else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
			for (each in roninregions){
				if (roninregions[each].name == selectedClan){
					selectedClan = roninregions[each]
				}
			} 
			if (clans.includes(document.getElementById("npcroninclanbgselect").value)){

				selectedClan = document.getElementById("npcroninclanbgselect").value
				selectedClan = families[selectedClan]
			}
			for (each in roninregions){
				if (roninregions[each].name == selectedClan){
					selectedClan = roninregions[each]
				}
			} 			
		}

	}

	clanRing = selectedClan.clanring
	clanRing = Object.keys(clanRing) 
	clanRing = clanRing[0]

	rings[clanRing] ++;

	array = ["Air", "Earth", "Fire", "Water", "Void"]

	if (selectedSchool.ring1 == "Any"){
		selectedSchool.ring1 = getRandom(array)
	}

	if (selectedSchool.ring2 == "Any"){
		selectedSchool.ring2 = getRandom(array)
	}

	schoolRing1 = selectedSchool.ring1
	rings[schoolRing1] ++;
	schoolRing2 = selectedSchool.ring2
	rings[schoolRing2] ++;

	x = getRndInteger(1,2);
	familyRing = "ring"+ x

	familyRing = selectedFamily[familyRing]
	
	if (rings[familyRing] < maxRing){
		rings[familyRing] ++;
	} else {
		if (x == 1){
			familyRing = selectedFamily.ring2
		}

		if (x == 2){
			familyRing = selectedFamily.ring1
		}
		if (familyRing == "Any"){
			familyRing = getRandom(array)
		}
		rings[familyRing] ++;
	}

	startingRingsToMax(rings,maxRing)  //adds the extra +1 to a ring that won't push it over 3

	rings.Air = rings.Air + selectedArchetype.ring.Air
	rings.Earth = rings.Earth + selectedArchetype.ring.Earth
	rings.Fire = rings.Fire + selectedArchetype.ring.Fire
	rings.Water = rings.Water + selectedArchetype.ring.Water
	rings.Void = rings.Void + selectedArchetype.ring.Void

	thisnpc.Air = rings.Air
	thisnpc.Earth = rings.Earth 
	thisnpc.Fire = rings.Fire 
	thisnpc.Water = rings.Water 
	thisnpc.Void = rings.Void 

	updateSpans("Air");
	updateSpans("Earth");
	updateSpans("Fire");
	updateSpans("Water");
	updateSpans("Void");
}


function startingRingsToMax(rings,maxRing){

	array = ["Air", "Earth", "Fire", "Water", "Void"]
	raisedRing = getRandom(array)

	while (rings[raisedRing] >= maxRing){
			raisedRing = getRandom(array)
		}
		rings[raisedRing] ++;
}


function buildNpcStatsDiv(){

	document.getElementById("npcstats").innerHTML = "";
	document.getElementById("npcnotes").innerHTML = "";

	newdiv("npcname","npcstats","inline");
	makeTextInput("npcname","newnpcname","styledselect inline margin10",'<span id="npcnameword" onclick="getNPCName()">Name: </span>',"npcnameinput","styledselect")

	newdiv("npcinfo","npcstats","inline margin10")
		x = '<i><span id="npcinfoarchetype">'+selectedArchetype.fullname+'</span></i> <span class="l5r">m</span> <span id="npcconflictcombat">'+selectedArchetype.conflictcombat+'</span> <span class="l5r">c</span> <span id="npcconflictintrigue">'+selectedArchetype.conflictintrigue+'</span>';
	divcontents("npcinfo",x);

	newdiv("npcrings","npcstats","block margin10 paddingtopbottom")
		x = '<div class="paddingtopbottom inline"><b>Rings</b>: <span class="margin10 air l5r">a</span> <span id="npcAir"></span>'+
		'<span class="l5r earth margin10">e</span> <span id="npcEarth"></span>'+
		'<span class="l5r fire margin10">f</span> <span id="npcFire"></span>'+
		'<span class="l5r water margin10">w</span> <span id="npcWater"></span>'+
		'<span class="margin10 void l5r">v</span> <span id="npcVoid"></div>'+'</span>'
	divcontents("npcrings",x)

	newdiv("npcderivedstats","npcstats","block margin10 paddingbottom")
		x =	'<b>Derived Stats</b>: Endurance: <span id="npcendurance"></span>'+
		'<span class="margin10">Composure:</span> <span id="npccomposure"></span>'+
		'<span class="margin10">Focus:</span> <span id="npcfocus"></span>'+
		'<span class="margin10">Vigilance:</span> <span id="npcvigilance"></span>' 
	divcontents("npcderivedstats",x) 

	newdiv("npcsocial","npcstats","block margin10 paddingbottom")
		x = '<b>Social</b>: <span>Honor: </span><span id="npchonor"></span>'+
		'<span class="margin10">Glory: </span><span id="npcglory"></span>'+
		'<span class="margin10">Status: </span><span id="npcstatus"></span>'+
		'<span class="margin10">Demeanor: '
		divcontents("npcsocial",x);	
		makeSelect("npcsocial","npcdemeanor","styledselect inline","setDemeanor()")
		x = '<span id="npcdemeanornotes" class="inline margin10"></span>'
		addToDiv("npcsocial",x);


	newdiv("npcadvdisadv","npcstats","block margin10")
	divcontents("npcadvdisadv","Advantage:")
	makeSelect("npcadvdisadv","npcadv","styledselect inline marginbottom","")
	addToDiv("npcadvdisadv","<br>Disadvantage:")
	makeSelect("npcadvdisadv","npcdisadv","styledselect inline","")
	
	newdiv("npcskills","npcstats","block margin10")
		x = '<div class="paddingtopbottom"><b>Skills</b>: <span class="margin10">Artisan: </span><span id="npcartisanskill"></span>'+
		'<span class="margin10">Martial: </span><span id="npcmartialskill"></span>'+
		'<span class="margin10">Social: </span><span id="npcsocialskill"></span>'+
		'<span class="margin10">Scholar: </span><span id="npcscholarskill"></span>'+
		'<span class="margin10">Trade: </span><span id="npctradeskill"></span></div>';
	divcontents("npcskills",x);

	newdiv("npcequip","npcstats","block margin10")
	divcontents("npcequip","<b>Equipment</b><br>Weapon:")
	makeSelect("npcequip","npcweapon","styledselect inline marginbottom","selectNPCWeapon();")

	newdiv("npcweaponstats","npcequip","inline margin10")

	newdiv("npcequiparmor","npcstats","block margin10")
	divcontents("npcequiparmor","Clothing:")
	makeSelect("npcequiparmor","npcarmor","styledselect inline marginbottom","selectNPCArmor();")
	
	newdiv("npcarmorstats","npcequiparmor","inline margin10 marginbottom")
	
	newdiv("npcabilitycontainer","npcstats","block margin10 defcategory")
	divcontents("npcabilitycontainer","<b>School Ability</b>:");

	newdiv("npcschoolability","npcabilitycontainer","inline block")

	newdiv("npcabilities","npcabilitycontainer","inline block")
	
	newdiv("npctechs","npcstats","block margin10 defcategory")
	divcontents("npctechs","<b>Techniques</b>:<br>");

	newdiv("npcschooltechnique","npctechs","block")
	newdiv("npcstartingschooltechnique","npcschooltechnique","block")


	newdiv("npctechniquecontainer","npctechs","block")
}


function updateSpans(variable){
	document.getElementById("npc"+variable).innerHTML = thisnpc[variable]
}

function setRokuganiSkills(){
	if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		selectedTemplate.artisanskill = 0
		selectedTemplate.martialskill = 0
		selectedTemplate.socialskill = 0
		selectedTemplate.scholarskill = 0
		selectedTemplate.tradeskill = 0

		for (i=0;i<skilllist.length;i++){
			for (j=0;j<skilllist[i].length;j++){
				if (selectedFamily.skill1 == skilllist[i][j]){
					selectedFamily.skill1 = skillsets[i]
				}
			}
		}

		skill1 = selectedFamily.skill1.toLowerCase()
		skill1 = skill1+"skill"
		selectedTemplate[skill1]++

		for (i=0;i<skilllist.length;i++){
			for (j=0;j<skilllist[i].length;j++){
				if (selectedFamily.skill2 == skilllist[i][j]){
					selectedFamily.skill2 = skillsets[i]
				}
			}
		}

		skill2 = selectedFamily.skill2.toLowerCase()
		skill2 = skill2+"skill"
		selectedTemplate[skill2]++

		array=["artisanskill","martialskill","socialskill","scholarskill","tradeskill"]

		chosenset=getRandom(array)

		selectedTemplate[chosenset]++

	}
	thisnpc.artisanskill = selectedArchetype.skills.artisanskill + selectedTemplate.artisanskill + selectedSchool.schoolskills.Artisan;
	thisnpc.martialskill = selectedArchetype.skills.martialskill + selectedTemplate.martialskill + selectedSchool.schoolskills.Martial;
	thisnpc.socialskill = selectedArchetype.skills.socialskill + selectedTemplate.socialskill +  + selectedSchool.schoolskills.Social;
	thisnpc.scholarskill = selectedArchetype.skills.scholarskill + selectedTemplate.scholarskill + selectedSchool.schoolskills.Scholar;
	thisnpc.tradeskill = selectedArchetype.skills.tradeskill + selectedTemplate.tradeskill +  + selectedSchool.schoolskills.Trade;

	updateSpans("artisanskill");
	updateSpans("martialskill");
	updateSpans("socialskill");
	updateSpans("scholarskill");
	updateSpans("tradeskill");
}

function fillStats(){
	show("npcstats")
	show("npcnotes")
	show("npcsave")

	divcontents("npcnotes","<b>Notes:</b><br>")
	makeTextArea("npcnotes","npcnotesinput","styledselect margintopbottom")

	if (selectedType == "Rokugani" || selectedType == "Ronin, Riffraff and Gaijin"){
		getNPCName();
		setRokuganiStats();
		setRokuganiSkills()

		advArray = []
		addToArray(advArray,selectedArchetype.advantages)
		if (document.getElementById("type").value == "Rokugani"){
			addToArray(advArray,selectedTemplate.advantages)
				}
		addToArray(advArray,selectedClan.advantages)
		addToArray(advArray,selectedFamily.advantages)
		uniqueSet = new Set(advArray);
		advArray = [...uniqueSet]
		makeSelectDropdown1("npcadv",advArray)
		getRandomSelect("npcadv")

		disadvArray = []
		addToArray(disadvArray,selectedArchetype.disadvantages)
		if (document.getElementById("type").value == "Rokugani"){
			addToArray(disadvArray,selectedTemplate.disadvantages)
				}
		addToArray(disadvArray,selectedClan.disadvantages)
		addToArray(disadvArray,selectedFamily.disadvantages)
		uniqueSet = new Set(disadvArray);
		disadvArray = [...uniqueSet]
		makeSelectDropdown1("npcdisadv",disadvArray)
		getRandomSelect("npcdisadv")

		demeanorArray = [];
		addToArray(demeanorArray,selectedArchetype.demeanor)
		if (document.getElementById("type").value == "Rokugani"){
			addToArray(demeanorArray,selectedTemplate.demeanor)
				}
		
		addToArray(demeanorArray,selectedFamily.demeanor)
		uniqueSet = new Set(demeanorArray);
		demeanorArray = [...uniqueSet]
		makeSelectDropdown1("npcdemeanor",demeanorArray)
		getRandomSelect("npcdemeanor")	
		setDemeanor()

		weaponArray = []
		addToArray(weaponArray,selectedArchetype.weapon)
		addToArray(weaponArray,selectedClan.weapons)
		addToArray(weaponArray,selectedSchool.weapons)
		uniqueSet = new Set(weaponArray);
		weaponArray = [...uniqueSet]
		makeSelectDropdown1("npcweapon",weaponArray)
		getRandomSelect("npcweapon")	
		selectNPCWeapon()

		armorArray = []
		addToArray(armorArray,selectedArchetype.armor)
		addToArray(armorArray,selectedClan.armor)
		addToArray(armorArray,selectedSchool.armor)
		uniqueSet = new Set(armorArray);
		armorArray = [...uniqueSet]
		makeSelectDropdown1("npcarmor",armorArray)
		getRandomSelect("npcarmor")
		selectNPCArmor()

		document.getElementById("npcschoolability").innerHTML="";
		document.getElementById("npcschoolability").innerHTML="<u>"+selectedSchool.name+"</u>: "+selectedSchool.ability;



		techobjs = [];
		addToArray(techobjs,selectedSchool.startingtechoptions)
		npcrank = selectedArchetype.rank;

		ranks = [1,2,3,4,5];

		uniqueSet = new Set(techobjs);
		techobjs = [...uniqueSet]

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

		
			startingtechs = selectedSchool.startingtechs

			for (m=0;m<startingtechs.length;m++){
				newdiv("startingtech"+m,"npcstartingschooltechnique")

				for (o = 0; o < techniquelist.length; o++){
					if (techniquelist[o].title == startingtechs[m]){
						effect = techniquelist[o].effect

				while (effect.includes("<br><br>")){
					effect = effect.replace("<br><br>","<br>");
				}

				techeffect = "<u>"+techniquelist[o].title + " [" + techniquelist[o].type + " Rank "+ techniquelist[o].rank + "] (" + techniquelist[o].ring + ") (" + techniquelist[o].reference + ") </u>" + effect + "<br><br>"

					divcontents("startingtech"+m,techeffect)
					}
				}
			}


			for (k =0; k< selectedSchool.chooseoptions; k++){
			if (document.getElementById("schooltechdrop"+k) == null){
	 			makeSelect("npcschooltechnique","schooltechdrop"+k,"styledselect block margintopbottom","showSelectedTechnique(schooltechdrop"+k+",npcschooltechniquedetails"+k+")")
	 				newdiv("npcschooltechniquedetails"+k,"npcschooltechnique","block")
	 		}
				var el = document.createElement("option");
				npcschooltech=document.getElementById("schooltechdrop"+k);
				npcschooltech.innerHTML="";
				el.textContent = "Select School Technique";

				npcschooltech.appendChild(el);

				for(var j = 0; j < techlist.length; j++) {
			    var el = document.createElement("option");
			    el.textContent = techdroplist[j];
			    el.value = techlist[j];
			    npcschooltech.appendChild(el);
			};
	 		
	 	}

		thisnpc.techniques = selectedArchetype.techniques;
		makeTechDropdowns()
		setTechs()
	} else {
			thisnpc.name = selectedArchetype.title
			thisnpc.template = selectedArchetype.type
			thisnpc.archetype= selectedArchetype.title
			thisnpc.type= selectedArchetype.type
			thisnpc.equiptype= selectedArchetype.equiptype
			thisnpc.conflictcombat= selectedArchetype.conflictcombat
				updateSpans("conflictcombat");
			thisnpc.conflictintrigue= selectedArchetype.conflictintrigue
				updateSpans("conflictintrigue");
			thisnpc.Air= selectedArchetype.ring.Air
				updateSpans("Air");
			thisnpc.Earth= selectedArchetype.ring.Earth
				updateSpans("Earth");
			thisnpc.Fire= selectedArchetype.ring.Fire
				updateSpans("Fire");
			thisnpc.Water= selectedArchetype.ring.Water
				updateSpans("Water");
			thisnpc.Void= selectedArchetype.ring.Void
				updateSpans("Void");
			thisnpc.max= selectedArchetype.max
			thisnpc.endurance= selectedArchetype.endurance
			thisnpc.composure= selectedArchetype.composure
			thisnpc.focus= selectedArchetype.focus
			thisnpc.vigilance= selectedArchetype.vigilance
			thisnpc.honor= selectedArchetype.honor
			thisnpc.glory= selectedArchetype.glory
			thisnpc.status= selectedArchetype.status
			thisnpc.artisanskill= selectedArchetype.skills.artisanskill
				updateSpans("artisanskill");
			thisnpc.martialskill= selectedArchetype.skills.martialskill
				updateSpans("martialskill");
			thisnpc.socialskill= selectedArchetype.skills.socialskill
				updateSpans("socialskill");
			thisnpc.scholarskill= selectedArchetype.skills.scholarskill
				updateSpans("scholarskill");
			thisnpc.tradeskill= selectedArchetype.skills.tradeskill
				updateSpans("tradeskill");
			demeanorArray = [];
			addToArray(demeanorArray,selectedArchetype.demeanor)
			makeSelectDropdown1("npcdemeanor",demeanorArray)	
			setDemeanor()

		advArray = []
		addToArray(advArray,selectedArchetype.advantages)
		makeSelectDropdown1("npcadv",advArray)

		disadvArray = []
		addToArray(disadvArray,selectedArchetype.disadvantages)
		makeSelectDropdown1("npcdisadv",disadvArray)

		weaponArray = []
		addToArray(weaponArray,selectedArchetype.weapon)
		makeSelectDropdown1("npcweapon",weaponArray)
		selectNPCWeapon()

		armorArray = []
		addToArray(armorArray,selectedArchetype.armor)
		makeSelectDropdown1("npcarmor",armorArray)
		selectNPCArmor()

		abilityArray = []
		addToArray(abilityArray,selectedArchetype.abilities)
		document.getElementById("npcschoolability").innerHTML="";
		html = ""
		for (i = 0 ; i < abilityArray.length; i++){
			html += abilityArray[i]+"<br>";
		}
		document.getElementById("npcschoolability").innerHTML=html
		thisnpc.ability = document.getElementById("npcschoolability").innerHTML;

		}

		document.getElementById("npcinfoarchetype").innerHTML = selectedArchetype.fullname;
		thisnpc.conflictcombat= selectedArchetype.conflictcombat
			updateSpans("conflictcombat");
		thisnpc.conflictintrigue= selectedArchetype.conflictintrigue
			updateSpans("conflictintrigue");

		updateSpans("endurance");
		updateSpans("composure");
		updateSpans("focus");
		updateSpans("vigilance");

		updateSpans("honor");
		updateSpans("glory");
		updateSpans("status");

	show("npcsave")
}

function makeTechDropdowns(){
	document.getElementById("npctechniquecontainer").innerHTML = "";

	if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		selectedTemplate.extratechs = 1;
		selectedTemplate.techtypes = selectedSchool.techniquetypes;
	}

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
		x = ' Rank: =< '
		document.getElementById("npctechniquecontainer").innerHTML += x;
		
		makeSelect("npctechniquecontainer","npctechniquesearchrank","margin10 styledselect","setTechs()")
		ranks = [1,2,3,4,5]

		makeSelectDropdown1("npctechniquesearchrank",ranks)

		rank = selectedArchetype.rank
		selectObj = document.getElementById("npctechniquesearchrank")
		setSelectedValue(selectObj, rank)

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


function selectNPCArmor(){
	selectedArmor = document.getElementById("npcarmor").value;

	if (document.getElementById("npcarmorstats") == null){
		newdiv("npcarmorstats","npcequiparmor","inline margin10");
	} else { document.getElementById("npcarmorstats").innerHTML = ""; }

	for(i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == selectedArmor){
			selectedArmor = tabledata[9].children[i]

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

function setDemeanor(){
	selectedDemeanor = document.getElementById("npcdemeanor").value

	for (i = 0; demeanors.length > i; i++){
		if (selectedDemeanor == demeanors[i].demeanor){
			x = "Social TNs ("+demeanors[i].tns+"), Unmasking: "+demeanors[i].unmasking;
			divcontents("npcdemeanornotes",x);
		} 
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


var npc = {};

function saveNPC (){

	if (document.getElementById("schooltechdrop") == null)
		{schooltechdrop = "None"} 
	else {schooltechdrop = document.getElementById('schooltechdrop').value;
	if (schooltechdrop == "Select School Technique")
		{schooltechdrop = "None"};
	}
	name = document.getElementById('npcnameinput').value;
	nospaces = name.replace(/ /g, "")
	npc[nospaces] = new Object;

	npc[nospaces].fullname = document.getElementById('npcnameinput').value;
	npc[nospaces].title = nospaces;
	npc[nospaces].archetype = document.getElementById('archetype').options[document.getElementById('archetype').selectedIndex].text;
	npc[nospaces].type = thisnpc.type;

	if (selectedType == "Rokugani"){
		npc[nospaces].template = document.getElementById('template').options[document.getElementById('npcclanselect').selectedIndex].text;
	} else {npc[nospaces].template = selectedArchetype.type}

	npc[nospaces].equiptype = thisnpc.equiptype;

	if (selectedType == "Rokugani"){
		npc[nospaces].clan = document.getElementById('npcclanselect').options[document.getElementById('npcclanselect').selectedIndex].text;
	} else if (selectedType == "Ronin, Riffraff and Gaijin"){
		npc[nospaces].clan = document.getElementById('npcroninclanbgselect').options[document.getElementById('npcroninclanbgselect').selectedIndex].text;
	} else {npc[nospaces].clan = "None"}

	if (selectedType == "Rokugani"){
		npc[nospaces].family = document.getElementById('npcfamilyselect').options[document.getElementById('npcfamilyselect').selectedIndex].text
	} else  if (selectedType == "Ronin, Riffraff and Gaijin"){
		npc[nospaces].family = document.getElementById('npcroninfamilybgselect').options[document.getElementById('npcroninfamilybgselect').selectedIndex].text;
	} else {npc[nospaces].family = "None"}

	if (selectedType == "Rokugani"){
		npc[nospaces].school = document.getElementById('npcschoolselect').options[document.getElementById('npcschoolselect').selectedIndex].text;
	} else {npc[nospaces].school = "None"}
	
	npc[nospaces].rings = {};		
	npc[nospaces].rings.air = thisnpc.Air;
	npc[nospaces].rings.earth = thisnpc.Earth;
	npc[nospaces].rings.fire = thisnpc.Fire;
	npc[nospaces].rings.water = thisnpc.Water;
	npc[nospaces].rings.void = thisnpc.Void;
	npc[nospaces].derived = {};
	npc[nospaces].derived.endurance = thisnpc.endurance;
	npc[nospaces].derived.composure = thisnpc.composure;
	npc[nospaces].derived.focus = thisnpc.focus;
	npc[nospaces].derived.vigilance = thisnpc.vigilance;
	npc[nospaces].social = {};
	npc[nospaces].social.honor = thisnpc.honor;
	npc[nospaces].social.glory = thisnpc.glory;
	npc[nospaces].social.status = thisnpc.status;
	npc[nospaces].social.demeanor = document.getElementById('npcdemeanor').value;
	npc[nospaces].social.demeanornotes = document.getElementById('npcdemeanornotes').innerHTML;
	npc[nospaces].skills = {};
	npc[nospaces].skills.artisan = thisnpc.artisanskill;
	npc[nospaces].skills.martial = thisnpc.martialskill;
	npc[nospaces].skills.social = thisnpc.socialskill;
	npc[nospaces].skills.scholar = thisnpc.scholarskill;
	npc[nospaces].skills.trade = thisnpc.tradeskill;
	npc[nospaces].weapon = document.getElementById('npcweapon').options[document.getElementById('npcweapon').selectedIndex].text;
	npc[nospaces].weaponstats = document.getElementById('npcweaponstats').innerHTML;
	npc[nospaces].armor = document.getElementById('npcarmor').options[document.getElementById('npcarmor').selectedIndex].text;
	npc[nospaces].armorstats = document.getElementById('npcarmorstats').innerHTML;

	
	for(i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == npc[nospaces].armor){
			selectedArmor = tabledata[9].children[i]
		}	
			npc[nospaces].armorphys = selectedArmor.phys
			npc[nospaces].armorsup = selectedArmor.sup
	} 

	for (i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].title == npc[nospaces].armor){
			selectedArmor = npcarmor[i];
		}
			npc[nospaces].armorphys = selectedArmor.phys
			npc[nospaces].armorsup = selectedArmor.sup
	}

	npc[nospaces].advantage = document.getElementById('npcadv').value;
	npc[nospaces].disadvantage = document.getElementById('npcdisadv').value;

	npc[nospaces].schoolability = document.getElementById("npcschoolability").innerHTML;

	npc[nospaces].techs = [];

	for (p =0; p< selectedSchool.startingtechs.length; p++){
		npc[nospaces].techs.push(selectedSchool.startingtechs[p])
	}

	div = document.getElementById("npcschooltechnique")

	for (q=0; q< div.children.length-1; q++){
		schooltechs = "schooltechdrop"+q;
		if (document.getElementById(schooltechs)!==null){
					thistech = document.getElementById(schooltechs).value
		npc[nospaces].techs.push(thistech)
		}

	}

	if (document.getElementById('npctechselector') !== null){
		var childDivs = document.getElementById('npctechselector').getElementsByTagName('select');

		for( i=0; i< childDivs.length; i++ )	{
			 var childDiv = childDivs[i];
			 x = childDiv.options[childDiv.selectedIndex].value;
			 if (x !== "Select Techniques"){
			 npc[nospaces].techs.push(x)
	}}
	}

	npc[nospaces].notes = document.getElementById('npcnotesinput').value

	savenpc=npc;
	localStorage.setItem("savenpc",JSON.stringify(savenpc));

	makeNpcLibrary();
	buildNpcMenu();
	
	highlight('npcbutton','npccontainer')
	hide("npcstats");
	hide("npcnotes")

	if (document.getElementById("library").classList.contains("containerx")){
			highlight("npclibrarybutton","library");
	}

	showNpc(nospaces);

	divcontents("npcstats","")
	divcontents("npcnotes","")

	buildNpcStatsDiv();

selectedArchetype = {};

thisnpc = {};

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
