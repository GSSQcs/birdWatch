import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import ebirdRouter from './routes/ebirdRouter';
// import path from 'path';

// Env configs - why do we need to do this in every file?
import dotenv from 'dotenv';
dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// // CORS
// const cors = require('cors'); 
// app.use(cors({ origin: 'link', methods: ["POST", "GET"], credentials: true }));

// Serve static assets
// app.use('/', express.static(path.join(__dirname, '/index.html')));


// Parsers
app.use(cookieParser()); // Parse cookies
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api/ebird', ebirdRouter);

//global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr = {
    //detailed message to dev
    log:
      `Express error handler caught unknown middleware error. Error: ${err}`,
    status: 400,
    //basic message to user
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  //send error message to frontend
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});