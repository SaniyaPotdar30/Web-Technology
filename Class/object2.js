// non-singleton obj
let user = new Object();  //singlton obj
console.log(user);

 let user2 = {}
 user2.id = 123
 user2.name = "saniya"
 user2.city = "Pune"
 user2.isLogin = true;
 console.log(user2);
 
 // object inside object
 let regUser = {
    email:"sap1223",
    user:{
        fullName:{
            firstName:"saniya",
            lastname: "potdar"
        }
    }
 }
 console.log(regUser.user.fullName.firstName);
 
