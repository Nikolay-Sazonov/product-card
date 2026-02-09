// лекция
const recolorTheFirstCardButton = document.getElementById('recolor-the-first-card-button')
const firstProductCard = document.querySelector('.product-card')
const greenHashColor = '#00ff0d'

recolorTheFirstCardButton.addEventListener('click', ()=>  {
  firstProductCard.style.backgroundColor = greenHashColor;
})

const productCards = document.querySelectorAll('.product-card')
const recolorTheAllCardButton = document.getElementById('recolor-the-all-card-button')
const yellowHashColor = '#e2d520'

recolorTheAllCardButton.addEventListener('click', ()=> {
  productCards.forEach(
    card => card.style.backgroundColor = yellowHashColor
  );
})

const openGoogleButton = document.getElementById('open-google-button')
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle(){
  const answer = confirm ('Вы действительно хотите перейти на сайт Google')
  if (answer == true) {
    window.open('https://www.google.com/')
  }else {
    console.log('переход отменен')
  }
}

// Домашнее задание
const textTitle= document.querySelector('.product-card__title')
  textTitle.addEventListener('mouseover', ()=>{
    console.log('было непросто');
  })

const recolorButton = document.getElementById('recolor-button')

recolorButton.addEventListener('click',  () => {
  recolorButton.classList.toggle('active');
})
