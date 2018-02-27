const visit = require('unist-util-visit');

/**
 * @typedef PluginOptions
 * @property {RegExp} pattern
 * @property {string} replace
 */

/**
 * @param {*} props
 * @param {PluginOptions} pluginOptions
 */
module.exports = ({ markdownAST }, pluginOptions) => {
  /** @type {PluginOptions} */
  const defaults = { pattern: /^(.*)$/, replace: '$1' };
  const { pattern, replace } = Object.assign(defaults, pluginOptions);

  /** @type {{(node: {url: string}) => void}} */
  const visitor = (node) => {
    node.url = node.url.replace(pattern, replace);
  };
  visit(markdownAST, 'link', visitor);
  return markdownAST;
};
