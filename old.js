
	show("npcsave");
	show("npcschool");
	show("npcstats")

























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
	document.getElementById("npcschoolability").innerHTML = "";
}

function selectNPCSchool(){

	selectTemplate();

	skillgroups = ["Artisan","Martial","Social","Scholar","Trade"];

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
	selectedClan = families[selectedClan]
	selectedFamily = selectedClan[x]
	advantage = selectedFamily.advantages
	disadvantage = selectedFamily.disadvantages

	if (selectedFamily.clanring !== undefined ){  //gives clan traits to minor clans
		selectedClan.clanring = selectedFamily.clanring;
		selectedClan.clanskill = selectedFamily.clanskill;
	}

	addToSelect("npcadv",advantage)
	addToSelect("npcdisadv",disadvantage)

	weapons = selectedSchool.weapons
	armor = selectedSchool.armor

	addToSelect("npcweapon",weapons)
	addToSelect("npcarmor",armor)

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

	makeButton("npcrings","useclanstats","button inline margin10","useClanFamilyStats()","use rings from clan and family")

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
	}}

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
