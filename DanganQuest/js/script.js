const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');
var audio = document.getElementById('audio');
var btn_f = document.getElementById('btn_f');
var btn_l = document.getElementById('btn_l');
var btn_r = document.getElementById('btn_r');
var btn_b = document.getElementById('btn_b');
var hitbox = document.getElementById('hitbox');
var hitbox2 = document.getElementById('hitbox2');
var slot1 = document.getElementById('slot1');
var slot2 = document.getElementById('slot2');
var slot3 = document.getElementById('slot3');
var slot4 = document.getElementById('slot4');
var slot5 = document.getElementById('slot5');
var slot6 = document.getElementById('slot6');
var all = document.getElementsByClassName('inventoryR');
let video = document.getElementById('video');
let video2 = document.getElementById('video2');
let achievment = document.getElementById('Achievment');

let laugh = new Audio('audio/Laugh.mp3');
let pling = new Audio('audio/pling.m4a');
let glitch = new Audio('audio/Glitch.mp3');

let currentLocation = 21;
var song = true;
var slot1t = false;
var slot2t = false;
var slot3t = false;
var slot34t = false;
var slot4t = false;
var slot5t = false;
var slot6t = false;

let locations = [];
locations[0] = "Elevator";
locations[1] = "Lobby";
locations[2] = "Hall";
locations[3] = "Big door";
locations[4] = "Unused";
locations[5] = "Final Dead Room door";
locations[6] = "Final Dead Room North";
locations[7] = "Toilet boys";
locations[8] = "Toilet girls";
locations[9] = "Unused";
locations[10] = "Stairs";
locations[11] = "2f stairs";
locations[12] = "2f stairs up";
locations[13] = "2f hall";
locations[14] = "Standard rooms";
locations[15] = "Deluxe rooms";
locations[16] = "Kazuichi's Room";
locations[17] = "Fuyuhiko's Room";
locations[18] = "Nekomaru's standard room";
locations[19] = "Lounge";
locations[20] = "Gundham's Deluxe room";
locations[21] = "Nagito's Deluxe room";
locations[22] = "3f stairs";
locations[23] = "Garden gate";
locations[24] = "Garden";
locations[25] = "Octagon";
locations[26] = "Octagon";
locations[27] = "Window";
locations[29] = "Final Dead Room South";
locations[30] = "Final Dead Room West";
locations[31] = "Final Dead Room East";
locations[32] = "Final Dead Room 6?";
locations[33] = "Unused";
locations[34] = "Final Dead Room Safe";
locations[35] = "Final Dead Room Safe";
locations[36] = "Final Dead Room Safe";
locations[37] = "Final Dead Room Closet";
locations[38] = "Unused";
locations[39] = "Final Dead Room South";
locations[40] = "Photo";
locations[41] = "Photo 2";
locations[42] = "Laptop";
locations[43] = "Laptop lockscreen";
locations[44] = "Congrats";
locations[45] = "Pad";
locations[46] = "Cutscene";
locations[47] = "Outside";
locations[48] = "End";
locations[49] = "LKAJDLKRNGUYGSKJFDBWGASKSD";
locations[50] = "Hope Peak's Academy";

images = [];
images[0] = "0.png";
images[1] = "1m.png";
images[2] = "2m.png";
images[3] = "3.png";
images[4] = "";
images[5] = "5.png";
images[6] = "6n.png";
images[7] = "7.png";
images[8] = "8.png";
images[9] = "";
images[10] = "10.png";
images[11] = "11.png";
images[12] = "12.png";
images[13] = "13.png";
images[14] = "14.png";
images[15] = "15.png";
images[16] = "16.png";
images[17] = "16.png";
images[18] = "18m.png";
images[19] = "19.png";
images[20] = "20.png";
images[21] = "20m.png";
images[22] = "22.png";
images[23] = "23.png";
images[24] = "24m.png";
images[25] = "25.png";
images[26] = "26.png";
images[27] = "27.png";
images[28] = "28.png";
images[29] = "6s.png";
images[30] = "6w.png";
images[31] = "6e.png";
images[32] = "6e9.png";
images[33] = "";
images[34] = "6safe.png";
images[35] = "3957.png";
images[36] = "6open.png";
images[37] = "6w5.png";
images[38] = "";
images[39] = "6s7.png"
images[40] = "encryption.png";
images[41] = "encryption2.png";
images[42] = "6l.png"
images[43] = "6password.png";
images[44] = "congrats.png";
images[45] = "6key.png";
images[46] = "46.png";
images[47] = "window.png";
images[48] = "congratulations.png";
images[49] = "49.png";
images[50] = "50.png";

