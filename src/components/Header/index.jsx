import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ logo = <></>, navItems = [] }) => {
  const page = usePathname().replace('/', '');

  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} href="/">
        {logo}
      </Link>
      <ul className={styles.header__nav}>
        {navItems.map((item) => (
          <Link
            className={page === item.toLowerCase() && styles.isActive}
            key={item}
            href={item}
          >
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
