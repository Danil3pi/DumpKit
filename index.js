//* Первое видео я смотрю и не записываю. Но нужно прямо на ходу записывать вещи, которые не понимаю.
//? audio.currentTime 
//? classList
//? Strinf with number 72 in the video. e.propertyName !== 'transition' 
//? tarnsitionend

window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    console.dir(audio);
})