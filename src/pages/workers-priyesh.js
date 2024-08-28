import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./workers-priyesh.css";

const WorkersPriyesh = () => {
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

  const onFrame5Click = useCallback(() => {
    navigate("/notification");
  }, [navigate]);

  const onFrame6Click = useCallback(() => {
    navigate("/workers-nisarg");
  }, [navigate]);

  const onFrame7Click = useCallback(() => {
    navigate("/workers-smit");
  }, [navigate]);

  return (
    <div className="workers-priyesh">
      <div className="container-583">
        <img className="avatar-19-icon2" alt="" src="/avatar-19@2x.png" />
        <div className="priyesh-gadhiya10">Priyesh Gadhiya</div>
        <div className="worker14">Worker</div>
        <img className="container-58-child2" alt="" src="/line-13.svg" />
        <img className="container-58-child3" alt="" src="/line-13.svg" />
        <img className="at-sign-2-12" alt="" src="/at-sign-2-1.svg" />
        <div className="priyesh88hillcom2">priyesh88@hill.com</div>
        <img className="phone-1-icon2" alt="" src="/phone-1.svg" />
        <div className="div127">91+ 8831239493</div>
        <div className="tags2">Tags</div>
        <div className="cuts-skills-and2">Cuts skills and types</div>
        <div className="tag-624">
          <div className="frame346">
            <div className="lead2">Lead</div>
          </div>
          <div className="frame347">
            <div className="lead2">Long-term</div>
          </div>
        </div>
        <div className="table-132">
          <div className="header6">
            <div className="frame348" />
            <div className="frame349">
              <div className="type2">{`Type `}</div>
            </div>
            <div className="frame350">
              <div className="slot-size2">Slot Size</div>
            </div>
            <div className="frame351">
              <div className="ass-date2">Ass. Date</div>
            </div>
            <div className="frame352">
              <div className="com-date2">Com. Date</div>
            </div>
            <div className="frame353">
              <div className="notes6">Notes</div>
            </div>
          </div>
          <div className="row21">
            <div className="frame354">
              <div className="checkbox5">
                <div className="frame355" />
              </div>
            </div>
            <div className="frame356">
              <div className="type2">Round</div>
            </div>
            <div className="frame357">
              <div className="div128">11</div>
            </div>
            <div className="frame358">
              <div className="div129">05/12/2021</div>
            </div>
            <div className="frame359">
              <div className="div130">07/11/2021</div>
            </div>
            <div className="frame360">
              <div className="consequat-aute-labore2">
                Consequat aute labore occaecat esse irur
              </div>
            </div>
          </div>
          <div className="row21">
            <div className="frame354">
              <div className="checkbox5">
                <div className="frame355" />
              </div>
            </div>
            <div className="frame356">
              <div className="type2">Peral Cut</div>
            </div>
            <div className="frame357">
              <div className="div128">78</div>
            </div>
            <div className="frame358">
              <div className="div129">13/10/2022</div>
            </div>
            <div className="frame359">
              <div className="div130">12/10/2022</div>
            </div>
            <div className="frame360">
              <div className="consequat-aute-labore2">
                Nisi velit fugiat sint esse deserunt consec
              </div>
            </div>
          </div>
        </div>
        <b className="worker15">Worker</b>
        <div className="tag-625">
          <div className="frame368">
            <div className="lead2">Round</div>
          </div>
          <div className="frame369">
            <div className="lead2">Peral</div>
          </div>
        </div>
      </div>
      <div className="textbox-139">
        <img className="search-icon9" alt="" src="/search.svg" />
        <div className="search9">Search...</div>
      </div>
      <b className="working-space10">Working space</b>
      <div className="companyexamplecom10">company@example.com</div>
      <img className="avatar-9-icon10" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg10">Sergey Goldberg</div>
      <div className="image-2-parent9">
        <img className="image-2-icon12" id="logo" alt="" src="/logo1.svg" />
        <b className="dms13">DMS</b>
      </div>
      <img className="workers-priyesh-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-610" id="Navbar">
        <Link
          className="frame370"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon10"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard12">Dashboard</div>
        </Link>
        <Link
          className="frame370"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon10"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard12">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame370"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon10"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard12">Sales</div>
        </Link>
        <Link
          className="frame370"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon10"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard12">Expenses</div>
        </Link>
        <Link
          className="frame370"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon10"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard12">Analysis</div>
        </Link>
        <Link
          className="frame370"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon10"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard12">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-710" id="Workers">
        <Link
          className="frame370"
          id="Worker 1"
          to="/workers-nisarg"
          onClick={onFrame6Click}
        >
          <img
            className="layout-11-icon10"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard12">Nisarg Makadiya</div>
        </Link>
        <Link
          className="frame370"
          id="Worker 2"
          to="/workers-smit"
          onClick={onFrame7Click}
        >
          <img
            className="layout-11-icon10"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard12">Smit Lathiya</div>
        </Link>
        <a className="frame378" id="Worker 3">
          <img
            className="layout-11-icon10"
            id="Profile Icon"
            alt=""
            src="/Profile Icon1.svg"
          />
          <b className="dashboard12">Priyesh Gadhiya</b>
        </a>
      </div>
      <b className="worker16">Worker</b>
      <img className="add-circle-111" alt="" src="/add-circle-1.svg" />
    </div>
  );
};

export default WorkersPriyesh;
