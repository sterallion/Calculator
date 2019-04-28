<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Factorial',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: 'x!',
    }
  },
  methods: {
    onClick() {
      if(this.isInteger(this.lastControl.get())) {
        this.$emit('deleteLastControl')
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        v1: this.lastControl.get(),
        handler() {
          let n = this.v1
          let result = 1

          while(n) {
            result *= n--
          }

          return result
        },
        get() {
          return `${this.v1}!`
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
