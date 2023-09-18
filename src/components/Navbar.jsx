import { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from '@/useOnClickOutside';
import styles from '@/styles/Navbar.module.scss'; // Import your SCSS module styles

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav className={styles.navbar}>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>Home</li>
        <li className={styles['nav-item']}>About</li>
        <li className={styles['nav-item']} ref={ref}>
          <button
            onClick={() => setDropdown((prev) => !prev)}
            className={styles['dropdown-button']}
          >
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul className={styles['dropdown-menu']}>
              <li className={styles['dropdown-item']}>Design</li>
              <li className={styles['dropdown-item']}>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
