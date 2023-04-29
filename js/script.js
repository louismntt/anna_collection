const playFirstVideo = function() {
    document.getElementById('section-video1').scrollIntoView();
    const video1 = document.getElementById('video1');
    video1.play();
    }

// detect end of video 1, scroll to section-video2 and play video2 
const video1 = document.getElementById('video1');
video1.addEventListener('ended', function() {
    document.getElementById('section-video2').scrollIntoView();
    const video2 = document.getElementById('video2');
    video2.play();
    }
);

// detect end of video 2, scroll to section-video3 and play video3
const video2 = document.getElementById('video2');
video2.addEventListener('ended', function() {
    document.getElementById('section-video3').scrollIntoView();
    const video3 = document.getElementById('video3');
    video3.play();
    }
);

// detect end of video 3, scroll to section-video4 and play video4
const video3 = document.getElementById('video3');
video3.addEventListener('ended', function() {
    document.getElementById('section-video4').scrollIntoView();
    const video4 = document.getElementById('video4');
    video4.play();
    }
);

