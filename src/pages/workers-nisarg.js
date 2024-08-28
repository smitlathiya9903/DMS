import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./workers-nisarg.css";

const WorkersNisarg = () => {
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

  const onFrame7Click = useCallback(() => {
    navigate("/workers-smit");
  }, [navigate]);

  const onFrame8Click = useCallback(() => {
    navigate("/workers-priyesh");
  }, [navigate]);

  return (
    <div className="workers-nisarg">
      <div className="container-581">
        <img className="avatar-19-icon" alt="" src="/avatar-19@2x.png" />
        <div className="nisarg-makadiya8">Nisarg Makadiya</div>
        <div className="worker8">Worker</div>
        <img className="container-58-child" alt="" src="/line-13.svg" />
        <img className="container-58-item" alt="" src="/line-13.svg" />
        <img className="at-sign-2-1" alt="" src="/at-sign-2-1.svg" />
        <div className="priyesh88hillcom">priyesh88@hill.com</div>
        <img className="phone-1-icon" alt="" src="/phone-1.svg" />
        <div className="div113">91+ 8831239493</div>
        <div className="tags">Tags</div>
        <div className="cuts-skills-and">Cuts skills and types</div>
        <div className="tag-62">
          <div className="frame280">
            <div className="lead">Lead</div>
          </div>
          <div className="frame281">
            <div className="lead">Long-term</div>
          </div>
        </div>
        <div className="table-13">
          <div className="header4">
            <div className="frame282" />
            <div className="frame283">
              <div className="type">{`Type `}</div>
            </div>
            <div className="frame284">
              <div className="slot-size">Slot Size</div>
            </div>
            <div className="frame285">
              <div className="ass-date">Ass. Date</div>
            </div>
            <div className="frame286">
              <div className="com-date">Com. Date</div>
            </div>
            <div className="frame287">
              <div className="notes4">Notes</div>
            </div>
          </div>
          <div className="row17">
            <div className="frame288">
              <div className="checkbox1">
                <div className="frame289" />
              </div>
            </div>
            <div className="frame290">
              <div className="type">Round</div>
            </div>
            <div className="frame291">
              <div className="div114">11</div>
            </div>
            <div className="frame292">
              <div className="div115">05/12/2021</div>
            </div>
            <div className="frame293">
              <div className="div116">07/11/2021</div>
            </div>
            <div className="frame294">
              <div className="consequat-aute-labore">
                Consequat aute labore occaecat esse irur
              </div>
            </div>
          </div>
          <div className="row17">
            <div className="frame288">
              <div className="checkbox1">
                <div className="frame289" />
              </div>
            </div>
            <div className="frame290">
              <div className="type">Peral Cut</div>
            </div>
            <div className="frame291">
              <div className="div114">78</div>
            </div>
            <div className="frame292">
              <div className="div115">13/10/2022</div>
            </div>
            <div className="frame293">
              <div className="div116">12/10/2022</div>
            </div>
            <div className="frame294">
              <div className="consequat-aute-labore">
                Nisi velit fugiat sint esse deserunt consec
              </div>
            </div>
          </div>
        </div>
        <b className="worker9">Worker</b>
        <div className="tag-621">
          <div className="frame302">
            <div className="lead">Round</div>
          </div>
          <div className="frame303">
            <div className="lead">Peral</div>
          </div>
        </div>
      </div>
      <div className="textbox-137">
        <img className="search-icon7" alt="" src="/search.svg" />
        <div className="search7">Search...</div>
      </div>
      <b className="working-space8">Working space</b>
      <div className="companyexamplecom8">company@example.com</div>
      <img className="avatar-9-icon8" alt="" src="/avatar-9@2x.png" />
      <div className="sergey-goldberg8">Sergey Goldberg</div>
      <div className="image-2-parent7">
        <img className="image-2-icon10" id="logo" alt="" src="/logo1.svg" />
        <b className="dms11">DMS</b>
      </div>
      <img className="workers-nisarg-child" alt="" src="/line-7.svg" />
      <nav className="sidebar-menu-68" id="Navbar">
        <Link
          className="frame304"
          id="Dashboard Btn"
          to="/dashboard"
          onClick={onFrameClick}
        >
          <img
            className="layout-11-icon8"
            id="Dashboard Btn Icon"
            alt=""
            src="/Dashboard Btn Icon1.svg"
          />
          <div className="dashboard10">Dashboard</div>
        </Link>
        <Link
          className="frame304"
          id="Rough Diamond Purchase Btn"
          to="/rough-diamond-purchase"
          onClick={onFrame1Click}
        >
          <img
            className="layout-11-icon8"
            id="Rough Diamond Purchase Btn Icon"
            alt=""
            src="/Rough Diamond Purchase Btn Icon.svg"
          />
          <div className="dashboard10">Rough Diamond Purchase</div>
        </Link>
        <Link
          className="frame304"
          id="Sales Btn"
          to="/sales"
          onClick={onFrame2Click}
        >
          <img
            className="layout-11-icon8"
            id="Sales Btn Icon"
            alt=""
            src="/Sales Btn Icon.svg"
          />
          <div className="dashboard10">Sales</div>
        </Link>
        <Link
          className="frame304"
          id="Expenses Btn"
          to="/expenses"
          onClick={onFrame3Click}
        >
          <img
            className="layout-11-icon8"
            id="Expenses Btn Icon"
            alt=""
            src="/Expenses Btn Icon.svg"
          />
          <div className="dashboard10">Expenses</div>
        </Link>
        <Link
          className="frame304"
          id="Analysis Btn"
          to="/analysis-sales"
          onClick={onFrame4Click}
        >
          <img
            className="layout-11-icon8"
            id="Analysis Btn Icon"
            alt=""
            src="/Analysis Btn Icon.svg"
          />
          <div className="dashboard10">Analysis</div>
        </Link>
        <Link
          className="frame304"
          id="Notifications Btn"
          to="/notification"
          onClick={onFrame5Click}
        >
          <img
            className="layout-11-icon8"
            id="Notifications Btn Icon"
            alt=""
            src="/Notifications Btn Icon.svg"
          />
          <div className="dashboard10">Notifications</div>
        </Link>
      </nav>
      <div className="sidebar-menu-78" id="Workers">
        <a className="frame310" id="Worker 1">
          <img
            className="layout-11-icon8"
            id="Profile Icon"
            alt=""
            src="/Profile Icon1.svg"
          />
          <b className="dashboard10">Nisarg Makadiya</b>
        </a>
        <Link
          className="frame304"
          id="Worker 2"
          to="/workers-smit"
          onClick={onFrame7Click}
        >
          <img
            className="layout-11-icon8"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard10">Smit Lathiya</div>
        </Link>
        <Link
          className="frame304"
          id="Worker 3"
          to="/workers-priyesh"
          onClick={onFrame8Click}
        >
          <img
            className="layout-11-icon8"
            id="Profile Icon"
            alt=""
            src="/Profile Icon.svg"
          />
          <div className="dashboard10">Priyesh Gadhiya</div>
        </Link>
      </div>
      <b className="worker10">Worker</b>
      <img className="add-circle-19" alt="" src="/add-circle-1.svg" />
    </div>
  );
};

export default WorkersNisarg;
