'use strict';


function ShowCleanText(){

    const cleanText = `- name: CleanCode
  image: denisura/phpmd
  commands:
# Need to grep out "Unexpected token" errors in newer versions of PHP
# Because the grep exits with error code 0, we have to generate the exit code by parsing the output
  - phpmd /drone/src text cleancode | grep -v "Unexpected token" > /tmp/result
  - ROWS=\`wc -l < /tmp/result\`
  - cat /tmp/result
  - if [ $ROWS -gt 1 ] ; then exit 1 ; fi
`;
    const CleanContainer = document.querySelector('#clean');

    if (document.getElementById("CleanBox").checked) {
        ReactDOM.render(cleanText, CleanContainer);
        console.log("Clean Code: uses the default PHPMD rules. The grep -v stuff needs to be sorted out since it stuffs the return codes.");
    } else {
        ReactDOM.render("", CleanContainer);
    }

}
