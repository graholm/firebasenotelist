addListItem( (nameInput) + "/notes", (noteList) )

var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

nameInput.keydown(function(e) {
  if (e.which == 13) {
    var valueToSave = nameInput.val();
    addListItem("nameList", valueToSave);
    console.log (valueToSave)
  }	
})

function getNotesForName(name) {  
  if (e.which == 13){
    var valueToSave = noteInput.val();
  } 	
  onNewListItem(name + "/notes", function(note) )
    console.log(note)
  }


noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
