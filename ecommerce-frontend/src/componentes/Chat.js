import React, { useState } from "react";
import api from "./api";

export const Chat = ({ activo, setActivo }) => {
  const [estado, setEstado] = useState("inactivo");

  console.log(activo);

  const cambiarEstado = async () => {
    let data = await api.chats.estado({
      id: activo.id,
      estado,
    });

    alert("Estado actualizado");
    window.location.reload()
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee", width: "100%" }}>
        <div className="py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="card" id="chat2">
                <div className="card-header d-flex justify-content-between align-items-center p-3">
                  <h5 className="mb-0">id: {activo?.id}</h5>
                </div>
                <div
                  className="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={{
                    position: "relative",
                    height: "400px",
                    overflow: "auto",
                  }}
                >
                  {activo.mensajes?.map((msj) => (
                    <div className="d-flex flex-row justify-content-start">
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          {msj.mensaje || ""}
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                          {msj.enviadoPor || "-"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <label htmlFor="">Cambiar estado</label>
                  <select
                    onChange={(e) => setEstado(e.target.value)}
                    className="form-control"
                  >
                    <option value="inactivo">Inactivo</option>
                    <option value="espera">Espera</option>
                    <option value="activos">Activo</option>
                    <option value="finalizadoss">Finalizado</option>
                  </select>
                  <button
                    onClick={cambiarEstado}
                    type="button"
                    class="btn btn-primary"
                  >
                    Cambiar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
