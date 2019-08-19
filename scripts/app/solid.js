'use strict';


function ShowSolidText(){

    const solidText = `- name: SOLID Design Rules
  image: denisura/phpmd
  commands:
# Need to grep out "Unexpected token" errors in newer versions of PHP
# Because the grep exits with error code 0, we have to generate the exit code by parsing the output
  - phpmd /drone/src text design | grep -v "Unexpected token" > /tmp/result
  - ROWS=\`wc -l < /tmp/result\`
  - cat /tmp/result
  - if [ $ROWS -gt 1 ] ; then exit 1 ; fi`;
    const solidContainer = document.querySelector('#solid');

    if (document.getElementById("SOLIDBox").checked){
        ReactDOM.render(solidText, solidContainer);
        console.log("SOLID: Need to fix the grep.");
    } else {
        ReactDOM.render("", solidContainer);
    }
}
