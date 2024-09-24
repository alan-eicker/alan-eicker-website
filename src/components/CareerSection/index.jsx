import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CareerSection.module.scss';

const CareerSection = ({ content }) => (
  <>
    {content.history.map((item) => (
      <div className={styles.careerItem} key={item.company}>
        <div className={styles.careerItem__duration}>{item.duration}</div>
        <h3>{item.company}</h3>
        <ul className={styles.careerItem__jobList}>
          {item.positionHeld.map((position, index) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
      </div>
    ))}
    <a className={styles.btnLink} target="_blank" href={content.resumeURL}>
      View Resum&eacute;
    </a>
  </>
);

CareerSection.propTypes = {};

export default CareerSection;
