// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener ("load", function () {

    let flightStatus = this.document.getElementById ("flightStatus");
    let takeOffButton = this.document.getElementById ("takeoff")
    let shuttleBackground = this.document.getElementById ("shuttleBackground");
    let shuttleHeight = this.document.getElementById ("spaceShuttleHeight");
    let landButton =this.document.getElementById ("landing")
    let abortButton = this.document.getElementById ("missionAbort")
    let upButton = this.document.getElementById ("up");
    let downButton = this.document.getElementById ("down");
    // let rightButton = this.document.getElementById ("right");
    // let leftBUtton = this.document.getElementById ("left");
    let rocketImage = this.document.getElementById ("rocket");

    takeOffButton.addEventListener ("click", function () {

        if (confirm("Confirm that the shuttle is ready for takeoff.")) {

            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = Number(10000)

        }

    });
    
    landButton.addEventListener ("click", function () {

        alert ("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = Number(0)

    });

    abortButton.addEventListener ("click", function () {

        if (confirm("Confirm that you want to abort the mission.")) {

            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = Number(0);

        }

    });

    upButton.addEventListener ("click", function () {

        let height = Number(shuttleHeight.innerHTML)
        alert(height);
    
        height += 10000;

        shuttleHeight.innerHTML = height;
        rocketImage.style.paddingTop += `${70}px`;

    });

    downButton.addEventListener ("click", function () {

        let height = Number(shuttleHeight.innerHTML)
        alert(height)
    
        height -= 10000;

        shuttleHeight.innerHTML = height;
        rocketImage.style.paddingTop -= `${70}px`;


    });

})