const musicDisplay = document.querySelectorAll(".music-span");
const musicAll = document.querySelectorAll(".music-play");
const title = document.querySelector(".title");
const titlePlace = document.querySelector("#title-place");
const titlePlaceWidth = Number(titlePlace.getAttribute("width"))*1000/2910.7;
const titlePlaceHeight = Number(titlePlace.getAttribute("height"))*1000/2910.7;
const titlePlaceX = Number(titlePlace.getAttribute("x"))*1000/2910.7;
const titlePlaceY = Number(titlePlace.getAttribute("y"))*1000/2910.7;
title.style.width = titlePlaceWidth+"px";
title.style.height = (titlePlaceHeight*0.8)+"px";
title.style.paddingTop = (titlePlaceHeight/8) +"px";
title.style.position='absolute';
title.style.top = titlePlaceY+"px";
title.style.left = titlePlaceX+"px";
let titleSrc = "Clown";
title.innerHTML = titleSrc;
const titleImage = document.querySelector(".title-image");
console.log(titleImage)
const imagePlace = document.querySelector("#image-place");
const imagePlaceWidth = Number(imagePlace.getAttribute("width"))*1000/2910.7;
const imagePlaceHeight = Number(imagePlace.getAttribute("height"))*1000/2910.7;
const imagePlaceX = Number(imagePlace.getAttribute("x"))*1000/2910.7;
const imagePlaceY = Number(imagePlace.getAttribute("y"))*1000/2910.7;
titleImage.style.width = imagePlaceWidth+"px";
titleImage.style.height = imagePlaceHeight+"px";
titleImage.style.position='absolute';
titleImage.style.top = imagePlaceY+"px";
titleImage.style.left = imagePlaceX+"px";
let titleImg = "1";
titleImage.src = `Img/${titleImg}.jpg`;
const artist = document.querySelector(".artist");
const artistPlace = document.querySelector("#artist-place");
const artistPlaceWidth = Number(artistPlace.getAttribute("width"))*1000/2910.7;
const artistPlaceHeight = Number(artistPlace.getAttribute("height"))*1000/2910.7;
const artistPlaceX = Number(artistPlace.getAttribute("x"))*1000/2910.7;
const artistPlaceY = Number(artistPlace.getAttribute("y"))*1000/2910.7;
artist.style.width = artistPlaceWidth+"px";
artist.style.height = artistPlaceHeight+"px";
artist.style.position='absolute';
artist.style.top = artistPlaceY+"px";
artist.style.left = artistPlaceX+"px";
let artistSrc = "Tila";
artist.innerHTML = artistSrc;
const leftCircle = document.querySelector("#left-circle");
const leftCircleCenterX = Number(leftCircle.getAttribute("cx"))*1000/2910.7;
const leftCircleCenterY = Number(leftCircle.getAttribute("cy"))*737/2145.5;
const leftCircleRadius = Number(leftCircle.getAttribute("r"))*0.36;
const rightCircle = document.querySelector("#right-circle");
const rightCircleCenterX = Number(rightCircle.getAttribute("cx"))*1000/2910.7;
const rightCircleCenterY = Number(rightCircle.getAttribute("cy"))*737/2145.5;
const rightCircleRadius = Number(rightCircle.getAttribute("r"))*0.36;
const tapeRight = document.querySelector("#tape-path-1");
const tapeLeft = document.querySelector("#tape-path-2");
const stopBg = document.querySelector("#stop-button-background");
const playBg = document.querySelector("#play-button-background");
const nextBg = document.querySelector("#next-button-background");
const previousBg = document.querySelector("#previous-button-background");
let music = [];
let barsss = [];




document.addEventListener('click', function (event) {
	if (!event.target.closest('#play-mask')) return;
    if (playBg.classList.contains("white-bg")){
        playBg.classList.remove("white-bg");
        stopBg.classList.add("white-bg");
    }
    else {
        stopBg.classList.remove("white-bg");
        playBg.classList.add("white-bg");
    };
    let num = document.querySelector(".title-image").src.replace("http://www.soomera.com/programs/sound-board/Img/", "Music/").replace(".jpg", ".mp3");
    let song = document.querySelector(`[value="${num}"]`);
    if (song.classList.contains("pause")){
        music[music.length-1].play();
        song.classList.remove("pause");
        song.classList.add("music-active");
        tapeRight.classList.add("tape-animation");
        tapeLeft.classList.add("tape-animation");
    }
    else {
        if (song.classList.contains("music-active")){
            music.forEach(e=>{
                e.pause();
            });
            song.classList.remove("music-active");
            musicAll.forEach(s=>{
                s.classList.remove("pause")
            });
            song.classList.add("pause");
            tapeRight.classList.remove("tape-animation");
            tapeLeft.classList.remove("tape-animation");

        }
        else {
            music.forEach(e=>{
                e.pause();
            });
            musicAll.forEach(e=>{
                e.classList.remove("music-active");
            });
            song.classList.add("music-active");
            music = [];
            let audio = new Audio(num);
            music.push(audio);
            audio.play();
            initPage(num);
            tapeRight.classList.add("tape-animation");
            tapeLeft.classList.add("tape-animation");
        }
    }
}, false);

