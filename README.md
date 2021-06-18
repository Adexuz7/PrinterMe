
# PRINTERME 

PrinterMe is our Social Media Web created to help people to find 3D printers as a service for their projects. Also you can find 3D models to print!

# Installation

You have to install all the npm packages ```$npm install``` from your console to use it.

# Usage

Actually PrinterMe is developed to be a Back-end project, so it's not going to have a Front. By the way, you can use it installing all the npm packages and doing all the request in Postman.

## EndPoints

### Admin
|METHOD  |ENDPOINT         |TOKEN  |DESCRIPTION                         |PERMITS    |RETURNS                | 
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- |
|GET     |/users           |Yes    |ASBAT see users list                |Admin      |All the users in the platform   |
|POST    |/printers        |Yes    |ASBAT add a printer to DB           |Admin      |Confirmation of the printer added   |
|POST    |/printers/delete |Yes    |ASBAT delete a printer to DB        |Admin      |Confirmation of the printer deleted data   |

### Authentication
|METHOD  |ENDPOINT         |TOKEN  |DESCRIPTION                         |PERMITS    |RETURNS                | 
| :----: | --------------- | :---: | ---------------------------------- | :-------: | --------------------- |
|POST    |/auth/signup     |No     |USBAT sign up                       |All        |A new user account   |
|POST    |/auth/login      |No     |USBAT login                         |User, seller, admin        |Access to the platform with your account   | 
|GET     |/auth/whoami     |Yes    |USBAT check if it's logged in       |User, seller, admin        |The user data   |

### Explore
|METHOD  |ENDPOINT                              |TOKEN  |DESCRIPTION                                                   |PERMITS    |RETURNS                | 
| :----: | ------------------------------------ | :---: | ------------------------------------------------------------ | :-------: | --------------------- |
|GET     |/explore                              |No     |USBAT see random user's publications                          |All        |A list of random publications chronologically ordered   |
|GET     |/explore/search?query=word            |Yes    |USBAT search for a specific word                              |All        |A list of publications with contains the word in their value "tag"   |
|GET     |/explore/filter/materials             |Yes    |USBAT filter the timeline in printer's materials impresions   |All        |A list of seller's publications with printers can use this specific material   |
|GET     |/explore/filter/printers              |Yes    |USBAT filter the timeline in printer's models                 |All        |A list of seller's publications that works with this specific printer   |
|GET     |/explore/filter/collectables          |Yes    |USBAT filter the timeline in collectables designs             |All        |A list of seller's publication that designs have collectables purposes   |
|GET     |/explore/filter/technics              |Yes    |USBAT filter the timeline in technics designs                 |All        |A list of seller's publication that designs have technics purposes   |
|GET     |/explore/filter/publications          |Yes    |USBAT filter the timeline with only publications              |All        |Only shows publications on the timeline   |
|GET     |/explore/filter/sellers               |Yes    |USBAT filter the timeline in sellers                          |All        |Only shows sellers on the timeline   |
|GET     |/explore/filter/sellers/publications  |Yes    |USBAT filter the timeline in sellers' publications            |All        |Only shows sellers' on the timeline   |

### Publications
| METHOD | ENDPOINT | TOKEN | DESCRIPTION | PERMITS | RETURNS |
| :---: | :--- | :---: | :--- | :-------: | :--- |
| GET | /publications | Yes | USBAT see all publications | All | All publications |
| POST | /publications |Yes | USBAT post a publication |User, seller, admin | Shows the publication you posted |
| GET | /publications/:publication | Yes | USBAT see a specific publication | All | A publication |
| PUT | /publications/:publication | Yes | USBAT update a publication | User, seller, admin | Shows a confirmation message |
| DELETE | /publications/:publication | Yes | USBAT delete your publication | User, seller, admin | Shows the publication you deleted |

#### Publication comments
| METHOD | ENDPOINT                                       | TOKEN | DESCRIPTION                                  |PERMITS    | RETURNS   |
| :---:  | :---                                           | :---: | :---                                         | :-------: | :---      |
| GET    | /publications/:publication/comments            | Yes   | USBAT see all comments from a publication    |All        | Shows the publications with it's comments |
| POST   | /publications/:publication/comments            | Yes   | USBAT post a comment in a publication        |User, seller, admin        | Add a comment to the publication |
| DELETE | /publications/:publication/comments/:commentid | Yes   | USBAT delete your comment from a publication |User, seller, admin        | Delete a comment to the publication |

