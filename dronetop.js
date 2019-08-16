'use strict';

function ShowDroneTop(){

    const droneTopText = `kind: pipeline
name: DroneForPHP
steps:`;
    const droneNoText = "No options selected. No drone file needed.";
    const droneTopContainer = document.querySelector('#dronetop');
    if (
        document.getElementById("PSRBox").checked ||
        document.getElementById("MNDBox").checked ||
        document.getElementById("CleanBox").checked ||
        document.getElementById("SizeBox").checked ||
        document.getElementById("UnusedBox").checked ||
        document.getElementById("SOLIDBox").checked ||
        document.getElementById("CPDBox").checked
    ) {
    ReactDOM.render(droneTopText, droneTopContainer);
    } else {
    ReactDOM.render(droneNoText, droneTopContainer);
    }
}
