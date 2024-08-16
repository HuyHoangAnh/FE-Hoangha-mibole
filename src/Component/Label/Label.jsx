import React from "react";
import classNames from 'classnames/bind'
import styles from './Label.module.scss'

const cx = classNames.bind(styles)

const Label = (props) => {
  //! Props
  const {labelText} = props
  //! State
  //! Function
  //! Effect
  //! Render  
  return (
    <div className={cx("cover")}>
      <div className={cx("label")}>
        <span style={{ color: "white", fontSize: "10px" }}>
          Giảm giá {labelText} %
        </span>
      </div>
    </div>
  );
};

export default Label;
