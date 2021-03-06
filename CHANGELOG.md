# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.0] - 2022-04-25

### Added
- Added EditProfile files to allow users to alter profile information
  - This works but the method of refreshing the changes has an unfixed bug that occasionally causes it to fail
- Added Message and LiveChat capabilities
- Started a Parse Server on an Amazon EC2 instance connected to a MongoDB Atlas Cluster
- Hosted the application on AWS Amplify with different domains for different branches

### Changed
- Removed some hardcoded text that described unimplemented features
- Removed some unnecessary console logs and alerts (e.g. Login success alert)

### Fixed
- Changed Protected Route buttons to proper Links

## [0.3.0] - 2022-03-30

### Added
- A new module (Auth) that includes Signup, Login, and Signout capabilities
- Signup connected with Parse Database to add Users
- Added ProtectedRoutes
- Added protected Profile page for authenticated Users

### Changed
- Protected Posting of Market and Review items unless authenticated
- Added options to NavBar and restricted visibility of options based on authentication status
  - Future changes will include the need for automatic refresh of NavBar upon User status changes

### Fixed
 
## [0.2.0] - 2022-03-16
   
### Added

- Two new modules (Home and Reviews)
- Parse Database with two classes - Market and Reviews
- Navigation to all of the pages with a navigation bar
- Services to asynchronously pull items/reviews from the database and render them on the page
- Services to take form input for items/reviews and add them to the database

### Changed
 
- Migrated from Preact to React

### Fixed
 
 
## [0.1.0] - 2022-02-23
 
### Added

- Moved from static html and css to Preact
- Just a single module for the time being (Market)
- A non-submittable form for selling items as well as some placeholder item listings

### Changed
 
- Set up the ability to sell an item and view items on the same page

### Fixed
