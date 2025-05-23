import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <>
      <div className="my-3" id="filter">
        <button
          className="btn btn-warning mb-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasFilter"
        >
          <FaFilter className="me-2" />Filter
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasFilter"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Filter Options</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
