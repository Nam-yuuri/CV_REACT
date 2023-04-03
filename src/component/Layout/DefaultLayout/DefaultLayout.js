import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.css'

import Left from "../ComponentLayout/Left";
import Right from "../ComponentLayout/Right";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('container')}>
      <div>
        <Left />
      </div>
      <div>{children}</div>
      <div>
        <Right />
      </div>
    </div>
  );
}

export default DefaultLayout;
