import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ProjectsSection.module.scss';

const ProjectsSection = ({
  content = {
    title: '',
    items: [],
  },
}) => (
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

ProjectsSection.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        isFeatured: PropTypes.bool,
        description: PropTypes.string,
        subtitle: PropTypes.string,
        techUsed: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        urls: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
            url: PropTypes.string,
          }),
        ),
      }),
    ),
  }),
};

export default ProjectsSection;
