// requiring the express module and its libraries 
const express = require('express');
// Making instance of express constructor 
const app = express();
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



// Server activation
app.listen(port, function(){
    console.log(`server is running on port ${port}`)
  })