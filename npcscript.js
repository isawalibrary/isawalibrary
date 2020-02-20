function loadNPC(){

	save = JSON.parse(localStorage.getItem("savenpc"));

	if (save !== undefined){
		npc=save;
	}

	if (npc==null){
		npc={}
	}
}

var thisnpc = {};
var selectedType = {}
var selectedTemplate = {};
var selectedArchetype = {};
var selectedClan = {};
var selectedFamily = {};
var selectedSchool = {};
var npcs = {};

function buildNpcStatsDiv(){

	document.getElementById("npcstats").innerHTML = "";
	document.getElementById("npcnotes").innerHTML = "";

	newdiv("npcname","npcstats","inline");
	makeTextInput("npcname","newnpcname","styledselect inline margin10",'<span id="npcnameword" onclick="getNPCName()">Name: </span>',"npcnameinput","styledselect")

	newdiv("npcinfo","npcstats","inline margin10")
		x = '<i><span id="npcinfoarchetype"></span></i> <span class="l5r">m</span> <span id="npcconflictcombat"></span> <span class="l5r">c</span> <span id="npcconflictintrigue"></span>';
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
	makeSelect("npcequip","npcweapon0","styledselect inline marginbottom","selectNPCWeapon('0');")

	newdiv("npcweapon0stats","npcequip","inline margin10")

	newdiv("npcequiparmor","npcstats","block margin10")
	divcontents("npcequiparmor","Clothing:")
	makeSelect("npcequiparmor","npcarmor0","styledselect inline marginbottom","selectNPCArmor('0');")
	
	newdiv("npcarmor0stats","npcequiparmor","inline margin10 marginbottom")
	
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
												'Weapon: ' + each.weapon0 + ' [' + each.weaponstats + ']' +
												'<br>' 
		if (each.weapon0 !== undefined){
			document.getElementById("stat"+each.title).innerHTML +=
												'Weapon: ' + each.weapon1 + ' [' + each.weapon0stats + ']' + '<br>'
		}										
		document.getElementById("stat"+each.title).innerHTML +=
												'Armor: ' + each.armor0 + ' [' + each.armorstats + ']' +
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

function buildNpcMenu(){

	document.getElementById("npcmenu").innerHTML = "";

	newdiv("npctype","npcmenu","inline");
	makeSelect("npctype","type","styledselect","selectType();")

	var typelist = ["Clan Samurai","Ronin, Riffraff and Gaijin","Animals","Creatures","Pregen",];
	makeSelectDropdown1("type",typelist);

	newdiv("npcarchetype","npcmenu","inline margin10");
	makeSelect("npcarchetype","archetype","styledselect","selectArchetype();")

	var archetypelist = [];
	for (elem in archetypes){

	if (document.getElementById('type').value == archetypes[elem].type){
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

function hideDropdowns(){
	template = document.getElementById("npctemplate")
	clan = document.getElementById("npcclan")
	family = document.getElementById("npcfamily")
	school = document.getElementById("npcschool")
	save = document.getElementById("npcsave")
	ronintype = document.getElementById("npcronintype")

	template.classList.add("hide");
	clan.classList.add("hide");
	family.classList.add("hide");
	school.classList.add("hide");
	ronintype.classList.add("hide");
	save.classList.add("hide")

	hide("npcstats")
	hide("npcnotes")
}

function selectType(){
	var archetypelist = [];

	for (elem in archetypes){
		if (document.getElementById('type').value == archetypes[elem].type){
			archetypelist.push(archetypes[elem].fullname);
	}  else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		if ("Clan Samurai" == archetypes[elem].type)
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

	hideDropdowns()

	if (type == "Animals"){

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Creatures"){

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Clan Samurai"){

		selectObj = document.getElementById("archetype")
		valueToSet = "Rank 1"
		setSelectedValue(selectObj, valueToSet)
		selectArchetype();

		document.getElementById("npcsave").classList.add("hide");
	}

	if (type == "Pregen"){

		document.getElementById("npcnameinput").value = selectedArchetype.title;
		thisnpc.title = selectedArchetype.title;
	}

	if (type == "Ronin, Riffraff and Gaijin"){

		document.getElementById("npcsave").classList.add("hide");

		var type = document.getElementById("type").value

		selectObj = document.getElementById("archetype")
		valueToSet = "Rank 1"
		setSelectedValue(selectObj, valueToSet)
		selectArchetype();
	}

	selectedType = document.getElementById("type").value

}

function selectArchetype(){

	selectedType = document.getElementById("type").value

	selectedArchetype = document.getElementById("archetype").value

	for (i = 0; i < archetypes.length; i++){
		if (archetypes[i].fullname == selectedArchetype){
			selectedArchetype = archetypes[i]
		}
	}

	if (selectedType == "Clan Samurai"){
		hideDropdowns();	
		show("npctemplate");


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
		hideDropdowns();
		show("npcronintype");

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
		hideDropdowns();
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

	hideDropdowns();
	show("npctype")
	show("npcarchetype")
	show("npcronintype")

	regions = []

	for (each in roninregions){
		regions.push(roninregions[each].name)
	}

	for (i=0; i< clans.length; i++){
		regions.push(clans[i])
	}

	show("npcclan")
	makeSelectDropdown("npcclanselect","Select Background Region or Clan",regions)
}


function selectTemplate(){
	hideDropdowns();
	show("npctemplate")
	show("npcclan");

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
	selectedClan = clandata[selectedClan]

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

	if (selectedType == "Clan Samurai"){

		for (elem in families){
			if (families[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(families[elem].name)
			}}
		makeSelectDropdown("npcfamilyselect","Select Family",clanFamilies)
		}

	else if (selectedType == "Ronin, Riffraff and Gaijin"){

		for (elem in selectedClan){
			if (selectedClan[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(selectedClan[elem].name)
			}}

		for (elem in roninupbringings){
			clanFamilies.push(roninupbringings[elem].name)
			}
			makeSelectDropdown("npcfamilyselect","Select Upbringing",clanFamilies)
		}
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
	} else {
	selectedFamily = selectedFamily.toLowerCase()
	selectedFamily = selectedClan[selectedFamily]
	}
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

	if (selectedType == "Clan Samurai"){list = clandata}
	if (selectedType == "Ronin, Riffraff and Gaijin"){list = roninregions}

	if (selectedClan == undefined){
		for (elem in list){
			if (list[elem].name == clanName){
				selectedClan = list[elem]
			} 
		}
	} 


	text = document.getElementById("npcfamilyselect").value
	
	if (text == "Select Family"){
			selectedFamily = selectedSchool.family
			selectedFamily = families[selectedFamily]
			selectedFamilyName = selectedFamily.name
			npcfamilyselect = document.getElementById("npcfamilyselect")
			setSelectedValue(npcfamilyselect, selectedFamilyName)
		} else if (text == "Select Upbringing"){
				getRandomSelect("npcfamilyselect")
			
		}

	text = document.getElementById("npcfamilyselect").value

	if (selectedType == "Clan Samurai"){list = families}
	if (selectedType == "Ronin, Riffraff and Gaijin"){list = roninupbringings}
	
		for (elem in list){
			if (list[elem].name == text){
				selectedFamily = list[elem]
			} 
		}


	selectedArchetypeName = document.getElementById("archetype").value;

	if (document.getElementById("npcschooltechnique") !== undefined && document.getElementById("npcschooltechnique") !== null){
		document.getElementById("npcschooltechnique").innerHTML = "";
		newdiv("npcstartingschooltechnique","npcschooltechnique")
	}

	if (document.getElementById("npcclanselect").value == "Other" && document.getElementById("npcfamilyselect").value == "Other"){
		makeSelect("npcschool","npcbackgroundclanselect","styledselect inline margin10","makeNpcBgFamily();")
		makeSelectDropdown("npcbackgroundclanselect","Select Background Clan",clans)
		hide("npcsave");

	} else {
		fillStats();
	}
}

function fillStats(){
	show("npcstats")
	show("npcnotes")
	show("npcsave")

	divcontents("npcnotes","<b>Notes:</b><br>")
	makeTextArea("npcnotes","npcnotesinput","styledselect margintopbottom")

	if (selectedType == "Clan Samurai" || selectedType == "Ronin, Riffraff and Gaijin"){
		getNPCName();
		setRokuganiStats();
		setRokuganiSkills()

		advArray = []
		addToArray(advArray,selectedArchetype.advantages)
		if (document.getElementById("type").value == "Clan Samurai"){
			addToArray(advArray,selectedTemplate.advantages)
				}
		addToArray(advArray,selectedClan.advantages)
		addToArray(advArray,selectedFamily.advantages)
		removeDuplicates(advArray);
		makeSelectDropdown1("npcadv",advArray)
		getRandomSelect("npcadv")

		disadvArray = []
		addToArray(disadvArray,selectedArchetype.disadvantages)
		if (document.getElementById("type").value == "Clan Samurai"){
			addToArray(disadvArray,selectedTemplate.disadvantages)
				}
		addToArray(disadvArray,selectedClan.disadvantages)
		addToArray(disadvArray,selectedFamily.disadvantages)
		removeDuplicates(disadvArray);
		makeSelectDropdown1("npcdisadv",disadvArray)
		getRandomSelect("npcdisadv")

		demeanorArray = [];
		addToArray(demeanorArray,selectedArchetype.demeanor)
		if (document.getElementById("type").value == "Clan Samurai"){
			addToArray(demeanorArray,selectedTemplate.demeanor)
				}
		
		addToArray(demeanorArray,selectedFamily.demeanor)
		removeDuplicates(demeanorArray);
		makeSelectDropdown1("npcdemeanor",demeanorArray)
		getRandomSelect("npcdemeanor")	
		setDemeanor()

		weaponArray = []
		addToArray(weaponArray,selectedArchetype.weapon)
		addToArray(weaponArray,selectedClan.weapons)
		addToArray(weaponArray,selectedSchool.weapons)
		removeDuplicates(weaponArray);
		makeSelectDropdown1("npcweapon0",weaponArray)
		getRandomSelect("npcweapon0")	
		selectNPCWeapon("0")

		armorArray = []
		addToArray(armorArray,selectedArchetype.armor)
		addToArray(armorArray,selectedClan.armor)
		addToArray(armorArray,selectedSchool.armor)
		removeDuplicates(armorArray);
		makeSelectDropdown1("npcarmor0",armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")

		document.getElementById("npcschoolability").innerHTML="";
		document.getElementById("npcschoolability").innerHTML="<u>"+selectedSchool.name+"</u>: "+selectedSchool.ability;

		npcrank = selectedArchetype.rank;
		ranks = [1,2,3,4,5];

		startingTechSelects()

		thisnpc.techniques = selectedArchetype.techniques;
		makeTechDropdowns()
		
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
		makeSelectDropdown1("npcweapon0",weaponArray)
		getRandomSelect("npcweapon0")
		selectNPCWeapon("0")

		armorArray = []
		addToArray(armorArray,selectedArchetype.armor)
		makeSelectDropdown1("npcarmor0",armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")

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

function startingTechSelects(){

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

			if (selectedSchool.chooseoptions[0] !== "" || selectedSchool.chooseoptions[0] !== "0"){
				newdiv("npcschooltechchoice","npcschooltechnique","block")
				for (k =0; k< selectedSchool.chooseoptions.length; k++){ 
				for (x =0; x< selectedSchool.chooseoptions[k]; x++){	
					if (document.getElementById("npcschooltechwrap"+k+x) == null){
					newdiv("npcschooltechwrap"+k+x,"npcschooltechchoice","block paddingbottom")
					makeSelect("npcschooltechwrap"+k+x,"npcschooltechdrop"+k+x,"block styledselect ","showSelectedTechnique('npcschooltechdrop"+k+x+"','npcschooltechdetails"+k+x+"')")
					newdiv("npcschooltechdetails"+k+x,"npcschooltechwrap"+k+x,"block")

					techobjs = [];
					addToArray(techobjs,selectedSchool.startingtechoptions[k])
					removeDuplicates(techobjs)


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

					addValuesToSelect("npcschooltechdrop"+k+x,techdroplist,techlist)
					getRandomSelect("npcschooltechdrop"+k+x)
					showSelectedTechnique("npcschooltechdrop"+k+x,"npcschooltechdetails"+k+x)
					}
				}	}
			}
			};



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

	if (document.getElementById("type").value == "Clan Samurai"){
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
		if (document.getElementById("type").value == "Clan Samurai"){
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
		}

	}

	clanRing = selectedClan.clanring
	clanRing = Object.keys(clanRing) 
	clanRing = clanRing[0]

	rings[clanRing] ++;

	array = ["Air", "Earth", "Fire", "Water", "Void"]

	if (selectedSchool.ring1 == "Any"){
		selectedSchool.ring1 = getRandom(array)

		for (m=0; m< array.length; m++){
			if (array[m] == selectedSchool.ring1){
				array.splice(m)
			}
		}
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


function setDemeanor(){
	selectedDemeanor = document.getElementById("npcdemeanor").value

	for (i = 0; demeanors.length > i; i++){
		if (selectedDemeanor == demeanors[i].demeanor){
			x = "Social TNs ("+demeanors[i].tns+"), Unmasking: "+demeanors[i].unmasking;
			divcontents("npcdemeanornotes",x);
		} 
	}
}


function selectNPCWeapon(num){
	selectedWeapon = document.getElementById("npcweapon"+num).value;

	if (document.getElementById("npcweapon"+num+"stats") == null){
		newdiv("npcweapo"+num+"nstats","npcequip","inline margin10");
	} else { document.getElementById("npcweapon"+num+"stats").innerHTML = ""; }

	for(i=0; i < tabledata[8].children.length; i++){
		if (tabledata[8].children[i].name == selectedWeapon){
			selectedWeapon = tabledata[8].children[i]

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents("npcweapon"+num+"stats",x);
		}	
	} 

	for (i=0; npcweapons.length > i; i++){
		if ( npcweapons[i].title == selectedWeapon){
			selectedWeapon = npcweapons[i];

			x = 'Damage: '+selectedWeapon.damage+
				'<span class="margin10">Deadliness: </span>'+selectedWeapon.deadliness+
				'<span class="margin10">Range: </span>'+selectedWeapon.range+
				'<span class="margin10">Qualities: </span>'+selectedWeapon.qualities;

			divcontents("npcweapon"+num+"stats",x);
		}
	}
}

function selectNPCArmor(num){
	selectedArmor = document.getElementById("npcarmor"+num).value;

	if (document.getElementById("npcarmor"+num+"stats") == null){
		newdiv("npcarmor"+num+"stats","npcequiparmor","inline margin10");
	} else { document.getElementById("npcarmor"+num+"stats").innerHTML = ""; }

	for(i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == selectedArmor){
			selectedArmor = tabledata[9].children[i]

			x = 'Physical Res: '+selectedArmor.phys+
				'<span class="margin10">Supernatural Res: </span>'+selectedArmor.sup+
				'<span class="margin10">Qualities: </span>'+selectedArmor.qualities;

			divcontents("npcarmor"+num+"stats",x);
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


if (document.getElementById("npctechselector") !== null){
			document.getElementById("npctechselector").innerHTML="";
		} else {
			newdiv("npctechselector","npctechniquecontainer")
		}

	var techobjs = [];
	var techlist = [];
	var techdroplist = [];

	if (document.getElementById("type").value == "Clan Samurai"){
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

if(dropId.nodeName !== 'SELECT'){
	abilitydiv = document.getElementById(displayDiv);
	techselect = document.getElementById(dropId);
} else {
	abilitydiv = displayDiv;
	techselect = dropId;
}

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
