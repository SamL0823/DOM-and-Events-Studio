// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
    console.log("all elements have loaded");
    //DOM code here to ensure all elements have loaded?

    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(){
        let takeOffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (takeOffConfirm === true) {
                document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
                document.getElementById("shuttleBackground").style.background = "blue";
                let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
                height = height + 10000;
                document.getElementById("spaceShuttleHeight").innerHTML = height;
            }
    });

    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function(){
       window.alert("The shuttle is landing. Landing gear engaged."); 
       document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
       document.getElementById("shuttleBackground").style.background = "green";
       document.getElementById("spaceShuttleHeight").innerHTML = "0";

    });

    let missionAbortButton = document.getElementById("missionAbort");
    missionAbortButton.addEventListener("click", function(){
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
            if(abortConfirm === true) {
                document.getElementById("flightStatus").innerHTML = "Mission aborted.";
                document.getElementById("shuttleBackground").style.background = "green";
                document.getElementById("spaceShuttleHeight").innerHTML = "0";
            }
    });

});


