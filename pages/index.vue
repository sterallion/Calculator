<template>
  <div class="page">
    <Calculator />
  </div>
</template>

<script>

import Calculator from '../components/Calculator'
export default {
  components: { Calculator },
}
</script>

<style>
  .page {
    display: flex;
    justify-content: center;
    margin: 100px auto 0;
  }
</style>
