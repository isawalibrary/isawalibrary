class Npc {
	constructor(){
		this.fullname = thisnpc.name
		this.title = noSpaces(this.fullname)
		this.type = thisnpc.selectedType
		this.archetype = thisnpc.selectedArchetype.fullname
		this.template = thisnpc.selectedArchetype.type
		this.family = "None"
		this.clan = "None"
		this.school = "None"

		this.derived = {}
		this.derived.endurance = thisnpc.endurance
		this.derived.composure = thisnpc.composure
		this.derived.focus = thisnpc.focus
		this.derived.vigilance = thisnpc.vigilance

		this.equiptype = thisnpc.selectedArchetype.equiptype

		this.notes = ""

		this.rings = {}
		this.rings.air = thisnpc.Air
		this.rings.earth = thisnpc.Earth
		this.rings.fire = thisnpc.Fire
		this.rings.water = thisnpc.Water
		this.rings.void = thisnpc.Void

		this.skills = {}
		this.skills.artisan = thisnpc.artisanskill
		this.skills.social = thisnpc.socialskill
		this.skills.scholar = thisnpc.scholarskill
		this.skills.martial = thisnpc.martialskill
		this.skills.trade = thisnpc.tradeskill

		this.social = {}
		this.social.honor = thisnpc.honor
		this.social.glory = thisnpc.glory
		this.social.status = thisnpc.status
		this.social.demeanor = document.getElementById("npcdemeanor").value
		this.social.demeanornotes = this.getDemeanorNotes(this.social.demeanor)

		this.advantage = this.getAdvantages()
		this.disadvantage = this.getDisadvantages()
		this.techs = []
		this.weapon = this.getWeapons()

		this.armor =  document.getElementById('npcarmor0').value
		this.armorphys = this.getArmorPhys(this.armor)
		this.armorsup = this.getArmorSup(this.armor)

		this.ability = document.getElementById("npcabilities").innerHTML
		this.notes = document.getElementById('npcnotesinput').value
	}

  getDemeanorNotes(demeanor){
		for (var i = 0; i < demeanors.length; i++){
			if (demeanors[i].demeanor == demeanor){
				var notes = "Social TNs ("+demeanors[i].tns+"), Unmasking: "+demeanors[i].unmasking;
			}}
			return notes
		}

	getAdvantages(){
		var array = []
		for (var s = 0; s < document.getElementById('npcadvright').children.length; s ++){
			array.push(document.getElementById('npcadv'+s).value);
		}
		return array;
	}
	getDisadvantages(){
		var array = []
		for (var s = 0; s < document.getElementById('npcdisadvright').children.length; s ++){
			array.push(document.getElementById('npcdisadv'+s).value);
		}
		return array;
	}
	getWeapons(){
		var children =  document.getElementById("npcweapons").childNodes;
		var array = []
		for (var i=0; i< children.length; i++){
			var wrapId = "npcweaponwrap"+i;

			if (document.getElementById("wrapId") !== null || document.getElementById("wrapId") !== undefined){
				var selectId = document.getElementById("npcweapon"+i)
				if (selectId !== null){
				array.push(selectId.value)
			}	}
		}
		return array;
	}
	getArmorPhys(armor){
		for (var each in tabledata){
				if (tabledata[each].title == "Armors")
				var tab = tabledata[each].children
			}
		for(var i=0; i < tab.length; i++){
			if (tab[i].armor == this.armor){
				var selectedArmor = tab[i]
		} }
		for (var i=0; npcarmor.length > i; i++){
			if ( npcarmor[i].armor == this.armor){
				var selectedArmor = npcarmor[i];
		} }
		return selectedArmor.phys
	}
	getArmorSup(armor){
		for (var each in tabledata){
				if (tabledata[each].title == "Armors")
				var tab = tabledata[each].children
			}
		for(var i=0; i < tab.length; i++){
			if (tab[i].armor == this.armor){
				var selectedArmor = tab[i]
		} }
		for (var i=0; npcarmor.length > i; i++){
			if ( npcarmor[i].armor == this.armor){
				var selectedArmor = npcarmor[i];
		} }
		return selectedArmor.sup
	}
}

class Skirmisher {
	constructor(name,endurance,composure,clan,school,physres,supres){
		this.clan = clan
		this.school = school
		this.name = name
		this.endurance = endurance
		this.composure = composure
		this.physres = physres
		this.supres = supres

		this.initiative = 0
		this.fatigue = 0
		this.strife = 0
		this.notes = ""
		this.engaged = ""
		this.status = "Alive"
	}
}

class Character {
	constructor(){
	}

  selectTypeFunction(){
		show("npcarchetype");
		hide("npcrerollbutton");
	}

