var ringdice = [
		"Blank",
		"<span class='l5r'>O</span> <span class='l5r'>T</span>",
		"<span class='l5r'>O</span>",
		"<span class='l5r'>S</span> <span class='l5r'>T</span>",
		"<span class='l5r'>S</span>",
		"<span class='l5r'>E</span> <span class='l5r'>T</span>"];

var skilldice = [
		"Blank",
		"Blank",
		"<span class='l5r'>O</span>",
		"<span class='l5r'>O</span>",
		"<span class='l5r'>O</span>",
		"<span class='l5r'>S</span> <span class='l5r'>T</span>",
		"<span class='l5r'>S</span> <span class='l5r'>T</span>",
		"<span class='l5r'>S</span>",
		"<span class='l5r'>S</span>",
		"<span class='l5r'>S</span> <span class='l5r'>T</span>",
		"<span class='l5r'>E</span> <span class='l5r'>T</span>",
		"<span class='l5r'>E</span>"];



var skills = [
	["Aesthetics","Composition","Design","Smithing"],
	["Command","Courtesy","Games","Performance"],
	["Culture","Government","Medicine","Sentiment","Theology"],
	["Fitness","Melee","Ranged","Unarmed","Meditation","Tactics"],
	["Commerce","Animal Handling","Labor","Seafaring","Skulduggery","Survival"]
	];

var statuslist = ["alive", "out", "dead"];

var stances = {
	Stance:{name:"Stance",
			ability: "Select a stance"},
	air:{	name:"Air",
			ability:"TN+1 to Attack and Scheme actions targeting you (+2 at Rank 4+)"},
	earth:{	name:"Earth",
			ability:"Opponents cannot spend <span class='l5r'>O</span> to inflict critical strikes or conditions on you"},
	fire:{	name:"Fire",
			ability:"If you succeed, +1 bonus <span class='l5r'>S</span> per kept <span class='L5R'>T</span>"},
	water:{	name:"Water",
			ability:"Perform a second action on your turn that does not require a check or share a type with your first action"},
	void:{	name:"Void",
			ability:"Do not recieve <span class='L5R'>T</span> from kept dice on checks"},
};



 var tealists = {

		l1 : ['Cheerful','Frowning','Victorious','Gleaming','Shining','Drunken','Fragrant','Singing','Wholesome','Auspicious','Inauspicious','Red','Silver','Green','Golden','Drowned','Summer','Spring','Autumn','Winter','Friendly','Dancing','Blessed','Honourable','Polite','Compassionate','Just','Honest','Sincere','Dutiful','Loyal','Austere','Unseen','Refined','Accurate','Meticulous','Impudent','Lucky','Jade','Steel','Benevolent','Earnest','Incorruptible','Lying','Kharmic','Perceptive','Principled','Candid','Plucky','Spirited','Benificient','Glorious','Doubtful','Immaculate','Certain','Persuasive','Sly','Devious','Flighty','Impetuous','Brave','Victorious','Fragrant','Legendary','Fortunate','Blessed','Cursed','Disreputable','Incorrigible','Infamous','Cheeky','Celestial'], //adjective

		l2 : ['Victory','Certainty','Enlightenment','Fortune','Fate','Sacrifice','Loyalty','Compassion','Duty','Courage','Justice','Honesty','Honour','Sincerity','Truth','Insight','Wisdom','Civilisation','Benevolence','Righteousness','Integrity','Devotion','Irresponsibility','Drunkenness','Purity','Divination','Valour','Propriety','Principle','Doubt','Impudence','Luck','Kharma','Glory','Audacity','Conviction','Inevitability','Nobility','Tranquility','Inner Peace','Fortitude','Rectitude','Regret'], //abstract noun

		l3 : ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'], //number

		l4 : ['Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth'],  //ordinal

		l5 : ['Fragrance','Prayer','Kami','Carp','Blade','Monk','Fox','Leaf','Radish','Chestnut','Light','Shade','Breeze','Steam','Mackerel','Eel','Dumpling','Tanuki','Cicada','Steed','House','Serpent','Heron','Soy','Maple Tree','Pine Tree','Cherry Blossom','Plum','Plum Blossom','Persimmon','Satsuma','Tangerine','Wasabi','Rainstorm','Snowfall','Mushroom','Butterfly','Grasshopper','Cricket','Magistrate','Sage','Silkworm','Tetsubo','Arrow','Battle','Rice','Tofu','Hydrangea','Lily','Chrysanthemum','Pavilion','Victory','Yojimbo','Shrine Keeper','Courtier','Duelist','Crow','Deer','Stag','Boar','Badger','Bow','Lobster','Harvest','Wakizashi','Falcon','Darkness','Shadow','Kingfisher'], //singluar concrete noun

		l6 : ['Fragrances','Prayers','Kami','Carp','Blades','Monks','Foxes','Leaves','Radishes','Chestnuts','Lights','Breezes','Mackerels','Eels','Dumplings','Tanuki','Cicadas','Steeds','Houses','Serpents','Herons','Maple Trees','Pine Trees','Cherry Blossoms','Plums','Plum Blossoms','Persimmons','Satsumas','Tangerines','Grapes','Rainstorms','Snowfalls','Mushrooms','Butterflies','Grasshoppers','Crickets','Magistrates','Sages','Silkworms','Tetsubos','Arrows','Battles','Hydrangeas','Lilies','Chrysanthemums','Pavilions','Victories','Yojimbos','Shrine Keepers','Courtiers','Duelists','Crows','Deer','Boars','Badgers','Bows','Lobsters','Harvests','Wakizashis','Falcons'],  //plural concrete noun

		l7 : ['Shinsei','Lord Moon','Lady Sun','Amaterasu','Onnotangu','Benten','Bishamon','Daikoku','Ebisu','Fukurokujin','Kisshoten','Hotei','Jurojin','Isawa','Inari','the Fortunes','the Kami','the Emperor','the Daimyo','the Yojimbo','the Shugenja','the Diviner','the Bushi','the Shrine Keeper','the Shrine Maiden','the Duelist','the Courtier','the Sage','the Monk','the Magistrate','the Bakemono','the Kitsune','the Tanuki','the Geisha'], //people and entities

		name:[],

	};


