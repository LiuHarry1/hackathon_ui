<!-- CurriculumPage.vue -->
<template>
  <div class="examples-page">
    <h1 class="examples-header">Curriculum Page</h1>
    <div class="examples-content">
      <div class="examples-search">
        <input
            type="text"
            class="search-input"
            v-model="searchQuery"
            placeholder="Search Modules"
            @input="filterModules"
        />
        <span class="search-icon">🔍</span>
      </div>
      <div class="examples-categories">
        <!-- Add category selection if needed -->
      </div>
    </div>
    <div class="examples-list">
      <div
          class="example"
          v-for="module in filteredModules"
          :key="module.id"
          @click="navigateToAssessment(module.id, module.name)"
      >
        <h2 class="example-title">{{ module.name }}</h2>
        <p class="example-description">{{ module.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      modules: [
        { id: 1, name: 'Digital Literacy', description: 'Learn the basics of digital technology.' },
        { id: 2, name: 'Game Design', description: 'Learn the basics of digital technology.' },
        { id: 3, name: 'Web design', description: 'Learn the basics of digital technology.' },
        { id: 4, name: 'Lego robotics', description: 'Learn the basics of digital technology.' },
        { id: 5, name: 'Introduction to 4IR', description: 'Learn the basics of digital technology.' },
        { id: 6, name: 'AI and Machine Learning', description: 'Learn the basics of digital technology.' },
        { id: 7, name: 'Ready for work', description: 'Learn the basics of digital technology.' },
        // Define other modules here
      ],
    };
  },
  methods: {
    navigateToAssessment(moduleId, moduleName) {
      // Programmatically navigate to the AssessmentPage with both moduleId and moduleName as query parameters
      this.$router.push({ name: 'assessment', query: { id: moduleId, name: moduleName } });
    },
  },
  computed: {
    filteredModules() {
      return this.modules.filter(module => module.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
};
</script>

<style scoped>
/* Include the provided CSS styles here */
.examples-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20% 50px 20%;
  text-align: center;
}

.examples-header {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
}

.text-title{
  margin-bottom: 10px
}

.text-tagline{
  font-size: 22px;
  font-weight: bold;
}

.examples-content {
  display: flex;
  align-items: stretch;
  margin-bottom: 30px;
  width: 100%;

}

.examples-search {
  margin-right: 3%;
  text-align: left;
  width: 74%;
}

.search-input {
  width: 96%;
  height: 40px;
  font-size: 16px;
  padding: 1px 1% 1px 1%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 10px;
  color: #999;
}
.examples-categories {
  text-align: right;
  width: 25%;
}
.examples-categories select {
  width: 100%;
  /*padding: 8px 10px;*/
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
}

.examples-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.example {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.3s;
}

.example-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.example-description {
  font-size: 16px;
}

.example-category {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}


.example:hover {
  transform: translateY(-5px); /* 根据需要调整移动的距离 */
}

.example.hovered {
  transform: translateY(-5px); /* 根据需要调整移动的距离 */
}

</style>
