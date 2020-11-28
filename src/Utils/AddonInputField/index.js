import React from "react";
import {
  addonInputWrapper,
  addonInputField,
  forleftIcon,
  forRightIcon,
  lftSvg,
  rightSvg,
  errorField,
  helperText,
} from "./asset.module.scss";
import { AnimatePresence, motion } from "framer-motion";
const AddonInputField = (
  {
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    width,
    placeholder,
    error,
    errorText,
    containerStyle = {},
    ...restProps
  },
  ref
) => {
  // const { LeftIcon, RightIcon, inputProps, width, props } = props;
  return (
    <div className={addonInputWrapper} style={{ ...containerStyle, width }}>
      {LeftIcon && <LeftIcon className={lftSvg} />}
      <input
        ref={ref}
        className={`${addonInputField} ${error ? errorField : ""} ${
          LeftIcon && forleftIcon
        }  ${RightIcon && forRightIcon}`}
        {...restProps}
        autoComplete="off"
      />
      {RightIcon && <RightIcon className={rightSvg} />}
      {placeholder && <label>{placeholder}</label>}
      <AnimatePresence>
        {error && (
          <motion.span
            className={helperText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.forwardRef(AddonInputField);
