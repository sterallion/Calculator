<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:  'Minus',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: '-',
    }
  },
  methods: {
    onClick() {
      if(
        this.isSimpleOperator(this.lastControl.get()) ||
        this.isOpenedBracket(this.lastControl.get())
      ) {
        this.createNumberControl()
      } else {
        this.createOperatorControl()
      }
    },
    createOperatorControl() {
      this.$emit('addControl', {
        v1: this.label,
        get() {
          return this.v1
        },
      })
    },
    createNumberControl() {
      this.$emit('addControl', {
        isRemove: true,
        v1:       this.label,
        set(value) {
          this.v1 = value
        },
        add(value) {
          this.v1 += value
        },
        get() {
          return this.v1
        },
        handler() {
          return parseFloat(this.get())
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
