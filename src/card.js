// 修正後のコード: src/card.js

'use strict';

// constではなくimport 
const { readFile } = require('fs/promises');
const { dirname, join } = require('path');

const readOutput = async () => {
  try {
    const currentDir = __dirname; // __dirname を使用してカレントディレクトリを取得
    const outputFilePath = join(dirname(__filename), '/output'); // __filename を使用して現在のファイルのディレクトリを取得
    const output = await readFile(outputFilePath, 'utf8');
    console.log(output);
  } catch (error) {
    console.error('Error reading output:', error);
  }
};

readOutput();
