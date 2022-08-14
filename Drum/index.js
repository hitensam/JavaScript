sounds = {w : 'tom-1.mp3', a : 'tom-2.mp3', s : 'tom-3.mp3', d : 'tom-4.mp3', j : 'snare.mp3',
 k : 'crash.mp3', l : 'kick-bass.mp3'}

elements = ['wDrum', 'aDrum', 'sDrum', 'dDrum', 'jDrum', 'kDrum', 'lDrum']

for (var k = 0; k<elements.length; k++){
window.addEventListener('keypress', gotPressed)
document.querySelector(`.${elements[k][0]}`).addEventListener('click', gotClicked)
// document.querySelector(`.${elements[k][0]}`).param = elements[k][0] //eval(elements[k])     // console.log(`${val.currentTarget.param}`)
}

function buttonSelect(selectedButton, start=false)
{
    if(start){selectedButton.classList.add('pressed')}
    else{setTimeout(function (){selectedButton.classList.remove('pressed')}, 200)}
}

function soundPlay(val, selectedButton)
{
    buttonSelect(selectedButton, true)
    var audio = new Audio(`sounds/${sounds[val]}`) 
    audio.play()
    buttonSelect(selectedButton)
}
function gotPressed(val)
{
    const activeButton = document.querySelector(`.${val.key}`)
    soundPlay(val.key, activeButton)  
}

function gotClicked(val)
{
    const activeButton = document.querySelector(`.${val.currentTarget.textContent}`); 
    soundPlay(val.currentTarget.textContent, activeButton)
}