directions = [];
directions[0] = ["backwards"];
directions[1] = ["forward", "left", "right", "backwards"];
directions[2] = ["forward", "backwards"];
directions[3] = ["forward", "backwards"];
directions[4] = ["backwards"];
directions[5] = ["forward", "right", "backwards"];
directions[6] = ["forward", "left", "right", "backwards"];
directions[7] = ["forward", "left", "right", "backwards"];
directions[8] = ["forward", "right", "backwards"];
directions[9] = ["backwards"];
directions[10] = ["forward", "left", "backwards"];
directions[11] = ["forward","right", "backwards"];
directions[12] = ["forward", "left"];
directions[13] = ["forward", "left", "right", "backwards"];
directions[14] = ["forward", "left", "right", "backwards"];
directions[15] = ["left", "right", "backwards"];
directions[16] = ["backwards"];
directions[17] = ["backwards"];
directions[18] = ["backwards"];
directions[19] = ["backwards"];
directions[20] = ["backwards"];
directions[21] = ["backwards"];
directions[22] = ["forward", "backwards"];
directions[23] = ["forward","backwards"];
directions[24] = ["backwards"];
directions[25] = ["forward", "left", "backwards"];
directions[26] = ["right"];
directions[27] = ["forward", "left", "backwards"];
directions[28] = ["backwards"];
directions[29] = ["forward", "left", "right", "backwards"];
directions[30] = ["forward", "left", "right", "backwards"];
directions[31] = ["forward", "left", "right", "backwards"];
directions[32] = ["backwards"];
directions[33] = ["backwards"];
directions[34] = ["backwards"];
directions[35] = ["backwards"];
directions[36] = ["backwards"];
directions[37] = ["backwards"];
directions[38] = ["backwards"];
directions[39] = ["backwards"];
directions[40] = ["backwards"];
directions[41] = ["backwards"];
directions[42] = ["forward", "left", "right"]
directions[43] = ["backwards"];
directions[44] = ["backwards"];
directions[45] = ["backwards"];
directions[46] = ["..."];
directions[47] = ["backwards"];
directions[48] = ["..."];
directions[49] = ["..."];
directions[50] = ["backwards"];

var oldLocation;
var drawerLock = true;
// Forward - Left - Right - Backwards
traveltable = [];
traveltable[0] = [-1, -1, -1, 1];
traveltable[1] = [5, 2, 7, 0];
traveltable[2] = [3, -1, -1, 1];
traveltable[3] = [-2, -1, -1, 2];
traveltable[4] = [-1, -1, -1, -1];
traveltable[5] = [6, -1, 10, 1];
traveltable[6] = [-2, 30, 42, 29];
traveltable[7] = [-2, 8, 1, 10];
traveltable[8] = [-2, -1, 7, 10];
traveltable[9] = [-1, -1, -1, -1];
traveltable[10] = [11, 5, -1, 7];
traveltable[11] = [10, -1, 12, 13];
traveltable[12] = [22, 11, -1, -1];
traveltable[13] = [14, 17, 16, 11];
traveltable[14] = [15, 19, 18, 13];
traveltable[15] = [-1, 21, 20, 14];
traveltable[16] = [-1, -1, -1, 13];
traveltable[17] = [-1, -1, -1, 13];
traveltable[18] = [-1, -1, -1, 14];
traveltable[19] = [-1, -1, -1, 14];
traveltable[20] = [-1, -1, -1, 15];
traveltable[21] = [-1, -1, -1, 15];
traveltable[22] = [23, -1, -1, 12];
traveltable[23] = [24, -1, -1, 22];
traveltable[24] = [-1, -1, -1, 23];
traveltable[25] = [27, 26, -1, -2];
traveltable[26] = [-1, -1, 25, -1];
traveltable[27] = [47, 28, -1, 25];
traveltable[28] = [-1, -1, -1, 27];
traveltable[29] = [-2, 31, 30, 6];
traveltable[30] = [34, 29, 6, 31];
traveltable[31] = [32, 42, 29, 30];
traveltable[32] = [-1, -1, -1, 31];
traveltable[33] = [-1, -1, -1, 31];
traveltable[34] = [-1, -1, -1, 30];
traveltable[35] = [-1, -1, -1, 30];
traveltable[36] = [-1, -1, -1, 30];
traveltable[37] = [-1, -1, -1, 30];
traveltable[38] = [-1, -1, -1, 30];
traveltable[39] = [-1, -1, -1, 29];
traveltable[40] = [-1, -1, -1, -1];
traveltable[41] = [-1, -1, -1, 29];
traveltable[42] = [43, 6, 31, -1];
traveltable[43] = [-1, -1, -1, 42];
traveltable[44] = [-1, -1, -1, 42];
traveltable[45] = [-1, -1, -1, 6];
traveltable[46] = [-1, -1, -1, -1];
traveltable[47] = [-1, -1, -1, -27];
traveltable[48] = [-1, -1, -1, -1];
traveltable[49] = [-1, -1, -1, -1];
traveltable[50] = [-1, -1, -1, 0];

