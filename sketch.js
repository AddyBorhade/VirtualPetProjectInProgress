var dog,sadDog,happyDog;
var foodStock = 0,database,doghungry,dogfull
var updatefood,reducefood,milk


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  milkBottle = loadImage("milkImage.png")
}

function setup() {
  createCanvas(1000,400);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  database = firebase.database();
updatefood=createButton('Increase Stock')
reducefood = createButton('Feed Drago')
updatefood.position(400,60)
reducefood.position(600,60)

food = new Food();
createCanvas(800,700);

dog = createSprite(600,350,40,40)
dog.scale = 0.2
dog.addImage("doghungry",sadDog);
dog.addImage("dogfull",happyDog);

food.lastFedTime(hour());
}

function draw() {
  background(46,139,87);
  drawSprites();
  food.getFoodStock();

  food.display();

  updatefood.mousePressed(()=>{212
    foodStock++;
    console.log(foodStock)
    food.updateFoodStock(foodStock)
    
  })

  reducefood.mousePressed(()=>{
    food.deductFoodStock();
    food.updateFoodStock(food,foodStock);
    food.lastFedTime(hour())
  })

  textSize(20)
  fill("black")
  text("Food Remaining: "+food.foodStock,350,30)
  if(hour()>=12){
    time = "pm"
  }
  else if(hour()<12){

    time = "am"
  }
  text("Last fed at: "+food.lasFed+time,550,30)
}


//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
