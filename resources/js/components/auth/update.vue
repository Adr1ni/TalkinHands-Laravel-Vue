<script setup>

import {reactive , ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";

const router = useRouter()

let form = reactive({
    name:'',
    username:'',
    email:'',
    password:'',
    c_password:''
})

let error = ref('')
let id = ref()

onMounted(async() => {
    userData()
})


const userData = async() =>{
    await axios.get('/api/user-profile')
        .then(response => {
            if(response.data.success){
                id.value = response.data.data._id
            }else{
                error.value = response.data.message;
            }
        })
}

const update = async() =>{
    await axios.put('/api/users/'+ id.value, form)
        .then(response => {
            if(response.data.success){
                router.push('/home')
            }else{
                error.value = response.data.message;
            }
        })
}

</script>

