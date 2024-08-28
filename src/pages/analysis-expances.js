import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./analysis-expances.css";

const AnalysisExpances = () => {
  const navigate = useNavigate();

  const onHeaderMenu4Click = useCallback(() => {
    navigate("/analysis-sales");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/analysis-purchase");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrame4Click = useCallback(() => {
    navigate("/rough-diamond-purchase");
  }, [navigate]);

  const onFrame5Click = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onFrame6Click = useCallback(() => {
    navigate("/expenses");
  }, [navigate]);

  const onFrame8Click = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  const onFrame9Click = useCallback(() => {
    navigate("/workers-nisarg");
  }, [navigate]);

  const onFrame10Click = useCallback(() => {
    navigate("/workers-smit");
  }, [navigate]);

  const onFrame11Click = useCallback(() => {
    navigate("/workers-priyesh");
  }, [navigate]);

  return (
    <div className="analysis-expances">
      <div className="container-554">
        <b className="analysis8">Analysis</b>
        <div className="textbox-136">
          <img className="search-icon6" alt="" src="/search.svg" />
          <div className="maintence">Search...</div>
        </div>
        <div className="header-menu-42" onClick={onHeaderMenu4Click}>
          <Link
            className="frame225"
            id="Analysis Sales Btn"
            to="/analysis-sales"
          >
            <div className="maintence">Sales</div>
          </Link>
          <Link
            className="frame226"
            id="Analysis Purchase Btn"
            to="/analysis-purchase"
            onClick={onFrame1Click}
          >
            <div className="maintence">Purchase</div>
          </Link>
          <a className="frame227" id="Analysis Expenses Btn">
            <b className="maintence">Expances</b>
          </a>
        </div>
        <div className="container-122">
          <div className="salary1">Salary</div>
          <div className="div103">{`₹2,25,000 `}</div>
          <div className="of-350000">{`Of ₹3,50,000 `}</div>
          <div className="pie-chart-10">
            <img className="chart-icon2" alt="" src="/chart.svg" />
            <div className="frame228">
              <div className="frame229">
                <div className="ellipse16" />
                <div className="maintence">Salary</div>
              </div>
              <div className="frame230">
                <div className="ellipse17" />
                <div className="maintence">Maintence</div>
              </div>
              <div className="frame231">
                <div className="ellipse18" />
                <div className="maintence">Stationary</div>
              </div>
              <div className="frame232">
                <div className="ellipse19" />
                <div className="maintence">Others</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-103">
          <b className="monthly-expenses">{`Monthly Expenses `}</b>
          <div className="jan1">Jan</div>
          <div className="feb1">Feb</div>
          <div className="march1">March</div>
          <div className="april">April</div>
          <div className="june1">June</div>
          <div className="may2">May</div>
          <img
            className="column-bar-chart-25"
            alt=""
            src="/column-bar-chart-25.svg"
          />
          <div className="div104">50,000</div>
          <div className="div105">35,000</div>
          <div className="div106">25,000</div>
          <div className="div107">15,000</div>
          <div className="div108">0</div>
          <b className="rupees">{`₹Rupees `}</b>
        </div>
        <div className="container-110">
          <b className="expence">Expence</b>
          <div className="column-bar-chart-27">
            <img className="group-icon4" alt="" src="/group.svg" />
            <div className="chart8">
              <div className="rectangle66" />
              <div className="rectangle67" />
              <div className="rectangle68" />
              <div className="rectangle69" />
              <div className="rectangle70" />
              <div className="rectangle71" />
              <div className="rectangle72" />
              <div className="rectangle73" />
              <div className="rectangle74" />
              <div className="rectangle75" />
              <div className="rectangle76" />
              <div className="rectangle77" />
              <div className="rectangle78" />
              <div className="rectangle79" />
              <div className="rectangle80" />
              <div className="rectangle81" />
              <div className="rectangle82" />
              <div className="rectangle83" />
              <div className="rectangle84" />
              <div className="rectangle85" />
              <div className="rectangle86" />
              <div className="rectangle87" />
              <div className="rectangle88" />
              <div className="rectangle89" />
            </div>
            <div className="frame233">
              <div className="frame234">
                <div className="ellipse16" />
                <div className="maintence">Salary</div>
              </div>
              <div className="frame235">
                <div className="ellipse17" />
                <div className="maintence">Stationary</div>
              </div>
              <div className="frame236">
                <div className="ellipse22" />
                <div className="maintence">Maintenence</div>
              </div>
              <div className="frame237">
                <div className="ellipse19" />
                <div className="maintence">Others</div>
              </div>
            </div>
          </div>
          <div className="div109">100</div>
          <div className="div110">50</div>
          <div className="div111">0</div>
          <div className="jan2">Jan</div>
          <div className="feb2">Feb</div>
          <div className="march2">March</div>
          <div className="april1">April</div>
          <div className="june2">June</div>
          <div className="may3">May</div>
        </div>
        <div className="container-112">
          <b className="new-infra-funds">New Infra Funds</b>
          <img
            className="column-bar-chart-28"
            alt=""
            src="/column-bar-chart-28.svg"
          />
          <div className="k4">200K</div>
          <div className="k5">150K</div>
          <div className="k6">125K</div>
          <div className="k7">100K</div>
          <div className="div112">0</div>
          <div className="q1">Q1</div>
          <div className="k8">75K</div>
          <div className="k9">50K</div>
          <div className="q2">Q2</div>
          <div className="q3">Q3</div>
          <div className="q4">Q4</div>
          <div className="k10">225K</div>
        </div>
        <div className="container-772">
          <div className="weekly-expenses">{`Weekly Expenses `}</div>
          <b className="b22">₹3,604</b>
        </div>
        <div className="container-78">
          <div className="weekly-expenses">Monthly Expences</div>
          <b className="b23">₹29,437</b>
        </div>
        <div className="container-79">
          <div className="total-expenses">{`Total Expenses `}</div>
          <b className="b24">₹3,50,000</b>
          <div className="button-48">
            <div className="maintence">Detail</div>
            <img
              className="search-icon6"
              alt=""
              src="/chevron-right-large.svg"
            />
          </div>
        </div>
        <div className="container-123">
          <div className="recent-expences">Recent Expences</div>
          <div className="table-18">
            <div className="row9">
              <div className="frame238">
                <div className="priyeshs-salary">Priyesh's Salary</div>
              </div>
              <div className="frame239">
                <div className="button">
                  <div className="details">Details</div>
                </div>
              </div>
            </div>
            <div className="row10">
              <div className="frame240">
                <div className="priyeshs-salary">Stationary</div>
              </div>
              <div className="frame241">
                <div className="button">
                  <div className="details">Details</div>
                </div>
              </div>
            </div>
            <div className="row10">
              <div className="frame240">
                <div className="priyeshs-salary">Maintenence</div>
              </div>
              <div className="frame241">
                <div className="button">
                  <div className="details">Details</div>
                </div>
              </div>
            </div>
            <div className="row10">
              <div className="frame240">
                <div className="priyeshs-salary">Smit's Salary</div>
              </div>
              <div className="frame241">
                <div className="button">
                  <div className="details">Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className="working-space6">Working space</b>
      <div className="companyexamplecom6">company@example.com</div>
      <img className="avatar-9-icon6" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg6">Sergey Goldberg</div>
      <div className="image-2-parent5">
        <img className="image-2-icon8" id="logo" alt="" src="/logo1.svg" />
        <b className="dms9">DMS</b>
      </div>
      <img className="analysis-expances-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-66" id="Navbar">
        <Link
          className="frame246"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon6"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard8">Dashboard</div>
        </Link>
        <Link
          className="frame246"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon6"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard8">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame246"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon6"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard8">Sales</div>
        </Link>
        <Link
          className="frame246"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame6Click}
        >
          <img
            className="layout-11-icon6"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard8">Expenses</div>
        </Link>
        <a className="frame250" id="Analysis Btn">
          <img
            className="layout-11-icon6"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon1.svg"
          />
          <b className="dashboard8">Analysis</b>
        </a>
        <Link
          className="frame246"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame8Click}
        >
          <img
            className="layout-11-icon6"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard8">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-parent4" id="Worker Section">
        <div className="sidebar-menu-76" id="Workers">
          <Link
            className="frame246"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame9Click}
          >
            <img
              className="layout-11-icon6"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard8">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame246"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame10Click}
          >
            <img
              className="layout-11-icon6"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard8">Smit Lathiya</div>
          </Link>
          <Link
            className="frame246"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame11Click}
          >
            <img
              className="layout-11-icon6"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard8">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker6">Worker</b>
        <img className="add-circle-17" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default AnalysisExpances;
