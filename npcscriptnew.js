function loadNPC(){

	var save = JSON.parse(localStorage.getItem("savenpc"));

	if (save !== undefined){
		npc=save;	}

	if (npc==null){
		npc={}; 	}
}

var npc = {}; var thisnpc = {}; var savenpc = {};

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
			var x = each.ronintype
			break;

		case "Animals":
		case "Creatures":
		case "Pregen Types":
		case "Pregen Individuals":
		case "Servants and Peasants":
		case "Oni Summoner":
			var x = "";
			break;
	}

		newDiv("div"+each.title,"menu","block");
		divContents("div"+each.title,"<span id='menu"+each.title+"' onclick='showNpc("+'"'+each.title+'"'+")'></span><br>");
		newButton('menu'+each.title,each.title+'--delete','inline mr5 mb5',"deletenpc("+"'"+each.title+"'"+")","x")
		if (each.type == "Animals" || each.type == "Creatures" || each.type == "Pregen Types" || each.type == "Pregen Individuals" ||each.type == "Servants and Peasants" || each.type == "Oni Summoner" ){
				document.getElementById('menu'+each.title).innerHTML += each.fullname +
																	' (' + each.archetype +" "+ x +" "+
																	'/' + each.template +
																	')'
																	;
		} else {
				document.getElementById('menu'+each.title).innerHTML += each.fullname +
																	' [' + each.clan +
																	'/' + each.school +
																	'] (' + each.archetype +" "+ x +" "+
																	'/' + each.template +
																	')'
																	;}
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
		newButton("addskirmishbuttondiv"+each.title,each.title+'-addtoset',"button ml10",'openModal("myAddToSetModal","closeaddtoset",'+"'"+each.title+"'"+')',"add to set")

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
	divContents("npcinfo",'<i><span id="npcinfoarchetype"></span></i>, <span class="l5r">m</span> <span id="npcconflictcombat"></span> <span class="l5r">c</span> <span id="npcconflictintrigue"></span>, <i><span id="npcsource"></span></i>');

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
	newTextArea("npcnotesright","npcnotesinput","w590 h100")
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
	newSelect("npcronintype","npcronintypeselect","","thisnpc.selectRoninType();")

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

