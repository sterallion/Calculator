<template>
  <div @click="onClick">
    +
  </div>
</template>

<script>
export default {
  name:  'Plus',
  props: {
    lastControl: {
      type:     Object,
      required: true,
    },
  },
  methods: {
    onClick() {
      if(!this.isSimpleOperator(this.lastControl.get()) && !this.isOpenedBracket(this.lastControl.get())) {
        this.createControl()
      }
    },
    createControl() {
      this.$emit('addControl', {
        get() {
          return '+'
        },
      })
    },
  },
}
</script>
//log(100) * ( -10 / 2 )
<style scoped>

</style>
