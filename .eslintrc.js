// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "eqeqeq": 0,
    // 不要求使用 === 和 !==
    "no-mixed-spaces-and-tabs": [2, false],
    //禁止混用tab和空格
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    // 双峰驼命名格式
    "quotes": [1, "single"]
    //赋值使用单引号
  }
};
