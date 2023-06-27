# AngularAuth
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

# Forms built with Angular Reactive Forms
The forms in the example are built with the Reactive Forms library that comes as part of the Angular framework (in @angular/forms). It uses a model-driven approach to build, validate and handle forms in Angular.

# Shared State managed with RxJS
RxJS Subjects and Observables are used to manage shared state in the Angular application. For example the current logged in user is managed by the account service with an RxJS BehaviorSubject and exposed to the rest of the app with an RxJS Observable that any Angular component can subscribe to and be notified when the user logs in or out.

# Fake Backend API
The Angular app runs with a fake backend by default to enable it to run completely in the browser without a real backend api (backend-less).

# Styled with Bootstrap 5
The example login app is styled with the CSS from Bootstrap 5.2.3.

# About
Users can be registered in this application. if we log in with a user, we can edit the users. There are paths that are protected, so they can only be accessed after logging in, and validation also receives special attention, for example, we cannot register another user with the same username.