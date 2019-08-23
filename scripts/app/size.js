'use strict';


function ShowSizeText(){

    const sizeText = `- name: CodeSize (Complexity)
  image: denisura/phpmd
  commands:
# Need to grep out "Unexpected token" errors in newer versions of PHP
# Because the grep exits with error code 0, we have to generate the exit code by parsing the output
  - phpmd /drone/src text codesize | grep -v "Unexpected token" > /tmp/result
  - ROWS=\`wc -l < /tmp/result\`
  - cat /tmp/result
  - if [ $ROWS -gt 1 ] ; then exit 1 ; fi`;
    const sizeContainer = document.querySelector('#size');

    if (document.getElementById("SizeBox").checked) {
        ReactDOM.render(sizeText, sizeContainer);
    } else {
        ReactDOM.render("", sizeContainer);
    }
}
