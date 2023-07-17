import React,{useState} from 'react';
function formj(){
  
  const[user,setUser]=useState({name:"",
email:"",
password:""
})
    return (
      

   <form onSubmit={(e)=>{
    e.preventDefault();
    {console.log(user)}
   
   }} >
    <label for="name">Name</label>
     <input 
     type="text"
     name="name"
     onChange={(e) => setUser({ ...user, name: e.target.value })}
     />
     <label for="email">Email</label>
     <input 
     type="email"
     name="email"
     onChange={(e) => setUser({ ...user, email: e.target.value })}
     />
     <label for="Password">Password</label>
     <input
     type="password"
     name="password"
     onChange={(e) => setUser({ ...user, password: e.target.value })}
     />
     <button type="submit">submit</button>
     
   </form>
  
    )
}
export default formj;