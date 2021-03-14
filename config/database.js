module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb+srv://rahulpariyani:tanmay5@cluster0.5hgv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
