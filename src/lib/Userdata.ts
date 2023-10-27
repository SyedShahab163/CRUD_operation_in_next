type Userdata  = {
    id : String,
    Name : String,
    age : Number ,
    // Detial : String | Number
}
type Userinfo = {
    Email: String,
    father: String,
    mother:  String,
    sister:String

}
  
 const UserDetial: Userdata[ ] = [{Name:"shahab",id:"1",age:78}]
 const User:  Userinfo[ ] = [{Email:"syed14@gmail",father:"mehmood",mother:"Shabana",sister:"marium"}]
 
 export  const getalluser = () => UserDetial;
 export  const getuser = () => User;

export const postuser = (Userdata:Userdata) =>  UserDetial.push(Userdata) 
export const getUserByid = (Name:string)=>{
    const userDate = UserDetial.find((item)=>item.Name=== Name );
    }
    export const userUpdateById = (id :string,name:string,age:number)=>{
        const  userDetial = UserDetial.find((item)=>item.Name === name);
        if(userDetial){
            userDetial.id = id;
             userDetial.Name = name;
             userDetial.age = age;
    
        }else{
            throw new Error("User Detial is not  found")
        }
    }
    
    export const userRemoveById = (id:string) => UserDetial.filter((item)=>item.id ! == id)
