"use strict";

//LIST

const music__list = [
  {
    img: "./mayabee.jpeg",
    name: "Mayabee",
    artist: "Blue Touch",
    music: "Mayabee(Mr-Jatt1.com).mp3",
  },
  {
    img: "./acid.jpeg",
    name: "Acid",
    artist: "Fossils",
    music: "Acid Choro Mukhe(Mr-Jatt1.com).mp3",
  },
  {
    img: "./bhiindesi tara.jpeg",
    name: "Amar Bhindesi Tara",
    artist: "Chondrobindu",
    music: "Amar-Bhindeshi-Tara(PagalWorldl).mp3",
  },
];
let currentIndex = 0;
let activeMusic = music__list[currentIndex];

// SELECTING ELEMENTS

let actual__song = document.getElementById("actual__song");
const play = document.querySelector(".play");
const action__button = document.querySelector("#action__button");
const playpausebtn = document.querySelector(".playpausebtn");
const total__duration = document.querySelector(".total__duration");
const current__time = document.querySelector(".current__time");
const track__number = document.querySelector(".track__number");
const track__image = document.querySelector(".track__image");
const track__name = document.querySelector(".track__name");
const track_artistName = document.querySelector(".track_artistName");
const back__button = document.querySelector(".back__button");
const forward__button = document.querySelector(".forward__button");
const song_details = document.querySelector(".song_details");
const play__slider = document.querySelector(".play__slider");
const song__source = document.getElementById("song__source");

document.addEventListener("DOMContentLoaded", setHTML);

console.log(actual__song);
console.log(song__source.src);
console.log(window.location.href);

//FUNCTIONS

// let track__index=0
// let isPlaying=false
// let updateTimer

// loadTrack(track__index)

// function loadTrack(track__index){
//   clearInterval(updateTimer)
//   actual__song=music__list[track__index].music
//   // actual__song.onload()
//   track__image.style.backgroundImage=music__list[track__index].img
//   track__name.value=music__list[track__index].name
//   track__number.value="Playing music"+ (track__index+1) +"of" + music__list.length
//   track_artistName.value=music__list[track__index].artist
//   reset()
// }

// function reset(){
//   current__time.value='0:00'
//   total__duration.value='0:00'
//   play.value=0
// }

// actual__song.onload=function(){
//     play.max=actual__song.duration
//     play.value=actual__song.currentTime
// }

function setHTML() {
  song__source.src = `${window.location.href}${activeMusic.music}`;
  actual__song.innerHTML = `
  <source src="${activeMusic.music}" type="audio/mpeg"></source>
  `;
  // actual__song.src = activeMusic.music;
  song_details.innerHTML = `
  <div class="track__image"><img src="${activeMusic.img}" alt="" /></div>
        <div class="track__name">${activeMusic.name}</div>
        <div class="track_artistName">${activeMusic.artist}</div>
  
  `;
  play__slider.innerHTML = `
  <div class="current__time">0:00</div>
        <input type="range" min=0 max=${
          actual__song?.duration
        } value="0" class="play"/>
        <div class="total__duration">${Math.trunc(
          actual__song?.duration / 60
        )}:${
    Math.trunc(actual__song?.duration) % 60 > 9
      ? Math.trunc(actual__song?.duration) % 60
      : "0" + (Math.trunc(actual__song?.duration) % 60)
  }</div>
  `;
}

function setDetails() {
  if (currentIndex >= music__list.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  activeMusic = music__list[currentIndex];

  actual__song.pause();

  setHTML();

  actual__song.play();
}

function playpauseSong() {
  if (action__button.innerHTML.includes("fa-pause")) {
    action__button.innerHTML = action__button.innerHTML.replace(
      "fa-pause",
      "fa-play"
    );
    actual__song.pause();
    // loadTrack();
  } else {
    actual__song.play();
    action__button.innerHTML = action__button.innerHTML.replace(
      "fa-play",
      "fa-pause"
    );
  }
}

if (actual__song.play()) {
  setInterval(() => {
    play.value = actual__song.currentTime;
  }, 1000);
}
play.onchange = function () {
  // actual__song.play();
  actual__song.currentTime = play.value;
};

//ON CLICKING THE PLAY PAUSE BUTTON

action__button.addEventListener("click", playpauseSong);

forward__button.addEventListener("click", setDetails);
