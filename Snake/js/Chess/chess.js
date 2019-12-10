const canvas = document.getElementById("chess");
const ctx = canvas.getContext("2d");

function drawChess() {

    let box = 70;
    let flag = true;

    for(let i =0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            
            ctx.fillStyle = flag == true ? "white" : "black";
            ctx.fillRect(box * i, box * j, box, box);

            flag = !flag;
        }
        flag = !flag;
    }
}
drawChess();