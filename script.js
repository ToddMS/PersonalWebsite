function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function start() {
    var rotators = document.getElementsByClassName('rotator');  
    var delayInSeconds = 3;                            

    var workoutAppImages = ['picture1.png', 'picture2.png', 'picture3.png', 'picture4.png', 'picture5.png', 'picture6.png', 'picture7.png', 'picture8.png'];
    var recipeAppImages = ['picture1.png', 'picture2.png', 'picture3.png'];
    var sketchJSAppVideos = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4', 'video5.mp4'];

    Array.from(rotators).forEach(function(rotator) {
        var media;
        var srcPath = rotator.src.split('/').slice(-3).join('/');  // Get the last 3 parts of the path
        
        if (srcPath.includes('recipe')) {
            media = recipeAppImages;
        } else if (srcPath.includes('workout')) {
            media = workoutAppImages;
        } else if (srcPath.includes('creative')) {
            media = sketchJSAppVideos;
        } else {
            console.error("The media source does not match any known app category.");
            return;
        }

        var num = 0;
        var changeMedia = function() {
            var len = media.length;
            var basePath = rotator.src.split('/').slice(0, -1).join('/'); // Get the base path without the file
            var mediaSrc = basePath + '/' + media[num];

            if (rotator.tagName.toLowerCase() === 'video') {
                // For video elements
                rotator.src = mediaSrc;
                rotator.play(); // Ensure the video plays automatically
            } else {
                // For image elements
                rotator.src = mediaSrc;
            }

            num++;
            if (num == len) {
                num = 0;
            }
        };

        // Ensure video runs automatically on page load without controls
        if (rotator.tagName.toLowerCase() === 'video') {
            rotator.autoplay = true;
            rotator.loop = true;
            rotator.muted = true;
            rotator.controls = false; // Disable controls
            rotator.play();
        }

        setInterval(changeMedia, delayInSeconds * 1000);
    });
}

window.onload = function() {
    start();
}


