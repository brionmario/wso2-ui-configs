/**
 * @fileoverview Shareable ESLint configurations &amp; rules used in WSO2 code bases.
 * @author WSO2
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require('path');
const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, 'rules'));

// import processors
module.exports.processors = {
  // add your processors here
};

module.exports.configs = requireIndex(path.join(__dirname, 'configs'));
