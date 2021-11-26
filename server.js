import express from 'express';

// app 1, normal behavior
let app = express();
app.use(express.static('./static'));

// app 2, add cors header and 'vary: *'
let crossOriginApp = express();
crossOriginApp.use(
  express.static('./static', {
    setHeaders: (res, path) => {
      res.setHeader('access-control-allow-origin', '*');
      res.setHeader('vary', '*');
    },
  })
);

app.listen(8000);
crossOriginApp.listen(8001);
