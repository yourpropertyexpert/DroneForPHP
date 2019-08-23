# DroneForPHP
(Web) Tool to generate drone.io configuration files for the PHP programming language

This repo contains three different things:

- /scripts/app - the app that actually builds the Drone file
- /scripts/nav - the React Scripts that give common headers footers for using the tool on a website
- everything else - enough of a web page to show how the tool works


## The website

To add a new page to a website based on the "everything else"
- copy the template.html
- once you're happy with it, add the appropriate lines to /scripts/nav/header.js


## The app

The entire app (as used by live) is just the file /scripts/app.app.js

However, app.js is just a concatenation of all the other .js files in that directory. The script deploy.sh in that directory just takes them all and overwrites app.js, so it's better to modify something else and then run it :-)
