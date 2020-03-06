# Paperless Attendance

# Team Name
Temp Name

# Group Members
Jahanvi Patel, Ashley Huynh, Zachary Comps, Christopher White, Elijah Trepper

# Paperless Attendance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4 front-end, Spring Boot backend.

# Instructions to run code
## To run in IntelliJ (gets all dependencies)
First and foremost -- you will need a Github account and you will need to be added as a contributor to this repo. To be added as a contributor once you have this account, reach out to Ashley and she can add you.

You will also need IntelliJ. As a student, you can get a free license (https://www.jetbrains.com/community/education/) and then install IntelliJ from there.

Once you have accomplished both above, fork this repository. Do this by clicking the "Fork" button at the top. You will be taken to your own copy of this repository under your own account.

1. Launch IntelliJ. When you get to the screen below, select "Get from Version Control":
<img width="776" alt="Screen Shot 2020-03-05 at 10 11 46 PM" src="https://user-images.githubusercontent.com/60479090/76046752-c9620500-5f2e-11ea-86ff-27da9330c999.png">

2. You will then see this screen. Under "url", paste in the URL from your Forked repository of the TempName4350/Attendance repo.
<img width="775" alt="Screen Shot 2020-03-05 at 10 12 25 PM" src="https://user-images.githubusercontent.com/60479090/76046757-ce26b900-5f2e-11ea-9bd2-473ae56a1ab9.png">

3. Then, you will see the following. Select "Yes" once ready.
<img width="782" alt="Screen Shot 2020-03-05 at 10 12 33 PM" src="https://user-images.githubusercontent.com/60479090/76046826-fb736700-5f2e-11ea-8d50-b05d455f482a.png">

<img width="777" alt="Screen Shot 2020-03-05 at 10 13 36 PM" src="https://user-images.githubusercontent.com/60479090/76046833-00d0b180-5f2f-11ea-96e4-2fce1b02de7d.png">

4. The project you imported is the full project code. To run different parts of the project, select this dropdown:
<img width="1259" alt="Screen Shot 2020-03-05 at 10 13 53 PM" src="https://user-images.githubusercontent.com/60479090/76046853-11812780-5f2f-11ea-951f-1776a4c8ae20.png">
You'll want to select Spring Boot (Maven) to run the full backend and frontend below together on `localhost:8080`. For just frontend (to see changes as you make them in the front end with no backend connection), you can select the "Angular CLI Server" option.

5. You might notice there are some popups in the bottom right corner asking you to install certain things -- these are project dependencies and are very important. Please install these pop-ups as they come. There will likely be one to install npm, one to set up your Angular framework for your project, and so on. Keep paying attention to these prompts until they disappear. They will look like the below:
<img width="1258" alt="Screen Shot 2020-03-05 at 10 14 12 PM" src="https://user-images.githubusercontent.com/60479090/76047100-c9163980-5f2f-11ea-9f55-5a66c1975541.png">

6. Once you have all dependencies, frameworks, and modules properly recognized to be able to run the frontend and backend together, the "play" button next to the dropdown in Step 4 will turn green as below:
<img width="232" alt="Screen Shot 2020-03-05 at 10 23 49 PM" src="https://user-images.githubusercontent.com/60479090/76047181-07abf400-5f30-11ea-810e-5a508c1d5240.png">

You should be good to go to work on the project at this point! Please note that this process clones this Github repo with all the needed tools set up, so you are working on your own local version of this project. Here are some instructions on how to use Github with IntelliJ: https://www.jetbrains.com/help/idea/manage-projects-hosted-on-github.html and also a tutorial on how to use Github: https://guides.github.com/activities/hello-world/.

Please note -- when you push up changes, it will create something called a "pull request". You must come into the repository and approve the pull request in order to actually see the changes update in the main repo here at https://github.com/TempName4350/Attendance. 

## Dependencies before you run
To be able to run the scripts and code listed below, please make sure you have the following installed:
* Apache Maven: https://maven.apache.org/install.html
* Node.js: https://nodejs.org/en/download/
* Once Node is installed, make sure you have the most recent version of Angular to run the front-end:
  `npm install -g @angular/cli`

## To run full app, front-end and back-end

To run this all in full, please run the script in the `Attendance` directory: 

`./build_script.sh`

If you run into an issue with the permissions of this script, please run `sudo chmod 755 build_script.sh` in the Attendance directory and then try running the above script again.

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
