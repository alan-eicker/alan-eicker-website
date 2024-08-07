import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children = <></> }) => (
  <section className={styles.section}>
    <div className={styles.sectionContent}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div>{children}</div>
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;