descriptions = [];
descriptions[0] = "You're in front of the broken elevator.";
descriptions[1] = "You're in the lobby.";
descriptions[2] = "You're walking through Strawberry Hall.";
descriptions[3] = "You're in front of Strawberry Door.";
descriptions[4] = "";
descriptions[5] = "You're in front of the Final Dead Room.";
descriptions[6] = "This place looks creepy.";
descriptions[7] = "You're in front of the toilet.";
descriptions[8] = "You're in front of the girls toilet.";
descriptions[9] = "";
descriptions[10] = "These are the stairs to the second floor.";
descriptions[11] = "These stairs go to the 1st floor.";
descriptions[12] = "These stairs go to the 3rd floor.";
descriptions[13] = "There are 2 rooms here.";
descriptions[14] = "To the left is the lounge and on the right there is another room.";
descriptions[15] = "These 2 rooms are the deluxe rooms";
descriptions[16] = "A crummy room.";
descriptions[17] = "Another crummy room.";
descriptions[18] = "A standard room.";
descriptions[19] = "This is the lounge with some other people.";
descriptions[20] = "This is a Deluxe room.";
descriptions[21] = "This is the room you got assigned to. (I need to get to the Final Dead Room.)";
descriptions[22] = "These stairs lead to the 2nd floor.";
descriptions[23] = "The garden gates.";
descriptions[24] = "This is the garden, but it's inside of course.";
descriptions[25] = "The octagon! You finished the Final Dead Room!";
descriptions[26] = "There's a hatch.";
descriptions[27] = "This is the only window in the entire building.";
descriptions[28] = "Some weapons.";
descriptions[29] = "The blood on the left side looks suspicous...";
descriptions[30] = "Maybe NEWS means in directions...";
descriptions[31] = "That 6 looks suspicous...";
descriptions[32] = "Is this really a 6?";
descriptions[33] = "";
descriptions[34] = "The hint is NEWS.";
descriptions[35] = "I opened it!";
descriptions[36] = "I opened it!";
descriptions[37] = "There is a 5 here.";
descriptions[38] = "";
descriptions[39] = "This is clearly a 7.";
descriptions[40] = "This is Caesar Cipher. I just have to do -(the key) with every letter. So if the key is 2 and the letter is C then the answer is A.";
descriptions[41] = "This is Binary code. Put the 4 numbers in the table and then count every number above a 1 with each other.";
descriptions[42] = "The laptop is locked i need a password for it.";
descriptions[43] = "The password only accepts numbers as an input.";
descriptions[44] = "";
descriptions[45] = "A key fits in here.";
descriptions[46] = "...";
descriptions[47] = "This is how the funhouse works!!";
descriptions[48] = "HAHAHAHAHA!";
descriptions[49] = "ASJBWKJDBCDVFAHLXADBSCVV";
descriptions[50] = "I think i'm not supposed to be here... Let's go back";

blockedquote = [];
blockedquote [3] = "The button is broken. Somebody must have broken it.";
blockedquote [6] = "The gates are closed.";
blockedquote[8] = "You don't want to go in there.";
blockedquote[7] = "You don't need to go to the bathroom.";
blockedquote[25] = "You have come this far. You don't want to go back.";
blockedquote[29] = "The gates closed when you came in.";

var s1Use = false;
var s2Use = false;
var s4Use = false;
var s6Use = false;
//##################################################Inventory#####################################################################################################
function Slot1()
{
  console.log("using slot 1");
  if (slot1t) {
    s1Use = true;
    slot1.src = "img/inventory/keyUse.png";
    document.body.style.cursor = "grabbing";
    console.log(s1Use)
  } else {
    s1Use = false;
    document.body.style.cursor = "default";
  }
}

function Slot2()
{
  console.log("using slot 2");
  if (slot2t) {
    s2Use = true;
    slot2.src = "img/inventory/usbUse.png";
    document.body.style.cursor = "grabbing";
    console.log(s2Use)
  } else {
    s2Use = false;
    document.body.style.cursor = "default";
  }
}

function Slot3()
{
  console.log("using slot 3");
  if (currentLocation !== 46) {
    if (slot3t)
    {
      if (s6Use)
      {
        document.body.style.cursor = "default";
        slot3.src = "img/inventory/cameraB.png";
        myDescription.innerHTML = "The camera can now be turned on!";
        slot3t = false;
        slot34t = true;
        resetUse();
      }
      else
      {
        myDescription.innerHTML = "There are no batteries in the camera.";
      }
    } else if (slot34t) {
      if (currentLocation !== 41) {
        oldLocation = currentLocation;
        currentLocation = 40;
        giveLocation();
      }
    }
  }
}

function Slot4()
{
  console.log("using slot 4");
  if (slot4t) {
    s4Use = true;
    slot4.src = "img/inventory/scissorUse.png";
    document.body.style.cursor = "grabbing";
    console.log(s4Use)
  } else {
    s4Use = false;
    document.body.style.cursor = "default";
  }
}

function Slot5()
{
  console.log("using slot 5");
  if (currentLocation !== 46) {
    if (slot5t) {
      if (currentLocation !== 40) {
        oldLocation = currentLocation;
        document.body.style.cursor = "default";
        currentLocation = 41;
        giveLocation();
      }
    }
  }
}

function Slot6()
{
  console.log("using slot 6");
  if (slot6t) {
    s6Use = true;
    slot6.src = "img/inventory/batteryUse.png";
    document.body.style.cursor = "grabbing";
    console.log(s6Use)
  } else {
    s6Use = false;
    document.body.style.cursor = "default";
  }
}

myInput.addEventListener('keydown', getInput, false);

var newLocation;
var getKey = false;
var pcLocked = true;
var usb = false;

