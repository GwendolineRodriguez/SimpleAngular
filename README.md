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


You've got to create a app.router.ts :
```javascript
import { HomeComponent } from './home.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
        {
        path: '',
        component: HomeComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
```
then in your app.component.html, put the router-outlet in the DOM(Document Object Model), that will be the bridge between your components/app and what is displayed
```javascript
<router-outlet></router-outlet>
```


#### Configure routes for your application

For each component, you can have a route. Therefore, each time you want to add a specific component to your html page, you just define the route in the app.router.ts, then declare it in your modules, then add it to your html page. For example, if you want to add a TableComponent,  
You will modify those files like this :  
app.router.ts  
```javascript
import { HomeComponent } from './app.component';
import { TableComponent } from './table.component';

export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    },
        {
        path: 'table',
        component: TableComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
```

app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './app.component';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


app.component.html
```javascript
<router-outlet></router-outlet>
<TableComponent></TableComponent>
```