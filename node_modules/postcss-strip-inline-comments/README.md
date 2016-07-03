# PostCSS strip inline comments [![Build Status](https://travis-ci.org/mummybot/postcss-strip-inline-comments.svg?branch=master)](https://travis-ci.org/mummybot/postcss-strip-inline-comments)

<img align="right" width="95" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

A plugin to remove inline CSS comments from compilation.

```scss
/* This comment will remain */
// This comment will be removed
body {
    // This comment will also be removed
    background-color: black;
}
// And so will this one
```

## Usage

You need to have a compliant parser, currently either [postcss-scss](https://github.com/postcss/postcss-scss) or [sugarss](https://github.com/postcss/sugarss) already parsing your postcss for this plugin to work.

###Install

```npm install postcss-strip-inline-comments --save-dev```

###Grunt

```javascript
grunt.initConfig({
  postcss: {
    options: {
      processors: [
        require('postcss-strip-inline-comments'),
      ],
      syntax: require('postcss-scss')
    },
    dist: {
      src: 'css/*.css'
    }
  }
});
```

###Gulp

```javascript
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stripInlineComments = require('postcss-strip-inline-comments');
var scss = require('postcss-scss');

gulp.task('default', function () {
    var processors = [stripInlineComments];
    return gulp.src('in.css')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('out'));
});
```

###Webpack

```javascript
var stripInlineComments = require('postcss-strip-inline-comments');

var config = {
  ...

  module: {
    loaders: [
      { 
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&importLoaders=1!postcss-loader?parser=postcss-scss')
      }
    ]
  },
  postcss: function(webpack) {
    return [
      stripInlineComments
    ];
  },
  ...
}
```

###Node

```javascript
import postcss from 'postcss';
import syntax from 'postcss-scss';
import stripInlineComments from 'strip-inline-comments';

let css = fs.readFileSync('style.css', 'utf8');

postcss([stripInlineComments]).process(css, { parser: syntax }).then( result => {
    console.log(result.css);
});
```
