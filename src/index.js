const mongoose = require("mongoose");
const express = require("express");
const app = require("./app");
const config = require("./config/config");
const logger = require("./config/logger");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const options = require("./admin/options/admin.options");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const DEFAULT_ADMIN = {
  email: "admin@email.com",
  password: "lIAZCxhgGKmFxRF",
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

let server;
const dirname = path.resolve();

// Config AdminBro
const PORT_ADMIN = 8080;
const appExpress = express();
appExpress.enable("trust proxy");
appExpress.use(cors());
appExpress.options("*", cors());

const attachAdminJS = async () => {
  // Config AdminBro
  const admin = new AdminJS(options);

  const store = MongoStore.create({
    mongoUrl: config.mongoose.url,
    collectionName: "sessions",
    ttl: 30 * 24 * 60 * 60, // = 30 days. Default
  });

  if (config.env === "production") await admin.initialize();
  else await admin.watch();

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      store,
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: { secure: false },
      name: "adminjs",
    }
  );
  appExpress.use(admin.options.rootPath, adminRouter);

  appExpress.get("/", (req, res) => res.redirect(admin.options.rootPath));
  appExpress.use(express.static(path.join(dirname, "src/assets/")));
  appExpress.use(express.static(path.join(dirname, "images")));

  app.use(
    session({
      secret: "sessionsecret",
      resave: false,
      saveUninitialized: true,
      store,
    })
  );

  appExpress.listen(PORT_ADMIN, () => {
    logger.info(
      `AdminJS started on http://localhost:${PORT_ADMIN}${admin.options.rootPath}`
    );
  });
};

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(async () => {
    logger.info("Connected to MongoDB");

    await attachAdminJS();

    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });

    // Start services cron
    // startCrons();
  });

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
