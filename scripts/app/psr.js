'use strict';


function ShowPSRText(){

    const psrText = `- name: PSR2
  image:  herloct/phpcs
  commands:
  - phpcs --standard=PSR1,PSR2 /drone/src`;
    const psrContainer = document.querySelector('#psr');

    if (document.getElementById("PSRBox").checked){
        ReactDOM.render(psrText, psrContainer);
        console.log("PSR2: ...The PHPCS template for PSR2 only does the additional checks for PSR2 over PSR1, hence we need the PSR1 template as well.");
    } else {
        ReactDOM.render("", psrContainer);
    }
}
