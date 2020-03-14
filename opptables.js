function setUpRingOpps(){
	makeSelect("ringoppdrop","ringselect","styledselect inline marginbottom margintop","ringOppTables()")
	rings = ["Air","Earth","Fire","Water","Void"]
	makeSelectDropdown("ringselect","",rings)
	document.getElementById("ringselect").options[0].innerHTML="Opportunities by Ring"


	makeSelect("ringoppdrop","contextselect","styledselect inline margin10","contextOppTables()")
	contexts = ["General", "Initiative", "Martial", "Invocation", "Other Skills", "Downtime", "Negotiations", "Romance", "Espionage"]
	makeSelectDropdown("contextselect","Opportunities by Context",contexts)
	document.getElementById("contextselect").options[0].innerHTML="Opportunities by Context"

}

	thisTable = []

function ringOppTables(){

	thisTable = []
	thisTableTitle = []
	thisTable[0] = {ring:"", spend:"OPPORTUNITIES SPEND"}

	thisRing = document.getElementById("ringselect").value
	document.getElementById("opps-table").innerHTML=""


	for (each in oppdata){
		for (every in oppdata[each].children){
			x = oppdata[each].children[every].ring
			title = oppdata[each].title
			ringOpps = oppdata[each].children[every]

			if (x !== undefined){
			if (x.includes(thisRing) || x.includes("Any")){
				thisTableTitle.push(title)
				thisTable.push(ringOpps)

			}
		}
	}}


			title = thisRing+"-opportunities"
			tabletitle = thisRing+"-opps-table";

			newdiv(title,"opps-table","block");
			
			divContents(title,"<table id='"+tabletitle+"'></table>"); 
			document.getElementById(title).innerHTML+="<div id='"+tabletitle+"-div' class='tooltipwrapper defs'></div>";

			var rownumber = 0;
			var rowlist = [];
			var itemlist = [];
			var thisBody = document.getElementById(tabletitle).createTBody();
			var itemnumber = 0;

				thisTable.forEach(function(row){

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

	setSelectedValue(document.getElementById("contextselect"), "O by Context")

	var array = ["Air-opps-table","Earth-opps-table","Fire-opps-table","Water-opps-table","Void-opps-table"]

	for (var i = 0; i < array.length; i++){
		if (document.getElementById(array[i]) !== null){
			var table = document.getElementById(array[i])

					for (var j = 1; j < thisTable.length; j++){
						var k = j - 1;
						document.getElementById(array[i]).rows[j].cells[0].innerText = document.getElementById(array[i]).rows[j].cells[0].innerText +" "+ thisTableTitle[k]
					}
				}
	}
}


function contextOppTables(){

	thisTable = []
	thisTable[0] = {}

	thisRing = document.getElementById("contextselect").value
	document.getElementById("opps-table").innerHTML=""

		for (each in oppdata){
		if (oppdata[each].title == thisRing){
			for (every in oppdata[each].children){
				thisTable.push(oppdata[each].children[every])
			}
		}

	}

			title = thisRing+"-opportunities"
			title = title.replace(/ /g, "")
			tabletitle = title+"-opps-table";

			newdiv(title,"opps-table","block");
			
			divcontents(title,"<table id='"+tabletitle+"'></table>"); 
			document.getElementById(tabletitle).innerHTML+="<div id='"+tabletitle+"-div' class='tooltipwrapper defs'></div>";

			var rownumber = 0;
			var rowlist = [];
			var itemlist = [];
			var thisBody = document.getElementById(tabletitle).createTBody();
			var itemnumber = 0;

				thisTable.forEach(function(row){

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

	setSelectedValue(document.getElementById("ringselect"), "O by Ring")
	
}