### Groups
|METHOD  |ENDPOINT                                     |TOKEN  |DESCRIPTION                             |PERMITS    |RETURNS                | 
| :----: | ------------------------------------------- | :---: | -------------------------------------- | :-------: | --------------------- |
|POST    |/groups                                      |Yes    |USBAT create a new group                |User, seller, admin        |A new group   |
|GET     |/groups                                      |Yes    |USBAT see all groups                    |User, seller, admin        |Shows all groups created   |
|GET     |/groups/:groupid                             |Yes    |USBAT navigate on group timeline        |User, seller, admin        |The user data   |
|DELETE  |/groups/:groupid                             |Yes    |USBAT delete the group                  |Moderator of the group    |Confirmation of the action   |
|GET     |/groups/:groupid/publications                |Yes    |USBAT see publications of the group     |User, seller, admin       |A new user account   |
|POST    |/groups/:groupid/publications                |Yes    |USBAT post a publication on the group   |Members |See the publication posted   |
|GET     |/groups/:groupid/publications/:publicationid |Yes    |USBAT see a publication on the group    |Members  |Shows the publication   |
|DELETE  |/groups/:groupid/publications/:publicationid |Yes    |USBAT delete a publication on the group |Moderator        |Delete action confirmation  |
|PUT     |/groups/:groupid/users/userid                |Yes    |USBAT join a group                      |User, seller, admin        |The group the user joined   |
|DELETE  |/groups/:groupid/users/userid                |Yes    |USBAT leaves a group                    |User, seller, admin       |Confirmation of the action   |


### Users
|METHOD  |ENDPOINT                                          |TOKEN  |DESCRIPTION                                         |PERMITS    |RETURNS                | 
| :----: | ---------------                                  | :---: | ------------------------------                     | :-------: | --------------------- |
|GET     |/users/timeline                                   |Yes    |USBAT see the user's timeline                       |User, seller, admin        |Shows publications and comments of followed users   |
|GET     |/users/:userid                                    |Yes    |USBAT see the user's profile                        |All        |Shows other user's profile   |
|POST    |/users/comments                                   |Yes    |USBAT post a comment in a publication               |User, seller, admin        |Shows the comment you did on the publication   |
|GET     |/users/:userid/gallery                            |Yes    |USBAT see the user's gallery of images              |All        |Shows other user's images posted   |
|POST    |/users/payment/:userid                            |Yes    |USBAT buy a product/service                         |User, seller, admin        |Shows the sale created   |
|PUT     |/users/payment/:saleid                            |Yes    |USBAT modify a product/service                      |Seller, admin        |Modify the sale created   |
|DELETE  |/users/payment/:saleid                            |Yes    |USBAT delete a product/service                      |Seller, admin        |Shows confirmation of deleted  |
|GET     |/history                                          |Yes    |USBAT see all the sales he made                     |User, seller, admin        |Shows a list of all the sales of their products/services  |
|PUT     |/users/:userid                                    |Yes    |USBAT follow or unfollow other user                 |User, seller, admin        |Shows the user you follow or unfollow   |
|GET      |/profile                                         |Yes    |USBAT see their own profile                         |User, seller, admin        |Shows the data of the user   |
|PUT      |/profile                                         |Yes    |USBAT change their own profile                      |User, seller, admin        |Shows Changed profile's user modified  |
|PUT      |/printers                                        |Yes    |USBAT add a printer to their profile                |User, seller, admin        |Shows the user modified with the new printer  |
|DELETE   |/printers                                        |Yes    |USBAT remove a printer to their profile             |User, seller, admin        |Shows the data of the user without the printer |
|GET      |/printers                                        |Yes    |USBAT see all printers of the database              |User, seller, admin        |Shows all the printers  |

|DELETE   |/auth/delete                                     |Yes    |USBAT delete their accout                           |User, seller, admin        |A 'deleted account' message   | 

## Sign up (POST)
```
/auth/signup
```
Example:
```json
{
    "name": "Ganondorf Dragmire",
    "username": "ganon",
    "password": "disrespect",
    "email": "ganon@hyrule.com",
    "phone": 123456789
}
```
## Login (POST)
```
/auth/login
```
```json
{
    "email": "example@example.com",
    "password": "example"
}
```
## Profile
### GET your profile
```
/profile
```

### Update your profile (PUT)
```
/profile
```
Example:
```json
{
    "phone": 123456789
}
```

## Publications

### GET all publications
```
/publications
```
### GET a specific publications
```
/publications/:publication
```
### POST a publication
```
/publications
```
Example:
```json
{
    "title": "Test publication",
    "description": "This is a test publication"
}
```
### Update a publication (PUT)
```
/publications/:publication
```
Example:
```json
{
    "title": "This is a EDITED publication",
    "description": "This publication was edited"
}
```
### DELETE a publication
```
/publications/:publication
```
## Comments
### GET all comments
```
/publications/:publication/comments
```
### POST a comment
```
/publications/:publication/comments
```
Example:
```json
{
    "description": "This is a test comment",
    "rate": 4
}
```
### DELETE a comment
```
/publications/:publication/:comment
```
# Usage

As every Social Media, you're going to have a Profile with a follow/follower system, a Timeline to be always wondered by the publications and comments of your followed users, an Explore site to watch new publications of random people and Groups, to make great communities to support you in case of any doubt you would have.

# Roadmap

We would like to implement the following ideas in the future:
* Fully functional Groups.
* Private user profiles and groups.
* A Business profile.
* An awesome and colorful Front-end

# Authors

This project was created and developed by:
- [Álvaro Poncio Jiménez](https://github.com/aponcio)
- [Andrés Galván García](https://github.com/Adexuz7)
- [Manuel Alejandro González Afonso](https://github.com/ManuYuzu)

# License

MIT License.
