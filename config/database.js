module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb://uzqh7fhwjnrmj3xkmcsf:sALpjEJCIoM7tbsF1mcz@bdfch63bkvoj5yx-mongodb.services.clever-cloud.com:27017/bdfch63bkvoj5yx",
      },
      options: {
        ssl: true,
      },
    },
  },
});