document.addEventListener('click', function (event) {
	if (!event.target.closest('#stop-mask')) return;
    if (stopBg.classList.contains("white-bg")){
        stopBg.classList.remove("white-bg");
    }
    else {
        playBg.classList.remove("white-bg");
        stopBg.classList.add("white-bg");
    };
    
    let num = document.querySelector(".title-image").src.replace("http://www.soomera.com/programs/sound-board/Img/", "Music/").replace(".jpg", ".mp3");
    let song = document.querySelector(`[value="${num}"]`);
    music.forEach(e=>{
        e.pause();
    });
    musicAll.forEach(e=>{
        e.classList.remove("music-active");
    });
    song.classList.remove("music-active");
    music = [];
    tapeRight.classList.remove("tape-animation");
    tapeLeft.classList.remove("tape-animation");
}, false);



document.addEventListener('click', function (event) {
	if (!event.target.closest('#next-mask')) return;
    if (playBg.classList.contains("white-bg")){
    }
    else {
        stopBg.classList.remove("white-bg");
        playBg.classList.add("white-bg");
    };
    let num = document.querySelector(".title-image").src.replace("http://www.soomera.com/programs/sound-board/Img/", "").replace(".jpg", "");
    let song = 1;
    if (Number(num)< 5){
        num = `Music/${Number(num)+1}.mp3`;
        song = document.querySelector(`[value="${num}"]`);
    }
    else {
        num = `Music/1.mp3`;
        song = document.querySelector(`[value="${num}"]`);
    };
    let name = song.getAttribute("value").replace("Music/", "").replace(".mp3", "");
    titleImg = `${name}`;
    titleImage.src = `Img/${titleImg}.jpg`;
    artistSrc = document.querySelector(`#music-span-${name} > .music-artist`).innerHTML;
    artist.innerHTML = artistSrc;
    titleSrc = document.querySelector(`#music-span-${name} > .music-header`).innerHTML;
    title.innerHTML = titleSrc;

    if (song.classList.contains("music-active")){
        music.forEach(e=>{
            e.pause();
        });
        song.classList.remove("music-active");
        musicAll.forEach(s=>{
            s.classList.remove("pause")
        });
        song.classList.add("pause");
        tapeRight.classList.remove("tape-animation");
        tapeLeft.classList.remove("tape-animation");

    }
    else {
        music.forEach(e=>{
            e.pause();
        });
        musicAll.forEach(e=>{
            e.classList.remove("music-active");
        });
        song.classList.add("music-active");
        music = [];
        let audio = new Audio(num);
        music.push(audio);
        audio.play();
        initPage(num);
        tapeRight.classList.add("tape-animation");
        tapeLeft.classList.add("tape-animation");
    }
    
}, false);

document.addEventListener('click', function (event) {
	if (!event.target.closest('#previous-mask')) return;
    if (playBg.classList.contains("white-bg")){
    }
    else {
        stopBg.classList.remove("white-bg");
        playBg.classList.add("white-bg");
    };
    let num = document.querySelector(".title-image").src.replace("http://www.soomera.com/programs/sound-board/Img/", "").replace(".jpg", "");
    console.log(num)
    let song = 1;
    if (Number(num) > 1){
        num = `Music/${Number(num)-1}.mp3`;
        song = document.querySelector(`[value="${num}"]`);
    }
    else {
        num = `Music/5.mp3`;
        song = document.querySelector(`[value="${num}"]`);
    };
    let name = song.getAttribute("value").replace("Music/", "").replace(".mp3", "");
    titleImg = `${name}`;
    titleImage.src = `Img/${titleImg}.jpg`;
    artistSrc = document.querySelector(`#music-span-${name} > .music-artist`).innerHTML;
    artist.innerHTML = artistSrc;
    titleSrc = document.querySelector(`#music-span-${name} > .music-header`).innerHTML;
    title.innerHTML = titleSrc;

    if (song.classList.contains("music-active")){
        music.forEach(e=>{
            e.pause();
        });
        song.classList.remove("music-active");
        musicAll.forEach(s=>{
            s.classList.remove("pause")
        });
        song.classList.add("pause");
        tapeRight.classList.remove("tape-animation");
        tapeLeft.classList.remove("tape-animation");

    }
    else {
        music.forEach(e=>{
            e.pause();
        });
        musicAll.forEach(e=>{
            e.classList.remove("music-active");
        });
        song.classList.add("music-active");
        music = [];
        let audio = new Audio(num);
        music.push(audio);
        audio.play();
        initPage(num);
        tapeRight.classList.add("tape-animation");
        tapeLeft.classList.add("tape-animation");
    }
    
}, false);

