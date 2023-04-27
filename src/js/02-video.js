import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelectorAll('#vimeo-player');
const vimeoPlayer = new player(iframe);
vimeoPlayer.on('timeupdate');
