'use strict';

function BuildDroneFile(){

    ShowDroneTop();
    ShowPSRText();
    ShowMNDText();
    ShowCleanText();
    ShowSizeText();
    ShowUnusedText();
    ShowSolidText();
    ShowCPDText();
}
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
'use strict';


function ShowCPDText(){

    const cpdText = `- name: Copy paste detection
  image: rvannauker/phpcpd
  commands:
  - phpcpd /drone/src`;
    const cpdContainer = document.querySelector('#cpd');

    if (document.getElementById("CPDBox").checked){
        ReactDOM.render(cpdText, cpdContainer);
        console.log("CPD: Very straightforward docker image with sensible defaults.");
    } else {
        ReactDOM.render("", cpdContainer);
    }
}
'use strict';

function ShowDroneTop(){

    const droneTopText = `kind: pipeline
name: DroneForPHP
steps:`;
    const droneNoText = "No options selected. No drone file needed.";
    const droneTopContainer = document.querySelector('#dronetop');
    if (
        document.getElementById("PSRBox").checked ||
        document.getElementById("MNDBox").checked ||
        document.getElementById("CleanBox").checked ||
        document.getElementById("SizeBox").checked ||
        document.getElementById("UnusedBox").checked ||
        document.getElementById("SOLIDBox").checked ||
        document.getElementById("CPDBox").checked
    ) {
    ReactDOM.render(droneTopText, droneTopContainer);
    } else {
    ReactDOM.render(droneNoText, droneTopContainer);
    }
}
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
'use strict';


function ShowPSRText(){

    const psrText = `- name: PSR2
  image:  herloct/phpcs
  commands:
  - phpcs --standard=PSR1,PSR2 /drone/src`;
    const psrContainer = document.querySelector('#psr');

    if (document.getElementById("PSRBox").checked){
        ReactDOM.render(psrText, psrContainer);
        console.log("PSR2: ...The PHPCS template for PSR2 only does the additional checks for PSR2 over PSR1, hence we need the PSR1 template as well.");
    } else {
        ReactDOM.render("", psrContainer);
    }
}
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
        console.log("Codesize: Grep -v stuff on code size needs fixing");
    } else {
        ReactDOM.render("", sizeContainer);
    }
}
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
        console.log("Unused: Need to fix the grep.");
    } else {
        ReactDOM.render("", unusedContainer);
    }
}
