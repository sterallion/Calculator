<template>
  <div class="ans" @click="onClick">
    =
  </div>
</template>

<script>
export default {
  name:    'Ans',
  methods: {
    onClick() {
      this.$emit('answer')
    },
  },
}
</script>

<style lang="scss" scoped>
.ans {
  background: #fb7730;
  color: #fff;
  font-size: 30px;
}
</style>
