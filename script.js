var score = 0;
const cookie = document.getElementById("cookie");
const grandma = document.getElementById("grandma")
cookie.addEventListener('click',()=>{
  score = score + 1;
  document.getElementById('score').textContent = score;
  if (score==50){
    grandma.src="grandma.png";
  }
grandma.addEventListener('click',(event)=>{
  event.stopImmediatePropagation();
  score = score + 5;
  document.getElementById('score').textContent = score; 
})
});
