
# Project's Title :
 a client-side app, that shows a grid of photos and allow the user to assign each to one or more tags.

# Project Description : 
This app displays images and allows the user to select or enter tags himself and associate them with images, he can assign one or more tags to each image.
The changes made are saved under the same user, as soon as another user logs in then the tags are deleted.
For example: I logged in with a username "Ragad@gmail.com" I tagged some pictures after I disconnected the tags are deleted and then a new user can log in and do his tags.
The tag changes when the user changes.

# Features:
- Auto-generated human-editable source code.
- Admin UI built with React-Admin.
- responsive design.
- REST API.

## The technologies I used :
- react : React JS allows complete flexibility to the developer, You can add as many external libraries and tools as required and build a massive, complicated web application. ReactJS will ensure your app performance is optimized.
- axios : A Javascript library used to make HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests and making API calls.
- react icons : A small library that helps you add icons to your React apps, It delivers the icons to the app as components so they're easier to work with.
- ReactDOM : A package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.


# How to install and run the project:
Execute the following commands in the project root folder:
* git clone [https://github.com/Ragadkayouf/Cloudinary.git]
* cd my-app
* npm install
* npm i react
* npm start

Runs the app in the development mode.
Open (http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

# How to use the project:
I assume that each user has a username and password through which he enters the site, if he accidentally entered the data incorrectly, he will not be able to enter the site. Once the user has entered the data correctly then he can use the site, and all the changes he makes are saved for him and only he can see the changes he has made.
Any changes made are saved to the same user who made the changes.
The user can create a list of tags, he can tag one or more images.
The user enters the site, enters one or more tags, the tags will appear on the screen, goes to the photo gallery, clicks on the tag icon of the selected image and clicks on the name of the tag he wants to associate the image with and so the image is added below that selected tag.

# Include tests:
- If there was login, once a user enters his data I would check if he is an existing user in the system.
- I would check the time you were using the system, in case he did not make changes, ie did not use the system, I would automatically disconnect it in order to keep the information secure.
- I would check if the changes made by a particular user, are only saved with him and once another user logs in he will not see the changes of the previous user.
