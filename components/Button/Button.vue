<template>
  <div class="button" :class="[colspanClass, rowspanClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name:         'Button',
  inheritAttrs: false,
  props:        {
    colspan: {
      type:    Number,
      default: 1,
    },
    rowspan: {
      type:    Number,
      default: 1,
    },
  },
  computed: {
    colspanClass() {
      return `-colspan-${this.colspan}`
    },
    rowspanClass() {
      return `-rowspan-${this.rowspan}`
    },
  },
}
</script>

<style lang="scss" scoped>
$width: 60px;
$height: 50px;

.button {
  outline: 1px solid #eee;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  color: #7c7d82;
  line-height: $height;
  text-align: center;
  background: #fff;

  &.-colspan-1 {
    width: $width;
  }

  &.-rowspan-1 {
    height: $height;
  }

  &.-colspan-3 {
    width: $width * 3;
  }
}
</style>
