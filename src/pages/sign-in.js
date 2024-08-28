import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./sign-in.css";

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButton3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="sign-in" data-animate-on-scroll>
      <img
        className="container-1-icon"
        id="sign in image"
        alt=""
        src="/sign in page image@2x.png"
      />
      <div className="frame">
        <div className="image-2-parent" id="logo">
          <img
            className="image-2-icon"
            id="Sign In Page Logo"
            alt=""
            src="/Sign In Page Logo@2x.png"
          />
          <b className="dms">DMS</b>
        </div>
        <div className="container-5" id="sign in form">
          <div className="frame1">
            <div className="frame2">
              <b className="welcome-back">{`Welcome Back `}</b>
              <img
                className="statistics-1-icon"
                id="welcome back suffix icon"
                alt=""
                src="/statistics-1 icon@2x.png"
              />
            </div>
            <div className="log-in-your">Log in your account</div>
          </div>
          <div className="frame3">
            <form className="frame4" id="sign in form">
              <Form className="textbox-5">
                <Form.Control
                  type="email"
                  id="email input"
                  placeholder="example@gmail.com"
                />
              </Form>
              <Form className="textbox-5">
                <Form.Control
                  type="password"
                  id="password input"
                  placeholder="password@123"
                />
              </Form>
            </form>
            <div className="frame5">
              <div className="frame6">
                <div className="frame7">
                  <div className="checkbox-1">
                    <div className="frame8">
                      <Form.Check
                        className="frame-formcheck"
                        id="remember me"
                      />
                      <div className="remember-me">Remember me</div>
                    </div>
                  </div>
                  <div className="forgot-password">Forgot password?</div>
                </div>
                <Button
                  className="button-3"
                  id="sign in"
                  variant="primary"
                  href="/dashboard"
                  onClick={onButton3Click}
                >
                  Sign In
                </Button>
              </div>
              <div className="frame9">
                <div className="dont-have-an">Don't have an account?</div>
                <Link
                  className="sign-up"
                  id="sign up"
                  to="/sign-up"
                  onClick={onSignUpClick}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
