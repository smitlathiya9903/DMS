import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onFrame2Click = useCallback(() => {
    navigate("/rough-diamond-purchase");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onFrame4Click = useCallback(() => {
    navigate("/expenses");
  }, [navigate]);

  const onFrame5Click = useCallback(() => {
    navigate("/analysis-sales");
  }, [navigate]);

  const onFrame6Click = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  const onFrame7Click = useCallback(() => {
    navigate("/workers-nisarg");
  }, [navigate]);

  const onFrame8Click = useCallback(() => {
    navigate("/workers-smit");
  }, [navigate]);

  const onFrame9Click = useCallback(() => {
    navigate("/workers-priyesh");
  }, [navigate]);

  return (
    <div className="dashboard">
      <div className="container-55">
        <b className="dashboard1">Dashboard</b>
        <div className="container-56">
          <b className="overview">Overview</b>
          <div className="textbox-12">
            <div className="oct-25-">Oct 25 - Oct 30</div>
            <img className="calendar-icon" alt="" src="/calendar.svg" />
          </div>
          <div className="container-57">
            <b className="b1">₹99,24,000</b>
            <b className="turnover">Turnover</b>
            <div className="button-50">
              <div className="text" />
              <img className="analytics-icon" alt="" src="/analytics.svg" />
            </div>
            <b className="b2">5.39%</b>
            <img
              className="arrow-drop-up-large-7"
              alt=""
              src="/arrow-drop-up-large-7.svg"
            />
            <div className="period-of-change">period of change</div>
            <div className="column-bar-chart-7">
              <div className="chart">
                <div className="rectangle" />
                <div className="rectangle1" />
                <div className="rectangle2" />
                <div className="rectangle3" />
                <div className="rectangle" />
                <div className="rectangle5" />
                <div className="rectangle6" />
              </div>
            </div>
          </div>
          <div className="container-58">
            <b className="b3">₹3,92,218</b>
            <b className="profit">Profit</b>
            <div className="button-51">
              <div className="text">₹</div>
            </div>
            <b className="b2">5.39%</b>
            <img
              className="arrow-drop-up-large-7"
              alt=""
              src="/arrow-drop-up-large-7.svg"
            />
            <div className="period-of-change">period of change</div>
            <div className="column-bar-chart-8">
              <div className="chart1">
                <div className="rectangle7" />
                <div className="rectangle8" />
                <div className="rectangle9" />
                <div className="rectangle10" />
                <div className="rectangle11" />
                <div className="rectangle12" />
                <div className="rectangle13" />
              </div>
            </div>
          </div>
          <div className="container-59">
            <b className="b1">298</b>
            <b className="in-progress">In Progress</b>
            <div className="button-52">
              <div className="text" />
              <img className="analytics-icon" alt="" src="/circle-09.svg" />
            </div>
            <b className="b2">6.84%</b>
            <img
              className="arrow-drop-up-large-7"
              alt=""
              src="/arrow-drop-up-large-7.svg"
            />
            <div className="period-of-change">period of change</div>
            <div className="column-bar-chart-8">
              <div className="chart2">
                <div className="rectangle14" />
                <div className="rectangle15" />
                <div className="rectangle6" />
                <div className="rectangle13" />
                <div className="rectangle9" />
                <div className="rectangle19" />
                <div className="rectangle20" />
              </div>
            </div>
          </div>
          <img className="layout-11-2" alt="" src="/layout-11-2.svg" />
        </div>
        <div className="textbox-13">
          <img className="calendar-icon" alt="" src="/search.svg" />
          <div className="oct-25-">Search...</div>
        </div>
        <div className="container-60">
          <b className="detailed-report">Detailed report</b>
          <img className="file-text-2" alt="" src="/file-text-2.svg" />
          <div className="button-53">
            <div className="oct-25-" />
            <img className="funnel-icon" alt="" src="/funnel.svg" />
          </div>
          <div className="button-54">
            <img className="calendar-icon" alt="" src="/move-up.svg" />
            <div className="oct-25-">Export</div>
          </div>
          <div className="container-61">
            <div className="of-145">1 - 10 of 145</div>
            <div className="button-55">
              <div className="text3" />
              <img
                className="chevron-left-large"
                alt=""
                src="/chevron-left-large.svg"
              />
            </div>
            <div className="button-56">
              <div className="text3">2</div>
            </div>
            <div className="button-57">
              <div className="text3">3</div>
            </div>
            <div className="button-58">
              <div className="text3">4</div>
            </div>
            <div className="button-59">
              <div className="text3" />
              <img className="chevron-left-large" alt="" src="/menu-5.svg" />
            </div>
            <div className="button-60">
              <div className="text3">10</div>
            </div>
            <div className="button-61">
              <div className="text3">11</div>
            </div>
            <div className="button-62">
              <div className="text3">1</div>
            </div>
            <div className="button-63">
              <div className="text3" />
              <img
                className="chevron-left-large"
                alt=""
                src="/chevron-right-large.svg"
              />
            </div>
            <div className="table-4">
              <div className="row">
                <div className="frame33">
                  <div className="checkbox">
                    <div className="frame34" />
                  </div>
                </div>
                <div className="frame35">
                  <b className="sales">Sales</b>
                </div>
                <div className="frame36">
                  <div className="div12">₹8,10,000</div>
                </div>
                <div className="frame37">
                  <div className="marta-diaz">Marta Diaz</div>
                </div>
                <div className="frame38">
                  <div className="marta-diaz">25/11/2023</div>
                </div>
                <div className="frame39">
                  <div className="nulla-occaeca">Nulla occaeca</div>
                </div>
                <img className="frame-icon1" alt="" src="/frame.svg" />
              </div>
              <div className="header">
                <div className="frame40" />
                <div className="frame41">
                  <div className="department">
                    <span className="department1">department</span>
                    {` `}
                  </div>
                </div>
                <div className="frame42">
                  <div className="value">VALUE (₹)</div>
                </div>
                <div className="frame43">
                  <div className="broker">broker</div>
                </div>
                <div className="frame43">
                  <div className="date">DATE</div>
                </div>
                <div className="frame45">
                  <div className="notes">NOTES</div>
                </div>
                <div className="frame46" />
              </div>
              <div className="checkbox-14">
                <div className="frame34" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame48" id="Side Bar">
        <b className="working-space">Working space</b>
        <div className="companyexamplecom">company@example.com</div>
        <img className="avatar-9-icon" alt="" src="/avatar-9@2x.png" />
        <div className="sergey-goldberg">Sergey Goldberg</div>
        <div className="image-2-container">
          <img className="image-2-icon2" id="logo" alt="" src="/logo@2x.png" />
          <b className="dms3">DMS</b>
        </div>
        <img className="line-icon" alt="" src="/line-7.svg" />
        <nav className="sidebar-menu-6" id="navbar">
          <a className="frame49" id="Dashboard Btn">
            <img
              className="layout-11-icon"
              id="Dashboard Btn Icon"
              alt=""
              src="/Dashboard Btn Icon.svg"
            />
            <b className="rough-diamond-purchase">Dashboard</b>
          </a>
          <Link
            className="frame50"
            id="Rough Diamond Purchase Btn"
            to="/rough-diamond-purchase"
            onClick={onFrame2Click}
          >
            <img
              className="layout-11-icon"
              id="Rough Diamond Purchase Btn Icon"
              alt=""
              src="/Rough Diamond Purchase Btn Icon.svg"
            />
            <div className="rough-diamond-purchase">Rough Diamond Purchase</div>
          </Link>
          <Link
            className="frame50"
            id="Sales Btn"
            to="/sales"
            onClick={onFrame3Click}
          >
            <img
              className="layout-11-icon"
              id="Sales Btn Icon"
              alt=""
              src="/Sales Btn Icon.svg"
            />
            <div className="rough-diamond-purchase">Sales</div>
          </Link>
          <Link
            className="frame50"
            id="Expenses Btn"
            to="/expenses"
            onClick={onFrame4Click}
          >
            <img
              className="layout-11-icon"
              id="Expenses Btn Icon"
              alt=""
              src="/Expenses Btn Icon.svg"
            />
            <div className="rough-diamond-purchase">Expenses</div>
          </Link>
          <Link
            className="frame50"
            id="Analysis Btn"
            to="/analysis-sales"
            onClick={onFrame5Click}
          >
            <img
              className="layout-11-icon"
              id="Analysis Btn Icon"
              alt=""
              src="/Analysis Btn Icon.svg"
            />
            <div className="rough-diamond-purchase">Analysis</div>
          </Link>
          <Link
            className="frame50"
            id="Notifications Btn"
            to="/notification"
            onClick={onFrame6Click}
          >
            <img
              className="layout-11-icon"
              id="Notifications Btn Icon"
              alt=""
              src="/Notifications Btn Icon.svg"
            />
            <div className="rough-diamond-purchase">Notifications</div>
          </Link>
        </nav>
        <div className="sidebar-menu-7-parent" id="Worker Section">
          <nav className="sidebar-menu-7" id="Workers">
            <Link
              className="frame50"
              id="Worker 1"
              to="/workers-nisarg"
              onClick={onFrame7Click}
            >
              <img
                className="layout-11-icon"
                id="Profile Icon"
                alt=""
                src="/Profile Icon.svg"
              />
              <div className="rough-diamond-purchase">Nisarg Makadiya</div>
            </Link>
            <Link
              className="frame50"
              id="Worker 2"
              to="/workers-smit"
              onClick={onFrame8Click}
            >
              <img
                className="layout-11-icon"
                id="Profile Icon"
                alt=""
                src="/Profile Icon.svg"
              />
              <div className="rough-diamond-purchase">Smit Lathiya</div>
            </Link>
            <Link
              className="frame50"
              id="Worker 3"
              to="/workers-priyesh"
              onClick={onFrame9Click}
            >
              <img
                className="layout-11-icon"
                id="Profile Icon"
                alt=""
                src="/Profile Icon.svg"
              />
              <div className="rough-diamond-purchase">Priyesh Gadhiya</div>
            </Link>
          </nav>
          <b className="worker">Worker</b>
          <img className="add-circle-1" alt="" src="/add-circle-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
