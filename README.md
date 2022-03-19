# User-Managment-Portal1

## DATABASE
       MongoDB
## BACKEND FRAMEWORK
       Node.js and Express          Frontend : EJS
       
## DEPENDENCIES
    Mongoose : required to connect to the mongoDB database and perform different operations.
    dotenv   : This allow us to declare a variable in .env file and use that variable from
                any other file in the project. (to access the variable we use : process.env.variable)
    ejs-mate : This allow us to create a layout of reusable code to reduce duplicating code.


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
       
        when a POST /users/id/?_method=DELETE  request is sent , server find the user and delete
        user details from database.
        
        ( I used findByIdAndDelete() method to find the user from database and delete it )
       
 
 ## 5. Update/Edit the details of a user
       # Request : PUT /users/:id
       
       To Update the Details of a user a GET /users/id/edit request is sent it will redirect to a 
       form where you can enter your new details and then a POST users/id?_method=PUT request is sent ,
       which will update the details of the user in database.
 
 # Dependencies
