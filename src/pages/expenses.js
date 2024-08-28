import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./expenses.css";

const Expenses = () => {
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

  const onFrame4Click = useCallback(() => {
    navigate("/analysis-sales");
  }, [navigate]);

  const onFrame5Click = useCallback(() => {
    navigate("/notification");
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
    <div className="expenses3">
      <div className="container-551">
        <b className="expenses4">Expenses</b>
        <div className="textbox-133">
          <img className="search-icon3" alt="" src="/search.svg" />
          <div className="search3">Search...</div>
        </div>
        <div className="container-601">
          <b className="detailed-report3">Detailed report</b>
          <img className="file-text-23" alt="" src="/file-text-2.svg" />
          <div className="button-533">
            <div className="search3" />
            <img className="funnel-icon3" alt="" src="/funnel.svg" />
          </div>
          <div className="button-543">
            <img className="search-icon3" alt="" src="/move-up.svg" />
            <div className="search3">Export</div>
          </div>
          <div className="container-611">
            <div className="table-43">
              <div className="header3">
                <div className="frame148">
                  <div className="date3">DATE</div>
                </div>
                <div className="frame149">
                  <div className="value3">VALUE (₹)</div>
                </div>
                <div className="frame150">
                  <div className="tag6">Tag</div>
                </div>
                <div className="frame148">
                  <div className="date3">NOTES</div>
                </div>
              </div>
              <div className="row7">
                <div className="frame152">
                  <div className="salary-to-nisarg">09/21/2023</div>
                </div>
                <div className="frame153">
                  <div className="div54">₹30,000</div>
                </div>
                <div className="frame154">
                  <div className="tag7">
                    <div className="frame155">
                      <div className="salary">Salary</div>
                    </div>
                  </div>
                </div>
                <div className="frame156">
                  <b className="salary-to-nisarg">Salary to nisarg..</b>
                </div>
              </div>
              <div className="row8">
                <div className="frame152">
                  <div className="salary-to-nisarg">04/25/2023</div>
                </div>
                <div className="frame153">
                  <div className="div54">₹60,521</div>
                </div>
                <div className="frame159">
                  <div className="tag8">
                    <div className="frame160">
                      <div className="salary">Machine Reparing</div>
                    </div>
                  </div>
                </div>
                <div className="frame156">
                  <b className="salary-to-nisarg">Spend to Mechanic</b>
                </div>
              </div>
              <img className="add-circle-13" alt="" src="/add-circle-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <b className="working-space3">Working space</b>
      <div className="companyexamplecom3">company@example.com</div>
      <img className="avatar-9-icon3" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg3">Sergey Goldberg</div>
      <div className="image-2-parent2">
        <img className="image-2-icon5" id="logo" alt="" src="/logo1.svg" />
        <b className="dms6">DMS</b>
      </div>
      <img className="expenses-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-63" id="Navbar">
        <Link
          className="frame162"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon3"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard5">Dashboard</div>
        </Link>
        <Link
          className="frame162"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon3"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard5">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame162"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon3"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard5">Sales</div>
        </Link>
        <a className="frame165" id="Expenses Btn">
          <img
            className="layout-11-icon3"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon1.svg"
          />
          <b className="dashboard5">Expenses</b>
        </a>
        <Link
          className="frame162"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon3"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard5">Analysis</div>
        </Link>
        <Link
          className="frame162"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon3"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard5">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-parent1" id="Worker Section">
        <div className="sidebar-menu-73" id="Workers">
          <Link
            className="frame162"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame6Click}
          >
            <img
              className="layout-11-icon3"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard5">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame162"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame7Click}
          >
            <img
              className="layout-11-icon3"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard5">Smit Lathiya</div>
          </Link>
          <Link
            className="frame162"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame8Click}
          >
            <img
              className="layout-11-icon3"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard5">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker3">Worker</b>
        <img className="add-circle-14" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default Expenses;