	setName(){
		this.name = this.selectedArchetype.fullname
		document.getElementById("npcnameinput").value = this.name
	}
	setRings(){
		this.Air = this.selectedArchetype.ring.Air
		this.Earth = this.selectedArchetype.ring.Earth
		this.Fire = this.selectedArchetype.ring.Fire
		this.Water = this.selectedArchetype.ring.Water
		this.Void = this.selectedArchetype.ring.Void
	}
	setDerived(){
		this.endurance = this.selectedArchetype.endurance
		this.composure = this.selectedArchetype.composure
		this.focus = this.selectedArchetype.focus
		this.vigilance = this.selectedArchetype.vigilance
	}
	setSocial(){
		this.honor = this.selectedArchetype.honor
		this.glory = this.selectedArchetype.glory
		this.status = this.selectedArchetype.status
	}
	setDemeanors(){
		this.demeanorArray = [];
		addToArray(this.demeanorArray,this.selectedArchetype.demeanor)
		fillSelectDropdown("npcdemeanor",this.demeanorArray)
		setDemeanor()
	}
	setAdvantages(){
		addToArray(this.advArray,this.selectedArchetype.advantages)
		document.getElementById("npcadvright").innerHTML = ""
		for (var i = 0; i < this.advArray.length && i < 2; i++){
			newSelect("npcadvright","npcadv"+i,"inline w600","")
			fillSelectDropdown("npcadv"+i,this.advArray)
			setSelectedIndex("npcadv"+i,i)
		}		 //loads up up to 2 advs per creature
	}
	setDisadvantages(){
		addToArray(this.disadvArray,this.selectedArchetype.disadvantages)
		document.getElementById("npcdisadvright").innerHTML = ""
		for (var i = 0; i < this.disadvArray.length && i < 2; i++){
			newSelect("npcdisadvright","npcdisadv"+i,"mb10 inline w600","")
			fillSelectDropdown("npcdisadv"+i,this.disadvArray)
			setSelectedIndex("npcdisadv"+i,i)
		}		 //loads up up to 2 disadvs per creature
	}
	setSkills(){
		thisnpc.artisanskill = thisnpc.selectedArchetype.skills.artisanskill
		thisnpc.martialskill = thisnpc.selectedArchetype.skills.martialskill
		thisnpc.socialskill = thisnpc.selectedArchetype.skills.socialskill
		thisnpc.scholarskill = thisnpc.selectedArchetype.skills.scholarskill
		thisnpc.tradeskill = thisnpc.selectedArchetype.skills.tradeskill

	}
	setWeapons(){
		addToArray(this.weaponArray,this.selectedArchetype.weapon)

		document.getElementById("npcweapons").innerHTML = ""
		for (var i = 0; i < this.selectedArchetype.weapon.length && i < 2; i++){
			newDiv("npcweaponwrap"+i,"npcweapons","block mb5 npcbuilderright")
			newSelect("npcweaponwrap"+i,"npcweapon"+i,"inline","selectNPCWeapon("+i+")")
			newDiv("npcweapon"+i+"stats","npcweaponwrap"+i,"inline ml10")
			fillSelectDropdown("npcweapon"+i,this.weaponArray)
			document.getElementById("npcweapon"+i).options[i].selected = true;
			selectNPCWeapon(i)
		} //loads up up to 2 weapons per creature
	}
	setArmors(){
		addToArray(this.armorArray,this.selectedArchetype.armor)
		fillSelectDropdown("npcarmor0",this.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")
	}
	setAbilities(){
		if (this.selectedArchetype.qualities !== null && this.selectedArchetype.qualities !== undefined){
			this.abilityArray.push(this.selectedArchetype.qualities)
		}

		addToArray(this.abilityArray,this.selectedArchetype.abilities)
		document.getElementById("npcabilities").innerHTML="";
		var html = ""
		for (i = 0 ; i < this.abilityArray.length; i++){
			html += this.abilityArray[i]+"<p>";
		}
		document.getElementById("npcabilities").innerHTML=html
		this.ability = document.getElementById("npcabilities").innerHTML;
	}

	setSource(){
		this.source = this.selectedArchetype.source
	}
	makeTechDropdowns(){	}

	adornNpc(npcname){
		npc[npcname].template = this.selectedArchetype.type
	}

}

class Samurai extends Character {
	constructor(){
		super()
	}
	setRings(){
		if (document.getElementById("npcclanselect").value == "Minor"){
			this.selectedClan.clanstatus = this.selectedFamily.clanstatus
			this.selectedClan.clanring = this.selectedFamily.clanring
			this.selectedClan.clanskill = this.selectedFamily.clanskill
		}
		if (this.selectedArchetype.ring.type !== "set"){
			this.selectedArchetype.extra();
		}
		var maxRing = this.selectedArchetype.max - 1;

		this[this.selectedClan.clanring] ++

		var array = ["Air", "Earth", "Fire", "Water", "Void"]

		if (this.selectedSchool.ring1 == "Any"){
				this.selectedSchool.ring1 = getRandom(array)

		for (var m=array.length-1; m >= 0; m--){
			if (array[m] == this.selectedSchool.ring1){
				array.splice(m)

					}
				}
			}
		if (this.selectedSchool.ring2 == "Any"){
				this.selectedSchool.ring2 = getRandom(array)
			}
		this[this.selectedSchool.ring1] ++;
		this[this.selectedSchool.ring2] ++;
		var x = getRndInteger(1,2);

		var familyRing = this.selectedFamily["ring"+ x]

		if (this[familyRing] < maxRing){
				this[familyRing] ++;
			} else {
		if (x == 1){
			familyRing = this.selectedFamily.ring2
		}
		if (x == 2){
			familyRing = this.selectedFamily.ring1
		}
		if (familyRing == "Any"){
			familyRing = getRandom(array)
		}
		this[familyRing] ++;
			}
		startingRingsToMax(this,maxRing)
	}
	setDerived(){
		this.endurance = (this.Earth + this.Fire)*2
		this.composure = (this.Earth + this.Water)*2
		this.focus = this.Fire + this.Air
		this.vigilance = Math.ceil((this.Air + this.Water)/2)
	}
	setSocial(){
		this.honor = this.selectedSchool.honor
		this.glory = this.selectedFamily.glory
		this.status = this.selectedClan.clanstatus
	}

