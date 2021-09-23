[![Build Status](https://travis-ci.com/Muzihuzi/dimibob-parser.svg?branch=main)](https://travis-ci.com/Muzihuzi/dimibob-parser)
# @dimigo/dimibob-parser

> dimibob excel parser

---


### Install

```
# NPM
$ npm install @dimigo/dimibob-parser
# yarn
$ yarn add @dimigo/dimibob-parser
```

### Examples

```js
const parser = require('@dimigo/dimibob-parser')
parser.parse('./dimibob.xlsx').then((bob)=>{
    console.log(bob)
})

```
olso supports Buffer
```js
const fs = require('fs')
const parser = require('@dimigo/dimibob-parser')
parser.parse(fs.readFileSync('./dimibob.xlsx')).then((bob)=>{
    console.log(bob)
})
```

### Author

**[Dyij](https://github.com/Muzihuzi)**

