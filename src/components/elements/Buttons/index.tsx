/* eslint-disable react/button-has-type */
import React from "react";

type Props = {
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    [otherProps: string]: unknown;
};

export const TransparentButton = ({ children, type, ...otherProps }: Props) => (
    <button type={type} {...otherProps}>
        {children}
    </button>
);

export const DefaultButton = ({ children, type, ...otherProps }: Props) => (
    <button type={type} {...otherProps}>
        {children}
    </button>
);
