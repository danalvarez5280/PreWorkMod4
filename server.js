const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};
app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

//get some json from a js file
app.get('/json', (request, response) => {
  response.status(200).sendFile('/Users/BendersShadow/MOD4/Prework/ExpressIntro/public/someJson.js');;
});

//get request for a client side button push
app.get('/api/v1/dan', (request, response) => {
  response.status(200).json({'name': 'Dan'})
});

//futher challenge 2 displays a sunset page.

app.get('/sunsets', (request, response) => {
  response.status(200).sendFile('/Users/BendersShadow/MOD4/Prework/ExpressIntro/public/assets/Sunset.jpg');
});
app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});
