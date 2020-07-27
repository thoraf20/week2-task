class Users {
    constructor(name,age,height){
        this.name= name;
        this.age = age;
        this.height =height;
    }

    displayNames = () =>{
        return this.users.map(user => user.name);
    }
}