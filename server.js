var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article One",
    heading: "Heading of Article one",
    content: `
        <p> This is article one content </p>
    `
};

var createTemplate = function(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var template = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
            </head>
            
            <body>
                <h1> ${heading} </h1>
                
                ${content}
            </body>
        </html>
    `;
    
    
    return template;
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
//   res.send("Article one"); 
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
  res.send("Article two"); 
});

app.get('/article-three', function(req, res) {
  res.send("Article three"); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
