import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


const RecordTable = () => {
  return (
    <div>
      <div className="container">
        <h1 className="heading">Read Records</h1>

        {/* Search and Button Controls  */}
        <div className="search-controls">
          <input
            type="text"
            placeholder="Type a name..."
            className="input-field"
          />
          <button className="btn btn-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Action Buttons  */}
        <div className="action-buttons">
          <button className="btn btn-delete">Delete Selected</button>
          <button className="btn btn-export">Export CSV</button>
          <button className="btn btn-create">Create Record</button>
        </div>

        {/* Table  */}
        <div className="table-container">
          <table className="record-table">
            <thead>
              <tr>
                {/* <th><input type="checkbox"></th>  */}
                <th>Select</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Pillow</td>
                <td>Sleeping well is important.</td>
                <td>$8.99</td>
                <td>Personal</td>
                <td className="btn-dle-edit">
                  <button className="btn btn-edit">
                    <i className="fa-solid fa-pen-to-square"></i>Edit
                  </button>
                  <button className="btn btn-delete">
                    <i className="fa-solid fa-trash"></i>Delete
                  </button>
                </td>
              </tr>
              {/* More rows here */}
            </tbody>
          </table>
        </div>

        {/* Pagination  */}
        <div className="pagination-controls">
          <div className="page-buttons">
            <MdKeyboardArrowLeft className="text-4xl shadow-md" />

            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <MdKeyboardArrowRight className="text-4xl shadow-md" />
          </div>

          {/* Page Navigation Input  */}
          <div className="page-nav">
            <input
              type="text"
              placeholder="Type page number..."
              className="input-field"
            />
            <button className="btn btn-go">Go</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordTable
