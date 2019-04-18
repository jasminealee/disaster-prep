# Disaster Prep

### JavaScript week 5 team project 4-18-19

#### By: Tristan Setha, Micaela Jawor, Jasmine Lee, Marie Dillard, and Jared Hanson

## Description
A website that allows a user write and edit lists for disaster scenarios.

## Specs
Current Functions: The user can input and delete disaster scenarios and survival list items which are then saved to an online database.

| Behavior| Input | Output|
|----------|:-----:|:------:|
| User adds scenario | "Earthquake" | Scenarios include "Earthquake" |
| User adds list item | "Drink water" | Earthquake scenario list includes "Drinking water" |
| User deletes list item | Delete item | Item deleted |
| User deletes scenario | Delete scenario | Scenario deleted |

## Setup/Installation Requirements
* Download Angular and Node Package Manger and install them.
* In the src/app folder create a file called api-keys
* Go to "https://console.firebase.google.com".
* Click "Add project".
* Enter a project name.
* Click the checkbox once you accept the terms.
* Click "Create Project".
* "Your new project is ready" will appear in the popup when your project has been created. Click "continue".
* Select "</>" in the blue panel. Copy your configuration details to the information below. This should appear with your own configuration (your own contents replacing the X's). :

```javascript
export const masterFirebaseConfig = {
  apiKey: xxxx,
  authDomain: xxxx,
  databaseURL: xxxx,
  storageBucket: xxxx,
  messagingSenderId: xxxx
};
```

* It is important that the object is exported and named "masterFirebaseConfig."
* Navigate to the root directory in Terminal.
* Type "npm install" in the command line.
* When the packages have all been installed type "npm serve" in the command line. The project should then build and open automatically in your browser.

## Known Bugs
None

## Technologies Used
* HTML
* Terminal
* Atom
* JavaScript
* TypeScript
* Angular
* CSS
* Firebase
* Jasmine
* Karma

## Support and contact details
If you have any questions or concerns please contact us at: [Jasmine Lee](https://github.com/jasminealee), [Jared Hanson](https://github.com/jaredh123), [Tristan Setha](tristansetha@gmail.com), [Michaela Jawor](michaelajawor@yahoo.com), [Marie Dillard](mariedillard@protonmail.com)
## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 Tristan Setha, Micaela Jawor, Jasmine Lee, Marie Dillard, and Jared Hanson. All Rights Reserved.

Copyright (c) 2019 [Jasmine Lee](https://github.com/jasminealee), [Jared Hanson](https://github.com/jaredh123), [Tristan Setha](tristansetha@gmail.com), [Michaela Jawor](michaelajawor@yahoo.com), [Marie Dillard](mariedillard@protonmail.com)


## Disaster Prep
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
