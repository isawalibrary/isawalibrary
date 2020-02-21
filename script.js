//TOP MENU

function highlight(button,hiddenelementx){

	button = document.getElementById(button);
	hiddenelement = document.getElementById(hiddenelementx);

	if (hiddenelement.classList.contains("container")){ //if it is already visible we want to make it invisible

		hiddenelement.classList.remove("container");

		hiddenelement.classList.add("containerx");

		setTimeout(function(){
			hiddenelement.addEventListener("transitionend",hide(hiddenelementx));},500)

		button.classList.remove("highlight");
		button.classList.add("nohighlight")

	} 
	else if (hiddenelement.classList.contains("containerx")){

		hiddenelement.classList.remove("containerx")
		hiddenelement.classList.remove("hide")
		hiddenelement.classList.add("container")

		button.classList.remove("nohighlight")
		button.classList.add("highlight")
	}

}


//defs tab script

var k = 0;

function makeDefs(){

	for (let elem in definitions){
		var category = elem;
		newdiv(category,"definitionsdiv","block tooltipwrapper defs defcategory");
		divcontents(category,"<b>"+category+": </b>");

		for (let elem in definitions[category]){
			var entryName = elem;
			var xentryName = "'"+entryName+k+"-def'";
			newdiv (entryName+k,category,"tooltipwrapper defs xheight");
			u='onmouseover="hideshow('+xentryName+')"; '
			v='onmouseout="hideshow('+xentryName+')";'
			x='<div '+u+v+'>'+entryName+'</div>';
			divcontents (entryName+k,x);

			newdiv (entryName+k+"-def",category,"tooltiptext hide tooltipdef");
			x=definitions[category];
			x=x[entryName];
			divcontents (entryName+k+"-def","<b>"+entryName+"</b> "+x);
		}
		k++;
	}
	
};


function divider() {
	document.getElementById("//x1").innerHTML="//";
	document.getElementById("//14").innerHTML="//";
	document.getElementById("//24").innerHTML="//";
	document.getElementById("//34").innerHTML="//";
	document.getElementById("//44").innerHTML="//";
}

function makeTable(){
	var tablelist = [];
	var tableref = [];

	for(var j = 0; j < tabledata.length; j++) {  //make a list of tables
		x = tabledata[j].title;
		tablelist.push(x);
		y = tabledata[j].ref;
		tableref.push(y);
		}

		newdiv("tablesdef","definitionsdiv","block tooltipwrapper defs");
		divcontents("tablesdef","<b>Tables: (click)</b><div class=defs></div>")

		for (var i = 0; i < tablelist.length; i++){  //create table data for this table

			title = tablelist[i];
			ref = tableref[i];

			thisTableData = tabledata[i].children
			newdiv(title,"definitionstables","block");
			tabletitle = ref+"-table";
			divcontents(title,"<table class='hide' id='"+tabletitle+"'></table>"); 
			document.getElementById("tablesdef").innerHTML+="<div id='"+tabletitle+"-div' class='tooltipwrapper defs'>"+title+"</div>";
			document.getElementById(tabletitle+"-div").setAttribute("onclick","hidex('"+tabletitle+"')");

			var rownumber = 0;
			var rowlist = [];
			var itemlist = [];
			var thisBody = document.getElementById(tabletitle).createTBody();
			var itemnumber = 0;

				thisTableData.forEach(function(row){


				if (rownumber==0){
				var thisHead = document.getElementById(tabletitle).createTHead();
				var thisRow = thisHead.insertRow(rownumber);

					for (elem  in row){	
						var thisItemData = row[elem];

								var thisCell = thisRow.insertCell(itemnumber);
								thisCell.innerHTML="<span>"+thisItemData+"</span>";
								itemnumber ++

				}
				rownumber++;
				itemnumber = 0;	
				} else if (rownumber==1){
				var thisRow = thisBody.insertRow(rownumber-1);

					for (elem  in row){	
						var thisItemData = row[elem];

								var thisCell = thisRow.insertCell(itemnumber);
								thisCell.innerHTML="<span>"+thisItemData+"</span>";
								itemnumber ++
					}
				rownumber++;
				itemnumber = 0;
				
				} else {
				var thisRow = thisBody.insertRow(rownumber-1);

					for (elem  in row){	
						var thisItemData = row[elem];

								var thisCell = thisRow.insertCell(itemnumber);
								thisCell.innerHTML="<span>"+thisItemData+"</span>";
								itemnumber ++
					}
				rownumber++;
				itemnumber = 0;
				}
			})
		}

	insertOpportunitySymbols();

	insertRingSymbols();

	sortTable("Weapons",1);
	sortTable("Weapons",3);
	sortTable("Weapons",2);

	sortTable("Armors",1);
	sortTable("Armors",2);

	};


