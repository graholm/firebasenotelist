addListItem( (nameInput) + "/notes", (noteList) )

var nameInput = $("#name-input")
var noteInput = $("#note-input")
var noteList = $("#note-list")

function getNotesForName(name) {  
  
  noteInput.keydown(function(e) {
    if (e.which == 13) {
      var valueToSave = nameInput.val();
      addListItem("nameList", valueToSave);
      console.log (valueToSave)
    }	
  })
  if (e.which == 13){
    var valueToSave = noteInput.val();
    console.log (valueToSave)
  } 	
  onNewListItem(name + "/notes", function(note) )
    console.log(note)
  }


noteInput.keydown(function(e) {
  if (e.which == 13) {    
    addListItem(name + "/notes", noteInput.val())
  }
})
