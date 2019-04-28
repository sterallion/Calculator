<template>
  <div @click="onClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name:         'Percent',
  inheritAttrs: false,
  props:        {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  data() {
    return {
      label: '%',
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
        handler(chunks) {
          let operand = +chunks.slice(-2)[0]
          let operator = chunks.slice(-1)[0]

          if(!operand) {
            operand = 1
            operator = '-'
          }

          switch(operator) {
            case '+':
            case '-':
              return operand * this.v1 / 100
            case '*':
            case '/':
              return this.v1 / 100
          }
        },
        get() {
          return `${this.v1}${this.label}`
        },
      })
    },
  },
}
</script>

<style scoped>

</style>
