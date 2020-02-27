var weaponCategoryArray = [];

function insertSelects(){
  var each, every

  //insert Category filter dropdown into Weapons Table
  document.getElementById("Weapons-table").rows[0].cells[2].innerText="";

	insertFilterToTable("Weapons-table","weapons-table-category-select","SELECT",2)

  for (each in tabledata){
    if (tabledata[each].title == "Weapons"){
      for (every in tabledata[each].children){
        weaponCategoryArray.push(tabledata[each].children[every].category)
      }
    }
  }
  weaponCategoryArray = removeDuplicates(weaponCategoryArray)
  weaponCategoryArray.shift()

  makeSelectDropdown("weapons-table-category-select","Category",weaponCategoryArray)
  document.getElementById("weapons-table-category-select").options[0].value = "any";

  //insert text input filter into Weapons Table Qualities

  insertFilterToTable("Weapons-table","weapons-table-qualities-input","INPUT",7)

  //insert book filter into Weapons Table Qualities

  document.getElementById("Weapons-table").rows[0].cells[10].innerText="";

  insertFilterToTable("Weapons-table","weapons-table-book-select","SELECT",10)

  weaponCategoryArray = [];

  for (each in tabledata){
    if (tabledata[each].title == "Weapons"){
      for (every in tabledata[each].children){
        weaponCategoryArray.push(tabledata[each].children[every].source)
      }
    }
  }

  weaponCategoryArray = removeDuplicates(weaponCategoryArray)
  weaponCategoryArray.shift()

  makeSelectDropdown("weapons-table-book-select","Book",weaponCategoryArray)
  document.getElementById("weapons-table-book-select").options[0].value = "any";

}

function insertFilterToTable(tableId,filterId,inputType,columnToInsertInput){
	
	var parentName, filterId, columnToInsertInput, tableId; 

	parentName = document.getElementById(tableId).rows[0].cells[columnToInsertInput];

  switch (inputType){

    case "SELECT":
      makeSelect(parentName,filterId,"styledselect inline","filterTable('"+tableId+"','"+filterId+"',"+columnToInsertInput+")")
    break;

    case "INPUT":
      makeTextInput(parentName,filterId,"styledselect inline","",filterId+"-input","styledselect inline")

      input = document.getElementById(filterId+"-input")

      input.setAttribute("oninput","filterTable('"+tableId+"','"+filterId+"-input',"+columnToInsertInput+")")
      
    break;
  }
}


function filterTable(tableId,selectId,columnNumToFilter){

  // Declare variables
  var input, filter, table, tr, td, i, txtValue, k;
  select = document.getElementById(selectId).value.toLowerCase();
  table = document.getElementById(tableId);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[columnNumToFilter];
    if (td) {
      txtValue = td.textContent.toLowerCase() || td.innerText.toLowerCase();
      if (txtValue.indexOf(select) > -1 || select == "any" || select == "") {
        tr[i].classList.add("show");
        tr[i].classList.remove("hide")
        tr[i].classList.remove("odd");
         tr[i].classList.remove("even");
      } else {
        tr[i].classList.add("hide");
        tr[i].classList.remove("show")
            tr[i].classList.remove("odd");
    tr[i].classList.remove("even");
      }
    }
  }
  k=0
  // Recolour the rows
  for (i = 1; i < tr.length; i++){

    if (tr[i].classList.contains("show")){
      k++
      if (k & 1){
          tr[i].classList.add("odd")}
      else {tr[i].classList.add("even")}
    }
  }
}

