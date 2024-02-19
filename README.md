<h1 align="center">🚀slashash-university-assign 🚀</h1>

<p align="center">
<h3>This is a web application that allows users to search for universities and mark them as favorites. Users can search for universities by name and country, view search results, and mark universities as favorites for later reference. Additionally, users can view their list of favorite universities.</h3>

</p>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Backend</b><br>
  <img src="https://img.shields.io/badge/nodejs-%23007ACC.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs">
  <img src="https://img.shields.io/badge/myspl-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql">
  <img src="https://img.shields.io/badge/bootstrap5-%777BB4.svg?style=for-the-badge&logo=bootstrap5&logoColor=white" alt="bootstrap5">
  
</p>

<p align="center">
  <b>Tools</b>
  <br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/NPM-%2300f.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

## Features

- Search for universities by name and country.
- View search results with details such as name, country, and web page.
- Mark universities as favorites.
- View a list of favorite universities.

## API Used

This application uses the [University Domains List API](https://github.com/Hipo/university-domains-list-api) to fetch university data.


## Technology Stack

- **Node.js:** Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and enables the development of scalable network applications.
  
- **MySQL:** MySQL is an open-source relational database management system. It is widely used for managing structured data and is known for its reliability and performance.

- **Bootstrap 5:** Bootstrap is a popular front-end framework for building responsive and mobile-first websites. Bootstrap 5 offers a wide range of pre-styled components and utilities to streamline the development process.

- **Git:** Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate efficiently and manage project versions effectively.

## Project Structure

```
project-root/
  |- config/
  |    |- db.js          // Database configuration
  |
  |- public/
  |    |- index.html     // Main HTML file
  |    |- search.html    // Search page HTML file
  |    |- favorites.html // Favorites page HTML file
  |    |- css/
  |    |    |- styles.css           // Custom CSS styles
  |    |- js/
  |    |    |- script.js            // Custom JavaScript logic
  |
  |- routes/
  |    |- universityRoutes.js       // Express routes
  |
  |- .env              // Environment variables
  |- index.js          // Entry point of the application
  |- package.json      // Project dependencies and scripts
  |- README.md         // Instructions to run the code
```


## API Endpoints

### 1. Search Universities Endpoint
- **Endpoint:** `/api/universities/search`
- **Method:** GET
- **Description:** Search for universities by name and country.
- **Request Parameters:**
  - `name` (optional): Name of the university to search for.
  - `country` (optional): Country where the university is located.
- **Response:** Returns a JSON array of universities matching the search criteria.
- **Example:** `/api/universities/search?name=middle&country=turkey`

### 2. Save Favorite University Endpoint
- **Endpoint:** `/api/universities/favorite`
- **Method:** POST
- **Description:** Save a university as a favorite.
- **Request Body:** JSON object containing details of the university to be saved as a favorite.
  - `name`: Name of the university.
  - `country`: Country where the university is located.
  - `webPage`: Web page URL of the university.
- **Response:** Returns a JSON object confirming the successful saving of the favorite university.
- **Example Request Body:**
  ```json
  {
    "name": "Middle East University",
    "country": "Jordan",
    "webPage": "http://www.meu.edu.jo/"
  }
  ```

### 3. Get Favorite Universities Endpoint
- **Endpoint:** `/api/universities/favorites`
- **Method:** GET
- **Description:** Retrieve a list of favorite universities.
- **Response:** Returns a JSON array of favorite universities saved in the database.
- **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Middle East University",
      "country": "Jordan",
      "webPage": "http://www.meu.edu.jo/",
    },
    {
      "id": 2,
      "name": "Middle East Technical University",
      "country": "Turkey",
      "webPage": "http://www.odtu.edu.tr/",
    }
  ]
  ```


<h2 align="center">Getting Started</h2>

## How to Run
1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Set up your MySQL database and configure the connection in the `.env` file.
4. Run the server using `npm start`.
5. Access the application in your web browser at `http://localhost:3000`.

<h3>This is an individual project that I developed as a solo backend developer within 2 hours.</h3>

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the slashash-university-assign project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or valuable, please consider giving it a ⭐️.

<h1 align="center">🚘 Happy Exploring! 🚘</h1>
