<template>
  <div class="clear" @click="onClick">
    C
  </div>
</template>

<script>
export default {
  name:         'Clear',
  inheritAttrs: false,
  methods:      {
    onClick() {
      this.$emit('clear')
    },
  },
}
</script>

<style scoped>
.clear {
  color: #fb7730;
}
</style>
