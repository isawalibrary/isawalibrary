var npcweapons=[
				{name:"Ritual Knife", range:0, damage:2, deadliness:6, qualities:"Concealable, Razor-Edged, Unholy",type:"equipped", origin:"Deadly Bloodspeaker"},
				{name:"Obsidian-Edged Katana",range:1,damage:5,deadliness:9,qualities:"Razor-Edged, Unholy",type:"equipped", origin:"Deadly Bloodspeaker"},
				{name:"Rusty Katana",range:1,damage:4,deadliness:5,qualities:"Ceremonial, Damaged, Razor-Edged",type:"equipped", origin:"Skeleton Bushi, Bandit Experienced"},
				{name:"Crushing Claws and Fangs",range:"1-2",damage:8,deadliness:6,qualities:"None",type:"natural", origin:"Bear"},
				{name:"Tusks",range:0,damage:7,deadliness:7,qualities:"Durable, Razor-Edged",type:"natural", origin:"Boar"},
				{name:"Little Claws",range:0,damage:1,deadliness:2,qualities:"Concealable, Razor-Edged",type:"natural", origin:"Cat"},
				{name:"Vicious Bite",range:0,damage:4,deadliness:2,qualities:"Snaring",type:"natural", origin:"Dog Large, "},
				{name:"Little Bite",range:0,damage:2,deadliness:1,qualities:"Snaring",type:"natural", origin:"Dog Small, Panda Red, Nezumi Pup"},
				{name:"Beak and Talons",range:0,damage:1,deadliness:6,qualities:"None",type:"natural", origin:"Hawk"},
				{name:"Hooves",range:"1-2",damage:6,deadliness:5,qualities:"None",type:"natural", origin:"Horse Rokugani Pony, Horse Shinjo Riding Horse"},
				{name:"Rending Claws and Fangs",range:1,damage:5,deadliness:9,qualities:"Razor-Edged",type:"natural", origin:"Hunting Cat"},
				{name:"Mighty Hooves",range:"1-2",damage:7,deadliness:6,qualities:"None",type:"natural", origin:"Horse Utaku Steed"},
				{name:"Vicious Fangs",range:0,damage:4,deadliness:4,qualities:"Snaring",type:"natural", origin:"Wolf"},
				{name:"Decrepit Yumi",range:"2-5",damage:5,deadliness:3,qualities:"Damaged",type:"equipped", origin:"Skeleton Bushi"},
				{name:"Twisted Talons",range:"1-2",damage:4,deadliness:5,qualities:"Razor-Edged, Unholy",type:"natural", origin:"Bog Hag"},
				{name:"Horrific Maw",range:0,damage:1,deadliness:8,qualities:"None",type:"natural", origin:"Bog Hag"},
				{name:"Small Yari",range:1,damage:5,deadliness:3,qualities:"Wargear",type:"equipped", origin:"Goblin"},
				{name:"Small Yumi",range:"2-3",damage:4,deadliness:3,qualities:"None",type:"equipped", origin:"Goblin"},
				{name:"Crushing Claws",range:"1-2",damage:6,deadliness:8,qualities:"Unholy, Razor-Edged",type:"natural", origin:"Sinister Oni"},
				{name:"Jagged Teeth",range:0,damage:3,deadliness:5,qualities:"Unholy",type:"natural", origin:"Zombie Peasant"},
				{name:"Grasping Hands",range:"0-1",damage:2,deadliness:1,qualities:"Snaring",type:"natural", origin:"Zombie Peasant"},
				{name:"Massive Cudgel",range:2,damage:9,deadliness:5,qualities:"Cumbersome",type:"natural", origin:"Troll Forest"},
				{name:"Rending Grip",range:1,damage:4,deadliness:6,qualities:"None",type:"natural", origin:"Troll Forest"},
				{name:"Majestic Antlers",range:"1-2",damage:4,deadliness:6,qualities:"Ceremonial, Sacred",type:"natural", origin:"Ki-Rin"},
				{name:"Talons of Air",range:"2-3",damage:4,deadliness:7,qualities:"Deals supernatural damage",type:"natural", origin:"Kami Manifest Air"},
				{name:"Stone Fists",range:"0-2",damage:7,deadliness:4,qualities:"Deals physical or supernatural damage",type:"natural", origin:"Kami Manifest Earth"},
				{name:"Blazing Touch",range:"1-3",damage:6,deadliness:6,qualities:"Razor-Edged, Deals supernatural damage",type:"natural",origin:"Kami Manifest Fire"},
				{name:"Smashing Torrent",range:"1-2",damage:7,deadliness:3,qualities:"Snaring, Deals supernatural damage",type:"natural", origin:"Kami Manifest Water"},
				{name:"Claws and Teeth",range:"0-2",damage:7,deadliness:7,qualities:"Unholy",type:"natural", origin:"Gashadokuro"},
				{name:"Barbed Hair",range:"0-2",damage:3,deadliness:6,qualities:"Unholy",type:"natural", origin:"Harionago"},
				{name:"Smothering Papers",range:"0-1",damage:4,deadliness:4,qualities:"Unholy, Snaring",type:"natural", origin:"Kyorinin"},
				{name:"Tentacle Entrails",range:"0-2",damage:5,deadliness:6,qualities:"Snaring, Unholy",type:"natural", origin:"Penanggalan"},
				{name:"Tree Trunk",range:"1-2",damage:8,deadliness:2,qualities:"",type:"equipped", origin:"Ravenous Shadowlands Ogre"},
				{name:"Heavy Masakari",range:"0-1",damage:"4/5",deadliness:"4/6",qualities:"Mundane",type:"equipped", origin:"Revenant"},
				{name:"Biting Teeth",range:"0",damage:4,deadliness:3,qualities:"Razor-Edged, Unholy",type:"natural", origin:"Tsumunagi"},
				{name:"Rotted Fists and Teeth",range:"0",damage:6,deadliness:3,qualities:"Unholy",type:"natural", origin:"Undead Horror"},
				{name:"Crushing Fire",range:"0",damage:4,deadliness:4,qualities:"Unholy",type:"natural", origin:"Wanyudo"},
				{name:"Tangling Vines",range:"0-2",damage:3,deadliness:2,qualities:"Snaring, Unholy",type:"natural", origin:"Fudoshi"},
				{name:"Teeth and Hooves",range:"0-1",damage:4,deadliness:3,qualities:"Unholy",type:"natural", origin:"Onikage"},
				{name:"Ritual Dagger",range:"0",damage:2,deadliness:4,qualities:"Unholy, Razor-Edged",type:"equipped", origin:"Goblin Accursed Priest"},
				{name:"Nezumi dagger",range:"0-1",damage:3,deadliness:3,qualities:"",type:"equipped", origin:"Nezumi Dreamer"},
				{name:"Nezumi knife",range:"0",damage:2,deadliness:4,qualities:"Concealable, Mundane",type:"equipped", origin:"Nezumi Rememberer"},
				{name:"Nezumi Claws and Teeth",range:"0",damage:2,deadliness:3,qualities:"",type:"natural", origin:"Nezumi Feral"},
				{name:"Sharp Little Teeth",range:"0",damage:1,deadliness:2,qualities:"Razor-Edged",type:"natural", origin:"Fox"},
				{name: "Tentacle Arms", range:"0-5", damage:"8", deadliness:"6", qualities:"", type:"natural", origin:"Akkorokamui"},
				{name: "Scorpion Claws", range:"0", damage:"4", deadliness:"3", qualities:"", type:"natural", origin:"Amikiri"},
				{name: "Tail Stinger", range:"0-1", damage:"3", deadliness:"6", qualities:"", type:"natural", origin:"Amikiri"},
				{name: "None", range:"0", damage:"0", deadliness:"0", qualities:"", type:"natural", origin:""},
				{name: "Arcing Lightning", range:"0-4", damage:"4", deadliness:"5", qualities:"deals Supernatural damage", type:"natural", origin:"Hinotama"},
				{name: "Razor Teeth", range:"0", damage:"7", deadliness:"9", qualities:"Razor-Edged", type:"natural", origin:"Isonade"},
				{name: "Razor Claws", range:"0", damage:"4", deadliness:"6", qualities:"Razor-Edged", type:"natural", origin:"Kappa Mischievous"},
				{name: "Deadly Claws", range:"0-1", damage:"5", deadliness:"4", qualities:"Razor-Edged, Unholy", type:"natural", origin:"Rakshasa"},
				{name: "Cutting Edges", range:"0", damage:"1", deadliness:"2", qualities:"", type:"natural", origin:"Shikigami"},
				{name: "Clawed Talon", range:"0-1", damage:"3", deadliness:"5", qualities:"Razor-Edged", type:"natural", origin:"Basan"},
				{name: "Slicing Winds", range:"0-2", damage:"3", deadliness:"7", qualities:"Deals supernatural damage.", type:"natural", origin:"Kami Manifest Air Tiny"},
				{name: "Rising Rock", range:"1-3", damage:"5", deadliness:"5", qualities:"Deals physical or supernatural damage.", type:"natural", origin:"Kami Manifest Earth Tiny"},
				{name: "Barbed Tail", range:"2", damage:"10", deadliness:"5", qualities:"Razor-Edged", type:"natural", origin:"Isonade"},
				{name: "Searing Reach", range:"1-2", damage:"4", deadliness:"5", qualities:"deals supernatural damage.", type:"natural", origin:"Tiny Manifest Fire Kami"},
				{name: "Damaging Waves", range:"1-2", damage:"5", deadliness:"3", qualities:"deals supernatural damage", type:"natural", origin:"Tiny Manifest Water Kami"},
				{name: "Cruel Talons", range:"0-1", damage:"5", deadliness:"4", qualities:"Unholy", type:"natural", origin:"Vile Trickster Lesser Oni"},	
				{name: "Obsidian Bite", range:"0", damage:"4", deadliness:"8", qualities:"Razor-Edged, Unholy", type:"natural", origin:"Obsidian Jaws"},	
				{name: "Defiled Axe", range:"1-2", damage:"10", deadliness:"7", qualities:"Durable, Razor-Edged, Unholy", type:"equipped", origin:"Monstrous Warrior Powerful Oni"},
				{name: "Hellish Talons", range:"1-2", damage:"9", deadliness:"8", qualities:"Razor-Edged, Unholy", type:"natural", origin:"Warlord of Jigoku Powerful Oni"},
				{name: "Bone Naginata", range:"2", damage:"6", deadliness:"7", qualities:"Durable, Razor-Edged, Unholy", type:"equipped", origin:"Hellish Sorcerer Powerful Oni"},
				{name: "Corrupted Tetsubo", range:"1-2", damage:"8", deadliness:"3", qualities:"Durable, Unholy", type:"equipped", origin:"Savage Brute Lesser Oni"},
				];
