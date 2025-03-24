# Linking-kwy

<p align="center">
  <a href="https://www.npmjs.com/package/linking-kwy"><img src="https://img.shields.io/npm/dm/linking-kwy.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/linking-kwy"><img src="https://img.shields.io/npm/v/linking-kwy.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/linking-kwy"><img src="https://img.shields.io/npm/l/linking-kwy.svg?sanitize=true" alt="License"></a>
</p>

<p align="center">
  <a href="https://orcid.org/0009-0009-0993-7629"><img src="https://img.shields.io/badge/iD-0009--0009--0993--7629-f5f5f5" alt="Orcid"></a>
  <a href="https://ko-fi.com/kwy"><img src="https://badgen.net/badge/icon/kofi?icon=kofi&label=kwy&color=F16061" alt="Kwy"></a>
</p>

<p align="center">

![Depfu](https://img.shields.io/depfu/kangwuyi/linking-kwy) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kangwuyi/linking-kwy) [![Code Coverage](https://img.shields.io/codecov/c/github/kangwuyi/linking-kwy)](https://codecov.io/github/kangwuyi/linking-kwy) [![Code Coverage](https://github.com/kangwuyi/linking-kwy/actions/workflows/node.js.yml/badge.svg)](https://github.com/kangwuyi/kangwuyi/linking-kwy)


</p>

# pre
在网页中嵌入我的链接的小工具

**重要** 这个小工具的实现完全是为了方便自己嵌入 GitHub 按钮链接，没有任何其他使用意义，勿下载，慎用。

## Installation

```bash
# use yarn
yarn add linking-kwy
# use npm
npm install --save linking-kwy
```

## How to use
```js
import { createApp } from 'vue'
import Linking from 'linking-kwy'
import App from './App.vue'

const app = createApp(App)
app.use(Linking)
app.mount('#app')
```

## In file vue
```html
<Linking user="kangwuyi" repo="linking-kwy" />
```

## Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| user | string | kangwuyi | github username |
| repo | string | | github repo |
