import { useFormStatus } from "react-dom";
import Button from "./Button";
import Loading from "./Loading";
import { useActionState, useState } from "react";

const App = () => {
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  // const x = useFormStatus()
const [state, formAction, isPending] = useActionState(submitHandler, {})
const [form, setForm]= useState({email: "", password: ""})
  async function submitHandler(prev, formData) {
    console.log(formData);
    
    const s = formData.get("email")
    console.log(s);
   
   
    
    
  
    await sleep(2000);
    // console.log(e, p);
  }

  return (
    <div className="main-container">
      {/* <form action={submitHandler}> */}
      <form action={formAction}>
        <div className="join">
          <input
            className="input join-item"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="join">
          <input
            className="input join-item"
            name="password"
            type="text"
            placeholder="Password"
          />
          <button className="btn join-item rounded-r-full">Register</button>
        </div>
        <button>{isPending ? "pending is true" : "pending is false"}</button>
      {/* <Button />
      <Loading /> */}
      </form>
    </div>
  );
};

export default App;
