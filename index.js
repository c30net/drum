function play(e) {
    if (e.keyCode === 65) {
        var audio = new Audio('./sounds/boom.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(360deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 83) {
        var audio = new Audio('./sounds/clap.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(180deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 68) {
        var audio = new Audio('./sounds/hihat.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(89.2deg, rgb(0, 0, 0) 10.4%, rgb(255, 0, 0) 37.1%, rgb(255, 216, 51) 64.3%, rgb(255, 255, 255) 90.5%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 70) {
        var audio = new Audio('./sounds/kick.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(109.6deg, rgb(255, 24, 134) 11.2%, rgb(252, 232, 68) 52%, rgb(53, 178, 239) 100.2%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 71) {
        var audio = new Audio('./sounds/openhat.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(76.5deg, rgb(129, 252, 255) 0.4%, rgb(255, 175, 207) 49.8%, rgb(255, 208, 153) 98.6%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 72) {
        var audio = new Audio('./sounds/ride.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'radial-gradient(circle at 50.4% 50.5%, rgb(251, 32, 86) 0%, rgb(135, 2, 35) 90%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 74) {
        var audio = new Audio('./sounds/snare.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(109.6deg, rgb(9, 9, 121) 11.2%, rgb(144, 6, 161) 53.7%, rgb(0, 212, 255) 100.2%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 75) {
        var audio = new Audio('./sounds/tink.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'radial-gradient(circle at 10% 20%, rgb(85, 149, 27) 0.1%, rgb(183, 219, 87) 90%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    } else if (e.keyCode === 76) {
        var audio = new Audio('./sounds/tom.wav');
        var key = document.querySelector(`button[data-key="${e.keyCode}"]`);
        key.classList.add('up');
        document.body.style.backgroundImage =
            'linear-gradient(109.1deg, rgb(249, 244, 233) 3.4%, rgb(243, 220, 193) 23.5%, rgb(224, 171, 165) 45%, rgb(161, 127, 161) 65.3%, rgb(115, 106, 152) 87.2%)';
        setTimeout(() => {
            changeColor();
            key.classList.remove('up');
            key.classList.add('down');
            key.classList.remove('down');
        }, 200);
        audio.play();
    }
}

function changeColor() {
    document.body.style.backgroundImage = '';
}

// let trainers = ['ab', 'ac', 'ad'];
// function renderTrainer(arr) {
//     arr.forEach((element) => {
//         let trainerDiv = document.createElement('div');
//         trainerDiv.className = 'card';
//         trainerDiv.innerHTML = 'Hello there';
//         trainerDiv.dataset.id = 12;
//         document.body.append(trainerDiv);
//     });
// }

// renderTrainer(trainers);

// let x = 0;
// let thisis = document.getElementById('thisis');
// function plus() {
//     x = x + 1;
//     console.log(x);
//     thisis.innerHTML = x;
// }
// function showit() {
//     console.log(x + 'This is from outside of the function');
//     thisis.innerHTML = x;
// }
// function minus() {
//     x = x - 1;
//     console.log(x);
//     thisis.innerHTML = x;
// }
