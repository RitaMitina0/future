let player;
let playerBg = $('.player');
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '374',
    width: '554',
    videoId: 'M7lc1UVf-VE',
  })
}

$('.player__start').on('click', function () {
      player.playVideo();
      playerBg.css({"display":"none"});
  });
  