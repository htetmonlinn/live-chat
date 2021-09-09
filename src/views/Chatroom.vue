<template>
  <div class="container"> 
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatform></NewChatform>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import NewChatform from '../components/NewChatform'
import {watch} from 'vue'
import Navbar from '../components/Navbar'
import getUsers from "../composables/getUsers"
import {useRouter} from 'vue-router'
export default {
  components: {
    ChatWindow,
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