	setDemeanors(){
		addToArray(this.demeanorArray,this.selectedArchetype.demeanor)
		addToArray(this.demeanorArray,this.selectedTemplate.demeanor)
		addToArray(this.demeanorArray,this.selectedFamily.demeanor)
		this.demeanorArray = removeDuplicates(this.demeanorArray);
		fillSelectDropdown("npcdemeanor",this.demeanorArray)
		getRandomSelect("npcdemeanor")
		setDemeanor()
	}
	setAdvantages(){
		addToArray(this.advArray,this.selectedArchetype.advantages)
		addToArray(this.advArray,this.selectedTemplate.advantages)
		addToArray(this.advArray,this.selectedClan.advantages)
		addToArray(this.advArray,this.selectedFamily.advantages)
		this.advArray = removeDuplicates(this.advArray);
		fillSelectDropdown("npcadv0",this.advArray)
		getRandomSelect("npcadv0")
	}
	setDisadvantages(){
		addToArray(this.disadvArray,this.selectedArchetype.disadvantages)
		addToArray(this.disadvArray,this.selectedTemplate.disadvantages)
		addToArray(this.disadvArray,this.selectedClan.disadvantages)
		addToArray(this.disadvArray,this.selectedFamily.disadvantages)
		this.disadvArray = removeDuplicates(this.disadvArray);
		fillSelectDropdown("npcdisadv0",this.disadvArray)
		getRandomSelect("npcdisadv0")
	}
	setSkills(){
		thisnpc.artisanskill = thisnpc.selectedArchetype.skills.artisanskill + thisnpc.selectedTemplate.artisanskill + thisnpc.selectedSchool.schoolskills.Artisan;
		thisnpc.martialskill = thisnpc.selectedArchetype.skills.martialskill + thisnpc.selectedTemplate.martialskill + thisnpc.selectedSchool.schoolskills.Martial;
		thisnpc.socialskill = thisnpc.selectedArchetype.skills.socialskill + thisnpc.selectedTemplate.socialskill + thisnpc.selectedSchool.schoolskills.Social;
		thisnpc.scholarskill = thisnpc.selectedArchetype.skills.scholarskill + thisnpc.selectedTemplate.scholarskill + thisnpc.selectedSchool.schoolskills.Scholar;
		thisnpc.tradeskill = thisnpc.selectedArchetype.skills.tradeskill + thisnpc.selectedTemplate.tradeskill + thisnpc.selectedSchool.schoolskills.Trade;
	}
	setWeapons(){
		addToArray(this.weaponArray,this.selectedArchetype.weapon)
		addToArray(this.weaponArray,this.selectedClan.weapons)
		addToArray(this.weaponArray,this.selectedSchool.weapons)
		this.weaponArray = removeDuplicates(this.weaponArray);
		fillSelectDropdown("npcweapon0",this.weaponArray)
		getRandomSelect("npcweapon0")
		selectNPCWeapon("0")
		makeExtraWeaponButton()
	}
	setArmors(){
		addToArray(this.armorArray,this.selectedArchetype.armor)
		addToArray(this.armorArray,this.selectedClan.armor)
		addToArray(this.armorArray,this.selectedSchool.armor)
		this.armorArray = removeDuplicates(this.armorArray);
		fillSelectDropdown("npcarmor0",this.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")
	}
	makeTechDropdowns(){
			makeTechDropdowns()
	}
	setSource(){
		this.source = this.selectedSchool.source
	}
	setAbilities(){
		document.getElementById("npcabilities").innerHTML="";
		document.getElementById("npcabilities").innerHTML="<u>"+this.selectedSchool.name+"</u>: "+this.selectedSchool.ability+"<p>";
	}

	adornNpc(npcname){
		npc[npcname].template = document.getElementById('template').value
		npc[npcname].clan = document.getElementById('npcclanselect').value
		npc[npcname].family = document.getElementById('npcfamilyselect').value
		npc[npcname].school = document.getElementById('npcschoolselect').value

		for (var p =0; p< thisnpc.selectedSchool.startingtechs.length; p++){
			npc[npcname].techs.push(thisnpc.selectedSchool.startingtechs[p])
		}

		var div = document.getElementById("npcschooltechchoice")

		for (var q=0; q< div.children.length; q++){

			var subdiv = div.children[q]

			for (r = 0; r< subdiv.children.length; r++){
				if (subdiv.children[r].nodeName == "SELECT"){
					var tech = subdiv.children[r].value;
					npc[npcname].techs.push(tech)
				}
			}
		}
		if (npc[npcname].type == "Ronin, Riffraff and Gaijin"){
			var ronintype = document.getElementById("npcronintypeselect").value
			ronintype = ronintype.replace(" Origin","")
			if (ronintype == "Samurai or Ronin"){ronintype = "Ronin"}
			npc[npcname].ronintype = ronintype
		}

	}
}

class ClanSamurai extends Samurai {
	constructor(){
		super()

	}

	selectTypeFunction(){
		show("npcarchetype")
		var selectObj = document.getElementById("archetype")
		var valueToSet = "Rank 1"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();

		show("template")
		setSelectedText(document.getElementById("template"),"Select Template")

		document.getElementById("npcsave").classList.add("hide");
	}

	selectArchetypeFunction(){
		show("npctemplate");

		if (this.selectedArchetype.ring.type !== "set"){
				this.selectedArchetype.extra();
			}
	}

	selectTemplateFunction(){
		fillSelectDropdownDefault("npcclanselect","Select Clan",clans)
	}

	selectClanFunction(){
			var defaultOpt = ["Select School"]
			var clanSchools = [];
			var unalignedSchools = [];

			for (var elem in schools[this.selectedClan.name]){
					clanSchools.push(schools[this.selectedClan.name][elem].name)
			}

			for (var elem in schools){
					for (var each in schools[elem])
						if (schools[elem][each].keyword.includes("Unaligned")){
							unalignedSchools.push(schools[elem][each].name)
						}
				}
			document.getElementById("npcschoolselect").innerHTML = "";
			addToSelect("npcschoolselect",defaultOpt)
			addOptgroupToSelect("npcschoolselect","Clan Schools",clanSchools)
			addOptgroupToSelect("npcschoolselect","Other Schools",unalignedSchools)
	}
	makeFamilyDropdownFunction(){
		var clanFamilies = [];
		for (var elem in families){
			if (families[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(families[elem].name)
			}}
		fillSelectDropdownDefault("npcfamilyselect","Select Family",clanFamilies)
	}
	setName(){
		var name = nameMaker();
		name = document.getElementById("npcfamilyselect").value+" "+name;
		document.getElementById("npcnameinput").value = name
		this.name = name;
	}

}

class Ronin extends Samurai {
	constructor(){
		super()
	}

