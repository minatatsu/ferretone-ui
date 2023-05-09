import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

export type ButtonGroupProps = {
  children: React.ReactNode;
} & {
  position?: "center" | "left" | "right";
  // @Todo button のwidth幅の洗い出し後、反映
  width?: "small" | "medium" | "auto";
};

const cx = classNames.bind(styles);

export const ButtonGroup = ({
  children,
  position = "center",
  width = "small",
}: ButtonGroupProps): JSX.Element => (
  <ul className={cx(["list", position])}>
    {elementChildren(children).map((content, index) => (
      <li key={index} className={cx(["listitem", width])}>
        {content}
      </li>
    ))}
  </ul>
);

export function elementChildren<T extends React.ReactElement>(
  children: React.ReactNode,
  predicate: (element: T) => boolean = () => true
): T[] {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && predicate(child as T)
  ) as T[];
}