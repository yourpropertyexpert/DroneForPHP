'use strict';


function ShowMNDText(){

    const mNDText = `- name: Embedded Configuration (Magic Numbers)
  image: dockerizedphp/phpmnd
  commands:
  - phpmnd /drone/src --non-zero-exit-on-violation --extensions=default_parameter,condition,operation,return,argument`;
    const mNDContainer = document.querySelector('#mnd');

    if (document.getElementById("MNDBox").checked){
        ReactDOM.render(mNDText, mNDContainer);
    } else {
        ReactDOM.render("", mNDContainer);
    }
}
