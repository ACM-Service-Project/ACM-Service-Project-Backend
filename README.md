# Family Crisis Center Web App
This is a web app built as a service project for the Food Bank in Rexburg ID called The Family Crisis Center. The Web app keeps track of Patrons visiting the Food bank and the current inventory.

## Table of Contents
- [project-name](#family-crisis-center-web-app)
    - [Table of Contents](#table-of-contents)
    - [Getting Started](#getting-started)
        - [Installation](#installation)
        - [Usage](#usage)
    - [Contributing](#contributing)
    - [Route Ideas](#route-ideas)
        - [User](#user)
        - [Patrons](#patrons)
        - [Visits](#visits)
        - [Roles](#roles)
        - [User Roles](#userrole)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation
1. Clone the Front End repository: git clone https://github.com/ACM-Service-Project/ACM-Service-Project-Frontend
2. Install dependencies: npm install
3. Clone the Front End repository: git clone https://github.com/ACM-Service-Project/ACM-Service-Project-Backend
4. Install dependencies: npm install

### Usage
1. Enter frontend folder: cd acm-service-project
1. Start the development server: npm start
3. In back end, Start development server: npm start
2. Open http://localhost:3000 to view it in the browser.

## Contributing
1. Fork the project
2. Create a new branch (git checkout -b new-feature)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin new-feature)
5. Create a new Pull Request

<!-- ## License
This project is licensed under the MIT License - see the LICENSE.md file for details. -->

## Route Ideas
 ### User
-login

-registration (create user)

-get all users

-delete your own account

-delete another account

-get user by id

-edit user

### Patrons
* Get all patrons
    - **/patrons/getAllPatrons**
    - Returns all patrons that are in the database.

* Get patron by id
    - **/patrons/getPatronById/{patronId}**
    - Given a patron id, returns that patron.

* Search for patron
    - **/patrons/searchPatrons**
    - Takes a GET request with an object with *at least* one of the following attributes:
    -       {
                lastName,
                firstName,
                phone,
                email
            }
    - Returns an array with all patrons that fit that criteria.

* Edit patron
    - **/patrons/updatePatron/{patronId}**
    - Given a patron id and a PATCH request with an object, will replace the attributes in the object. 
    - Example:
    -       {
                email: "a new email",
                lastName: "a new last name"
            }


* Delete patron
    - **/patrons/deletePatron/{patronId}**
    - Given a patron id, deletes that patron from the database.

* Create patron
    - **/patrons/addPatron**
    - Given a POST request with these attributes, creates a new patron:
    -       {
                lastName,
                middleName(optional),
                firstName,
                phone,
                email
            }


### Visits
* Get all patrons by time frame (patrons that visited within a certain time)
    - **/visits/getPatronsWithinTimeframe/{days}**
    - Given a number of days, returns an array of patronIds that have visited in those past number of days.
* Get all patron's visits within a time frame (if not time frame, returns all visits)
    - **/visits/getPatronsVisits/{patronId}/{days}**
    - Given a patronId and number of days, returns an array of visit objects that occurred in those past number of days. If not given number of days, returns all visits of that patron.
* Get last visit by patron
    - **/visits/getPatronsLastVisit/{patronId}**
    - Gets the last visit of that patron and returns it as an object.
* Get Visit By Id
    - **/visits/getVisitById/{visitId}**
    - Given a visitId, returns that visit object.
* Validate Visit
    - **/visits/validateVisit/{patronId}**
    - checks the current time against the patron's visit history and returns an object containing the last visit, the number of days since the last visit, a message, and a boolean stating if the patrons visit is valid. AKA if the patron has not visited in the last two days.
* Check in patron (adds visit document)
    - **/visits/addVisit**
    - Takes a POST request with this information and will automatically add a date stamp:
      
            {
                patronId: "the id of the patron"
                //More information could be added here in the future.
            }
* Delete patron's visits
    - **/visits/deletePatronsVisits/{patronId}**
    - given a patronId, deletes all recorded visits for that patron.

### Roles
-Get all roles

-Get role by id

-Create role

-Edit role description

-Deletes role

### UserRole
-Change a user's role

-Get users by role