function insertRingSymbols(){

	var div;

	tableobj = ["General", "Initiative", "Martial", "Invocation", "Other Skills", "Downtime", "Negotiations", "Romance", "Espionage"];

	for (j=0; j<tableobj.length; j++)	{
		div = document.getElementById(tableobj[j]).childNodes[0].childNodes[1];
		var fiv = document.getElementById(tableobj[j])
		.childNodes[0].childNodes[0].childNodes[0].childNodes[1].innerHTML;

		var rows = div.getElementsByTagName("tr");

		for (i=0; i<rows.length; i++){

			var eiv=div.childNodes[i].childNodes[0].childNodes[0].innerHTML; 
			var civ=div.childNodes[i].childNodes[0];
			var undefined;

		switch (eiv){
			case "Air": civ.innerHTML+=" <span class='l5r air'>a</span>";
			break;

			case "Earth": civ.innerHTML+=" <span class='l5r earth'>e</span>";
			break;

			case "Fire": civ.innerHTML+=" <span class='l5r fire'>f</span>";
			break;

			case "Water": civ.innerHTML+=" <span class='l5r water'>w</span>";
			break;

			case "Void": civ.innerHTML+=" <span class='l5r'>v</span>";
			break;

			case "undefined": break;

			case "default": break; 
		}
	};
	};
};


