let startGame = document.getElementById("start");
startGame.addEventListener("click", function () {
    location.reload();
})
let count = 0;
let firstIcon = document.getElementById("icon1");
let secondIcon = document.getElementById("icon2");
let thirdIcon = document.getElementById("icon3");
let addRock = document.getElementById("rock");
let choose = document.getElementById("chose");
let externalPlayer = document.getElementById("external").innerHTML;
choose.innerHTML = externalPlayer + " " + "chose";
let result = document.getElementById("result");

console.log(typeof (userScore));
addRock.addEventListener("click",
    function () {
        addRock.style.fill = "#fca311";
        count++;
        if (count % 2 == 0) {
            firstIcon.style.display = "block";
            secondIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "It's a tie, Replay";
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;
        } else if (count % 3 == 0) {
            secondIcon.style.display = "block";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "You Win";
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) ;
        } else {
            secondIcon.style.display = "none";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "block";
            result.innerHTML = "You lost, Try your luck next time"
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML);
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;

        }

    }
)
let addPaper = document.getElementById("paper");
addPaper.addEventListener("click",
    function () {
        addPaper.style.fill = "#fca311";
        count++;
        if (count % 3 == 0) {
            firstIcon.style.display = "block";
            secondIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "You Win";
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) ;
               
        } else if (count % 2 == 0) {
            secondIcon.style.display = "block";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "You lost, Try your luck next time"
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML);
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;        } else {
            secondIcon.style.display = "none";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "block";
            result.innerHTML = "It's a tie, Replay"
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;
        }
    }
)
let addScissors = document.getElementById("scissors");
addScissors.addEventListener("click",
    function () {
        addScissors.style.fill = "#fca311";
        count++;
        if (count % 2 == 0) {
            secondIcon.style.display = "none";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "block";
            result.innerHTML = "You Win";
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) ;
        } else if (count % 3 == 0) {
            secondIcon.style.display = "block";
            firstIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "It's a tie, Replay"
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML) + 1;
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;
        } else {
            firstIcon.style.display = "block";
            secondIcon.style.display = "none";
            choose.style.display = "block";
            thirdIcon.style.display = "none";
            result.innerHTML = "You lost, Try your luck next time"
            document.getElementById("score2").innerHTML = Number(document.getElementById("score2").innerHTML);
            document.getElementById("score1").innerHTML = Number(document.getElementById("score1").innerHTML) + 1;        }
    }
)

let modalIcon = document.getElementById("just");
let closeIcon = document.getElementById("close");
let modalContainer = document.getElementById("modalContainer");
modalIcon.addEventListener("click", function () {
    modalContainer.style.display = "block";
    modalIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener("click", function () {
    modalContainer.style.display = "none";
    modalIcon.style.display = "block";
    closeIcon.style.display = "none";
})