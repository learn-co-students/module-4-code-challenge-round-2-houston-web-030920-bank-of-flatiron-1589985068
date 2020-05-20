import React from "react";

const Sort = (props) => {
    return(
        <select onClick={(e) => props.sortTrans(e.target.value)}>
            <option>Description</option>
            <option>Category</option>
        </select>
    )
}
export default Sort;
