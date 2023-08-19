import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";

let database_name = "personal_website";

let api = express.Router();
let commentList;

const initApi = async (app) => {
  app.set("json spaces", 2);
  app.use("/api", api);

  // Update the connection string to the MongoDB Atlas cluster
  const atlasConnectionString = "mongodb+srv://dy92634:vAwmin-weqrov-pidsa2@websitecomments.kmsvtiw.mongodb.net/?retryWrites=true&w=majority";
  let connection = await MongoClient.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  let database = connection.db(database_name);

  let collectionNames = await database.listCollections().toArray();
  console.log("Connected to MongoDB Atlas. Collections:", collectionNames.map(col => col.name));

  commentList = database.collection("comments");
};

api.use(bodyParser.json());
api.use(cors());

api.get("/", (req, res) => {
  res.json({ message: "API is up and running" });
});

api.get("/comments", async (req, res) => {
  let allComments = await commentList.find().toArray();
  let comments = [];
  for (let comment of allComments) {
    comments.push(comment);
  }
  res.json({ comments });
});

api.post("/comments", async (req, res) => {
  let displayName = req.body.name;
  let commentText = req.body.text;

  let timePosted = new Date();

  let newComment = {
    username: displayName,
    text: commentText,
    time: timePosted
  }

  await commentList.insertOne(newComment);
  
  res.json( {success: true });
});

/* Catch-all route to return a JSON error if endpoint not defined.
   Be sure to put all of your endpoints above this one, or they will not be called. */
api.all("/*", (req, res) => {
  res.status(404).json({ error: `Endpoint not found: ${req.method} ${req.url}` });
});

export default initApi;
