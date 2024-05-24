import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import styles from './styles.module.css';

interface ButtonProps {
  text: string;
  width?: number;
  outlined?: boolean;
  addedStyles?: string;
}

export const Button: FC<ButtonProps> = (
  props,
  { text, width, outlined = false, addedStyles = '' },
) => {
  return (
    <MUIButton
      {...props}
      sx={{
        width: width ? `${width}px` : '100%',
      }}
      className={`${outlined ? styles.buttonOutlined : styles.button} ${addedStyles}`}
    >
      {text}
    </MUIButton>
  );
};
