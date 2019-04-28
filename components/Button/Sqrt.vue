<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Sqrt',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: '√',
    }
  },
  methods: {
    onClick() {
      if(this.isNumber(this.lastControl.get())) {
        this.$emit('deleteLastControl')
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        v1:    this.lastControl.get(),
        label: this.label,
        handler() {
          return Math.sqrt(this.v1)
        },
        get() {
          return `${this.label}${this.v1}`
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
