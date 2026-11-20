const cl = console.log;
const player = document.getElementById('player');

let showplayers = (pla) => {
    let val = pla.target.value
    let allDives = [...document.querySelectorAll('.All')]
    allDives.forEach(d => {
        d.classList.add('d-none')
    })

    let selectDiv = [...document.getElementsByClassName(val)]
    selectDiv.forEach(d => {
        d.classList.remove('d-none')
    })
}


player.addEventListener('change', showplayers)