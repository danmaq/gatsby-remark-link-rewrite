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

* Babel for Node LTS user.
* Testing. (How do it...?)
* CI using Wercker.