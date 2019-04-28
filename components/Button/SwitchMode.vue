<template>
  <div @click="onClick">
    <img src="/switch.svg">
  </div>
</template>

<script>
export default {
  name:         'SwitchMode',
  inheritAttrs: false,
  methods:      {
    onClick() {
      this.$emit('switchMode')
    },
  },
}
</script>

<style scoped>

</style>
