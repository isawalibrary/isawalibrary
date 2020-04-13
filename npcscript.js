
function loadNPC(){

	var save = JSON.parse(localStorage.getItem("savenpc"));

	if (save !== undefined){
		npc=save;	}

	if (npc==null){
		npc={}; 	}
}

var npc = {};
var thisnpc = {};
var npcs = {};

function makeNpcLibrary(){

	document.getElementById("menu").innerHTML = "";
	document.getElementById("statblock").innerHTML = ""

	for (var each in npc){

		var dem = npc[each].social.demeanor
		each = npc[each];
		
		for (var i=0; i< demeanors.length; i++){
			
			if (demeanors[i].demeanor == dem){
				var npcdemeanor = demeanors[i]
			}
	}

	switch (each.type){
		case "Clan Samurai": 
			var x = each.type
			break;

		case "Ronin, Riffraff and Gaijin":
			x = each.ronintype
			break;

		case "Animals":
		case "Creatures":
		case "Pregen":
		case "Servants and Peasants":
			x = "";
			break;
	}

		newDiv("div"+each.title,"menu","block");
		divContents("div"+each.title,"<span id='menu"+each.title+"' onclick='showNpc("+'"'+each.title+'"'+")'></span><br>");
		newButton('menu'+each.title,each.title+'--delete','inline mr5 mb5',"deletenpc("+"'"+each.title+"'"+")","x")
		document.getElementById('menu'+each.title).innerHTML += each.fullname + 
															' [' + each.clan +
															'/' + each.school +
															'] (' + each.archetype +" "+ x +" "+
															'/' + each.template +
															')' 
															;
;
		newDiv("npc-"+each.title,"statblock","block hide");
		document.getElementById("npc-"+each.title).innerHTML='<b>'+ each.fullname + 
												' [' + each.clan +
												'/' + each.school +
												'] (' + each.archetype +" "+ x +" "+
												'/' + each.template +
												')</b> ';
		newDiv("addskirmishbuttondiv"+each.title,"npc-"+each.title,"inline") 
		newButton("addskirmishbuttondiv"+each.title,each.title+'-toskirmish',"button ml10",'npcskirmish('+"'"+each.title+"'"+')',"add to skirmish")
		newButton("addskirmishbuttondiv"+each.title,each.title+'-edit',"button ml10",'makeNpcEdit('+"'"+each.title+"'"+')',"edit NPC")
												
		newDiv("stat"+each.title,"npc-"+each.title,"block");
		document.getElementById("stat"+each.title).innerHTML= 
												'<p>Rings:<span class="l5r air ml10">a</span>: '+ each.rings.air +
												'<span class="l5r earth ml10">e</span>: '+ each.rings.earth +
												'<span class="l5r fire ml10">f</span>: '+ each.rings.fire +
												'<span class="l5r water ml10">w</span>: '+ each.rings.water +
												'<span class="l5r void ml10">v</span>: '+ each.rings.void +
												'<p>' +
												'Endurance:' + each.derived.endurance +
												'<span class="ml10">Composure</span>: ' + each.derived.composure +
												'<span class="ml10">Focus</span>: ' + each.derived.focus +
												'<span class="ml10">Vigilance</span>: ' + each.derived.vigilance +
												'<p>' +
												'Social: <span class="ml10">Honor</span>: ' + each.social.honor +
												'<span class="ml10">Glory</span>: ' + each.social.glory +
												'<span class="ml10">Status</span>: ' + each.social.status +
												'<span class="ml10">Demeanor</span>: ' + each.social.demeanor + 
												" (" + npcdemeanor.tns + ") Unmasking: " + npcdemeanor.unmasking +
												'<p>Skills: <span class="ml10">Artisan</span>: ' + each.skills.artisan +
												'<span class="ml10">Social</span>: ' + each.skills.social +
												'<span class="ml10">Martial</span>: ' + each.skills.martial +
												'<span class="ml10">Scholar</span>: ' + each.skills.scholar +
												'<span class="ml10">Trade</span>: ' + each.skills.trade +
												'<p>' ;

		for (var e = 0; e < each.weapon.length; e++){

					var weap = each.weapon[e]
					
					var weapstats = getWeaponStats(weap)

					document.getElementById("stat"+each.title).innerHTML +=
												'Weapon: ' + each.weapon[e] + ' [' + weapstats + ']' +
												'<br>' 
		}

		each.armorstats = 'Phys Res: '+each.armorphys+
								'<span class="ml10">Sup Res: </span>'+each.armorsup;
		
		document.getElementById("stat"+each.title).innerHTML +=
												'Armor: ' + each.armor + ' [' + each.armorstats + ']<p>' 

		for (var m = 0; m < each.advantage.length; m++){
			document.getElementById("stat"+each.title).innerHTML +=
												'Advantage: ' + each.advantage[m] 
												+'<br>'
		}										

		for (var m =0; m < each.disadvantage.length; m++){
			document.getElementById("stat"+each.title).innerHTML +=
												'Disdvantage: ' + each.disadvantage[m] 
												+'<br>'
		}										
		document.getElementById("stat"+each.title).innerHTML += '<p>'	

		if (each.qualities !== undefined){
			document.getElementById("stat"+each.title).innerHTML += each.qualities + "<p>" ;
		}										 

		document.getElementById("stat"+each.title).innerHTML +='<i>Ability</i>: '											
		if (each.ability !== "" && each.ability != undefined){
			document.getElementById("stat"+each.title).innerHTML += '<p>' + each.ability 
		} 

		document.getElementById("stat"+each.title).innerHTML += '<p><i>Techniques</i>: <p>'

		var technames = [];
		var techeffects = []

				for (var i = 0; i < each.techs.length; i++){

					newDiv("stat"+each.title+"techwrap"+[i],"stat"+each.title,"block mt5")
					newDiv("stat"+each.title+"techname"+[i],"stat"+each.title+"techwrap"+[i],"block")
					newDiv("stat"+each.title+"techeffect"+[i],"stat"+each.title+"techwrap"+[i],"block hide")

					var thistech = each.techs[i];

					for (var j = 0; j < techniquelist.length; j++){
						if (thistech == techniquelist[j].title){

							var eff = techniquelist[j].effect;

							x = '<u>'+techniquelist[j].title + " (" + techniquelist[j].ring +
								') [' + techniquelist[j].type + " Rank " + techniquelist[j].rank + ']' +
								'</u>'

							technames.push(x);

							x = eff + '<p>'
							techeffects.push(x)
						}
					}

				if (technames[i] !== undefined){
					document.getElementById("stat"+each.title+"techname"+[i]).innerHTML = technames[i] 
					x = "stat"+each.title+"techeffect"+[i]
					document.getElementById("stat"+each.title+"techname"+[i]).setAttribute("onclick","hideShow('"+x+"')")
					document.getElementById("stat"+each.title+"techeffect"+[i]).innerHTML = techeffects[i]
				}
				}

		if (document.getElementById("stat"+each.title+"techwrap0") !== null && document.getElementById("stat"+each.title+"techwrap0") !== undefined){
						document.getElementById("stat"+each.title+"techwrap0").classList.remove("mt5")}
		if (technames.length == 0){
			document.getElementById("stat"+each.title).innerHTML += 'None';
		}

			document.getElementById("stat"+each.title).innerHTML +=
						'<p>Notes: ' + each.notes;
	}
	document.getElementById("statblock").innerHTML = document.getElementById("statblock").innerHTML.replace("<br><br>","<p>");
}

function buildNpcStatsDiv(){  //makes npcbuilder form

	newDiv("npcnameleft","npcstatwrap","inline mt5 npcbuilderleft");
	divContents("npcnameleft",'<span id="npcnameword" onclick="getNPCName(&apos;npcnameinput&apos;)">Name: </span>')

	newDiv("npcnameright","npcstatwrap","inline mt5 npcbuilderright")
	newTextInput("npcnameright","newnpcname","inline w200","","npcnameinput","inline w200")

	newDiv("npcinfo","npcnameright","inline ml10")
	divContents("npcinfo",'<i><span id="npcinfoarchetype"></span></i> <span class="l5r">m</span> <span id="npcconflictcombat"></span> <span class="l5r">c</span> <span id="npcconflictintrigue"></span>');

	newDiv("npcringsleft","npcstatwrap","block pt5 pb5 npcbuilderleft")
	divContents("npcringsleft",'<b>Rings</b>:')

	newDiv("npcringsright","npcstatwrap","block pt5 pb5 npcbuilderright")
	divContents("npcringsright",'<span class="air l5r">a</span> <span id="npcAir"></span>'+
		'<span class="l5r earth ml10">e</span> <span id="npcEarth"></span>'+
		'<span class="l5r fire ml10">f</span> <span id="npcFire"></span>'+
		'<span class="l5r water ml10">w</span> <span id="npcWater"></span>'+
		'<span class="ml10 void l5r">v</span> <span id="npcVoid"></div>'+'</span>')

	newDiv("npcderivedstatsleft","npcstatwrap","block pt5 pb5 npcbuilderleft")
	divContents("npcderivedstatsleft",'<b>Derived Stats</b>:')

	newDiv("npcderivedstatsright","npcstatwrap","block pt5 pb5 npcbuilderright")
	divContents("npcderivedstatsright",'Endurance: <span id="npcendurance"></span>'+
		'<span class="ml10">Composure:</span> <span id="npccomposure"></span>'+
		'<span class="ml10">Focus:</span> <span id="npcfocus"></span>'+
		'<span class="ml10">Vigilance:</span> <span id="npcvigilance"></span>' ) 

	newDiv("npcsocialleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcsocialleft",'<b>Social</b>:')

	newDiv("npcsocialright","npcstatwrap","block pb5 pt5 npcbuilderright")
	divContents("npcsocialright",'<span>Honor: </span><span id="npchonor"></span>'+
		'<span class="ml10">Glory: </span><span id="npcglory"></span>'+
		'<span class="ml10">Status: </span><span id="npcstatus"></span>'+
		'<span class="ml10">Demeanor: ');	
	newSelect("npcsocialright","npcdemeanor"," inline","setDemeanor()")
	addToDiv("npcsocialright",'<span id="npcdemeanornotes" class="inline ml10"></span>');

	newDiv("npcadvleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcadvleft","Advantage:")

	newDiv("npcadvright","npcstatwrap","block pb5 pt5 npcbuilderright")
	newSelect("npcadvright","npcadv0"," inline w600","")

	newDiv("npcdisadvleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcdisadvleft","Disadvantage:")

	newDiv("npcdisadvright","npcstatwrap","block pb5 pt5 npcbuilderright")
	newSelect("npcdisadvright","npcdisadv0"," inline w600","")

	newDiv("npcskillsleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcskillsleft","<b>Skills</b>:")

	newDiv("npcskillsright","npcstatwrap","block pb5 pt5 npcbuilderright")
	divContents("npcskillsright",'<span class="">Artisan: </span><span id="npcartisanskill"></span>'+
			'<span class="ml10">Martial: </span><span id="npcmartialskill"></span>'+
			'<span class="ml10">Social: </span><span id="npcsocialskill"></span>'+
			'<span class="ml10">Scholar: </span><span id="npcscholarskill"></span>'+
			'<span class="ml10">Trade: </span><span id="npctradeskill"></span>')
	
	newDiv("npcweapon0left","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcweapon0left","<b>Weapon</b>:")

	newDiv("npcweapons","npcstatwrap","block pt5 npcbuilderright")
	newDiv("npcweaponwrap0","npcweapons","block pb5 npcbuilderright")
	newSelect("npcweaponwrap0","npcweapon0"," inline","selectNPCWeapon('0');")	
	newDiv("npcweapon0stats","npcweaponwrap0","inline ml10")

	newDiv("npcarmorleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcarmorleft","<b>Clothing</b>:")

	newDiv("npcequiparmor","npcstatwrap","block pb5 pt5 npcbuilderright")
	newSelect("npcequiparmor","npcarmor0","inline","selectNPCArmor('0');")
	newDiv("npcarmor0stats","npcarmor0","inline")
	
	newDiv("npcabilityleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcabilityleft","<b>Ability</b>:")

	newDiv("npcabilityright","npcstatwrap","block pb5 pt5 npcbuilderright")
	newDiv("npcabilities","npcabilityright","")

	newDiv("npctechleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npctechleft","<b>Techniques</b>:")
	
	newDiv("npctechright","npcstatwrap","block pb5 pt5 npcbuilderright")

	newDiv("npcschooltechnique","npctechright","block")
	newDiv("npcstartingschooltechnique","npctechright","block")
	newDiv("npcschooltechchoice","npctechright","block")
	newDiv("npctechniquecontainer","npctechright","block")

	newDiv("npcnotesleft","npcstatwrap","block pb5 pt5 npcbuilderleft")
	divContents("npcnotesleft","<b>Notes</b>:")

	newDiv("npcnotesright","npcstatwrap","block pb5 pt5 npcbuilderright")
	newTextArea("npcnotesright","npcnotesinput","w600 h100")
}


