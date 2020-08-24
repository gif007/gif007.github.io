// Make an erase button
// Control for choosing color

let colorMode = 'Rainbow';

function getRandomNumber(max) {
    // Return a random number in the range of 0 - max
    return Math.floor(Math.random() * max);
}


function getRandomColor() {
    // Return a random color in rbg mode
    return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}


function makeGrid(n) {
    // Make a 500px grid with num number of divs on a side

    const divWidth = 500 / n;
    let i = 0
    const grid = document.createElement('div');
    grid.setAttribute('style', 'border: 2px solid black; max-width: 500px; margin: 1em auto;');
    grid.setAttribute('id', 'grid');
    while (i < n) {
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex;');
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.style.width = divWidth + 'px';
            div.style.height = divWidth + 'px';
            div.style.backgroundColor = 'white';
            div.onmouseover = function () {
                if (colorMode === 'Rainbow') {
                    div.style.backgroundColor = getRandomColor();
                } else if (colorMode === 'Grey') {
                    div.style.backgroundColor = 'grey';
                } else if (colorMode === 'Eraser') {
                    div.style.backgroundColor = 'white';
                }
            }
            row.appendChild(div);
        }
        grid.appendChild(row);
        i++;
    }
    container.appendChild(grid);

    const buttonGroup = document.createElement('div');
    buttonGroup.setAttribute('style', 'max-width: 500px; margin: 1em auto; display: flex; align-items: center; justify-content: space-around;');

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.setAttribute('style', 'border: none; background-color: #0275d8; color: white; font-size: 1.125em; border-radius: 15px; cursor: pointer; padding: 12px;');
    resetButton.onclick = function () {
        n = window.prompt('Enter grid resolution:', 16);
        if (isNaN(n)) {
            return;
        } else if (n < 2) {
            return;
        };
        clearContainer();
        startGame(n);
    };
    buttonGroup.appendChild(resetButton);

    const rainbowButton = document.createElement('button');
    rainbowButton.textContent = 'Rainbow';
    rainbowButton.setAttribute('style', 'border: none; background-color: #0275d8; color: white; font-size: 1.125em; border-radius: 15px; cursor: pointer; padding: 12px;');
    rainbowButton.onclick = function () {
        colorMode = 'Rainbow';
        greyButton.style.border = 'none';
        eraser.style.border = 'none';
        rainbowButton.style.border = '2px solid black';
    };
    buttonGroup.appendChild(rainbowButton);

    const greyButton = document.createElement('button');
    greyButton.textContent = 'Greyscale';
    greyButton.setAttribute('style', 'border: none; background-color: #0275d8; color: white; font-size: 1.125em; border-radius: 15px; cursor: pointer; padding: 12px;');
    greyButton.onclick = function () {
        colorMode = 'Grey';
        rainbowButton.style.border = 'none';
        eraser.style.border = 'none';
        greyButton.style.border = '2px solid black';
    };
    buttonGroup.appendChild(greyButton);

    const eraser = document.createElement('button');
    eraser.textContent = 'Eraser';
    eraser.setAttribute('style', 'border: none; background-color: #0275d8; color: white; font-size: 1.125em; border-radius: 15px; cursor: pointer; padding: 12px;');
    eraser.onclick = function () {
        colorMode = 'Eraser';
        greyButton.style.border = 'none';
        rainbowButton.style.border = 'none';
        eraser.style.border = '2px solid black';
    };
    buttonGroup.appendChild(eraser);

    if (colorMode === 'Rainbow') {
        rainbowButton.style.border = '2px solid black';
    } else if (colorMode === 'Grey') {
        greyButton.style.border = '2px solid black';
    } else if (colorMode === 'Eraser') {
        eraser.style.border = '2px solid black';
    }

    container.appendChild(buttonGroup);
}


function clearContainer() {
    // Clear the game area
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


function startGame(n=16) {
    const splash = document.createElement('div');
    splash.setAttribute('style', 'background-color: #5bc0de; width: 500px; height: 500px; margin: 1em auto; display: flex; align-items: center; justify-content: space-around; cursor: pointer;');
    splash.addEventListener('click', function() {
        makeGrid(n);
        container.removeChild(splash);
    });
    const title = document.createElement('h3');
    title.setAttribute('style', 'font-size: 3em; color: white;');
    title.textContent = 'START';
    splash.appendChild(title);
    container.appendChild(splash);
}

const container = document.querySelector('#game-container');
window.onload = startGame();
