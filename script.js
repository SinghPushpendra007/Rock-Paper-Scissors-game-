function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rock").style.visibility = "visible";
    document.getElementById("paper").style.visibility = "visible";
    document.getElementById("scissors").style.visibility = "visible";
}

const clickedHand = [
    "<img src='rock.png' id='img1'>",
    "<img src='paper.png' id='img1'>",
    "<img src='scissors.png' id='img1'>"
];

const clickedRightHand = [
    "<img src='rock.png' id='img2'>",
    "<img src='paper.png' id='img2'>",
    "<img src='scissors.png' id='img2'>"
];

function game(position) {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    img1.style.animation = 'shakeLeft 1s 5 ease-in-out';
    img2.style.animation = 'shakeRight 1s 5 ease-in-out';

    const random = Math.floor(Math.random() * 3);
    
    setTimeout(() => {
        document.getElementById("hand2").innerHTML = clickedRightHand[random];
        document.getElementById("hand1").innerHTML = clickedHand[position];
    }, 1000); // Show hands after 1 second

    setTimeout(() => {
        if (random === position) {
            alert("MATCH DRAW !!");
        } else if ((position === 0 && random === 2) || 
                   (position === 1 && random === 0) || 
                   (position === 2 && random === 1)) {
            alert("YOU ARE WINNER, GOOD JOB !!");
        } else {
            alert("COMPUTER IS WINNER, TRY NEXT TIME !!");
        }
        window.location.reload();
    }, 2000); // Show result after 2 seconds
}
