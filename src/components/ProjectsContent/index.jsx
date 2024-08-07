import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ProjectsContent.module.scss';

const ProjectsContent = ({ content }) => (
  <>
    {content.map((item) => (
      <div
        className={classnames(styles.projectItem, {
          [styles.isFeatured]: item.isFeatured,
        })}
        key={item.title}
      >
        <div className={styles.projectItem__head}>
          {item.isFeatured && (
            <div className={styles.projectItem__strapline}>
              Featured &#9733;
            </div>
          )}
          <h3>{item.title}</h3>
          {item.subtitle && <h4>{item.subtitle}</h4>}
        </div>
        <p>{item.description}</p>
        <div className={styles.projectItem__techList}>
          {item.techUsed.map((techItem) => (
            <div key={techItem}>{techItem}</div>
          ))}
        </div>
        <div className={styles.projectItem__urls}>
          {item.urls.map((url) => (
            <div key={url.href}>
              <a
                className={styles.projectItem__link}
                href={url.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {url.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default ProjectsContent;
