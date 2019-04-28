<template>
  <div @click="onClick">
    e
  </div>
</template>

<script>
export default {
  name:  'E',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      if(this.isOperator(this.lastControl.get())) {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        handler() {
          return Math.E
        },
        get() {
          return 'e'
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
