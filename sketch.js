var dog,sadDog,happyDog;
var feed;
var addFood;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup(){
  createCanvas(1600,600);
  
  dog=createSprite(1000,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.20;

  var feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to update food Stock
function feedDog(){
  dog.addImage(happyDog);
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
      }else{
        foodObj.updateFoodStock(foodObj.getFoodSt()-1)
      }

}


//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
  })
}
