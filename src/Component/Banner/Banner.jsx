import React, { Fragment, useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import styled from "styled-components";

const cx = classNames.bind(styles);

const Banner = (props) => {
  //! Props
  const { listBanner } = props;
  //! State
  const [indexActive, setIndexActive] = React.useState(0);
  //! Function
  // setTimeout (() => {
  //     setIndexActive((prevActiveStep) => (prevActiveStep + 1) === 4 ? 0 : prevActiveStep + 1)
  // }, [3000])
  //! Effect
  //! Render
  const showListBanner = listBanner.map((el) => {
    return (
      <Fragment>
        <div
          key={el.id}
          className={cx(
            `image-banner ${el.id === indexActive && "image-banner_showon"}`
          )}
        >
          <img
            src={el.imgPath}
            style={{
              display: el.id === indexActive ? "block" : "none",
              width: "1200px",
              maxWidth: "100%",
              margin: el.id === indexActive ? "30px auto 10px" : "0",
            }}
          />
        </div>
      </Fragment>
    );
  });

  return (
    <SWrapBanner>
      <div className={cx("banner container")}>
        <div className={cx("")}>
          {showListBanner}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            {listBanner.map((el) => {
              return (
                <div
                  key={el?.id}
                  style={{
                    background:
                      el?.id === indexActive
                        ? "transparent linear-gradient(90deg,#009981 0%,var(--background-color-default) 100%) 0% 0% no-repeat"
                        : "#f5f5f5",
                    color: el?.id === indexActive ? "#dddddd" : "#222222",
                  }}
                  className={cx(`button-banner`)}
                  onClick={() => setIndexActive(el?.id)}
                >
                  <div>{el.title}</div>
                  <div>{el.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SWrapBanner>
  );
};

export default Banner;

export const SWrapBanner = styled.div`
.container{
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
  .image-banner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    &_showon {
      animation-name: showonimage;
      animation-duration: 3s;
    }
  }

  .button-banner {
    width: 297px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px #00000029;
    border-radius: 8px;
    cursor: pointer;
  }
`;
