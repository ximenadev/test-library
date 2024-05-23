import { ElementType, FC } from 'react';
import { Link } from '@mui/material';
import styles from './styles.module.css';

interface ButtonLinkProps {
  text: string;
  width?: number;
  href: string;
  component: ElementType;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ text, href, width, component }) => {
  return (
    <Link
      href={href}
      component={component} //Expects NextLink component to get the benefits of Next.js routing
      underline="none"
      sx={{
        width: width ? `${width}px` : '100%',
      }}
      className={styles.buttonLink}
    >
      {text}
    </Link>
  );
};
