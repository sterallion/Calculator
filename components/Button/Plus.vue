<template>
  <div @click="onClick">
    +
  </div>
</template>

<script>
export default {
  name:  'Plus',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      if(!this.isOperator(this.lastControl.get())) {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        get() {
          return '+'
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