var npcarmor=[
				{armor:"Rags",phys:0,sup:0,qualities:"Mundane",type:"equipped", origin:"Humble Peasant"},
				{armor:"None",phys:0,sup:0,qualities:"None",type:"natural", origin:""},
				{armor:"Sorcerous Raiment",phys:2,sup:4,qualities:"Unholy",type:"equipped", origin:"Deadly Bloodspeaker"},
				{armor:"Thick Hide",phys:4,sup:0,qualities:"None",type:"natural", origin:"Bear, Boar"},
				{armor:"Thick Fur",phys:2,sup:0,qualities:"None",type:"natural", origin:"Hunting Cat"},
				{armor:"Hide",phys:2,sup:0,qualities:"None",type:"natural", origin:"Dog Large, Horse Rokugani Pony, Horse Shinjo Riding Horse, Wolf"},
				{armor:"Hide and Barding",phys:4,sup:0,qualities:"None",type:"natural", origin:"Horse, Utaku Steed"},
				{armor:"Soft Fur",phys:0,sup:0,qualities:"Resplendant, Lovely to Touch",type:"natural", origin:"Cat, Dog Small, Fox, Panda Red"},
				{armor:"Ancient Armor",phys:3,sup:0,qualities:"Wargear",type:"equipped", origin:"Skeleton Bushi"},
				{armor:"Fresh Skin",phys:3,sup:5,qualities:"Unholy",type:"natural", origin:"Bog Hag"},
				{armor:"Demonic Hide",phys:5,sup:5,qualities:"Unholy",type:"natural", origin:"Sinister Oni"},
				{armor:"Decaying Flesh",phys:2,sup:0,qualities:"None",type:"natural", origin:"Zombie Peasant"},
				{armor:"Scaled Hide",phys:1,sup:1,qualities:"None",type:"natural", origin:"Troll Forest"},
				{armor:"Magical Hide",phys:3,sup:3,qualities:"None",type:"natural", origin:"Ki-Rin"},
				{armor:"Misty Mantle",phys:6,sup:0,qualities:"Sacred",type:"natural", origin:"Kami Manifest Air"},
				{armor:"Rocky Hide",phys:5,sup:5,qualities:"Unholy",type:"natural", origin:"Kami Manifest Earth"},
				{armor:"Corona of Flames",phys:3,sup:0,qualities:"None",type:"natural", origin:"Kami Manifest Fire"},
				{armor:"Enshrouding Fog",phys:3,sup:4,qualities:"None",type:"natural", origin:"Kami Manifest Water"},
				{armor:"Bone Plating",phys:3,sup:0,qualities:"Unholy",type:"natural", origin:"Gashadokuro"},
				{armor:"Layers of Paper",phys:6,sup:6,qualities:"Unholy",type:"natural", origin:"Kyorinin"},
				{armor:"Body Shell",phys:3,sup:0,qualities:"",type:"natural", origin:"Penanggalan"},
				{armor:"Numerous Hides",phys:2,sup:0,qualities:"",type:"equipped", origin:"Ravenous Shadowlands Ogre"},
				{armor:"Rusted Armor",phys:2,sup:0,qualities:"",type:"equipped", origin:"Revenant"},
				{armor:"Slimy Skin",phys:1,sup:0,qualities:"",type:"natural", origin:"Tsumunagi"},
				{armor:"Rotting Flesh",phys:3,sup:0,qualities:"",type:"natural", origin:"Undead Horror"},
				{armor:"Wooden Form",phys:3,sup:1,qualities:"",type:"natural", origin:"Wanyudo"},
				{armor:"Outer Husk",phys:3,sup:0,qualities:"",type:"natural", origin:"Fudoshi"},
				{armor:"Corrupted armor",phys:2,sup:1,qualities:"Unholy",type:"equipped", origin:"Dark Moto Bushi, Onikage"},
				{armor:"Defiled priestly robes",phys:1,sup:2,qualities:"Unholy",type:"equipped", origin:"Goblin Accursed Priest, Harionago"},
				{armor:"Nezumi vestments",phys:2,sup:2,qualities:"",type:"equipped", origin:"Nezumi Dreamer"},
				{armor:"Nezumi armour",phys:2,sup:1,qualities:"Wargear",type:"equipped", origin:"Nezumi Warrior"},
				{armor:"Rememberer's robes",phys:1,sup:2,qualities:"Ceremonial",type:"equipped", origin:"Nezumi Rememberer"},
				{armor:"Fur",phys:1,sup:0,qualities:"",type:"natural", origin:"Nezumi Feral"},
				{armor: "Supernatural Hide", phys:"3", sup:"3", qualities:"", type:"natural", origin:"Akkorokamui"},
				{armor: "Chitinous Hide", phys:"3", sup:"0", qualities:"", type:"natural", origin:"Amikiri"},
				{armor: "Electric Form", phys:"10", sup:"0", qualities:"", type:"natural", origin:"Hinotama"},
				{armor: "Turtle Shell", phys:"4", sup:"2", qualities:"", type:"natural", origin:"Kappa Mischievous"},
				{armor: "Unholy Hide", phys:"3", sup:"2", qualities:"Unholy", type:"equipped", origin:"Rakshasa"},
				{armor: "Cloak of Air", phys:"3", sup:"2", qualities:"None", type:"natural", origin:"Kami Manifest Air Tiny"},
				{armor: "Skin of Stone", phys:"4", sup:"0", qualities:"Sacred", type:"natural", origin:"Kami Manifest Earth Tiny"},
				{armor: "Ghostly Energy", phys:"10", sup:"0", qualities:"", type:"natural", origin:"Furiribi"},
				{armor: "Blazing Body", phys:"2", sup:"0", qualities:"", type:"natural", origin:"Tiny Manifest Fire Kami"},
				{armor: "Malleable Form", phys:2, sup:2, qualities:"", type:"natural", origin:"Tiny Manifest Water Kami"},
				{armor: "Demonic Hide", phys:2, sup:2, qualities:"Unholy", type:"natural", origin:"Vile Trickster Lesser Oni"},	
				{armor: "Thick Demonic Hide", phys:3, sup:3, qualities:"Unholy", type:"natural", origin:"Savage Brute Lesser Oni"},	
				{armor: "Demonic Hide and Scavenged Armor", phys:"4", sup:"3", qualities:"Unholy", type:"equipped", origin:"Monstrous Warrior Powerful Oni"},
				{armor: "Demonic Hide and Pit-Forged Armor", phys:"5", sup:"5", qualities:"Unholy", type:"natural", origin:"Warlord of Jigoku Powerful Oni"},				
				];

