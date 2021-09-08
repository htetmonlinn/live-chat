import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"

let user=ref(auth.currentUser);
auth.onAuthStateChanged((_user)=>{
    // console.log("user state changed. current user is",_user);
    user.value=_user;
})
let getUsers=()=>{

    return {user};
}
export default getUsers;