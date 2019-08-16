'use strict';


function ShowCleanText(){

    const cleanText = `- name: CleanCode
      image: denisura/phpmd
      commands:
      - phpmd /drone/src text cleancode | grep -v "Unexpected token"
`;
    const CleanContainer = document.querySelector('#clean');

    if (document.getElementById("CleanBox").checked) {
        ReactDOM.render(cleanText, CleanContainer);
        console.log("Clean Code: uses the default PHPMD rules. The grep -v stuff needs to be sorted out since it stuffs the return codes.");
    } else {
        ReactDOM.render("", CleanContainer);
    }

}
