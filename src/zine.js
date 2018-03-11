import React from 'react';
import leftpad from 'left-pad';

import Meta from './meta';
import Page from './page';

import './style.scss';

const PAGE_LENGTH = 15;
const PAGES = Array(PAGE_LENGTH).fill().map((_, idx) => leftpad(0 + idx, 2, 0));

const Zine = () => {
  return (
    <div className="zine">
      <Meta />

      {PAGES.map((page) => {
        return (<Page number={page} key={`page-${page}`} />);
      })}

      <div className="zine-description">
        <p>this is a zine i wrote in 2014, created entirely in kid pix 1.0.</p>
        <p>
          for an early history of kid pix, see craig hickman's
          post <a href="http://red-green-blue.com/kid-pix-the-early-years/" target="_blank" rel="noopener">
          kid pix: the early years</a>.
        </p>
        <p>~ <a href="https://twitter.com/cubeghost" target="_blank" rel="noopener">@cubeghost</a></p>
      </div>
    </div>
  );
};

export default Zine;
