<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Pi',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: 'π',
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
        handler() {
          return Math.PI
        },
        get() {
          return this.label
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
