'use strict'
'use strict';

import { readFile } from 'fs/promises';
import { join } from 'path';

const readOutput = async () => {
  try {
    const outputPath = join(__dirname, 'output');
    const output = await readFile(outputPath, 'utf8');
    console.log(output);
  } catch (error) {
    console.error('Error reading output:', error);
  }
};

readOutput();
