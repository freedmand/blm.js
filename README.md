# blm.js

A short script that makes your site grayscale and adds a support footer for Black Lives Matter and related causes.

<img src="blm_footer.jpg">

<a href="https://rawcdn.githack.com/freedmand/blm.js/8a1e314f60d973e06bcaaaac4d674c51dfcf529d/example.html" target="_blank">Demo website</a>

<img src="blmjs.gif">

## Usage

Simply copy the following script tag and paste on any website before the closing `</head>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/freedmand/blm.js/blm.js">
```

For instance, if your site looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  ...
</body>
</html>
```

You can include the blm.js here:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
  <script src="https://cdn.jsdelivr.net/gh/freedmand/blm.js/dist/blm.js">
</head>
<body>
  ...
</body>
</html>
```

It will also work if you include it in the `<body>`, though it is not preferable.

## Credit

The <a href="https://svelte.dev">Svelte</a> JavaScript framework made their website grayscale and included a support footer, as documented in this <a href="https://twitter.com/sveltejs/status/1267824283763400707">tweet</a>.

This library is a clone of that idea that makes it easy to include similar such messages on other sites.

## License

[MIT](https://opensource.org/licenses/MIT)
