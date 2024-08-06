import React from 'react';
import PropTypes from 'prop-types';

const HomeContent = ({ content }) => {
  const setYearsExperience = (str) => {
    const yearsExperience = String(new Date().getFullYear() - 2007);
    return str.replace('@yearsExperience', yearsExperience);
  };

  return content.map((paragraphText, index) => (
    <p key={index}>{setYearsExperience(paragraphText)}</p>
  ));
};

HomeContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
};

export default HomeContent;
