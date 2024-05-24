import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

interface ButtonProps {
  text: string;
  width?: number;
  onClick: () => void;
  outlined?: boolean;
  addedStyles?: string;
}

const variants = {
  outlined:
    'max-w-[30rem] rounded-full border border-solid border-primary bg-white p-[1rem] text-center text-[1rem] font-medium normal-case leading-none text-primary transition-all hover:scale-105 hover:bg-white',
  regular:
    'max-w-[30rem] rounded-full bg-brown p-[1rem] text-center text-[1rem] font-medium normal-case leading-none text-primary transition-all hover:scale-105 hover:bg-brown;',
};

export const Button: FC<ButtonProps> = (
  props,
  { text, width, outlined = false, addedStyles = '' },
) => {
  return (
    <MUIButton
      sx={{
        width: width ? `${width}px` : '100%',
      }}
      className={`${outlined ? variants.outlined : variants.regular} ${addedStyles}`}
      {...props}
    >
      {text}
    </MUIButton>
  );
};
