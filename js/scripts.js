const customName = document.getElementById('customname');
const customEmotion = document.getElementById('customemotion');
const customCar = document.getElementById('customcar');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const message = document.querySelector('.message');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: decided to ditch their :car: and go for a walk. When they got to :inserty:, they stared in :emotion: for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var messageText =":insertx: should have taken their :car:";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var newMessage = messageText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(customEmotion.value !== '') {
    let emotion = customEmotion.value;
    newStory = newStory.replace(":emotion:", emotion);
  }

  if(customCar.value !== '') {
    let car = customCar.value;

    newStory = newStory.replace(":car:", car);
    newMessage = newMessage.replace(":car:", car);
    newMessage = newMessage.replace(":insertx:", xItem);
    var output = document.getElementById("display_here");
    output.innerHTML = "";
    var img = '<img src=https://kcsigurdson.com/uclax_wcib_week_5_part_2/images/:car:.png>';
    img = img.replace(":car:", car);
    output.innerHTML= img;
  }

  if(document.getElementById("uk").checked) {
    let weight = (Math.round(300 * 0.0714286)).toString() + " stone";
    let temperature = (Math.round((94-32) * (5/9))).toString() + " centigrade";
  }

  if(document.getElementById("metric").checked) {
    let weight = (Math.round(300/2.205)).toString() + " kilograms";
    let temperature = (Math.round((94-32) * (5/9))).toString() + " centigrade";

    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  message.textContent = newMessage;
  story.style.visibility = 'visible';
  message.style.visiblity = 'visible';
}
