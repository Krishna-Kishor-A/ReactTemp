
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button/Button';
import SplitPane from 'react-split-pane'
import styles from './login.module.scss';
import { TextField } from '@material-ui/core';



const Login = (props) => {
  const { authLogin } = props;

  return (
    <div className={styles.loginWrapper}>
      <SplitPane split='vertical' defaultSize='50%'>
        <div className={styles.loginLeft}></div>
        <div className={styles.loginRight}>
          <div className={styles.logo}>
          </div>
          <div className="userName">
            <TextField variant="outlined"
              required
              size="small"
              label="Username"
            />
          </div>
          <div className="password">
            <TextField variant="outlined"
              required
              label="Password"
              type="password"
              size="small"
            />
          </div>
        </div>
      </SplitPane>
    </div>
  );
};

export default Login;
