import React, { Fragment, useState } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import BannerPopup from "../../assets/popup-fold-flip6-pc-2.jpg";
import styled from "styled-components";

const cx = classNames.bind(styles);

const BannerAds = () => {
  //! Props
  //! State
  const [isOpenBanner, setIsOpenBanner] = useState(true);
  //! Function
  //! Effect
  //! Render

  return (
    <Fragment>
      {isOpenBanner && (
        <SWrapBannerAds>
          <div className={cx("jquery-modal blocker current")}>
            <div
              id="popup-modal"
              class="modal"
              style={{ display: "inline-block" }}
            >
              <a
                href="https://hoanghamobile.com/samsung-galaxy-z-2024"
                target="_blank"
              >
                <img src={BannerPopup} style={{ maxWidth: "100%" }} />
              </a>
              <button
                href="#close-modal"
                rel="modal:close"
                class="close-modal icon-minutes"
                onClick={() => {
                  setIsOpenBanner(false);
                }}
              ></button>
            </div>
          </div>
        </SWrapBannerAds>
      )}
    </Fragment>
  );
};

export default BannerAds;

export const SWrapBannerAds = styled.div`
  .jquery-modal {
    z-index: 99999 !important;
  }
  .blocker {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.75);
    text-align: center;
  }
  #popup-modal {
    padding: 0;
    background: none;
    max-width: 100%;
    width: auto;
    background: none;
    box-shadow: none;
    position: absolute;
    top: 30%;
    left: 35%;
  }

  .modal button.close-modal[class*="icon-"] {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    color: #fff;
    line-height: 1.28;
    text-align: center;
    text-decoration: none;
    text-indent: 0;
    background: #fd5465;
    -webkit-border-radius: 26px;
    -moz-border-radius: 26px;
    -o-border-radius: 26px;
    -ms-border-radius: 26px;
    font-size: 0;
    cursor: pointer;
  }
`;
