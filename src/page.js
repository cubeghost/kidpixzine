import React from 'react';
import PropTypes from 'prop-types';

const PAGE_URL_ROOT = './images/zine_';
const pageUrl = function(pageNumber) {
  return PAGE_URL_ROOT + pageNumber + '.png';
}

const Page = ({ number }) => {
  return (
    <div className="zine-page">
      <img src={pageUrl(number)} alt="" />
    </div>
  );
};

Page.propTypes = {
  number: PropTypes.string.isRequired
};

export default Page;
