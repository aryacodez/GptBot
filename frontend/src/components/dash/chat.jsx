import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const handleBot = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("api/v1/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });
      const data = await res.json();
      setResponse(data.response.replace("?", ""));
    } catch (err) {
      console.log(err);
    }
  };
  //console.log(response)
  //const dupmessage=message
  const isCookiePresent = () => {
    const cookieString = document.cookie;

    console.log(cookieString.includes("token"));
  };

  return (
    <>
      {/* <div className='container-fluid bg-secondary p-3 pe-5 d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary' onClick={handleLogout}>Logout</button>
            </div> */}
      <Navbar />
      <div className="container mt-3 pt-4 pb-4">
        <h1 className="text-center mb-4 fs-1">Chat-Bot</h1>
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="card">
              <div className="card-body">
                <div id="chat-messages" className="mb-3">
                  User: {message}
                </div>
                <div id="chat-messages" className="mb-3">
                  Bot: {response}
                </div>
                <form id="chat-form" onSubmit={handleBot}>
                  <div className="form-group">
                    <label for="message-input" className="mb-2">
                      Input message:
                    </label>
                    <input
                      type="text"
                      id="message-input"
                      className="form-control"
                      placeholder="Enter your query"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="input"
                    className="btn btn-primary mt-2 ps-5 pe-5"
                  >
                    Submit
                  </button>
                </form>
                {!isCookiePresent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
