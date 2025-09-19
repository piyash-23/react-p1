import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";
import Country from "./components/Country/Country";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={<p>Website astese.....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      <Country></Country>
    </>
  );
}

export default App;
