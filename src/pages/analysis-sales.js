import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./analysis-sales.css";

const AnalysisSales = () => {
  const navigate = useNavigate();

  const onFrame1Click = useCallback(() => {
    navigate("/analysis-purchase");
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
    <div className="analysis-sales">
      <div className="container-552">
        <b className="analysis4">Analysis</b>
        <div className="textbox-134">
          <img className="arrow-up-icon" alt="" src="/search.svg" />
          <div className="purchase">Search...</div>
        </div>
        <div className="header-menu-4">
          <a className="frame171" id="Analysis Sales Btn">
            <b className="purchase">Sales</b>
          </a>
          <Link
            className="frame172"
            id="Analysis Purchase Btn"
            to="/analysis-purchase"
            onClick={onFrame1Click}
          >
            <div className="purchase">Purchase</div>
          </Link>
          <Link
            className="frame173"
            id="Analysis Expenses Btn"
            to="/analysis-expances"
            onClick={onFrame2Click}
          >
            <div className="purchase">Expances</div>
          </Link>
        </div>
        <div className="container-72">
          <b className="broker-payment-due">Broker Payment Due%</b>
          <img
            className="column-bar-chart-71"
            alt=""
            src="/column-bar-chart-7.svg"
          />
          <div className="james">James</div>
          <div className="olivia">Olivia</div>
          <div className="miller">Miller</div>
          <div className="div57">0</div>
          <div className="div58">5</div>
          <div className="div59">15</div>
          <div className="div60">20</div>
          <div className="john-clark">John Clark</div>
        </div>
        <div className="container-77">
          <b className="broker-sales">Broker Sales</b>
          <div className="div61">20</div>
          <div className="div62">60</div>
          <div className="div63">80</div>
          <div className="div64">120</div>
          <div className="div65">100</div>
          <div className="div66">140</div>
          <div className="column-bar-chart-81">
            <img className="group-icon" alt="" src="/group.svg" />
            <div className="chart3">
              <div className="rectangle21" />
              <div className="rectangle22" />
              <div className="rectangle23" />
              <div className="rectangle24" />
              <div className="rectangle25" />
              <div className="rectangle26" />
              <div className="rectangle27" />
              <div className="rectangle28" />
              <div className="rectangle29" />
              <div className="rectangle30" />
              <div className="rectangle31" />
              <div className="rectangle32" />
            </div>
            <div className="frame174">
              <div className="frame175">
                <div className="ellipse" />
                <div className="purchase">Prince</div>
              </div>
              <div className="frame176">
                <div className="ellipse1" />
                <div className="purchase"> Circle</div>
              </div>
              <div className="frame177">
                <div className="ellipse2" />
                <div className="purchase">Square</div>
              </div>
            </div>
          </div>
          <div className="div67">40</div>
          <div className="john-clark1">John Clark</div>
          <div className="miller1">Miller</div>
          <div className="olivia1">Olivia</div>
          <div className="james1">James</div>
        </div>
        <div className="container-45">
          <div className="line-chart-25">
            <img className="group-icon1" alt="" src="/group.svg" />
            <img className="group-icon1" alt="" src="/frame.svg" />
            <img className="frame-icon9" alt="" src="/frame.svg" />
            <div className="frame178">
              <div className="frame179">
                <div className="ellipse" />
                <div className="purchase">Current Year</div>
              </div>
              <div className="frame180">
                <div className="ellipse4" />
                <div className="purchase">Last Year</div>
              </div>
            </div>
          </div>
          <div className="div68">100</div>
          <div className="div69">200</div>
          <div className="div70">300</div>
          <div className="div71">400</div>
          <div className="feb">Feb</div>
          <div className="jan">Jan</div>
          <div className="mar">Mar</div>
          <div className="apr">Apr</div>
          <div className="may">May</div>
          <div className="jun">Jun</div>
          <div className="jul">Jul</div>
          <div className="aug">Aug</div>
          <div className="sep">Sep</div>
          <div className="oct">Oct</div>
          <div className="nov">Nov</div>
          <div className="dec">Dec</div>
          <div className="div72">0</div>
        </div>
        <div className="text15" />
        <div className="container-89">
          <div className="container-90">
            <div className="container-91">
              <b className="b13">₹</b>
            </div>
            <div className="on-time-payment">Sales</div>
            <div className="k">₹520k</div>
            <img className="container-90-child" alt="" src="/line-46.svg" />
            <div className="total-sales-compared">
              Total Sales compared to 60 days ago
            </div>
            <div className="tag-55">
              <div className="frame181">
                <img className="arrow-up-icon" alt="" src="/arrow-up.svg" />
                <div className="div73">25%</div>
              </div>
            </div>
            <img className="line-chart-15" alt="" src="/line-chart-15.svg" />
          </div>
          <div className="container-92">
            <img className="container-93-icon" alt="" src="/container-93.svg" />
            <div className="on-time-payment">{`On Time Payment `}</div>
            <div className="k">84%</div>
            <div className="tag-56">
              <div className="frame182">
                <img className="arrow-up-icon" alt="" src="/arrow-down.svg" />
                <div className="div73">25%</div>
              </div>
            </div>
            <img className="container-90-child" alt="" src="/line-47.svg" />
            <div className="total-payment-compared">
              Total Payment compared to 60 days ago
            </div>
          </div>
          <div className="container-94">
            <img className="container-93-icon" alt="" src="/container-95.svg" />
            <div className="avg-due">Avg Due Time</div>
            <div className="k">36 days</div>
            <img className="container-94-child" alt="" src="/line-48.svg" />
            <div className="total-sales-compared">
              Avg Due time compared to 60 days ago
            </div>
            <div className="tag-56">
              <div className="frame182">
                <img className="arrow-up-icon" alt="" src="/arrow-up.svg" />
                <div className="div73">25%</div>
              </div>
            </div>
            <img className="line-chart-17" alt="" src="/line-chart-17.svg" />
          </div>
          <div className="container-96">
            <div className="container-97">
              <b className="b13">₹</b>
            </div>
            <div className="on-time-payment">Payment Due</div>
            <div className="k">₹82k</div>
            <div className="tag-56">
              <div className="frame182">
                <img className="arrow-up-icon" alt="" src="/arrow-down.svg" />
                <div className="div73">25%</div>
              </div>
            </div>
            <img className="container-96-child" alt="" src="/line-49.svg" />
            <div className="total-sales-compared">
              Total Due compared to 60 days ago
            </div>
            <img className="line-chart-17" alt="" src="/line-chart-18.svg" />
          </div>
        </div>
        <div className="container-119">
          <div className="pie-chart-5">
            <img className="chart-icon" alt="" src="/chart.svg" />
            <div className="frame185">
              <div className="frame186">
                <div className="ellipse" />
                <div className="purchase">Circle</div>
              </div>
              <div className="frame176">
                <div className="ellipse4" />
                <div className="purchase">Prince</div>
              </div>
              <div className="frame177">
                <div className="ellipse7" />
                <div className="purchase">Square</div>
              </div>
            </div>
          </div>
          <div className="total">{`Total `}</div>
          <b className="b15">290</b>
        </div>
      </div>
      <b className="working-space4">Working space</b>
      <div className="companyexamplecom4">company@example.com</div>
      <img className="avatar-9-icon4" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg4">Sergey Goldberg</div>
      <div className="image-2-parent3">
        <img className="image-2-icon6" id="logo" alt="" src="/logo1.svg" />
        <b className="dms7">DMS</b>
      </div>
      <img className="analysis-sales-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-64" id="Navbar">
        <Link
          className="frame189"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon4"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard6">Dashboard</div>
        </Link>
        <Link
          className="frame189"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon4"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard6">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame189"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon4"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard6">Sales</div>
        </Link>
        <Link
          className="frame189"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame6Click}
        >
          <img
            className="layout-11-icon4"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard6">Expenses</div>
        </Link>
        <a className="frame193" id="Analysis Btn">
          <img
            className="layout-11-icon4"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon1.svg"
          />
          <b className="dashboard6">Analysis</b>
        </a>
        <Link
          className="frame189"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame8Click}
        >
          <img
            className="layout-11-icon4"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard6">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-parent2" id="Worker Section">
        <div className="sidebar-menu-74" id="Workers">
          <Link
            className="frame189"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame9Click}
          >
            <img
              className="layout-11-icon4"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard6">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame189"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame10Click}
          >
            <img
              className="layout-11-icon4"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard6">Smit Lathiya</div>
          </Link>
          <Link
            className="frame189"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame11Click}
          >
            <img
              className="layout-11-icon4"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard6">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker4">Worker</b>
        <img className="add-circle-15" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default AnalysisSales;
