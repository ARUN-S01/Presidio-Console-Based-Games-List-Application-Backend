# Game List Application Backend
#### Backend Description:
The GameList web application's backend is powered by Cloud MongoDB, providing accessibility from any location. Through the implementation of Cross-origin resource sharing (CORS), all unauthorized or improper requests are mitigated, ensuring a secure communication channel between the server and client. CORS acts as a middleware, intercepting and filtering all requests and responses between the two parties. This server follows a micro-service architecture, where all services are loosely coupled to allow for independent scaling and updating.
#### Frontend Description:
The GameList Web Application offers a variety of features to enhance the user experience. Users can easily add, delete, and move games between their favorites with ease. Additionally, this application supports trailers for each game, allowing users to conveniently watch and play while on-the-go. These functionalities are dynamically integrated into one page, eliminating the need for users to navigate to different pages. Embracing the concept of an 'All In One Page', this application provides a seamless and user-friendly experience. Additionally, it features a responsive search bar that eliminates the need for constant scrolling when conducting searches. The search bar seamlessly moves along with the user as they navigate through the application, providing a smoother and more efficient user experience. This application is backed with API Servers.

Application Link: https://arun-s01.github.io/Presidio-Console-Based-Games-List-Frontend.github.io/ 

Trial Api: https://presidio-console-based-games-list-application-backend.vercel.app/hello 

## Tech Stack
##### Language: JavaScript
##### Framework: ExpressJs (Rest API)
##### Database: MongoDB (Cloud Database)
##### (Optional) Storage: Google Drive (Sample Videos)
## Setup (Local)

1. Use the Git Desktop or Git Terminal .

```bash
git clone <repo name>
```
2. Once cloned, lets install the node modules
```bash
npm install
```
The Above command install all the packages associated

3. After installation, create your own MongoDB project and edit the connection string, 
you can create them here https://cloud.mongodb.com/ 
4. After configuration, run a node command to activate the server
```bash
node server.js
```
The above command runs the API server on Port: 3000

## Setup (Cloud)
1. Use the Git Desktop or Git Terminal .

```bash
git clone <repo name>
```
2. Once cloned, lets install the node modules
```bash
npm install
```
The Above command install all the packages associated

3. Make sure the server runs without any error. Then create a 'vercel' project with the default config or custom and import the server git to it. 'versol.json' is important make sure you configure them properly. 

4. Once completed configuration on vercel, the deployment starts, this process take 2 to 5 mins according to the network bandwidth.

5. After deployed vercel will provide you a api link for accessing the server use them to send and receive request from vercel.

## API Methods Used
##### Post - Insert Data 
##### Put - Update Data
##### Get - Retrieve Data
##### Delete - Delete Data

1. '/get' -> Returns the data available in Database
2. '/insert' -> It inserts the data from body to the Database
3. '/update' -> Updates the data with the requested filters
4. '/del' -> deletes the data with specific name or id's
