import React from 'react';
import styles from './Button.scss';

const Button = ({variant = 'round', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

export default Button;
