'use strict';


function ShowCPDText(){

    const cpdText = `- name: Copy paste detection
      image: rvannauker/phpcpd
      commands:
      - phpcpd /drone/src`;
    const cpdContainer = document.querySelector('#cpd');

    if (document.getElementById("CPDBox").checked){
        ReactDOM.render(cpdText, cpdContainer);
        console.log("CPD: Very straightforward docker image with sensible defaults.");
    } else {
        ReactDOM.render("", cpdContainer);
    }
}
