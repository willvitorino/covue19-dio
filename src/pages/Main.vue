<template>
  <el-container>
    <el-header class="header" >
      <el-row
          type="flex"
          justify="space-around"
      >
         Covid-19 - {{ state.country }}
      </el-row>
    </el-header>
    <el-main>
      <el-row
          type="flex"
          justify="space-around"
          :gutter="10"
      >
        <el-col
            v-for="(key, keyIndex) in Object.keys(state.info)"
            :key="keyIndex"
            :xs="10"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="2"
        >
          <Card
              :title="key"
              :value="state.info[key]"
          />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { onMounted, reactive, defineAsyncComponent } from 'vue'
import { getInfos } from '@/commons/api'

const Card = defineAsyncComponent(() => import('@/components/Card'))

export default {
  components: { Card },
  setup() {
    const state = reactive({
      info: {},
      country: 'brazil',
      countriesList: [
          'brazil',
          'china',
          'germany',
          'usa'
      ]
    })

    function handleCountrySearch(country) {
      getInfos(country).then(res => {
        state.info = res
      })
    }

    onMounted(() => {
      handleCountrySearch(state.country)
    })

    return {
      state
    }
  }
}
</script>

<style lang="css" scoped>

.header {
  /*#a8e2f8, #083248*/
  background-image: linear-gradient(to bottom, #083248, transparent);
  color: darkcyan;
  font-weight: bold;
  font-size: xxx-large;
}
</style>
