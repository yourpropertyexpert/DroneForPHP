'use strict';


function ShowUnusedText(){

    const unusedText = `- name: Unused code
      image: denisura/phpmd
      commands:
      - phpmd /drone/src text unusedcode`;
    const unusedContainer = document.querySelector('#unused');
    if (document.getElementById("UnusedBox").checked) {
        ReactDOM.render(unusedText, unusedContainer);
        console.log("Unused: Need to fix the grep.");
    } else {
        ReactDOM.render("", unusedContainer);
    }
}
