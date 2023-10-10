'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Haruto Tokuyama'),
  handle: chalk.white('haruto8692'),
  shorthandle: chalk.white('Haruto'),
  work: chalk.white('Software engineers interested in quantum information(::)'),
  twitter: chalk.gray('https://twitter.com/haruto869217') + chalk.cyan('haruto869217'),
  qiita: chalk.yellow('https://qiita.com/haruto19') + chalk.cyan('haruto19'),
  zenn: chalk.blue('https://zenn.dev/haruto869217') + chalk.cyan('haruto869217'),
  mastodon: chalk.gray('https://mastodon.social/') + chalk.magenta('@haruto869217'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.green('Hayatto9217'),
  web: chalk.cyan('https://haru.haru869217.com/') + chalk.green('https://haru.haru869217.com/'),
  npx: chalk.red('npx') + ' ' + chalk.white('haruto8692'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' X:'),
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
const twittering = `${data.labelX}  ${data.x}`
const qiitaing = `${data.labelQiita}  ${data.qiita}`
const zenning = `${data.labelZenning} ${data.zenn}`
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

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.blue(boxen(output, options)))
