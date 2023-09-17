<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search modules" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  }
}
</script>
