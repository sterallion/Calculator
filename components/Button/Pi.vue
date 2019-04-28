<template>
  <div @click="onClick">
    π
  </div>
</template>

<script>
export default {
  name:  'Pi',
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
          return Math.PI
        },
        get() {
          return 'π'
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
