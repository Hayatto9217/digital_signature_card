'use strict'

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
const { execSync } = require('child_process');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Transpile the source code using Babel and output to ./bin/card.js
const srcPath = path.join(__dirname, 'src')
const outPath = path.join(__dirname, 'bin', 'card.js')
execSync(`npx babel ${srcPath} --out-file ${outPath}`)

console.log('Build completed.')


// Text + chalk definitions
const data = {
  name: chalk.white('           Haruto Tokuyama'),
  handle: chalk.white('haruto8692'),
  shorthandle: chalk.white('Haruto'),
  work: chalk.white('Software engineers interested in quantum information(::)'),
  X: chalk.gray('https://twitter.com/haruto869217') + chalk.cyan('@haruto869217'),
  Qiita: chalk.yellow('https://qiita.com/haruto19') + chalk.cyan('@haruto19'),
  Zenn: chalk.blue('https://zenn.dev/haruto869217') + chalk.cyan('@haruto869217'),
  mastodon: chalk.gray('https://mastodon.social/') + chalk.magenta('@haruto869217'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~haruto8692'),
  github: chalk.gray('https://github.com/') + chalk.green('Hayatto9217'),
  web: chalk.cyan('https://haru.haru869217.com/') + chalk.green(':自作サイト'),
  npx: chalk.red('npx') + ' ' + chalk.white('haruto8692'),
  labelWork: chalk.white.bold('    Work:'),
  labelX: chalk.white.bold(' X:'),
  labelQiita: chalk.white.bold('Qiita:'),
  labelZenn: chalk.white.bold('Zenn:'),
  labelMastodon: chalk.white.bold('Mastodon:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`
const working = `${data.labelWork}  ${data.work}`
const xing = `${data.labelX}  ${data.X}`
const qiitaing = `${data.labelQiita}  ${data.Qiita}`
const zenning = `${data.labelZenn} ${data.Zenn}`
const mastodoning = `${data.labelMastodon}  ${data.mastodon}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
//const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               xing + newline + // data.labelTwitter + data.twitter
               qiitaing + newline + //data.labelqiita + data.qiita
               zenning + newline + //data.labelzenn + data.zenn
               mastodoning + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               //linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const currentFileURL = new URL(import.meta.url)
const currentFilePath = path.dirname(new URL(import.meta.url).pathname)
const outputPath = path.join(currentFilePath, 'bin/output') // 修正: 正しいファイルパスを生成する

fs.writeFileSync(outputPath, chalk.blue(boxen(output, options)))
