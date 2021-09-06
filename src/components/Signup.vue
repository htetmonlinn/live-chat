<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName"> 
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="password" v-model="password"> <br>  
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let error=ref("");
        let signUp=async()=>{
         try{
             let response=await auth.createUserWithEmailAndPassword(email.value,password.value);
             if(!response){
                 throw new Error("could not create new user");
             }
         }catch(err){
           error.value=err.message;
           console.log(error.value);
         }
        }


        return{displayName,email,password,signUp,error}
    }

}
</script>

<style>

</style>