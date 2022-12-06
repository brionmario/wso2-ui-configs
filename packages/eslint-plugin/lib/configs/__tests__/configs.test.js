const config = require('../../index');
const fs = require('fs');
const assert = require('assert');
const path = require('path');

describe('check shareable config', () => {
  it('correctly exports every config from the module', () => {
    const exportedConfigs = new Set(Object.keys(config.configs));
    const files = new Set(
      fs
        .readdirSync('../')
        .map((f) => path.basename(f, path.extname(f)))
    );
    assert.deepEqual(files, exportedConfigs);
  });
});
