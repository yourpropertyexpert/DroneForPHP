'use strict';

function ShowDroneTop(){

    const droneTopText = `kind: pipeline
name: DroneForPHP
steps:`;
    const droneNoText = "No options selected. No drone file needed.";
    const droneTopContainer = document.querySelector('#dronetop');
    const droneButton = React.createElement("button", {className:"btn btn-secondary btn-sm", 'data-clipboard-target':"#output"}, "Copy YAML to clipboard");
    const droneButtonContainer = document.querySelector('#copybutton');

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
    ReactDOM.render(droneButton, droneButtonContainer);
    } else {
    ReactDOM.render(droneNoText, droneTopContainer);
    ReactDOM.render("", droneButtonContainer);
    }
}
