import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"


let error=ref("");
let createAccount=async(email,password,displayName)=>{
    try{
        let response=await auth.createUserWithEmailAndPassword(email,password);
        if(!response){
            throw new Error("could not create new user");
        }
        response.user.updateProfile({displayName:displayName})
        return response;
    }catch(err){
      error.value=err.message;
      console.log(error.value);
    }
   
}
let useSignup=()=>{
    

    return {error,createAccount}
}
export default useSignup;