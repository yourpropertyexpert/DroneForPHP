'use strict';


function ShowSolidText(){

    const solidText = `- name: SOLID Design Rules
      image: denisura/phpmd
      commands:
      - phpmd /drone/src text design | grep -v "Unexpected token"
`;
    const solidContainer = document.querySelector('#solid');

    if (document.getElementById("SOLIDBox").checked){
        ReactDOM.render(solidText, solidContainer);
        console.log("SOLID: Need to fix the grep.");
    } else {
        ReactDOM.render("", solidContainer);
    }
}