function getWeaponStats(weapon){

		for (var each in tabledata){
			if (tabledata[each].title == "Weapons")
				var tab = tabledata[each].children
		}

		for(var i=0; i < tab.length; i++){
		if (tab[i].name == weapon){
			weapon = tab[i]

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

		for (var each in tabledata){
			if (tabledata[each].title == "Armors")
				var tab = tabledata[each].children
		}

		for(var i=0; i < tab.length; i++){
		if (tab[i].armor == armor){
			armor = tab[i]

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

function resetNPCBuilder(){
		thisnpc.selectedTemplate = {};
		thisnpc.selectedSchool = {};
		thisnpc.selectedFamily = {}
		thisnpc.selectedClan = {};
		document.getElementById("npcstatwrap").innerHTML = "";
		buildNpcStatsDiv();
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

function selectType(){

	resetNPCBuilder();

	var type = document.getElementById('type').value

	getNpcArchetypeList(type)

	npcLists.npcArchetypeArray.sort()

	fillSelectDropdownDefault("archetype","Select Archetype",npcLists.npcArchetypeArray);
	var type = document.getElementById("type").value

	hideDropdowns()

	switch (type){
		case "Clan Samurai":
				thisnpc	= new ClanSamurai()
				break
		case "Ronin, Riffraff and Gaijin":
				thisnpc	= new Ronin()
				break
		case "Servants and Peasants":
				thisnpc	= new ServantsAndPeasants()
				break
		case "Animals":
		case "Creatures":
				thisnpc	= new AnimalsAndCreatures()
				break
		case "Pregen Types":
				thisnpc	= new PregenTypes()
				break
	  case "Pregen Individuals":
				thisnpc	= new PregenIndividuals()
				break
		case "Oni Summoner":
				thisnpc	= new Oni()
				break
	}

	thisnpc.selectedType = document.getElementById("type").value

	thisnpc.selectTypeFunction()
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

	thisnpc.selectArchetypeFunction();
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

	thisnpc.selectTemplateFunction()
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

	thisnpc.selectClanFunction()
}

function makeFamilyDropdown(){

	if (thisnpc.selectedType == undefined){
		thisnpc.selectedType = document.getElementById("type").value
	}

	thisnpc.makeFamilyDropdownFunction()
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
	for (var family in families){
		if (families[family].name == thisnpc.selectedFamily){
			thisnpc.selectedFamily = families[family]
		}
	}
	}
}

function selectNPCSchool(){

	var clan = document.getElementById("npcclanselect").value;

	thisnpc.selectedSchool = document.getElementById("npcschoolselect").value;

	for (var elem in schools){
		for (var school in schools[elem]){
			if (schools[elem][school].name == thisnpc.selectedSchool){
				thisnpc.selectedSchool = schools[elem][school]
			}
		}
	}

		if (clan == "Minor" && thisnpc.selectedSchool.clan == "Minor"){
			var familyname = thisnpc.selectedSchool.family
			familyname = capitalizeFirstLetter(familyname)
			setSelectedValue(document.getElementById("npcfamilyselect"), familyname)
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

	fillStats();
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

function updateSpans(variable){
	document.getElementById("npc"+variable).innerHTML = thisnpc[variable]
}

function updateRings(ring){
	document.getElementById("npc"+variable).innerHTML = thisnpc.rings[variable]
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

function makeExtraWeaponButton(){
	newButton("npcequip","npcweaponwrap0","inline","addExtraWeapon()","+")
}

function startingRingsToMax(rings,maxRing){

	var array = ["Air", "Earth", "Fire", "Water", "Void"]
	var raisedRing = getRandom(array)

	while (thisnpc[raisedRing] > maxRing){
			raisedRing = getRandom(array)
		}
		rings[raisedRing] ++;
}

function fillStats(){

	thisnpc.advArray = []
	thisnpc.disadvArray = []
	thisnpc.demeanorArray = []
	thisnpc.weaponArray = []
	thisnpc.armorArray = []
	thisnpc.abilityArray = []

	thisnpc.setName()

	for (var ring in thisnpc.selectedArchetype.ring){
		thisnpc[ring] = thisnpc.selectedArchetype.ring[ring]
	}

	thisnpc.setRings()
	thisnpc.setDerived()
	thisnpc.setDemeanors()
	thisnpc.setSocial()
	thisnpc.setAdvantages()
	thisnpc.setDisadvantages()
	thisnpc.setSkills()
	thisnpc.setWeapons()
	thisnpc.setArmors()
	thisnpc.setAbilities()
	thisnpc.setSource()

	document.getElementById("npcinfoarchetype").innerHTML = thisnpc.selectedArchetype.fullname;

	thisnpc.techniques = []
	thisnpc.makeTechDropdowns()

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

	updateSpans("source");

	show("npcsave")
	show("npcreroll")
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

function addTechToNpc(i){
	tech = document.getElementById("npctechselect"+i).value
	thisnpc.selectedmahos.push(tech)
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

		if (techselect.selectedIndex == 0){
			abilitydiv.innerHTML = "";
		}
}

function saveNPC(){
	var name = document.getElementById('npcnameinput').value;
	var nospaces = noSpaces(name)

	npc[nospaces] = new Npc;
	thisnpc.adornNpc(nospaces)

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
		var nom = noSpaces(npc[nom].fullname);

		var char = npc[nom]

		skirmishcharacters[nom] = new Skirmisher(char.fullname,char.derived.endurance,char.derived.composure,char.clan,char.school,char.armorphys,char.armorsup);

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

					newSelect("techwrap"+m,"edittechselect"+m,"ml10 w300","showSelectedTechnique('edittechselect"+m+"','edittechinfo"+m+"')");
					newButton("techwrap"+m,"deleteedittech"+m,"inlineblock floatright ml10","deleteEditElement('techwrap','"+m+"')","-")

					var techniquestext = ["Select Technique"];
					var techniquesvalues = ["Select Technique"];
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

			addToDiv("techwrap"+m,"Type: ")
			newSelect("techwrap"+m,"edittechniquesearchtype"+m,"inlineblock ml5 mr5","edittechniquefilter("+m+")")
			var options = ["Any","Invocation","Kata","Kiho","Maho","Ninjutsu","Ritual","Shuji","Inversion"]
			var values = ["any","invocation","kata","kiho","maho","ninjutsu","ritual","shuji","inversion"]
			fillSelectDropdownValues("edittechniquesearchtype"+m,values,options)

			addToDiv("techwrap"+m,"Ring: ")
			newSelect("techwrap"+m,"edittechniquesearchring"+m,"inlineblock mr5","edittechniquefilter("+m+")")
			options = ["Select","Air","Earth","Fire","Water","Void"]
			values = ["default","air","earth","fire","water","void"]
			fillSelectDropdownValues("edittechniquesearchring"+m,values,options)

			addToDiv("techwrap"+m,"Rank: ")
			newSelect("techwrap"+m,"edittechniquesearchrank1"+m,"inlineblock mr5","edittechniquefilter("+m+")")
			options = ["=","=<"]
			values = ["1","2"]
			fillSelectDropdownValues("edittechniquesearchrank1"+m,values,options)

			newSelect("techwrap"+m,"edittechniquesearchrank"+m,"inlineblock","edittechniquefilter("+m+")")
			options = ["Any",1,2,3,4,5]
			values = ["any",1,2,3,4,5]
			fillSelectDropdownValues("edittechniquesearchrank"+m,values,options)

			newDiv("edittechinfo"+m,"techwrap"+m,"ml10 mb10 font15em");
	}

function edittechniquefilter(num){
		var techtype = document.getElementById("edittechniquesearchtype"+num).value;
		var techring = document.getElementById("edittechniquesearchring"+num).value;
		var techrankx = document.getElementById("edittechniquesearchrank1"+num).value;
		var techrank = document.getElementById("edittechniquesearchrank"+num).value;

		var select = "edittechselect"+num;

		var techvalue = [];
		var techtext = []
		var techlist = techniquelist

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

			if (techrankx == "1")					{
				techlist = techlist.filter(function(tech)				{
					tech.rank = Number(tech.rank);
					if (tech.rank == techrank){
						return true;
					}
					return false;
				});
				} else if (techrankx == "2")									{
					techlist = techlist.filter(function(tech){
						tech.rank = Number(tech.rank);
						if (tech.rank <= techrank){
							return true;
						}
						return false;
					});
				}
			}

			for (var i = 0 ; i < techlist.length ; i++){
				techvalue.push(techlist[i].title)
			}

			for (var i = 0; i < techniquelist.length; i++){
				for (var j = 0; j < techlist.length; j++){
					if (techniquelist[i].title == techlist[j].title){
						techtext.push(techniquelist[i].title+ " ("+techniquelist[i].ring+") ["+techniquelist[i].type+" "+techniquelist[i].rank+"]")
					}
				}}
				addValuesToSelect(select,techtext,techvalue)
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
					selectId = children[i].children[1]
					if (selectId !== null){
					nom.weapon.push(selectId.value)
				}
				}
			}

		nom.armor = document.getElementById("editselectarmor0").value

			for (var each in tabledata){
							if (tabledata[each].title == "Armors")
							var tab = tabledata[each].children
						}

			for(i=0; i <tab.length; i++){

				var x = tab[i].armor

				if (tab[i].armor == nom.armor){
					selectedArmor = tab[i]
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
				var tech = childDivs[i].children[0].value
				nom.techs.push(tech)
			}
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

	function npcReroll(){
		if (thisnpc.selectedType == "Servants and Peasants" ){
			fillStats();
		} else {
			selectNPCSchool();
		}
	}
