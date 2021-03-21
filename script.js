let player = 0, computer = 0, times = 0;

const game = (playerSelection, computerSelection) => {
    if (times < 5) {
        if (playerSelection !== computerSelection) {
            if (playerSelection === 0 && computerSelection === 2) {
                player++;
            } else if (computerSelection === 0 && playerSelection === 2) {
                computer++;
            } else {
                let winnernum = Math.max(playerSelection, computerSelection);
                if (playerSelection === winnernum) {
                    player++;
                } else {
                    computer++
                }
            }
        }
    } else {
        times = 0;
        if (player > computer) {
            alert(`You win with ${player} over ${computer}`)
        }else if(player === computer){
            alert(`Draw! ${player}-${computer}`);
        } else {
            alert(`You loose with ${player} under ${computer}`)
        }
        player = 0;
        computer = 0;
    }
    document.getElementById('scores').textContent=`Player ${player} | Computer ${computer}`;
}
const computerPlay = () => Math.floor(Math.random() * 3);

window.addEventListener('load',() => {
    document.querySelectorAll("i[index]").forEach(E => {
        E.addEventListener('click', (e) => {
            let index = parseInt(e.target.getAttribute('index'));
            game(index, computerPlay());
            times++;
        });
    });
});