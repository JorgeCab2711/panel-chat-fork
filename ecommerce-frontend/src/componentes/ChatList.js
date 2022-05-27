import React, { useEffect, useState } from "react";
import api from "./api";

export const ChatList = ({setActivo}) => {
  const [chats, setChats] = useState([]);


  useEffect(()=> {
    const fetchData = async () => {
      let data = await api.chats.chats()

      setChats(data.chats)
      
    }
    fetchData()

  }, [])

  return (
    <div>
      <section
        style={{ backgroundColor: "#000", height: "600px", width: "400px", color:'#fff', overflow:'auto' }}
      >
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                -
              </h5>

              <div className="">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {chats.map((chat, index) => (
                      <li
                        className="p-2 border-bottom"
                        style={{ backgroundColor: "#000", cursor: 'pointer' }}
                        onClick={()=>setActivo(index)}
                      >
                        <span  className="d-flex justify-content-between">
                          <div className="d-flex flex-row">
                            <div className="pt-1">
                              <p className="fw-bold mb-0">{chat.iniciadoPor}</p>
                            </div>
                          </div>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
