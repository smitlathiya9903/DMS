import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./analysis-purchase.css";

const AnalysisPurchase = () => {
  const navigate = useNavigate();

  const onHeaderMenu4Click = useCallback(() => {
    navigate("/analysis-sales");
  }, [navigate]);

  const onFrame2Click = useCallback(() => {
    navigate("/analysis-expances");
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
    <div className="analysis-purchase">
      <div className="container-553">
        <b className="analysis6">Analysis</b>
        <div className="textbox-135">
          <img className="search-icon5" alt="" src="/search.svg" />
          <div className="past-year">Search...</div>
        </div>
        <div className="header-menu-41" onClick={onHeaderMenu4Click}>
          <Link
            className="frame198"
            id="Analysis Sales Btn"
            to="/analysis-sales"
          >
            <div className="past-year">Sales</div>
          </Link>
          <a className="frame199" id="Analysis Purchase Btn">
            <b className="past-year">Purchase</b>
          </a>
          <Link
            className="frame200"
            id="Analysis Expenses Btn"
            to="/analysis-expances"
            onClick={onFrame2Click}
          >
            <div className="past-year">Expances</div>
          </Link>
        </div>
        <div className="container-88">
          <div className="container-98">
            <div className="container-99">
              <div className="column-bar-chart-12">
                <div className="chart4">
                  <div className="rectangle33" />
                  <div className="rectangle34" />
                  <div className="rectangle35" />
                  <div className="rectangle36" />
                  <div className="rectangle37" />
                  <div className="rectangle38" />
                  <div className="rectangle39" />
                </div>
              </div>
              <div className="purchase-of-this">Purchase of this Year</div>
              <div className="div78">₹72,00,000</div>
              <img className="arrow-up-2" alt="" src="/arrow-up-2.svg" />
              <b className="b16">25%</b>
            </div>
            <div className="div79">₹5,00,000</div>
            <div className="div80">₹7,50,000</div>
            <div className="div81">₹10,00,000</div>
            <b className="purchase2">Purchase</b>
            <div className="div82">₹2,50,000</div>
            <div className="div83">0</div>
            <div className="line-chart-19">
              <img className="group-icon2" alt="" src="/group.svg" />
              <img className="group-icon2" alt="" src="/frame.svg" />
              <img className="frame-icon11" alt="" src="/frame.svg" />
              <div className="frame201">
                <div className="frame202">
                  <div className="ellipse8" />
                  <div className="past-year">Current Year</div>
                </div>
                <div className="frame203">
                  <div className="ellipse9" />
                  <div className="past-year">Past Year</div>
                </div>
              </div>
            </div>
            <div className="container-100">
              <div className="column-bar-chart-13">
                <div className="chart5">
                  <div className="rectangle40" />
                  <div className="rectangle41" />
                  <div className="rectangle42" />
                  <div className="rectangle43" />
                  <div className="rectangle44" />
                  <div className="rectangle45" />
                  <div className="rectangle46" />
                </div>
              </div>
              <div className="purchase-of-this">Purchase of this Month</div>
              <div className="div78">₹6,00,000</div>
              <img className="arrow-up-2" alt="" src="/arrow-down.svg" />
              <b className="b17">5%</b>
            </div>
            <div className="container-101">
              <div className="column-bar-chart-13">
                <div className="chart6">
                  <div className="rectangle47" />
                  <div className="rectangle48" />
                  <div className="rectangle49" />
                  <div className="rectangle50" />
                  <div className="rectangle51" />
                  <div className="rectangle52" />
                  <div className="rectangle53" />
                </div>
              </div>
              <div className="yoy-growth">YoY Growth</div>
              <div className="div78">25%</div>
              <img className="arrow-up-2" alt="" src="/arrow-up.svg" />
              <b className="b17">5%</b>
            </div>
            <div className="container-1191">
              <div className="pie-chart-51">
                <img className="chart-icon1" alt="" src="/chart.svg" />
                <div className="frame204">
                  <div className="frame205">
                    <div className="ellipse8" />
                    <div className="past-year">Best</div>
                  </div>
                  <div className="frame206">
                    <div className="ellipse9" />
                    <div className="past-year">Avg</div>
                  </div>
                  <div className="frame207">
                    <div className="ellipse12" />
                    <div className="past-year">Low</div>
                  </div>
                </div>
              </div>
              <div className="total1">{`Total `}</div>
              <b className="b19">242</b>
            </div>
            <div className="div86">0</div>
            <div className="mar1">Mar</div>
            <div className="jun1">Jun</div>
            <div className="sep1">Sep</div>
            <div className="dec1">Dec</div>
          </div>
        </div>
        <div className="container-721">
          <b className="purchase-quentity">Purchase Quentity</b>
          <img
            className="column-bar-chart-72"
            alt=""
            src="/column-bar-chart-7.svg"
          />
          <div className="march">March</div>
          <div className="apr1">Apr</div>
          <div className="may1">May</div>
          <div className="div87">30</div>
          <div className="div88">60</div>
          <div className="div89">90</div>
          <div className="div90">110</div>
          <div className="june">June</div>
        </div>
        <div className="container-771">
          <b className="purchase-from-broker">Purchase from Broker</b>
          <div className="div91">20</div>
          <div className="div92">60</div>
          <div className="div93">80</div>
          <div className="div94">120</div>
          <div className="div95">100</div>
          <div className="div96">140</div>
          <div className="column-bar-chart-82">
            <img className="group-icon3" alt="" src="/group.svg" />
            <div className="chart7">
              <div className="rectangle54" />
              <div className="rectangle55" />
              <div className="rectangle56" />
              <div className="rectangle57" />
              <div className="rectangle58" />
              <div className="rectangle59" />
              <div className="rectangle60" />
              <div className="rectangle61" />
              <div className="rectangle62" />
              <div className="rectangle63" />
              <div className="rectangle64" />
              <div className="rectangle65" />
            </div>
            <div className="frame208">
              <div className="frame205">
                <div className="ellipse8" />
                <div className="past-year">Best</div>
              </div>
              <div className="frame210">
                <div className="ellipse14" />
                <div className="past-year"> Avg</div>
              </div>
              <div className="frame207">
                <div className="ellipse15" />
                <div className="past-year">Low</div>
              </div>
            </div>
          </div>
          <div className="div97">40</div>
          <div className="john-clark2">John Clark</div>
          <div className="miller2">Miller</div>
          <div className="olivia2">Olivia</div>
          <div className="james2">James</div>
        </div>
        <div className="container-891">
          <div className="container-901">
            <div className="container-911">
              <b className="b20">₹</b>
            </div>
            <div className="on-time-payments">Purchase</div>
            <div className="k2">₹694k</div>
            <img className="container-90-item" alt="" src="/line-46.svg" />
            <div className="total-purchase-compared">
              Total Purchase compared to 60days ago
            </div>
            <div className="tag-551">
              <div className="frame212">
                <img className="search-icon5" alt="" src="/arrow-up.svg" />
                <div className="div98">25%</div>
              </div>
            </div>
          </div>
          <div className="container-921">
            <img
              className="container-93-icon1"
              alt=""
              src="/container-93.svg"
            />
            <div className="on-time-payments">On Time Payments</div>
            <div className="div99">95%</div>
            <div className="tag-561">
              <div className="frame213">
                <img className="search-icon5" alt="" src="/arrow-down.svg" />
                <div className="div98">25%</div>
              </div>
            </div>
            <img className="container-92-item" alt="" src="/line-46.svg" />
            <div className="total-purchase-compared">
              Total PP compared to 60 days ago
            </div>
            <img className="line-chart-16" alt="" src="/line-chart-16.svg" />
          </div>
          <div className="container-941">
            <img
              className="container-93-icon1"
              alt=""
              src="/container-95.svg"
            />
            <div className="on-time-payments">Avg Due Time</div>
            <div className="days2">45 days</div>
            <img className="container-94-item" alt="" src="/line-48.svg" />
            <div className="total-purchase-compared">
              Avg Due time compared to 60 days ago
            </div>
            <div className="tag-561">
              <div className="frame213">
                <img className="search-icon5" alt="" src="/arrow-up.svg" />
                <div className="div98">25%</div>
              </div>
            </div>
          </div>
          <div className="container-961">
            <div className="container-971">
              <b className="b20">₹</b>
            </div>
            <div className="on-time-payments">Payment Due</div>
            <div className="k3">₹250k</div>
            <div className="tag-561">
              <div className="frame213">
                <img className="search-icon5" alt="" src="/arrow-down.svg" />
                <div className="div98">25%</div>
              </div>
            </div>
            <img className="container-96-item" alt="" src="/line-48.svg" />
            <div className="total-purchase-compared">
              Total Due compared to 60 days ago
            </div>
          </div>
        </div>
      </div>
      <b className="working-space5">Working space</b>
      <div className="companyexamplecom5">company@example.com</div>
      <img className="avatar-9-icon5" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg5">Sergey Goldberg</div>
      <div className="image-2-parent4">
        <img className="image-2-icon7" id="logo" alt="" src="/logo1.svg" />
        <b className="dms8">DMS</b>
      </div>
      <img className="analysis-purchase-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-65" id="Navbar">
        <Link
          className="frame216"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon5"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard7">Dashboard</div>
        </Link>
        <Link
          className="frame216"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon5"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard7">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame216"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon5"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard7">Sales</div>
        </Link>
        <Link
          className="frame216"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame6Click}
        >
          <img
            className="layout-11-icon5"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard7">Expenses</div>
        </Link>
        <a className="frame220" id="Analysis Btn">
          <img
            className="layout-11-icon5"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon1.svg"
          />
          <b className="dashboard7">Analysis</b>
        </a>
        <Link
          className="frame216"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame8Click}
        >
          <img
            className="layout-11-icon5"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard7">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-parent3" id="Worker Section">
        <div className="sidebar-menu-75" id="Workers">
          <Link
            className="frame216"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame9Click}
          >
            <img
              className="layout-11-icon5"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard7">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame216"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame10Click}
          >
            <img
              className="layout-11-icon5"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard7">Smit Lathiya</div>
          </Link>
          <Link
            className="frame216"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame11Click}
          >
            <img
              className="layout-11-icon5"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard7">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker5">Worker</b>
        <img className="add-circle-16" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default AnalysisPurchase;
