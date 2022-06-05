let recommendArea = document.querySelector('.recommendArea')
let recommend = document.querySelector('.recommend')
let bottomLine = document.getElementById('bottomLine')
recommend.addEventListener('click',function(){
    recommendArea.style.display = 'block'
    recommend.style.color = '#22D59C'
    bottomLine.style.display = 'block'

    rankingArea.style.display = 'none'
    ranking.style.color = '#1A1A1A80'
    bottomLine1.style.display = 'none'

    searchArea.style.display = 'none'
    recRan.style.display = 'block'
})
let rankingArea = document.querySelector('.rankingArea')
let ranking = document.querySelector('.ranking')
let bottomLine1 = document.getElementById('bottomLine1')
ranking.addEventListener('click',function(){
    rankingArea.style.display = 'block'
    ranking.style.color = '#22D59C'
    bottomLine1.style.display = 'block'

    recommendArea.style.display = 'none'
    recommend.style.color = '#1A1A1A80'
    bottomLine.style.display = 'none'

    searchArea.style.display = 'none'
    recRan.style.display = 'block'
})
let research = document.querySelector('.research')
let recRan = document.getElementById('rec-ran')
let searchArea = document.querySelector('.searchArea')
research.addEventListener('click',function(){
    recRan.style.display = 'none'
    searchArea.style.display = 'block'
})

let cancel = document.getElementById('cancel')
cancel.addEventListener('click',function(){
    recRan.style.display = 'block'
    searchArea.style.display = 'none'
})