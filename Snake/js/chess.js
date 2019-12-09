const canvas = document.getElementById("chess");
const ctx = canvas.getContext("2d");

function drawChess() {

    let block;
    let flag = true;

    for(let i =0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            block = document.createElement('div');

            if(flag) block.className = 'block black';
            else block.className = 'block white';

            canvas.appendChild(block);
            flag = !flag;
        }
        flag = !flag;
    }
}
drawChess();