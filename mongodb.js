//CRUD Operations

// const mongodb = require("mongodb");
//gives us access to the function to connect to the db
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

const connectionURL = "mongodb://127.0.0.1/27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    //takes in name of database
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("607c0b155dd9204370ee6606") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 25 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({ age: 25 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("users").findOne(
    //   { _id: new ObjectID("607c0b155dd9204370ee6606") },
    //   (error, document) => {
    //     console.log(document);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("607beb1052b98e23c80585a8") },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .deleteMany({
    //     age: 26,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "Clean the house",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
