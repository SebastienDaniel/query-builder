import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './resizable-input.module.css';

interface IResizableInputProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly value: string;
  readonly onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  readonly minWidth?: number;
}

/**
 * A ResizableInput is a text input that automatically resizes to fit its content. It also accepts a
 * minWidth prop to set the minimum width of the input, used to override browser default input widths
 *
 */
export function ResizableInput(props: IResizableInputProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState(0);
  const [computedStyles, setComputedStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const styles = window.getComputedStyle(inputRef.current);
      setComputedStyles({
        lineHeight: styles.lineHeight,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        fontFamily: styles.fontFamily,
        fontStretch: styles.fontStretch,
        paddingLeft: styles.paddingLeft,
        paddingRight: styles.paddingRight,
        borderWidth: styles.borderWidth,
      });
    }
  }, [spanRef.current, inputRef.current]);

  useEffect(() => {
    if (spanRef.current) {
      const scrollWidth = spanRef.current.scrollWidth;
      setWidth(scrollWidth + 6);
    }
  }, [inputRef.current?.value, props.value]);

  return (
    <>
      <input
        {...props}
        style={{ ...props.style, width, minWidth: props.minWidth }}
        width={width}
        ref={inputRef}
      />
      <span ref={spanRef} style={computedStyles} className={styles.inputSizer}>
        {inputRef?.current?.value ?? props.value}
      </span>
    </>
  );
}
