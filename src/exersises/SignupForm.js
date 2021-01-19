import React from "react";

const Form = () => {
  const [email, setEmail] = React.useState(null);
  const [password1, setPassword1] = React.useState(null);
  const [password2, setPassword2] = React.useState(null);
  const [emailSent, setEmailSent] = React.useState(null);
  const [isPasswordMatched, setIsPasswordMached] = React.useState(true);
  const [displayData, setDisplay] = React.useState("block");


  const hanelSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.elements[0].value;
    const password1 = e.target.elements[1].value;
    const password2 = e.target.elements[2].value;

    setEmail((prevEmail) => {
      emailValue ? setEmailSent(true) : setEmailSent(false);
      return emailValue;
    });

    setPassword1((prevPass) => {
      password1 !== password2 && setIsPasswordMached(false);
      return password1;
    });

    setPassword2((prevPass) => {
      password1 !== password2 && setIsPasswordMached(false);
      return password2;
    });
  };
  const handelDelete = () => {
    setDisplay("none");
  };

  return (
    <>
      <form onSubmit={hanelSubmit}>
        <input placeholder="email"></input>
        {emailSent === false && <p>please enter email!</p>}

        <input placeholder="password" type="password"></input>

        <input placeholder="confirm password" type="password"></input>
        {!isPasswordMatched && <p>passwords are'nt equal!</p>}

        <button type="submit">submit</button>
      </form>
      {isPasswordMatched && emailSent && (
        <div style={{ display: displayData }}>
          <p>your email: {email}</p>
          <p>your password: {password1}</p>
          <button onClick={handelDelete}>delete my data</button>
        </div>
      )}
    </>
  );
};
export default Form;