//####################################################Hitboxes########################################################################################
hitbox.addEventListener('click',()=>{
  switch (currentLocation) {
    case 1:
    clicked = true;
    images[1] = "hidden.gif";
    giveLocation();
    pling.play();
    images[1] = "1.png";
    setTimeout(giveLocation, 500);
    checkMonokuma();
      break;
      case 2:
      clicked2 = true;
      images[2] = "hidden.gif";
      giveLocation();
      pling.play();
      images[2] = "2.png";
      setTimeout(giveLocation, 500);
      checkMonokuma();
        break;
        case 18:
        clicked3 = true;
        images[18] = "hidden.gif";
        giveLocation();
        pling.play();
        images[18] = "18.png";
        setTimeout(giveLocation, 500);
        checkMonokuma();
          break;
          case 21:
          clicked4 = true;
          images[21] = "hidden.gif";
          giveLocation();
          pling.play();
          images[21] = "20.png";
          setTimeout(giveLocation, 500);
          checkMonokuma();
            break;
            case 24:
            clicked5 = true;
            images[24] = "hidden.gif";
            giveLocation();
            pling.play();
            images[24] = "24.png";
            setTimeout(giveLocation, 500);
            checkMonokuma();
              break;
    case 6:
    myDescription.innerHTML = "This is clearly a 3.";
    resetUse();
    document.body.style.cursor = "default";
    break;
    case 29:
    resetUse();
    document.body.style.cursor = "default";
    currentLocation = 39;
    giveLocation();
      break;
    case 30:
    document.body.style.cursor = "default";
    currentLocation = 37;
    giveLocation();
    resetUse();
      break;
      case 31:
      if (s1Use) {
        drawerLock = false;
        if (!drawerLock) {
          slot4.src = "img/inventory/scissor.png";
          slot5.src = "img/inventory/scrap.png";
          s1Use = false;
          slot4t = true;
          slot5t = true;
          slot1.src = "img/inventory/empty.png";
          slot1t = false;
          myDescription.innerHTML = "I got a scissor. I wonder what i should do with this. I also got a scarp of paper.";
          document.body.style.cursor = "default";
        }
        } else if (getKey) {
          slot1t = true;
          slot1.src = "img/inventory/key.png";
        } else {
          myDescription.innerHTML = "It's locked.";
      }
      resetUse();
        break;
        case 42:
        if (pcLocked) {
          currentLocation = 43;
          giveLocation();
        } else if (pcLocked == false && s2Use == true) {
          currentLocation = 43;
          giveLocation();
          usb = true;
          myDescription.innerHTML = "The password is on the paper i got from the drawer";
        } else {
          myDescription.innerHTML = "I need to see what's on the USB!"
        }
        resetUse();
          break;
          case 45:
          if (s1Use) {
            currentLocation = 6;
            giveLocation();
            myDescription.innerHTML = "I did it!";
            video.style.display = "inline";
            currentLocation = 46;
            giveLocation();
            video.play();
            isPaused = true;
            audio.src = "";
            if (sec >= 300) {
              achievment.src = "img/achievments/clear.png";
              achievment.style.left = "0px";
            } else if (sec < 300) {
              achievment.src = "img/achievments/kirigiri.png";
              achievment.style.left = "0px";
            }
            setTimeout(removeAchievment, 4000);
            video.addEventListener('ended',myHandler,false);

          } else {
            myDescription.innerHTML = "Maybe a key would fit...";
          }
          resetUse();
            break;
    default:
    resetUse();
    document.body.style.cursor = "default";
    giveLocation();
  }
});

hitbox2.addEventListener('click',()=>{
  switch (currentLocation) {
    case 6:
    if (!getKey) {
      myDescription.innerHTML = "This is a pad with numbers on it hmmm...";
    } else if (getKey) {
      currentLocation = 45;
      giveLocation();
    }
    resetUse();
    document.body.style.cursor = "default";
    break;
    case 29:
    if (s1Use) {
      document.body.style.cursor = "default";
      s1Use = false;
    }
    else if (s4Use) {
      myDescription.innerHTML = "There was a battery inside!";
      slot6.src = "img/inventory/battery.png"
      slot6t = true;
      document.body.style.cursor = "default";
    } else {
      myDescription.innerHTML = "The stuffed bear can talk! Maybe there's a battery inside...";
      s2Use = false;
      s5Use = false;
    }
    resetUse();
      break;
    case 30:
    document.body.style.cursor = "default";
    currentLocation = 34;
    giveLocation();
    resetUse();
      break;
      case 31:
      document.body.style.cursor = "default";
      currentLocation = 32;
      giveLocation();
      resetUse();
        break;
    default:
    resetUse();
    document.body.style.cursor = "default";
    giveLocation();
  }
});
//########################################################Buttons#########################################################################################
btn_f.addEventListener('click',()=>{
  if (directions[currentLocation].includes("forward")) {
    newLocation = traveltable[currentLocation][0];
    if (newLocation === -2) {
      myDescription.innerHTML = blockedquote[currentLocation];
      console.log(newLocation);
      return;
    }
    currentLocation = newLocation;
    console.log(newLocation);
  }
  giveLocation();
  myInput.value = "";
});

