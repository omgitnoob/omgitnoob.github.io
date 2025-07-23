//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
var allpages = document.querySelectorAll(".page");
console.log(document.querySelector("#page5btn"))


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
page1btn.addEventListener("click", function () { show(1); console.log("gay1")});
page2btn.addEventListener("click", function () { show(2); console.log("gay2")});
page3btn.addEventListener("click", function () { show(3); console.log("gay3")});
page4btn.addEventListener("click", function () { show(1); console.log("gay1")});
page5btn.addEventListener("click", function () { show(2); console.log("gay2")});
page6btn.addEventListener("click", function () { show(3); console.log("gay3")});




/*JS for hamMenu */
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


GOTOPineTree.addEventListener("click", function() {
    show(2); //does to go next page
    document.querySelector("#PineTree").scrollIntoView({ behavior: "smooth" });
});

GOTOOakTree.addEventListener("click", function() {
    show(2); //does to go next page
    document.querySelector("#OakTree").scrollIntoView({ behavior: "smooth" });
});

GOTOEcualptusTree.addEventListener("click", function() {
    show(2); //does to go next page
    document.querySelector("#EcualptusTree").scrollIntoView({ behavior: "smooth" });
});

GOTOTeakTree.addEventListener("click", function() {
    show(2); //does to go next page
    document.querySelector("#TeakTree").scrollIntoView({ behavior: "smooth" });
});
// => its a short way to call an funcation
GOTORubberTree.addEventListener("click", () => {
    show(2); //does to go next page
    document.querySelector("#RubberTree").scrollIntoView({ behavior: "smooth" });
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