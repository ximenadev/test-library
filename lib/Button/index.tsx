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
    'tw-max-w-[30rem] tw-rounded-full tw-border tw-border-solid tw-border-primary tw-bg-white tw-p-[1rem] tw-text-center tw-text-[1rem] tw-font-medium tw-normal-case tw-leading-none tw-text-primary tw-transition-all hover:tw-scale-105 hover:tw-bg-white',
  regular:
    'tw-max-w-[30rem] tw-rounded-full tw-bg-brown tw-p-[1rem] tw-text-center tw-text-[1rem] tw-font-medium tw-normal-case tw-leading-none tw-text-primary tw-transition-all hover:tw-scale-105 hover:tw-bg-brown',
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
