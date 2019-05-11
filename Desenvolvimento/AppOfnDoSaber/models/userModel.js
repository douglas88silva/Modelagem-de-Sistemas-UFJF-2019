

class User {
  constructor(name, email, psw) {
    this.name = name;
    this.email = email;
    this.psw = psw;
  }
  save(dbo){
    dbo.collection("users").insertOne(this, function (err, resultInsertOne) {
      if (err) throw err;
    });
  }
}

module.exports = User;