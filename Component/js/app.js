const cardText = {
   1: 'С помощью эффективных банковских решений мы открываем компаниям новые возможности для работы на рынках США, Европы, Азии, Ближнего Востока или Африки. Бизнес-счет в нужной вам стране упростит работу с локальными партнерами и между-народными системами переводов SEPA и SWIFT.',
   2: 'С помощью эффективных банковских решений мы открываем компаниям новые возможности для работы на рынках США, Европы, Азии, Ближнего Востока или Африки. Бизнес-счет в нужной вам стране упростит работу с локальными партнерами и международными системами переводов SEPA и SWIFT. $1000 от 3 дней',
   3: 'У вас есть интерес к инвестированию, но вы не знаете, с чего начать? Мы предоставим вам готовые решения на выбор: от небольших компаний с проверенной историей до крупных партнерств с ограниченной ответственностью и трастов. Вы можете выбрать различные юрисдикции от Гонконга, Сингапура, Сейшельских островов, Австралии или США до Великобритании и стран Европейского Союза, включая Польшу, Венгрию, Словакию, Литву, Чехию, Германию, Нидерланды, Францию или Эстонию. От $2000',
   4: 'Самая тяжелая задача для любого бизнеса - разобраться в тонкостях налогового законодательства. Это особенно тяжело в странах ЕС, где помимо общеевропейских законов, существует множество локальных норм. Мы возьмем на себя весь документооборот и поможем сэкономить налоги в соответствии с законодательством выбранной страны. от $150 в месяц',
   5: 'Поможем подключить прием платежей от Ваших клиентов, настроим эквайринг и обеспечим полный цикл процессинга платежей. Наши решения позволят работать с самыми разными типами бизнеса, включая high-risk вертикаль. От $700',
   6: 'Неважно, сколько сотрудников в Вашей компании, насколько часто и какому количеству партнеров Вы переводите средства. Мы справимся с задачей любого масштаба. С помощью решений для осуществления массовых платежей, сотрудники и партнеры получат средства наиболее удобным способом и точно в срок. Наиболее востребованными в последнее время являются OCT-транзакции в ЕС, США, Азербайджане, Казахстане, Украине и России. Выплата на банковские реквизиты доступна только в Европе и США. +$1000',
   7: 'Многие задачи можно решить быстрее, чем это кажется. Именно поэтому, помимо комплексных решений, мы предлагаем индивидуальные консультации. Мы вникнем в суть проблемы и постараемся найти оптимальное решение для Вашей задачи. $150- час Первые 15 минут бесплатно',
}


let conteiner = document.querySelector('.pop_uo_conteiner')
let popUp = document.querySelector('.mask_pop_up')
let cards = document.querySelector('.cards')
let down = Array.from(document.querySelectorAll('.down'))
let card = Array.from(document.querySelectorAll('.card'))
let cardPar = document.querySelector('.card_par')
let availableScreenWidth = window.innerWidth

//    window.addEventListener('resize', addClass)

// function addClass (e){
//     let width = e.target.outerWidth
//     if(width <= 500){
//          down.forEach((el)=>{
//             el.classList.add('down-active')
//          })
//     } else {
//         down.forEach((el)=>{
//             el.classList.remove('down-active')
//          })
//     }
// }


let res = () => {
    availableScreenWidth = window.innerWidth
    console.log(availableScreenWidth)
    availableScreenWidth > 500 ? down.map((el)=> el.classList.remove('down-active')) : down.map((el)=> el.classList.add('down-active'))
}

const winSize = (e) => {
    console.log(availableScreenWidth)
    card.map((item)=> item.addEventListener('click', (e)=>{
        e.target.classList.contains('btn') ? alert(`Payload the ${e.target.innerHTML.split(' ')[1]}`) : 
      availableScreenWidth > 500 ? popUpDesctop(item) : popUpMobail(item)
}))
}
winSize()

window.addEventListener('resize', ()=>{res()})


function popUpMobail (el){
    el.children[2].innerHTML = textUpdate(el.id)
    el.children[2].classList.toggle('card_par-open')
     console.log( el.id)
}



function textUpdate(id) {
 let text = ''
    for (let key in cardText){
        if (id == key) {
            text = cardText[key]
        }
    }
    return text
}

function popUpDesctop (elem){
   let id = elem.id
   console.log(id)
   let cloneElem = elem.cloneNode(true)
   cloneElem.classList.add('card-active')
   cloneElem.querySelector('.card_text').innerHTML = textUpdate(id)
   cloneElem.querySelector('.btn').classList.add('pop_up_btn')
   conteiner.append(cloneElem)
   popUp.classList.add('active')
}

popUp.addEventListener('click', removePopUp)
function removePopUp (){
    popUp.querySelector('.card').remove()
    popUp.classList.remove('active')
}
