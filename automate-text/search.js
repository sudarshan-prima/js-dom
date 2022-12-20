const words = ['MIS Templates', 'ESOP management', 'Credits'];

const ele = document.getElementById('search-text')

let count = 0;

function cycleArray() {
    let name = words[count];
    console.log(name);
    ele.setAttribute('placeholder', `Search "${name}"`)

    count++;

    if (count === words.length) {
        count = 0;
    }
}

function stopPlace(e) {
    
}

ele.addEventListener('click', stopPlace)

setInterval(cycleArray, 2000);


console.log(ele);

