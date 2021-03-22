import "./App.css";
import axios from "axios";
import { useState } from "react";

const LOCAL_SERVER_URL = "http://localhost:5000";

function App() {
  const [message, setMessage] = useState(null);

  const getPdf = async (event) => {
    console.log("getPdf");
    event.preventDefault();

    try {
      const response = await axios.get(`${LOCAL_SERVER_URL}/get-pdf`);

      const file = new File([response.data], "test.pdf", {
        type: "application/pdf",
      });

      console.log(file);
      setMessage("Got PDF!");
    } catch (error) {
      console.error(error);
      setMessage("Issue getting PDF");
    }
  };

  const createPdf = async (event) => {
    console.log("createPdf");
    event.preventDefault();

    try {
      const response = await axios.post(`${LOCAL_SERVER_URL}/create-pdf`, {
        responseType: "blob",
      });

      const file = new File([response.data], "createPdf.pdf", {
        type: "application/pdf",
      });

      console.log(file);
      setMessage("Created PDF!");
    } catch (error) {
      console.error(error);
      setMessage("Issue creating PDF");
    }
  };

  const storePdf = async (event) => {
    console.log("storePdf");
    event.preventDefault();

    try {
      const response = await axios.post(`${LOCAL_SERVER_URL}/store-pdf`, {
        text: "store pdf text",
      });

      console.log(response);
      setMessage("Stored PDF!");
    } catch (error) {
      console.error(error);
      setMessage("Issue storing PDF");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPdf}>Get PDF</button>
        <button onClick={createPdf}>Create PDF</button>
        <button onClick={storePdf}>Store PDF</button>

        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
