# METAL-CASE-STUDY

## Brief Description

METAL-CASE-STUDY is a React application built using a TypeScript template. This project utilizes Material-UI (MUI) for the UI components, Redux Toolkit for state management, and `json-server` to simulate a backend server for API requests. The application provides a user-friendly interface to interact with the data fetched from the mock server.

## Installation and Setup Instructions

- To get started with the project, clone the repository from GitHub by running `git clone https://github.com/zainarshad45122/metal-case-study` and navigate to the project directory using `cd METAL-CASE-STUDY`. 

- Install all necessary dependencies using Yarn by running `yarn install`. 

- The application uses `json-server` to provide a mock backend server that serves API endpoints. 

- To run the server, use the command `node server.js`. By default, the server will run on `http://localhost:3000`.

- To start the React application, run `yarn start`. 

- The React development server will run by default on `http://localhost:3001` (or a different port if `3000` is occupied). To run unit tests for the application, use the command `yarn test`, which will execute the tests in watch mode.

- Make Sure baseQuery file has the right link for which port you run the json-server on. 

## Decisions and Assumptions

- **UI Framework**: Material-UI (MUI) was chosen because of its extensive library of customizable and ready-to-use components, aligning with modern design standards.
- **State Management**: Redux Toolkit was selected for global state management due to its simplicity, scalability, and integration with TypeScript.
- **Backend Mocking**: `json-server` was used to mock the backend API. This allows the development focus to remain on the frontend application while simulating a realistic data-fetching experience.

## Challenges Faced and Solutions

- **CORS Issues**: While setting up the API server, CORS issues initially prevented the client from making API requests. This was resolved by including the `cors` package in the server configuration.
- **Component Reusability**: One challenge was creating reusable components. This was addressed by organizing common components under `src/components/common`, ensuring that they are generic and can be reused across different parts of the application.
- **State Management Complexity**: Managing complex state with Redux can be overwhelming. This was simplified using Redux Toolkit's Query  utilities, which streamlined the state management setup and maintained code cleanliness.

## Project Structure

The project is structured to ensure modularity and separation of concerns:

- **src**: Contains the main source code for the application.
  - **assets**: Static files such as images and icons.
  - **components/common**: Reusable UI components like `AppBar`, `DataTable`, `SideBar`, etc.
  - **hooks**: Custom React hooks.
  - **redux**: Contains Redux slices and store configuration.
  - **services**: API service calls and utility functions.
  - **theme**: Custom Material-UI theme configurations.
  - **types**: TypeScript types and interfaces.
  - **utility**: Helper functions and utility files.
- **public**: Contains the `index.html` and other static assets.
- **server.js**: Entry point for running the mock JSON server.
- **package.json**: Lists all the dependencies and scripts for the project.
- **.env**: Environment variables for configuration.

## Key Dependencies

- `react` and `typescript` are used as the core libraries for building the application.
- `@mui/material` and `@mui/icons-material` are used for UI components and theming.
- `@reduxjs/toolkit` and `react-redux` are used for state management.
- `react-dnd` and `react-dnd-html5-backend` are used for drag-and-drop functionality.
- `json-server` is used to mock a backend API.
- `@testing-library/react`, `@testing-library/jest-dom`, and other testing libraries are used for unit testing.

For a complete list of dependencies, refer to the `package.json` file.

## How to Contribute

To contribute to this project, fork the repository and create a new branch using `git checkout -b feature/your-feature`. Commit your changes with `git commit -m 'Add some feature'` and push to the branch using `git push origin feature/your-feature`. Finally, open a pull request to merge your changes.

## Contact

For any questions or suggestions, please feel free to contact us at zainarhad45122@gmail.com.
