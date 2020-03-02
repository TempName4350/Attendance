# Paperless Attendance

# Team Name
Temp Name

# Group Members
Jahanvi Patel, Ashley Huynh, Zachary Comps, Christopher White, Elijah Trepper

# Paperless Attendance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4 front-end, Spring Boot backend.

# Instructions to run code
## To run full app, front-end and back-end

To run this all in full, please run the script in the `Attendance` directory: 
`./build-script.sh`
If you run into an issue with the permissions of this script, please run `sudo chmod 755 build-script.sh` in the Attendance directory and then try running the above script again.

Then navigate to: `localhost:8080` in your browser. You should see the app.

Please note: with this script, live changes on the front-end (any files in `src/main/angularclient`) will not be reflected unless you rerun this script. This is to build the front-end as static files as is in the `angularclient` folder and connect it to the spring-boot backend which is normally done by running `mvn spring-boot:run`

## Front-end development only

To run and view live changes in the front-end, do the following in a terminal window from the Attendance folder:
`cd src/main/angularclient`
`ng serve --open`

The front end server ONLY will launch on port 4200 and you can view live UI updates. You can also view it manually at `localhost:4200` once you've run the commands.

## Code scaffolding

Run `ng generate component component-name` to generate a new component (must be in `src/main/angularclient`). You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the front-end unit tests via [Karma](https://karma-runner.github.io). (must be in `src/main/angularclient`)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). (must be in `src/main/angularclient`)