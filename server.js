import express from 'express';

// app 1
let app = express();
app.use(
  express.static('./static', {
    setHeaders: (res, path) => {
      res.setHeader('vary', '*');
    },
  })
);

// app 2, for cross origin
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
