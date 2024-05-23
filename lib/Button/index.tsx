import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import styles from './styles.module.css';

interface ButtonProps {
  text: string;
  width?: number;
  onClick: () => void;
  outlined?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  width,
  outlined = false,
}) => {
  return (
    <MUIButton
      onClick={onClick}
      sx={{
        width: width ? `${width}px` : '100%',
      }}
      className={`${outlined ? styles.buttonOutlined : styles.button}`}
    >
      {text}
    </MUIButton>
  );
};