function buildNpcMenu(){

	document.getElementById("npcmenu").innerHTML = "";  //clear menu

	newDiv("npctype","npcmenu","inline");
	newSelect("npctype","type","","selectType();")

	getNpcTypeList()
	fillSelectDropdown("type",npcLists.npcTypeArray);

	newDiv("npcarchetype","npcmenu","inline ml10");
	newSelect("npcarchetype","archetype","","selectArchetype();")

	getNpcArchetypeList(document.getElementById('type').value)

	npcLists.npcArchetypeArray.sort();

	fillSelectDropdown("archetype",npcLists.npcArchetypeArray);

	buildNpcMenuBar();
	selectType();

	var selectObj = document.getElementById("archetype")
	var valueToSet = "Rank 1"
	setSelectedText(selectObj, valueToSet)
	selectArchetype();
}

var npcLists = {
	npcTypeArray : ["Clan Samurai","Ronin, Riffraff and Gaijin","Servants and Peasants"],
	npcTemplateArray : [],
	npcArchetypeArray : [],

			}

function getNpcTypeList(){
	npcLists.npcTypeArray = ["Clan Samurai","Ronin, Riffraff and Gaijin","Servants and Peasants"] //reset

	for (var archetype in archetypes){  // picks up the rest of the npc types from npcdata, some are in the array above because I want them in an order
		npcLists.npcTypeArray.push(archetypes[archetype].type)
	}

	npcLists.npcTypeArray = removeDuplicates(npcLists.npcTypeArray)
}

function getNpcTemplateList(){
	npcLists.npcTypeArray = [] //reset

	for (var template in templates){
		npcLists.npcTemplateArray.push(templates[template].title)
	}

	npcLists.npcTemplateArray = removeDuplicates(npcLists.npcTemplateArray)
}

function getNpcArchetypeList(type){
	npcLists.npcArchetypeArray = []

	if (type == "Ronin, Riffraff and Gaijin"){
		type = "Clan Samurai"
	}

	for (var elem in archetypes){
		if (type == archetypes[elem].type){
			npcLists.npcArchetypeArray.push(archetypes[elem].fullname);
		}}

	npcLists.npcArchetypeArray = removeDuplicates(npcLists.npcArchetypeArray)
}

function buildNpcMenuBar(){

	//create all the hidden empty dropdowns
	//creates and populates template dropdown

	newDiv("npcronintype","npcmenu","inline ml10 hide");
	newSelect("npcronintype","npcronintypeselect","","selectNPCRoninType();")

	fillSelectDropdownDefault("npcronintypeselect","Select Type",ronintypelist);	

	newDiv("npctemplate","npcmenu","inline hide");
	newSelect("npctemplate","template"," inline ml10","selectTemplate();")

	getNpcTemplateList();
	npcLists.npcTemplateArray.sort();

	fillSelectDropdownDefault("template","Select Template",npcLists.npcTemplateArray);
	
	newDiv("npcclan","npcmenu","inline ml10 hide");
	newSelect("npcclan","npcclanselect"," inline","selectNPCClan();makeFamilyDropdown();")

	fillSelectDropdownDefault("npcclanselect","Select Clan",clans);

	newDiv("npcfamily","npcmenu","inline ml10 hide");
	newSelect("npcfamily","npcfamilyselect","","selectNPCFamily();")

	newDiv("npcschool","npcmenu","inline ml10 hide");
	newSelect("npcschool","npcschoolselect","","selectNPCSchool();")

	newDiv("npcsave","npcmenu","inline ml10 hide");
	newButton("npcsave","npcsavebutton","button inline","saveNPC()","save NPC")

	newDiv("npcreroll","npcmenu","inline ml10 hide");
	newButton("npcreroll","npcrerollbutton","button inline","npcReroll()","reroll")
}

function selectType(){

	resetNPCBuilder();

	var type = document.getElementById('type').value

	getNpcArchetypeList(type)

	npcLists.npcArchetypeArray.sort()

	fillSelectDropdownDefault("archetype","Select Archetype",npcLists.npcArchetypeArray);
	var type = document.getElementById("type").value

	hideDropdowns()

	if (type == "Animals"){
		show("npcarchetype");
	}

	if (type == "Creatures"){
		show("npcarchetype");
	}

	if (type == "Oni Summoner"){
		show("npcarchetype");
	}

	if (type == "Clan Samurai"){
		show("npcarchetype")
		var selectObj = document.getElementById("archetype")
		var valueToSet = "Rank 1"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();

		show("template")
		setSelectedText(document.getElementById("template"),"Select Template")

		document.getElementById("npcsave").classList.add("hide");
	}

	if (type == "Servants and Peasants"){
		var selectObj = document.getElementById("archetype")
		var valueToSet = "Servants and Peasants"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();
	}

	if (type == "Ronin, Riffraff and Gaijin"){
		document.getElementById("npcsave").classList.add("hide");

		thisnpc.selectedType = document.getElementById("type").value

		var selectObj = document.getElementById("archetype")
		var valueToSet = "Rank 1"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();
	}

	thisnpc.selectedType = document.getElementById("type").value
}

function hideDropdowns(){
	var template = document.getElementById("npctemplate")
	var clan = document.getElementById("npcclan")
	var family = document.getElementById("npcfamily")
	var school = document.getElementById("npcschool")
	var save = document.getElementById("npcsave")
	var ronintype = document.getElementById("npcronintype")

	template.classList.add("hide");
	clan.classList.add("hide");
	family.classList.add("hide");
	school.classList.add("hide");
	ronintype.classList.add("hide");
	save.classList.add("hide")

	hide("npcstatwrap")
}

function resetNPCBuilder(){
		thisnpc.selectedTemplate = {};
		thisnpc.selectedSchool = {};
		thisnpc.selectedFamily = {}
		thisnpc.selectedClan = {};
		document.getElementById("npcstatwrap").innerHTML = "";
		buildNpcStatsDiv();		
}

function selectArchetype(){

	thisnpc.selectedType = document.getElementById("type").value

	thisnpc.selectedArchetype = document.getElementById("archetype").value

	for (var i = 0; i < archetypes.length; i++){
		if (archetypes[i].fullname == thisnpc.selectedArchetype){
			thisnpc.selectedArchetype = archetypes[i]
		}
	}

	hideDropdowns();

	switch (thisnpc.selectedType){

		case ("Clan Samurai"):			
			show("npctemplate");

			if (thisnpc.selectedArchetype.ring.type !== "set"){
				thisnpc.selectedArchetype.extra();
			}
		break;

		case ("Servants and Peasants"):
			show("npctemplate");
			hide("npcarchetype");

			setSelectedText(document.getElementById("template"),"Select Template")

		break;

		case ("Ronin, Riffraff and Gaijin"):
			show("npcronintype");

			setSelectedText(document.getElementById("npcronintypeselect"),"Select Type")

			if (thisnpc.selectedArchetype.ring.type !== "set"){
						thisnpc.selectedArchetype.extra();
			}
		break;

		case ("Creatures"):
		case ("Animals"):
		case ("Pregen"):
			fillStats()
		break;

		case ("Oni Summoner"):
			oniMaker();
		break;
	}
}

function selectNPCRoninType(){
	var ronintype = document.getElementById("npcronintypeselect").value

	switch (ronintype){
		case "Samurai or Ronin Origin":
		thisnpc.status = 24;
	}

	switch (ronintype){
		case "Peasant Origin":
		thisnpc.status = 15;
	}

	switch (ronintype){
		case "Gaijin Origin":
		thisnpc.status = 0;
	}

	hideDropdowns();
	show("npctype")
	show("npcarchetype")
	show("npcronintype")

	thisnpc.regions = []

	for (var each in roninregions){
		thisnpc.regions.push(roninregions[each].name)
	}

	show("npctemplate");
}

function selectTemplate(){
	hideDropdowns();
	show("npctemplate")
	show("npcclan");

	thisnpc.selectedType = document.getElementById("type").value;

	thisnpc.selectedTemplate = document.getElementById("template").value;

	for (var i=0; i<templates.length; i++){
		if (templates[i].title == thisnpc.selectedTemplate ){
			thisnpc.selectedTemplate = templates[i]
		}
	}

	switch (thisnpc.selectedType){
		case "Ronin, Riffraff and Gaijin":
			thisnpc.regions = []

			for (var each in roninregions){
				thisnpc.regions.push(roninregions[each].name)
			}

			fillSelectDropdownDefault("npcclanselect","Select Background Region",thisnpc.regions)
			show("npcronintype")
			show("npcclanselect")
			break;

		case "Servants and Peasants":
			fillStats()
			hide("npcclan")
			break;

		case "Clan Samurai":
			fillSelectDropdownDefault("npcclanselect","Select Clan",clans)
			break;
	}
}

