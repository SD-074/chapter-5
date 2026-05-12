import { use } from "react";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {

  const {darkTheme, setDarkTheme} = use(ThemeContext)
  return (
    <div className="main-container" data-theme={darkTheme ? "dark": "light"}>
  <button onClick={() => setDarkTheme(i => !i)}>Toggle theme</button>
      <div className="card bg-base-100 w-96 border-2 shadow-2xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
