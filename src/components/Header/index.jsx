import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ logo = <></>, navItems = [] }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} href="/">
        {logo}
      </Link>
      <ul className={styles.header__nav}>
        {navItems.map((item) => (
          <Link key={item} href={item}>
            {item}
          </Link>
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
