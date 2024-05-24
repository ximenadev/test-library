import { ElementType } from 'react';
import { FC } from 'react';

export declare const Button: FC<ButtonProps>;

export declare const ButtonLink: FC<ButtonLinkProps>;

declare interface ButtonLinkProps {
    text: string;
    width?: number;
    href: string;
    component: ElementType;
}

declare interface ButtonProps {
    text: string;
    width?: number;
    onClick: () => void;
    outlined?: boolean;
}

export { }