btn_l.addEventListener('click',()=>{
  if (directions[currentLocation].includes("left")) {
    newLocation = traveltable[currentLocation][1];
    if (newLocation === -2) {
      myDescription.innerHTML = blockedquote[currentLocation];
      console.log(newLocation);
      return;
    }
    currentLocation = newLocation;
    console.log(newLocation);
  }
  giveLocation();
  myInput.value = "";
});

btn_r.addEventListener('click',()=>{
  if (directions[currentLocation].includes("right")) {
    newLocation = traveltable[currentLocation][2];
    if (newLocation === -2) {
      myDescription.innerHTML = blockedquote[currentLocation];
      console.log(newLocation);
      return;
    }
    currentLocation = newLocation;
    console.log(newLocation);
  }
  giveLocation();
  myInput.value = "";
});

btn_b.addEventListener('click',()=>{
  if (directions[currentLocation].includes("backwards")) {
    if (currentLocation == 40 || currentLocation == 41) {
      newLocation = oldLocation;
    } else {
      newLocation = traveltable[currentLocation][3];
    }
    if (newLocation === -2) {
      myDescription.innerHTML = blockedquote[currentLocation];
      console.log(newLocation);
      return;
    }
    currentLocation = newLocation;
    console.log(newLocation);
  }
  giveLocation();
  myInput.value = "";
});


//################################################################Directions################################################################################
function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "go") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "forward":
            newLocation = traveltable[currentLocation][0];
            if (newLocation == -2) {
              myDescription.innerHTML = blockedquote[currentLocation];
              console.log(newLocation);
              return;
            }
            currentLocation = newLocation;
            console.log(newLocation);
            break;
          case "backwards":
          if (currentLocation == 40 || currentLocation == 41) {
            newLocation = oldLocation;
          } else {
            newLocation = traveltable[currentLocation][3];
          }
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
            console.log(newLocation);
            return;
          }
          currentLocation = newLocation;
          console.log(newLocation);
            break;
          case "right":
          newLocation = traveltable[currentLocation][2];
          if (newLocation == -2) {
            myDescription.innerHTML = blockedquote[currentLocation];
            console.log(newLocation);
            return;
          }
          currentLocation = newLocation;
          console.log(newLocation);
            break;
          case "left":
            newLocation = traveltable[currentLocation][1];
            if (newLocation == -2) {
              myDescription.innerHTML = blockedquote[currentLocation];
              console.log(newLocation);
              return;
            }
            currentLocation = newLocation;
            console.log(newLocation);
            break;
        }
      } else {
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }
//######################################################Input##########################################################################################
    if (inputArray[0] == "input") {
      console.log('input');
      if (evt.key == "Enter") {
        let inputArray = myInput.value.split(" ");
          if (inputArray[1] == "3957")
          {
            if (currentLocation == 34)
            {
              currentLocation = 35;
              giveLocation();
              setTimeout(openSesame, 3000);
            }
            } else if (currentLocation == 34)
            {
              myDescription.innerHTML = "This combination is incorrect";
            } else if (inputArray[1] == "11037")
            {
              if (currentLocation == 43)
              {
                currentLocation = 42;
                giveLocation();
                myDescription.innerHTML = "The laptop is now unlocked! I can now see what's on the USB.";
                pcLocked = false;
                password = -2;
              } else if (currentLocation == 0) {
                  currentLocation = 49;
                  giveLocation();
                  audio.src = "";
                  glitch.play();
                  setTimeout(elevator, 5000);
              }
              } else if (inputArray[1] == "9875")
              {
                if (currentLocation == 43)
                {
                  currentLocation = 44;
                  giveLocation();
                  myDescription.innerHTML = "This is on the USB";
                  images[6] = "6n9875.png"
                  getKey = true;
                }
              }
        }
      myInput.value = "";
    }
