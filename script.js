var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

console.log ("hi",nameInput.val())
addListItem( (nameInput.val()) + "/notes", (noteList) )


nameInput.keydown(function(e) {
  if (e.which == 13) {
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
