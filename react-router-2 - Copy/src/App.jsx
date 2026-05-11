import { Link, Route, Routes, useLocation, useNavigate } from "react-router";
import Todo from "./components/Todo";
import Navbar from "./layout/Navbar";
import About from "./components/About";
import { useFormStatus } from "react-dom";

const App = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate()

  function clickHandler () {
    navigate("/5")
  }

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const submitAction = async (formData) => {
    // easy access to daya
    // clear input value
      
 
    
   
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // const validationErrors = validate({ name, email, message });
await sleep(3000)
    
console.log(pending);

      console.log('Submitted:', { name, email, message });
      alert('Form submitted successfully!');
    
  };







  return (
    <div className="main-container">
      


          <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <form action={submitAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Leia Organa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="leia@rebellion.org"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Tell us how we can help..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>



      <Navbar />
      
      <hr />
        <button className="btn btn-secondary" onClick={clickHandler}>I move people</button>
      <hr />
      <h2 className="text-5xl">Your path is: {pathname}</h2>
      <Routes>
        <Route
          path="/"
          element={<p className="text-5xl">home page component</p>}
        />
        <Route
          path="/about"
          element={<p className="text-5xl">About component</p>}
        />

        <Route
          path="/:lang?/language"
          element={<About />}
          />
          <Route path="/:book" element={<Todo />} />
          <Route
            path="*"
            element={<p className="text-5xl">Not found, go back to home page
              <Link to={"/"}>
              <button className="btn btn-xl btn-primary">Home</button>
              </Link>
            
             </p>}
          />
      </Routes>
    </div>
  );
};

export default App;
