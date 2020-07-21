console.log("OOPS IN JS");


class User {
    constructor (name, age, email){
        this.name = name;
        this.age =age;
        this.email = email;
        this.lucoins = 0;
        this.courses = [];
    }
    static greet(){
        console.log("Hello");
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
        
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addcoins(){
        this.lucoins++;
        console.log(`${this.lucoins}`)
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name} and email is ${this.email}`)
        return this;
    }
}

let userone = new User('manvi',20,'manavi@gmail.com');
let usertwo = new User('sumith',21,'sumh@gmail.com');


userone.login();
userone.addcoins();
userone.logout();
let users = [userone,usertwo];
users.forEach(element =>{
    console.log(element)
})


userone.login().addcoins().addcoins().getDetails().logout();

class Moderator extends User{
     constructor(name,age,email,role){
        super(name,age,email);
        this.role='role';
     }
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}
let mod = new Moderator('Manoj',24,'m@gmail.com','moderator');

mod.deleteUser(userone);
console.log(users)


class Admin extends Moderator {
    addCourse(user,course){
        user.courses.push(course);
        console.log(user)
    }


}
let admin = new Admin('Rio',25,'r@gmail.com');
User.greet();
admin.addCourse(userone,'Javscript')
admin.addCourse(userone,'Python')

