import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsContent.module.scss';

const SkillsContent = ({ content }) => {
  return (
    <div className={styles.skillsGrid}>
      {content.map((item) => (
        <div className={styles.skillsGrid__item} key={item.name}>
          <i className={item.icon} aria-hidden="true" />
          <span className={styles.screenreaderOnly}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

SkillsContent.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default SkillsContent;
