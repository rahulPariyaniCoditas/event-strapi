module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb://test:test_123@cluster0-shard-00-00.5hgv1.mongodb.net:27017,cluster0-shard-00-01.5hgv1.mongodb.net:27017,cluster0-shard-00-02.5hgv1.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-12dh21-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
