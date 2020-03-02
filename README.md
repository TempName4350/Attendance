# Paperless Attendance

# Team Name
Temp Name

# Group Members
Jahanvi Patel, Ashley Huynh, Zachary Comps, Christopher White, Elijah Trepper

# Paperless Attendance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4 front-end, Spring Boot backend.

# Instructions to run code
## Dependencies before you run
To be able to run the scripts and code listed below, please make sure you have the following installed:
* Apache Maven: https://maven.apache.org/install.html
* Node.js: https://nodejs.org/en/download/

## To run full app, front-end and back-end

To run this all in full, please run the script in the `Attendance` directory: 

`./build_script.sh`

If you run into an issue with the permissions of this script, please run `sudo chmod 755 build-script.sh` in the Attendance directory and then try running the above script again.

Then navigate to: `localhost:8080` in your browser. You should see the app and as of right now it should look something like this:
<img width="904" alt="Screen Shot 2020-03-02 at 1 31 58 PM" src="https://user-images.githubusercontent.com/60479090/75705991-75cf8d00-5c8a-11ea-846e-7bb6d83abbd8.png">

Please note: with this script, live changes on the front-end (any files in `src/main/angularclient`) will not be reflected unless you rerun this script. This is to build the front-end as static files as is in the `angularclient` folder and connect it to the spring-boot backend which is normally done by running `mvn spring-boot:run`

## Front-end development only

To run and view live changes in the front-end, do the following in a terminal window from the Attendance folder:

`./frontend-build-script.sh`

KEEP IN MIND this may take a while to produce any output after running the command. Something should come up eventually that says "0% compiling"... and increments. If it's been ~10 mins or so and this doesn't come up, terminate the script and try again.

If you run into an issue with the permissions of this script, please run `sudo chmod 755 frontend-build-script.sh` in the Attendance directory and then try running the above script again.

The front end server ONLY will launch on port 4200 and you can view live UI updates. It should launch automatically after running the script. You can also view it manually at `localhost:4200` once you've run the script if it doesn't launch. If the script for some reason is not working, please try the following commands instead:

`cd src/main/angularclient`

`ng serve --open`

## Code scaffolding

Run `ng generate component component-name` to generate a new component (must be in `src/main/angularclient`). You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the front-end unit tests via [Karma](https://karma-runner.github.io). (must be in `src/main/angularclient`)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). (must be in `src/main/angularclient`)
