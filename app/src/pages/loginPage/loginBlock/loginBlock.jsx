/*
 * Copyright 2017 EPAM Systems
 *
 *
 * This file is part of EPAM Report Portal.
 * https://github.com/reportportal/service-ui
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */

import classNames from 'classnames/bind';
import styles from './loginBlock.scss';
import LoginForm from './loginForm/loginForm';

const cx = classNames.bind(styles);

const LoginBlock = () => (
  <div className={cx('login-block')}>
    <span className={cx('welcome-msg')}>
      <span className={cx('big')}>Welcome,</span><br />login to your account
    </span>
    <LoginForm />
  </div>
);

export default LoginBlock;