var protheme = ["Aka","Aki","Ari","Atsu","Chika","Fusa","Haru","Hide","Hira","Hiro","Hisa","Ie","Kado","Kage","Kane","Katsu","Kore","Kimi","Kiyo","Kuni","Kyo","Masa","Masa","Michi","Mitsu","Mizu","Mochi","Mori","Moto","Mune","Nana","Naga","Naka","Nao","Nari","Nobu","Nori","Rei","Sada","Sane","Shige","Sue","Sumi","Tada","Tae","Taka","Tame","Tane","Teru","Toki","Tomo","Toshi","Tsune","Tsura","Uji","Yasu","Yori","Yoshi","Yuki","Yuzu"]

var mdeuterotheme = ["aki","akira","chika","fusa","haru","hide","hiko","hira","hiro","hisa","hito","ie","ichi","kado","kage","kane","kata","katsu","kaze","kiyo","kuni","maro","masa","michi","mitsu","mochi","mori","moto","mune","mura","naga","naka","nao","nari","nobu","nori","o","ro","ru","sada","sane","shige","suke","tada","taka","tane","teru","to","toki","tomi","tomo","toshi","tsugu","tsura","tsune","uji","yasu","yori","yoshi","yuki","zane","zo"]

var fdeuterotheme = ["ko","yo","ka","na","e","ne","mi"]

var	names = ["Aika","Aka","Akane","Akari","Akemi","Aki","Akihiko","Akiko","Akinari","Akira","Amaya","Aoi","Atsushi","Ayaka","Ayame","Ayane","Azuma","Chiyo","Chieko","Chihiro","Chiharu","Daikichi","Daisetsu","Daisuke","Daiyu","Eiji","Eisuke","Emi","Emiko","Fukuro","Fumi","Genbu","Genichi","Hachi","Hachiro","Haitaka","Hajime","Hamatsu","Hanzo","Haruhi","Haruki","Hakaku","Haruka","Haruo","Haruto","Hatoka","Hayato","Hibi","Hibiki","Hideaki","Hikaru","Hiroaki","Hizaya","Hozumi","Ichijo","Ikaru","Inoue","Isamu","Isuka","Itsuki","Izumi","Izara","Iwakura","Jiro","Jun","Junpei","Kaede","Kaharu","Kamome","Kaori","Kaoru","Kasumi","Katashi","Katsuo","Kazue","Kazuhiko","Kazuki","Kazuya","Kei","Keita","Kenji","Kenmi","Kenzo","Kiji","Kiko","Kikyo","Kiro","Kimiko","Kiyoko","Kohaku","Koharu","Koji","Kokoro","Koma","Kosuke","Kotone","Kuina","Kujaku","Kumo","Kurina","Kurumi","Kyo","Madoka","Makoto","Mai","Mana","Manami","Mariko","Maru","Masahiko","Mashiro","Mayu","Mayumi","Michi","Midori","Mika","Minoru","Mio","Mirai","Misaki","Misago","Mitsuru","Miyu","Mizuki","Mori","Mozu","Nanami","Nao","Naoha","Naoki","Naota","Naoto","Natsuki","Orihime","Osamu","Rei","Reizo","Renjaku","Rika","Rin","Ruka","Ryota","Saburo","Sagi","Saito","Saboten","Sakura","Sannosuke","Sanzeni","Saori","Satoru","Satomi","Sayuri","Sazai","Seiji","Sen","Shiho","Shigeru","Shion","Shinichi","Shizuru","Shotaro","Shoubin","Shunsuke","Sora","Souta","Sui","Suisen","Suiren","Sumika","Sumire","Sumiyo","Suzaku","Suzu","Suzune","Tadashi","Tae","Taka","Takako","Takara","Takumi","Takuya","Tana","Terukazu","Toki","Tomoe","Tomomi","Torayuki","Toyoshige","Tsorika","Tsubaki","Tsubame","Tsuki","Tsukika","Tsutsuki","Tsutsuji","Usa","Uzura","Washi","Wataru","Yanagi","Yasu","Yoriko","Yoshiaki","Yousuke","Yuka","Yukari","Yuki","Yukino","Yuuki","Yuzuhime","Zennosuke","Zetsuha","Zuku"];


