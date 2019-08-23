'use strict';


function ShowPSRText(){

    const psrText = `- name: PSR2
  image:  herloct/phpcs
  commands:
  - phpcs --standard=PSR1,PSR2 /drone/src`;
    const psrContainer = document.querySelector('#psr');

    if (document.getElementById("PSRBox").checked){
        ReactDOM.render(psrText, psrContainer);
    } else {
        ReactDOM.render("", psrContainer);
    }
}
