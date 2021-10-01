# IMPORTANT !
Doesn't work casue in controller, param (request) is an Objetc and not the type it is indicated.
A possible solution:
    in BuildRequest function (custom decorator), know what is the type of the object and return this type and not an Object.

Keep me in touch if you solved this :)

# Goal
Having a a simple backend conencted to a DB to store and manage article for a blog.
BUT it changed ! I wanted to implement the Vertical Slice Architecture, just for the technical challenge cause Typescript and so Javascript are crappy languages, it asked to find tricks and fire the brain to the boiling point.
Which is even more exciting ! :D

# Vertical Slice Architecture ?
Take a look at Jimmy Bogard and at MediaR. this last one is a bit more than just Vertical Slice Architecture. Have Fun !

# Commands
 - npm run start

# Technologies
 - Koa
 - Typescript