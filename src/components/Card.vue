<template>
  <el-card
      class="card-container"
      shadow="hover"
  >
    <template #header>
      <div class="card-container__header">
        <span>{{ format(value) }}</span>
      </div>
    </template>
    {{ $t(title) }}
  </el-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    value: [String, Number]
  },
  setup() {
    function format(value) {
      if (Number(value)) {
        return new Intl.NumberFormat('pt-BR').format(value)
      }
      return value
    }

    return {
      format
    }
  }
}
</script>

<style scoped>
.card-container {
  margin: 1rem 0;
}

.card-container__header {
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>