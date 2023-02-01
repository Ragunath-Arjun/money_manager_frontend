import React from "react";

function Date() {
  return (
    <>
      <label for="start">
        <b>Start date:</b>
      </label>

      <input
        type="date"
        id="start"
        name="trip-start"
        min="2018-01-01"
        max="2023-12-31"
      ></input>

      <label for="start" className="ml-3">
        <b>End date:</b>
      </label>

      <input type="date" min="2018-01-01" max="2023-12-31"></input>
      <button
        type="button"
        onClick={() => {
          alert("No data found");
        }}
        className="btn btn-info ml-5"
      >
        Get Data
      </button>
    </>
  );
}

export default Date;
