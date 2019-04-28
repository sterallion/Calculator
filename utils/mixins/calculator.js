export default {
  data() {
    return {
      prevExpression:    [],
      currentExpression: [],
    }
  },
  computed: {
    lastControl() {
      return this.currentExpression.slice(-1)[0]
    },
  },
  methods: {
    answer() {
      try{
        const expression = this.currentExpression.reduce((memo, current) => {
          memo.push(current.handler ? current.handler(memo) : current.get())
          return memo
        }, [])

        /* eslint-disable-next-line */
        const result = parseFloat(eval(expression.join(' ')).toFixed(10)).toString()

        this.prevExpression = [...this.currentExpression]
        // this.prevExpression.push('=')

        // this.currentExpression = [result]
        this.currentExpression = [{
          isRemove: true,
          v1:       result,
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
        }]
      } catch(e) {
        this.$emit('error')
      }
    },
    expressionToString(expression) {
      return expression.map(item => item.get()).join(' ')
    },
    prevExpressionToString() {
      return this.expressionToString(this.prevExpression)
    },
    currentExpressionToString() {
      return this.expressionToString(this.currentExpression)
    },
    addControl(control) {
      this.currentExpression.push(control)
    },
    deleteLastControl() {
      this.currentExpression.pop()
    },
    clear() {
      this.currentExpression = []
    },
  },
  watch: {
    currentExpression: {
      handler(arr) {
        if(!arr.length) {
          this.prevExpression = []

          arr.push({
            isRemove: true,
            isEmpty:  true,
            v1:       '',
            set(value) {
              this.v1 = value
            },
            add(value) {
              if(this.get() !== '0' || value !== '0') {
                this.v1 += value
              }
            },
            get() {
              return this.v1 || '0'
            },
            handler() {
              return parseFloat(this.get())
            },
          })
        }

        this.$emit('answer', [
          this.prevExpressionToString(),
          this.currentExpressionToString(),
        ])
      },
      deep:      true,
      immediate: true,
    },
  },
}
