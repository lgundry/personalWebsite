let ourTeam = document.querySelector("#ourTeam ul");
let teamMembers = document.getElementById('teamMembers');
let revealOurTeam = document.getElementById('revealOurTeam');
let isClicked = false;

function teamButtonAction(){
    isClicked = !isClicked;
    if(isClicked){
        $(ourTeam).show();
    } else {
        $(ourTeam).hide();
    }
}

function watch(){
    revealOurTeam.addEventListener("click", teamButtonAction);
}

$(document).ready(watch);

