export default {
  data() {
    return {
      prevExpressions:   [],
      currentExpression: [],
      maxHistoryLength:  5,
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
        if(
          this.currentExpression.length === 1 &&
          this.isNumber(this.currentExpression[0].get())
        ) {
          return false
        }

        const expression = this.currentExpression.reduce((memo, current) => {
          memo.push(current.handler ? current.handler(memo) : current.get())
          return memo
        }, [])

        // Выполняем выражение
        let result = eval(expression.join(' '))
        // Сокращаем дробную часть до 10 знаков
        result = result.toFixed(10)
        // Убираем лишние нули
        result = parseFloat(result)

        this.prevExpressions.push([...this.currentExpression])

        if(this.prevExpressions.length > this.maxHistoryLength) {
          this.prevExpressions.shift()
        }

        this.prevExpressions.slice(-1)[0].push(this.createControl('='))
        this.prevExpressions.slice(-1)[0].push(this.createControl(result))

        this.currentExpression = [this.createControl(result)]
      } catch(e) {
        this.$emit('error')
      }
    },
    expressionToString(expression) {
      return expression.map(item => item.get()).join(' ')
    },
    prevExpressionsToString() {
      return this.prevExpressions.map(expr => this.expressionToString(expr))
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
    createControl(v) {
      return {
        isRemove: true,
        v1:       v.toString(),
        set(value) {
          this.v1 = value
        },
        add(value) {
          this.v1 += value
        },
        get() {
          return this.v1
        },
      }
    },
  },
  watch: {
    currentExpression: {
      handler(arr) {
        if(!arr.length) {
          this.prevExpressions = []

          arr.push(this.createControl(0))
        }

        this.$emit('answer', [
          this.prevExpressionsToString(),
          this.currentExpressionToString(),
        ])
      },
      deep:      true,
      immediate: true,
    },
  },
}
