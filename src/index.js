import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import cookie_parser from "cookie-parser";

import { typeDefs, resolvers } from "./graphql";

import authCtx from "./middleware/authCtx";
import { handleRefreshToken } from "./service/auth";
import { createInitialData } from "./createInitialData";

const app = express();

app.use(
  cors()
  //   {
  //   origin: "192.168.0.160:19001",
  //   credentials: true,
  // }
);
app.use(cookie_parser());
app.post("/refresh_token", handleRefreshToken);

const db = process.env.MONGO_URI;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, auth: authCtx(req) }),
  });

  server.applyMiddleware({ app, cors: false });

  // MongoDB connection
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log(`MongoDB connected`);
    })
    .catch((err) => console.log(`MongoDB connection FAILED`, err));

  app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready`);
  });
};

startServer();

if (process.env.BOOTSTRAP_INITIAL_USER === "true") {
  createInitialData();
}
