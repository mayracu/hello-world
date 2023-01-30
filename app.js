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



// let welcomeMessage= prompt("Hi! Welcome to my blog! Are you a coffee lover? Respond yes or no");
// console.log(welcomeMessage);
// if (welcomeMessage == "yes"){
//     let cupsNumber= prompt("How many cups of coffee do you drink a day?");
//     if (cupsNumber == 0){
//         alert("You stay alert without coffee. That's a superpower.");
//     }
//     else if (cupsNumber > 1 && cupsNumber < 7){
//         let coffeeSugar = prompt("You are definititely a coffee lover! Do you add sugar to your coffee?");
//         if (coffeeSugar == "yes"){
//             alert("You like your coffee sweet! I'm glad you are here. Enjoy my site.");
//         }
//         else if(coffeeSugar == "no"){
//             alert("You are a coffee purist! I'm glad you are here. Enjoy my site.");
//         }
//         else {
//             alert("I'm glad you are here. Enjoy my site.")
//         }
//     }
//     else {
//         alert("Your coffee habit is probably fine, but if you have side effects from coffee, such as heartburn, nervousness or insomnia, consider cutting back.");
//     }
// }
// else if (welcomeMessage == "no"){
//     let tealover= prompt("You are not a coffee lover. That's fine. Do you prefer tea?");
//         if (tealover == "yes"){
//             alert("Tea is great! especially in rainy days.");
//         }
//         else {
//         //alert("Well, I hope I can convince you otherwise. Welcome.");
//         let text = "Well, I hope I can convince you otherwise.\nTo continue press a button!\nEither OK or Cancel.";
//         if (confirm(text) == true) {
//         alert("Welcome!");
//         }
//         else {
//         alert("Welcome!");
//         }
//         }
// }
// else {
//     alert("Hi! Welcome to my coffee blog.");
// }

 

function coffeeCups(){
    function sugarQuestion(){
        let coffeeSugar = prompt("You are definititely a coffee lover! Do you add sugar to your coffee? (Type yes or no)");
            while (coffeeSugar != "yes" && coffeeSugar != "no") {
            coffeeSugar = prompt("You are definititely a coffee lover! Do you add sugar to your coffee? (Type yes or no)");
            } 
            if (coffeeSugar == "yes"){
                alert("You like your coffee sweet!");
                CoffeeChoice();
            }
            else if(coffeeSugar == "no"){
                alert("You are a coffee purist!");
                CoffeeChoice();
            }
            // else {
            //     let coffeeSugar = prompt("Please, only respond with yes or no. Do you add sugar to your coffee?");
            //     // alert("I'm glad you are here. Enjoy my site.");
                
    }

    let cupsNumber= prompt("How many cups of coffee do you drink a day?");
      if (cupsNumber == 0){
        alert("You stay alert without coffee. That's a superpower.");
      }
      else if (cupsNumber > 1 && cupsNumber < 7){
        sugarQuestion();
      }
      else {
        alert("Your coffee habit is probably fine, but if you have side effects from coffee, such as heartburn, nervousness or insomnia, consider cutting back.");
      }
}
    
function teaQuestion(){
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

let welcomeMessage= prompt("Hi! Welcome to my blog! Are you a coffee lover? Respond yes or no");
    //console.log(welcomeMessage);
    while (welcomeMessage != "yes" && welcomeMessage != "no") {
        welcomeMessage = prompt("Please, only respond with yes or no. Are you a coffee lover?");
    } 

    if (welcomeMessage == "yes"){
        coffeeCups();
    }
    else if (welcomeMessage == "no"){
        teaQuestion();
    }
    // else {
    //     let welcomeMessage2= prompt("Please, only respond with yes or no. Are you a coffee lover?");
    //     if (welcomeMessage2 == "yes"){
    //         coffeeCups();
    //     }
    //     else if (welcomeMessage2 == "no"){
    //         teaQuestion();
    //     }
    //     // else {
        //     let text = "To continue press a button!\nEither OK or Cancel.";
        //         if (confirm(text) == true) {
        //             alert("Welcome!");
        //         }
        //         else {
        //             alert("Welcome!");
        //         }            
        // }
//

function CoffeeChoice(){
let userPreference = prompt("Would you prefer a cappuccino or an americano? (Respond with the initials c for cappuccino or a for americano");
    while (userPreference != "c" && userPreference != "a") {
        userPreference = prompt("Would you prefer a cappuccino or an americano? (Respond with the initials c for cappuccino or a for americano)");
    }  
    if (userPreference == "c"){
        numCappuccino = prompt("How many cappuccinos would you like? (0~5)");
        document.write("<p> You like cappuccinos! </p>");
        for(let i=0; i < numCappuccino; i++){
            document.write("<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IIpYHS9y5YnWOoL7TYtSswHaE8%26pid%3DApi&f=1&ipt=15276d4187cc53b42becb4d0eb4204d4a3dc0d10949ffda1cf038fff66bbe04e&ipo=images' alt='cappuccino'/>");
        }    
    } 
    else if (userPreference == "a"){
        numAmericano = prompt("How many coffee americano would you like? (0~5)");
        document.write("<p id='americano-preference'> You like coffee americano! </p>");
        for(let i=0; i < numAmericano; i++){
            document.write("<img src='https://c.pxhere.com/photos/80/51/cup_coffee_pires_cup_of_coffee_breakfast_porcelain_cup_porcelain_cup_of_cafe-635116.jpg!s' alt='coffee americano' />");
        }
    }
}
