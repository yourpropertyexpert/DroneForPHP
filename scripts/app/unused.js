'use strict';


function ShowUnusedText(){

    const unusedText = `- name: Unused code
  image: denisura/phpmd
  commands:
# Need to grep out "Unexpected token" errors in newer versions of PHP
# Because the grep exits with error code 0, we have to generate the exit code by parsing the output
  - phpmd /drone/src text unusedcode | grep -v "Unexpected token" > /tmp/result
  - ROWS=\`wc -l < /tmp/result\`
  - cat /tmp/result
  - if [ $ROWS -gt 1 ] ; then exit 1 ; fi`;
    const unusedContainer = document.querySelector('#unused');
    if (document.getElementById("UnusedBox").checked) {
        ReactDOM.render(unusedText, unusedContainer);
    } else {
        ReactDOM.render("", unusedContainer);
    }
}
