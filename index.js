const visit = require('unist-util-visit');

module.exports = ({ markdownAST }, pluginOptions) => {
  const defaults = { pattern: /^(.*)$/, replace: '$1' };
  const { pattern, replace } = Object.assign(defaults, pluginOptions);
  
  /** @type {{(node: {url: string}) => void}} */
  const visitor = (node) => {
    node.url = node.url.replace(pattern, replace);
  };
  visit(markdownAST, 'link', visitor);
  return markdownAST;
};
