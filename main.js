let boxer = ["box1", "box2", "box3", "box4"]
let randli = []
let rungame = false
let brukerli = []

const gamearea = document.querySelector(".wrap");

gamearea.addEventListener("click", event => {
    eventhandler(event)

});

function eventhandler(e){
    const keypressed = e.target.id
    switch(keypressed){
        case "Start":
            console.log(randli)
            if (!rungame) startgame()
            else endgame()
            break;
        case "box1":
            addtobrukerli(keypressed)
            break;
        case "box2":
            addtobrukerli(keypressed)
            break;
        case "box3":
            addtobrukerli(keypressed)
            break;
        case "box4":
            addtobrukerli(keypressed)
            break;
        default:
            break
    }
};

function addtobrukerli (box){
    brukerli.push(box)
    if(rungame){
        if(checkuserclick()){
            //nextround()
            if(brukerli.length === randli.length)nextround()
        }else{
            endgame()
        }
        
    }
}

function nextround() {
    setTimeout(2000)
    console.log("next round")
    const nextitem = `box${Math.ceil(Math.random() *4)}`
    randli.push(nextitem)
    console.log(randli)
    brukerli = []
};

function startgame(){
    rungame = true
    nextround()
    console.log("starting game")
}

function endgame() {
    brukerli = []
    randli = []
    rungame = false
    console.log("Game Over")
};

function checkuserclick(){
    console.log(brukerli)
    console.log(randli)
    for (let index = 0; index < brukerli.length; index++) {
        if(brukerli[index] !== randli[index]){
            return false
        }
    }
    return true
}


//-------------------------------------------------------

function tileActivated{
    const tile = document.querySelector ()
}

const tilearray = ['a', 'b', 'b', 'd', 'd'];

function activateTile(tilearray){
    tilearray.forEach(tile => {
        document.querySelector(`#$(tile)`);
        Element.classList.toggle('activated')
        setTimeout(()=> {
            Element.classlist.toggle('activated')
        }, 500);
    })
}