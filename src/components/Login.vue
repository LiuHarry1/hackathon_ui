<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="userType">User Type:</label>
        <select v-model="selectedUserType" id="userType" class="form-control">
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login-Form',
  data() {
    return {
      selectedUserType: 'teacher',
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const userData = {
        userType: this.selectedUserType,
        username: this.username,
        password: this.password,
      };

      try {
        const response = await fetch('http://localhost:2020/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const data = await response.json();
          // eslint-disable-next-line no-unused-vars
          const token = data.token;
          // 导航到一个空页面或其他页面
          this.$router.push('/empty-page');
        } else {
          console.error('Login failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
