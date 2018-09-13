# Simple Angular App
A simple angular app, with a table, widget, data population, and cool css.

## Table of Contents
- [Setup Angular](#setup):
    - [Mac](#mac)
    - [Linux](#linux)
    - [Windows](#windows)
- [Routing in Angular](#routing)

<a name="setup"></a>

## Setup Angular on Mac, linux and Windows

<a name="mac"></a>

### Mac
First, install homebrew
```javascript
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
then, install Node.js
```javascript
brew install node
```
and finally install Angular
```javascript
npm install -g @angular/cli
```

<a name="linux"></a>

### Linux (Ubuntu)
First, let's download some requisites
```javascript
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
then, install Node.js
```javascript
sudo apt-get install nodejs
```
and finally install Angular
```javascript
npm install -g @angular/cli
```
for other linux version, checkout this link  
https://nodejs.org/en/download/package-manager/

<a name="windows"></a>

### Windows
Simply download the Windows Installer directly from the nodejs.org web site.  
https://nodejs.org/en/download/  

Then install the Angular CLI globally in PowerShell in admin mode.
```
npm install -g @angular/cli
```

<a name="routing"></a>

## Routing in Angular

#### Set up Angular Router
You've got to create a router.ts :
```javascript
export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
```
then in your app.html, put the router-outlet in the DOM(Document Object Model), that will be the bridge between your components/app and what is displayed
```javascript
<router-outlet></router-outlet>
```
#### Configure routes for your application
