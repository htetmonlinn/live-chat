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
export default {
    setup(){
        let displayName=ref("");
        let email=ref("");
        let password=ref("");
        let signUp=()=>{

        }


        return{displayName,email,password,signUp}
    }

}
</script>

<style>

</style>