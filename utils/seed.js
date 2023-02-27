const connection = require('../config/connection');
const { Post, Comment} = require('../models');
const Thought = require('../models/Thought');
const User = require('../models/User')
const {
  getRandomName,
  getRandomComments,
  getRandomPost,
  genRandomIndex,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await Post.deleteMany({});
  await Comment.deleteMany({});

  // Empty arrays for randomly generated posts and comments
  const comments = [...getRandomComments(10)];
  const posts = [];
  const users = [
    
    new User({

      username: "CoolinMcBoolin",
      email: "mcmurtraycolin@gmail.com",
      thoughts: [],
      friends: ["McBoolin"]

    })

  ]
  const thoughts = [
    new Thought({

      thoughtText: "I have a thought!",
      userName: "McBoolin",
      reactions: []
    }), 
    new Thought({

      thoughtText: "I hate MySQL!",
      userName: "McBoolin",
      reactions: [{
        reactionID: 0,
        reactionBody: "Fuck you!",
        userName: "CoolinMcBoolin"
      },
      {
        reactionBody: "Normie :p",
        userName: "CoolinMcBoolin"
      }]
    }), 
  ]
  // Makes comments array
  const makePost = (text) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.collection.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Wait for the users array to be inserted into the DB
  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(posts);
  console.table(users);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