function insertOpportunitySymbols(){
	document.getElementById("GeneralOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("InitiativeOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("MartialOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("InvocationOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("OtherSkillsOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("DowntimeOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("NegotiationsOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("RomanceOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
	document.getElementById("EspionageOpportunities-table-div").innerHTML+=" <span class='l5r'>O</span>";
}

function sortTable(tableName,sortByColumn) {
  var table, rows, switching, i, x, y, shouldSwitch;
  tableName = tableName+"-table";
  table = document.getElementById(tableName);
  switching = true;

  sortByColumn = sortByColumn-1;


  while (switching) {
 
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[sortByColumn];
      y = rows[i + 1].getElementsByTagName("td")[sortByColumn];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

        shouldSwitch = true;
        break;
      }
    };

    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function hidex(x) {
	thatTable = document.getElementById(x);

	if (thatTable.classList.contains("hide")){
		hidden = 1;
	} else {hidden = 0;}

	tableref = [];

	for(var j = 0; j < tabledata.length; j++) {  //make a list of tables
			y = tabledata[j].ref;
			tableref.push(y);
			}

	for (i = 0; i < tableref.length; i++){
			thisTable = document.getElementById(tableref[i]+"-table");
			if (thisTable.classList.contains("hide")){
				;
			} else {thisTable.classList.add("hide")}
	}
	
	if (hidden == 1){
		thatTable.classList.remove("hide");
	} else {
		thatTable.classList.add("hide");
	}
}




//TECHS TAB

function makeTechniques(){
	newdiv("techniquecontainerx","techniquecontainer","");
	x = '<form id="techniquesearch" onsubmit="return false" class="inlineblock defs"><span class="inlineblock" style="width:100px">Search Techniques: </span><input id="techniquesearchinput" oninput="techniquefilter()" type="text" class="styledselect width"><br></form>'
	divcontents	("techniquecontainerx",x);

	newdiv("techniquecontainery","techniquecontainerx","inlineblock");
	x = '<div class="inlineblock margin10">Type: <select id="techniquesearchtype" onchange="techniquefilter()" class="styledselect"><option value="any">Any</option><option value="invocation">Invocation</option><option value="kata">Kata</option><option value="kiho">Kiho</option><option value="maho">Maho</option><option value="ninjutsu">Ninjutsu</option><option value="ritual">Ritual</option><option value="shuji">Shuji</option></select></div><div class="inline defs">Ring: <select id="techniquesearchring" onchange="techniquefilter()" class="styledselect"><option value="default">select</option><option value="air">Air</option><option value="earth">Earth</option><option value="fire">Fire</option><option value="water">Water</option><option value="void">Void</option><option value="any">None</option></select></div><div class="inline defs">Rank: <select id="techniquesearchrank1" onchange="techniquefilter()" class="styledselect"><option value="1">=</option><option value="2">=<</option></select><select class="margin10 styledselect" id="techniquesearchrank" onchange="techniquefilter()" class="styledselect"><option value="any">Any</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	divcontents("techniquecontainery",x);

	newdiv("techniqueoutput","techniquecontainerx","block");
}

function techniquefilter() {
	searchString=document.getElementById("techniquesearchinput").value

	let techniqueTemplate = 				
				' <% techlist.forEach(function(tech) { %> ' +
				' <div class="techresults">' +
				' <div class="filtitem padding20" onclick="hideshow(&quot;<%= tech.title %>-effect&quot)"><b><%= tech.title %></b> <i>(<%= tech.reference %>)</i> <%= tech.ring %> <%= tech.type %>    Rank <%= tech.rank %></div>' +
				' <div class="filtitem defs hide" id="<%= tech.title %>-effect"><%= tech.effect %></div>' +
				' </div>' +
				' <% }); %>';

	let techniqueTemplateFunction = _.template(techniqueTemplate);
	techtype=document.getElementById("techniquesearchtype").value;
	techring=document.getElementById("techniquesearchring").value;
	techrank1=document.getElementById("techniquesearchrank1").value;
	techrank=document.getElementById("techniquesearchrank").value;
	
	if (searchString !== false) {
		searchString = searchString.toLowerCase();

		techlist=techniquelist;

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

		techlist = techlist.filter(function(tech)				 {
				if (tech.title.toLowerCase().includes(searchString)) {
					return true;
				} else if (tech.effect.toLowerCase().includes(searchString)) {
					return true;
				} else if (tech.ring.toLowerCase().includes(searchString)) {
					return true;
				} else if (tech.reference.toLowerCase().includes(searchString)) {
					return true;
				}
				return false;


	if (techlist.length > 0) {
				return true;
			}
			return false;
			});
		};


			//sorts schools so if the search term is part of the name, those schools are first in thelist
			techlist = techlist.sort(function(tech) {
				if (tech.title.toLowerCase().includes(searchString)==true){
					return -1;
				} else if (tech.title.toLowerCase().includes(searchString)!==true){
					return 1;
				}
			})

		let html = techniqueTemplateFunction({
			techlist: techlist
	})

		document.getElementById("techniqueoutput").innerHTML=html;
}






//SCHOOLS STUFF


function schoolfilter(){
	searchString=document.getElementById("schoolsearchinput").value

	let schoolsArr = [];
	for (let elem in schools) {

		for (let childElem in schools[elem]) {
			let child = {};
			child = schools[elem][childElem];

			schoolsArr.push(child);
		}
	}

	let schoolsTemplate = '<div>' +
							' <% schoolsArr.forEach(function(child) { %> ' +
							' <div class="filtitemeffect defcategory"> ' +
							' <div class="filtitemeffect2" onclick="hideshow(&quot;<%= child.name %>-school&quot)"><b><%= child.name %></b> <i>(<%= child.source %>)</i> <span class="trailingcommafinder"><% child.role.forEach(function(types) { %> <%= types %>, <% }); %></span></div>' +
							' <div class="filtitemeffect2 hide" id="<%= child.name %>-school"><b>Ability:</b> <%= child.ability %>' +
							' <br><b>Skills:</b>  <span class="trailingcommafinder"><% child.skills.forEach(function(skill) { %> <%= skill %>, <% }); %></span>;' +
							' <br><b>Honor:</b> <%= child.honor %>; <b>Rings:</b> <%= child.ring1 %>, <%= child.ring2 %>; <b>Technique Types:</b> <span class="trailingcommafinder"><% child.techniquetypes.forEach(function(types) { %> <%= types %>, <% }); %></span>;' +
							' <br><b>Favoured Techniques:</b> Rank 1: <span id="startingft" class="trailingcommafinder">' +
							'<% child.startingtechs.forEach(function(stechs) { %> <span id="tec"><%= stechs %></span>, <% }); %>,</span>' +
							'<% child.startingtechoptions.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %>' +
							'<% child.rank1techs.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %></span>' +
							'   Rank 2: <span id="rank2ft"><% child.rank2techs.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %></span>' +
							'   Rank 3: <span id="rank3ft"><% child.rank3techs.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %></span>' +
							'   Rank 4: <span id="rank4ft"> <% child.rank4techs.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %></span>' +
							'   Rank 5: <span id="rank5ft" class="trailingcommafinder"><% child.rank5techs.forEach(function(stechso) { %> <span id="tec"><%= stechso %></span>, <% }); %></span>;' +
							'</div></div>' +
					       ' <% }); %>'+
						  '</div>';

	let schoolsTemplateFunction = _.template(schoolsTemplate);
	
	if (searchString == false) {
		document.getElementById('schooloutput').innerHTML = "";}
	else if (searchString !== false) {
		searchString = searchString.toLowerCase();

			schoolsArr = schoolsArr.filter(function(school) {
				if (school.name.toLowerCase().includes(searchString)) {
					return true;
				} for (i=0; i<school.role.length; i++){ 	
					if (school.role[i].toLowerCase().includes(searchString)){
					return true;
					}
				} if (school.clan.toLowerCase().includes(searchString)) {
					return true;
				} else if (school.ability.toLowerCase().includes(searchString)) {
					return true;
				} else if (school.ring1.toLowerCase().includes(searchString)) {
					return true;
				} else if (school.ring2.toLowerCase().includes(searchString)) {
					return true;
				} else if (school.source.toLowerCase().includes(searchString)) {
					return true;
				} else if (school.keyword.toLowerCase().includes(searchString)) {
					return true;
				} for (i=0; i<school.skills.length; i++){ 	
					if (school.skills[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.startingtechoptions.length; i++){
					for  (j=0; j<school.startingtechoptions[i].length; j++){
					if (school.startingtechoptions[i][j].toLowerCase().includes(searchString)){
					return true;
					}}
				} for (i=0; i<school.startingtechs.length; i++){ 	
					if (school.startingtechs[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.techniquetypes.length; i++){ 	
					if (school.techniquetypes[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.rank1techs.length; i++){ 	
					if (school.rank1techs[i].toLowerCase().includes(searchString)){
					return true;
					} 
				} for (i=0; i<school.rank2techs.length; i++){ 	
					if (school.rank2techs[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.rank3techs.length; i++){ 	
					if (school.rank3techs[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.rank4techs.length; i++){ 	
					if (school.rank4techs[i].toLowerCase().includes(searchString)){
					return true;
					}
				} for (i=0; i<school.rank5techs.length; i++){ 	
					if (school.rank5techs[i].toLowerCase().includes(searchString)){
					return true;
					}
					
					else {
				return false;
			}}});

			//sorts schools so if the search term is part of the name, those schools are first in thelist
			schoolsArr = schoolsArr.sort(function(school) {
				if (school.name.toLowerCase().includes(searchString)==true){
					return -1;
				} else if (school.name.toLowerCase().includes(searchString)!==true){
					return 1;
				}
			})

			//If any of the children match, we still want to show the parent.
			if (schoolsArr.length > 0) {

			let html = schoolsTemplateFunction({
			schoolsArr: schoolsArr
		})
				document.getElementById('schooloutput').innerHTML = html;
		} else {
			document.getElementById('schooloutput').innerHTML = "";
		}
} 
	trailingCommaKiller()

	i = 0;
	linkTechniques();

}

var i = 0

function linkTechniques(){

	if (document.getElementById("tec") !== null){

		i++;

		techName = document.getElementById("tec").innerHTML
		techName = '"'+techName+'"'

		document.getElementById("tec").id = "tec"+i
		
		document.getElementById("tec"+i).setAttribute("onclick","goToTech("+techName+")")

		linkTechniques();

		}
}


function goToTech(techName){
	if (document.getElementById("techniquecontainer").classList.contains("containerx") == true ){
		highlight("techsbutton","techniquecontainer")
	} 

		document.getElementById("techniquesearchinput").value=techName;
		techniquefilter(techName)
		hideshow(techName+"-effect")
}


function titlefilter(){
	searchString=document.getElementById("schoolsearchinput").value

	let titlesArr = [];
	for (let elem in titles) {

			child = titles[elem];

			titlesArr.push(child);
	}

	let titlesTemplate = '<div>' +
							' <% titlesArr.forEach(function(child) { %> ' +
							' <div class="filtitemeffect defcategory"> ' +
							' <div class="filtitemeffect2" onclick="hideshow(&quot;<%= child.title %>-title&quot)"><b><%= child.title %></b> <i>(<%= child.source %>)</i> Title</div>' +
							' <div class="filtitemeffect2 fontsize13 hide" id="<%= child.title %>-title"><b>Ability:</b> <%= child.ability %>' +
							' <br><b>Social:</b>  <%= child.status %>' +
							' <br><b>XP needed to complete:</b> <%= child.xp %>' +
							' <br><b>To Advance:</b> <% child.advance.forEach(function(adv) { %> <%= adv %>, <% }); %>' +
							'</div></div>' +
					       ' <% }); %>'+
						  '</div>';

	let titlesTemplateFunction = _.template(titlesTemplate);
	
	if (searchString == false) {
		document.getElementById('schooloutput').innerHTML = "";}
	else if (searchString !== false) {
		searchString = searchString.toLowerCase();

			titlesArr = titlesArr.filter(function(title) {
				if (title.title.toLowerCase().includes(searchString)) {
					return true;
				} for (i=0; i<title.advance.length; i++){ 	
					if (title.advance[i].toLowerCase().includes(searchString)){
					return true;
					}
				} if (title.source.toLowerCase().includes(searchString)) {
					return true;
				} else if (title.ability.toLowerCase().includes(searchString)) {
					return true;
				} else {
				return false;
			}});

			//If any of the children match, we still want to show the parent.
			if (titlesArr.length > 0) {

			let html = titlesTemplateFunction({
			titlesArr: titlesArr
		})
				document.getElementById('titleoutput').innerHTML = html;
		} else {
			document.getElementById('titleoutput').innerHTML = "";
		}
} }






//THEME

var savetheme = {};

function loadTheme(){
	save = JSON.parse(localStorage.getItem("savetheme"));
	theme=save;

	colourSwitcher(theme)

}

function colourSwitcher(theme){

	savetheme=theme;
	localStorage.setItem("savetheme",JSON.stringify(savetheme));

	theme = color[theme]

	if (theme !== undefined){

	  document.documentElement.style.setProperty('--bg', theme.bg);
	  document.documentElement.style.setProperty('--bg-image', theme.bgimage);
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
		}	

}





//DICE ROLLER

function rolldice (){
	document.getElementById("results").innerHTML = ""
	rollRings();
	rollSkills();
}


function rollRings(){
	ringdicenumber = document.getElementById("ringdicenumber").value 

	for (i=0; i<ringdicenumber; i++){

		ringresult = getRandom(ringdice)

		newdiv("ringdice"+i,"results","")

		x = "<span class='l5r'>d</span> " + ringresult

		while (ringresult == "<span class='l5r'>E</span> <span class='l5r'>T</span>") {
			ringresult = getRandom(ringdice)
			x += " / " + ringresult
		}
						
		divcontents("ringdice"+i,x)
	}
}


function rollSkills(){
	skilldicenumber = document.getElementById("skilldicenumber").value 

	for (i=0; i<skilldicenumber; i++){

		skillresult = getRandom(skilldice)

		newdiv("skilldice"+i,"results","")

		x = "<span class='l5r' style='color:silver'>D</span> " + skillresult;

		while (skillresult == "<span class='l5r'>E</span>" || skillresult == "<span class='l5r'>E</span> <span class='l5r'>T</span>"){
			skillresult = getRandom(skilldice)
			x += " / " + skillresult
		}
		

		divcontents("skilldice"+i,x)
	}
}






//TEAHOUSE MAKER AND OTHER EXTRAS

function makeTea(){

	c1=getRandom(tealists.l1);
	c2=getRandom(tealists.l2);
	c3=getRandom(tealists.l3);
	c4=getRandom(tealists.l4);
	c5=getRandom(tealists.l5);
	c6=getRandom(tealists.l6);	
	c7=getRandom(tealists.l7);
	cZ=getRndInteger(1,6);

	switch(cZ){
		
		case 1: 
			x=getRndInteger(1,2);
			switch(x){			
			case 1:
				tealists.name="The "+c2+" of "+c7; //The Benevolence of Shinsei
				break;
			case 2:
				tealists.name=c7+" and the "+c1+" "+c2;  //Lord Moon and the Glorious Insight
				break;
			case 3:
				tealists.name=c7+" and the "+c6;  //Lord Moon and the Fortunes
				break;
			case 4:
				tealists.name=c7+" and the "+c3+" "+c6;  //Lord Moon and the Benevolent Fortunes
				break;
			}
			tealists.name=capitalizeFirstLetter(tealists.name);
			break;

		case 2: cU=getRandom(tealists.l2);
			tealists.name=cU+" and "+c2; //Propriety and Rectitude
			break;

		case 3: 
			x=getRndInteger(1,5);
			switch(x){
			case 1:
				tealists.name="The "+c4+" "+c5; //The Sixth Mackerel
				break;
			case 2:
				tealists.name=c3+" "+c1+" "+c6; //Two Earnest Duelists
				break;
			case 3:
				tealists.name="The "+c2+" of "+c3+" "+c6; //The Victory of Three Fragrances
				break;
			case 4:
				tealists.name="House of "+c3+" "+c1+" "+c6; //House of Two Earnest Duelists
				break;
			case 5:
				tealists.name="House of "+c3+" "+c6; //House of Two Duelists
				break;
			}
			break;

		case 4: tealists.name="The "+c1+" "+c2; //The Benevolent Honesty
			break; 

		case 5: tealists.name="The "+c1+" "+c5; //The Cheerful Kami
			break;

		case 6: tealists.name="The "+c5+" of "+c2; //The Soy of Certainty
			break;
	};

	document.getElementById("pour").innerHTML = (tealists.name);
};


function namegenerator(){
 	name = nameMaker()
 	document.getElementById("nameoutput").innerHTML="";
 	document.getElementById("nameoutput").innerHTML=name; 	
 }


function shinseifilter() {
	searchString=document.getElementById("shinseisearchinput").value

	if (searchString !== false) {
		searchString = searchString.toLowerCase();

		taofilter = tao.filter(function(saying) {

				if (saying.toLowerCase().includes(searchString)) {
					return true;
				} else {
				return false;
			}});

	if (taofilter.length > 0) {
					html = "";

					for (var i=0; i<taofilter.length;i++){
					html += taofilter[i]+"<p>";
				}

			document.getElementById('shinseioutput').innerHTML = html;
			} else {
			html = "";
			document.getElementById('shinseioutput').innerHTML = html;
		};
}}


 function shinseigenerator(){
 	shinsei = getRandom(tao)
 	document.getElementById("shinseioutput").innerHTML="";
 	document.getElementById("shinseioutput").innerHTML=shinsei; 	
 }

function nameMaker(){

	array = [1,2];
	type = getRandom(array);

	if (type == 1){
		name = getRandom(names);
	} 
	else if (type == 2){
		array = ["m","f"]

		gender = getRandom(array)

		pro = getRandom(protheme);

		if (gender=="m"){
			deutero = getRandom(mdeuterotheme);
		} else if (gender == "f"){
			deutero = getRandom(fdeuterotheme);
		}

		proLower = pro.toLowerCase()

			while (proLower == deutero){
				if (gender=="m"){
					deutero = getRandom(mdeuterotheme);
				} else if (gender == "f"){
					deutero = getRandom(fdeuterotheme);
				}
					}

		name = pro.concat(deutero);
		
	}

	return name;
}

