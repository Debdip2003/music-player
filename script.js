"use strict";

//LIST

const music__list=[
  {
    img: 'image/mayabee.jpeg',
    name : 'Mayabee',
    artist : 'Blue Touch',
    music : 'music/Mayabee(Mr-Jatt1.com).mp3',
  },
  {
    img: 'image/fossils.jpg',
    name : 'Acid',
    artist : 'Fossils',
    music : 'music/Acid Choro Mukhe(Mr-Jatt1.com).mp3',
  },
  {
    img: 'image/bhiindesi tara.jpeg',
    name : 'Amar Bhindesi Tara',
    artist : 'Chondrobindu',
    music : 'music/Amar-Bhindeshi-Tara(PagalWorldl).mp3',
  },
]


// SELECTING ELEMENTS

let actual__song = document.getElementById("actual__song")
const play = document.querySelector(".play");
// const play__button = document.querySelector(".fa-play");
const action__button = document.querySelector("#action__button");
// const pause__button=document.querySelector(".fa-pause")
const playpausebtn=document.querySelector(".playpausebtn")
const total__duration=document.querySelector(".total__duration")
const current__time=document.querySelector(".current__time")
const track__number=document.querySelector(".track__number")
const track__image=document.querySelector(".track__image")
const track__name=document.querySelector(".track__name")
const track_artistName=document.querySelector(".track_artistName")
const back__button=document.querySelector(".back__button")
const forward__button=document.querySelector(".forward__button")

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

function playpauseSong(){
   if(playpausebtn.classList.contains(".play__btn")){
    playpausebtn.innerHTML=playpausebtn.innerHTML.replace('fa-play','fa-pause')
    //  actual__song.pause()
     playpausebtn.classList.remove(".play__btn")
    //  playpausebtn.classList.add(".fa-play")
     loadTrack()
    //  console.log('hello')
   }else{
    // actual__song.play()
    playpausebtn.innerHTML=playpausebtn.innerHTML.replace('fa-pause','fa-play')
    // playpausebtn.classList.remove(".fa-play")
    playpausebtn.classList.add(".play__btn")
    // console.log('hi')
  }
}
// const text=playpausebtn.innerHTML.replace('fa-play','fa-pause')
// console.log(text)
// console.log(playpausebtn.innerHTML)


// if(actual__song.play()){
//     setInterval(()=>{
//         play.value=actual__song.currentTime
//     },1000);
// }
// play.onchange=function(){
//     actual__song.play()
//     actual__song.currentTime=play.value
// }



 //ON CLICKING THE PLAY PAUSE BUTTON

action__button.addEventListener("click",playpauseSong)
// pause__button.addEventListener("click",playpauseSong)

