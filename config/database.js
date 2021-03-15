const DATABASE_NAME = "bdfch63bkvoj5yx";
const DATABASE_HOST = "bdfch63bkvoj5yx-mongodb.services.clever-cloud.com";
const DATABASE_PASSWORD = "uzqh7fhwjnrmj3xkmcsf";
const DATABASE_PORT = "27017";
const MONGODB_ADDON_URI =
  "mongodb://uzqh7fhwjnrmj3xkmcsf:sALpjEJCIoM7tbsF1mcz@bdfch63bkvoj5yx-mongodb.services.clever-cloud.com:27017/bdfch63bkvoj5yx";
const DATABASE_USERNAME = "uzqh7fhwjnrmj3xkmcsf";
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", DATABASE_HOST),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", DATABASE_PORT),
        database: env("DATABASE_NAME", DATABASE_NAME),
        username: env("DATABASE_USERNAME", DATABASE_USERNAME),
        password: env("DATABASE_PASSWORD", DATABASE_PASSWORD),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", DATABASE_NAME),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
