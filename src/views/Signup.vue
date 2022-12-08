<template>
    <h1>Registration Form</h1>
    <form @submit.prevent="onSubmit">
        <label>First Name:</label>
        <input type="text" required v-model="user.firstname" />

        <label>Last Name:</label>
        <input type="text" required v-model="user.lastname" />

        <label>Email:</label>
        <input type="email" required v-model="user.email" />
        <!-- <p color="red">{{ errorMessage }}</p> -->

        <label>username:</label>
        <input type="text" required v-model="user.username" />

        <label for="password">Password:</label>
        <input type="password" required id="password" v-model="user.password" />

        <label>Role:</label>
        <select required placeholder="Please Select your Role" v-model="user.role">
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    <p>Already have an account? <router-link :to="{ name: 'login' }">Login</router-link></p>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios';

export default {
    setup() {
        const user = ref({
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            role: ''
        });
        async function postAxios(url, data) {
            try {
                const response = await axios.post(url, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        }
        async function onSubmit() {
            try {
                const response = await postAxios('http://localhost:8080/registration', this.user);
                console.log(response);
            } catch (error) {
                console.log(error);
                console.log("connection not successful");
            }
        }
        function validateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.errorMessage = ''
            } else {
                this.errorMessage = 'Invalid Email'
            }
        }

        return { user, postAxios, onSubmit, validateEmail }
    },
}
</script>
<style>
body {
    text-align: center;
}

form {
    min-width: 300px;
    max-width: 500px;
    margin: 10px auto;
    margin-bottom: 1px;
    background: white;
    text-align: left;
    padding: 40px;
    padding-bottom: 10px;
    border-radius: 10px;

}

label {
    color: #aaa;
    display: inline-block;
    margin: 20px 0 5px;
    margin-bottom: 10px;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

button {
    display: block;
    width: 60%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 1px;
    padding: 10px 6px;
    box-sizing: border-box;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}

a {
    cursor: pointer;
}

h1 {

    border-top: 0%;
}
</style>