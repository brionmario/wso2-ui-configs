const fs = require('fs');
const assert = require('assert');
const path = require('path');
const config = require('../../index');

describe('check shareable config', () => {
  it('correctly exports every config from the module', () => {
    const KNOWN_FILES_TO_IGNORE = ['__tests__'];
    const exportedConfigs = new Set(Object.keys(config.configs));
    const files = new Set(
      fs
        .readdirSync(path.resolve(path.join(__dirname, '..')))
        .map(f => {
          if (KNOWN_FILES_TO_IGNORE.includes(f)) {
            return undefined;
          }

          return path.basename(f, path.extname(f));
        })
        .filter(Boolean),
    );
    assert.deepEqual(files, exportedConfigs);
  });
});
