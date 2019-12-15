var clans = ["Crab","Crane","Dragon","Lion","Mantis","Phoenix","Scorpion","Unicorn","Imperial","Minor","Other"];

var families = {
	Crab:{	clanring:{Earth:+1},
			clanskill:"Martial",
			clanstatus:30,
			weapons:["Tetsubo","Otsuchi",],
			armor:["Ashigaru Armor","Lacquered Armor"],
			advantages:["Inured to Horrors (Fire) [Scholar, Martial; Mental]",
					"Veteran of the Shadowlands (Earth) [Scholar, Martial; Mental]",
					"Blood of Osano-Wo (Earth) [Martial, Trade; Spiritual]",
					"Famously Courageous (Fire) [Martial, Social; Interpersonal]",
					],
			disadvantages:[
					"Bluntness (Air) [Social; Interpersonal]",
					"Shadowlands Taint (Earth) [Martial, Social; Curse, Physical, Spiritual]",
					"I don't get this art... (Water) [Social, Artisan; Interpersonal]",
					"Old Battle Wound (Water) [Martial, Trade; Physical, Injury]",
					"Ends Justify The Means (Void) [Scholar; Mental]",
					],
		hida: {
			name:'Hida',
			clan:'Crab',
			ring1:"Earth",
			ring2:"Fire",
			advantages:["Large Stature (Earth) [Martial, Trade; Physical]",
			"Bishamon's Blessing (Water) [Martial, Trade; Physical, Spiritual]",
			],
			disadvantages:["Slow Moving (Water) [Martial; Physical]",
			"Naive to Trickery (Air) [Social; Mental]",
			"Wall Weary (Earth) [Social; Interpersonal]",
			],
			skill1:"Command",
			skill2:"Tactics",
			glory:44,
			wealth:4,
			},
		hiruma: {
			name:'Hiruma',
			clan:'Crab',
			ring1:"Air",
			ring2:"Water",
			advantages:["Careful Skulker (Air) [Martial; Physical]",
				"Light Sleeper (Water) [Martial, Trade; Physical]",
			],
			disadvantages:["Driven (Water) [Any; Mental]",
			"Wall Weary (Earth) [Social; Interpersonal]",
			],
			skill1:"Skulduggery",
			skill2:"Survival",
			glory:39,
			wealth:3,
			},
		kaiu: {
			name:'Kaiu',
			clan:'Crab',
			ring1:"Earth",
			ring2:"Fire",
			advantages:["Makes Things Work (Fire) [Artisan; Physical]",
			"Brilliant Theorist (Fire) [Scholar; Mental]",
			],
			disadvantages:["Always Taking Things Apart (Water) [Scholar; Mental]",
			],
			skill1:"Smithing",
			skill2:"Labor",
			glory:40,
			wealth:5,
			},
		kuni: {
			name:'Kuni',
			clan:'Crab',
			ring1:"Earth",
			ring2:"Void",
			advantages:["Knows the Enemy (Earth) [Scholar; Mental]",
			],
			disadvantages:["Shadowlands Taint (Fire) [Scholar, Social; Curse, Physical, Spiritual]",
				"Sees Maho in Every Shadow (Water) [Any; Mental]",
				"Fascinated by Shadowlands Beasts (Fire) [Any; Mental]",
				"Wall Weary (Earth) [Social; Interpersonal]",
				"Benten's Curse (Air) [Social; Interpersonal, Spiritual]",
			],
			skill1:"Medicine",
			skill2:"Theology",
			glory:40,
			wealth:4,
			},
		yasuki: {
			name:'Yasuki',
			clan:'Crab',
			ring1:"Air",
			ring2:"Water",
			advantages:["Daikoku's Blessing (Water) [Social; Interpersonal]",
				"Height of Fashion (Fire) [Artisan, Social; Interpersonal]",
			],
			disadvantages:["Penny Pincher (Water) [Social; Mental]",
				"Accustomed to Luxury (Earth) [Martial, Social, Trade; Interpersonal]",
			],
			skill1:"Commerce",
			skill2:"Design",
			glory:39,
			wealth:10,
			},
		},
	Crane:{	
		clanring:{Air:+1},
		clanskill:"Artisan",
		clanstatus:35,
		weapons:["Katana","Wakizashi"],
		armor:["Ceremonial Robes"],
		advantages:["Height of Fashion (Fire) [Artisan, Social; Interpersonal]",
				"Benten's Blessing (Air) [Social; Interpersonal, Spiritual]",
				"In On The Good Gossip (Water) [Social; Interpersonal]",
				"Unflappable Poise (Air) [Social; Interpersonal]",
				],
		disadvantages:["Accustomed to Luxury (Earth) [Martial, Social, Trade; Interpersonal]",
				"Pacifist (Fire) [Martial; Mental, Physical]",
				"Vanity (Air) [Social; Mental]",
				"Purple Mist of Entitlement (Fire) [Social; Interpersonal]",
				],

		asahina: {
		name:'Asahina',
		clan:'Crane',
			ring1:"Water",
			ring2:"Void",
			advantages:[
			"Dedicated Artiste (Fire) [Artisan, Social; Interpersonal]",
			],
			disadvantages:["Gentle Heart (Fire) [Any; Interpersonal]",
				"Meek (Fire) [Social; Interpersonal]",
				"Easily Scandalized (Earth) [Social; Interpersonal]",
				"Jurojin's Curse (Void) [Martial, Trade; Physical, Spiritual]",
			],
			skill1:"Aesthetics",
			skill2:"Theology",
			glory:40,
			wealth:6,
		},
		daidoji: {
		name:'Daidoji',
		clan:'Crane',
			ring1:"Earth",
			ring2:"Water",
			advantages:["A Practical Mind (Water) [Any; Interpersonal]",
			],
			disadvantages:[
			],
			skill1:"Fitness",
			skill2:"Tactics",
			glory:40,
			wealth:7,
		},
		doji: {
		name:'Doji',
		clan:'Crane',
			ring1:"Air",
			ring2:"Water",
			advantages:["Friends in All Places (Air) [Social; Interpersonal]",
			"Owed Favours (Water) [Social; Interpersonal]",
			],
			disadvantages:["Easily Scandalized (Earth) [Social; Interpersonal]",
			"Perfectionist (Water) [Any; Physical, Mental]",
			],
			skill1:"Courtesy",
			skill2:"Design",
			glory:44,
			wealth:8,
		},
		kakita: {
		name:'Kakita',
		clan:'Crane',
			ring1:"Air",
			ring2:"Fire",
			advantages:["Dedicated Artiste (Fire) [Artisan, Social; Interpersonal]",
			],
			disadvantages:["Glory Hunter (Water) [Any; Interpersonal]",
			"Hypercompetitive (Water) [Social; Mental]",
			"Perfectionist (Water) [Any; Physical, Mental]",
			],
			skill1:"Aesthetics",
			skill2:"Meditation",
			glory:44,
			wealth:7,
		},
		},
	Dragon:{
			clanring:{Fire:+1},
			clanskill:"Scholar",
			clanstatus:30,
			weapons:["Bo","Ji"],
			armor:["Sanctified Robes"],
			advantages:["Mysterious Personage (Void) [Social; Interpersonal]",
				"Friend of the Brotherhood (Water) [Social; Interpersonal]",
				"Level Headed (Earth) [Martial, Social; Interpersonal, Mental]",
				],
			disadvantages:["Ascetic (Void) [Social; Mental]",
				"Irresponsible Personage (Earth) [Social; Interpersonal]",
				"Rumors of Worldly Attachments (Void) [Social; Interpersonal]",
				"Detached and Aloof (Water) [Social; Interpersonal, Mental]",
				],

		agasha: {
		name:'Agasha',
		clan:'Dragon',
			ring1:"Fire",
			ring2:"Void",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"Medicine",
			skill2:"Smithing",
			glory:40,
			wealth:4,
		},
		kitsuki: {
		name:'Kitsuki',
		clan:'Dragon',
			ring1:"Air",
			ring2:"Water",
			advantages:["Perceptive Mind (Air) [Scholar, Social; Mental]",
			],
			disadvantages:[
			],
			skill1:"Government",
			skill2:"Sentiment",
			glory:44,
			wealth:6,		},
		mirumoto: {
		name:'Mirumoto',
		clan:'Dragon',
			ring1:"Earth",
			ring2:"Water",
			advantages:["Ambidextrous (Air) [Martial; Physical]",
			],
			disadvantages:[
			],
			skill1:"Fitness",
			skill2:"Tactics",
			glory:44,
			wealth:5,
		},
		togashi: {
		name:'Togashi',
		clan:'Dragon',
			ring1:"Earth",
			ring2:"Void",
			advantages:[
			],
			disadvantages:["Head in the Clouds (Void) [Social; Mental]",
			],
			skill1:"Fitness",
			skill2:"Theology",
			glory:45,
			wealth:3,		},
		},
	Lion:{
			clanring:{Water:+1},
			clanskill:"Martial",
			clanstatus:35,
			weapons:[],
			armor:["Ashigaru Armor"],
			advantages:["Intense and Sincere! (Fire) [Social; Interpersonal]",
						"Famed for a Valiant Battle  (Water) [Social; Interpersonal]",
				],
			disadvantages:[
				"Painfully Honest (Air) [Social: Mental]",
				"Unbending Pride (Water) [Social; Mental]",
				"Idealistic (Air) [Social: Mental]",
				"Old War Wound (Air) [Martial, Trade; Physical, Injury]",
				"Craves Glory (Earth) [Social; Interpersonal]",
				],

		akodo: {
		name:'Akodo',
		clan:'Lion',
			ring1:"Air",
			ring2:"Earth",
			advantages:["Sworn to Bushido (Earth) [Social; Interpersonal]",
			],
			disadvantages:["Easily Scandalized (Earth) [Social; Interpersonal]",
				"Prim and Proper (Fire) [Social; Interpersonal]",
				"Stodgy Traditionalist (Fire) [Scholar, Social; Mental]",
			],
			skill1:"Command",
			skill2:"Government",
			glory:44,
			wealth:5,		},
		ikoma: {
		name:'Ikoma',
		clan:'Lion',
			ring1:"Air",
			ring2:"Water",
			advantages:["Keen Genealogist (Earth) [Scholar; Mental]",
			"Stodgy Traditionalist (Fire) [Scholar, Social; Mental]",
			],
			disadvantages:[
			],
			skill1:"Composition",
			skill2:"Performance",
			glory:40,
			wealth:5,		},
		kitsu: {
		name:'Kitsu',
		clan:'Lion',
			ring1:"Void",
			ring2:"Water",
			advantages:["Stodgy Traditionalist (Fire) [Scholar, Social; Mental]",
			],
			disadvantages:[
			],
			skill1:"Meditation",
			skill2:"Theology",
			glory:40,
			wealth:4,		},
		matsu: {
		name:'Matsu',
		clan:'Lion',
			ring1:"Earth",
			ring2:"Fire",
			advantages:["Bishamon's Blessing (Water) [Martial, Trade; Physical, Spiritual]",
			],
			disadvantages:["Hot-Tempered (Water) [Social: Mental]",
			],
			skill1:"Command",
			skill2:"Fitness",
			glory:44,
			wealth:5,		},
		},
	Phoenix:{
			clanring:{"Void":+1,},
			clanskill:"Scholar",
			clanstatus:30,
			weapons:["Yumi"],
			armor:["Sanctified Robes"],
			advantages:["Fukurokujin's Blessing (Fire) [Scholar; Mental, Spiritual]",		
					"Just and Idealistic (Earth) [Social; Interpersonal]",
					"Widely Versed in Esoteric Lore (Fire) [Scholar; Mental]",
					"Single-minded Purpose (Void) [Scholar; Mental]",
					],
			disadvantages:[
					"Knows Better Than You (Water) [Scholar, Social; Mental]",
					"Always Has An Opinion (Water) [Scholar, Social; Mental]",
					"Narcissistic and Pompous (Water) [Social; Interpersonal]",
					"Pacifist (Fire) [Martial; Mental, Physical]",
					],
		asako: {
		name:'Asako',
		clan:'Phoenix',
			ring1:"Air",
			ring2:"Fire",
			advantages:["Incisive Scrutiny (Air) [Social; Mental, Interpersonal]",
						"Bureaucratic Wizard (Fire) [Scholar; Mental]",
			],
			disadvantages:["Sees Maho in Every Shadow (Water) [Any; Mental]",
					"Stodgy Traditionalist (Fire) [Scholar, Social; Mental]",
					"Easily Scandalized (Earth) [Social; Interpersonal]",
			],
			skill1:"Culture",
			skill2:"Sentiment",
			glory:40,
			wealth:5,		},
		isawa: {
		name:'Isawa',
		clan:'Phoenix',
			ring1:"Fire",
			ring2:"Void",
			advantages:["Brilliant Theorist (Fire) [Scholar; Mental]",
						"Driven to Seek Understanding (Earth) [Scholar; Mental]",
						"Lateral Thinking (Fire) [Scholar; Mental]",
			],
			disadvantages:["Drawn to the Flame (Fire) [Scholar; Mental]",
			"Hypercompetitive (Water) [Social; Mental]",
			"Impatient (Fire) [Any; Mental]",
			"Easily Scandalized (Earth) [Social; Interpersonal]",
			],
			skill1:"Meditation",
			skill2:"Theology",
			glory:44,
			wealth:5,		},
		shiba: {
		name:'Shiba',
		clan:'Phoenix',
			ring1:"Air",
			ring2:"Void",
			advantages:["Loyal Protector",
				"Benten's Blessing (Air) [Social; Interpersonal, Spiritual]",
				"Dedicated Artiste (Fire) [Artisan, Social; Interpersonal]",
			],
			disadvantages:["Naive to Trickery (Air) [Social; Mental]",
			],
			skill1:"Fitness",
			skill2:"Theology",
			glory:40,
			wealth:4,		},
		kaito: {
		name:'Kaito',
		clan:'Phoenix',
			ring1:"Earth",
			ring2:"Water",
			advantages:["Down to earth",
			"Lateral Thinking (Fire) [Scholar; Mental]",
			],
			disadvantages:[
			],
			skill1:"Meditation",
			skill2:"Tactics",
			glory:40,
			wealth:5,		},
		},
Scorpion:{
		clanring:{"Air":+1},
			clanskill:"Social",
			clanstatus:35,
			weapons:["Chokuto","Shuriken"],
			armor:["Concealed Armor"],
			advantages:["Keeper of Secrets (Void) [Social, Scholar; Mental, Interpersonal]",
				"Underworld Contacts (Water) [Social; Interpersonal]",
				"Trained in Poisons (Water) [Scholar; Mental]",
				"Heartless (Water) [Social; Interpersonal]",
				],
			disadvantages:["Whispers of Treachery (Air) [Social; Interpersonal, Infamy]",
				"Whispers of Shady Dealings",
				"Has Beloved Family (Fire) [Social; Interpersonal]",
				"Distrustful (Void) [Social; Interpersonal]",
				"Vengeful When Slighted (Earth) [Social; Interpersonal]",
					],
		bayushi: {
		name:'Bayushi',
		clan:'Scorpion',
			ring1:"Air",
			ring2:"Fire",
			advantages:["Dangerous Allure (Fire) [Social; Physical, Interpersonal]",
			"Benten's Blessing (Air) [Social; Interpersonal, Spiritual]",
			],
			disadvantages:["Always Scheming (Water) [Social; Interpersonal]",
				"Vengeful When Slighted (Earth) [Social; Interpersonal]",
			],
			skill1:"Courtesy",
			skill2:"Performance",
			glory:40,
			wealth:6,		},
		shosuro: {
		name:'Shosuro',
		clan:'Scorpion',
			ring1:"Air",
			ring2:"Void",
			advantages:["Consummate Professional (Any; Mental)",
						"Unmemorable Face (Earth) [Social; Physical, Interpersonal]",
						"Subtle Observer (Water) [Social; Interpersonal]",
			],
			disadvantages:[
			],
			skill1:"Design",
			skill2:"Theology",
			glory:40,
			wealth:6,		},
		soshi: {
		name:'Soshi',
		clan:'Scorpion',
			ring1:"Air",
			ring2:"Void",
			advantages:["Unmemorable Face (Earth) [Social; Physical, Interpersonal]",
			],
			disadvantages:["Jurojin's Curse (Void) [Martial, Trade; Physical, Spiritual]",
			],
			skill1:"Design",
			skill2:"Theology",
			glory:40,
			wealth:6,		},
		yogo: {
		name:'Yogo',
		clan:'Scorpion',
			ring1:"Earth",
			ring2:"Void",
			advantages:["Consummate Professional (Any; Mental)",
			],
			disadvantages:["Cold and Withdrawn (Fire) [Social; Interpersonal]",
						"Vengeful When Slighted (Earth) [Social; Interpersonal]",
						"Benten's Curse (Air) [Social; Interpersonal, Spiritual]",
			],
			skill1:"Composition",
			skill2:"Theology",
			glory:39,
			wealth:4,		},
		},
Unicorn:{
		clanring:{"Water":+1},
			clanskill:"Trade",
			clanstatus:30,
			weapons:["Scimitar",],
			armor: ["Ashigaru Armor"],
			advantages: [
				"Expert Rider (Water) [Trade, Martial; Physical]",
				"Friendly and Gregarious (Water) [Social; Interpersonal]",
				"Way of the Land (Water) [Trade, Martial; Physical]",
				"Famously Compassionate (Water) [Social; Interpersonal]",
				],
			disadvantages: ["Gaijin Heritage (Fire) [Social; Mental, Interpersonal or Physical]",
				"No Time For Etiquette (Air) [Social; Interpersonal]",
				"Bad with Animals (Water) [Social; Interpersonal, Infamy]",
				],
		ide: {
		name:'Ide',
		clan:'Unicorn',
			ring1:"Earth",
			ring2:"Water",
			advantages:["Daikoku's Blessing (Water) [Social; Interpersonal]",
			"Benten's Blessing (Air) [Social; Interpersonal, Spiritual]",
			"Widely Traveled (Water) [Scholar, Trade; Mental]",
			],
			disadvantages:["Materialism (Void) [Social; Mental]",
			],
			skill1:"Commerce",
			skill2:"Courtesy",
			glory:40,
			wealth:9,		},
		iuchi: {
		name:'Iuchi',
		clan:'Unicorn',
			ring1:"Air",
			ring2:"Void",
			advantages:[
			],
			disadvantages:["Outlandish Customs (Water) [Social; Mental]",
			],
			skill1:"Meditation",
			skill2:"Theology",
			glory:40,
			wealth:5,		},
		moto: {
		name:'Moto',
		clan:'Unicorn',
			ring1:"Earth",
			ring2:"Fire",
			advantages:[
			],
			disadvantages:["Moto Curse (Void) [Social; Mental, Curse]",
			"Outlandish Customs (Water) [Social; Mental]",
			],
			skill1:"Command",
			skill2:"Survival",
			glory:40,
			wealth:6,		},
		shinjo: {
		name:'Shinjo',
		clan:'Unicorn',
			ring1:"Fire",
			ring2:"Water",
			advantages:[
			"Widely Traveled (Water) [Scholar, Trade; Mental]",
			],
			disadvantages:[
			],
			skill1:"Sentiment",
			skill2:"Survival",
			glory:44,
			wealth:8,		},
		utaku: {
		name:'Utaku',
		clan:'Unicorn',
			ring1:"Earth",
			ring2:"Fire",
			advantages:["Paragon of Honor (Earth) [Social, Martial; Mental]",
				"Widely Traveled (Water) [Scholar, Trade; Mental]",
			],
			disadvantages:["Naive to Trickery (Air) [Social; Mental]",
			],
			skill1:"Survival",
			skill2:"Tactics",
			glory:44,
			wealth:6,			},},
	Mantis:{
		clanring:{"Water":+1},
			clanskill:"Trade",
			clanstatus:25,
			weapons:["Butterfly Sword","Kama","Rochin","Tinbe"],
			armor:["Sailor's Garb","Shark Leather Armor"],
			advantages: ["Seasoned Seafarer (Water) [Trade, Scholar; Mental, Physical]",
						"Hero of the People (Earth) [Trade, Social; Interpersonal]",
						"Surefooted (Air) [Martial; Physical]",
						"Widely Traveled (Water) [Scholar, Trade; Mental]",
						"Daikoku's Blessing (Water) [Social; Interpersonal]",
			],				
			disadvantages: ["Whispers of Avarice (Air) [Social; Mental, Interpersonal]",
							"Penny Pincher (Water) [Social; Mental]",
			],
		mantis: {
		name:'Families of the FLeet',
		clan:'Mantis',
			ring1:"Fire",
			ring2:"Water",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"Commerce",
			skill2:"Survival",
			glory:36,
			wealth:7,		},
		},
	Imperial:{
		clanring: {"Earth":+1},
		clanskill: "Social",
		weapons:[],
		armor:["Ceremonial Robes","Lacquered Armor",],			
		advantages: ["Blessed Lineage (Void) [Social; Spiritual]",
				"Resourceful Bureaucrat (Air) [Scholar, Social; Interpersonal, Mental]",
				"Powerful Connections (Water) [Social; Interpersonal]",
		],
		disadvantages: ["Naivete (Air) [Social; Mental]",
					"Spoiled (Water) [Social; Interpersonal]",
					"Easily Scandalized (Earth) [Social; Interpersonal]",
					],
		miya: {
			name:'Miya',
			clan:'Imperial',
			ring1:"",
			ring2:"",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"",
			skill2:"",
			glory:"",
			wealth:"",
		},
		otomo: {
			name:'Otomo',
			clan:'Imperial',
			ring1:"",
			ring2:"",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"",
			skill2:"",
			glory:"",
			wealth:"",
		},
		seppun: {
			name:'Seppun',
			clan:'Imperial',
			ring1:"",
			ring2:"",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"",
			skill2:"",
			glory:"",
			wealth:"",	},
},
	Other:{
		clanring: {"Void":+1},
		clanskill: "Trade",
		weapons:[],
		armor:[],			
		advantages: [

					],
		disadvantages: [

					],
},
			other: {
			name:'Other',
			clan:'Other',
			ring1:"",
			ring2:"",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"",
			skill2:"",
			glory:"",
			wealth:"",	},


	Minor:{
		clanring: {"Void":+1},
		clanskill: "Trade",
		weapons:[],
		armor:[],			
		advantages: [

					],
		disadvantages: [

					],
},
			toritaka: {
			name:'Toritaka',
			clan:'Minor',
			clanring: "Void",
			ring1:"Earth",
			ring2:"Water",
			advantages:[
			],
			disadvantages:[
			],
			skill1:"Survival",
			skill2:"Meditation",
			glory:"35",
			wealth:"",	},

}