import "./App.css";
import axios from "axios";

function App() {
  const generatePdf = async (event) => {
    event.preventDefault();

    const response = await axios.get("http://localhost:5000/pdf", {
      responseType: "blob",
    });

    const file = new File([response.data], "test.pdf", {
      type: "application/pdf",
    });

    console.log(file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generatePdf}>Generate PDF</button>
      </header>
    </div>
  );
}

export default App;
