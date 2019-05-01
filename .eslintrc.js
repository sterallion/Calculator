module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
    //'airbnb-base',
    //'@vue/standard',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "semi": [
      "error",
      "never"
    ],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true
    }],
    "key-spacing": [
      "error",
      {
        "align": "value"
      }
    ],
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": true
    }],
    "no-prototype-builtins": "off",
    "func-names": "off",
    "prefer-destructuring": "off",
    "no-case-declarations": "off",
    "import/no-extraneous-dependencies": "off",
    "space-before-function-paren": ["error", "never"],
    "one-var": [
      "error",
      {
        "var": "never",
        "let": "never",
        "const": "never"
      }
    ],
    // Разрешаем изменение свойств параметров
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    // Убираем пробел после if, for ...
    "keyword-spacing": [
      "error",
      {
        "after": false,
        "overrides": {
          "const": {
            "after": true
          },
          "from": {
            "after": true
          },
          "return": {
            "after": true
          },
          "else": {
            "after": true
          },
          "case": {
            "after": true
          },
          "import": {
            "after": true
          },
          "default": {
            "after": true
          }
        }
      }
    ],
    "no-eval": "off",
    // Позволяет использовать короткие выражения
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    // Отключаем guard-for-in
    "guard-for-in": "off",
    // Отключаем ForInStatement
    "no-restricted-syntax": [
      "off",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      }
    ],
    "max-len": [2, 120, 4],
    "no-new": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-shadow": [
      2,
      {
        "allow": [
          "state"
        ]
      }
    ],
    "no-plusplus": "off",
    "no-restricted-globals": ['error', ''],
  },
}
