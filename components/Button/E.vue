<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'E',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: 'e',
    }
  },
  methods: {
    onClick() {
      const value = this.lastControl.get()
      const isEmpty = this.isEmpty(value)

      if(isEmpty || this.isOperator(value)) {
        isEmpty && this.$emit('deleteLastControl')
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        label: this.label,
        get() {
          return this.label
        },
        handler() {
          return Math.E
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
