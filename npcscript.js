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
		document.getElementById('menu'+each.title).innerHTML += each.title + 
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
	}
	document.getElementById("statblock").innerHTML = document.getElementById("statblock").innerHTML.replace("<br><br>","<br>");

	document.getElementById("stat"+each.title).innerHTML +=
						'<br>Notes: ' + each.notes;

}


var thisnpc = {};
var selectedType = {}
var selectedTemplate = {};
var selectedArchetype = {};
var selectedClan = {};
var selectedFamily = {};
var selectedSchool = {};
var npcs = {};


function selectType(){
	var archetypelist = [];
	for (elem in archetypes){
		if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
			archetypelist.push(archetypes[elem].title);
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


	if (type == "Animals"){

		template.classList.add("hide");
		clan.classList.add("hide");
		family.classList.add("hide");
		school.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (type == "Creatures"){

		template.classList.add("hide");
		clan.classList.add("hide");
		family.classList.add("hide");
		school.classList.add("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	if (type == "Rokugani"){

		template.classList.remove("hide");
		clan.classList.remove("hide");
		family.classList.remove("hide");
		school.classList.remove("hide");
		save.classList.remove("hide")

		document.getElementById("npcsave").classList.add("hide");

	}
	if (type == "Pregen"){

		template.classList.add("hide");
		clan.classList.add("hide");
		school.classList.add("hide");
		family.classList.remove("hide");
		save.classList.add("hide")

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}

	selectedType = document.getElementById("type").value

}

function buildNpcMenu(){

	document.getElementById("npcmenu").innerHTML = "";

	newdiv("npctype","npcmenu","inline");
	makeSelect("npctype","type","styledselect","selectType();")

	var typelist = ["Rokugani","Animals","Creatures","Pregen",];
	makeSelectDropdown1("type",typelist);

	newdiv("npcarchetype","npcmenu","inline margin10");
	makeSelect("npcarchetype","archetype","styledselect","selectArchetype();")

	var archetypelist = [];
	for (elem in archetypes){

	if (document.getElementById('type').options[document.getElementById('type').selectedIndex].text == archetypes[elem].type){
		archetypelist.push(archetypes[elem].title);
	}}
	archetypelist.sort();

	makeSelectDropdown1("archetype",archetypelist);

	buildNpcMenu1();
	selectType();

	selectObj = document.getElementById("archetype")
	valueToSet = "Rank 1 Samurai"
	setSelectedValue(selectObj, valueToSet)
	selectArchetype();
}

function buildNpcMenu1(){

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
	
	if (document.getElementById("npcclanselect") == null){
		newdiv("npcclan","npcmenu","inline margin10 hide");
		makeSelect("npcclan","npcclanselect","styledselect inline","selectNPCClan();makeFamilyDropdown();")
	}

	makeSelectDropdown("npcclanselect","Select Clan",clans);

	if (document.getElementById("npcfamilyselect") == null){
		newdiv("npcfamily","npcmenu","inline margin10 hide");
		makeSelect("npcfamily","npcfamilyselect","styledselect","selectNPCFamily();")
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


function getNPCName(){
	name = nameMaker();
	document.getElementById("npcnameinput").value = name

	thisnpc.name = name;
}

function selectArchetype(){

	if (selectedType == undefined){
		selectedType = document.getElementById("type").value
	}

	selectedArchetype = document.getElementById("archetype").value

	for (i = 0; i < archetypes.length; i++){
		if (archetypes[i].title == selectedArchetype){
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

		selectedArcTitle = document.getElementById("archetype").value;

		for (elem in archetypes){
			if (archetypes[elem].title == selectedArcTitle){
				selectedArchetype = archetypes[elem]
				}
		}

		if (selectedArchetype.ring.type !== "set"){
					selectedArchetype.extra();
		}
	} else {
		hide("npcstats")
		hide("npcnotes")
		hide("npcfamily");
		hide("npcschool");
		hide("npcsave");
		hide("npcclan");
		fillStats()
		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.name = selectedArchetype.title;
	}


}

function selectTemplate(){
	show("npcclan");
	hide("npcstats")
		hide("npcnotes")
	hide("npcfamily");
	hide("npcschool");
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
	selectedFamily = selectedFamily.toLowerCase()
	selectedFamily = selectedClan[selectedFamily]

	clanName = selectedFamily.clan

	clanSchools = [];

	for (elem in schools[clanName]){
		clanSchools.push(schools[clanName][elem].name)
	}

	makeSelectDropdown("npcschoolselect","Select School",clanSchools)
}

function selectNPCSchool(){

	selectedSchool = document.getElementById("npcschoolselect").value;

	for (elem in schools){
		for (scho in schools[elem]){
			if (schools[elem][scho].name == selectedSchool){
				selectedSchool = schools[elem][scho]
			}
		}
	}

	clanName = document.getElementById("npcclanselect").value
	text = document.getElementById("npcfamilyselect").value

	if (text == "Select Family"){
		selectedFamily = selectedSchool.family
		selectedFamily = families[clanName][selectedFamily]
		selectedFamilyName = selectedFamily.name
		npcfamilyselect = document.getElementById("npcfamilyselect")
		setSelectedValue(npcfamilyselect, selectedFamilyName)
	}

	selectedArchetypeName = document.getElementById("archetype").value;

	if (document.getElementById("npcclanselect").value == "Other"){
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
	thisnpc.glory = selectedFamily.glory;
	thisnpc.status = selectedClan.clanstatus;

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
		if (archetypes[i].title == selectedArchetype){
			selectedArchetype = archetypes[i]
		}
	}

	if (selectedArchetype.ring.type !== "set"){
			selectedArchetype.extra();
		}

	maxRing = selectedArchetype.max - 1;

	if (selectedClan.clanring == undefined){
		family = selectedSchool.clan
		selectedFamily = families[clan][family]
		selectedClan.clanring = selectedFamily.clanring
		selectedClan.clanskill = selectedFamily.clanskill
	}

	clanRing = selectedClan.clanring
	clanRing = Object.keys(clanRing) 
	clanRing = clanRing[0]

	rings[clanRing] ++;

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
			rings[familyRing] ++;
		}

		if (x == 2){
			familyRing = selectedFamily.ring1
			rings[familyRing] ++;
		}
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
		x = '<i><span id="npcinfoarchetype">'+selectedArchetype.title+'</span></i> <span class="l5r">m</span> <span id="npcconflictcombat">'+selectedArchetype.conflictcombat+'</span> <span class="l5r">c</span> <span id="npcconflictintrigue">'+selectedArchetype.conflictintrigue+'</span>';
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
		divcontents("npcsocial",x);


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
	newdiv("npcschooltechniquedetails","npctechs","block")

	newdiv("npctechniquecontainer","npctechs","block")
}


function updateSpans(variable){
	document.getElementById("npc"+variable).innerHTML = thisnpc[variable]
}

function setRokuganiSkills(){
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

	if (selectedType == "Rokugani"){
		getNPCName();
		setRokuganiStats();
		setRokuganiSkills()

		advArray = []
		addToArray(advArray,selectedArchetype.advantages)
		addToArray(advArray,selectedTemplate.advantages)
		addToArray(advArray,selectedClan.advantages)
		addToArray(advArray,selectedFamily.advantages)
		uniqueSet = new Set(advArray);
		advArray = [...uniqueSet]
		makeSelectDropdown1("npcadv",advArray)
		getRandomSelect("npcadv")

		disadvArray = []
		addToArray(disadvArray,selectedArchetype.disadvantages)
		addToArray(disadvArray,selectedTemplate.disadvantages)
		addToArray(disadvArray,selectedClan.disadvantages)
		addToArray(disadvArray,selectedFamily.disadvantages)
		uniqueSet = new Set(disadvArray);
		disadvArray = [...uniqueSet]
		makeSelectDropdown1("npcdisadv",disadvArray)
		getRandomSelect("npcdisadv")

		demeanorArray = [];
		addToArray(demeanorArray,selectedArchetype.demeanor)
		addToArray(demeanorArray,selectedTemplate.demeanor)
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
		addToArray(techobjs,selectedSchool.startingtechs)
		addToArray(techobjs,selectedSchool.startingtechoptions)
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

		document.getElementById("npcinfoarchetype").innerHTML = selectedArchetype.title
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
		document.getElementById().innerHTML += x;
		
		makeSelect("npctechniquecontainer","npctechniquesearchrank","margin10 styledselect","setTechs()")
		ranks = [1,2,3,4,5]

		makeSelectDropdown1("npctechniquesearchrank",ranks)

		rank = selectedArchetype.rank
		selectObj = document.getElementById("npctechniquesearchrank")
		setSelectedValue(selectObj, rank)

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
			effect = effect.replace("<br><br>","<br>");
				effect = effect.replace("<br><br>","<br>");
					effect = effect.replace("<br><br>","<br>");
						effect = effect.replace("<br><br>","<br>");
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
	else {schooltechdrop = document.getElementById('schooltechdrop').options[document.getElementById('schooltechdrop').selectedIndex].value;
	if (schooltechdrop == "Select School Technique")
		{schooltechdrop = "None"};
	}
	name = document.getElementById('npcnameinput').value;
	npc[name] = new Object;

	npc[name].title = document.getElementById('npcnameinput').value;
	npc[name].archetype = document.getElementById('archetype').options[document.getElementById('archetype').selectedIndex].text;
	npc[name].type = thisnpc.type;

	if (selectedType == "Rokugani"){
		npc[name].template = document.getElementById('template').options[document.getElementById('npcclanselect').selectedIndex].text;
	} else {npc[name].template = selectedArchetype.type}

	npc[name].equiptype = thisnpc.equiptype;

	if (selectedType == "Rokugani"){
		npc[name].clan = document.getElementById('npcclanselect').options[document.getElementById('npcclanselect').selectedIndex].text;
	} else {npc[name].clan = "None"}

	if (selectedType == "Rokugani"){
		npc[name].family = document.getElementById('npcfamilyselect').options[document.getElementById('npcfamilyselect').selectedIndex].text
	} else {npc[name].family = "None"}

	if (selectedType == "Rokugani"){
		npc[name].school = document.getElementById('npcschoolselect').options[document.getElementById('npcschoolselect').selectedIndex].text;
	} else {npc[name].school = "None"}
	
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
	npc[name].social.demeanor = document.getElementById('npcdemeanor').options[document.getElementById('npcdemeanor').selectedIndex].text;
	npc[name].social.demeanornotes = document.getElementById('npcdemeanornotes').innerHTML;
	npc[name].skills = {};
	npc[name].skills.artisan = thisnpc.artisanskill;
	npc[name].skills.martial = thisnpc.martialskill;
	npc[name].skills.social = thisnpc.socialskill;
	npc[name].skills.scholar = thisnpc.scholarskill;
	npc[name].skills.trade = thisnpc.tradeskill;
	npc[name].weapon = document.getElementById('npcweapon').options[document.getElementById('npcweapon').selectedIndex].text;
	npc[name].weaponstats = document.getElementById('npcweaponstats').innerHTML;
	npc[name].armor = document.getElementById('npcarmor').options[document.getElementById('npcarmor').selectedIndex].text;
	npc[name].armorstats = document.getElementById('npcarmorstats').innerHTML;
	
	for(i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == npc[name].armor){
			selectedArmor = tabledata[9].children[i]
		}	
			npc[name].armorphys = selectedArmor.phys
			npc[name].armorsup = selectedArmor.sup
	} 

	for (i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].title == npc[name].armor){
			selectedArmor = npcarmor[i];
		}
			npc[name].armorphys = selectedArmor.phys
			npc[name].armorsup = selectedArmor.sup
	}

	npc[name].advantage = document.getElementById('npcadv').options[document.getElementById('npcadv').selectedIndex].text;
	npc[name].disadvantage = document.getElementById('npcdisadv').options[document.getElementById('npcdisadv').selectedIndex].text;

	npc[name].schoolability = document.getElementById("npcschoolability").innerHTML;

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

	npc[name].notes = document.getElementById('npcnotesinput').value

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

	showNpc(name);

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


function makeNpcEdit(nom){

	nom = npc[nom]

	equiptype = nom.equiptype

	document.getElementById("editcharacter").classList.remove("hide")
	document.getElementById("statblock").classList.add("hide")
	
	newdiv("edittype","editcharacter","inline")

	makeTextInput("edittype","editname","inline ","Name: ","editnameinput","margintopbottom styledselect")

	makeTextInput("edittype","editarchetype","inline "," Archetype: ","editarchetypeinput","styledselect")

	makeTextInput("edittype","edittemplate","inline margin10","Template: ","edittemplateinput","styledselect")

	newdiv("editbackground","editcharacter","block")
	makeTextInput("editbackground","editclan","inline margin10","Clan: ","editclaninput","styledselect")

	makeTextInput("editbackground","editfamily","inline margin10","Family: ","editfamilyinput","styledselect")

	makeTextInput("editbackground","editschool","inline margin10","School: ","editschoolinput","styledselect")

	newdiv("editplayer","edittype","inline margin10")
	x ='PC?: <form class="inline styledselect"><input onchange="setNpcPlayer()" type="checkbox" id="npceditplayer" name="npcplayer" value="npcplayer">Player </form>'
	divcontents("editplayer",x)

	newdiv("editSaveNpc","edittype","inline margin10")
	makeButton("editSaveNpc","editSaveNpcButton","button",'saveEditNpc('+'"'+nom.title+'"'+')',"Save NPC")

	newdiv("editstats","editcharacter","block")
	newdiv("editnotes","editcharacter","block")

	newdiv("editrings","editstats","inline")
	divcontents("editrings","<br>Rings: ")

	makeNumberInput("editstats","editair","inline",'<span class="l5r air margin10">a</span>: ',"editairinput","margintopbottom numberform styledselect")

	makeNumberInput("editstats","editearth","inline margin10",'<span class="l5r earth margin10">e</span>: ',"editearthinput","numberform styledselect")

	makeNumberInput("editstats","editfire","inline margin10",'<span class="l5r fire margin10">f</span>: ',"editfireinput","numberform styledselect")

	makeNumberInput("editstats","editwater","inline margin10",'<span class="l5r water margin10">w</span>: ',"editwaterinput","numberform styledselect")

	makeNumberInput("editstats","editvoid","inline margin10",'<span class="l5r void margin10">v</span>: ',"editvoidinput","numberform styledselect")

	makeNumberInput("editstats","editendurance","inline",'<br>Endurance: ',"editenduranceinput","margintopbottom numberform styledselect")

	makeNumberInput("editstats","editcomposure","inline margin10",'Composure: ',"editcomposureinput","numberform styledselect")

	makeNumberInput("editstats","editfocus","inline margin10",'Focus: ',"editfocusinput","numberform styledselect")

	makeNumberInput("editstats","editvigilance","inline margin10",'Vigilance: ',"editvigilanceinput","numberform styledselect")

	makeNumberInput("editstats","edithonor","inline margin10",'<br>Honor: ',"edithonorinput","numberform styledselect margintopbottom")

	makeNumberInput("editstats","editglory","inline margin10",'Glory: ',"editgloryinput","numberform styledselect")

	makeNumberInput("editstats","editstatus","inline margin10",'Status: ',"editstatusinput","numberform styledselect")

	newdiv("editdemeanor","editstats","inline margin10")
	divcontents("editdemeanor",'Demeanor:')
	makeSelect("editdemeanor","editdemeanorinput","styledselect inline","selectNPCDemeanor();")

	demeanor = [];

	for (i=0; i < demeanors.length; i++){
		demeanor.push(demeanors[i].demeanor)
	}

	makeSelectDropdown1("editdemeanorinput",demeanor)

	newdiv("editdemeanorinfo","editstats","inline margin10")

	makeTextInput("editstats","editadvantage","inline margin10","<br>Advantage: ","editadvantageinput","margintopbottom styledselect xwidth")

	makeTextInput("editstats","editdisadvantage","inline margin10","<br>Disadvantage: ","editdisadvantageinput","margintopbottom styledselect xwidth")

	newdiv("editskills","editstats","inline")
	divcontents("editskills",'<br>Skills:')

	makeNumberInput("editskills","editartisan","inline margin10",'Artisan: ',"editartisaninput","margintopbottom numberform styledselect")

	makeNumberInput("editskills","editsocial","inline margin10",'Social: ',"editsocialinput","margintopbottom numberform styledselect")

	makeNumberInput("editskills","editmartial","inline margin10",'Martial: ',"editmartialinput","numberform styledselect")

	makeNumberInput("editskills","editscholar","inline margin10",'Scholar: ',"editscholarinput","numberform styledselect")

	makeNumberInput("editskills","edittrade","inline margin10",'Trade: ',"edittradeinput","numberform styledselect")

	newdiv("editweapon","editstats","inline margin10")
	
	makeSelect("editweapon","editweaponinput","margintopbottom styledselect inline","selectNPCWeaponEdit(&apos;editweaponinput&apos;,&apos;editweaponstats&apos;);")

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

	newdiv("editability","editstats","inline margin10 margintopbottom")
	divcontents("editability","<br><i>Ability:</i>")

	newdiv("editschoolability","editability","inline margin10")
	newdiv("editschoolability1","editability","inline margin10")

	newdiv("edittechs","editstats","inline margin10 margintopbottom")
	divcontents("edittechs","<br><i>Techniques:</i>")

	i=0;

	for (each in nom.techs){
		newdiv("techwrap"+i,"edittechs","margintopbottom")
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

	document.getElementById("editnameinput").value = nom.title;

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