musicDisplay.forEach(e=>{
    e.addEventListener("mouseover", m=>{
        if (m.target.classList.contains("music-img")) {
            let musicPlay = document.querySelector(`#${e.id}> .music-play`);
            if (!musicPlay.classList.contains("active")){
                musicAll.forEach(f=>{
                    f.classList.remove("active")
                });
                musicPlay.classList.add("active");
            }    
        };
    }); 
      
});
musicAll.forEach(f=>{
    f.addEventListener("click", (c)=>{
        c.preventDefault();
        let musicP = c;
        let name = f.getAttribute("value").replace("Music/", "").replace(".mp3", "");
        titleImg = `${name}`;
        titleImage.src = `Img/${titleImg}.jpg`;
        artistSrc = document.querySelector(`#music-span-${name} > .music-artist`).innerHTML;
        artist.innerHTML = artistSrc;
        titleSrc = document.querySelector(`#music-span-${name} > .music-header`).innerHTML;
        title.innerHTML = titleSrc;
        playSong(f, musicP);
    });
});

function playSong(f, musicP){
    if (f.classList.contains("pause")){
        music[music.length-1].play();
        f.classList.remove("pause");
        f.classList.add("music-active");
        tapeRight.classList.add("tape-animation");
        tapeLeft.classList.add("tape-animation");
    }
    else {
        if (f.classList.contains("music-active")){
            music.forEach(e=>{
                e.pause();
            });
            f.classList.remove("music-active");
            musicAll.forEach(s=>{
                s.classList.remove("pause")
            });
            f.classList.add("pause");
            tapeRight.classList.remove("tape-animation");
            tapeLeft.classList.remove("tape-animation");

        }
        else {
            music.forEach(e=>{
                e.pause();
            });
            musicAll.forEach(e=>{
                e.classList.remove("music-active");
            });
            f.classList.add("music-active");
            music = [];
            let audio = new Audio(`${musicP.target.getAttribute("value")}`);
            music.push(audio);
            audio.play();
            initPage(`${musicP.target.getAttribute("value")}`);
            tapeRight.classList.add("tape-animation");
            tapeLeft.classList.add("tape-animation");
        }
    }
}

canvas = document.getElementById("renderer");
fitToContainer(canvas);
function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

ctx = canvas.getContext("2d");
ctx.strokeStyle = "transparent";

var canvas, ctx, center_x, center_y, radius, bars,
    x_end, y_end, bar_height, bar_width,
    frequency_array;
 
bars = 140;
bar_width = 3;
 
function initPage(sourceC){
    
    audio = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)();
    analyser = context.createAnalyser();
    console.log("hey")
    audio.src = `${sourceC}`; // the source path
    console.log(audio.src)
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
 
    music.push(audio);

    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    audio.play();
    animationLooperLeft();
    animationLooperRight();
}
 
function animationLooperLeft(){
    
    // set to the size of device
    canvas = document.getElementById("renderer");
    ctx = canvas.getContext("2d");
    
    // find the center of the window
    center_x = leftCircleCenterX;
    center_y = leftCircleCenterY;
    radius = leftCircleRadius;
    //draw a circle
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < bars; i++){
        if (barsss.length > 800) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            barsss = [];
        }
        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;
        
        bar_height = frequency_array[i]*0.35;

        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
        y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);
        
    
    }
    window.requestAnimationFrame(animationLooperLeft);
}

function animationLooperRight(){
    
    // set to the size of device
    canvas = document.getElementById("renderer");
    ctx = canvas.getContext("2d");
    
    // find the center of the window
    center_x = rightCircleCenterX;
    center_y = rightCircleCenterY;
    radius = rightCircleRadius;
    //draw a circle
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < bars; i++){
        if (barsss.length > 800) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            barsss = [];
        }
        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;
        
        bar_height = frequency_array[i]*0.35;

        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
        y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);
        
    
    }
    window.requestAnimationFrame(animationLooperRight);
}
 
// for drawing a bar
function drawBar(x1, y1, x2, y2, width,frequency){
    
    var lineColor = "rgb(" + frequency + ", " + frequency + ", " + 255 + ")";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    barsss.push(ctx);
}
