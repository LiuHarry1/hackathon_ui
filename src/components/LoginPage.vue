
<template>
  <div class="login-container">
    <h1 class="login-header">Login</h1>
    <div class="input-group">
      <label for="userType">User Type:</label>
      <select id="userType" v-model="userType" class="usertype-input-field">
        <option value="teacher">Teacher</option>
        <option value="facilitator">Facilitator</option>
        <option value="student">Student</option>
      </select>
    </div>
    <div class="input-group">
      <label for="username">Username:</label>
      <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          class="input-field"
      />
    </div>
    <div class="input-group">
      <label for="password">Password:</label>
      <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          class="input-field"
      />
    </div>
    <button @click="login" class="login-button">Login</button>
    <!-- Display error message -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userType: 'teacher',
      username: '',
      password: '',
      errorMessage: '', // Store error message
    };
  },
  methods: {
    async login() {
      const userData = {
        userType: this.userType,
        username: this.username,
        password: this.password,
      };

      try {
        const response = await axios.post('http://localhost:8080/api/login', userData);
        // const response = await fetch('http://localhost:8080/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(userData),
        // });

        if (response.status === 200) {
          this.$router.push('/modules');
        }
        else {
          // this.$router.push('/error');
          // Handle login error
          console.info(response.data)
          // Handle login error
          if (response.data && response.data.error) {
            this.errorMessage = response.data.error;
          } else {
            this.errorMessage = 'An error occurred during login.';
          }
        }
      } catch (error) {
        // Handle network error or other issues
        console.error('An error occurred:', error);
        this.errorMessage = 'Username or password is incorrect';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.login-header {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

.usertype-input-field{
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-field {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  width: 95%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>