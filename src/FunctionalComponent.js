import React, { useState } from "react";
import "./functional.scss";

export default props => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    needsTesting: false
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = ({ target }) => {
    setUserData(state => ({ ...state, [target.name]: target.value }));
  };
  const handleSubmit = () => {
    const { name, address } = userData;
    if (name && address) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false); // set submitting flag for submit button
        alert(
          "(functional Component): Application submitted to backend check console for details"
        );
        console.log("data sent to backend: ", userData); // this is what we want to send
        // this is how we would do that
        // fetch("https://myAwesomeAPI/register", {
        //   method: "post",
        //   body: JSON.stringify(userData)
        // }).then(response => {console.log(response)});
      }, 3000);
    } else {
      alert("error: Name and address are required");
    }
  };
  return (
    <div className="functional">
      <h1>hooks example</h1>
      <label>
        Name:
        <input
          name="name"
          placeholder="aqui va tu nombre"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Adress:
        <input
          name="address"
          placeholder="tu direccion aqui"
          value={userData.address}
          onChange={handleInputChange}
        />
      </label>

      <div className={`loader ${submitting ? "show" : "hide"}`}>Loading...</div>
      <button onClick={handleSubmit} disabled={submitting}>
        {submitting ? "Submitting . . ." : "Submit"}
      </button>
    </div>
  );
};
