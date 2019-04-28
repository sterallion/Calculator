import Vue from 'vue'

Vue.mixin({
  methods: {
    isNumber(value) {
      return this.isInteger(value) || this.isFloat(value)
    },
    isInteger(value) {
      return Number.isInteger(+value)
    },
    isFloat(value) {
      return /^-?[0-9]+./.test(value)
      // .includes('.')
    },
    isSimpleOperator(value) {
      return ['+', '*', '/'].includes(value) || this.isMinus(value)
    },
    isOperator(value) {
      return this.isSimpleOperator(value) || this.isBrackets(value)
    },
    isOpenedBracket(value) {
      return value === '('
    },
    isClosedBracket(value) {
      return value === ')'
    },
    isMinus(value) {
      return value === '-'
    },
    isBrackets(value) {
      return this.isOpenedBracket(value) || this.isClosedBracket(value)
    },
    isEmpty(value) {
      return value === '0'
    },
  },
})
