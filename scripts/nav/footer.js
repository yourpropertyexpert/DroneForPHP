'use strict';

function ShowFooters(){

    const CopyrightText = "Copyright 2019 Mark Harrison.";
    const WarrantyText = "No Warranty: Use this tool at your own risk.";
    const CookiesText = "Cookies: We don't use them. So you don't have to accept them.";
    const PrivacyText = "Privacy Policy: We don't capture any information, we don't store any information. Given we don't have it, we can't use it or sell it.";

    const footer1 = React.createElement("p", "", CopyrightText);
    const footer2 = React.createElement("p", "", WarrantyText);
    const footer3 = React.createElement("p", "", CookiesText);
    const footer4 = React.createElement("p", "", PrivacyText);

    const footerContainer = document.querySelector('#footer');
    const footer = React.createElement(`div`, {className:"row"},
      React.createElement("div", {className:"col-sm-3"}, footer1),
      React.createElement("div", {className:"col-sm-3"}, footer2),
      React.createElement("div", {className:"col-sm-3"}, footer3),
      React.createElement("div", {className:"col-sm-3"}, footer4)
    );

    ReactDOM.render(footer, footerContainer);
}
