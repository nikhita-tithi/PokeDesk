import React from "react";

function Search(props) {
  const handleChange = (e) => {
    let value = e.target.value;
    props.handleTerm(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        style={{ width: "1000px", margin: "10px", marginLeft: "10%" }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
