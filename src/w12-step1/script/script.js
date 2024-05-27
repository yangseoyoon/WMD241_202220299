console.log("안녕하센요?");
let elemBody = document.body; //body 불러오는 코드//
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8 0.05 0)";

let aCard = document.querySelector(".card"); //class를 찾아서 가져오는것(한개만)//
//document.querySelectorAll() //해당하는 모든 것을 가져옴(여러개)//
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");

  aCard.classList.toggle("card--state--clicked");
  console.log(aCard.classList);
});
//여러 상황에 대한(ex클릭,마우스휠조절, 뭐 여러개..)이벤트를 부여함
