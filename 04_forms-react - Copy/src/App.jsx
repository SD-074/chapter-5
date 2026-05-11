import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const App = () => {

  const [dairies, setDairies] = useState([])


  function saveToLs(dairy) {
    // is daireis in ls:
    const lsData = readLs()
    if (lsData) {
      lsData.push(dairy);

      localStorage.setItem("dairies", JSON.stringify(lsData));
      setDairies(i => lsData)
    } else {
      localStorage.setItem("dairies", JSON.stringify([dairy]));
      setDairies(i => [dairy])

    }
  }

  const [state, formAction, isPending] = useFormState(submitHandler, {});

  async function submitHandler(prev, formData) {
    const title = formData.get("title");
    const desc = formData.get("description");

    saveToLs({title: title, description: desc})
    

  }

function readLs (){
  const result = JSON.parse(localStorage.getItem("dairies"));
  return result
}


useEffect(() => {
  const data = readLs()

  if (data) {
    
      setDairies(data)
    
  }
}, [])

  return (
    <div className="main-container">
      {dairies.length > 0 && dairies.map(dairy => <p>{dairy.title}</p>)}
      <form action={formAction}>
        <label className="input">
          <span className="label">Title: </span>
          <input name="title" type="text" />
        </label>

        <label className="input">
          <span className="label">Date:</span>
          <input name="date" type="date" />
        </label>
        <label className="input">
          <span className="label">https://</span>
          <input name="url" type="url" />
        </label>

        <textarea
          className="textarea"
          name="description"
          placeholder="Description"
        />

        <input type="submit" value={"Submit"} className="btn btn-primary" />
      </form>
    </div>
  );
};

export default App;
