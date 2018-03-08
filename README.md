[![wercker status](https://app.wercker.com/status/0e27197e8d107109ae9733501ecdb82c/s/master "wercker status")](https://app.wercker.com/project/byKey/0e27197e8d107109ae9733501ecdb82c)
[![npm version](https://badge.fury.io/js/gatsby-remark-link-rewrite.svg)](https://badge.fury.io/js/gatsby-remark-link-rewrite)
[![npm download](https://img.shields.io/npm/dm/gatsby-remark-link-rewrite.svg?style=flat-square)](https://npmjs.org/package/gatsby-remark-link-rewrite)

# gatsby-remark-link-rewrite

It can freely rewrite the link URL of Markdown.
It is a plugin of [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark).

## Usage

```JavaScript
{
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      {
        resolve: 'gatsby-remark-link-rewrite',
        options: {
          pattern: /^(.*)$/,
          replace: '$1',
        },
      },
    ],
  },
},
```

## Options

### `pattern`: RegExp

### `replace`: string

## See also

[I use it plugin in my project](https://github.com/danmaq/danmaq.gatsby).

## TODO (Memo)

* Testing. (How do it...?)
