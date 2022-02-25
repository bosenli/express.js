//npm init -y   to create package
// npm i express   to install express in package.json
// npm i nodemon  to install nodemon in package.json restart servcer automatically as soon as the code changes
//npm start and type: localhost:3000

const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;

const app = express(); //create a new express server application

//routes
// a route is a path that user makes an HTTP request for
//such as GET

app.listen(PORT, ()=>{
    console.log(`express server listening on port ${PORT}`);
})


//routes
// a route is a path that the user makes an HTTP request for, 
//such as a GET, and a handler function that takes care of that 
// request

app.get('/', function (req, res) {
    res.send("Hello World!");
  })
  
  
  //CRUD Create Read Update Destroy 
  app.get("/ping", (req, res) => {
    res.json("pong");
  });
  
  app.get("/greet/:name", (req, res) => {
    const greeting = req.params.name
    const arr = `why hello there ${greeting}`
    res.json(arr)
  })
  
  app.get("/five", (req, res) => {
    const arr = ["1", "2", "3", "4", "5"];
    res.json(arr);
  });
  
  app.get("/evens/:n", (req, res) => {
    const even = [];
    const n = req.params.n;
    for (let i = 2; i <= n; i++){
      if (i % 2 == 0) {
        even.push(i)
      }
    }
    res.json(even);
  })
  
  
  app.get("/namelength/:name", (req, res) => {
    const name = req.params.name;
    const length = name.length;
    res.json(length)
  })
  
  
  
  
  app.get("/fruits", (req, res) => {
    res.send(fruits)
  })
  
  app.get("/fruits/:name", (req, res) => {
    const search = req.params.name;
    const found = fruits.find(fruit => fruit.name === search)
    res.json(found.imgUrl)
  })