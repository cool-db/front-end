<template>
  <el-select v-model="current" :placeholder="'请选择'+type">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['type', 'options', 'current']
  }
</script>
