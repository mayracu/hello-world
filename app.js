// let message= "Hello!";
// console.log(message);
// let username= prompt('What is your name?');
// string concatenation
// console.log("Hi " + username + "! Welcome to my page!");
// alert(message);
// document.write("Hi " + username + "! Welcome to my page!");

// structure of conditional if/else statement
// if (this is true){execute this code}
// if (username == "Varla"){
//    alert("Hi teacher!");
// }

let welcomeMessage= prompt("Hi! Welcome to my blog! Are you a coffee lover? Respond yes or no");
console.log(welcomeMessage);
if (welcomeMessage == "yes"){
    let cupsNumber= prompt("How many cups of coffee do you drink a day?");
    if (cupsNumber == 0){
        alert("You stay alert without coffee. That's a superpower.");
    }
    else if (cupsNumber > 1 && cupsNumber < 7){
        let coffeeSugar = prompt("You are definititely a coffee lover! Do you add sugar to your coffee?");
        if (coffeeSugar == "yes"){
            alert("You like your coffee sweet! I'm glad you are here. Enjoy my site.");
        }
        else if(coffeeSugar == "no"){
            alert("You are a coffee purist! I'm glad you are here. Enjoy my site.");
        }
        else {
            alert("I'm glad you are here. Enjoy my site.")
        }
    }
    else {
        alert("Your coffee habit is probably fine, but if you have side effects from coffee, such as heartburn, nervousness or insomnia, consider cutting back.");
    }
}
else if (welcomeMessage == "no"){
    let tealover= prompt("You are not a coffee lover. That's fine. Do you prefer tea?");
        if (tealover == "yes"){
            alert("Tea is great! especially in rainy days.");
        }
        else {
        //alert("Well, I hope I can convince you otherwise. Welcome.");
        let text = "Well, I hope I can convince you otherwise.\nTo continue press a button!\nEither OK or Cancel.";
        if (confirm(text) == true) {
        alert("Welcome!");
        }
        else {
        alert("Welcome!");
        }
        }
}
else {
    alert("Hi! Welcome to my coffee blog.");
}

