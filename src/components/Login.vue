<template>
  <h2>Login</h2>
  <form @submit.prevent="logIn">
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="password" v-model="password"> <br> 
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        
        let email=ref("");
        let password=ref("");
        let logIn=()=>{

        }


        return{email,password,logIn}
    }

}
</script>

<style>

</style>