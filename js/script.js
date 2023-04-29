// play video on button click, on fullscreen 

const video = document.getElementById('video');
const blackScreen = document.getElementById('black-screen');
const turnVideoOn = () => {
    blackScreen.style.opacity = '1';
    video.requestFullscreen();
    video.style.display = 'block';
    video.play();
}

// detect if fullscreen mode is turned on or off

function hideVideo() {
    video.style.display = 'none';
    blackScreen.style.opacity = '0';

}

if (document.addEventListener) {
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler() {
    if (document.webkitIsFullScreen === false) {
        hideVideo();
    video.pause();

    }
    else if (document.mozFullScreen === false) {
        hideVideo();
    video.pause();


    }
    else if (document.msFullscreenElement === false) {
        hideVideo();
    video.pause();

    }
}
