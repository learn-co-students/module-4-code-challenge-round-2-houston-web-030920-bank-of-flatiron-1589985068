import React from "react";

const Search = (props) => {

  const handleChange = (e) => {
    console.log("Searching...")
    props.setSearchTerm(e)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
