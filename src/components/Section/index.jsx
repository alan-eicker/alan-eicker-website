import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, alignCenter = false, children = <></> }) => (
  <section className={styles.section}>
    <div
      className={classnames(styles.sectionContent, {
        [styles.alignCenter]: alignCenter,
      })}
    >
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div>{children}</div>
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  alignCenter: PropTypes.bool,
};

export default Section;