var onipowers = {
	bonycarapace:{
		name: "Bony Carapace",
		rank1:"Rank 1: The oni is covered in thick hide, bony plates, or some other form of natural armor beyond even the substantial protection typical of its kind.  This increases the oni's physical resistance by 2 and its supernatural resistance by 1.",
		rank2:"Subsequent Ranks: Increases the oni's physical resistance by 1.",
		effect: function(){
				thisnpc.conflictcombat = thisnpc.conflictcombat +2;
				updateSpans("conflictcombat")
				thisnpc.physres = thisnpc.physres +2;
				updateSpans("physres")
			
				removeFromOniArray("Serpentine Speed")
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
		rank1: "Rank 1: Some oni speak with honeyed voices at odds with their hideous appearance, giving them the ability to cajole and coerce even stalwart samurai with their words.  As a Scheme action, the oni may attempt to influence the mind of a listener by making a Social (Fire) check with a TN equal to the target's vigilance. If the oni succeeds, the target suffers 1 strife, plus 1 strife for every 2 bonus successes. If the oni is aware of the target's ninjo, it adds 4 bonus successes to the check if it succeeds. A character who becomes compromised in this manner must spend 1 Void point or immediately unmask.",
		rank2: "Reduce the TN of the check by 1 (to a minimum of 0).",
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
		rank1:"By some vile art, the oni is able to act as if it is many in number. Splitting their form in this manner usually weakens them, but some can bend a suitable substitute to their will, striking through their shadow or another sinister proxy.  Once per scene, the oni may perform a second action at Initiative 0.",
		rank2:"The oni may use this power one addition time per scene. It can only use it once per round.",
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
	humanmask:{
		name:"Human Mask",
		rank1:"The most cunning of oni sometimes transform themselves into human guise. Though imperfect, these disguises are often capable of fooling the unwary and allow the oni to close with a victim or to bypass a foolish sentry. Closer scrutiny often reveals the truth, however, as even the cleverest of oni won't follow (or comprehend) the tenets of Bushido properly. Less cunning oni, with little or no understanding of how to act human, behave in bizarre fashions that even gaijin would notice as not falling within Rokugani norms.  As a Scheme action, oni with this power can weave an illusion of Tainted sorcery to change its apparent nature. It may only initiate this illusion while unseen by others. While under the illusion, the oni appears to be a normal human unafflicted by the Taint, its silhouette is reduced to 2, and it is unaffected by its Sickening Visage disadvantage. However, some element of the oni's inhuman nature remains, allowing careful observers to note something wrong by performing a TN 4 Medicine (Air) or Theology (Earth) check. Outside of the Shadowlands, the oni's illusions are harder to maintain, reducing the TN of the check to 3. Success reveals the horn carefully hidden in hair, the fire in the oni's eyes, or some other tell that reveals it as an inhuman monster. The oni may dismiss the illusion as a Support action and typically does so before engaging in combat.",
		rank2:"",
		effect:function(){
			thisnpc.conflictintrigue = thisnpc.conflictintrigue +4;
			updateSpans("conflictintrigue")			

			removeFromOniArray("Human Mask")
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

			removeFromOniArray("Illusion Master")			
		},
	},
	obsidianjaws:{
		name:"Obsidian Jaws",
		rank1:"The hideous visages of some oni are further marred by massive jaws filled with teeth of obsidian shards.  The oni gains the following unarmed attack profile: Obsidian Bite (Range 0, Damage 4, Deadliness 8, Razor-Edged, Unholy).",
		rank2:"After the oni inflicts a critical strike using this profile, it removes 2 fatigue per additional rank purchased.",
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
		rank1:"The secret desires of a samurai's heart are as playthings to an oni, who may be able to see hidden weakness as if written in burning letters on the samurai's face or to smell the wants and needs the samurai keeps hidden as clearly as wafting perfume.  As a Scheme Action, the oni may make a Social (Air) check targeting one character in the scene with a TN equal to the target's vigilance. Success reveals the target's ninjo to the oni, including contextual details. For example, an oni using this power against a character with a ninjo of secret love would learn not only about this hidden desire, but also whom the character longs for, what their love looks like, and similar information as the GM deems appropriate. This does not in and of itself grant the oni power over the target, but may help the oni in other ways, such as empowering the Captivating Voice power (see page 137) or enabling it to further a secret scheme. Characters who have their secrets exposed to the oni in this way have no way of knowing the extent of what it learned.",
		rank2:"Reduce the TN of the check by 1 (to a minimum of 0).",
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
		rank1:"Rank 1: Increases the oni's focus by 2 and decrease the TN of Fitness checks it makes by 1 to a minimum of 1.",
		rank2:"Subsequent Ranks: Increase the oni's focus by 2.",
		effect:function(){
			thisnpc.conflictcombat = thisnpc.conflictcombat +2;
			updateSpans("conflictcombat")
			thisnpc.focus = thisnpc.focus +2;
			updateSpans("focus")

			removeFromOniArray("Bony Carapace")	
		},		
		effect2: function(){
			this.effect()			
		}
	},
	shadowlandsvenom:{
		name:"Shadowlands Venom",
		rank1:"The oni's weapons or attacks carry the threat of deadly venom, smeared on a weapon or injected by its claws or bite.  After the oni inflicts the Bleeding condition on a target, that target also suffers the Lightly Wounded condition for one ring of the oni's choice.",
		rank2:"Increase the TN of checks to resist critical strikes inflicted by this oni by 1.",
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
			removeFromOniArray("Stolen Name")	
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
			newSelect("onipowerwrap"+i,"onipowerselect"+i,"","selectOniPower("+i+")")
			newDiv("onipowerinfo"+i,"onipowerwrap"+i,"npcright mb5")
			}
		
		}
	},
	taintedsorcery:{
		name:"Tainted Sorcery",
		rank1:"Some of the most fearsome oni wield powerful Tainted sorcery akin to maho, cowing the kansen into submission or drawing on the power of Jigoku instead of enticing the corrupted spirits with blood offerings.  An oni with this power gains up to three maho techniques, chosen from Core 224-225 and from Shadowlands 118-121. When using these powers, the oni never suffers spiritual backlash, nor does it take damage for channeling the techniques. For the purposes of using maho, all five of the oni's rings count as having the Shadowlands Taint disadvantage attached.",
		rank2:"The oni may take 2 additional maho techniques.",
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



