
// import ancients from '../data/ancients'
// console.log(ancients)

// import {ancientsData} from './data/ancients.js'
// console.log(ancientsData)

const deckConteiner = document.querySelector('.deck-container');

window.onload = function(){

    getAncients();
    // getLvlDifficulty();
    chooseLvl();
    // clickshuffleBtn();
}

function getAncients(){

    const ancients = document.querySelector('.ancients-container');

    ancients.onclick = function(e){
        const r =[...ancients.childNodes].map(el=> {if(el.classList !== undefined && el.classList.contains('active')) el.classList.remove('active')})
        e.target.classList.add('active')
        getLvlDifficulty();
    }
}

function getLvlDifficulty(){
    const difficultyConteiner = document.querySelector('.difficulty-container');
    difficultyConteiner.innerHTML='';
    const difficultyArr = ['очень легкий','легкий','средний','сложный','очень сложный']


    const difficElem = difficultyArr.map(el => {
        let elem = document.createElement('div');
        elem.classList.add('difficulty');
        elem.innerHTML = el;
        difficultyConteiner.appendChild(elem);
    })
}

function chooseLvl(){
    const difficultyConteiner = document.querySelector('.difficulty-container');
    difficultyConteiner.onclick = function(e){
        // console.log(difficultyConteiner.childNodes)
        const r =[...difficultyConteiner.childNodes].map(el=> {if(el.classList.contains('active')) el.classList.remove('active')})
        e.target.classList.add('active')
        createShuffleBtn();
    }

}

function createShuffleBtn(){
    deckConteiner.innerHTML = '';
    let span = document.createElement('span');
    span.classList.add('shuffle-button');
    span.innerHTML = 'Замешать колоду';
    deckConteiner.appendChild(span);

    clickshuffleBtn();
}

function clickshuffleBtn(){
    const shuffleBtn = document.querySelector('.shuffle-button');
    // console.log(shuffleBtn)
    shuffleBtn.onclick = function(e){
        shuffleBtn.style.display ='none'
        deckConteiner.innerHTML = createCurrentState()
    }
}

function createCurrentState(){
    return `
    <div class='current-state'>
      <div class='stage-container'>
        <span class='stage-text'>Первая стадия</span>
        <div class='dots-container'>
            <div class=' dot green'> ${0}</div>
            <div class=' dot brown'> ${0}</div>
            <div class=' dot blue'> ${0}</div>
        </div>  
      </div>
      <div class='stage-container'>
        <span class='stage-text'>Вторая стадия</span>
        <div class='dots-container'>
            <div class=' dot green'> ${0}</div>
            <div class=' dot brown'> ${0}</div>
            <div class=' dot blue'> ${0}</div>
        </div>  
     </div> 
    <div class='stage-container'>
        <span class='stage-text'>Третья стадия</span>
        <div class='dots-container'>
            <div class=' dot green'> ${0}</div>
            <div class=' dot brown'> ${0}</div>
            <div class=' dot blue'> ${0}</div>
        </div>  
    </div>
    <div class='deck'></div>  
    <div class='last-card'></div>  
    </div>
           
    `

}
