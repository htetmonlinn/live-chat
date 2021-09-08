<template>
  <div class="container"> 
    <Navbar></Navbar>
    <NewChatform></NewChatform>
  </div>
</template>

<script>
import NewChatform from '../components/NewChatform'
import {watch} from 'vue'
import Navbar from '../components/Navbar'
import getUsers from "../composables/getUsers"
import {useRouter} from 'vue-router'
export default {
  components: {
    NewChatform, Navbar },
  setup(){
    let {user}=getUsers();
    let router=useRouter();
    watch(user,()=>{
      if(!user.value){
        router.push("/");

      }
    })
  }

}
</script>

<style>

</style>