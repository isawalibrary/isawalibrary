class Ronin extends Character {
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
		name = document.getElementById("npcfamilyselect").value+" "+name;
		document.getElementById("npcnameinput").value = name
		this.name = name;
	}
	setRings(){
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

		var	x = getRndInteger(1,2);

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
}
