import classNames from 'classnames';
import { ReactElement, cloneElement } from 'react';

export const FOCUS_CLASS_NAME = 'iCanBeFocused';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Focusable(props: { children: ReactElement<any> }) {
  return cloneElement(props.children, {
    tabIndex: 0,
    className: classNames(props.children.props.className, FOCUS_CLASS_NAME),
  });
}
