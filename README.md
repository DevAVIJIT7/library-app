# Ember.js 2.3 Tutorial - Demo Application

Updated: 22 Feb 2016

This is the original repository of the Library App.
 
For detailed, step by step implementation click here: [Ember.js 2 tutorial](http://yoember.com)

Live demo: [library-app.firebaseapp.com](https://library-app.firebaseapp.com/)

## How can you run this application locally?

I assume, you have Node.js on your computer. [Node.js installation](http://yoember.com/nodejs/the-best-way-to-install-node-js/)

* Please create an app on [Firebase](http://www.firebase.com) first. You can register there with one click and create a new app. You have to setup this app name in `config/environment.js`. (This will be your own cloud based database.)
 
* Clone this repository in your project folder
```
$ git clone git@github.com:zoltan-nz/library-app.git
```
* Change to the application directory
```
$ cd library-app
```
* Install node and bower packages
```
$ npm install && bower install
```
* Setup in `config/environment.js` file your Firebase app name. This will be your own database server.
```
// config/environment.js
firebase: 'https://YOUR-FIREBASE-APP-NAME-COMES-HERE.firebaseio.com/',
```
* Launch the application with Ember server.
```
$ ember server
```
* Open the application in your browser
```
$ open http://localhost:4200
```
