import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const framePlayer = document.querySelectorAll('#vimeo-player');
const vimeoPlayer = new player(framePlayer);
vimeoPlayer.on( 'timeupdate', throttle(function ({seconds}) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(Math.round(seconds)) );
    console.log('played the video!', Math.round(seconds)); }, 1000));
vimeoPlayer.setCurrentTime( JSON.parse(localStorage.getItem('videoplayer-current-time')) );
