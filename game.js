

var indexReply, giftStatement, imageSource;
var cutoffsArray = [];
// var giftStatementArray = [];
// var imageSourceArray = [];


var Topic = function(topic, cutoffsArray, giftStatementArray, imageSourceArray) {
  this.topic = "How would you rate your " + topic + " on a scale of 1 to 10?";
  this.cutoffsArray = cutoffsArray;
  this.giftStatementArray = giftStatementArray;
  this.imageSourceArray= imageSourceArray;

this.bobStatement = function(statement){
  var bobStatement = document.createElement('span');
bobStatement.innerHTML= '<b>BOB:</b> ' + statement + '</br>';
document.getElementById('idOne').appendChild(bobStatement);
}

this.giftImage = function(){
  document.getElementById('idTwo').innerHTML = (
  '<img class="giftImage" src=' + this.imageSource + ' z-index="10"/>');
}

  this.run = function(){

    var cutoffsArrayLength = this.cutoffsArray.length;
    var giftStatementArrayLength = this.giftStatementArray.length;
    this.bobStatement(this.topic);
    var userReply = prompt('Enter your reply to Bob Blob');

    for (i = 0; i < cutoffsArrayLength-1; i++) {
      if (this.cutoffsArray[i] <= userReply && userReply <= this.cutoffsArray[i+1]) {
        indexReply = i;
        break;
      } else if (this.userReply == this.cutoffsArray[cutoffsArrayLength-1]){
        indexReply = cutoffsArrayLength-1;
      }
    }
    this.giftStatement = this.giftStatementArray[indexReply];
    this.imageSource = this.imageSourceArray[indexReply];
    this.bobStatement(this.giftStatement);
    this.giftImage();
  }
}


finances = new Topic('finances', [1, 3, 4, 8, 10],

  ['This cash may help',
  'Have a new wallet, and a little cash',
  'Have some gum',
  'Say hello to my friend, and give her all your money. Or else...'],

  ["./images/StackOfCash.jpg",
  "./images/WalletOfCash.jpg",
  "./images/PackOfGum.jpg",
  "./images/StickUp.jpg"]
  );

health = new Topic('health', [1, 3, 4, 9, 10],

  ['Wear this magic stone and you will feel better',
  'Use these at the gym near your house',
  'Have some running shoes',
  'Eat, or be eaten.'],

  ["./images/PhilosophersStone.jpg",
  "./images/HealthCard.jpg",
  "./images/RunningShoes.jpg",
  "./images/FrenchFries.jpg"]
  );

personal_life = new Topic('personalLife', [1, 3, 4, 9, 10],

  ['This has been following me around, why don\'t you take him home?',
  'Have a goldfish',
  'Have some gum',
  'Put this under your bed'],

  ["./images/Dog.jpg",
  "./images/GoldFish.jpg",
  "./images/PackOfGum.jpg",
  "./images/ShrunkHead.jpg"]
  );


randomTopic = Math.floor(Math.random()*3+1);
switch (randomTopic){
  case 1: finances.run();
  break;
  case 2: health.run();
  break;
  case 3: personal_life.run();
  break;
  default: finances.run();
  break;
}
















//++++++++++++++++++++++++++++++++++++++++++++++++

    // Print error notice to JS window if array lengths not equal.
    // if (cutoffsArrayLength != giftStatementArrayLength) {
    //   console.log('ERROR: cutoffsArray and giftStatementArray should be the same length!!')
    // }


//++++++++++++++++++++++++++++++++++++++++++++++++

// Lunch=function(first, second, third, fourth, fifth) {
//  this.shortCutOff=first;
//  this.cutOff2=second;
//  this.mediumCutOff=third;
//  this.cutOff3=fourth;
//  this.bestCutOff=fifth;
// }

// Lunch.prototype.start=function () {
//   userReply=prompt ("On a scale of 1 to 10 how would you rate your lunch experience?");
// }
// Lunch.prototype.compare=function () {
//     if (userReply < this.shortCutOff) {
//      message = "Ohhh, sorry it didn't work out-- at least you're still breathing.";
//    } else if (userReply <= this.cutOff2) {
//      message = "I am sorry to hear that, better luck tomorrow!";
//    } else if (userReply <= this.mediumCutOff) {
//    message = "Not bad-- could have been worse!";
//    } else if (userReply <= this.cutOff3) {
//      message = "That sounds like a pretty good lunch!";
//    } else if (userReply <= this.bestCutOff){
//     message = "That sounds like one of the best lunches of your life!";
//    } else {
//     message = "Sorry-- that's not on the scale of 1 to 10!";
//   }
// alert(message);
// }



// var game1=new Lunch (2, 4, 6, 8, 10);
// game1.start();
// game1.compare();
