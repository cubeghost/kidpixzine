import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

import Zine from './zine';

const helmetRegexp = / data-react-helmet="true"/g;

const googleAnalytics = `<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-37168472-1', 'auto');
  ga('send', 'pageview');
</script>`;

function render(locals) {
  const styleChunk = locals.webpackStats.compilation.assets['style.css'];
  const style = styleChunk.children.reduce((a, child) => (a + child._value), '');
  const markup = ReactDOMServer.renderToStaticMarkup(<Zine />);
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString().replace(helmetRegexp, '');
  const meta = helmet.meta.toString().replace(helmetRegexp, '');

  return `<!DOCTYPE html>
<html lang="en">
  <head>${title}${meta}<style type="text/css">${style}</style></head>
  <body>${markup}</body>
  ${googleAnalytics}
</html>`;
};

export default render;
