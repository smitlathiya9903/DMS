import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./sign-up.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onSignInClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="sign-up1">
      <div className="frame10">
        <div className="frame11">
          <div className="image-2-group">
            <img
              className="image-2-icon1"
              id="Sign Up Page Logo"
              alt=""
              src="/Sign Up Page Logo@2x.png"
            />
            <b className="dms1">DMS</b>
          </div>
        </div>
      </div>
      <div className="frame12">
        <div className="frame13">
          <div className="container-1">
            <div className="frame14">
              <div className="frame15">
                <div className="frame-child" />
                <div className="frame16">
                  <div className="container-2">
                    <b className="payment">Payment</b>
                    <img className="c-info-1" alt="" src="/c-info-1.svg" />
                    <div className="div">₹5000</div>
                    <div className="div1">₹1,0000</div>
                    <div className="div2">₹1,5000</div>
                    <div className="div3">0</div>
                    <img
                      className="line-chart-1"
                      alt=""
                      src="/sign up page line chart @2x.png"
                    />
                    <div className="may-01">May 01</div>
                    <div className="may-07">May 07</div>
                    <div className="may-03">May 03</div>
                    <div className="may-05">May 05</div>
                  </div>
                </div>
                <div className="frame17">
                  <div className="container-3">
                    <img
                      className="column-bar-chart-1"
                      alt=""
                      src="/column-bar-chart-1@2x.png"
                    />
                    <div className="reveneu">Reveneu</div>
                    <div className="div4">₹72,000</div>
                    <img className="arrow-up-1" alt="" src="/arrow-up-1.svg" />
                    <b className="b">25%</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame18">
              <div className="frame19">
                <b className="visual-business-statistics">
                  Visual Business Statistics
                </b>
              </div>
              <div className="frame20">
                <div className="frame21">
                  <div className="one-stop-solution">
                    One stop Solution for managementt understand various aspects
                    of business activity, trends, and patterns.
                  </div>
                  <div className="frame-item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame22">
        <div className="frame23">
          <b className="createdms-account-container">
            <p className="create">Create</p>
            <p className="create">
              <span className="dms2">DMS</span>
              <span>{` Account `}</span>
            </p>
          </b>
        </div>
      </div>
      <div className="frame24">
        <div className="frame25">
          <div className="already-have-an">Already have an account?</div>
        </div>
      </div>
      <div className="frame26">
        <div className="frame27">
          <Link className="sign-in1" to="/" onClick={onSignInClick}>
            Sign in
          </Link>
        </div>
      </div>
      <div className="frame28">
        <Button
          className="button-2"
          id="sign up button"
          variant="primary"
          href="/dashboard"
        >
          Sign up
        </Button>
      </div>
      <div className="frame29">
        <div className="textbox-2">
          <b className="password">Password</b>
          <Form className="textfield">
            <Form.Control
              type="password"
              id="enter password"
              placeholder="Enter at least 8+ characters "
            />
          </Form>
        </div>
      </div>
      <div className="frame30">
        <div className="textbox-3-parent">
          <div className="textbox-3">
            <b className="password">Phone Number</b>
            <Form className="textfield">
              <Form.Control
                type="tel"
                id="phone no"
                placeholder="                +91 123456789"
              />
            </Form>
          </div>
          <div className="frame31">
            <img className="image-1-icon" alt="" src="/India flag@2x.png" />
          </div>
          <img className="frame-icon" alt="" src="/frame.svg" />
          <img className="frame-inner" alt="" src="/line-1.svg" />
        </div>
      </div>
      <div className="frame32">
        <div className="textbox-2">
          <b className="password">Email</b>
          <Form className="textfield">
            <Form.Control
              type="email"
              id="sign up email input"
              placeholder="example@gmail.com"
            />
          </Form>
        </div>
      </div>
      <img className="sign-up-child" alt="" src="/line-2.svg" />
    </div>
  );
};

export default SignUp;
