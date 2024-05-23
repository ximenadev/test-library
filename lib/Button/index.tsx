import React from "react";
import styles from './styles.module.css'

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className={styles.button}
    >
      {text}
    </button>
  );
};