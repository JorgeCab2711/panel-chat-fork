import React, { useEffect, useState } from "react";
import api from "./api";

export const ChatList = ({ setActivo }) => {
  const [chats, setChats] = useState([]);
  const [estado, setEstado] = useState("inactivo");

  useEffect(() => {
    const fetchData = async () => {
      let data = await api.chats.chats();

      setChats(data.chats);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section
        style={{
          backgroundColor: "#000",
          height: "600px",
          width: "400px",
          color: "#fff",
          overflow: "auto",
        }}
      >
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                <select
                  onChange={(e) => setEstado(e.target.value)}
                  className="form-control"
                >
                  <option value="inactivo">Inactivo</option>
                  <option value="espera">Espera</option>
                  <option value="activos">Activos</option>
                  <option value="finalizadoss">Finalizados</option>
                </select>
              </h5>

              <div className="">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {chats.map(
                      (chat) =>
                        chat.estado === estado && (
                          <li
                            className="p-2 border-bottom"
                            style={{
                              backgroundColor: "#000",
                              cursor: "pointer",
                            }}
                            onClick={() => setActivo(chat)}
                          >
                            <span className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">
                                    {chat.iniciadoPor}
                                  </p>
                                </div>
                              </div>
                            </span>
                          </li>
                        )
                    )}
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
