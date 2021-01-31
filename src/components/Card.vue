<template>
  <el-card
      class="card-container"
      shadow="hover"
  >
    <template #header>
      <div>
        <span>{{ title }}</span>
      </div>
    </template>
    {{ value }}
  </el-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    value: [String, Number]
  }
}
</script>

<style scoped>
.card-container {
  margin: 1rem 0;
}
</style>