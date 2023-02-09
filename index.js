const containerEl = document.querySelector(".container");


// create the css elements (divs) here in javascript create 30 of them using a loop
for (let index = 0; index < 30; index++) {
    // create a div at every index aka create 30 divs
    const colorContainerEl = document.createElement("div");
    // add class to divs
    colorContainerEl.classList.add("color-container")
    //append newly created div to containerEl object created above
    containerEl.appendChild(colorContainerEl);    
}

const colorContainerEls = document.querySelectorAll(".color-container");
// console.log(colorContainerEls);


//make a function to generate your random color codes
function randomColor(){
    //characters in color code consist of the following characters
    const chars = "0123456789abcdef";
    //length of color code is 6 characters
    const colorCodeLength = 6;
    //start with an empty string for color code
    let colorCode = "";

    //loop through length of color code aka index 0 to index 5
    for (let index = 0; index < colorCodeLength; index++) {
        //get a random number between 0 and 15 inclusive
        const randomNum = Math.floor(Math.random()* chars.length);
        //append the one character at the random number index to the colorCode variable
        colorCode += chars.substring(randomNum, randomNum+1);
    }
    //return color code after done looping
    return colorCode;


}
//create function to assign random colors to each div
function generateColors(){
    colorContainerEls.forEach(
        (colorContainerEl) => {
            //update text to randomly generated color
            const generatedColor =randomColor();        
            //update background color to randomly generated color
            colorContainerEl.style.backgroundColor = "#" + generatedColor;
            //add text to divs corresponding to color name
            colorContainerEl.innerHTML+="#"+ generatedColor;
        
    });
}

generateColors();


