<template>
  <div class="calculator" :class="{'-science': !isSimpleMode}">
    <div class="--display">
      <div v-for="(expr, i) in prevExpressions" :key="i" class="--expression">
        {{ expr }}
      </div>
      <div class="--expression -result">
        {{ currentExpression }}
        <span v-if="isError" class="--error">
          {{ isError ? 'Error...' : '' }}
        </span>
      </div>
    </div>
    <SimpleCalculator
      v-if="isSimpleMode"
      class="--buttons"
      @answer="answer"
      @error="error"
      @switchMode="switchMode"
    />
    <ScienceCalculator
      v-else
      class="--buttons"
      @answer="answer"
      @error="error"
      @switchMode="switchMode"
    />
  </div>
</template>

<script>
import ScienceCalculator from './ScienceCalculator/ScienceCalculator'
import SimpleCalculator from './SimpleCalculator/SimpleCalculator'

export default {
  name:       'Calculator',
  components: {
    SimpleCalculator,
    ScienceCalculator,
  },
  data() {
    return {
      prevExpressions:   [],
      currentExpression: '',
      isError:           false,
      isSimpleMode:      true,
    }
  },
  methods: {
    answer(value) {
      this.prevExpressions = value[0]
      this.currentExpression = value[1]
      this.isError = false
    },
    switchMode() {
      this.isSimpleMode = !this.isSimpleMode
    },
    error() {
      this.isError = true
    },

  },
}
</script>

<style lang="scss" scoped>
.calculator {
  width: 240px;
  background: #fdfdfd;
  outline: 1px solid #eee;

  .--display {
    margin: 0 1rem;
    padding: 1rem 0;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .--expression {
    color: #666;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    width: 100%;

    &:not(:last-child) {
      border-bottom: 1px dashed #ccc;
      margin-bottom: .5rem;
      padding-bottom: .5rem;
    }

    &.-result {
      font-size: 24px;
      position: relative;
    }
  }

  .--buttons {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }

  .--error {
    color: #bf0000;
    position: absolute;
    right: 0;
    bottom: -13px;
    font-size: 14px;
    font-weight: bold;
  }

  &.-science {
    width: 420px;
  }
}
</style>
