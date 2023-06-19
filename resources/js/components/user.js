import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from "axios";

export default function users(){
    const router = useRouter()
    const user = ref([])
    const totalUsers = ref([])
    const role = ref([])

    const login = async(form) =>{
        await axios.post('/api/login', form)
            .then(response => {
                if(response.data.success){
                    localStorage.setItem('data', response.data.data)
                    router.push('/home')
                }else{
                    alert(response.data.message)
                }
        })
    }

    const register = async (form) => {
        await axios.post('/api/users', form)
            .then(response => {
                if (response.data.success) {
                    router.push('/')
                } else {
                    const { message } = response.data
                    const field = Object.keys(message)[0]
                    alert(message[field])
                }
            })
    }

    const update = async(id,form) =>{
        await axios.put('/api/users/'+ id, form)
            .then(response => {
                if(response.data.success){
                    router.push('/home')
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
            })
    }

    const userData = async() =>{
        await axios.get('/api/user-profile')
            .then(response => {
                if(response.data.success){
                    user.value = response.data.data
                    role.value = response.data.data.role
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }

    const logout = () => {
        localStorage.removeItem('data')
        router.push('/')
    
    }

    const deleteUserAdmin = async (id) => {
        if(!window.confirm("Estas seguro de eliminar el usuario?")){
            return;
        }
        await axios.delete('/api/users/' + id)
            .then(response => {
                if (response.data.success) {
                    router.push('/admin')
                } else {
                    alert(response.data.message);
                }
            })
    }

    const deleteUser = async (id) => {
        if(!window.confirm("Estas seguro de eliminar tu usuario?")){
            return;
        }
        await axios.delete('/api/users/' + id)
            .then(response => {
                if (response.data.success) {
                    localStorage.removeItem('data')
                    router.push('/')
                } else {
                    alert(response.data.message);
                }
            })
    }

    const allUsers = async () => {
        await axios.get('/api/users')
          .then(response => {
            totalUsers.value = response.data.data;
          });
    }

    const userDataById = async (id) => {
        await axios.get('/api/users/' + id)
          .then(response => {
            user.value = response.data.data;
          });
    }

    return{
        login,
        register,
        userData,
        update,
        user,
        logout,
        deleteUser,
        allUsers,
        totalUsers,
        deleteUserAdmin,
        userDataById,
        role
    }

}