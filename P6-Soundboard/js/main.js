let audio1 = new Audio('./assets/audio/hit.mp3'); 
let audio2 = new Audio('./assets/audio/burning.mp3'); 
let audio3 = new Audio('./assets/audio/eating.mp3'); 
let audio4 = new Audio('./assets/audio/nether.mp3'); 
let audio5 = new Audio('./assets/audio/cave.mp3'); 
let audio6 = new Audio('./assets/audio/witch.mp3'); 
let audio7 = new Audio('./assets/audio/villager.mp3'); 
let audio8 = new Audio('./assets/audio/zombie.mp3'); 
let audio9 = new Audio('./assets/audio/ghast.mp3'); 
let audio10 = new Audio('./assets/audio/sheep.mp3'); 
let audio11 = new Audio('./assets/audio/minecraft.mp3'); 
let audio12 = new Audio('./assets/audio/sweden.mp3'); 
console.log('audio1');

function buttonAudio(sound) {
    if (sound == 1) {
        audio1.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 2) {
        audio2.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 3) {
        audio3.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 4) {
        audio4.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 5) {
        audio5.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 6) {
        audio6.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 7) {
        audio7.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 8) {
        audio8.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 9) {
        audio9.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 10) {
        audio10.cloneNode().play();
        // audio11.pause();
        // audio11.currentTime=0;
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 11) {
        audio11.play();
        // audio12.pause();
        // audio12.currentTime=0;
    } else if (sound == 12) {
        audio12.play();
        // audio11.pause();
        // audio11.currentTime=0;
    }
}