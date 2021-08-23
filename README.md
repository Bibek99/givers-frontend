### Givers - Volunteer Management Web App

This is the frontend for the givers application. Steps for setting up the same app in your localhost :

-   Clone the repository on your local machine

-   Go into the project folder root and install the requirements
    ```sh
    npm install
    ```
-   While the dependencies get installed, create a file name '.env' in the root of the project with the contents as below:
    ```sh
    REACT_APP_BASE_URL=http://127.0.0.1:8000
    ```
    The folder structure now looks like below:
    ```sh
    givers-frontend/
    ├── node_modules
    ├── public
    ├── src
        ├── # all frontend code files
    ├── .env
        ├── # create and edit here
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── README.md
    ├── craco.config.js
    ├── package.json
    ├── tailwind.config.js
    ```
-   Start the server
    ```sh
    npm start
    ```
-   Now the app is hosted on
    ```sh
    http://localhost:3000/
    ```

#### Project Members

-   **Arpan Pokharel** (075BCT015)
-   **Chirag Lamsal** (075BCT032)
-   **Bibek Basyal** (075BCT097)
-   **Saugat Kafley** (075BCT099)
