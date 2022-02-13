// requiring the express module and its libraries 
const express = require('express');
const bodyParser = require('body-parser');
// Making instance of express constructor or making app variable 
const app = express();
app.use(bodyParser.json());
// adding port to listen rrequest
const port = 8000



// hardcoded json data
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
//route for this data and call back function
app.get('/users', function(req,res){
// responding with response here in same file
    res.json({
         success: true,
         message: 'successfully got users. Nice!',
         users: mockUserData
    })
})




// Using Variables in URL
app.get('/users/:id',function(req,res){
    //console.log(`data for the user ${id}')
    console.log("User ID : " +req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user_ID : req.params.id,
	})
})


// Loging request on hardcoded data
app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})


// Server activation
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
  })