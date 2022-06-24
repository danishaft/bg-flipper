const colors = ["green", "brown", "purple", "red", "black", "pink", "yellow", "orange", "blue"];

const btn = document.querySelector('.btn');

const color = document.querySelector('.color')

const trick = document.querySelector('.trick')


btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    trick.style.borderBottomColor = colors[randomNumber];
});

 function getRandomNumber() {
    const myNumber = Math.random()
    return Math.floor(myNumber * colors.length)
   
 }