var tao = [
	"We tell the tales of heroes to remind ourselves that we also can be great. ",
	"Every journey begins with a single step. <br>Step well, and your journey will be filled with fortune. <br>Step poorly, and it will be wrought with disaster. ",
	"You cannot live while hiding from life. ",
	"A handful of glory is worth a handful of dust when compared to the riches a samurai's family gives to him. ",
	"Guard your word carefully, for you own every word you speak. ",
	"Even gods must bow to destiny. - Isawa",
	"When darkness descends, a man must find allies in the shadows. - Shosuro", 
	"It takes a wise man to see an obstacle as it truly is and not as it appears to be. ",
	"Brave men may be forgotten; brave deeds never so. - Akodo",
	"The more corrupt the soul, the more painful it becomes to look upon the pure. <br>So it is with crystal and jade and the creatures of the dark lands.",
	"A clear mind can topple even the strongest will. ",
	"A Crab does not seek glory, only victory - Hida",
	"There are no secrets. There is no understanding. Void is all and nothing.  <br>Do not understand the Void, understand that you ARE the Void - Isawa",
	"In order to choose the correct path, you must know the pitfalls that await you. ",
	"Knowing your advantages does you no good if your enemy is able to keep you from employing them. - Akodo",
	"Friendship is truly tested when it is time to share the burden. ",
	"Learn to forgive and forget, or you are injured anew each day",
	"One must learn to see what is to be seen and to see through what others wish you to see. ",
	"It is the sound of purest harmony, the sound of the universe. <br>Make your spirit sing its song, and you will find there is nothing you cannot accomplish. ",
	"Following a false light leads you only deeper into darkness ",
	"Desperate men employ desperate measures. ",
	"You need no armor; you need no sword. You need only to know that you cannot be defeated. - Togashi",
	"When your enemy is certain you cannot act, victory is within your reach. - Akodo",
	"The only true test of courage is the last one. - Akodo",
	"While others lament on what they should have done, the wise man prepares for what he should do next. - Bayushi",
	"Uncertainty is cowardice. - Matsu",
	"Your men will enter your service as a babe enters this world into its mother's arms. <br>They will be without loyalties, without obedience, without skill. Loyalty, unlike the others, must be given constant attention. <br>Like a lone rose in a garden of weeds, without your care it withers and dies. - Akodo",
	"You cannot balance the elements while you are without balance. - Isawa",
	"Destiny does not believe in secrets. When something is meant to be, it is obvious to all but the foolish. ",
	"A sagacious general, armed with the knowledge of his enemy, will be able to act as if he knows his enemy's every thought. - Akodo",
	"The higher you stand above modesty, the easier it becomes to lose your footing. - Togashi",
	"Winds blow, nations change, fortunes rise and fall, but the smallfolk will always be asked to shoulder the weight. ",
	"A courageous man has no need to be cruel. - Togashi",
	"While you rest, your enemy practices ",
	"That man is richest whose pleasures are cheapest. - Yoritomo",
	"The truth of the world can be found sitting at the riverside.  <br>The river never begins, the river never ends. <br>All of life is like the river. Lessons never begin and lessons never end. ",
	"Hesitation is the seed of defeat - Kakita",
	"Every day of his life a man has only one judge, and that judge is himself - Isawa",
	"A man must find his place in life, or he is a wandering fool, never content, never at peace, bringing discord with him wherever he goes ",
	"The wind moves with such subtlety, you do not even notice your own breathing. Be aware. Only a fool knows the wind is empty. ",
	"Earth is the virtue of resilience and temperance. Only by understanding how to hold one's strength can one release it properly.  <br>Fire is the virtue of purity of action. Only action without the weight of thought will be as that of fire. <br>Water is deep and strong and fluid. Only by understanding the strength of water can one's mind be pure and deep and fluid and strong. <br>Air is the subtle touch. Only by understanding the shifting winds can one understand the shifting pulse of the heart and the world around him. <br>Void is last. It is all and it is none. You cannot understand the secret of void; you must know it.",
	"You cannot command the elements any more than you can command the stars in heaven. <br>You must learn to hear the music of the celestial chorus. Once that is done, you must learn to dance ",
	"'What is the deepest truth?' the Emperor asked Shinsei. Shinsei smiled and said, 'Everything I have taught you is wrong.' ",
	"Only when you are in the grave will you have nothing more to learn. - Isawa",
	"The worst enemy is the absence of hope ",
	"A warrior's true glory shines brightest when she is washed in the blood of battle - Matsu",
	"A monk asked Shinsei, 'What are the teachings of a lifetime?' Shinsei said to him, 'An appropriate statement.'",
	"True nobility comes not from being superior to another man, but from being superior to your past ",
	"Shinsei said, 'Who binds you?' The Emperor said, 'No one binds me - I am the Emperor...' <br>'A contradiction in itself.' said the monk with a smile ",
	"It is honorable to be accused by those who deserve to be accused ",
	"Allow an injustice to pass and you are as unjust as the perpetrator - Akodo",
	"The path of the damned is lined with the souls of those with glorious intentions.",
	"Glory will come to the courageous.  There is no need to chase it down. - Matsu",
	"A person overwhelmed still lives, a person dishonored died long before their heart ceases to beat - Akodo",
	"The truth is always simple.  Liars make things complicated - Akodo",
	"The truth is always complicated.  Liars make things simple. - Bayushi",
	"In each beginning is the thread of an ending, and each story must have a conclusion.  In each cradle is the shadow of the grave - Togashi",
	"To serve the Tao is to serve the Empire.  The one cannot be parted from the other, no more than the sea can be parted with the land ",
	"There is no such thing as coincidence.  There are only auspicious occasions - Togashi",
	"Do not judge a man by the lord he serves.  Judge him by his choice of enemies - Togashi",
	"The words of the Tao are simple.  Following the Tao is complex. <br>So does the simple show the outward things, the complex reveals the soul. ",
	"Do not be wary of men who take risks with title and lands.  Be wary of men who have nothing to lose - Bayushi",
	"If a general is wise, he knows that a single man can halt an entire army - Kakita",
	"When you are doing one thing, be concerned with that one thing and nothing else.  Distraction breeds disaster. - Bayushi",
	"Wisdom can be found in many places, but you must always begin at home ",
	"Courage may feed a man's soul, but it is rice that feeds his belly, and an army cannot move on courage alone. - Akodo",
	"There are subtler strategies and deadlier battlefields than even I know. ",
	"When ten thousand men clash with arms and fire, it is always a single man's actions that make the difference. - Yoritomo",
	"There cannot be two suns in the heavens or two Emperors on earth. ",
	"Hesitation is cowardice. - Matsu",
	"The brighter the light, the deeper the shadow.",
	"The deeds of the meek are sung in few songs - Matsu",
	"The elements are not the means to an end, they are the beginning and the end - Isawa",
	"An ocean to a small stream, the leader to his people, this is the Tao to the world ",
	"At times, the voice of peace must ring like Thunder. ",
	"Appreciation of beauty is the beginning of wisdom. - Doji",
	"Study what the pine and cherry blossom can teach.  Man is not the only keeper of enlightenment. ",
	"Two men can brave what one man cannot. ",
	"You can steal a samurai's weapon and armor, but you can never steal his honor. - Akodo",
	"You can steal a man's weapon and armor, and he will fight you still, ever more desperately.  <br>Steal his hope, and he will sit harmless and quiet until he dies. - Bayushi",
	"Those with pure purpose have the strength to never fail - Shosuro",
	"In the beginner's mind, there are many possibilities.  In the expert's there are few. - Togashi",
	"Wisdom comes in finding the opportunities that dilemmas provide. ",
	"You cannot catch the moon in a lake.  You cannot destroy what you cannot find - Shosuro",
	"If you are willing to sacrifice yourself for all things, only then you can be trusted with the world - Shosuro",
	"When the way comes to an end, then change, and having changed, pass through ",
	"You do not have to outrun the bear. You must only outrun your friend. - Yoritomo",
	"It is better to light a candle than curse the darkness - Yoritomo",
	"Running a country is like cooking fish. Don't overdo it.",
	"Do not take a poor man into your home and expect him to pay.",
	"Honour is not left to stand alone. He who practices it will have neighbours. - Akodo",
	"They must often change, who would be constant in happiness or wisdom. ",
	"The righteous man is modest in his speech but exceeds in his actions. ",
	"He who merely knows right principles is not equal to he who loves them. ",
	"To be able under all circumstances to practice five things constitutes perfect virtue; <br>these five things are gravity, generosity of soul, sincerity, earnestness and kindness. ",
	"We don't know yet about life, how can we know about death? ",
	"Ignorance is cowardice, easily remedied by those who have the will. - Isawa",
	"Mankind differs from the animals only by a little, and most people throw that away. ",
	"If you enjoy what you do, you'll never work another day in your life. ",
	"The good man does not grieve that other people do not recognize his merits. His only anxiety is lest he should fail to recognize theirs. - Togashi",
	"Men of righteous mind busy themselves first getting at the root of things; when they succeed, the right course is open to them. ",
	"Sorrow not because men do not know you; but sorrow that you do not know men. - Togashi",
	"To govern simply by statute and to maintain order by means of penalties is to render the people evasive and devoid of a sense of shame. ",
	"When you know a thing, maintain you know it; when you do not, acknowledge it. This is the characteristic of knowledge. - Togashi",
	"Let the leader of men promote those who have ability, and instruct those who have it not, and they will be willing to be led. - Akodo",
	"To see what is right and not to do it, that is cowardice. - Bayushi",
	"He who has sinned against Heaven has none other to whom his prayer may be addressed. ",
	"Tell me, is there anyone who is able for one whole day to apply the energy of his mind to virtue? <br>It may be that there are such, but I have never met with one. ",
	"If we may learn what is right in the morning, we should be content to die in the evening. - Togashi",
	"The scholar who is intent upon learning the truth, yet is ashamed of his poor clothes and food, is not worthy to be discoursed with. ",
	"The righteous men are sparing in their words and profuse in their deeds. ",
	"My great concern is not with men who do not know me, but with men who cannot understand me. ",
	"Not to react after committing an error is in itself an error. ",
	"The righteous man may not be conversant with petty details, yet can be entrusted with important matters; <br>the inferior man may be conversant with petty details yet cannot be entrusted with important matters. ",
	"Three things the righteous man guards against: lust of the flesh in youth, combativeness in maturity, and ambition in old age. ",
	"Only the supremely wise and the abysmally ignorant do not change. - Isawa",
	"What harm can a man do to the sun or the moon by wishing to stop either in its course? <br>It only shows that he knows not his own limitations. - Togashi",
	"Shinsei was asked, 'What say you are the essentials of good government?' <br>He answered, 'The ruler should esteem the five excellences and avoid the four evils. <br>The five excellences are: plenitude without extravagance; taxation without exciting discontent; desire without covetousness; dignity without haughtiness; majesty without fierceness. <br>The four evils to be avoided are: without instruction in the law, to inflict punishment - that is tyranny; without proper warning to expect perfect adherence - that is oppression; late in giving orders and expecting early obedience - that is robbery; to tax and to spend in a stingy manner - that is a misuse of government function.' ",
	"Chop wood, carry water. ",
	"Before a person studies the Void, mountains are mountains and waters are waters; <br>after a first glimpse into the truth of the Void, mountains are no longer mountains and waters are no longer waters; <br>after Enlightenment, mountains are once again mountains and waters once again waters. - Isawa",
	"All things are the same, everything is distinct. ",
	"All that we are is the result of what we have thought: it is founded on our thoughts and is made up of our thoughts. ",
	"If a man speaks or acts with an evil thought, pain follows him, as the wheel follows the foot of the ox that draws the cart; <br>if a man speaks or acts with a pure thought, happiness follows him, as a shadow that never leaves him. ",
	"Hatred is never diminished by hatred. Hatred is diminished by love.",
	"As rain breaks through an ill-thatched roof, so greed breaks through the ill-trained mind. - Isawa",
	"Fools follow vanity; but the wise man prizes his mindfulness as a treasure. ",
	"If a man's faith is unstable and his peace of mind troubled, his knowledge will not be perfect. ",
	"Man, whose body is as fragile as a jar, should make his thoughts firm as a fortress. ",
	"Like a beautiful flower full of color but without scent are the fair words of he who himself does not act accordingly. - Doji",
	"The scent of flowers does not travel against the wind; but the fragrance of good people travels even against the wind. ",
	"Even upon a heap of rubbish the lotus will grow full of sweet perfume and delight; <br>even so the true disciple of Shinsei will shine forth among the people who walk in darkness. ",
	"Long is the night to him who is wakeful; long is the mile to him who is tired; long is life to the foolish. ",
	"'These sons belong to me and this glory belongs to me' - with such thoughts the fool tries to console himself. <br>He himself does not belong to himself, how much less his sons and glory!",
	"Those whose minds are well-grounded in the seven elements of knowledge, who cling to nothing with rejoicing, <br>who curb their appetites and are full of light, they gain enlightenment even in this world. - Togashi",
	"Though a man go out to battle a thousand times against a thousand men, if he conquers himself he is the greater conqueror. - Akodo",
	"Not nakedness, fasting or sleeping on the bare earth, or sitting motionless can purify a man who has not overcome his doubts. ",
	"One's own self is the most difficult to subdue. ",
	"The pure and impure stand and fall by their own deeds; no one can purify another. ",
	"No suffering befalls the man who calls nothing his own.",
	"Let a man overcome greed with generosity and lies with truth. - Togashi",
	"By these three steps you will come near to the gods: speak the truth; do not yield anger; give even though you have but a little to give. ",
	"There is an old saying: they blame him who sits silent; they blame him who speaks much; they blame him who says little. <br>There is no one in the world who does not get blamed. ",
	"For the student to become a sage, he himself must make the effort. Shinsei is merely a teacher. ",
	"Cut down the whole forest of earthly desire, not just one tree only. ",
	"'Here I shall dwell in the winter and summer, here I shall dwell in the rain' - so the fool thinks, but does not think of death. ",
	"If by leaving a small pleasure one sees a great pleasure, the wise man will leave the small pleasures to look at the great. ",
	"The passion of a heedless man grows like a creeper, and he runs from life to life, like a monkey seeking fruit in the forest. ",
	"He who holds back rising anger like a rolling chariot is a real driver, others are but holding the reins. - Akodo",
	"What is most useful of the cup: What is there or what is not? - Isawa",
	"Petting scorpions with a compassionate hand only gets you a sting. - Akodo",
	"Swatting scorpions with a careless hand only gets you a sting. - Bayushi",
	"The most difficult act in the world is to sit still.",
	"Be more concerned with good actions than great ones.",
	"Distant thunder tells of present danger. - Isawa",
	"There are no regrets in life, just lessons - Bayushi",
	"See obstacles as they truly are, not as they appear to be.",
	"It's better to look ahead and prepare than to look back and regret. - Isawa",
	"Regretting time wasted is a waste of time. - Matsu ",
	"The mountains never learned to step aside.",
	"Every moment has a lesson for you to learn. Learn to listen.",
	"Treat everyone you meet as if they will die tomorrow. - Kakita",
	"Choosing between two evils is still choosing evil. - Shosuro",
	"Live each day as though it was the last one.  Leave no regret unturned - Kakita",
	"While you rest, your enemy practices.",
	"Those who choose to stand alone, fall alone.",
	"You can never bake the same cake twice. - Bayushi",
	"When asked of the meaning of dreams Shinsei said: If only men put so much thought into what they see when they are awake.",
	"If you eat poison, don't forget to lick the dish. - Togashi",
	"A gift is given for the purpose of recieving one.",
	"Suspect that all men are liars and that it will rain tomorrow. - Togashi",
	"Regrets are merely expired dreams.  Throw those things away. - Shiba",
	"Justice and peace can never live under the same roof. When one moves in, the other leaves. - Bayushi",
	"Never trust a man on the merit of what he 'once was' or 'will be'. Only trust who he is. - Isawa",
	"Nothing offends anger more than laughter.",
	"One must bow to offer aid to a fallen man.",
	"Perfection is attainable, if only for an instant at a time.  Find the perfect moment, then live in it. - Kakita",
	"Shinsei said: 'My faults derive from my parents, my virtues are my own.' How foolish is this?.",
	"If you are walking, walk. If you are running, run. Never meander.",
	"The child wants to grow old fast, the parent wants to grow old slowly. - Togashi",
	"The nail that sticks out is the one that gets pounded first.",
	"Desperation is a double edged sword.  It will make your enemy foolish, but it will also make him deadly. - Shosuro",
	"The price of greatness is paid by the great, but we all reap the benefit. - Isawa",
	"What is written is not what is, only what is written",
	"Education is the kindling of a flame, not the filling of a vessel. - Isawa",
	"We only sympathize with pain when it is our own. - Kakita",
	"Perfection remains out of reach, but if we chase perfection we can catch excellence - Togashi",
	"Do not simply say that anything is true. Know it is true or stay silent.",
	"A man climbed a mountain to find a shrine that housed a wise man and said, 'I came here to find truth.' <br>The wise man answered, 'Be glad you brought it with you.'",
	"Kharma and shadows follow us all.",
	"Don't trust a man who doesn't know how to smile.",
	"If you only look for oranges at the top of the tree, you will go hungry. - Yoritomo",
	"For every single achievement, there are one hundred people looking for merit.",
	"A true work of art is a shadow of divine perfection - Doji",
	"Fear is the measuring stick of ignorance. - Isawa",
	"Don't use two hands when one is good enough. - Kakita",
	"Criticism is kindness in disguise.  One cannot improve without acknowledging one's flaws. - Isawa",
	"The fortuneteller cannot tell his own future.",
	"Do not be concerned with any life but this one. One world at a time. - Yoritomo",
	"The simplest questions are the hardest to ask.",
	"It is difficult enough to master yourself, let alone others.",
	"Do not look for life's meaning, look only to live. - Yoritomo",
	"Do everything as if you have nothing else to do. - Kakita",
	"Many seek peace, but not many are ready to kill for it, even if only their own selves.",
	"A diversion is just that and nothing more.",
	"A man who has lived poorly cannot die well. - Kakita",
	"A patient man learns quickly. An impatient man, not at all.",
	"If the well is tainted, the village will die.",
	"Even a man who has lived poorly can still die well.  Give him a chance to excel. - Matsu",
	"You cannot speak of the lion's wrath until you have been under it's claws.",
	"Certainty murders possibility. - Togashi",
	"Correct your mistake quickly if you can. Not correcting it at all is the biggest mistake of all.",
	"Preparation is prevention.",
	"Certainty is arrogance.  The arrogant are easily toppled. - Shosuro",
	"There are three types of man: lovers of wisdom, lovers of honour, and lovers of glory",
	"Who can say what makes a man turn neutral?  Lust for power?  For glory?  Or were they just born with hearts full of neutrality?",
	"A good general needn't delegate. A good delegator needn't fight. A good fighter won't lose. A clever loser won't die. - Yoritomo",
	"A man can live 30 days without food, 3 days without water, and 3 minutes without air, but not more than one second without hope. - Shinjo",
	"There are five possible operations for any army. If you can fight, fight; if you cannot fight, defend; <br>if you cannot defend, flee; if you cannot flee, surrender; if you cannot surrender, die. - Akodo",
	"An enlightened ruler does not worry about people not knowing him; he worries about not knowing people. - Togashi",
	"To learn without thinking begets ignorance. To think without learning is dangerous.",
	"Perfection is the enemy of progress. - Isawa",
	"Be kind to the weak, the old, and the ignorant. During your life you will be all three of them.",
	"Research is what I'm doing when I don't know what I'm doing. - Isawa",
	"Glory may be fleeting, but obscurity is forever. - Matsu",
	"When the only tool you have is a hammer, every problem begins to resemble a nail. - Hida",
	"At times, the best solution to a maze is to reduce it to embers and walk straight through the ashes. - Matsu",
	"Villainy wears many masks, but none as dangerous as the mask of virtue. - Bayushi",
	"If the wind will not serve, take to the oars. - Yoritomo",
	"There is only one good, knowledge, and one evil, ignorance. - Isawa",
	"When the truth is complicated, cutting up the liars makes things a lot simpler. - Matsu",
	"Better a diamond with a flaw than a pebble without.",
	"'Very good' is merely a guest house on the road to perfection - a place to visit briefly and pass through, not to stay. - Kakita",
	"The road of revenge leads straight to the sun, hanging on the horizon. <br>There are no wayside inns to give the traveller rest, there are no detours, byways or deviations. <br>It is a long, bloody path that invariably ends in a grave.",
	"There is no success without sacrifice. <br>If you succeed without sacrifice it is because someone has suffered before you. <br>If you sacrifice without success it is because someone will succeed after. - Shosuro",
	"A wise man shouldn't have to see a lion's teeth to know that they are sharp. <br>Likewise, a wise man shouldn't have to be stung by a Scorpion to know it's sting is deadly. - Bayushi",
	"Be thankful for your enemies, some lessons in life can only be taught by them. - Bayushi",
	"How easily men are corrupted, and difficult it is to make them just. - Bayushi",
	"Shinsei said: 'I cannot teach anybody anything, I can only make them think.'",
	"The only box that can hold a secret, is a coffin. - Bayushi",
	"The meaure of a man is how he uses power - Isawa",
	"Life is not fair, but that doesn't mean you can't win. - Bayushi",
	"Courage is knowing what not to fear - Isawa",
	"Enemies you threaten make armies. Enemies you destroy make graves. - Bayushi",
	"What is behind the throne is more dangerous than what is in it. - Bayushi" ,
	"Shinsei says: 'learn to forgive and forget' so I say: 'Doing this will only get you fooled again!'- Bayushi",
	"Need to defeat a Crane? Tell him that battle will ruffle his feathers.  <br>Need to defeat a Lion? Trip him as he charges.  <br>Need to defeat a Phoenix? Make him fight.  <br>Need to defeat a Crab? Wait with him.  <br>Need to defeat a Dragon?  Make him rely on another's trust.  <br>Need to defeat a Unicorn? Take away his horse.  <br>Need to defeat a Scorpion? Kill yourself while you still can, because either way they're gonna win! - Bayushi Tangen",
	"When a man has time to think, he can make plans.  <br>When he has no time to think, but must immediately react, he can only make mistakes - Akodo",
	"When your enemy is more powerful than you, strike quick and hard, and retreat. <br>Flow like the water, move with no form or shape or substance.<br> Commanders without courage or confidence do not know how to retaliate against you. <br>Those who understand your ways will know what you are doing, and know that their strength has been turned to weakness. <br>They will know that you are the sagacious general, and those who know the ways of Heaven and Earth will retreat and go home. - Akodo",
	"When your enemy is entrenched and secure, lure him from his nest. <br>Attack that which is dear to him to draw him from his ground. Take him from his sanctuary and take him on your time. - Akodo",
			];


