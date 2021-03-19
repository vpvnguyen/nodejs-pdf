import "./App.css";
import axios from "axios";

function App() {
  const getPdf = async (event) => {
    console.log("getPdf");

    event.preventDefault();

    const response = await axios.get("http://localhost:5000/get-pdf");

    const file = new File([response.data], "test.pdf", {
      type: "application/pdf",
    });

    console.log(file);
  };

  const createPdf = async (event) => {
    console.log("createPdf");

    event.preventDefault();

    const response = await axios.post("http://localhost:5000/create-pdf", {
      responseType: "blob",
    });
    const file = new File([response.data], "test.pdf", {
      type: "application/pdf",
    });
    console.log(file);
  };

  const storePdf = async (event) => {
    console.log("storePdf");

    event.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/store-pdf",
      "store pdf text"
    );

    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPdf}>Get PDF</button>
        <button onClick={createPdf}>Create PDF</button>
        <button onClick={storePdf}>Store PDF</button>
      </header>
    </div>
  );
}

export default App;
