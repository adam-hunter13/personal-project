const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../home.html'));
});

app.get('/css',function(req,res) {
    res.sendFile(path.join(__dirname, '../styles.css'));
});

app.get('/js',function(req,res) {
    res.sendFile(path.join(__dirname, '../script.js'));
});

const port = process.env.PORT || 4567

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})