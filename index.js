const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  /** @type {{(node: {url: string}) => void}} */
  const visitor = (node) => {
    node.url = node.url.replace(/^\/posts\/(.*)\.(\w{2}).md(#.*)?$/, '/$2/$1$3/');
  };
  visit(markdownAST, 'link', visitor);
  return markdownAST;
};