function selectNPCClan(){
	show("npcfamily");
	show("npcschool");
	clearSelect("npcschoolselect")
	hide("npcstatwrap")
	hide("npcsave");

	thisnpc.selectedClan = document.getElementById("npcclanselect").value;
	thisnpc.selectedClan = clandata[thisnpc.selectedClan]

	var clanName = document.getElementById("npcclanselect").value

	var clanSchools = [];
	var unalignedSchools = [];
	var defaultOpt = ["Select School"]

		for (var elem in schools[clanName]){
			clanSchools.push(schools[clanName][elem].name)
		}

		for (var elem in schools){
			for (var each in schools[elem])
				if (schools[elem][each].keyword.includes("Unaligned")){
					unalignedSchools.push(schools[elem][each].name)
				}
		}

	if (thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
		for (var elem in schools){
			for (var each in schools[elem])
				if (schools[elem][each].keyword.includes("ronin") || schools[elem][each].keyword.includes("Unaligned")){
					clanSchools.push(schools[elem][each].name)
				}
		}

		if (document.getElementById("npcronintypeselect").value == "Gaijin Origin"){
			for (var elem in schools){
			for (var each in schools[elem])
				if (schools[elem][each].keyword.includes("gaijin")){
					clanSchools.push(schools[elem][each].name)
				}
		}		
	}}

	if (thisnpc.selectedType == "Clan Samurai"){
			document.getElementById("npcschoolselect").innerHTML = "";
			addToSelect("npcschoolselect",defaultOpt)
			addOptgroupToSelect("npcschoolselect","Clan Schools",clanSchools)
			addOptgroupToSelect("npcschoolselect","Other Schools",unalignedSchools)
		} else {
			fillSelectDropdownDefault("npcschoolselect","Select School",clanSchools)
		}
}