//#####################################################Inspect##################################################################################################
    if (inputArray[0] == "inspect") {
      console.log('inspecting something');
      if (evt.key == "Enter") {
        let inputArray = myInput.value.split(" ");
          switch (inputArray[1]) {
            case "blood":
              if (currentLocation == 29) {
                console.log("inspecting blood");
                currentLocation = 39;
                giveLocation();
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "closet":
              console.log("inspecting closet");
              if (currentLocation == 30) {
                currentLocation = 37;
                giveLocation();
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "laptop":
              console.log("inspecting laptop");
              if (currentLocation == 42) {
                if (pcLocked) {
                  currentLocation = 43;
                  giveLocation();
                } else {
                  myDescription.innerHTML = "Where is that?";
                }
              }
              break;
              case "safe":
              console.log("inspecting safe");
              if (currentLocation == 30) {
                currentLocation = 34;
                giveLocation();
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "6":
              console.log("inspecting 6");
              if (currentLocation == 31) {
                currentLocation = 32;
                giveLocation();
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "drawer":
              console.log("inspecting drawer");
              if (currentLocation == 31) {
                  if (getKey) {
                    slot1t = true;
                    slot1.src = "img/inventory/key.png";
                  } else {
                  myDescription.innerHTML = "It's locked.";
                }
                } else {
                  myDescription.innerHTML = "Where is that?";
              }
              break;
              case "pad":
              console.log("inspecting pad");
              if (currentLocation == 6) {
                if (!getKey) {
                  myDescription.innerHTML = "This is a pad with numbers on it hmmm...";
                } else if (getKey) {
                  currentLocation = 45;
                  giveLocation();
                }
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "3":
              console.log("inspecting 3");
              if (currentLocation == 6) {
                myDescription.innerHTML = "This is clearly a 3.";
              } else {
                myDescription.innerHTML = "Where is that?";
              }
              break;
              case "stuffed":
              if (inputArray[2] == "bear") {
                console.log("inspecting stuffed bear");
                if (currentLocation == 29) {
                  myDescription.innerHTML = "The stuffed bear can talk! Maybe there's a battery inside...";
                } else {
                  myDescription.innerHTML = "Where is that?";
                }
              }
                break;
            default:
            myDescription.innerHTML = "You typed it wrong...";
          }
        }
      myInput.value = "";
    }
//################################################################Use#######################################################################################
    if (inputArray[0] == "use"){
      console.log('using');
      if (evt.key == "Enter") {
        let inputArray = myInput.value.split(" ");
          switch (inputArray[1]) {
            case "key":
            if (slot1t) {
            if (inputArray[2] == "on") {
              if (inputArray[3] == "drawer") {
                if (currentLocation == 31) {
                drawerLock = false;
                if (!drawerLock) {
                  slot4.src = "img/inventory/scissor.png";
                  slot5.src = "img/inventory/scrap.png";
                  s1Use = false;
                  slot4t = true;
                  slot5t = true;
                  slot1.src = "img/inventory/empty.png";
                  slot1t = false;
                  myDescription.innerHTML = "I got a scissor. I wonder what i should do with this. I also got a scarp of paper.";
                  document.body.style.cursor = "default";
                }
              }
              } else if (inputArray[3] == "pad") {
                if (currentLocation == 45) {
                currentLocation = 6;
                giveLocation();
                myDescription.innerHTML = "I did it!";
                video.style.display = "inline";
                currentLocation = 46;
                giveLocation();
                video.play();
                audio.src = "";
                video.addEventListener('ended',myHandler,false);
              }
              } else {
                feedback.innerHTML = "Possible commands for key are: drawer and pad";
                myInput.value = "";
                setTimeout(removeFeedback, 4000);
              }
            } else {
              feedback.innerHTML = "You must type: on and then the object";
              myInput.value = "";
              setTimeout(removeFeedback, 4000);
            }
          }
              break;
              case "usb":
              if (slot2t) {
                if (currentLocation == 42) {
              if (inputArray[2] == "on") {
                if (inputArray[3] == "laptop") {
                  if (!pcLocked) {
                    currentLocation = 43;
                    giveLocation();
                    usb = true;
                    myDescription.innerHTML = "The password is on the paper i got from the drawer";
                  }
                } else {
                  feedback.innerHTML = "Possible commands for usb are: laptop";
                  myInput.value = "";
                  setTimeout(removeFeedback, 4000);
                }
              } else {
                feedback.innerHTML = "You must type: on and then the object";
                myInput.value = "";
                setTimeout(removeFeedback, 4000);
              }
            }
          }
                break;
                case "camera":
                if (slot3t) {
                  myDescription.innerHTML = "There are no batteries in the camera.";
                } else if (slot34t) {
                  if (currentLocation !== 41) {
                    oldLocation = currentLocation;
                    currentLocation = 40;
                    giveLocation();
                  }
                }
                  break;
                  case "scissor":
                  if (slot4t) {
                    if (currentLocation == 29) {
                  if (inputArray[2] == "on") {
                    if (inputArray[3] == "stuffed") {
                      if (inputArray[4] == "bear") {
                        myDescription.innerHTML = "There was a battery inside!";
                        slot6.src = "img/inventory/battery.png"
                        slot6t = true;
                        document.body.style.cursor = "default";
                      } else {
                        feedback.innerHTML = "Possible commands for usb are: stuffed bear";
                        myInput.value = "";
                        setTimeout(removeFeedback, 4000);
                    }
                    } else {
                      feedback.innerHTML = "Possible commands for usb are: stuffed bear";
                      myInput.value = "";
                      setTimeout(removeFeedback, 4000);
                  }
                  } else {
                    feedback.innerHTML = "You must type: on and then the object";
                    myInput.value = "";
                    setTimeout(removeFeedback, 4000);
                  }
                }
              }
                    break;
                    case "paper":
                    if (slot5t) {
                      if (currentLocation !== 40) {
                        oldLocation = currentLocation;
                        document.body.style.cursor = "default";
                        currentLocation = 41;
                        giveLocation();
                      }
                    }
                      break;
                      case "batteries":
                      if (slot6t) {
                      if (inputArray[2] == "on") {
                        if (inputArray[3] == "camera") {
                          document.body.style.cursor = "default";
                          slot3.src = "img/inventory/cameraB.png";
                          myDescription.innerHTML = "The camera can now be turned on!";
                          slot3t = false;
                          slot34t = true;
                        } else {
                          feedback.innerHTML = "Possible commands for batteries are: camera";
                          myInput.value = "";
                          setTimeout(removeFeedback, 4000);
                        }
                      } else {
                        feedback.innerHTML = "You must type: on and then the object";
                        myInput.value = "";
                        setTimeout(removeFeedback, 4000);
                      }
                    }
                        break;
                        default:
                        feedback.innerHTML = "You typed it wrong or you don't have the item yet";
                        myInput.value = "";
                        setTimeout(removeFeedback, 4000);
          }
        }
      myInput.value = "";
    }

    if (inputArray[0] != "go" && inputArray[0] != "input" && inputArray[0] != "use" && inputArray[0] != "inspect" ){
      feedback.innerHTML = "Possible commands are: go, input, inspect and use";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }
  }
}

let counter = 0;
let isPaused = false;
let sec = 0;
let clicked = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let monokumas = 0;
let song2 = false;

//###################################################################Get the location#################################################################
function giveLocation() {
  resetUse();
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "img/" + images[currentLocation];
  myDirections = "Possible directions are: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  console.log("Current room: " + currentLocation)
  console.log("Old room: " + oldLocation)
  switch (currentLocation) {
    case 0:
    hitbox.style.display = 'none';
    hitbox2.style.display = 'none';
    if (song2) {
      audio.src = "audio/Ikoroshia.mp3";
      song2 = false;
    }
      break;
    case 1:
    if (!clicked) {
      hitbox.style.width = '23px';
      hitbox.style.height = '20px';
      hitbox.style.top = '322px';
      hitbox.style.left = '1050px';
      hitbox.style.display = 'inline';
    } else {
      hitbox.style.display = 'none';
    }
    hitbox2.style.display = 'none';
      break;
      case 2:
    if (!clicked2) {
      hitbox.style.width = '23px';
      hitbox.style.height = '25px';
      hitbox.style.top = '267px';
      hitbox.style.left = '720px';
      hitbox.style.display = 'inline';
    } else {
      hitbox.style.display = 'none';
    }
      hitbox2.style.display = 'none';
        break;
        case 18:
    if (!clicked3) {
        hitbox.style.width = '50px';
        hitbox.style.height = '48px';
        hitbox.style.top = '284px';
        hitbox.style.left = '975px';
        hitbox.style.display = 'inline';
      } else {
        hitbox.style.display = 'none';
      }
        hitbox2.style.display = 'none';
          break;
          case 21:
          if (!clicked4) {
          hitbox.style.width = '54px';
          hitbox.style.height = '60px';
          hitbox.style.top = '302px';
          hitbox.style.left = '1056px';
          hitbox.style.display = 'inline';
        } else {
          hitbox.style.display = 'none';
        }
          hitbox2.style.display = 'none';
            break;
            case 24:
            if (!clicked5) {
            hitbox.style.width = '40px';
            hitbox.style.height = '47px';
            hitbox.style.top = '290px';
            hitbox.style.left = '756px';
            hitbox.style.display = 'inline';
          } else {
            hitbox.style.display = 'none';
          }
            hitbox2.style.display = 'none';
              break;
    case 6:
    hitbox.style.width = '80px';
    hitbox.style.height = '60px';
    hitbox.style.top = '248px';
    hitbox.style.left = '470px';
    hitbox.style.display = 'inline';
    //Hitbox 2
    hitbox2.style.width = '80px';
    hitbox2.style.height = '65px';
    hitbox2.style.top = '330px';
    hitbox2.style.left = '963px';
    hitbox2.style.display = 'inline';
    if (song) {
      audio.src = "audio/Re_ DISTRUST.mp3"
      function pad ( val ) { return val > 9 ? val : "0" + val; }
      var timer = setInterval( function() {
        if (!isPaused) {
            document.getElementById("seconds").innerHTML=pad(++sec%60);
            document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
          }
        }, 1000);
      song = false;
    }

    for (var i = 0; i < all.length; i++) {
      all[i].style.marginTop = '-379px';
    }
      break;
      case 29:
      hitbox.style.width = '120px';
      hitbox.style.height = '200px';
      hitbox.style.top = '110px';
      hitbox.style.left = '418px';
      hitbox.style.display = 'inline';
      //Hitbox 2
      hitbox2.style.width = '140px';
      hitbox2.style.height = '175px';
      hitbox2.style.top = '310px';
      hitbox2.style.left = '970px';
      hitbox2.style.display = 'inline';

      for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = '-379px';
      }
        break;
      case 30:
      hitbox.style.width = '230px';
      hitbox.style.height = '270px';
      hitbox.style.top = '200px';
      hitbox.style.left = '880px';
      hitbox.style.display = 'inline';
      //Hitbox 2
      hitbox2.style.width = '140px';
      hitbox2.style.height = '75px';
      hitbox2.style.top = '320px';
      hitbox2.style.left = '630px';
      hitbox2.style.display = 'inline';

      for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = '-379px';
      }
        break;
    case 31:
    hitbox.style.width = '170px';
    hitbox.style.height = '60px';
    hitbox.style.top = '420px';
    hitbox.style.left = '605px';
    hitbox.style.display = 'inline';
    //Hitbox 2
    hitbox2.style.width = '230px';
    hitbox2.style.height = '235px';
    hitbox2.style.top = '110px';
    hitbox2.style.left = '620px';
    hitbox2.style.display = 'inline';

    for (var i = 0; i < all.length; i++) {
      all[i].style.marginTop = '-379px';
    }
      break;
      case 36:
      hitbox.style.display = 'none';
      hitbox2.style.display = 'none';
      slot1.src = "img/inventory/key.png";
      slot1t = true;
      slot2.src = "img/inventory/usb.png";
      slot2t = true;
      slot3.src = "img/inventory/camera.png";
      slot3t = true;
      setTimeout(noItems, 2000);

      for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = '-379px';
      }
        break;
        case 40:
        hitbox.style.display = 'none';
        hitbox2.style.display = 'none';
        for (var i = 0; i < all.length; i++) {
          all[i].style.marginTop = '-470px';
        }
          break;
          case 41:
          hitbox.style.display = 'none';
          hitbox2.style.display = 'none';

          for (var i = 0; i < all.length; i++) {
            all[i].style.marginTop = '-470px';
          }
            break;
        case 42:
        hitbox.style.width = '300px';
        hitbox.style.height = '280px';
        hitbox.style.top = '190px';
        hitbox.style.left = '620px';
        hitbox.style.display = 'inline';
        //Hitbox 2
          hitbox2.style.display = 'none';

          for (var i = 0; i < all.length; i++) {
            all[i].style.marginTop = '-379px';
          }
          break;
          case 44:
          hitbox.style.display = 'none';
          hitbox2.style.display = 'none';

          for (var i = 0; i < all.length; i++) {
            all[i].style.marginTop = '-455px';
          }
            break;
          case 45:
          hitbox.style.width = '260px';
          hitbox.style.height = '280px';
          hitbox.style.top = '190px';
          hitbox.style.left = '645px';
          hitbox.style.display = 'inline';
          //hitbox 2
          hitbox2.style.display = 'none';

          for (var i = 0; i < all.length; i++) {
            all[i].style.marginTop = '-379px';
          }
            break;
            case 47:
            hitbox.style.display = 'none';
            hitbox2.style.display = 'none';
            setTimeout(congrats, 3000);
              break;
              case 48:
              hitbox.style.display = 'none';
              hitbox2.style.display = 'none';
              for (var i = 0; i < all.length; i++) {
                all[i].style.marginTop = '-470px';
              }
                break;
                case 50:
                for (var i = 0; i < all.length; i++) {
                  all[i].style.marginTop = '-397px';
                }
                  break;
    default:
     hitbox.style.display = 'none';
     hitbox2.style.display = 'none';
     for (var i = 0; i < all.length; i++) {
       all[i].style.marginTop = '-379px';
     }
  }
}
//################################################################Functions########################################################################
function removeFeedback() {
  feedback.innerHTML = "";
}

