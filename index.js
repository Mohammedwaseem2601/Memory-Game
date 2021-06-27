cardArray = [
  {
    name: "fruits",
    source: "images/fruits.png"
  },

{
  name: "sunflower",
  source: "images/sunflower.png"
},

{
  name: "sunflower",
  source: "images/sunflower.png"
},


{
  name: "lion",
  source: "images/lion.png"
},


{
  name: "coconut",
  source: "images/coconut.png"
},


{
  name: "crown",
  source: "images/crown.png"
},

{
  name: "fruits",
  source: "images/fruits.png"
},


{
  name: "tree",
  source: "images/tree.png"
},

{
  name: "tree",
  source: "images/tree.png"
},


{
  name: "lion",
  source: "images/lion.png"
},

{
  name: "crown",
  source: "images/crown.png"
},


{
  name: "coconut",
  source: "images/coconut.png"
}


]

cardArray.sort(() => 0.5 - Math.random());

var namesCardsChoosen = []
var idCardsChoosen = []
var score = 0

var grid = document.getElementById("container")

for(var i = 0; i < cardArray.length; i++)
{
  var card = document.createElement("img")
  card.setAttribute("src", "images/back.jpg")
  card.setAttribute("data-id", i)
  grid.appendChild(card)
  card.addEventListener("click", flipcard);

}

function checkForMatch(){
  pic1Idx = idCardsChoosen[0];
  pic2Idx = idCardsChoosen[1];

  if(pic1Idx === pic2Idx){
    alert("you clicked the same image...");
    document.querySelector('[data-id="'+pic1Idx+'"]').setAttribute("src","images/back.jpg");
    document.querySelector('[data-id="'+pic2Idx+'"]').setAttribute("src","images/back.jpg");
  }


  else if(namesCardsChoosen[0] === namesCardsChoosen[1])
  {
    alert("You Found a match !!.......");
    document.querySelector('[data-id="'+pic1Idx+'"]').setAttribute("src","images/white.png");
    document.querySelector('[data-id="'+pic2Idx+'"]').setAttribute("src","images/white.png");
    document.querySelector('[data-id="'+pic1Idx+'"]').removeEventListener("click",flipcard);
    document.querySelector('[data-id="'+pic2Idx+'"]').removeEventListener("click",flipcard);
    score += 1;
    document.querySelector("#score").innerHTML = "Score: " +score;

  }
  else{
    alert("Oops try again!");
    document.querySelector('[data-id="'+pic1Idx+'"]').setAttribute("src","images/back.jpg");
    document.querySelector('[data-id="'+pic2Idx+'"]').setAttribute("src","images/back.jpg");
  }

  namesCardsChoosen = [];
  idCardsChoosen = [];

  if(score == cardArray.length / 2){
    alert("YOU WIN");
    document.querySelector("#score").innerHTML = "You Won";
  }


}


function flipcard(){

  var currentCardId = this.getAttribute("data-id");
  var cardName = cardArray[currentCardId].name;

  this.setAttribute("src",cardArray[currentCardId].source);

  namesCardsChoosen.push(cardName);
  idCardsChoosen.push(currentCardId);

  if(namesCardsChoosen.length === 2)
  {
    setTimeout(checkForMatch, 500);
  }
}
