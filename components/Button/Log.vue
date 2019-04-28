<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Log',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: 'log',
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
          return Math.log10(this.v1)
        },
        get() {
          return `${this.label}(${this.v1})`
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
