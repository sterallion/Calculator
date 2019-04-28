<template>
  <div @click="onClick">
    {{ params.label }}
  </div>
</template>

<script>
export default {
  name:         'Trigonometry',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
    params: {
      type:    Object,
      default: () => {},
    },
  },
  computed: {
    isDeg() {
      return this.params.angleType === 'deg'
    },
  },
  methods: {
    onClick() {
      console.log(this.lastControl.get())
      if(this.isNumber(this.lastControl.get())) {
        this.$emit('deleteLastControl')
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        v1:    this.lastControl.get(),
        label: this.params.label,
        isDeg: this.isDeg,
        handler() {
          return Math[this.label](this.isDeg ? (this.v1 * (Math.PI / 180)) : this.v1)
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
