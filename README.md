# User-Managment-Portal1

## DATABASE
       MongoDB
## BACKEND FRAMEWORK
       Node.js and Express          Frontend : EJS

# REST API
  
 ## 1. Get list of Users
       # Request :  GET /users
         It will render all the users and show the list on screen.
         
 ## 2. Add a New User
       # Request :  POST /users
         To add a New user first a GET /users/new request is executed and then you will get 
         a form to fill the details of a user and after submiting the form a POST request is 
         sent and the user will be added. 
         
 ## 3. Get a specific User
       # Request : GET /users/:id
       To show all the Available Details of a specific user GET /users/id request is executed 
       and it will render all the available details from database and show them on screen.
       ( I used findById() method to find a user from database using id )
 
 ## 4. Delete a specific User 
       # Request : DELETE /users/:id
 
 ## 5. Update/Edit the details of a user
       # Request : PUT /users/:id
 
 # Dependencies
