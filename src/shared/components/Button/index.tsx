import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { GaProps } from "../../types";

const cx = classNames.bind(styles);

export type Props = React.ComponentPropsWithoutRef<"button"> & {
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "transparency"
    | "success"
    | "warn"
    | "danger";
  size: "small" | "medium" | "large";
  minWidth?: number;
} & GaProps;

export const Button = ({
  children,
  variant,
  size,
  minWidth,
  gaClassName,
  ...rest
}: Props): JSX.Element => (
  <button
    className={`${cx("button", variant, size)} ${gaClassName}`}
    style={{ minWidth: minWidth ? `${minWidth}px` : undefined }}
    {...rest}
  >
    {children}
  </button>
);
