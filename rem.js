#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const start = 320
const end = 420

const bases = [320, 375]
const range = 10

bases.forEach(base => {
  const file = fs.createWriteStream(path.resolve(`rem-${base}.css`))
  for (let i = start; i < end; i += range) {
    const d = 16 / base
    const v = `
@media screen and (min-width: ${i}px) and (max-width: ${i + range - 1}px) {
  html { font-size: ${d * i}px; }
}
`
    file.write(v)
  }
})
