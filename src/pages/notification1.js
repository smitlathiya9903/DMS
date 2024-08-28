import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./notification1.css";

const Notification1 = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/rough-diamond-purchase");
  }, [navigate]);

  const onFrame2Click = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/expenses");
  }, [navigate]);

  const onFrame4Click = useCallback(() => {
    navigate("/analysis-sales");
  }, [navigate]);

  const onFrame6Click = useCallback(() => {
    navigate("/workers-nisarg");
  }, [navigate]);

  const onFrame7Click = useCallback(() => {
    navigate("/workers-smit");
  }, [navigate]);

  const onFrame8Click = useCallback(() => {
    navigate("/workers-priyesh");
  }, [navigate]);

  return (
    <div className="notification">
      <div className="container-555">
        <b className="notification1">Notification</b>
        <div className="textbox-11">
          <div className="rough-diamond-purchase9">
            Rough Diamond Purchase Notifications
          </div>
        </div>
        <div className="textbox-111">
          <div className="rough-diamond-purchase9">Sales</div>
        </div>
        <div className="table-44">
          <div className="row13">
            <div className="frame255">
              <div className="payment-from-falana">
                Payment from falana bhai
              </div>
            </div>
            <div className="frame256">
              <div className="amount">Amount : ₹ 1,90,000</div>
            </div>
            <div className="frame257">
              <div className="date-01012024">Date : 01/01/2024</div>
            </div>
            <div className="frame258">
              <div className="days-remaining">10 Days Remaining</div>
            </div>
          </div>
        </div>
        <div className="table-45">
          <div className="row13">
            <div className="frame255">
              <div className="payment-from-falana">
                Payment from falana bhai
              </div>
            </div>
            <div className="frame256">
              <div className="amount">Amount : ₹ 1,90,000</div>
            </div>
            <div className="frame257">
              <div className="date-01012024">Date : 01/01/2024</div>
            </div>
            <div className="frame258">
              <div className="days-remaining">10 Days Remaining</div>
            </div>
          </div>
        </div>
        <div className="table-46" />
        <div className="table-47">
          <div className="row13">
            <div className="frame255">
              <div className="payment-from-falana">
                Payment from falana bhai
              </div>
            </div>
            <div className="frame256">
              <div className="amount">Amount : ₹ 1,90,000</div>
            </div>
            <div className="frame257">
              <div className="date-01012024">Date : 01/01/2024</div>
            </div>
            <div className="frame258">
              <div className="days-remaining">10 Days Remaining</div>
            </div>
          </div>
        </div>
        <div className="table-48">
          <div className="row13">
            <div className="frame255">
              <div className="payment-from-falana">
                Payment from falana bhai
              </div>
            </div>
            <div className="frame256">
              <div className="amount">Amount : ₹ 1,90,000</div>
            </div>
            <div className="frame257">
              <div className="date-01012024">Date : 01/01/2024</div>
            </div>
            <div className="frame258">
              <div className="days-remaining">10 Days Remaining</div>
            </div>
          </div>
        </div>
      </div>
      <b className="working-space7">Working space</b>
      <div className="companyexamplecom7">company@example.com</div>
      <img className="avatar-9-icon7" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg7">Sergey Goldberg</div>
      <div className="image-2-parent6">
        <img className="image-2-icon9" id="logo" alt="" src="/logo1.svg" />
        <b className="dms10">DMS</b>
      </div>
      <img className="notification-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-67" id="Navbar">
        <Link
          className="frame271"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon7"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard9">Dashboard</div>
        </Link>
        <Link
          className="frame271"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon7"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard9">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame271"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon7"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard9">Sales</div>
        </Link>
        <Link
          className="frame271"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon7"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard9">Expenses</div>
        </Link>
        <Link
          className="frame271"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon7"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard9">Analysis</div>
        </Link>
        <a className="frame276" id="Notifications Btn">
          <img
            className="layout-11-icon7"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon1.svg"
          />
          <b className="dashboard9">Notifications</b>
        </a>
      </nav>
      <div className="sidebar-menu-7-parent5" id="Worker Section">
        <div className="sidebar-menu-77" id="Workers">
          <Link
            className="frame271"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame6Click}
          >
            <img
              className="layout-11-icon7"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard9">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame271"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame7Click}
          >
            <img
              className="layout-11-icon7"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard9">Smit Lathiya</div>
          </Link>
          <Link
            className="frame271"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame8Click}
          >
            <img
              className="layout-11-icon7"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard9">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker7">Worker</b>
        <img className="add-circle-18" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default Notification1;
