<template>
  <div @click="onClick">
    x<sup>y</sup>
  </div>
</template>

<script>
export default {
  name:  'Exponentiation',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
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
        v1: this.lastControl.get(),
        v2: '',
        set(value) {
          this.v2 = value
        },
        add(value) {
          this.v2 += value
        },
        get() {
          return `${this.v1}^${this.v2 || '?'}`
        },
        handler() {
          return this.v1 ** this.v2
        },
      })
    },
  },
}
</script>

<style scoped>
  sup {
    font-size: 60%;
  }
</style>
