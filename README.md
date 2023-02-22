# Link Shortener

A link shortener application built with TypeScript, Node.js, Express, React, Material UI and MongoDB. This application can be used to shorten long URLs into shorter and more manageable links. It uses MongoDB as the database for storing link information.


## Demo
![Demo](https://github.com/AlmazXX/Link-shortener/blob/master/demo/Shortener.gif)

## Features

* Shorten a long URL into a shorter and more manageable link
* Redirects to the original link when the shortened link is visited
* Stores link information in a MongoDB database
* Displays a list of all the shortened links with their corresponding original links
* Click counter for each shortened link


## Getting started

To get started with this project, clone the repository to your local machine:

1. Clone the repository:

```bash
  git clone https://github.com/AlmazXX/Link-shortener.git
  cd Chat
```

### Prerequisites

You will need to have the following software installed:

* Node.js (v12 or higher)
* npm (v6 or higher)
* MongoDB

### Installting

To install the dependencies, run the following command:

2. Navigate to the server directory and install the dependencies:

```bash
  cd api
  npm install
```

3. Open config.ts and edit the config.db with your database credentials.

4. Start the server:

```bash
  npm run dev
```

5. Navigate to the client directory and install the dependencies:

```bash
  cd ../frontend
  npm install
```

6. Start the client:

```bash
  npm start
```

This will start the application and open it in your default web browser at http://localhost:3000.
    
## Usage

1. Enter the long URL that you want to shorten and click on the Shorten button
2. A new link will be generated that you can copy
3. Visit the shortened link to be redirected to the original link


## Tech Stack

**Client:** React, Redux, Material-UI

**Server:** Node, Express, MongoDB