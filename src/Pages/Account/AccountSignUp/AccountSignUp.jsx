import React from 'react'


const AccountSignUp = (props) => {
    //! Props
    const {setIsOpenSignIn, setIsOpenSignUp}=props
    //! State
    //! Function
    //! Effect
    //! Render
  return (
    <div className="form">
      <div className="center" style={{ textAlign: "center" }}>
        <h2>Đăng ký tài khoản</h2>
        <p>Chú ý các nội dung có dấu * bạn cần phải nhập</p>
      </div>
      <div id="registerForm" className="hh-form">
        <form method="post" action="/Account/Register">
          <div className="form-controls">
            <label>Tài khoản:</label>
            <div className="controls">
              <input
                type="text"
                name="UserName"
                id="UserName"
                placeholder="Tài khoản *"
                data-required="1"
                fdprocessedid="ldlgsp"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Họ tên:</label>
            <div className="controls">
              <input
                type="text"
                name="Title"
                id="Title"
                placeholder="Họ tên *"
                data-required="1"
                fdprocessedid="a76gtd"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Mật khẩu:</label>
            <div className="controls">
              <input
                type="text"
                name="PasswordHash"
                id="PasswordHash"
                placeholder="Mật khẩu *"
                data-required="1"
                fdprocessedid="z3vvfm"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Nhập lại mật khẩu:</label>
            <div className="controls">
              <input
                type="text"
                name="SecurityStamp"
                id="SecurityStamp"
                placeholder="Nhập lại mật khẩu *"
                data-required="1"
                fdprocessedid="3yaidc"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Email:</label>
            <div className="controls">
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Email *"
                data-required="1"
                fdprocessedid="wfx1q"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Giới tính:</label>
            <div className="controls">
              <label className="radio-ctn">
                <input type="radio" name="Sex" value="true" />
                <span className="checkmark"></span>
                <span>
                  <strong>Nam</strong>
                </span>
              </label>
              <label className="radio-ctn">
                <input type="radio" name="Sex" value="false" />
                <span className="checkmark"></span>
                <span>
                  <strong>Nữ</strong>
                </span>
              </label>
            </div>
          </div>
          <div className="form-controls">
            <label>Ngày tháng năm sinh:</label>
            <div className="controls">
              <input
                type="text"
                value=""
                name="UserBirthDate"
                id="UserBirthDate"
                placeholder="Ngày tháng năm sinh"
                fdprocessedid="i3aqtc"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Điện thoại:</label>
            <div className="controls">
              <input
                type="tel"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="Điện thoại *"
                data-required="1"
                fdprocessedid="yysib6"
              />
            </div>
          </div>
          {/* <div className="form-controls">
            <label>Địa chỉ:</label>
            <div className="controls">
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Địa chỉ *"
                data-required="1"
                fdprocessedid="806h4sl"
              />
            </div>
          </div>
          <div className="form-controls">
            <label>Tỉnh/Thành phố:</label>
            <div className="controls">
              <select
                name="SystemCityID"
                id="SystemCityID"
                placeholder="Tỉnh/Thành phố"
                fdprocessedid="pf0k4l"
              >
                <option value="">Chọn tỉnh/thành phố</option>
                <option value="1">Hà Nội</option>
                <option value="50">TP HCM</option>
                <option value="57">An Giang</option>
                <option value="49">Bà Rịa - Vũng Tàu</option>
                <option value="15">Bắc Giang</option>
                <option value="4">Bắc Kạn</option>
                <option value="62">Bạc Liêu</option>
                <option value="18">Bắc Ninh</option>
                <option value="53">Bến Tre</option>
                <option value="35">Bình Định</option>
                <option value="47">Bình Dương</option>
                <option value="45">Bình Phước</option>
                <option value="39">Bình Thuận</option>
                <option value="63">Cà Mau</option>
                <option value="59">Cần Thơ</option>
                <option value="3">Cao Bằng</option>
                <option value="32">Đà Nẵng</option>
                <option value="42">Đắk Lắk</option>
                <option value="43">Đắk Nông</option>
                <option value="7">Điện Biên</option>
                <option value="48">Đồng Nai</option>
                <option value="56">Đồng Tháp</option>
                <option value="41">Gia Lai</option>
                <option value="2">Hà Giang</option>
                <option value="23">Hà Nam</option>
                <option value="28">Hà Tĩnh</option>
                <option value="19">Hải Dương</option>
                <option value="20">Hải Phòng</option>
                <option value="60">Hậu Giang</option>
                <option value="11">Hoà Bình</option>
                <option value="21">Hưng Yên</option>
                <option value="37">Khánh Hòa</option>
                <option value="58">Kiên Giang</option>
                <option value="40">Kon Tum</option>
                <option value="8">Lai Châu</option>
                <option value="44">Lâm Đồng</option>
                <option value="13">Lạng Sơn</option>
                <option value="6">Lào Cai</option>
                <option value="51">Long An</option>
                <option value="24">Nam Định</option>
                <option value="27">Nghệ An</option>
                <option value="25">Ninh Bình</option>
                <option value="38">Ninh Thuận</option>
                <option value="16">Phú Thọ</option>
                <option value="36">Phú Yên</option>
                <option value="29">Quảng Bình</option>
                <option value="33">Quảng Nam</option>
                <option value="34">Quảng Ngãi</option>
                <option value="14">Quảng Ninh</option>
                <option value="30">Quảng Trị</option>
                <option value="61">Sóc Trăng</option>
                <option value="9">Sơn La</option>
                <option value="46">Tây Ninh</option>
                <option value="22">Thái Bình</option>
                <option value="12">Thái Nguyên</option>
                <option value="26">Thanh Hóa</option>
                <option value="31">Thừa Thiên Huế</option>
                <option value="52">Tiền Giang</option>
                <option value="54">Trà Vinh</option>
                <option value="5">Tuyên Quang</option>
                <option value="55">Vĩnh Long</option>
                <option value="17">Vĩnh Phúc</option>
                <option value="10">Yên Bái</option>
              </select>
            </div>
          </div>
          <div className="form-controls">
            <label>Quận/Huyện:</label>
            <div className="controls">
              <select
                id="SystemDistrictID"
                name="SystemDistrictID"
                placeholder="Quận/Huyện *"
                data-required="1"
                fdprocessedid="sdzs38i"
              >
                <option value="">Quận/Huyện</option>
              </select>
            </div>
          </div> */}
          <div className="form-controls">
          <div className="button-group">
              <button className="btn btn-submit" onClick={() => {}}>
                ĐĂNG KÝ TÀI KHOẢN
              </button>
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsOpenSignIn(true);
                  setIsOpenSignUp(false);
                }}
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
          <div className="form-controls">
            <div className="submit-controls">
              <p>
                <strong>
                  Bằng việc đăng kí này, bạn đã chấp nhận các chính sách của
                  Hoàng Hà Mobile
                </strong>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountSignUp