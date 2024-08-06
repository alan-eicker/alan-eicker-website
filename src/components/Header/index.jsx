import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { useContentScrollContext } from '@/providers/ContentScrollProvider';

const Header = ({ logo = <></>, navItems = [] }) => {
  const { section, setSection } = useContentScrollContext();

  return (
    <header className={styles.header}>
      <button
        className={styles.header__logo}
        onClick={() => setSection('home')}
      >
        {logo}
      </button>
      <ul className={styles.header__nav}>
        {navItems.map((item) => (
          <button
            className={section === item && styles.isActive}
            key={item}
            onClick={() => setSection(item)}
          >
            {item}
          </button>
        ))}
      </ul>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  navItems: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
