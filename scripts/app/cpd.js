'use strict';


function ShowCPDText(){

    const cpdText = `- name: Copy paste detection
  image: rvannauker/phpcpd
  commands:
  - phpcpd /drone/src`;
    const cpdContainer = document.querySelector('#cpd');

    if (document.getElementById("CPDBox").checked){
        ReactDOM.render(cpdText, cpdContainer);
    } else {
        ReactDOM.render("", cpdContainer);
    }
}
