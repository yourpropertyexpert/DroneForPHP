'use strict';

function ShowHeader(){

    const titleText = "DroneForPHP";
    const subtitleText = "A simple tool to generate drone.io files for PHP projects";

    const navBarText = "BIBBLE";
    const HomeLink = React.createElement ("a", {className: "nav-link", href: 'index.html'}, "Generate your config");
    const AboutLink = React.createElement ("a", {className: "nav-link", href: 'about.html'}, "About us");
    const TestsLink = React.createElement ("a", {className: "nav-link", href: 'tests.html'}, "The tests");


    const HomeItem = React.createElement("li", {className: "nav-item"}, HomeLink);
    const AboutItem = React.createElement("li", {className: "nav-item"}, AboutLink);
    const TestsItem = React.createElement("li", {className: "nav-item"}, TestsLink);

    const navMenu = React.createElement("ul", {className: "navbar-nav"}, HomeItem, AboutItem, TestsItem);
    const navBar = React.createElement("nav", {className: "navbar navbar-expand-sm navbar-light"}, navMenu);

    const headerContainer = document.querySelector('#header');
    const header = React.createElement(`div`, {className:"bg-light"},
      React.createElement("h1", "", titleText),
      React.createElement("p", "", subtitleText),
      navBar
    );

    ReactDOM.render(header, headerContainer);

}
