import ancientsData from '../src/data/ancients'
import difficulties from '../src/data/difficulties'
import greenCards from '../src/data/mythicCards/green'
import brownCards from '../src/data/mythicCards/brown'
import blueCards from '../src/data/mythicCards/blue'

import './styles/main.scss'
 
console.log('hi')
//CONST
 const deckConteiner = document.querySelector('.deck-container');
 let ancient ='';
 let lvl =''
 let lvlgreenCards, lvlbrownCards, lvlblueCards;
 let allblue = 0, allgreen = 0,  allbrown = 0;
 let pull=[];
 let spread=[];
 
 window.onload = function(){
    getAncients();
    chooseLvl();
 }
 
 function getAncients(){
 
     const ancients = document.querySelector('.ancients-container');
 
     ancients.onclick = function(e){
        deckConteiner.innerHTML = '';
         ancient = e.target.id;
         getSheme();
         const r =[...ancients.childNodes].map(el=> {if(el.classList !== undefined && el.classList.contains('active')) el.classList.remove('active')})
         e.target.classList.add('active')
         getLvlDifficulty();
        //  createShuffleBtn();
     }
 }

 function getSheme(){
    const res = ancientsData.map(el => {
        if(el.id == ancient){
            allblue = el.firstStage.blueCards + el.secondStage.blueCards + el.thirdStage.blueCards;
            allgreen = el.firstStage.greenCards + el.secondStage.greenCards + el.thirdStage.greenCards;
            allbrown = el.firstStage.brownCards + el.secondStage.brownCards + el.thirdStage.brownCards;
            spread['green']= [el.firstStage.greenCards,el.secondStage.greenCards,el.thirdStage.greenCards];
            spread['brown']= [el.firstStage.brownCards,el.secondStage.brownCards,el.thirdStage.brownCards];
            spread['blue']= [el.firstStage.blueCards,el.secondStage.blueCards,el.thirdStage.blueCards];
        }
    })

}
 
 function getLvlDifficulty(){
     const difficultyConteiner = document.querySelector('.difficulty-container');
     difficultyConteiner.innerHTML='';
     const difficElem = difficulties.map(el => {
         let elem = document.createElement('div');
         elem.classList.add('difficulty');
         elem.innerHTML = el.name;
         difficultyConteiner.appendChild(elem);
     })
 }
 
 function chooseLvl(){
     const difficultyConteiner = document.querySelector('.difficulty-container');
     lvlgreenCards= []
     lvlbrownCards = [] 
     lvlblueCards=[]
     difficultyConteiner.onclick = function(e){
         lvl = e.target.innerHTML;
         pull=[];
         const r =[...difficultyConteiner.childNodes].map(el=> {if(el.classList.contains('active')) el.classList.remove('active')})
         e.target.classList.add('active')
         createShuffleBtn();
         createLvlColorCards();
     }
 
 }

 function createLvlColorCards(){
    console.log(lvl)
    if(lvl === 'средний'){
        lvlgreenCards = greenCards.slice(0);
        lvlblueCards = blueCards.slice(0);
        lvlbrownCards = brownCards.slice(0);
    }
    if(lvl === 'легкий'){
        lvlgreenCards = greenCards.filter(el=> el.difficulty != 'hard');
        lvlblueCards = blueCards.filter(el=> el.difficulty != 'hard');
        lvlbrownCards = brownCards.filter(el=> el.difficulty != 'hard');
    }
    if(lvl === 'очень легкий'){
        lvlgreenCards = greenCards.filter(el=> el.difficulty == 'easy');
        lvlblueCards = blueCards.filter(el=> el.difficulty == 'easy');
        lvlbrownCards = brownCards.filter(el=> el.difficulty == 'easy');
        while(lvlgreenCards.length < allgreen) addNormalCard(lvlgreenCards, greenCards);
        while(lvlbrownCards.length < allbrown) addNormalCard(lvlbrownCards, brownCards);
        while(lvlblueCards.length < allblue) addNormalCard(lvlblueCards, blueCards);
    }
    if(lvl === 'сложный'){
        lvlgreenCards = greenCards.filter(el=> el.difficulty !== 'easy');
        lvlblueCards = blueCards.filter(el=> el.difficulty !== 'easy');
        lvlbrownCards = brownCards.filter(el=> el.difficulty !== 'easy');
    }
    if(lvl === 'очень сложный'){
        lvlgreenCards = greenCards.filter(el=> el.difficulty == 'hard');
        lvlblueCards = blueCards.filter(el=> el.difficulty == 'hard');
        lvlbrownCards = brownCards.filter(el=> el.difficulty == 'hard');
        while(lvlgreenCards.length < allgreen) addNormalCard(lvlgreenCards, greenCards);
        while(lvlbrownCards.length < allbrown) addNormalCard(lvlbrownCards, brownCards);
        while(lvlblueCards.length < allblue) addNormalCard(lvlblueCards, blueCards);
    }

    return [lvlgreenCards,lvlbrownCards,lvlblueCards]
 }


