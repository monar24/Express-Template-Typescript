import express, {
    Application,
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler
  } from "express";
  import createHttpError from "http-errors";
  import routes from "./routes/MainRouter";
  var bodyParser = require('body-parser')
  require('dotenv').config();
  
  
  if (!process.env.PORT) {
    process.exit(1);
  }
  
  const PORT: number = parseInt(process.env.PORT as string, 10);
  const app: Application = express();

  // parse application
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  
  app.use("/", routes);
  
  app.use(express.json());
  
  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound());
  });
  
  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      status: err.status || 500,
      message: err.message,
    });
  };
  
  app.use(errorHandler);
  
  app.listen(PORT, (): void => {
    console.log(`Server Running on port: ${PORT}`);
  });