function makeFamilyDropdown(){

	var clanFamilies = [];

	if (thisnpc.selectedType == undefined){
		thisnpc.selectedType = document.getElementById("type").value
	}

	if (thisnpc.selectedType == "Clan Samurai"){

		for (var elem in families){
			if (families[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(families[elem].name)
			}}
		fillSelectDropdownDefault("npcfamilyselect","Select Family",clanFamilies)
		}

	else if (thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){

		for (elem in thisnpc.selectedClan){
			if (thisnpc.selectedClan[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(thisnpc.selectedClan[elem].name)
			}}

		for (elem in roninupbringings){
			clanFamilies.push(roninupbringings[elem].name)
			}
			fillSelectDropdownDefault("npcfamilyselect","Select Upbringing",clanFamilies)
		}
}


function npcReroll(){
	if (thisnpc.selectedType == "Servants and Peasants" ){
		fillStats();
	} else {
		selectNPCSchool();
	}
}

function selectNPCFamily(){
	show("npcschool");
	hide("npcsave");

	thisnpc.selectedFamily = document.getElementById("npcfamilyselect").value;

	if (thisnpc.selectedFamily.includes(" ")){
		for (var each in families.Other){
			if (families.Other[each].name == thisnpc.selectedFamily){
				thisnpc.selectedFamily = families.Other[each]
			}
		}
	} else {
	thisnpc.selectedFamily = thisnpc.selectedFamily.toLowerCase()
	thisnpc.selectedFamily = thisnpc.selectedClan[thisnpc.selectedFamily]
	}
}

function selectNPCRoninType(){
	var ronintype = document.getElementById("npcronintypeselect").value

	switch (ronintype){
		case "Samurai or Ronin Origin":
		thisnpc.status = 24;
	}

	switch (ronintype){
		case "Peasant Origin":
		thisnpc.status = 15;
	}

	switch (ronintype){
		case "Gaijin Origin":
		thisnpc.status = 0;
	}

	hideDropdowns();
	show("npctype")
	show("npcarchetype")
	show("npcronintype")

	thisnpc.regions = []

	for (var each in roninregions){
		thisnpc.regions.push(roninregions[each].name)
	}
	show("npctemplate");
	setSelectedText(document.getElementById("template"),"Select Template");
}

function selectNPCSchool(){

	thisnpc.selectedSchool = document.getElementById("npcschoolselect").value;

	for (var elem in schools){
		for (var school in schools[elem]){
			if (schools[elem][school].name == thisnpc.selectedSchool){
				thisnpc.selectedSchool = schools[elem][school]
			}
		}
	}

	var clanName = document.getElementById("npcclanselect").value

	if (thisnpc.selectedType == "Clan Samurai"){list = clandata}
	if (thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){list = roninregions}

	if (thisnpc.selectedClan == undefined){
		for (elem in list){
			if (list[elem].name == clanName){
				thisnpc.selectedClan = list[elem]
			} 
		}
	} 

	var text = document.getElementById("npcfamilyselect").value
	
	if (text == "Select Family"){
			thisnpc.selectedFamily = thisnpc.selectedSchool.family
			thisnpc.selectedFamily = families[thisnpc.selectedFamily]
			thisnpc.selectedFamilyName = thisnpc.selectedFamily.name
			npcfamilyselect = document.getElementById("npcfamilyselect")
			setSelectedText(npcfamilyselect, thisnpc.selectedFamilyName)
		} 

	if (text == "Select Upbringing"){
			getRandomSelect("npcfamilyselect")
		}

	text = document.getElementById("npcfamilyselect").value

	if (thisnpc.selectedType == "Clan Samurai"){list = families}
	if (thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){list = roninupbringings}
	
		for (elem in list){
			if (list[elem].name == text){
				thisnpc.selectedFamily = list[elem]
			} 
		}

	var selectedArchetypeName = document.getElementById("archetype").value;

	fillStats();
}


function getNPCName(divId){
	name = nameMaker();
	document.getElementById(divId).value = name
}

function fillStats(){
	show("npcstatwrap")
	show("npcsave")

	if (thisnpc.selectedType == "Clan Samurai" || thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
		
		var name = nameMaker();

		if (thisnpc.selectedType == "Clan Samurai"){
			name = document.getElementById("npcfamilyselect").value+" "+name;
		}

		document.getElementById("npcnameinput").value = name
		thisnpc.name = name;

		setRokuganiStats();
		setRokuganiSkills()

		thisnpc.advArray = []
		addToArray(thisnpc.advArray,thisnpc.selectedArchetype.advantages)
		addToArray(thisnpc.advArray,thisnpc.selectedTemplate.advantages)
		addToArray(thisnpc.advArray,thisnpc.selectedClan.advantages)
		addToArray(thisnpc.advArray,thisnpc.selectedFamily.advantages)
		thisnpc.advArray = removeDuplicates(thisnpc.advArray);
		fillSelectDropdown("npcadv0",thisnpc.advArray)
		getRandomSelect("npcadv0")

		thisnpc.disadvArray = []
		addToArray(thisnpc.disadvArray,thisnpc.selectedArchetype.disadvantages)
		addToArray(thisnpc.disadvArray,thisnpc.selectedTemplate.disadvantages)
		addToArray(thisnpc.disadvArray,thisnpc.selectedClan.disadvantages)
		addToArray(thisnpc.disadvArray,thisnpc.selectedFamily.disadvantages)
		thisnpc.disadvArray = removeDuplicates(thisnpc.disadvArray);
		fillSelectDropdown("npcdisadv0",thisnpc.disadvArray)
		getRandomSelect("npcdisadv0")

		thisnpc.demeanorArray = [];
		addToArray(thisnpc.demeanorArray,thisnpc.selectedArchetype.demeanor)
		addToArray(thisnpc.demeanorArray,thisnpc.selectedTemplate.demeanor)
		addToArray(thisnpc.demeanorArray,thisnpc.selectedFamily.demeanor)
		thisnpc.demeanorArray = removeDuplicates(thisnpc.demeanorArray);
		fillSelectDropdown("npcdemeanor",thisnpc.demeanorArray)
		getRandomSelect("npcdemeanor")	
		setDemeanor()

		thisnpc.weaponArray = []
		addToArray(thisnpc.weaponArray,thisnpc.selectedArchetype.weapon)
		addToArray(thisnpc.weaponArray,thisnpc.selectedClan.weapons)
		addToArray(thisnpc.weaponArray,thisnpc.selectedSchool.weapons)
		thisnpc.weaponArray = removeDuplicates(thisnpc.weaponArray);
		fillSelectDropdown("npcweapon0",thisnpc.weaponArray)
		getRandomSelect("npcweapon0")	
		selectNPCWeapon("0")

		makeExtraWeaponButton()

		thisnpc.armorArray = []
		addToArray(thisnpc.armorArray,thisnpc.selectedArchetype.armor)
		addToArray(thisnpc.armorArray,thisnpc.selectedClan.armor)
		addToArray(thisnpc.armorArray,thisnpc.selectedSchool.armor)
		thisnpc.armorArray = removeDuplicates(thisnpc.armorArray);
		fillSelectDropdown("npcarmor0",thisnpc.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")

		document.getElementById("npcabilities").innerHTML="";
		document.getElementById("npcabilities").innerHTML="<u>"+thisnpc.selectedSchool.name+"</u>: "+thisnpc.selectedSchool.ability+"<p>";

		npcrank = thisnpc.selectedArchetype.rank;
		ranks = [1,2,3,4,5];

		startingTechSelects()

		thisnpc.techniques = thisnpc.selectedArchetype.techniques;
		makeTechDropdowns()
		
	} if (thisnpc.selectedType == "Servants and Peasants"){

		var name = nameMaker();
		document.getElementById("npcnameinput").value = name
		thisnpc.name = name;

			thisnpc.template = thisnpc.selectedTemplate.title
			thisnpc.archetype= thisnpc.selectedArchetype.title
			thisnpc.type= thisnpc.selectedArchetype.type
			thisnpc.equiptype= thisnpc.selectedArchetype.equiptype
			thisnpc.Air= thisnpc.selectedArchetype.ring.Air
			thisnpc.Earth= thisnpc.selectedArchetype.ring.Earth
			thisnpc.Fire= thisnpc.selectedArchetype.ring.Fire
			thisnpc.Water= thisnpc.selectedArchetype.ring.Water
			thisnpc.Void= thisnpc.selectedArchetype.ring.Void
			thisnpc.max= thisnpc.selectedArchetype.max
			thisnpc.endurance= thisnpc.selectedArchetype.endurance
			thisnpc.composure= thisnpc.selectedArchetype.composure
			thisnpc.focus= thisnpc.selectedArchetype.focus
			thisnpc.vigilance= thisnpc.selectedArchetype.vigilance
			thisnpc.honor= thisnpc.selectedArchetype.honor
			thisnpc.glory= thisnpc.selectedArchetype.glory
			thisnpc.status= thisnpc.selectedArchetype.status

		thisnpc.demeanorArray = [];
		addToArray(thisnpc.demeanorArray,thisnpc.selectedArchetype.demeanor)
		addToArray(thisnpc.demeanorArray,thisnpc.selectedTemplate.demeanor)
		thisnpc.demeanorArray = removeDuplicates(thisnpc.demeanorArray);
		fillSelectDropdown("npcdemeanor",thisnpc.demeanorArray)
		getRandomSelect("npcdemeanor")	
		setDemeanor()

		thisnpc.advArray = []
		addToArray(thisnpc.advArray,thisnpc.selectedArchetype.advantages)
		addToArray(thisnpc.advArray,thisnpc.selectedTemplate.advantages)
		thisnpc.advArray = removeDuplicates(thisnpc.advArray);
		fillSelectDropdown("npcadv0",thisnpc.advArray)
		getRandomSelect("npcadv0")

		thisnpc.disadvArray = []
		addToArray(thisnpc.disadvArray,thisnpc.selectedArchetype.disadvantages)
		addToArray(thisnpc.disadvArray,thisnpc.selectedTemplate.disadvantages)
		thisnpc.disadvArray = removeDuplicates(thisnpc.disadvArray);
		fillSelectDropdown("npcdisadv0",thisnpc.disadvArray)
		getRandomSelect("npcdisadv0")

		thisnpc.selectedArchetype.extra();
		thisnpc.Air = thisnpc.selectedArchetype.ring.Air
		thisnpc.Earth = thisnpc.selectedArchetype.ring.Earth
		thisnpc.Fire = thisnpc.selectedArchetype.ring.Fire
		thisnpc.Water = thisnpc.selectedArchetype.ring.Water
		thisnpc.Void = thisnpc.selectedArchetype.ring.Void

		var ring = thisnpc.selectedTemplate.peasantring

		thisnpc[ring] ++

		thisnpc.artisanskill = thisnpc.selectedTemplate.artisanskill + thisnpc.selectedArchetype.skills.artisanskill
		thisnpc.martialskill = thisnpc.selectedTemplate.martialskill + thisnpc.selectedArchetype.skills.martialskill
		thisnpc.socialskill = thisnpc.selectedTemplate.socialskill + thisnpc.selectedArchetype.skills.socialskill
		thisnpc.scholarskill = thisnpc.selectedTemplate.scholarskill + thisnpc.selectedArchetype.skills.scholarskill
		thisnpc.tradeskill = thisnpc.selectedTemplate.tradeskill + thisnpc.selectedArchetype.skills.tradeskill

		thisnpc.weaponArray = []
		addToArray(thisnpc.weaponArray,thisnpc.selectedArchetype.weapon)
		thisnpc.weaponArray = removeDuplicates(thisnpc.weaponArray);
		fillSelectDropdown("npcweapon0",thisnpc.weaponArray)
		getRandomSelect("npcweapon0")	
		selectNPCWeapon("0")

		makeExtraWeaponButton()

		thisnpc.armorArray = []
		addToArray(thisnpc.armorArray,thisnpc.selectedArchetype.armor)
		thisnpc.armorArray = removeDuplicates(thisnpc.armorArray);
		fillSelectDropdown("npcarmor0",thisnpc.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")

		thisnpc.abilityArray = []

		if (thisnpc.selectedArchetype.qualities !== null && thisnpc.selectedArchetype.qualities !== undefined){
			thisnpc.abilityArray.push(thisnpc.selectedArchetype.qualities)
		}

		addToArray(thisnpc.abilityArray,thisnpc.selectedArchetype.abilities)
		document.getElementById("npcabilities").innerHTML="";
		var html = ""
		for (i = 0 ; i < thisnpc.abilityArray.length; i++){
			html += thisnpc.abilityArray[i]+"<p>";
		}
		document.getElementById("npcabilities").innerHTML=html
		thisnpc.ability = document.getElementById("npcabilities").innerHTML;
		
		var npcrank = 1;
		var ranks = [1,2,3,4,5];

		thisnpc.techniques = []
		makeTechDropdowns()


	} else if (thisnpc.selectedType == "Animals" || thisnpc.selectedType == "Creatures" || thisnpc.selectedType == "Pregen" || thisnpc.selectedType == "Oni Summoner"){
			thisnpc.name = thisnpc.selectedArchetype.fullname
			document.getElementById("npcnameinput").value = thisnpc.name

			thisnpc.template = thisnpc.selectedArchetype.type
			thisnpc.archetype= thisnpc.selectedArchetype.title
			thisnpc.type= thisnpc.selectedArchetype.type
			thisnpc.equiptype= thisnpc.selectedArchetype.equiptype
			thisnpc.Air= thisnpc.selectedArchetype.ring.Air
			thisnpc.Earth= thisnpc.selectedArchetype.ring.Earth
			thisnpc.Fire= thisnpc.selectedArchetype.ring.Fire
			thisnpc.Water= thisnpc.selectedArchetype.ring.Water
			thisnpc.Void= thisnpc.selectedArchetype.ring.Void
			thisnpc.max= thisnpc.selectedArchetype.max
			thisnpc.endurance= thisnpc.selectedArchetype.endurance
			thisnpc.composure= thisnpc.selectedArchetype.composure
			thisnpc.focus= thisnpc.selectedArchetype.focus
			thisnpc.vigilance= thisnpc.selectedArchetype.vigilance
			thisnpc.honor= thisnpc.selectedArchetype.honor
			thisnpc.glory= thisnpc.selectedArchetype.glory
			thisnpc.status= thisnpc.selectedArchetype.status
			thisnpc.artisanskill= thisnpc.selectedArchetype.skills.artisanskill
			thisnpc.martialskill= thisnpc.selectedArchetype.skills.martialskill	
			thisnpc.socialskill= thisnpc.selectedArchetype.skills.socialskill	
			thisnpc.scholarskill= thisnpc.selectedArchetype.skills.scholarskill
			thisnpc.tradeskill= thisnpc.selectedArchetype.skills.tradeskill
				
			thisnpc.demeanorArray = [];
			addToArray(thisnpc.demeanorArray,thisnpc.selectedArchetype.demeanor)
			fillSelectDropdown("npcdemeanor",thisnpc.demeanorArray)	
			setDemeanor()

		thisnpc.advArray = []
		addToArray(thisnpc.advArray,thisnpc.selectedArchetype.advantages)

		document.getElementById("npcadvright").innerHTML = ""
		for (var i = 0; i < thisnpc.advArray.length && i < 2; i++){
			newSelect("npcadvright","npcadv"+i,"inline w600","")
			fillSelectDropdown("npcadv"+i,thisnpc.advArray)
			setSelectedIndex("npcadv"+i,i)
		}		 //loads up up to 2 advs per creature

		thisnpc.disadvArray = []
		addToArray(thisnpc.disadvArray,thisnpc.selectedArchetype.disadvantages)

		document.getElementById("npcdisadvright").innerHTML = ""
		for (var i = 0; i < thisnpc.disadvArray.length && i < 2; i++){
			newSelect("npcdisadvright","npcdisadv"+i,"mb10 inline w600","")
			fillSelectDropdown("npcdisadv"+i,thisnpc.disadvArray)
			setSelectedIndex("npcdisadv"+i,i)
		}		 //loads up up to 2 disadvs per creature

		thisnpc.weaponArray = []
		addToArray(thisnpc.weaponArray,thisnpc.selectedArchetype.weapon)

		document.getElementById("npcweapons").innerHTML = ""
		for (var i = 0; i < thisnpc.selectedArchetype.weapon.length && i < 2; i++){
			newDiv("npcweaponwrap"+i,"npcweapons","block mb5 npcbuilderright")
			newSelect("npcweaponwrap"+i,"npcweapon"+i,"inline","selectNPCWeapon("+i+")")
			newDiv("npcweapon"+i+"stats","npcweaponwrap"+i,"inline ml10")
			fillSelectDropdown("npcweapon"+i,thisnpc.weaponArray)
			document.getElementById("npcweapon"+i).options[i].selected = true;
			selectNPCWeapon(i)
		} //loads up up to 2 weapons per creature

		thisnpc.armorArray = []
		addToArray(thisnpc.armorArray,thisnpc.selectedArchetype.armor)
		fillSelectDropdown("npcarmor0",thisnpc.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")

		thisnpc.abilityArray = []

		if (thisnpc.selectedArchetype.qualities !== null && thisnpc.selectedArchetype.qualities !== undefined){
			thisnpc.abilityArray.push(thisnpc.selectedArchetype.qualities)
		}

		addToArray(thisnpc.abilityArray,thisnpc.selectedArchetype.abilities)
		document.getElementById("npcabilities").innerHTML="";
		html = ""
		for (i = 0 ; i < thisnpc.abilityArray.length; i++){
			html += thisnpc.abilityArray[i]+"<p>";
		}
		document.getElementById("npcabilities").innerHTML=html
		thisnpc.ability = document.getElementById("npcabilities").innerHTML;
	} 

			document.getElementById("npcinfoarchetype").innerHTML = thisnpc.selectedArchetype.fullname;
			
			thisnpc.conflictcombat= thisnpc.selectedArchetype.conflictcombat
			updateSpans("conflictcombat");
			
			thisnpc.conflictintrigue= thisnpc.selectedArchetype.conflictintrigue
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

			updateSpans("artisanskill");
			updateSpans("martialskill");
			updateSpans("socialskill");
			updateSpans("scholarskill");
			updateSpans("tradeskill");

			updateSpans("honor");
			updateSpans("glory");
			updateSpans("status");

		show("npcsave")
		show("npcreroll")
}


function setRokuganiStats(){

	thisnpc.name = document.getElementById("npcnameinput").value
	thisnpc.archetype = thisnpc.selectedArchetype.title;
	thisnpc.type = document.getElementById("type").value

	thisnpc.clan = thisnpc.selectedSchool.clan
	thisnpc.family = thisnpc.selectedFamily.name
	thisnpc.school = thisnpc.selectedSchool.name

	thisnpc.equiptype = thisnpc.selectedArchetype.equiptype;

	setRokuganiRings()

	thisnpc.endurance = (thisnpc.Earth + thisnpc.Fire)*2
	thisnpc.composure = (thisnpc.Earth + thisnpc.Water)*2
	thisnpc.focus = (thisnpc.Air + thisnpc.Fire);
	thisnpc.vigilance = Math.ceil((thisnpc.Air + thisnpc.Water)/2);

		thisnpc.honor = thisnpc.selectedSchool.honor;

	if (document.getElementById("type").value == "Clan Samurai"){
		thisnpc.glory = thisnpc.selectedFamily.glory;
		thisnpc.status = thisnpc.selectedClan.clanstatus;
	} else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
		thisnpc.glory = thisnpc.selectedClan.clanglory;
	}

	thisnpc.artisanskill = thisnpc.selectedArchetype.skills.artisanskill;
	thisnpc.martialskill = thisnpc.selectedArchetype.skills.martialskill;
	thisnpc.socialskill = thisnpc.selectedArchetype.skills.socialskill;
	thisnpc.scholarskill = thisnpc.selectedArchetype.skills.scholarskill;
	thisnpc.tradeskill = thisnpc.selectedArchetype.skills.tradeskill;

	thisnpc.demeanor = thisnpc.selectedArchetype.demeanor;

	thisnpc.weapon = thisnpc.selectedArchetype.weapon;
	thisnpc.armor = thisnpc.selectedArchetype.armor

	thisnpc.advantage = thisnpc.selectedArchetype.advantages;
	thisnpc.disadvantage = thisnpc.selectedArchetype.disadvantages;

	thisnpc.ability = thisnpc.selectedSchool.ability;

	thisnpc.techniques = thisnpc.selectedArchetype.techniques;

	if (thisnpc.selectedArchetype.qualities !== null && thisnpc.selectedArchetype.qualities !== undefined){
		thisnpc.qualities = thisnpc.selectedArchetype.qualities;
	}
}

function setRokuganiRings(){
	
	var rings = {Air:0, Earth:0, Fire:0, Water:0, Void:0};

//get base stats for the rank

	thisnpc.selectedArchetype = document.getElementById("archetype").value

	for (var i=0; i<archetypes.length; i++){
		if (archetypes[i].fullname == thisnpc.selectedArchetype){
			thisnpc.selectedArchetype = archetypes[i]
		}
	}

	if (thisnpc.selectedArchetype.ring.type !== "set"){
			thisnpc.selectedArchetype.extra();
		}

	var maxRing = thisnpc.selectedArchetype.max - 1;

	if (thisnpc.selectedFamily == undefined){
		thisnpc.selectedFamily = families[thisnpc.selectedSchool.family]
	}

		if (document.getElementById("npcclanselect").value == "Minor"){
			thisnpc.selectedClan.clanstatus = thisnpc.selectedFamily.clanstatus
			thisnpc.selectedClan.clanring = thisnpc.selectedFamily.clanring
			thisnpc.selectedClan.clanskill = thisnpc.selectedFamily.clanskill	
		} else if (document.getElementById("type").value == "Ronin, Riffraff and Gaijin"){
			for (each in roninregions){
				if (roninregions[each].name == thisnpc.selectedClan){
					thisnpc.selectedClan = roninregions[each]
				}
			} 
			if (clans.includes(document.getElementById("npcroninclanbgselect").value)){
				thisnpc.selectedClan = document.getElementById("npcroninclanbgselect").value
				thisnpc.selectedClan = families[thisnpc.selectedClan]
			} 			
		}
	

	var clanRing = thisnpc.selectedClan.clanring
	clanRing = Object.keys(clanRing) 
	clanRing = clanRing[0]

	rings[clanRing] ++;

	array = ["Air", "Earth", "Fire", "Water", "Void"]

	if (thisnpc.selectedSchool.ring1 == "Any"){
		thisnpc.selectedSchool.ring1 = getRandom(array)

		for (var m=array.length-1; m >= 0; m--){
			if (array[m] == thisnpc.selectedSchool.ring1){
				array.splice(m)
			
			}
		}
	}
	if (thisnpc.selectedSchool.ring2 == "Any"){
		thisnpc.selectedSchool.ring2 = getRandom(array)
	}
	var schoolRing1 = thisnpc.selectedSchool.ring1
	rings[schoolRing1] ++;
	var schoolRing2 = thisnpc.selectedSchool.ring2
	rings[schoolRing2] ++;

	x = getRndInteger(1,2);
	var familyRing = "ring"+ x

	familyRing = thisnpc.selectedFamily[familyRing]
	
	if (rings[familyRing] < maxRing){
		rings[familyRing] ++;
	} else {
		if (x == 1){
			familyRing = thisnpc.selectedFamily.ring2
		}
		if (x == 2){
			familyRing = thisnpc.selectedFamily.ring1
		}
		if (familyRing == "Any"){
			familyRing = getRandom(array)
		}
		rings[familyRing] ++;
	}

	startingRingsToMax(rings,maxRing)  //adds the extra +1 to a ring that won't push it over 3

	thisnpc.Air = rings.Air + thisnpc.selectedArchetype.ring.Air
	thisnpc.Earth = rings.Earth + thisnpc.selectedArchetype.ring.Earth
	thisnpc.Fire = rings.Fire + thisnpc.selectedArchetype.ring.Fire
	thisnpc.Water = rings.Water + thisnpc.selectedArchetype.ring.Water
	thisnpc.Void = rings.Void + thisnpc.selectedArchetype.ring.Void
}

function startingRingsToMax(rings,maxRing){

	var array = ["Air", "Earth", "Fire", "Water", "Void"]
	var raisedRing = getRandom(array)

	while (rings[raisedRing] >= maxRing){
			raisedRing = getRandom(array)
		}
		rings[raisedRing] ++;
}


function updateSpans(variable){
	document.getElementById("npc"+variable).innerHTML = thisnpc[variable]
}

function setRokuganiSkills(){

	thisnpc.artisanskill = thisnpc.selectedArchetype.skills.artisanskill + thisnpc.selectedTemplate.artisanskill + thisnpc.selectedSchool.schoolskills.Artisan;
	thisnpc.martialskill = thisnpc.selectedArchetype.skills.martialskill + thisnpc.selectedTemplate.martialskill + thisnpc.selectedSchool.schoolskills.Martial;
	thisnpc.socialskill = thisnpc.selectedArchetype.skills.socialskill + thisnpc.selectedTemplate.socialskill + thisnpc.selectedSchool.schoolskills.Social;
	thisnpc.scholarskill = thisnpc.selectedArchetype.skills.scholarskill + thisnpc.selectedTemplate.scholarskill + thisnpc.selectedSchool.schoolskills.Scholar;
	thisnpc.tradeskill = thisnpc.selectedArchetype.skills.tradeskill + thisnpc.selectedTemplate.tradeskill +  + thisnpc.selectedSchool.schoolskills.Trade;
}

function setDemeanor(){
	var selectedDemeanor = document.getElementById("npcdemeanor").value

	for (i = 0; demeanors.length > i; i++){
		if (selectedDemeanor == demeanors[i].demeanor){
			x = "Social TNs ("+demeanors[i].tns+"), Unmasking: "+demeanors[i].unmasking;
			divContents("npcdemeanornotes",x);
		} 
	}
}

function getWeaponStats(weapon){
		for(var i=0; i < tabledata[8].children.length; i++){
		if (tabledata[8].children[i].name == weapon){
			weapon = tabledata[8].children[i]

			weaponstats = 'Damage: '+weapon.damage+
				'<span class="ml10">Deadliness: </span>'+weapon.deadliness+
				'<span class="ml10">Range: </span>'+weapon.range+
				'<span class="ml10">Qualities: </span>'+weapon.qualities;
		}	
	} 

	for (var i=0; npcweapons.length > i; i++){
		if ( npcweapons[i].name == weapon){
			weapon = npcweapons[i];

			weaponstats = 'Damage: '+weapon.damage+
				'<span class="ml10">Deadliness: </span>'+weapon.deadliness+
				'<span class="ml10">Range: </span>'+weapon.range+
				'<span class="ml10">Qualities: </span>'+weapon.qualities;
		}
	}

	return weaponstats;
}

function getArmorStats(armor){
		for(var i=0; i < tabledata[9].children.length; i++){
		if (tabledata[9].children[i].armor == armor){
			armor = tabledata[9].children[i]

			armorstats = 'Physical Res: '+armor.phys+
				'<span class="ml10">Supernatural Res: </span>'+armor.sup+
				'<span class="ml10">Qualities: </span>'+armor.qualities;
		}
	} 

	for (var i=0; npcarmor.length > i; i++){
		if ( npcarmor[i].armor == armor){
			armor = npcarmor[i];

			armorstats = 'Physical Res: '+armor.phys+
				'<span class="ml10">Supernatural Res: </span>'+armor.sup+
				'<span class="ml10">Qualities: </span>'+armor.qualities;
		}
	}

	return armorstats
}

function selectNPCWeapon(num){
	var selectedWeapon = document.getElementById("npcweapon"+num).value;

	if (document.getElementById("npcweapon"+num+"stats") == null){
		newDiv("npcweapon"+num+"nstats","npcequip","inline ml10");
	} else { document.getElementById("npcweapon"+num+"stats").innerHTML = ""; }

	var weapstats = getWeaponStats(selectedWeapon)

	divContents("npcweapon"+num+"stats",weapstats);
}

function selectNPCArmor(num){
	var selectedArmor = document.getElementById("npcarmor"+num).value;

	if (document.getElementById("npcarmor"+num+"stats") == null){
		newDiv("npcarmor"+num+"stats","npcequiparmor","inline ml10");
	} else { document.getElementById("npcarmor"+num+"stats").innerHTML = ""; }

	var armorstats = getArmorStats(selectedArmor)

	divContents("npcarmor"+num+"stats",armorstats);
}


function makeTechDropdowns(){
	document.getElementById("npctechniquecontainer").innerHTML = "";

	if (thisnpc.selectedTemplate.extratechs>0){
		var x = "Select up to "+thisnpc.selectedTemplate.extratechs+" ";

			for (var i=0; thisnpc.selectedTemplate.techtypes.length > i; i++){
			
				if (thisnpc.selectedTemplate.techtypes.length == i+2){
					x += thisnpc.selectedTemplate.techtypes[i]+" or ";
				}
				else if (thisnpc.selectedTemplate.techtypes.length > i+1){
					x += thisnpc.selectedTemplate.techtypes[i]+", ";
				} 	
				else if (thisnpc.selectedTemplate.techtypes.length == i+1){
					x += thisnpc.selectedTemplate.techtypes[i]+".";
				}
			}
			if (document.getElementById("npctechniquecontainer").innerHTML == "None"){
					document.getElementById("npctechniquecontainer").innerHTML = "";
					document.getElementById("npctechniquecontainer").innerHTML = x;
		} else {
		document.getElementById("npctechniquecontainer").innerHTML += x
	}	}
		x = ' Rank: =< '
		document.getElementById("npctechniquecontainer").innerHTML += x;
		
		newSelect("npctechniquecontainer","npctechniquesearchrank","ml10 mb5","setTechs()")
		ranks = [1,2,3,4,5]

		fillSelectDropdown("npctechniquesearchrank",ranks)

		var rank = thisnpc.selectedArchetype.rank
		selectObj = document.getElementById("npctechniquesearchrank")
		setSelectedText(selectObj, rank)

		setTechs();
	}

function setTechs(){
		if (document.getElementById("npctechselector") !== null){
				document.getElementById("npctechselector").innerHTML="";
			} else {
				newDiv("npctechselector","npctechniquecontainer")
			}

		var techobjs = [];
		var techlist = [];
		var techdroplist = [];

		if (document.getElementById("type").value == "Clan Samurai" ||document.getElementById("type").value == "Ronin, Riffraff and Gaijin" || document.getElementById("type").value =="Servants and Peasants"){
			for (var i=0; thisnpc.selectedTemplate.techtypes.length > i; i++){
				for (var j=0; j < techniquelist.length; j++){
					if (techniquelist[j].type == thisnpc.selectedTemplate.techtypes[i]){
						techobjs.push (techniquelist[j]);

					}
				}
			}
		} 

		var searchRank = document.getElementById("npctechniquesearchrank").value;

		if (searchRank !== "any"){

			searchRank = parseInt(document.getElementById("npctechniquesearchrank").value)
			
			var techobjs = techobjs.filter(function(tech)	{

				var rank = parseInt(tech.rank);

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
		for (i = 0; thisnpc.selectedTemplate.extratechs > i; i++){

			var npctechselecti = "npctechselect"+i

			newDiv("npctechwrapper"+i,"npctechselector")

			newSelect("npctechwrapper"+i,'npctechselect'+i,"mb5","")

	 		newDiv("npctechselectdetails"+i,"npctechwrapper"+i)

			var npctechselectdetailsi = document.getElementById("npctechselectdetails"+i)

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
			var abilitydiv = document.getElementById(displayDiv);
			var techselect = document.getElementById(dropId);
		} else {
			var abilitydiv = displayDiv;
			var techselect = dropId;
		}
			if  (techselect.selectedIndex !== -1){

				for (j=0; j< techniquelist.length; j++){
				if (techselect.options[techselect.selectedIndex].value == techniquelist[j].title){
					var effect = techniquelist[j].effect

					while (effect.includes("<br><br>")){
						effect = effect.replace("<br><br>","<br>");
					}
					abilitydiv.innerHTML = effect
				}
			}}
		}

function makeExtraWeaponButton(){
	newButton("npcequip","npcweaponwrap0","inline","addExtraWeapon()","+")
}

function startingTechSelects(){

			document.getElementById("npcstartingschooltechnique").innerHTML = "";
			document.getElementById("npcschooltechchoice").innerHTML = "";

			var startingtechs = thisnpc.selectedSchool.startingtechs

			for (var m=0;m<startingtechs.length;m++){
				newDiv("startingtech"+m,"npcstartingschooltechnique")

				for (var o = 0; o < techniquelist.length; o++){
					if (techniquelist[o].title == startingtechs[m]){
						var effect = techniquelist[o].effect

				var techeffect = "<u>"+techniquelist[o].title + " [" + techniquelist[o].type + " Rank "+ techniquelist[o].rank + "] (" + techniquelist[o].ring + ") (" + techniquelist[o].reference + ") </u><br>" + effect + "<br><br>"

					divContents("startingtech"+m,techeffect)
					}
				}
			}
			if (thisnpc.selectedSchool.chooseoptions[0] !== "" || thisnpc.selectedSchool.chooseoptions[0] !== "0"){
				
				for (var k =0; k< thisnpc.selectedSchool.chooseoptions.length; k++){ 
				for (var x =0; x< thisnpc.selectedSchool.chooseoptions[k]; x++){	
					if (document.getElementById("npcschooltechwrap"+k+x) == null){
					newDiv("npcschooltechwrap"+k+x,"npcschooltechchoice","block pb5")
					newSelect("npcschooltechwrap"+k+x,"npcschooltechdrop"+k+x,"block  ","showSelectedTechnique('npcschooltechdrop"+k+x+"','npcschooltechdetails"+k+x+"')")
					newDiv("npcschooltechdetails"+k+x,"npcschooltechwrap"+k+x,"block")

					var techobjs = [];
					addToArray(techobjs,thisnpc.selectedSchool.startingtechoptions[k])
					var techobjs = removeDuplicates(techobjs)

					var techlist = [];
					var techdroplist = [];

					for (var i = 0; i < techobjs.length; i++){
						for (var j = 0; j < techniquelist.length; j++){
							if (techobjs[i] == techniquelist[j].title){
									techlist.push (techniquelist[j].title);
									techdroplist.push (techniquelist[j].title+" ["+techniquelist[j].type+" Rank "+techniquelist[j].rank+"] ("+techniquelist[j].ring+") ("+techniquelist[j].reference+")")
							}
						}
					}
					addValuesToSelect("npcschooltechdrop"+k+x,techdroplist,techlist)
					getRandomSelect("npcschooltechdrop"+k+x)

					for (var g = 0; g+1 < document.getElementById("npcschooltechchoice").children.length ; g++){
						var thisdrop = document.getElementById("npcschooltechdrop"+k+x).value;
						var otherdrop = document.getElementById("npcschooltechchoice").children[g].children[0].value;

						while (thisdrop == otherdrop){
							getRandomSelect("npcschooltechdrop"+k+x)
							thisdrop = document.getElementById("npcschooltechdrop"+k+x).value;
						}
					}

					showSelectedTechnique("npcschooltechdrop"+k+x,"npcschooltechdetails"+k+x)
					}
				}	}
			}
			};

var npc = {};

function saveNPC (){

		if (document.getElementById("schooltechdrop") == null)
			{var schooltechdrop = "None"} 
		else {var schooltechdrop = document.getElementById('schooltechdrop').value;
		if (schooltechdrop == "Select School Technique")
			{schooltechdrop = "None"};
		}
		var name = document.getElementById('npcnameinput').value;

		var nospaces = noSpaces(name)

		npc[nospaces] = new Object;

		npc[nospaces].fullname = document.getElementById('npcnameinput').value;
		npc[nospaces].title = nospaces;
		npc[nospaces].archetype = document.getElementById('archetype').options[document.getElementById('archetype').selectedIndex].text;
		npc[nospaces].type = thisnpc.type;

		if (thisnpc.selectedType == "Clan Samurai" || thisnpc.selectedType == "Ronin, Riffraff and Gaijin" || thisnpc.selectedType == "Servants and Peasants" ){
			npc[nospaces].template = document.getElementById('template').options[document.getElementById('template').selectedIndex].text;
		} else {npc[nospaces].template = thisnpc.selectedArchetype.type}

		npc[nospaces].equiptype = thisnpc.equiptype;

		if (thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
			npc[nospaces].ronintype = document.getElementById('npcronintypeselect').value;
		}

		if (thisnpc.selectedType == "Clan Samurai" ||thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
			npc[nospaces].clan = document.getElementById('npcclanselect').options[document.getElementById('npcclanselect').selectedIndex].text;
		} else {npc[nospaces].clan = "None"}

		if (thisnpc.selectedType == "Clan Samurai" || thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
			npc[nospaces].family = document.getElementById('npcfamilyselect').options[document.getElementById('npcfamilyselect').selectedIndex].text
		} else {npc[nospaces].family = "None"}

		if (thisnpc.selectedType == "Clan Samurai" || thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
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
		npc[nospaces].qualities = thisnpc.qualities;
		npc[nospaces].weapon = []

		var children =  document.getElementById("npcweapons").childNodes;
		for (var i=0; i< children.length; i++){
			var wrapId = "npcweaponwrap"+i;

			if (document.getElementById("wrapId") !== null || document.getElementById("wrapId") !== undefined){
				var selectId = document.getElementById("npcweapon"+i)
				if (selectId !== null){
				npc[nospaces].weapon.push(selectId.value)
			}
			}
		}
		
		npc[nospaces].armor = document.getElementById('npcarmor0').options[document.getElementById('npcarmor0').selectedIndex].text;

		
		for(var i=0; i < tabledata[9].children.length; i++){
			if (tabledata[9].children[i].armor == npc[nospaces].armor){
				var selectedArmor = tabledata[9].children[i]

				npc[nospaces].armorphys = selectedArmor.phys
				npc[nospaces].armorsup = selectedArmor.sup
		} }

		for (var i=0; npcarmor.length > i; i++){
			if ( npcarmor[i].armor == npc[nospaces].armor){
				var selectedArmor = npcarmor[i];
			
				npc[nospaces].armorphys = selectedArmor.phys
				npc[nospaces].armorsup = selectedArmor.sup
		} }

		npc[nospaces].advantage = [];
		for (var s = 0; s < document.getElementById('npcadvright').children.length; s ++){
			npc[nospaces].advantage.push(document.getElementById('npcadv'+s).value);
		}

		npc[nospaces].disadvantage = [];
		for (var s = 0; s < document.getElementById('npcdisadvright').children.length; s ++){
			npc[nospaces].disadvantage.push(document.getElementById('npcdisadv'+s).value);
		}
		

		npc[nospaces].ability = document.getElementById("npcabilities").innerHTML;

		npc[nospaces].techs = [];

		if (thisnpc.selectedType == "Clan Samurai" || thisnpc.selectedType == "Ronin, Riffraff and Gaijin"){
		for (var p =0; p< thisnpc.selectedSchool.startingtechs.length; p++){
			npc[nospaces].techs.push(thisnpc.selectedSchool.startingtechs[p])
		}

		var div = document.getElementById("npcschooltechchoice")

		for (var q=0; q< div.children.length; q++){

			var subdiv = div.children[q]

			for (r = 0; r< subdiv.children.length; r++){
				if (subdiv.children[r].nodeName == "SELECT"){
					var tech = subdiv.children[r].value;
					npc[nospaces].techs.push(tech)
				}
			}
		}

		if (document.getElementById('npctechselector') !== null){
			var childDivs = document.getElementById('npctechselector').getElementsByTagName('select');

			for( i=0; i< childDivs.length; i++ )	{
				 var childDiv = childDivs[i];
				 var x = childDiv.options[childDiv.selectedIndex].value;
				 if (x !== "Select Techniques"){
				 npc[nospaces].techs.push(x)
		}}
		}}

		npc[nospaces].notes = document.getElementById('npcnotesinput').value

		savenpc=npc;
		localStorage.setItem("savenpc",JSON.stringify(savenpc));

		makeNpcLibrary();
		buildNpcMenu();
		
		highlight('npcbutton','npccontainer')
		hide("npcstatwrap");

		if (document.getElementById("library").classList.contains("containerhidden")){
				highlight("npclibrarybutton","library");
		}

		showNpc(nospaces);

		divContents("npcstatwrap","")

		buildNpcStatsDiv();

		thisnpc.selectedArchetype = {};

		thisnpc = {};

		resetNPCBuilder();
		selectType();
	}

function showNpc(thisnpc){

	var npcstat = "npc-"+thisnpc;
	var npcmenu = "div"+thisnpc;

	var thatNpc = document.getElementById(npcstat);

	if (thatNpc !== null){

	var children = document.getElementById("statblock").childNodes;

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

function npcsave() {
	savenpc=npc;
	localStorage.setItem("savenpc",JSON.stringify(savenpc));
}

var savenpc = {};


function deleteSave(){
	localStorage.removeItem("savenpc")
}


function deletenpc (name){
	var menudiv=document.getElementById('menu');
	var item = document.getElementById('div'+name);
	menudiv.removeChild(item);
	delete npc[name];
	npcsave();

	var statdiv=document.getElementById('statblock');
	item = document.getElementById('npc-'+name)
	statdiv.removeChild(item);

	document.getElementById("editcharacter").innerHTML = "";
	}

function npcskirmish(nom){
	var dropcontent = document.getElementById("stat"+nom).innerHTML;

	var nom = noSpaces(npc[nom].fullname);
 	
	skirmishcharacters[nom] = new Object;
	skirmishcharacters[nom].name = npc[nom].fullname;

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

	if (document.getElementById("skirmishcontainer").classList.contains("containerhidden")){
			highlight("skirmishbutton","skirmishcontainer");
	}
}

function makeNpcEdit(nom){
	document.getElementById("editcharacter").classList.remove("hide")
	document.getElementById("statblock").classList.add("hide")

	thisEditNpc = npc[nom]

	var datalabels = ["PC?:","Name:","Archeytpe:","Template:","Clan:","Family:","School:","<span class='l5r air'>a</span>","<span class='l5r earth'>e</span>","<span class='l5r fire'>f</span>","<span class='l5r water'>w</span>","<span class='l5r void'>v</span>","Endurance:","Composure:","Focus:","Vigilance:","Honor:","Glory:","Status","Demeanor:","Advantage:","Disadvantage:","Artisan:","Social:","Martial:","Scholar:","Trade:","Weapon:","Armor:","Ability:","Techniques:","Notes:"];

	newButton("editcharacter","editsavebutton","ml10","saveEditNpc('"+nom+"')","Save Edit")

	for (var i = 0; i < datalabels.length; i++){

		newDiv("edit"+i,"editcharacter","inlineblock font09em ml10 alignmiddle")
		divContents("edit"+i,"<span class='alignmiddle'>"+datalabels[i]+"</span>")

		if (i == 0){
			divContents("edit"+i,'Player: <form class="inline alignmiddle"><input  type="checkbox" id="editinput0", name="npcplayer" value="npcplayer"></form>')
		} else if (i == 19 || i == 27 || i == 28 || i == 30){
			newSelect("edit"+i,"editselect"+i,"mb10 ml10 inlineblock alignmiddle","");
			newDiv("editselectinfo"+i,"edit"+i,"inlineblock ml10 font15em")
		} else if ((i > 6 && i < 19) || (i > 21 && i < 27)){
			newNumberInput("edit"+i,"editinputform"+i,"inline w200","","editinput"+i,"block w200 ml10")
		} else {
			newTextInput("edit"+i,"editinputform"+i,"inline w200","","editinput"+i,"block w200 ml10")
		}

		//makes field with line break before it
	if (i == 1 || i == 7 || i == 12 || i == 16 || (i > 18 && i < 23) || (i > 26 && i < 32) ){
			var div = document.createElement('div')
			div.id = "newlinediv"
			div.classList.add("block")
			if (i == 7){
				div.classList.add("mt10")
			}			
			var breakdiv = document.getElementById("edit"+i)
			breakdiv.parentNode.insertBefore(div, breakdiv)
		}

		//makes big fields
	if (i == 29 || i == 31 ){
				var elem = document.getElementById("editinput"+i); 
				elem.parentNode.removeChild(elem);
				newTextArea("edit"+i,"editinput"+i,"block ml10 w640 mb10")

				if (i == 29){
					document.getElementById("editinput"+i).classList.add("h100")
				}
		}
		//makes long fields for adv & disadv
	if (i == 20 || i == 21){
			document.getElementById("editinput"+i).classList.remove("w200")
			document.getElementById("editinputform"+i).classList.remove("w200")
			document.getElementById("editinput"+i).classList.add("w640")
			document.getElementById("editinput"+i).classList.add("mb10")
		}

		//makes little fields
	if ((i > 6 && i < 19) || (i > 21 && i < 27)){
			document.getElementById("editinput"+i).classList.remove("w200")
			document.getElementById("editinputform"+i).classList.remove("w200")
			document.getElementById("editinput"+i).classList.add("w35")
			document.getElementById("edit"+i).classList.add("w110")
			document.getElementById("edit"+i).classList.add("textright")
			document.getElementById("editinputform"+i).classList.remove("block")
			document.getElementById("editinputform"+i).classList.add("inlineblock")
			document.getElementById("editinputform"+i).classList.add("floatright")
		}
	}

	fillNpcEdit(nom)
}

function selectNPCDemeanor(){
	var chosenDemeanor = document.getElementById("editselect19").value;

	for (var elem in demeanors){
		if (demeanors[elem].demeanor == chosenDemeanor){
			document.getElementById("editselectinfo19").innerHTML = demeanors[elem].tns+" Unmasking: " +demeanors[elem].unmasking
		}
	}
}

function fillNpcEdit(nom){

	nom = npc[nom]

	for (var i = 0; i < 32; i++){

		if (i == 19){  //fills the demeanor select

			var demeanorlist = [];

			for (var j = 0; j < demeanors.length; j++){
				demeanorlist.push(demeanors[j].demeanor)
			}

			fillSelectDropdown("editselect19",demeanorlist)

			document.getElementById("editselect19").setAttribute("onchange","selectNPCDemeanor();");

			setSelectedText(document.getElementById("editselect19"),nom.social.demeanor)

			selectNPCDemeanor()
		} 

		else if (i == 27){ // fills the weapon select

			document.getElementById("edit27").innerHTML = "Weapons:";
			document.getElementById("edit27").classList.add("w650")

			newButton("edit27","addEditWeapon","inlineblock mb5 ml10","addEditWeapon('"+nom.title+"')","+")

			newDiv("editweaps","edit"+i,"w650")

			for (var m = 0; m < nom.weapon.length; m++){
						editNewWeapon(nom, m)

						setSelectedValue(document.getElementById("editselectweapon"+m), nom.weapon[m])

						selectEditWeapon(m)}
		}

		else if (i == 28){ // fills the armor select
			document.getElementById("edit28").innerHTML = "Armor:<br>";

			m = 0;

			newSelect("edit"+i,"editselectarmor"+m,"mb10 ml10 inlineblock alignmiddle","selectEditArmor("+m+")");
			newDiv("editselectarmorinfo"+m,"edit"+i,"inlineblock ml10 font15em")

							var armortext = [];
							var armorvalue = [];

							if (nom.equiptype == "equipped"){
								for (var each in tabledata){
									if (tabledata[each].title == "Armors"){
										for (var j = 1; j < tabledata[each].children.length; j++){
											armorvalue.push(tabledata[each].children[j].armor)
											armortext.push(tabledata[each].children[j].armor+" ["+tabledata[each].children[j].phys+" / "+tabledata[each].children[j].sup+"]")
										}
									}
								}
								for (var j = 0; j < npcarmor[j].length; j++){
									if (npcarmor[j].type == "equipped"){
										armorvalue.push(npcarmor[j].armor)
										armortext.push(npcarmor[j].armor+" ["+npcarmor[j].phys+" / "+npcarmor[j].sup+"]")
									}
								}

							} else if (nom.equiptype == "natural"){
								for (var j = 0; j < npcarmor.length; j++){
									if (npcarmor[j].type == "natural"){
										armorvalue.push(npcarmor[j].armor)
										armortext.push(npcarmor[j].armor+" ["+npcarmor[j].phys+" / "+npcarmor[j].sup+"]")
									}
								}				
							}

						fillSelectDropdownValues("editselectarmor"+m,armorvalue,armortext)
						setSelectedValue(document.getElementById("editselectarmor"+m), nom.armor)

						selectEditArmor(m)
		}
		else if (i == 30){ // fills the tech select
			document.getElementById("edit30").innerHTML = "Techniques:";

			newButton("edit30","addEditTech","inlineblock mb5 ml10","addEditTech('"+nom.title+"')","+")

			newDiv("edittechs","edit"+i)

			for (var m = 0; m < nom.techs.length; m++){
				editNewTech(nom, m)

				setSelectedValue(document.getElementById("edittechselect"+m), nom.techs[m])
				showSelectedTechnique('edittechselect'+m,'edittechinfo'+m)
				
			}
		}

		else if (i == 20){ //fills the adv input
			document.getElementById("edit20").innerHTML = "Advantages:";
			newButton("edit20","addEditAdv","inlineblock mb5 ml10","addEditAdv('"+nom.title+"')","+")

			newDiv("editadvs","edit"+i)

			for (var m = 0; m < nom.advantage.length; m++){
				newTextInput("editadvs","editadv"+m,"inlineblock","","editadvinput"+m,"ml10 w610")
				document.getElementById("editadvinput"+m).value = nom.advantage[m];
				newButton("editadv"+m,"deleteeditadv"+m,"inlineblock ml10","deleteEditElement('editadv','"+m+"')","-")
			}
		}
		else if (i == 21){ //fills the disadv input
			document.getElementById("edit21").innerHTML = "Disadvantages:";
			newButton("edit21","addEditDisadv","inlineblock mb5 ml10","addEditDisadv('"+nom.title+"')","+")

			newDiv("editdisadvs","edit"+i)

			for (var m = 0; m < nom.disadvantage.length; m++){
				newTextInput("editdisadvs","editdisadv"+m,"","","editdisadvinput"+m,"ml10 w610")
				document.getElementById("editdisadvinput"+m).value = nom.disadvantage[m];
				newButton("editdisadv"+m,"deleteeditdisadv"+m,"inlineblock ml10","deleteEditElement('editdisadv','"+m+"')","-")
			}
		}

		else {
			var editvalues = ["x",nom.fullname, nom.archetype, nom.template, nom.clan, nom.family, nom.school,  nom.rings.air, nom.rings.earth, nom.rings.fire, nom.rings.water, nom.rings.void, nom.derived.endurance, nom.derived.composure, nom.derived.focus, nom.derived.vigilance, nom.social.honor, nom.social.glory, nom.social.status, "x","x","x",nom.skills.artisan, nom.skills.social, nom.skills.martial, nom.skills.scholar, nom.skills.trade,"x","x",nom.ability,"",nom.notes]

			if (editvalues[i] !== "x"){
				document.getElementById("editinput"+i).value = editvalues[i]
			}
		}
	}
}

function selectEditWeapon(num){
	var x = document.getElementById("editselectweapon"+num)

	var weap = document.getElementById("editselectweapon"+num).value

	var weaponinfo = getWeaponStats(weap);

	divContents("editselectweaponinfo"+num,weaponinfo)
}

function selectEditArmor(num){
	var x = document.getElementById("editselectarmor"+num)

	var armor = document.getElementById("editselectarmor"+num).value

	var armorinfo = getArmorStats(armor);

	divContents("editselectarmorinfo"+num,armorinfo)
}

function addEditTech(nom){

	var m = "edittechs"

	m = document.getElementById(m).children.length

	nom = npc[nom]

	editNewTech(nom, m)			

}

function addEditWeapon(nom){
	
	var m = "editweaps"

	m = document.getElementById(m).children.length

	nom = npc[nom]

	editNewWeapon(nom, m)
}

function addEditAdv(nom){

	var m = "editadvs"

	m = document.getElementById(m).children.length

	newTextInput("editadvs","editadv"+m,"inlineblock","","editadvinput"+m,"ml10 w610")
	newButton("editadv"+m,"deleteeditadv"+m,"inlineblock ml10","deleteEditElement('editadv','"+m+"')","-")
}

function addEditDisadv(nom){

	var m = "editdisadvs"

	m = document.getElementById(m).children.length

	newTextInput("editdisadvs","editdisadv"+m,"inlineblock","","editdisadvinput"+m,"ml10 w610")
	newButton("editdisadv"+m,"deleteeditdisadv"+m,"inlineblock ml10","deleteEditElement('editdisadv','"+m+"')","-")
}

function deleteEditElement(id,m){
	removeElement(id+m)
}



function editNewWeapon(nom, m){
						newDiv("weapwrap"+m,"editweaps","w650");
						newButton("weapwrap"+m,"deleteeditweap"+m,"floatright inlineblock ml10","deleteEditElement('weapwrap','"+m+"')","-")
						newSelect("weapwrap"+m,"editselectweapon"+m,"mb10 ml10 inlineblock alignmiddle","selectEditWeapon("+m+")");
						newDiv("editselectweaponinfo"+m,"weapwrap"+m,"inlineblock ml10 font15em")
						newDiv("newlinediv"+m,"weapwrap"+m,"block")

							var weapontext = [];
							var weaponvalue = [];
			
							if (nom.equiptype == "equipped"){
								for (var each in tabledata){
									if (tabledata[each].title == "Weapons"){
										for (var j = 1; j < tabledata[each].children.length; j++){
											weaponvalue.push(tabledata[each].children[j].name)
											weapontext.push(tabledata[each].children[j].name+" ["+tabledata[each].children[j].damage+" / "+tabledata[each].children[j].deadliness+"]")
										}
									}
								}
								for (var j = 0; j < npcweapons.length; j++){
									if (npcweapons[j].type == "equipped"){
										weaponvalue.push(npcweapons[j].name)
										weapontext.push(npcweapons[j].name+" ["+npcweapons[j].damage+" / "+npcweapons[j].deadliness+"]")
									}
								}

							} else if (nom.equiptype == "natural"){
								for (var j = 0; j < npcweapons.length; j++){
									if (npcweapons[j].type == "natural"){
										weaponvalue.push(npcweapons[j].name)
										weapontext.push(npcweapons[j].name+" ["+npcweapons[j].damage+" / "+npcweapons[j].deadliness+"]")
									}
								}				
							}

						fillSelectDropdownValues("editselectweapon"+m,weaponvalue,weapontext)
}

function editNewTech(nom, m){
				newDiv("techwrap"+m,"edittechs","w650");

				newSelect("techwrap"+m,"edittechselect"+m,"ml10","showSelectedTechnique('edittechselect"+m+"','edittechinfo"+m+"')");
				newButton("techwrap"+m,"deleteedittech"+m,"inlineblock floatright ml10","deleteEditElement('techwrap','"+m+"')","-")
				newDiv("edittechinfo"+m,"techwrap"+m,"ml10 mb10 font15em");

				var techniquestext = [];
				var techniquesvalues = [];
				var techniquetypes = [];
				
				for (every in techniquelist){
					techniquetypes.push(techniquelist[every].type)
				} 
				techniquetypes = removeDuplicates(techniquetypes)

				rings = ["Any","Air","Earth","Fire","Water","Void"];

				ranks = ["1","2","3","4","5"]

				for (var k = 0; k < techniquetypes.length; k ++){
					for (var n = 0; n < ranks.length; n ++){
						for (var o = 0; o < rings.length; o++){
					
							for (each in techniquelist){
										if (techniquelist[each].type == techniquetypes[k] && techniquelist[each].ring.includes(rings[o]) && techniquelist[each].rank == ranks[n]){
														techniquestext.push(techniquelist[each].title+" ("+techniquelist[each].ring+") ["+techniquelist[each].type+" Rank "+techniquelist[each].rank+"]")
														techniquesvalues.push(techniquelist[each].title)
										}
									}
								}
					}
				
		}

		fillSelectDropdownValues("edittechselect"+m,techniquesvalues,techniquestext)
}

function saveEditNpc(nom){

	delete npc[nom];

	var name = document.getElementById("editinput1").value;

	title = noSpaces(name)

	npc[title] = new Object;

	nom = npc[title]

	nom.fullname = name
	nom.title = title
	nom.archetype = document.getElementById("editinput2").value;
	nom.template = document.getElementById("editinput3").value
	nom.clan = document.getElementById("editinput4").value;
	nom.family = document.getElementById("editinput5").value
	nom.school = document.getElementById("editinput6").value

	if(document.getElementById("editinput0").checked == true){
 		nom.player=1;  //sets character as PC
 	} else {nom.player=0;}  //sets character as NPC

 	nom.rings = {}
	nom.rings.air = document.getElementById("editinput7").value
	nom.rings.earth = document.getElementById("editinput8").value
	nom.rings.fire = document.getElementById("editinput9").value
	nom.rings.water = document.getElementById("editinput10").value
	nom.rings.void = document.getElementById("editinput11").value
	nom.derived = {}
	nom.derived.endurance = document.getElementById("editinput12").value
	nom.derived.composure = document.getElementById("editinput13").value
	nom.derived.focus = document.getElementById("editinput14").value
	nom.derived.vigilance = document.getElementById("editinput15").value
	nom.social = {}
	nom.social.honor = document.getElementById("editinput16").value
	nom.social.glory = document.getElementById("editinput17").value
	nom.social.status = document.getElementById("editinput18").value
	nom.social.demeanor = document.getElementById('editselect19').value
	nom.skills = {}
	nom.skills.artisan = document.getElementById("editinput22").value
	nom.skills.social = document.getElementById("editinput23").value
	nom.skills.martial = document.getElementById("editinput24").value
	nom.skills.scholar = document.getElementById("editinput25").value
	nom.skills.trade = document.getElementById("editinput26").value

	nom.advantage = []
	children =  document.getElementById("editadvs").childNodes;
		for (i=0; i< children.length; i++){
			div =  document.getElementById("editadvinput"+i);
				nom.advantage.push(div.value)
			}

	nom.disadvantage = []
	children =  document.getElementById("editdisadvs").childNodes;
		for (i=0; i< children.length; i++){
			div = document.getElementById("editdisadvinput"+i);
				nom.disadvantage.push(div.value)
			}

	nom.notes = document.getElementById("editinput31").value 

	nom.type = thisEditNpc.type
	nom.equiptype = thisEditNpc.equiptype

	nom.weapon = []

	children =  document.getElementById("editweaps").childNodes;
		for (i=0; i< children.length; i++){
			wrapId = "editweaponwrap"+i;

			if (document.getElementById("wrapId") !== null || document.getElementById("wrapId") !== undefined){
				selectId = document.getElementById("editselectweapon"+i)
				if (selectId !== null){
				nom.weapon.push(selectId.value)
			}
			}
		}

	nom.armor = document.getElementById("editselectarmor0").value
		
		for(i=0; i < tabledata[9].children.length; i++){

			var x = tabledata[9].children[i].armor

			if (tabledata[9].children[i].armor == nom.armor){
				selectedArmor = tabledata[9].children[i]
			}	
		} 

		for (i=0; npcarmor.length > i; i++){
			if ( npcarmor[i].armor == nom.armor){
				selectedArmor = npcarmor[i];
			}
		}
				nom.armorphys = selectedArmor.phys
				nom.armorsup = selectedArmor.sup


	nom.ability = document.getElementById("editinput29").value

	nom.techs = [];

	var childDivs = document.getElementById("edittechs").children;

		for( i=0; i< childDivs.length; i++ ){
		 	var childDiv = childDivs[i];
		 	divname = 'edittechselect'+i;
		 	if (document.getElementById(divname) !== null){
		 	nom.techs.push(document.getElementById(divname).options[document.getElementById(divname).selectedIndex].value);
			}}
	nom.notes = document.getElementById("editinput31").value

	document.getElementById("editcharacter").innerHTML = "";
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

var mahos = [];

function oniMaker(){

	mahos = thisnpc.selectedmahos
	thisnpc.selectedmahos = [];

	if (mahos == undefined || mahos.length == 0){
		document.getElementById("npctechniquecontainer").innerHTML = "";
	}

	fillStats();

	armor = thisnpc.armorArray[0]

	for (var each in npcarmor){
		if (armor == npcarmor[each].armor){
			thisnpc.physres = npcarmor[each].phys
			Number(thisnpc.physres)
			thisnpc.supres = npcarmor[each].sup
			Number(thisnpc.supres)
			thisnpc.armorqualities = npcarmor[each].qualities

			html = "Physical Res: <span id='npcphysres'>"+thisnpc.physres+"</span> Supernatural Res: <span id='npcsupres'>"+thisnpc.supres+"</span>  Qualities: <span id='npcarmorqualities'>"+thisnpc.armorqualities+"</span>"

			document.getElementById("npcarmor0stats").innerHTML = html;
		}
	}

	var powers = thisnpc.selectedArchetype.powers

	thisnpc.onipowersarray = [];
	onipowersarray = thisnpc.onipowersarray;

	thisnpc.selectedpowers = [];

	for (var each in onipowers){
		onipowersarray.push(onipowers[each].name)
	}

	if (document.getElementById("archetype").value == "Lesser Oni; Savage Brute"){
		for (var i = onipowersarray.length-1; i >= 0; i--){
			if (onipowersarray[i] == "Captivating Voice" || onipowersarray[i] == "Human Mask"|| onipowersarray[i] == "Illusion Master" || onipowersarray[i] == "Scent of Weakness" ){
				onipowersarray.splice(i,1);
			}
		}
	}

	//create dropdowns for the powers

	newDiv("onipowers","npcabilities","npcright")

	for (var i = 0; i < powers; i++){
		newDiv("onipowerwrap"+i,"onipowers","npcright")
		newSelect("onipowerwrap"+i,"onipowerselect"+i,"","selectOniPower("+i+")")

		if (i == 0){
			fillSelectDropdownDefault("onipowerselect"+i,"Select Shadowlands Power",onipowersarray)
		}
		
		newDiv("onipowerinfo"+i,"onipowerwrap"+i,"npcright mb5")
	}

	if (document.getElementById("archetype").value == "Powerful Oni: Hellish Sorcerer"){
		setSelectedValue(document.getElementById("onipowerselect0"),"Tainted Sorcery")
		selectOniPower(0);
	}

}

function selectOniPower(k){

	var power = document.getElementById("onipowerselect"+k).value

	if (thisnpc.selectedpowers.includes(power)){
			for (var each in onipowers){
				if (onipowers[each].name == power){
							var rank2 = onipowers[each].rank2;
							divContents("onipowerinfo"+k,rank2)
							onipowers[each].effect2()
							document.getElementById("onipowerselect"+k).setAttribute("onchange","selectOniPower("+k+");remakeOni("+k+")")
				}
			}

	} else {
			for (var each in onipowers){
				if (onipowers[each].name == power){
							var rank1 = onipowers[each].rank1;
							divContents("onipowerinfo"+k,rank1)
							onipowers[each].effect()
							document.getElementById("onipowerselect"+k).setAttribute("onchange","selectOniPower("+k+");remakeOni("+k+")")
				}
			}}

		thisnpc.selectedpowers.push(document.getElementById("onipowerselect"+k).value)

		var powers = thisnpc.selectedArchetype.powers

		var i = k+1;

		if (i < powers){			
			fillSelectDropdownDefault("onipowerselect"+i,"Select Shadowlands Power",onipowersarray)
		}
	}	


function removeFromOniArray(powerName){

	for (var i = thisnpc.onipowersarray.length-1; i >= 0; i--){
		if (thisnpc.onipowersarray[i] == powerName){
			thisnpc.onipowersarray.splice(i,1)
		}
	}
}

function addToOniArray(powerName){
	thisnpc.onipowersarray.push(powerName)
}

function removeFromSelectedPowers(powerName){
	for (var i = thisnpc.selectedpowers.length -1 ;i >= 0; i--){
		if (thisnpc.selectedpowers[i] == powerName){
			thisnpc.selectedpowers.splice(i,1)
		}
	}	
}

function remakeOni(num){
	thisnpc.selectedpowers.push(document.getElementById("onipowerselect"+num).value);
	thisnpc.selectedpowers.splice(num,1)
	var powers = thisnpc.selectedpowers
	thisnpc.selectedpowers = []

	document.getElementById("npctechniquecontainer").innerHTML = "";

	var name = document.getElementById("npcnameinput").value
	oniMaker();
	document.getElementById("npcnameinput").value = name;

	for (var i = 0; i < powers.length-1; i++){
		setSelectedValue(document.getElementById("onipowerselect"+i),powers[i]);
		selectOniPower(i);
	}

	var mahos = thisnpc.selectedmahos
	thisnpc.selectedmahos = []	

	for (var i = 0; i < mahos.length; i++){
		setSelectedValue(document.getElementById("npctechselect"+i),mahos[i])
		addTechToNpc(i)
		showSelectedTechnique("npctechselect"+i,"npctechinfo"+i)
	}	
}

function addTechToNpc(i){
	tech = document.getElementById("npctechselect"+i).value
	thisnpc.selectedmahos.push(tech)
}