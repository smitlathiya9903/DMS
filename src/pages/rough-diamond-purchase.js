import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./rough-diamond-purchase.css";

const RoughDiamondPurchase = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard");
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
    <div className="rough-diamond-purchase2">
      <div className="textbox-132">
        <img className="search-icon2" alt="" src="/search.svg" />
        <div className="search2">Search...</div>
      </div>
      <div className="button-532">
        <div className="search2" />
        <img className="funnel-icon2" alt="" src="/funnel.svg" />
      </div>
      <div className="table-42">
        <div className="header2">
          <div className="frame103">
            <div className="date2">DATE</div>
          </div>
          <div className="frame104">
            <div className="weight1">WEIGHT</div>
          </div>
          <div className="frame105">
            <div className="value2">VALUE (₹)</div>
          </div>
          <div className="frame106">
            <div className="payment2">PAYMENT(₹)</div>
          </div>
          <div className="frame107">
            <div className="broker2">broker</div>
          </div>
          <div className="frame108">
            <div className="days">DAYS</div>
          </div>
          <div className="frame109">
            <div className="notes2">NOTES</div>
          </div>
          <div className="frame110">
            <div className="payment-date">PAYMENT DATE</div>
          </div>
          <div className="frame111" />
        </div>
        <div className="row4">
          <div className="frame112">
            <b className="b10">20/10/2022</b>
          </div>
          <div className="frame113">
            <div className="div32">758.50</div>
          </div>
          <div className="frame114">
            <div className="div33">₹7,91,000</div>
          </div>
          <div className="frame115">
            <div className="div34">₹7,91,000</div>
          </div>
          <div className="frame116">
            <div className="christopher-brown1">Christopher Brown</div>
          </div>
          <div className="frame117">
            <div className="div35">84</div>
          </div>
          <div className="frame118">
            <div className="tag3">
              <div className="frame119">
                <div className="in-progress3">In progress</div>
              </div>
            </div>
          </div>
          <div className="frame120">
            <div className="div36">04/12/2022</div>
          </div>
          <img className="frame-icon5" alt="" src="/frame.svg" />
        </div>
        <div className="row5">
          <div className="frame121">
            <b className="b10">01/03/2020</b>
          </div>
          <div className="frame122">
            <div className="div32">414.99</div>
          </div>
          <div className="frame123">
            <div className="div33">₹4,15,000</div>
          </div>
          <div className="frame124">
            <div className="div34">₹4,15,000</div>
          </div>
          <div className="frame125">
            <div className="christopher-brown1">Olivia Miller</div>
          </div>
          <div className="frame126">
            <div className="div35">48</div>
          </div>
          <div className="frame127">
            <div className="tag3">
              <div className="frame119">
                <div className="in-progress3">In progress</div>
              </div>
            </div>
          </div>
          <div className="frame129">
            <div className="div36">29/07/2022</div>
          </div>
          <img className="frame-icon6" alt="" src="/frame.svg" />
        </div>
        <div className="row4">
          <div className="frame112">
            <b className="b10">18/11/2021</b>
          </div>
          <div className="frame113">
            <div className="div32">956.67</div>
          </div>
          <div className="frame114">
            <div className="div33">₹8,51,000</div>
          </div>
          <div className="frame115">
            <div className="div34">₹8,51,000</div>
          </div>
          <div className="frame116">
            <div className="christopher-brown1">Brandon Taylor</div>
          </div>
          <div className="frame117">
            <div className="div35">8</div>
          </div>
          <div className="frame136">
            <div className="tag5">
              <div className="frame137">
                <div className="in-progress3">Done</div>
              </div>
            </div>
          </div>
          <div className="frame120">
            <div className="div36">27/11/2020</div>
          </div>
          <img className="frame-icon5" alt="" src="/frame.svg" />
        </div>
      </div>
      <b className="detailed-report2">Detailed report</b>
      <img className="file-text-22" alt="" src="/file-text-2.svg" />
      <div className="of-1452">1 - 10 of 145</div>
      <div className="button-542">
        <img className="search-icon2" alt="" src="/move-up.svg" />
        <div className="search2">Export</div>
      </div>
      <b className="rough-diamond-purchase3">Rough Diamond Purchase</b>
      <div className="button-552">
        <div className="in-progress3" />
        <img
          className="chevron-left-large2"
          alt=""
          src="/chevron-left-large.svg"
        />
      </div>
      <div className="button-622">
        <div className="in-progress3">1</div>
      </div>
      <div className="button-602">
        <div className="in-progress3">10</div>
      </div>
      <div className="button-632">
        <div className="in-progress3" />
        <img
          className="chevron-left-large2"
          alt=""
          src="/chevron-right-large.svg"
        />
      </div>
      <div className="button-562">
        <div className="in-progress3">2</div>
      </div>
      <div className="button-612">
        <div className="in-progress3">11</div>
      </div>
      <div className="button-572">
        <div className="in-progress3">3</div>
      </div>
      <div className="button-582">
        <div className="in-progress3">4</div>
      </div>
      <div className="button-592">
        <div className="in-progress3" />
        <img className="chevron-left-large2" alt="" src="/menu-5.svg" />
      </div>
      <b className="working-space2">Working space</b>
      <div className="companyexamplecom2">company@example.com</div>
      <img className="avatar-9-icon2" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg2">Sergey Goldberg</div>
      <div className="image-2-parent1">
        <img className="image-2-icon4" id="logo" alt="" src="/logo1.svg" />
        <b className="dms5">DMS</b>
      </div>
      <nav className="sidebar-menu-62" id="Navbar">
        <Link
          className="frame139"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon2"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard4">Dashboard</div>
        </Link>
        <a className="frame140" id="Rough Diamond Purchase Btn">
          <img
            className="layout-11-icon2"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon1.svg"
          />
          <b className="dashboard4">Rough Diamond Purchase</b>
        </a>
        <Link
          className="frame139"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon2"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard4">Sales</div>
        </Link>
        <Link
          className="frame139"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon2"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard4">Expenses</div>
        </Link>
        <Link
          className="frame139"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon2"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard4">Analysis</div>
        </Link>
        <Link
          className="frame139"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon2"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard4">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-7-container" id="Worker Section">
        <div className="sidebar-menu-72" id="Workers">
          <Link
            className="frame139"
            id="Worker 1"
            to="/workers-nisarg"
            onClick={onFrame6Click}
          >
            <img
              className="layout-11-icon2"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard4">Nisarg Makadiya</div>
          </Link>
          <Link
            className="frame139"
            id="Worker 2"
            to="/workers-smit"
            onClick={onFrame7Click}
          >
            <img
              className="layout-11-icon2"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard4">Smit Lathiya</div>
          </Link>
          <Link
            className="frame139"
            id="Worker 3"
            to="/workers-priyesh"
            onClick={onFrame8Click}
          >
            <img
              className="layout-11-icon2"
              id="Profile Icon"
              alt=""
              src="/Profile Icon.svg"
            />
            <div className="dashboard4">Priyesh Gadhiya</div>
          </Link>
        </div>
        <b className="worker2">Worker</b>
        <img className="add-circle-12" alt="" src="/add-circle-1.svg" />
      </div>
    </div>
  );
};

export default RoughDiamondPurchase;
