import React from 'react';
import { Helmet } from 'react-helmet';

const title = 'Kid Pix Zine';
const description = 'A zine composed entirely in Kid Pix 1.0.';
const image = 'https://bldwn.co/kidpix/zine/images/zine_00.png';

const Meta = () => (
  <Helmet>
    <title>{title}</title>
    <meta charset="utf-8" />
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    <meta itemprop="name" content={title} />
    <meta itemprop="description" content={description} />
    <meta itemprop="image" content={image} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="pinterest" content="nopin" />
  </Helmet>
);

export default Meta;
