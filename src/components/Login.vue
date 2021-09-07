<template>
  <h2>Login</h2>
  <form @submit.prevent="logIn">
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="password" v-model="password"> <br> 
      <div class="error" v-if="error">
          {{error}}
      </div>
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
import useLogin from "../composables/useLogin"

export default {
    setup(){
        
        let email=ref("");
        let password=ref("");
        
        let {error,signIn}=useLogin();
        let logIn=async()=>{
         let res=await signIn(email.value,password.value);
         if(res){
             console.log(res.user);
         }
        }


        return{email,password,logIn,error}
    }

}
</script>

<style>

</style>