	selectTypeFunction(){
		document.getElementById("npcsave").classList.add("hide");

		this.selectedType = document.getElementById("type").value

		var selectObj = document.getElementById("archetype")
		var valueToSet = "Rank 1"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();
	}

	selectArchetypeFunction(){
		show("npcronintype");

		setSelectedText(document.getElementById("npcronintypeselect"),"Select Type")

		if (this.selectedArchetype.ring.type !== "set"){
						this.selectedArchetype.extra();
			}
	}
	selectTemplateFunction(){
		this.regions = []

		for (var each in roninregions){
				this.regions.push(roninregions[each].name)
			}

		fillSelectDropdownDefault("npcclanselect","Select Background Region",this.regions)
		show("npcronintype")
		show("npcclanselect")
	}

	selectRoninType(){
		var ronintype = document.getElementById("npcronintypeselect").value

		switch (ronintype){
				case "Samurai or Ronin Origin":
				this.status = 24;
				break;

				case "Peasant Origin":
				this.status = 15;
				break;

				case "Gaijin Origin":
				this.status = 0;
				break;
			}
			hideDropdowns();
			show("npctype")
			show("npcarchetype")
			show("npcronintype")

			this.regions = []

			for (var each in roninregions){
				this.regions.push(roninregions[each].name)
			}

			show("npctemplate");
			}

	selectClanFunction(){
			var defaultOpt = ["Select School"]
			var clanSchools = [];
		for (var region in roninregions){
			if (roninregions[region].name == document.getElementById("npcclanselect").value){
				this.selectedClan = roninregions[region]
			}
		}

		for (var elem in schools){
					for (var each in schools[elem])
						if (schools[elem][each].keyword.includes("Unaligned")){
							clanSchools.push(schools[elem][each].name)
						}
				}
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
		}
		clanSchools	= removeDuplicates(clanSchools)
		document.getElementById("npcschoolselect").innerHTML = "";
		addToSelect("npcschoolselect",defaultOpt)
		addOptgroupToSelect("npcschoolselect","Schools",clanSchools)
	}

	makeFamilyDropdownFunction(){
		var clanFamilies = [];
		for (elem in this.selectedClan){
			if (this.selectedClan[elem].clan == document.getElementById("npcclanselect").value){
				clanFamilies.push(this.selectedClan[elem].name)
			}}

		for (elem in roninupbringings){
			clanFamilies.push(roninupbringings[elem].name)
			}
			fillSelectDropdownDefault("npcfamilyselect","Select Upbringing",clanFamilies)
	}

	setName(){
		var name = nameMaker();
		document.getElementById("npcnameinput").value = name
		this.name = name;
	}
	setSocial(){
		this.honor = this.selectedSchool.honor
		this.glory = this.selectedClan.clanglory
		this.status = this.status + this.selectedClan.clanstatus + this.selectedFamily.status

		if (this.status < 0){
			this.status = 0
		}
	}
}

class ServantsAndPeasants extends Character {
	constructor(){
		super()
	}

	selectTypeFunction(){
		var selectObj = document.getElementById("archetype")
		var valueToSet = "Servants and Peasants"
		setSelectedText(selectObj, valueToSet)
		selectArchetype();
	}
	selectArchetypeFunction(){
		show("npctemplate");
		hide("npcarchetype");

		setSelectedText(document.getElementById("template"),"Select Template")
	}
	selectTemplateFunction(){
			fillStats()
			hide("npcclan")
	}
	setName(){
		var name = nameMaker();
		document.getElementById("npcnameinput").value = name
		this.name = name;
	}
	setRings(){
		this.selectedArchetype.extra()
		this.Air = this.selectedArchetype.ring.Air
		this.Earth = this.selectedArchetype.ring.Earth
		this.Fire = this.selectedArchetype.ring.Fire
		this.Water = this.selectedArchetype.ring.Water
		this.Void = this.selectedArchetype.ring.Void

		var ring = thisnpc.selectedTemplate.peasantring

		thisnpc[ring] ++
	}
	setDemeanors(){
		addToArray(this.demeanorArray,this.selectedArchetype.demeanor)
		addToArray(this.demeanorArray,this.selectedTemplate.demeanor)
		this.demeanorArray = removeDuplicates(this.demeanorArray);
		fillSelectDropdown("npcdemeanor",this.demeanorArray)
		getRandomSelect("npcdemeanor")
		setDemeanor()
	}
	setAdvantages(){
		addToArray(this.advArray,this.selectedArchetype.advantages)
		addToArray(this.advArray,this.selectedTemplate.advantages)
		this.advArray = removeDuplicates(this.advArray);
		fillSelectDropdown("npcadv0",this.advArray)
		getRandomSelect("npcadv0")
	}
	setDisadvantages(){
		addToArray(this.disadvArray,this.selectedArchetype.disadvantages)
		addToArray(this.disadvArray,this.selectedTemplate.disadvantages)
		this.disadvArray = removeDuplicates(this.disadvArray);
		fillSelectDropdown("npcdisadv0",this.disadvArray)
		getRandomSelect("npcdisadv0")
	}
	setSkills(){
		thisnpc.artisanskill = thisnpc.selectedArchetype.skills.artisanskill + thisnpc.selectedTemplate.artisanskill
		thisnpc.martialskill = thisnpc.selectedArchetype.skills.martialskill + thisnpc.selectedTemplate.martialskill
		thisnpc.socialskill = thisnpc.selectedArchetype.skills.socialskill + thisnpc.selectedTemplate.socialskill
		thisnpc.scholarskill = thisnpc.selectedArchetype.skills.scholarskill + thisnpc.selectedTemplate.scholarskill
		thisnpc.tradeskill = thisnpc.selectedArchetype.skills.tradeskill + thisnpc.selectedTemplate.tradeskill
	}
	setWeapons(){
		addToArray(this.weaponArray,this.selectedArchetype.weapon)
		this.weaponArray = removeDuplicates(this.weaponArray);
		fillSelectDropdown("npcweapon0",this.weaponArray)
		getRandomSelect("npcweapon0")
		selectNPCWeapon("0")
		makeExtraWeaponButton()
	}
	setArmors(){
		addToArray(this.armorArray,this.selectedArchetype.armor)
		this.armorArray = removeDuplicates(this.armorArray);
		fillSelectDropdown("npcarmor0",this.armorArray)
		getRandomSelect("npcarmor0")
		selectNPCArmor("0")
	}
	setAbilities(){
		if (this.selectedArchetype.qualities !== null && this.selectedArchetype.qualities !== undefined){
			this.abilityArray.push(this.selectedArchetype.qualities)
		}

		addToArray(this.abilityArray,this.selectedArchetype.abilities)
		document.getElementById("npcabilities").innerHTML="";
		var html = ""
		for (i = 0 ; i < this.abilityArray.length; i++){
			html += this.abilityArray[i]+"<p>";
		}
		document.getElementById("npcabilities").innerHTML=html
		this.ability = document.getElementById("npcabilities").innerHTML;
	}
	makeTechDropdowns(){
			makeTechDropdowns()
	}
	adornNpc(npcname){
		npc[npcname].template = document.getElementById('template').value
	}
}

class AnimalsAndCreatures extends Character {
	constructor(){
		super()
		}
	selectArchetypeFunction(){
		fillStats()
	}
}

class PregenTypes extends Character {
	constructor(){
		super()
		}
	selectArchetypeFunction(){
		fillStats()
	}
}

class PregenIndividuals extends Character {
	constructor(){
		super()
		}
	selectArchetypeFunction(){
		fillStats()
	}
}

var mahos; var onipowersarray = [];

class Oni extends Character {
	constructor(){
		super()
		}

