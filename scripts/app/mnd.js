'use strict';


function ShowMNDText(){

    const mNDText = `- name: Embedded Configuration (Magic Numbers)
      image: dockerizedphp/phpmnd
      commands:
      - phpmnd /drone/src --non-zero-exit-on-violation --extensions=default_parameter,condition,operation,return,argument`;
    const mNDContainer = document.querySelector('#mnd');

    if (document.getElementById("MNDBox").checked){
        ReactDOM.render(mNDText, mNDContainer);
        console.log("MND: Checking pretty much everywhere they could be found.");
        console.log("MND: You need the non-zero-exit directive to ensure that the drone GUI flags up an error.");
    } else {
        ReactDOM.render("", mNDContainer);
    }
}
