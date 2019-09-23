function user = {
  this.username:"",
  this.password:"",
  this.birthDate:"",
  this.age:0,
  this.email:"",
  this.valid:false
}

this.users = []
for (var i = 0; i < 3; i++) {
  this.users.push(user)
}

this.users[0].username = "usr1";
this.users[0].password = "pass1";
this.users[0].birthDate = "1-1-1999";
this.users[0].age = 20;
this.users[0].email = "usr1@gmail.com";
// console.log(this.users)

this.users[1].username = "usr2";
this.users[1].password = "pass2";
this.users[1].birthDate = "12-12-2001";
this.users[1].age = 17;
this.users[1].email = "usr2@yahoo.com";
// console.log(this.users)

this.users[2].username = "usr3";
this.users[2].password = "pass3";
this.users[2].birthDate = "6-6-1992";
this.users[2].age = 27;
this.users[2].email = "usr3@hotmail.com";
console.log(this.users)
