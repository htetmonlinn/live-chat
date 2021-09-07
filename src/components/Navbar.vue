<template>
  <nav>
      <div>
          <p>Hi username</p>
          <p class="email">Login as email</p>
      </div>
      <button @click="logOut">Log Out</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
export default {
    setup(){
        let error=ref(null);
        let logOut=async()=>{
           try{
               let res=await auth.signOut();
           console.log("user loggout");
           }catch(err){
               error.value=err.message;
             console.log(error.value);
           }
        }
        return {logOut};
    }

}
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email{
    font-size: 14px;
    color: #999;
}
</style>