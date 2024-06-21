print("|||||||||||||||||||||||||||||||||||||||||ADD USER ROLES|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
print("Adding roles for user ", process.env.MONGO_USER);
db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_USER_PWD,
  roles: [{ role: "readWrite", db: process.env.MONGO_INITDB_DATABASE }],
});
print("|||||||||||||||||||||||||||||||||||||||||END ADD USER ROLES|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||")
