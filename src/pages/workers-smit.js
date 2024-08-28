import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./workers-smit.css";

const WorkersSmit = () => {
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

  const onFrame8Click = useCallback(() => {
    navigate("/workers-priyesh");
  }, [navigate]);

  return (
    <div className="workers-smit">
      <div className="container-582">
        <img className="avatar-19-icon1" alt="" src="/avatar-19@2x.png" />
        <div className="smit-lathiya9">Smit Lathiya</div>
        <div className="worker11">Worker</div>
        <img className="container-58-inner" alt="" src="/line-13.svg" />
        <img className="container-58-child1" alt="" src="/line-13.svg" />
        <img className="at-sign-2-11" alt="" src="/at-sign-2-1.svg" />
        <div className="priyesh88hillcom1">priyesh88@hill.com</div>
        <img className="phone-1-icon1" alt="" src="/phone-1.svg" />
        <div className="div120">91+ 8831239493</div>
        <div className="tags1">Tags</div>
        <div className="cuts-skills-and1">Cuts skills and types</div>
        <div className="tag-622">
          <div className="frame313">
            <div className="lead1">Lead</div>
          </div>
          <div className="frame314">
            <div className="lead1">Long-term</div>
          </div>
        </div>
        <div className="table-131">
          <div className="header5">
            <div className="frame315" />
            <div className="frame316">
              <div className="type1">{`Type `}</div>
            </div>
            <div className="frame317">
              <div className="slot-size1">Slot Size</div>
            </div>
            <div className="frame318">
              <div className="ass-date1">Ass. Date</div>
            </div>
            <div className="frame319">
              <div className="com-date1">Com. Date</div>
            </div>
            <div className="frame320">
              <div className="notes5">Notes</div>
            </div>
          </div>
          <div className="row19">
            <div className="frame321">
              <div className="checkbox3">
                <div className="frame322" />
              </div>
            </div>
            <div className="frame323">
              <div className="type1">Round</div>
            </div>
            <div className="frame324">
              <div className="div121">11</div>
            </div>
            <div className="frame325">
              <div className="div122">05/12/2021</div>
            </div>
            <div className="frame326">
              <div className="div123">07/11/2021</div>
            </div>
            <div className="frame327">
              <div className="consequat-aute-labore1">
                Consequat aute labore occaecat esse irur
              </div>
            </div>
          </div>
          <div className="row19">
            <div className="frame321">
              <div className="checkbox3">
                <div className="frame322" />
              </div>
            </div>
            <div className="frame323">
              <div className="type1">Peral Cut</div>
            </div>
            <div className="frame324">
              <div className="div121">78</div>
            </div>
            <div className="frame325">
              <div className="div122">13/10/2022</div>
            </div>
            <div className="frame326">
              <div className="div123">12/10/2022</div>
            </div>
            <div className="frame327">
              <div className="consequat-aute-labore1">
                Nisi velit fugiat sint esse deserunt consec
              </div>
            </div>
          </div>
        </div>
        <b className="worker12">Worker</b>
        <div className="tag-623">
          <div className="frame335">
            <div className="lead1">Round</div>
          </div>
          <div className="frame336">
            <div className="lead1">Peral</div>
          </div>
        </div>
      </div>
      <div className="textbox-138">
        <img className="search-icon8" alt="" src="/search.svg" />
        <div className="search8">Search...</div>
      </div>
      <b className="working-space9">Working space</b>
      <div className="companyexamplecom9">company@example.com</div>
      <img className="avatar-9-icon9" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg9">Sergey Goldberg</div>
      <div className="image-2-parent8">
        <img className="image-2-icon11" id="logo" alt="" src="/logo1.svg" />
        <b className="dms12">DMS</b>
      </div>
      <img className="workers-smit-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-69" id="Navbar">
        <Link
          className="frame337"
          id="Dashboard"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon9"
            id="Dashboard Btn"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard11">Dashboard</div>
        </Link>
        <Link
          className="frame337"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon9"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard11">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame337"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon9"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard11">Sales</div>
        </Link>
        <Link
          className="frame337"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon9"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard11">Expenses</div>
        </Link>
        <Link
          className="frame337"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon9"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard11">Analysis</div>
        </Link>
        <Link
          className="frame337"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon9"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard11">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-79" id="Workers">
        <Link
          className="frame337"
          id="Worker 1"
          to="/workers-nisarg"
          onClick={onFrame6Click}
        >
          <img
            className="layout-11-icon9"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard11">Nisarg Makadiya</div>
        </Link>
        <a className="frame344" id="Worker 2">
          <img
            className="layout-11-icon9"
            id="Profile Icon"
            alt=""
            src="/Profile Icon1.svg"
          />
          <b className="dashboard11">Smit Lathiya</b>
        </a>
        <Link
          className="frame337"
          id="Worker 3"
          to="/workers-priyesh"
          onClick={onFrame8Click}
        >
          <img
            className="layout-11-icon9"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard11">Priyesh Gadhiya</div>
        </Link>
      </div>
      <b className="worker13">Worker</b>
      <img className="add-circle-110" alt="" src="/add-circle-1.svg" />
    </div>
  );
};

export default WorkersSmit;
