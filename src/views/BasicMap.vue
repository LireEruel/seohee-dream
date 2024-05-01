<script setup lang="ts">
import { CodeBox } from '@/components'
import { BasicMap, BasicMapCodeTS, BasicMapCodeJS } from '@/examples'

const tsCode = BasicMapCodeTS as string
const jsCode = BasicMapCodeJS as string
</script>

<template>
  <div class="content">
    <h1>지도 생성하기</h1>
    <hr />
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <BasicMap width="100%" />
      </template>
    </CodeBox>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  padding: 3rem;
}
</style>
