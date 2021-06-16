
# PRINTERME 

PrinterMe is our Social Media Web created to help people to find 3D printers as a service for their projects. Also you can find 3D models to print!

# Installation

You have to install all the npm packages ```$npm install``` from your console to use it.

# Usage

Actually PrinterMe is developed to be a Back-end project, so it's not going to have a Front. By the way, you can use it installing all the npm packages and doing all the request in Postman.

## EndPoints

|   METHOD    |     ENDPOINT    |    TOKEN    |       DESCRIPTION       |    RETURNS    | 
|-------------|-----------------|-------------|-------------------------|---------------| 
|     GET     |      /auth      |      No     |      USBAT sign up      |A new user account| 


```
baseUrl = http://localhost:3000/api
```
## Sign up
POST
```
{{baseUrl}}/auth/signup
```
Example:
```
{
    "name": "Ganondorf Dragmire",
    "username": "ganon",
    "password": "disrespect",
    "email": "ganon@hyrule.com",
    "phone": 123456789
}
```
## Login
```
{{baseUrl}}/auth/login
```
```
{
    "email": "example@example.com",
    "password": "example"
}
```
## Profile
### Get your profile
GET
```
{{baseUrl}}/profile
```

### Edit profile
Edit your user profile with PATCH
```
{{baseUrl}}/profile
```
Example:
```
{
    "phone": 123456789
}
```

## Publications

### Get all publications
GET
```
{{baseUrl}}/publications
```
### Post a publication
Yo need to be logged in to make a new publication
POST
```
{{baseUrl}}/publications
```
Example:
```
{
    "title": "Test publication",
    "description": "This is a test publication"
}
```
## Comments
### Get all comments
GET
```
{{baseUrl}}/publications/{{publicationId}}/comment
```
### Add comment
POST
```
{{baseUrl}}/publications/{{publicationId}}/comment
```
Example:
```
{
    "description": "This is a test comment",
    "rate": 4
}
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
