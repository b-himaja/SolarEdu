const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });


function curriculumRewrite(){
    document.getElementById("mainpara").innerHTML="<ul style=\"padding-left:20px;\"><li>The center of the solar system: Our Sun</li><li>The Eight Planets</li><ol><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ol><li>Pluto: An honorary planet in our hearts</li><li>Other dwarf planets</li><li>The moons of the solar system</li><li>The asteroid belt</li><li>The Kuiper belt</li><li>Comets</li><li>Eclipses: </li><ul><li>Solar Eclipse</li><li>Lunar Eclipse</li></ul></ul>";

}

function aboutRewrite(){
    document.getElementById("mainpara").innerHTML="<p>SolarEdu aims to educate users on all the basics about the solar system and eclipses. Learning is entirely self paced and user's can choose what they want to learn and when they want to learn. SolarEdu provides an array of different resources so that every user gets their educational needs me. Here at SolarEdu, our primary aim is the education of everyone no matter their background or educational status. </p>"
}

var answers = ["D", "C", "B","A","B"];
var tot = answers.length;
   
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var answers = ["D", "C", "B","A","B"];
   var tot = answers.length;
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i])
        { score += 1;
        document.getElementsByClassName("question-box")[i].style.backgroundColor="palegreen";
        }

        else{
            document.getElementsByClassName("question-box")[i].style.backgroundColor="#FF6961";

        }
        
    return score;
}
function returnScore() {
    var answers = ["D", "C", "B","A","B"];
   var tot = answers.length;
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    document.getElementById("myresults").style.backgroundColor="white"; 
}