// import '../css/common.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const framePlayer = document.querySelector('iframe');
const player = new Player(framePlayer);
const PLAYER_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(playerOn, 1000));
function playerOn ({ seconds }) {
    localStorage.setItem(PLAYER_KEY, Math.round(seconds));}
let playTime = player.setCurrentTime(10).then(function (seconds) {
    seconds = localStorage.getItem(PLAYER_KEY)
    ?player.setCurrentTime(localStorage.getItem(PLAYER_KEY)):player.setCurrentTime(0);
})
const playError = playTime.catch(function (error) {
    switch (error.name) { case 'RangeError':
        player.setCurrentTime(0);
        break;
    default:
        player.setCurrentTime(0);
        break; } });