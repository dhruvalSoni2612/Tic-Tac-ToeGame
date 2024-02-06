let boxes = document.querySelectorAll('.btn');
let resetGame = document.querySelector('.resetBtn');
let newGame = document.querySelector('.newBtn');

let msg = document.querySelector('.winner');
let msgHide = document.querySelector('.hide')



let turnO = true;

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

let count = 0;

boxes.forEach((btn)=>{
  btn.addEventListener("click", () =>{
    if(turnO){
      btn.innerText = "O";
      btn.classList.add("Js-Ocolor");
      btn.classList.remove("js-Xcolor");

      turnO = false;
    }else{
      btn.innerText	= "X";
      btn.classList.add("js-Xcolor");
      btn.classList.add("Js-Ocolor");

      turnO = true;
    }
    count++;
    btn.disabled = true;

    checkWinner();

  })
});

const enableBoxes = () =>{
  boxes.forEach((box) => {
    box.disabled = false
    box.innerText = '';
    count = 0;

  });
}



const resetBtn = () =>{
  turnO = true;
  enableBoxes();
  msgHide.classList.add('hide');

}

const disableBtn = ()=>{
  for (const btn of boxes) {
    btn.disabled = true;
  }
}

const showWinner = (winner) =>{
  msg.innerText = `Winner is [${winner}] User`;
  msgHide.classList.remove('hide');

  
}


const checkWinner = () => {
  for (const pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
          if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);
            disableBtn();
          }else if (count === 9 && pos1val !== pos2val) {
            msg.innerText = `Match is Tie`;
            msgHide.classList.remove('hide');

          }
        }
  }
}
 

newGame.addEventListener('click', resetBtn);
resetGame.addEventListener('click', resetBtn);
