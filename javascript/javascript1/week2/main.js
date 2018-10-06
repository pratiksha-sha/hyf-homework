//step3
 function object(){
    const time = 12;  
    return time;  
}
let time = 12;
let timeObject= object(time);
console.log(timeObject);

//ex 2
const farver = [{color:'red'},{color:'blue'},{color:'yellow'}]
function myColors(color1,color2,color3){
        farver[0].color = color1;
        farver[1].color = color2;
        farver[2].color = color3;
        return farver;
    }

const colorObjects = myColors('red','blue','yellow');
console.log(colorObjects)
 
for (i = 0; i < farver.length; i++) {
    console.log (farver[i].color);

}

///8
let today = 'sunday';
console.log(today);
let daysTomeet = 9;
let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

let meetingDay = daysTomeet % days.length;
console.log('Today is: ' + today);
console.log('How many days to meet: '+ daysTomeet);
console.log('We are meeting on: ' + days[meetingDay]);

//smart-ease-Goes Global


let notes = [];
function addNote(note, noteId){
    notes.push(note,noteId)
    return addNote;
}
addNote('homework', 3);
addNote('my week', 2);
console.log(notes);


function getNoteFromId(id){
for (i = 0; i < notes.length; i++){
if (notes[i].noteId == id){
console.log (notes[i]);
break;
}

else{
    console.log('This ID number:' + id+ 'is not available');
}
}
}

function showAllNotes(){
    for(i = 0; i < notes; i++) {
console.log ('The note with id:' + notes[i].noteId + 'has the following text' + notes[i].noteId + '.');
}
}

//cactusIO=interactive
let activities = [];
function addActivity(date, activity,duration){
    activities.push({date, activity, duration});
    return activities;
}
addActivity( '23/7-18', 'youtube', 30);
addActivity('30/7-18', 'Facebook', 10);
addActivity('1/8-18', 'gaming', 15);

function showStatus(activities){
    for (i = 0; i < activities.length; i++) {
        console.log()
}
}
