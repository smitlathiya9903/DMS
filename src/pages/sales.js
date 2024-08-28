import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sales.css";

const Sales = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/rough-diamond-purchase");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/expenses");
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
    <div className="sales2">
      <div className="button-601">
        <div className="done">10</div>
      </div>
      <b className="detailed-report1">Detailed report</b>
      <div className="button-621">
        <div className="done">1</div>
      </div>
      <div className="button-561">
        <div className="done">2</div>
      </div>
      <div className="of-1451">1 - 10 of 145</div>
      <div className="table-41">
        <div className="header1">
          <div className="frame58">
            <div className="date1">DATE</div>
          </div>
          <div className="frame59">
            <div className="weight">WEIGHT</div>
          </div>
          <div className="frame60">
            <div className="value1">VALUE (₹)</div>
          </div>
          <div className="frame61">
            <div className="payment1">PAYMENT(₹)</div>
          </div>
          <div className="frame62">
            <div className="broker1">broker</div>
          </div>
          <div className="frame63">
            <div className="status">STATUS</div>
          </div>
          <div className="frame64">
            <div className="receive-date">RECEIVE DATE</div>
          </div>
          <div className="frame65">
            <div className="notes1">NOTES</div>
          </div>
          <div className="frame66" />
        </div>
        <div className="row1">
          <div className="frame67">
            <b className="b7">20/10/2022</b>
          </div>
          <div className="frame68">
            <div className="div17">758.50</div>
          </div>
          <div className="frame69">
            <div className="div18">₹7,91,000</div>
          </div>
          <div className="frame70">
            <div className="div19">₹7,91,000</div>
          </div>
          <div className="frame71">
            <div className="christopher-brown">Christopher Brown</div>
          </div>
          <div className="frame72">
            <div className="tag">
              <div className="frame73">
                <div className="done">In progress</div>
              </div>
            </div>
          </div>
          <div className="frame74">
            <div className="div20">23/12/2021</div>
          </div>
          <div className="frame75">
            <div className="exercitation-com">Exercitation com</div>
          </div>
          <img className="frame-icon2" alt="" src="/frame.svg" />
        </div>
        <div className="row2">
          <div className="frame76">
            <b className="b7">01/03/2020</b>
          </div>
          <div className="frame77">
            <div className="div17">414.99</div>
          </div>
          <div className="frame78">
            <div className="div18">₹4,15,000</div>
          </div>
          <div className="frame79">
            <div className="div19">₹4,15,000</div>
          </div>
          <div className="frame80">
            <div className="christopher-brown">Olivia Miller</div>
          </div>
          <div className="frame81">
            <div className="tag">
              <div className="frame73">
                <div className="done">In progress</div>
              </div>
            </div>
          </div>
          <div className="frame83">
            <div className="div20">13/06/2022</div>
          </div>
          <div className="frame84">
            <div className="exercitation-com">Excepteur ipsum l</div>
          </div>
          <img className="frame-icon3" alt="" src="/frame.svg" />
        </div>
        <div className="row1">
          <div className="frame67">
            <b className="b7">18/11/2021</b>
          </div>
          <div className="frame68">
            <div className="div17">956.67</div>
          </div>
          <div className="frame69">
            <div className="div18">₹8,51,000</div>
          </div>
          <div className="frame70">
            <div className="div19">₹8,51,000</div>
          </div>
          <div className="frame71">
            <div className="christopher-brown">Brandon Taylor</div>
          </div>
          <div className="frame90">
            <div className="tag2">
              <div className="frame91">
                <div className="done">Done</div>
              </div>
            </div>
          </div>
          <div className="frame74">
            <div className="div20">26/06/2020</div>
          </div>
          <div className="frame75">
            <div className="exercitation-com">Ex dolor laborum u</div>
          </div>
          <img className="frame-icon2" alt="" src="/frame.svg" />
        </div>
      </div>
      <div className="button-531">
        <div className="text6" />
        <img className="funnel-icon1" alt="" src="/funnel.svg" />
      </div>
      <div className="button-581">
        <div className="done">4</div>
      </div>
      <img className="file-text-21" alt="" src="/file-text-2.svg" />
      <div className="button-571">
        <div className="done">3</div>
      </div>
      <b className="sales3">Sales</b>
      <div className="button-611">
        <div className="done">11</div>
      </div>
      <div className="textbox-131">
        <img className="search-icon1" alt="" src="/search.svg" />
        <div className="text6">Search...</div>
      </div>
      <div className="button-591">
        <div className="done" />
        <img className="menu-5-icon1" alt="" src="/menu-5.svg" />
      </div>
      <div className="button-541">
        <img className="search-icon1" alt="" src="/move-up.svg" />
        <div className="text6">Export</div>
      </div>
      <div className="button-631">
        <div className="done" />
        <img className="menu-5-icon1" alt="" src="/chevron-right-large.svg" />
      </div>
      <div className="button-551">
        <div className="done" />
        <img className="menu-5-icon1" alt="" src="/chevron-left-large.svg" />
      </div>
      <b className="working-space1">Working space</b>
      <div className="companyexamplecom1">company@example.com</div>
      <img className="avatar-9-icon1" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg1">Sergey Goldberg</div>
      <div className="frame-div">
        <img className="image-2-icon3" id="logo" alt="" src="/logo1.svg" />
        <b className="dms4">DMS</b>
      </div>
      <img className="sales-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-61" id="Navbar">
        <Link
          className="frame94"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon1"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard3">Dashboard</div>
        </Link>
        <Link
          className="frame94"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon1"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard3">Rough Diamond Purchase</div>
        </Link>
        <a className="frame96" id="Sales Btn">
          <img
            className="layout-11-icon1"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon1.svg"
          />
          <b className="dashboard3">Sales</b>
        </a>
        <Link
          className="frame94"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon1"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard3">Expenses</div>
        </Link>
        <Link
          className="frame94"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon1"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard3">Analysis</div>
        </Link>
        <Link
          className="frame94"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon1"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard3">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-group" id="Worker Section">
        <div className="sidebar-menu-71" id="Workers">
          <Link
            className="frame94"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame6Click}
          >
            <img
              className="layout-11-icon1"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard3">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame94"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame7Click}
          >
            <img
              className="layout-11-icon1"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard3">Smit Lathiya</div>
          </Link>
          <Link
            className="frame94"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame8Click}
          >
            <img
              className="layout-11-icon1"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard3">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker1">Worker</b>
        <img className="add-circle-11" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default Sales;
