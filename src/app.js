import express from 'express';
import loadMusicians from './load';
import musicians from './routes/musicians/index';
import bodyParser from 'body-parser';

const app = express();

loadMusicians();

app.use(bodyParser.json());
app.use('/musicians', musicians);
app.use(errorHandler);

function errorHandler(err, _req, res, _next) {
  res.status(err.status).send({ errorMessage: err.message });
}

export default app;