function openSesame()
{
  currentLocation = 36;
  giveLocation();
  safe = 35;
}

function noItems()
{
  currentLocation = 34;
  giveLocation();
}

function resetUse()
{
  s1Use = false;
  s2Use = false;
  s4Use = false;
  s6Use = false;
  if (slot1t) {
    slot1.src = "img/inventory/key.png";
  } else {
    slot1.src = "img/inventory/empty.png";
  }
  if (slot2t) {
    slot2.src = "img/inventory/usb.png";
  } else {
    slot2.src = "img/inventory/empty.png";
  }
  if (slot4t) {
    slot4.src = "img/inventory/scissor.png";
  } else {
    slot4.src = "img/inventory/empty.png";
  }
  if (slot6t) {
    slot6.src = "img/inventory/battery.png";
  } else {
    slot6.src = "img/inventory/empty.png";
  }
  document.body.style.cursor = "default";
}

function myHandler()
{
  currentLocation = 25;
  giveLocation();
  video.style.display = "none";
  audio.src = "audio/Ikoroshia.mp3";
}

function myHandler1()
{
  currentLocation = 50;
  giveLocation();
  video2.style.display = "none";
  audio.src = "audio/Monokuma.mp3";
  song2 = true;
  achievment.src = "img/achievments/easteregg.png";
  achievment.style.left = "0px";
  setTimeout(removeAchievment, 4000);
}

function congrats()
{
  currentLocation = 48;
  giveLocation();
  audio.src = "";
  laugh.play();
  achievment.src = "img/achievments/won.png";
  achievment.style.left = "0px";
  setTimeout(removeAchievment, 4000);
}

function removeAchievment()
{
  achievment.style.left = "-400px";
}

function checkMonokuma() {
  monokumas++;
  if (monokumas >= 5) {
    achievment.src = "img/achievments/monokuma.png";
    achievment.style.left = "0px";
    setTimeout(removeAchievment, 4000);
  }
}

function elevator()
{
  currentLocation = 46;
  giveLocation();
  video2.style.display = "inline";
  video2.play();
  video2.addEventListener('ended',myHandler1,false);
}

giveLocation();
