import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

import Zine from './zine';

const helmetRegexp = / data-react-helmet="true"/g;

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
</html>`;
};

export default render;
