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
	thisTable[0] = {ring:"", spend:"OPPORTUNITIES SPEND"}

	thisRing = document.getElementById("ringselect").value
	document.getElementById("opps-table").innerHTML=""


	for (each in oppdata){
		for (every in oppdata[each].children){
			x = oppdata[each].children[every].ring
			ringOpps = oppdata[each].children[every]

			if (x !== undefined){
			if (x.includes(thisRing) || x.includes("Any")){

				thisTable.push(ringOpps)

			}
		}
	}}


			title = thisRing+"-opportunities"
			tabletitle = thisRing+"-opps-table";

			newdiv(title,"opps-table","block");
			
			divcontents(title,"<table id='"+tabletitle+"'></table>"); 
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

	for (i = 0; i < array.length; i++){
		if (document.getElementById(array[i]) !== null){
					document.getElementById(array[i]).rows[1].cells[0].innerText = document.getElementById(array[i]).rows[1].cells[0].innerText + " General"
					document.getElementById(array[i]).rows[2].cells[0].innerText = document.getElementById(array[i]).rows[2].cells[0].innerText + " General"
					document.getElementById(array[i]).rows[3].cells[0].innerText = document.getElementById(array[i]).rows[3].cells[0].innerText + " Initiative"
					document.getElementById(array[i]).rows[4].cells[0].innerText = document.getElementById(array[i]).rows[4].cells[0].innerText + " Martial"
					document.getElementById(array[i]).rows[5].cells[0].innerText = document.getElementById(array[i]).rows[5].cells[0].innerText + " Invocation"
					document.getElementById(array[i]).rows[6].cells[0].innerText = document.getElementById(array[i]).rows[6].cells[0].innerText + " Other Skills"
					document.getElementById(array[i]).rows[7].cells[0].innerText = document.getElementById(array[i]).rows[7].cells[0].innerText + " Downtime"
					document.getElementById(array[i]).rows[8].cells[0].innerText = document.getElementById(array[i]).rows[8].cells[0].innerText + " Negotiations"
					document.getElementById(array[i]).rows[9].cells[0].innerText = document.getElementById(array[i]).rows[9].cells[0].innerText + " Romance"
					document.getElementById(array[i]).rows[10].cells[0].innerText = document.getElementById(array[i]).rows[10].cells[0].innerText + " Espionage"
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