function createPull(greenCards,brownCards,blueCards){
    let st1 = createStage(spread['green'][0],greenCards).concat(createStage(spread['brown'][0],brownCards), createStage(spread['blue'][0],blueCards))
    let st2 = createStage(spread['green'][1],greenCards).concat(createStage(spread['brown'][1],brownCards), createStage(spread['blue'][1],blueCards))
    let st3 = createStage(spread['green'][2],greenCards).concat(createStage(spread['brown'][2],brownCards), createStage(spread['blue'][2],blueCards))

    pull.push(st1)
    pull.push(st2)
    pull.push(st3)

    // console.log(pull)
}

function createStage(lvlNum, lvlCards){
    let result =[]
    for(let i=0; i < lvlNum; i++){
        result.push(lvlCards.shift());
    }
    return result;
 }


 function addNormalCard(lvlCards, cards){
    let normalCards = cards.filter(el=> el.difficulty === 'normal');
    let randomNum = getRandomNum(0, normalCards.length -1)
    if(!lvlCards.includes(normalCards[randomNum])) lvlCards.push(normalCards[randomNum]);
    
 }

 function getRandomNum(min, max){
    return Math.round(Math.random() * (max - min) + min);
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
     shuffleBtn.onclick = function(e){
             createPull(lvlgreenCards,lvlbrownCards,lvlblueCards)
         shuffleBtn.style.display ='none'
         deckConteiner.innerHTML = createCurrentState()
         deckClick()
     }
 }
 
 function createCurrentState(){
    // let current='';
    let current =`
     <div class='current-state'>
       <div class='stage-container stage1'>
         <span class='stage-text'>Первая стадия</span>
         <div class='dots-container'>
             <div class=' dot green'> ${ spread['green'][0]}</div>
             <div class=' dot brown'> ${spread['brown'][0]}</div>
             <div class=' dot blue'> ${spread['blue'][0]}</div>
         </div>  
       </div>
       <div class='stage-container stage2'>
         <span class='stage-text'>Вторая стадия</span>
         <div class='dots-container'>
         <div class=' dot green'> ${ spread['green'][1]}</div>
         <div class=' dot brown'> ${spread['brown'][1]}</div>
         <div class=' dot blue'> ${spread['blue'][1]}</div>
         </div>  
      </div> 
     <div class='stage-container stage3'>
         <span class='stage-text'>Третья стадия</span>
         <div class='dots-container'>
         <div class=' dot green'> ${ spread['green'][2]}</div>
         <div class=' dot brown'> ${spread['brown'][2]}</div>
         <div class=' dot blue'> ${spread['blue'][2]}</div>
         </div>  
     </div>
     <div class='deck'></div>  
     <div class='last-card'></div>  
     </div>
            
     `
        return current
 }

 function deckClick(){
    const deck = document.querySelector('.deck');
    deck.onclick = function(e){
    getRandomcard()
    }
 }
function getRandomcard(){
    let elem;
    const card = document.querySelector('.last-card');
    const deck = document.querySelector('.deck');
    if(pull[0].length>0){

        elem = shuffle(pull[0]).shift()
        console.log('stage1', elem.id, elem.difficulty)
        document.querySelector('.stage1 .stage-text').classList.add('active')
        changeDot('stage1', elem.color)

    }else if(pull[1].length > 0){
        elem = shuffle(pull[1]).shift()
        console.log('stage2', elem.id, elem.difficulty)
        document.querySelector('.stage1 .stage-text').classList.remove('active')
        document.querySelector('.stage2 .stage-text').classList.add('active')
        changeDot('stage2', elem.color)
    }else if(pull[2].length > 0){
        elem = shuffle(pull[2]).shift()
        console.log('stage3', elem.id, elem.difficulty)
        document.querySelector('.stage2 .stage-text').classList.remove('active')
        document.querySelector('.stage3 .stage-text').classList.add('active')
        changeDot('stage3', elem.color)
    }else{
        deck.style.opacity = 0;
        return
    }
    // console.log(elem.cardFace)
    card.style.backgroundImage = `url(${elem.cardFace})`;
}

function shuffle(arr){
   return arr.sort(()=>Math.random()-0.5)
}

function changeDot(stage, color){
    let dot = document.querySelector(`.${stage} .${color}`)
    dot.innerHTML -=1; 
}