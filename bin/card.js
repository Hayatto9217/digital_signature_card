'use strict';

import { readFile } from 'fs/promises';
import { join } from 'path';

const readOutput = async () => {
  try {
    const currentDir = new URL(import.meta.url).pathname;
    const outputPath = join(currentDir, 'output');
    const output = await readFile(outputPath, 'utf8');
    console.log(output);
  } catch (error) {
    console.error('Error reading output:', error);
  }
};

readOutput();