	selectArchetypeFunction(){
		mahos = thisnpc.selectedmahos
		thisnpc.selectedmahos = [];

		if (mahos == undefined || mahos.length == 0){
			document.getElementById("npctechniquecontainer").innerHTML = "";
		}

		fillStats();

		var armor = thisnpc.armorArray[0]

		for (var each in npcarmor){
			if (armor == npcarmor[each].armor){
				thisnpc.physres = npcarmor[each].phys
				Number(thisnpc.physres)
				thisnpc.supres = npcarmor[each].sup
				Number(thisnpc.supres)
				thisnpc.armorqualities = npcarmor[each].qualities

				var html = "Physical Res: <span id='npcphysres'>"+thisnpc.physres+"</span> Supernatural Res: <span id='npcsupres'>"+thisnpc.supres+"</span>  Qualities: <span id='npcarmorqualities'>"+thisnpc.armorqualities+"</span>"

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
			newSelect("onipowerwrap"+i,"onipowerselect"+i,"",)

			var self = this
			var selectI = document.getElementById("onipowerselect"+i)

			selectI.setAttribute("onchange",'thisnpc.selectOniPower('+i+')')

			if (i == 0){
				fillSelectDropdownDefault("onipowerselect"+i,"Select Shadowlands Power",onipowersarray)
			}
			newDiv("onipowerinfo"+i,"onipowerwrap"+i,"npcright mb5")
		}

		if (document.getElementById("archetype").value == "Powerful Oni: Hellish Sorcerer"){
			setSelectedValue(document.getElementById("onipowerselect0"),"Tainted Sorcery")
			this.selectOniPower(0);
		}
	}

	selectOniPower(k){

		var power = document.getElementById("onipowerselect"+k).value

		if (thisnpc.selectedpowers.includes(power)){
				for (var each in onipowers){
					if (onipowers[each].name == power){
								var rank2 = onipowers[each].rank2;
								divContents("onipowerinfo"+k,rank2)
								onipowers[each].effect2()
								document.getElementById("onipowerselect"+k).setAttribute("onchange","thisnpc.selectOniPower("+k+");	thisnpc.remakeOni("+k+")")
					}
				}

		} else {
				for (var each in onipowers){
					if (onipowers[each].name == power){
								var rank1 = onipowers[each].rank1;
								divContents("onipowerinfo"+k,rank1)
								onipowers[each].effect()
								document.getElementById("onipowerselect"+k).setAttribute("onchange","thisnpc.selectOniPower("+k+");	thisnpc.remakeOni("+k+")")
					}
				}}

			thisnpc.selectedpowers.push(document.getElementById("onipowerselect"+k).value)

			var powers = thisnpc.selectedArchetype.powers

			var i = k+1;

			if (i < powers){
				fillSelectDropdownDefault("onipowerselect"+i,"Select Shadowlands Power",onipowersarray)
			}
		}

		removeFromOniArray(powerName){

			for (var i = thisnpc.onipowersarray.length-1; i >= 0; i--){
				if (thisnpc.onipowersarray[i] == powerName){
					thisnpc.onipowersarray.splice(i,1)
				}
			}
		}

		addToOniArray(powerName){
			thisnpc.onipowersarray.push(powerName)
		}

		removeFromSelectedPowers(powerName){
			for (var i = thisnpc.selectedpowers.length -1 ;i >= 0; i--){
				if (thisnpc.selectedpowers[i] == powerName){
					thisnpc.selectedpowers.splice(i,1)
				}
			}
		}

		remakeOni(num){
			thisnpc.selectedpowers.push(document.getElementById("onipowerselect"+num).value);
			thisnpc.selectedpowers.splice(num,1)
			var powers = thisnpc.selectedpowers
			thisnpc.selectedpowers = []

			document.getElementById("npctechniquecontainer").innerHTML = "";

			var name = document.getElementById("npcnameinput").value
			thisnpc.oniMaker();
			document.getElementById("npcnameinput").value = name;

			for (var i = 0; i < powers.length-1; i++){
				setSelectedValue(document.getElementById("onipowerselect"+i),powers[i]);
				thisnpc.selectOniPower(i);
			}

			var mahos = thisnpc.selectedmahos
			thisnpc.selectedmahos = []

			for (var i = 0; i < mahos.length; i++){
				setSelectedValue(document.getElementById("npctechselect"+i),mahos[i])
				addTechToNpc(i)
				showSelectedTechnique("npctechselect"+i,"npctechinfo"+i)
			}
		}
		adornNpc(npcname){
			npc[npcname].armorphys = this.physres;
			npc[npcname].armorsup = this.supres;
			npc[npcname].armor = document.getElementById('npcarmor0')

			var div = document.getElementById("onipowers").children
			var select = document.getElementById("onipowers").children[0].childNodes[0]
			npc[npcname].ability = ""

			for (var p = 0; p < document.getElementById("onipowers").children.length; p++){
				if ( document.getElementById("onipowers").children[p].childNodes[0].value !== "Select Shadowlands Power" &&  document.getElementById("onipowers").children[p].childNodes[0].value !== "" && document.getElementById("onipowers").children[p].childNodes[0].value !== undefined){
						npc[npcname].ability += document.getElementById("onipowers").children[p].childNodes[0].value + ": ";
						npc[npcname].ability += document.getElementById("onipowers").children[p].childNodes[1].innerHTML +"<p>"}
			}
			for (var p = 0; p < document.getElementById("npctechniquecontainer").children.length; p++){
				if ( document.getElementById("npctechniquecontainer").children[p].childNodes[0].value !== "Select Maho" &&  document.getElementById("npctechniquecontainer").children[p].childNodes[0].value !== "" && document.getElementById("npctechniquecontainer").children[p].childNodes[0].value !== undefined){
						npc[npcname].techs.push(document.getElementById("npctechniquecontainer").children[p].childNodes[0].value)
						}
				}
		}
}

var onipowers = {
	accursedregeneration: {
		name: "Accursed Regeneration",
		rank1: "(First Rank)  At the end of each round, if the oni has not suffered damage from a Sacred source this round, the oni removes the Lightly Injured condition or reduces the Severely Injured condition to Lightly Injured.",
		rank2: "(Subsequent Ranks) At the end of each round, if the oni has not suffered damage from a Sacred source this round, the oni also reduces its fatigue by 2 per each subsequent rank of Accursed Regeneration.",
		effect: function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")
		},
		effect2: function(){
			this.effect()
		}
	},
	bonycarapace:{
		name: "Bony Carapace",
		rank1:"(First Rank) The oni is covered in thick hide, bony plates, or some other form of natural armor beyond even the substantial protection typical of its kind.  This increases the oni's physical resistance by 2 and its supernatural resistance by 1.",
		rank2:"(Subsequent Ranks) Increases the oni's physical resistance by 1.",
		effect: function(){
				thisnpc.conflictcombat = thisnpc.conflictcombat +2;
				updateSpans("conflictcombat")
				thisnpc.physres = thisnpc.physres +2;
				updateSpans("physres")
				thisnpc.supres = thisnpc.supres +1;
				updateSpans("supres")

				thisnpc.removeFromOniArray("Serpentine Speed")
		},
		effect2: function(){
				thisnpc.conflictcombat = thisnpc.conflictcombat +2;
				updateSpans("conflictcombat")
				thisnpc.physres = thisnpc.physres +1;
				updateSpans("physres")
		}
	},
	captivatingvoice:{
		name: "Captivating Voice",
		rank1: "(First Rank) Some oni speak with honeyed voices at odds with their hideous appearance, giving them the ability to cajole and coerce even stalwart samurai with their words.  As a Scheme action, the oni may attempt to influence the mind of a listener by making a Social (Fire) check with a TN equal to the target's vigilance. If the oni succeeds, the target suffers 1 strife, plus 1 strife for every 2 bonus successes. If the oni is aware of the target's ninjo, it adds 4 bonus successes to the check if it succeeds. A character who becomes compromised in this manner must spend 1 Void point or immediately unmask.",
		rank2: "(Subsequent Ranks) Reduce the TN of the check by 1 (to a minimum of 0).",
		effect: function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +2;
			updateSpans("conflictintrigue")
		},
		effect2: function(){
			this.effect()
		}
	},
	darkpuppet:{
		name:"Dark Puppet",
		rank1:"(First Rank) By some vile art, the oni is able to act as if it is many in number. Splitting their form in this manner usually weakens them, but some can bend a suitable substitute to their will, striking through their shadow or another sinister proxy.  Once per scene, the oni may perform a second action at Initiative 0.",
		rank2:"(Subsequent Ranks) The oni may use this power one addition time per scene. It can only use it once per round.",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +2;
			updateSpans("conflictintrigue")
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")
		},
		effect2: function(){
			this.effect()
		}
	},
	dreadbellow:{
		name:"Dread Bellow",
		rank1:"(First Rank) Once per scene as a Scheme action, the oni may roar, feeding on the primal terror it instills. Each other character at range 0-4 must resist with a TN 4 Meditation check (Earth or Fire 2, Air 5) or suffer the Afflicted condition and stumble back 1 range band from the oni. For each character who fails, the oni removes 2 fatigue.",
		rank2:"(Subsequent Ranks) The oni may use this power one addition time per scene. It can only use it once per round.",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")
		},
		effect2: function(){
			this.effect()
		}
	},
	horrorofjigoku:{
		name:"Horror of Jigoku",
		rank1:"After any character performs a successful Attack action that deals 0 damage to the oni (after resistance is applied), that character suffers 3 strife.",
		rank2:"",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")

			thisnpc.removeFromOniArray("Horror of Jigoku")
			thisnpc.removeFromOniArray("Human Mask")
		},
	},
	humanmask:{
		name:"Human Mask",
		rank1:"The most cunning of oni sometimes transform themselves into human guise. Though imperfect, these disguises are often capable of fooling the unwary and allow the oni to close with a victim or to bypass a foolish sentry. Closer scrutiny often reveals the truth, however, as even the cleverest of oni won't follow (or comprehend) the tenets of Bushido properly. Less cunning oni, with little or no understanding of how to act human, behave in bizarre fashions that even gaijin would notice as not falling within Rokugani norms.  As a Scheme action, oni with this power can weave an illusion of Tainted sorcery to change its apparent nature. It may only initiate this illusion while unseen by others. While under the illusion, the oni appears to be a normal human unafflicted by the Taint, its silhouette is reduced to 2, and it is unaffected by its Sickening Visage disadvantage. However, some element of the oni's inhuman nature remains, allowing careful observers to note something wrong by performing a TN 4 Medicine (Air) or Theology (Earth) check. Outside of the Shadowlands, the oni's illusions are harder to maintain, reducing the TN of the check to 3. Success reveals the horn carefully hidden in hair, the fire in the oni's eyes, or some other tell that reveals it as an inhuman monster. The oni may dismiss the illusion as a Support action and typically does so before engaging in combat.",
		rank2:"",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +4;
			updateSpans("conflictintrigue")

			thisnpc.removeFromOniArray("Human Mask")
		},
	},
	illusionmaster:{
		name:"Illusion Master",
		rank1:"The treachery of oni knows no bounds, and some oni have learned vile magics that can deceive the senses and mind into perceiving that which is not there. By means of this sorcery, these oni are able to call up phantasms of lost family to torment samurai, to cloak their movements in impenetrable shadow, or to appear to be more numerous and terrible than they truly are.  Oni with this power can call forth illusions of objects, people, and creatures as a Support action. Once created, an illusion remains for the duration of the scene, continuing to act in accordance with the oni's will. The oni may maintain illusions with total silhouette no greater than 8, with two silhouette 0 illusions counting as a single point of silhouette. Therefore, the oni could create the illusion of two ogres (silhouette 4 each), or it could make itself appear to be even larger (increasing its apparent silhouette by 1), wielding a sword the size of a tall human (silhouette 2), and preceded by a pack of five Tainted hounds (silhouette 1 each).  The illusions the oni creates have no substance and cannot directly physically harm anyone, but they can speak if the oni wishes it, or conceal details such as deadfalls or other dangers. Touching an illusion reveals its falsehood but does not end its effects unless the illusion is brought into contact with jade. Characters who have reason to suspect an illusion can attempt to see through it or reveal it with a TN 3 check using a skill the GM deems appropriate.",
		rank2:"",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +3;
			updateSpans("conflictintrigue")
			thisnpc.conflictcombat = thisnpc.conflictcombat +3;
			updateSpans("conflictcombat")

			thisnpc.removeFromOniArray("Illusion Master")
		},
	},
	obsidianjaws:{
		name:"Obsidian Jaws",
		rank1:"(First Rank) The hideous visages of some oni are further marred by massive jaws filled with teeth of obsidian shards.  The oni gains the following unarmed attack profile: Obsidian Bite (Range 0, Damage 4, Deadliness 8, Razor-Edged, Unholy).",
		rank2:"(Subsequent Ranks) After the oni inflicts a critical strike using this profile, it removes 2 fatigue per additional rank purchased.",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +4;
			updateSpans("conflictcombat")

				thisnpc.weaponArray.push("Obsidian Bite")

				newDiv("npcweaponwrap1","npcweapons","block pb5 npcbuilderright")
				newSelect("npcweaponwrap1","npcweapon1"," inline","selectNPCWeapon('1');")
				fillSelectDropdown("npcweapon1",["Obsidian Bite"])
				newDiv("npcweapon1stats","npcweaponwrap1","inline ml10")
				var weaponstats1 = getWeaponStats("Obsidian Bite")
				divContents("npcweapon1stats",weaponstats1)
		},
		effect2: function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +4;
			updateSpans("conflictcombat")
		}
	},
	scentofweakness:{
		name:"Scent of Weakness",
		rank1:"(First Rank) The secret desires of a samurai's heart are as playthings to an oni, who may be able to see hidden weakness as if written in burning letters on the samurai's face or to smell the wants and needs the samurai keeps hidden as clearly as wafting perfume.  As a Scheme Action, the oni may make a Social (Air) check targeting one character in the scene with a TN equal to the target's vigilance. Success reveals the target's ninjo to the oni, including contextual details. For example, an oni using this power against a character with a ninjo of secret love would learn not only about this hidden desire, but also whom the character longs for, what their love looks like, and similar information as the GM deems appropriate. This does not in and of itself grant the oni power over the target, but may help the oni in other ways, such as empowering the Captivating Voice power (see page 137) or enabling it to further a secret scheme. Characters who have their secrets exposed to the oni in this way have no way of knowing the extent of what it learned.",
		rank2:"(Subsequent Ranks) Reduce the TN of the check by 1 (to a minimum of 0).",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +3;
			updateSpans("conflictintrigue")

		},
		effect2: function(){
			this.effect()
		}
	},
	serpentinespeed:{
		name: "Serpentine Speed",
		rank1:"(First Rank) Increases the oni's focus by 2 and decrease the TN of Fitness checks it makes by 1 to a minimum of 1.",
		rank2:"(Subsequent Ranks) Increase the oni's focus by 2.",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")
			thisnpc.focus = thisnpc.focus +2;
			updateSpans("focus")

			thisnpc.removeFromOniArray("Bony Carapace")
		},
		effect2: function(){
			this.effect()
		}
	},
	shadowlandsvenom:{
		name:"Shadowlands Venom",
		rank1:"(First Rank) The oni's weapons or attacks carry the threat of deadly venom, smeared on a weapon or injected by its claws or bite.  After the oni inflicts the Bleeding condition on a target, that target also suffers the Lightly Wounded condition for one ring of the oni's choice.",
		rank2:"(Subsequent Ranks) Increase the TN of checks to resist critical strikes inflicted by this oni by 1.",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +4;
			updateSpans("conflictcombat")

		},
		effect2: function(){
			this.effect()
		}
	},
	stolenname:{
		name: "Stolen Name",
		rank1: "An oni that was summoned by a maho-tsukai and given a name (or stole a name) gains tremendous power. Should the GM decide to have an oni possess a name, increase each of its rings by 1. The oni may also purchase up to two additional Shadowlands powers.",
		rank2:"",
		effect:function(){
			thisnpc.removeFromOniArray("Stolen Name")
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +3;
			updateSpans("conflictintrigue")
			thisnpc.conflictcombat = thisnpc.conflictcombat +3;
			updateSpans("conflictcombat")
			thisnpc.Air = thisnpc.Air +1;
			updateSpans("Air")
			thisnpc.Earth = thisnpc.Earth +1;
			updateSpans("Earth")
			thisnpc.Fire = thisnpc.Fire +1;
			updateSpans("Fire")
			thisnpc.Water = thisnpc.Water +1;
			updateSpans("Water")
			thisnpc.Void = thisnpc.Void +1;
			updateSpans("Void")
			var x = thisnpc.selectedArchetype.powers
			thisnpc.selectedArchetype.powers = thisnpc.selectedArchetype.powers +2;

			for (i = x; i < thisnpc.selectedArchetype.powers; i++){
			newDiv("onipowerwrap"+i,"onipowers","npcright")
			newSelect("onipowerwrap"+i,"onipowerselect"+i,"","thisnpc.selectOniPower("+i+")")
			newDiv("onipowerinfo"+i,"onipowerwrap"+i,"npcright mb5")
			}

		}
	},
	taintedsorcery:{
		name:"Tainted Sorcery",
		rank1:"(First Rank) Some of the most fearsome oni wield powerful Tainted sorcery akin to maho, cowing the kansen into submission or drawing on the power of Jigoku instead of enticing the corrupted spirits with blood offerings.  An oni with this power gains up to three maho techniques, chosen from Core 224-225 and from Shadowlands 118-121. When using these powers, the oni never suffers spiritual backlash, nor does it take damage for channeling the techniques. For the purposes of using maho, all five of the oni's rings count as having the Shadowlands Taint disadvantage attached.",
		rank2:"(Subsequent Ranks) The oni may take 2 additional maho techniques.",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +5;
			updateSpans("conflictintrigue")
			thisnpc.conflictcombat = thisnpc.conflictcombat +5;
			updateSpans("conflictcombat")

			parentdiv = document.getElementById("npctechniquecontainer");
			count = 3;

			for (var i = 0; i < count; i++){
				newDiv("npctechwrap"+i,parentdiv,"npcbuilderright")
				newSelect("npctechwrap"+i,"npctechselect"+i,"","showSelectedTechnique('npctechselect"+i+"','npctechinfo"+i+"');addTechToNpc("+i+")")
				newDiv("npctechinfo"+i,"npctechwrap"+i)

				var techlist = ["Select Maho"];
				var techdroplist = ["Select Maho"];

				for (var each in techniquelist){
					if (techniquelist[each].type == "Maho"){
						techlist.push (techniquelist[each].title);
						techdroplist.push (techniquelist[each].title+" ["+techniquelist[each].type+" Rank "+techniquelist[each].rank+"] ("+techniquelist[each].ring+") ("+techniquelist[each].reference+")")
					}
				}
					addValuesToSelect("npctechselect"+i,techdroplist,techlist)
			}

			if (mahos !== undefined){
				for (var i = 0; i < mahos.length; i++){
					setSelectedValue(document.getElementById("npctechselect"+i),mahos[i])
					addTechToNpc(i)
					showSelectedTechnique("npctechselect"+i,"npctechinfo"+i)
				}
			}
		},
		effect2: function(){

			var mahos = thisnpc.selectedmahos;
			thisnpc.selectedmahos = [];

			thisnpc.conflictintrigue = thisnpc.conflictintrigue +5;
			updateSpans("conflictintrigue")
			thisnpc.conflictcombat = thisnpc.conflictcombat +5;
			updateSpans("conflictcombat")

			parentdiv = document.getElementById("npctechniquecontainer");
			count = 2 + parentdiv.children.length;

			for (var i = 0; i < count; i++){
				newDiv("npctechwrap"+i,parentdiv,"npcbuilderright")
				newSelect("npctechwrap"+i,"npctechselect"+i,"","showSelectedTechnique('npctechselect"+i+"','npctechinfo"+i+"');addTechToNpc("+i+")")
				newDiv("npctechinfo"+i,"npctechwrap"+i)

				var techlist = ["Select Maho"];
				var techdroplist = ["Select Maho"];

				for (var each in techniquelist){
					if (techniquelist[each].type == "Maho"){
						techlist.push (techniquelist[each].title);
						techdroplist.push (techniquelist[each].title+" ["+techniquelist[each].type+" Rank "+techniquelist[each].rank+"] ("+techniquelist[each].ring+") ("+techniquelist[each].reference+")")
					}
				}
					addValuesToSelect("npctechselect"+i,techdroplist,techlist)
			}

			for (var i = 0; i < mahos.length; i++){
					setSelectedValue(document.getElementById("npctechselect"+i),mahos[i])
					addTechToNpc(i)
					showSelectedTechnique("npctechselect"+i,"npctechinfo"+i)
				}
		}
	},
}
