import React from "react";
const Admin = (props) => {
    return (
        <>
        <h1>Admin Component</h1>
        year:{props.match.params.year}
        month:{props.match.params.month}
        </>
    )
}
export default Admin;