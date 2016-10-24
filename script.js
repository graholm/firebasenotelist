var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

noteInput.keydown(function(e) {
  if (e.which == 13) {
    console.log ("hi",nameInput.val())
    addListItem( (nameInput.val()) + "/notes", noteInput.val())
    var valueToSave = nameInput.val();
    addListItem("nameList", valueToSave); 
  }	
})

//function getNotesForName(name) {  
//if (e.which == 13){
//var valueToSave = noteInput.val();
//console.log (valueToSave)
//}
//
//noteInput.keydown(function(e) {
//  if (e.which == 13) {    
//    addListItem(name + "/notes", noteInput.val())
//  }
//}
