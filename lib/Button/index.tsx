import { FC, ReactNode } from 'react';
import { Button as MUIButton } from '@mui/material';
import customStyles from './styles.module.css';

interface ButtonProps {
  children: ReactNode;
  width?: number;
  outlined?: boolean;
  addedStyles?: string;
}

export const Button: FC<ButtonProps> = (
  props,
  { children, width, outlined = false, addedStyles = '' },
) => {
  return (
    <MUIButton
      {...props}
      sx={{
        width: width ? `${width}px` : '100%',
      }}
      className={`${outlined ? customStyles.buttonOutlined : customStyles.button} ${addedStyles}`}
    >
      {children}
    </MUIButton>
  );
};
