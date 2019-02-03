import Express from 'express';

const app = new Express();
const port = process.env.NODE_ENV === 'production' ? 3001 : 3000;

app.use(Express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  console.log(`GET ${req.headers.host}${req.url}`);
  res.sendFile(__dirname + '/public/index.html'), err => {
    if (err) res.status(500);
  };
});

app.listen(port, () => console.log(`\nReact-boilerplate listening on port => ${port}.\n`));