var color={
	spring:{
		  bg: "#FFFFFF",
		  "bgimage": "url('blossom.png')",
		  bgposition: "left top",
		 
		  "opacitybgoverlay": "rgb(203, 230, 237, 0.8)",

		  "highlightmainbuttontextcolor": "#F7BAA1", 
		  "tooltipbgcolor": "#F7BAA1", 
		  "tooltip-border":"white",

		  "tableheaderbg": "#595858",
		  "tableheaderfont": "#ffffff",

		  "buttoncentre": "#fffff4",
		  buttontext:"#5e4031",
		  "buttonborderlight": "#f7e5d7",
		  "buttonborderdark": "#d6c49c",
 
		  "fontcolor": "#5e4031",
		  tooltipfont:"black",

		  greentea: "#96c988",
	},
	summer:{
		 bg: "#FFFFFF",
		  "bgimage": 'url("leaves.jpg")',
		  bgposition: "left top",

		  "opacitybgoverlay": "rgb(221, 255, 147, 0.85)",

		  "highlightmainbuttontextcolor": "#adce67", 
		  "tooltipbgcolor": "#adce67", 
		  "tooltip-border":"white",

		  "tableheaderbg": "#97b752",
		  "tableheaderfont": "#fffff4",

		  "buttoncentre": "#fffff4",
		  buttontext:"#5e4031",
		  "buttonborderlight": "#e5e5c3",
		  "buttonborderdark": "#d6c49c",

		  "fontcolor": "#5e4031",
		  tooltipfont:"black",

		  greentea: "#96c988",
			},
	autumn:{
		  bg: "#FFFFFF",
		  "bgimage": "url('maple.jpg')",
		  bgposition: "left top",
		   
		  "opacitybgoverlay": "rgb(249, 176, 42, 0.85)",

		  "highlightmainbuttontextcolor": "#FFA500", 
		  "tooltipbgcolor": "rgb(255,215,0)", 
		  "tooltipborder":"white",

		  "tableheaderbg": "#595858",
		  "tableheaderfont": "#ffffff",

		  "buttoncentre": "#FFFF66",
		  buttontext:"#7f4900",
		  "buttonborderlight": "#af6600",
		  "buttonborderdark": "#af6600",

		  "fontcolor": "#7f4900",
		  tooltipfont:"black",

		  greentea: "#af6600",
	},
	winter:{
		  bg: "#FFFFFF",
		  "bgimage": "url('stones.jpg!d')",
		  bgposition: "bottom left",
		   
		  "opacitybgoverlay": "rgb(206, 206, 206, 0.7)",

		  "highlightmainbuttontextcolor": "rgb(84, 109, 255)", 
		  "tooltipbgcolor": "#9ea4bf", 
		  "tooltipborder":"white",

		  "tableheaderbg": "#595858",
		  "tableheaderfont": "#ffffff",

		  "buttoncentre": "#fffff4",
		  buttontext:"#535560",
		  "buttonborderlight": "#e5e5c3",
		  "buttonborderdark": "#d6c49c",

		  "fontcolor": "#353849",
		  tooltipfont:"black",

		  greentea: "rgb(84, 109, 255)",
	},
	void:{
		  bg: "#000000",
		  "bgimage": "url('night.jpg')",
		  bgposition: "right bottom",
		   
		  "opacitybgoverlay": "rgb(252, 252, 252, 0.85)",

		  "highlightmainbuttontextcolor": "white", 
		  "tooltipbgcolor": "#0d0249",
		  "tooltipborder":"white", 

		  "tableheaderbg": "#C0C0C0",
		  "tableheaderfont": "#ffffff",

		  "buttoncentre": "#0d0249",
		  buttontext:"#a094b5",
		  "buttonborderlight": "#0d0249",
		  "buttonborderdark": "#0d0249",

		  "fontcolor": "#1d1330",
		  tooltipfont:"#c4b8db",

		  greentea: "#5a4d70",
	},
	printer:{
		  bg: "#000000",
		  "bgimage": "none",
		  bgposition: "",
		   
		  "opacitybgoverlay": "rgb(255, 255, 255, 1)",

		  "highlightmainbuttontextcolor": "#DCDCDC", 
		  "tooltipbgcolor": "#d6d6d6", 
		  "tooltipborder":"#C0C0C0",

		  "tableheaderbg": "#C0C0C0",
		  "tableheaderfont": "#ffffff",

		  "buttoncentre": "#FFFFFF",
		  buttontext:"black",
		  "buttonborderlight": "#dbdbdb",
		  "buttonborderdark": "#dbdbdb",

		  "fontcolor": "#000000",
		  tooltipfont:"#000000",

		  greentea: "#5a4d70",
	},
}

