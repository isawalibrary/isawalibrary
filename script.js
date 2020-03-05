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
	document.getElementById("//0").innerHTML="//";
	document.getElementById("//1").innerHTML="//";
	document.getElementById("//2").innerHTML="//";	
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


	sortTable("Weapons",1);
	sortTable("Weapons",3);
	sortTable("Weapons",2);

	sortTable("Armors",1);
	sortTable("Armors",2);

//recolour table
for (n = 0; n < tableref.length; n++){
	tabletitle = tableref[n]+"-table"
	thisTable = document.getElementById(tabletitle).rows
  	for (m = 1; m < thisTable.length; m++){
	  	thisTable[m].classList.remove("odd")
	  	thisTable[m].classList.remove("even")

	      k++
	      if (k & 1){
	          thisTable[m].classList.add("odd")}
	      else {thisTable[m].classList.add("even")
	  		}
    	}
    }
document.getElementById("tablesdef").innerHTML+="<div id='opps-table-div' class='tooltipwrapper defs'><span class='l5r'>O</span> Opportunities</div>";
document.getElementById("opps-table-div").setAttribute("onclick","hidex('opportunities')");
newdiv("opportunities","definitionstables","block hide")
newdiv("ringoppdrop","opportunities","block")
newdiv("opps-table","opportunities","block")
setUpRingOpps()

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
			y = tabledata[j].ref+"-table";
			tableref.push(y);
			}
			tableref.push("opportunities")

	for (i = 0; i < tableref.length; i++){
			thisTable = document.getElementById(tableref[i])
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
							'<% child.startingtechoptions.forEach(function(stechso) { %> <% stechso.forEach(function(stechsox) { %><span id="tec"><%= stechsox %></span>, <% }); %><% }); %>' +
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

//JSON MAKER

function setUpDataBuilder(){
	newdiv("datatype","databuilderdiv","block")

	makeSelect("datatype","datatypeselect","center block styledselect","createDataForm()")

	datatypearray = ["Technique","School","Clan","Family","Weapon","Armor","NPC","Title"]

	makeSelectDropdown("datatypeselect","Select Data Type",datatypearray)

	newdiv("dataform","databuilderdiv","textalignleft notbold styledselect inlineblock margin10")

	newdiv("dataoutput","databuilderdiv","notbold inlineblock margin20 textalignleft")
}

	values=[];

function createDataForm(){

	datatype = document.getElementById("datatypeselect").value;

	//clear form to start
	divcontents("dataform","");
	divcontents("dataoutput","")

	switch (datatype) {

		case "School":
				datafields = ["Title (no spaces, lower case i.e. wanderingblade)","Family","School Name","Clan","School Ring 1","School Ring 2","Sourcebook","Number of Starting Skills","Artisan Skill","Social Skill","Scholar Skill","Martial Skill","Trade Skill","Taught School Skills","Honor","Weapons ([])","Armor ([])","Role ([])","School Technique Types ([])","Starting Techs ([])","Starting Tech Options ([[A,B,C],[D,E]])","Choices Available from Starting Options ([2,1])","School Ability","Rank 1 Curriculum Techniques","Rank 2 Curriculum Techniques","Rank 3 Curriculum Techniques","Rank 4 Curriculum Techniques","Rank 5 Curriculum Techniques","Keywords"]
				break;

		case "Technique":
				datafields = ["title","type (Kata, Shuji)","rank","reference","ring (Earth / Water)","effect (Activation:...&lt;br>&lt;br>Effect"]
				break;

		case "Clan":
				datafields = ["Clan Name","Ring","Skill (i.e. Social)","Status","Weapons ([])","Armor ([])","Advantages ([])","Disadvantages ([])"]
				break;

		case "Family":
				datafields = ["Family Name","Clan","Ring 1","Ring 2","Advantages ([])","Disdvantages ([])","Skill 1","Skill 2","Demeanors ([])","Glory","Wealth (4 koku)"]
				break;

		case "Armor":
				datafields = ["Armor Name","Physical Res","Supernatural Res","Armor qualities","Rarity","Price (4 koku)","Source"]
				break;

		case "NPC":
				datafields = ["Name","Type","Combat Conflict Rating","Intrigue Conflict Rating","Ring Type (set / random)","Earth Ring","Air Ring","Fire Ring","Water Ring","Void Ring","Honor","Glory","Status","Endurance","Composure","Focus","Vigilance","Equipment Type (equipped or natural)","Artisan Skill","Martial Skill","Scholar Skill","Social Skill","Trade Skill","Demeanor ([])","Advantages ([])","Disadvantages ([])","Weapon ([])","Armor ([])","Qualities (An oni is an Otherworldly, Tainted being of silhouette 4.)","Abilities ([])","Sourcebook"]
				break;

		case "Weapon":
				datafields = ["name","skill","category","range","damage","deadliness","grips (1-hand: - / 2-hand: Damage +2)","qualities (Mundane &lt;br>A bokken can be used for Iaijutsu Cut techniques)","rarity","price (1 koku)","source"]
				break;

		case "Title":
				datafields = ["Title","Status","Xp","Ability (Title Ability: )","Advance ([])","Source"]
				break;
	}

	for (i=0; i< datafields.length; i++){
		makeTextInput("dataform","data"+[i],"block datainputlength margin10",datafields[i]+": ","datainput"+[i],"styledselect margin10 datainputlength")

		

		datavalue = document.getElementById("datainput"+[i]).value
		values.push(datavalue);

		if (i == datafields.length -1){
			
			makeButton("dataform","cleardatabutton","styledselect margintop margin10","clearData()","Clear Fields")
			makeButton("dataform","copydatabutton","styledselect margintop margin10","copyDivToClipboard()","Copy JSON")
		}


	}

	for (i=0; i< datafields.length; i++){
		document.getElementById("datainput"+[i]).setAttribute("oninput","generateData()");
	}

	generateData();
}


function clearData(){
	createDataForm()
}

function copyDivToClipboard() {
        var range = document.createRange();
        range.selectNode(document.getElementById("dataoutput"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
                }

function generateData(){

	datatype = document.getElementById("datatypeselect").value;

	values =[]
	var outputstring = [];

	for (i=0; i< datafields.length; i++){

		datavalue = document.getElementById("datainput"+[i]).value
		values.push(datavalue);
	}

		switch (datatype) {
			case "School":
										
					outputstring[0] = values[0]+': {'
					outputstring[1] = 'family:"'+values[1]+'",'
					outputstring[2] = 'name:"'+values[2]+'",'
					outputstring[3] = 'clan:"'+values[3]+'",'
					outputstring[4] = 'ring1: "'+values[4]+'",'
					outputstring[5] = 'ring2: "'+values[5]+'",'
					outputstring[6] = 'source: "'+values[6]+'",'
					outputstring[7] = 'skillnumber: '+values[7]+','
					outputstring[8] = 'schoolskills:{Artisan:'+values[8]+',Social:'+values[9]+',Scholar:'+values[10]+',Martial:'+values[11]+',Trade:'+values[12]+'}'
					outputstring[9] = 'skills: ['+values[13]+'],'
					outputstring[10] = 'honor: '+values[14]+','
					outputstring[11] = 'weapons:['+values[15]+'],'
					outputstring[12] = 'armor:['+values[16]+'],'
					outputstring[13] = 'techniquetypes: ['+values[17]+'],'
					outputstring[14] = 'role: ['+values[18]+'],'
					outputstring[15] = 'startingtechs: ['+values[19]+'],'
					outputstring[16] = 'startingtechoptions: ['+values[20]+'],'
					outputstring[17] = 'chooseoptions:['+values[21]+'],'
					outputstring[18] = 'ability:['+values[22]+'],'
					outputstring[19] = 'rank1techs:['+values[23]+'],'
					outputstring[20] = 'rank2techs:['+values[24]+'],'
					outputstring[21] = 'rank3techs:['+values[25]+'],'
					outputstring[22] = 'rank3techs:['+values[25]+'],'
					outputstring[23] = 'rank4techs: ['+values[26]+'],'
					outputstring[24] = 'rank5techs:"'+values[27]+'",'
					outputstring[25] = 'keyword:"'+values[28]+'",'
					outputstring[26] = '},'

					break

			case "Technique":

					outputstring[0] = '{'
					outputstring[1] = 'title: "'+values[0]+'",'
					outputstring[2] = 'type: "'+values[1]+'",'
					outputstring[3] = 'rank: "'+values[2]+'",'
					outputstring[4] = 'reference: "'+values[3]+'",'
					outputstring[5] = 'ring: "'+values[4]+'",'
					outputstring[6] = 'effect: "'+values[5]+'"'
					outputstring[7] = '},'
					
					break;

			case "Family":
										
					outputstring[0] = values[0].toLowerCase()+': {'
					outputstring[1] = 'name:"'+values[0]+'",'
					outputstring[2] = 'clan:"'+values[1]+'",'
					outputstring[3] = 'ring1:"'+values[2]+'",'
					outputstring[4] = 'ring2:"'+values[3]+'",'
					outputstring[5] = 'advantages:['+values[4]+'],'
					outputstring[6] = 'disadvantages:['+values[5]+'],'
					outputstring[7] = 'skill1:"'+values[6]+'",'
					outputstring[8] = 'skill2:"'+values[7]+'",'
					outputstring[9] = 'demeanor:['+values[8]+'],'
					outputstring[10] = 'glory:'+values[9]+','
					outputstring[11] = 'wealth:"'+values[10]+'",'
					outputstring[12] = '},'

					break;

			case "Weapon":
									
					outputstring[0] = '{name: "'+values[0]+'", skill:"['+values[1]+']", category:"'+values[2]+'", range:"'+values[3]+'", damage:"'+values[4]+'", deadliness:"'+values[5]+'", grips:"'+values[6]+'", qualities:"'+values[7]+'", rarity:"'+values[8]+'", price:"'+values[9]+'", source:"'+values[10]+'"},' 

					break;

			case "Armor":
					outputstring[0] = '{armor:"'+values[0]+'", phys:'+values[1]+', sup:'+values[2]+', qualities:"'+values[3]+'", rarity:"'+values[4]+'", price:"'+values[5]+'", source:"'+values[6]+'"},'
					break;

			case "Clan":
					
					outputstring[0] = values[0]+':{'
					outputstring[1] = 'name:"'+values[0]+'",'
					outputstring[2] = 'clanring:{'+values[1]+':+1},'
					outputstring[3] = 'clanskill:"'+values[2]+'",'
					outputstring[4] = 'clanstatus:'+values[3]+','
					outputstring[5] = 'weapons:['+values[4]+'],'
					outputstring[6] = 'armor:['+values[5]+'],'
					outputstring[7] = 'advantages:['+values[6]+'],'
					outputstring[8] = 'disadvantages:['+values[7]+'],'
					outputstring[9] = '},'

					break;

			case "Title":
					nospaces = values[0].replace(/ /g, "")
					nospaces = nospaces.replace(/,/g, "")
					nospaces = nospaces.toLowerCase()

					outputstring[0] = nospaces+':{'
					outputstring[1] = 'title:"'+values[0]+'",'
					outputstring[2] = 'status:"'+values[1]+'",'
					outputstring[3] = 'xp:'+values[2]+' ,'
					outputstring[4] = 'ability:"'+values[3]+'",'
					outputstring[5] = 'advance:['+values[4]+'],'
					outputstring[6] = 'source:"'+values[5]+'"'
					outputstring[7] = '},'

					break

			case "NPC":

					nospaces = values[0].replace(/ /g, "")
					nospaces = nospaces.replace(/,/g, "")
					nospaces = nospaces.toLowerCase()
			
					outputstring[0] = nospaces+'{'
					outputstring[1] = 'fullname:"'+values[0]+'",'
					outputstring[2] = 'title:"'+nospaces+'",'
					outputstring[3] = 'type:"'+values[1]+'",'
					outputstring[4] = 'conflictcombat:'+values[2]+','
					outputstring[5] = 'conflictintrigue:'+values[3]+','
					outputstring[6] = 'ring:{type:"'+values[4]+'",Earth:'+values[5]+',Air:'+values[6]+',Fire:'+values[7]+',Water:'+values[8]+',Void:'+values[9]+',},'
					outputstring[7] = 'honor:'+values[10]+',glory:'+values[11]+',status:'+values[12]+','
					outputstring[8] = 'endurance:'+values[13]+',composure:'+values[14]+',focus:'+values[15]+',vigilance:'+values[16]+','
					outputstring[9] = 'equiptype:"'+values[17]+'",'
					outputstring[10] = 'skills:{artisanskill:'+values[18]+',martialskill:'+values[19]+',scholarskill:'+values[20]+',socialskill:'+values[21]+',tradeskill:'+values[22]+',},'
					outputstring[11] = 'demeanor:["'+values[23]+'"],'
					outputstring[12] = 'advantages:['+values[24]+'],'
					outputstring[13] = 'disadvantages:['+values[25]+'],'
					outputstring[14] = 'weapon:['+values[26]+'],'
					outputstring[15] = 'armor:['+values[27]+'],'
					outputstring[16] = 'qualities:"'+values[28]+'",'
					outputstring[17] = 'abilities:['+values[28]+'],'
					outputstring[18] = 'source:"'+values[29]+'",'
					outputstring[19] = '},'

					break;
		
			}
		

			for (i=0; i< outputstring.length; i++){
				
				newdiv("output"+i,"dataoutput","block")
				
				document.getElementById("output"+i).textContent = outputstring[i]
				}
}

