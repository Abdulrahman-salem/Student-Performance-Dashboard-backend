# Node.js Application Overview
This is a ```Node.js``` application designed to interact with an ```SQLite``` database.

## Installed Packages
1. ```express```: Node.js framework for building APIs.
2. ```nodemon```: Automatically refreshes the server upon saving changes.
3. ```sqlite3```: A library for connect database with node js.
4. ```dotenv```: Manages environment variables for better security.
5. ```body-parser```: Parses incoming JSON in requests.

## Features and Implementation
1. in [index.js](index.js) after initializing Express I always like to print the request info to to track request details for debugging and monitoring.
2. Routing: The application uses the Express Router to organize and separate endpoints logically. This makes the codebase ensuring cleaner and modular and easy to maintain.
3. Utility Functions: Utilities are implemented to handle reusable and modular tasks (e.g., pagination, query validation). This approach reduces code duplication and keeps the main logic clean.
4. Environment Variables: Configuration details, such as the port number, are stored in a ```.env``` file. This practice also applies to sensitive information like API keys, passwords, and database URLs.

## API Endpoints
- ```URL/data``` => Retrieves data from the StudentsPerformance table.
    - Query Parameters (optional): 
        - ```nextPage``` (number): Specifies the page number for pagination.

- ```URL/data/:studentId``` => Return all information about a specific student by their ID.
- ```URL/average/averages``` => Return averages of Math, Reading and Writing.
- ```URL/average/performanceByGender``` => Retrieves a detailed analysis of student performance categorized by gender.
- ```URL/average/impactParentsEdu``` => Returns the impact of parental education levels on student performance.
- ```URL/average/scoreDistributions``` => Return distribution of scores of Math, Reading and Writing.



