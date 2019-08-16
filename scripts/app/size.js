'use strict';


function ShowSizeText(){

    const sizeText = `- name: CodeSize (Complexity)
      image: denisura/phpmd
      commands:
      - phpmd /drone/src text codesize | grep -v "Unexpected token"`;
    const sizeContainer = document.querySelector('#size');

    if (document.getElementById("SizeBox").checked) {
        ReactDOM.render(sizeText, sizeContainer);
        console.log("Codesize: Grep -v stuff on code size needs fixing");
    } else {
        ReactDOM.render("", sizeContainer);
    }
}
