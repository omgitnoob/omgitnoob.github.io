
// target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
var allpages = document.querySelectorAll(".page");

//select all subtopic pages
function hideall() 
{ //function to hide all pages
    for (let onepage of allpages) 
    { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}

function show(pgno) 
{ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
show(1);
page1btn.addEventListener("click", function () { show(1); console.log("page1");});
page2btn.addEventListener("click", function () { show(2); console.log("page2");});
page3btn.addEventListener("click", function () { show(3); console.log("page3");});
page4btn.addEventListener("click", function () { show(1); console.log("page1");});
page5btn.addEventListener("click", function () { show(2); console.log("page2");});
page6btn.addEventListener("click", function () { show(3); console.log("page3");});



// JS for hamMenu
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);

function toggleMenus() 
{ /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) 
    {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } 
    else 
    { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}


// Js for ImgTree to the correct tree
const GOTOPineTree = document.querySelector("#PineTreeImg");
const GOTOOakTree = document.querySelector("#OakTreeImg");
const GOTOEcualptusTree = document.querySelector("#EcualptusTreeImg");
const GOTOTeakTree = document.querySelector("#TeakTreeImg");
const GOTORubberTree = document.querySelector("#RubberTreeImg");
const LeaveFalling = new Audio("audio/TreeLeave.MP3");


GOTOPineTree.addEventListener("click", function() {
    LeaveFalling.play(); // Play audio when click
    show(2); // does to go next page
    document.querySelector("#PineTree").scrollIntoView({ behavior: "smooth" }); // scroll the id of the tree into View
});

GOTOOakTree.addEventListener("click", function() {
    LeaveFalling.play(); // Play audio when click
    show(2); // does to go next page
    document.querySelector("#OakTree").scrollIntoView({ behavior: "smooth" }); // scroll the id of the tree into View
});

GOTOEcualptusTree.addEventListener("click", function() {
    LeaveFalling.play(); // Play audio when click
    show(2); // does to go next page
    document.querySelector("#EcualptusTree").scrollIntoView({ behavior: "smooth" }); // scroll the id of the tree into View
});

GOTOTeakTree.addEventListener("click", function() {
    LeaveFalling.play(); // Play audio when click
    show(2); // does to go next page
    document.querySelector("#TeakTree").scrollIntoView({ behavior: "smooth" }); // scroll the id of the tree into View
});
// => its a short way to call an funcation
// GOTORubberTree.addEventListener("click", () => {});
GOTORubberTree.addEventListener("click", function() {
    LeaveFalling.play(); // Play audio when click
    show(2); // does to go next page
    document.querySelector("#RubberTree").scrollIntoView({ behavior: "smooth" }); // scroll the id of the tree into View
});

// Using loop to check in the container
// document.querySelectorAll('.galleryContainer img').forEach(img => {
//     img.addEventListener('click', function () {
//         const targetId = this.title; // or this.alt
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//     });
// });
//
// and another loop
// ["PineTree", "OakTree", "EcualptusTree", "TeakTree", "RubberTree"].forEach(tree => {
//     const img = document.querySelector(`#${tree}Img`);
//     const article = document.querySelector(`#${tree}`);
//     img.addEventListener("click", () => {
//         article.scrollIntoView({ behavior: "smooth" });
//     });
// });



// Footer Field
const IsSubmitPress = document.getElementById("SubmitField");

IsSubmitPress.addEventListener("click", function(){checkInput();});

function checkInput() 
{
    const NameField = document.getElementById("NameField").value;
    const EmailField = document.getElementById("EmailField").value;
    
    if (NameField.trim() && EmailField.trim() !== "") 
    {
        alert("Thank you for Signing up.");
        document.getElementById("NameField").value = "";
        document.getElementById("EmailField").value = "";
    } 
    else 
    {
        alert("Please enter your Name and Email before clicking Submit.");
        document.getElementById("NameField").value = "";
        document.getElementById("EmailField").value = "";
    }
}



// Quiz --------------------------------------------------------------------------------------
const btnSubmit=document.querySelector("#btnSubmit");
const btnReset=document.querySelector("#btnReset");
const scorebox=document.querySelector("#scorebox");
btnSubmit.addEventListener("click",CheckAnsQuiz);
btnReset.addEventListener("click",ResetQuiz);
let CorrectAnsScore = 0;
let QuizAnsArray = [];


function CheckAnsQuiz()
{
    CorrectAnsScore = 0; //reset score to 0, check ans and give score if correct
    
    // Manually Version
    // CheckAllQuiz(1,"2");
    // CheckAllQuiz(2,"Teak");
    // CheckAllQuiz(3,"Rubber");
    // CheckAllQuiz(4,"Pine");
    // CheckAllQuiz(5,"2");

    QuizAnsArray = ["2", "Teak", "Rubber", "Pine", "2"];
    for (let i = 0; i < QuizAnsArray.length; i++)
    {
        CheckAllQuiz(i+1, QuizAnsArray[i]);
              //QuestionNumber   //CorrectAns
    }
}

function CheckAllQuiz(QuestionNumber, CorrectAns)
{
    // Another Version without using Js Template Literal
    // let QuestonTemp = document.querySelector("input[name='q"+QuestionNumber+"']:checked").value;
    let QuestonTemp = document.querySelector(`input[name='q${QuestionNumber}']:checked`).value;
    let QuestionBackground = document.querySelector(`#Question${QuestionNumber}`);

    console.log(QuestonTemp);
    if (QuestonTemp == CorrectAns)
    {
        CorrectAnsScore++;
        QuestionBackground.classList.add('AnsCorrect');
    } 
    else
    {
        QuestionBackground.classList.add('AnsWrong');
    }
    
    scorebox.innerHTML="You got: "+CorrectAnsScore+ " Correct.";
}



function ResetQuiz()
{
    // let QuestionBackground = document.querySelector(`#Question${QuestionNumber}`);

    CorrectAnsScore = 0; //reset score to 0, check ans and give score if correct


    // for loop start at 1 because its reading for the question 1 eg you have question 1 with 0 inside the loop
    // it will be question 0 which is wrong
    for (let i = 1; i <= QuizAnsArray.length; i++)
    {
        let QuestionBackground = document.querySelector(`#Question${i}`);
        QuestionBackground.classList.remove('AnsCorrect', 'AnsWrong');
    }
}


// Game --------------------------------------------------------------------------------------
page3btn.addEventListener("click", function () { 
    setGameGrid();
    TreesSpalingSpawner();
});


function setGameGrid()
{
    // Setting up the grid in html
    for(let i = 0; i < 2; i++)
    {
        let tile = document.createElement("div");
        tile.id =i.toString();
        document.getElementById("GameBoard").appendChild(tile);
    }
    GameBoard.addEventListener("mouseover",AddEventOver);
}


let Stages = [];
function TreesSpalingSpawner() 
{
    let Stage1 = document.createElement("img");
    Stage1.src = "images/CropImages/Stage1.png";

    let Stage2 = document.createElement("img");
    Stage2.src = "images/CropImages/Stage2.png";

    let Stage3 = document.createElement("img");
    Stage3.src = "images/CropImages/Stage3.png";

    let Stage4 = document.createElement("img");
    Stage4.src = "images/CropImages/Stage4.png";

    Stages = [Stage1, Stage2, Stage3, Stage4];

    let TreeStageRow2 = document.getElementById("1");
    TreeStageRow2.appendChild(Stage1);
}



let GameOver = false;
let GrowOnce = false;
function AddEventOver(event)
{
    console.log("Hovering Over the box");
    console.log("Growonce: " + GrowOnce); //see who received.
    // var sender=event.target;
    // console.log(sender); //see who is sender
    // sender.textContent="Received at parent from:"+evt.target.id;
    // sender.style.background="brown";

    // simple way to print smth with the targeted id
    console.log("Hello, div " +event.target.id);
    // event.target.style.background="brown"; // To Test

    let TreeStageRow2 = document.getElementById("1");

    if (GrowOnce) // always true
    {
        console.log("outside");
        return;
    }

    if (GrowOnce == false)
    {
        if (event.target.id === "0") // || event.target.id === "1"
        {
            let currentStage = 1;

            const interval = setInterval(function() {
                console.log("Growing");
                TreeStageRow2.innerHTML = "";
                TreeStageRow2.appendChild(Stages[currentStage].cloneNode(true));
                currentStage++; // ← this increases the stage number each time

                if (currentStage >= 4) 
                {
                    GameOver = true;
                    GrowOnce = true;
                    document.getElementById("Message").innerText = "GameOver! You Win";
                    console.log("Stopping plant grow");
                    clearInterval(interval); // Stop when finished
                    return;
                }
            }, 10000);
        }
    }
} 



// const WaterSoundEffect = new Audio("Water_SoundEffect.MP3");
let WaterDroplerSpawn = false;
document.getElementById('GameBoard').addEventListener('mousemove', function (mouse)
{
    if (GameOver) // always true
    {
        console.log("Stopping spawn of waterdroplet");
        return;
    }

    if (WaterDroplerSpawn) // always true
    {
        return;
    }

    WaterDroplerSpawn = true;
    // setTimeout() let it run once but can only be stop before it runs the programs 
    // setInterval() lets it run repeatedly can be stopped ay any point during the programs

    setTimeout(function() {
        let WaterDroplet = document.createElement("img");
        WaterDroplet.src = "images/waterdroplet.png";
        WaterDroplet.classList.add("WaterDropletImg"); 
        // add a class onto the img water drop when spawn so that the css can read it and make it smaller

        // document.getElementById('x-value').textContent = mouse.offsetX;
        // console.log(mouse.x);
        // document.getElementById('y-value').textContent = mouse.offsetY;
        // console.log(mouse.y);

        // WaterSoundEffect.play(); //play the audio!

        // Position the image
        WaterDroplet.style.position = "absolute";
        WaterDroplet.style.left = `${mouse.offsetX}px`; // Position inside the GameBoard 
        WaterDroplet.style.top = `${mouse.offsetY}px`; // offsetX or Y get the mouse position inside the div
        // Distance from the left edge for offsetX
        // Distance from the Top edge for offsetY
        // the px is letting the browser know the unit and it help it to apply ther style

        // spawn the water drop img in the gameboard on where the mouse is
        document.getElementById('GameBoard').appendChild(WaterDroplet);
        WaterDroplerSpawn = false;
        console.log("Water spawn is " +WaterDroplerSpawn);

        let WaterDropletY = 10;
        let fallInterval = setInterval(function() {
            let Currentpoistion = parseInt(WaterDroplet.style.top); // turn the waterDroplet position z1into a number
            WaterDroplet.style.top = (Currentpoistion + WaterDropletY) + "px";
        
            if (Currentpoistion > 500) clearInterval(fallInterval); // stop falling after it reaches 500px
        }, 50);

        setTimeout(function() {WaterDroplet.remove();}, 1500); // remove the waterdroplet after 1 sec
    },500);
});



// Restarting the game with keypress R
let ResetButton = document.getElementById("GameRestartButton");
ResetButton.addEventListener("click", function(){
        GameOver = false;
        GrowOnce = false;
        console.log("Game set too " +GameOver);
        console.log("RestartGame");

        let gameboard = document.getElementById("GameBoard");
        gameboard.innerHTML = "";

        setGameGrid();

        let TreeStageRow2 = document.getElementById("1");
        TreeStageRow2.innerHTML = "";
        TreeStageRow2.appendChild(Stages[0].cloneNode(true));

        document.getElementById("Message").innerText = "Game On!";
});




// Fullscreen
const Fullscreenbtn = document.querySelector("#Fullscreenbtn");
const ExitFullScreenbtn = document.querySelector("#ExitFullScreenbtn");
Fullscreenbtn.addEventListener("click", enterFullscreen);
ExitFullScreenbtn.addEventListener("click", exitFullscreen);

function enterFullscreen() { //must be called by user generated event

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } 
    else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } 
    else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
    } 
    else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } 
    else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } 
    else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } 
    else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}