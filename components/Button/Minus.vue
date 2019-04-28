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
      const value = this.lastControl.get()

      if(!this.isMinus(value)) {
        if(
          (this.isSimpleOperator(value)) ||
          this.isOpenedBracket(value)
        ) {
          this.createNumberControl()
        } else {
          this.createOperatorControl()
        }
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
      })
    },
  },
}
</script>

<style scoped>

</style>
