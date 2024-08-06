import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import content from '../static/content.yaml';

const { header } = content;

const ContentScrollContext = createContext();

export const useContentScrollContext = () => useContext(ContentScrollContext);

const ContentScrollProvider = ({ children }) => {
  const [section, setSection] = useState('home');

  return (
    <ContentScrollContext.Provider value={{ section, setSection }}>
      {children}
    </ContentScrollContext.Provider>
  );
};

ContentScrollProvider.propTypes = {
  children: PropTypes.node,
};

export default ContentScrollProvider;
