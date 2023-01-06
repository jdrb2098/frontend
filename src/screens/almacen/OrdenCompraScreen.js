import React, { useState } from "react";
import Aside from "../../components/Aside";
import ayqlogo from "../../assets/logos/icons/A&Q_Logo.svg";
import { Col, Container, Row, Progres } from "react-bootstrap";
import buscar from "../../assets/logos/icons/buscar.svg";
import { VictoryPie } from "victory";
import liberar from "../../assets/logos/icons/Liberar_ODC.svg";
import proveedor from "../../assets/logos/icons/En_Proveedor.svg";
import finalizar from "../../assets/logos/icons/Finalizar_OCD.svg";
import factura from "../../assets/logos/icons/Solicitar_Factura.svg";
import generada from "../../assets/logos/icons/Solped_Generada2.svg";
import imagen from "../../assets/logos/icons/Rectangle.svg";
import odc from "../../assets/logos/icons/ODC2.svg";
import ModalLocal from "../../components/ModalLocal";



export const OrdenCompraScreen = () => {
  const data = [
    { product: "Producto A", sales: 45 },
    { product: "Producto B", sales: 25 },
    { product: "Producto C", sales: 20 },
    { product: "Producto D", sales: 10 },
  ];

  const [modalGenerado, setModalGenerado] = useState(false);

  const handleOpenModalGenerado = () => {
    setModalGenerado(true);
  };

  const handleCloseModalGenerado = () => {
    setModalGenerado(false);
  };

  ///////

  const [modalProveedor, setModalProveedor] = useState(false);

  const handleOpenModalProveedor = () => {
    setModalProveedor(true);
  };

  const handleCloseModalProveedor = () => {
    setModalProveedor(false);
  };
  
  
  ////////

  const [modalLiberado, setModalLiberado] = useState(false);

  const handleOpenModalLiberado = () => {
    setModalLiberado(true);
  };

  const handleCloseModalLiberado = () => {
    setModalLiberado(false);
  };

  ////////

  const [modalFacturado, setModalFacturado] = useState(false);

  const handleOpenModalFacturado = () => {
    setModalFacturado(true);
  };

  const handleCloseModalFacturado = () => {
    setModalFacturado(false);
  };


  return (
    <div className="row min-vh-100">
      <Aside />
      <div
        style={{
          backgroundImage: `url(${ayqlogo})`,
          display: "flex",
          height: "100px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          alignItems: "flex-end",
        }}
      ></div>
      <div
        className="col-lg-9 col-md-10 col-12 mt-6 mx-auto"
        style={{ display: "flex" }}
      >
        <div className="col-5">
          <Col>
            <Container>
              <h4>Historial de ordenes de compra</h4>

              <br></br>
              <br></br>

              <div style={{ display: "flex" }}>
                <input
                  className="form-control border rounded-pill ms-3 px-3 border-terciary"
                  type="text"
                  placeholder="  Buscar"
                ></input>
                <button
                  className="btn bg-gradient-terciary ms-auto mb-0 text-capitalize"
                  type="button"
                  title="Send"
                >
                  <img src={buscar} />
                </button>
              </div>
              <div className="card">
                {/* <div className="card-body"> */}
                <form className="multisteps-form__form">
                  {/* <!--single form panel--> */}
                  <div
                    className="multisteps-form__panel border-radius-xl bg-white js-active p-4 position-relative"
                    data-animation="FadeIn"
                  >
                    <h6 className="font-weight-bolder">Historial de pedidos</h6>

                    <Col></Col>
                  </div>
                </form>
              </div>
            </Container>
          </Col>
        </div>

        <div className="col-7 ms-3">
        <Col>
              <Container>
                <h4>Detalles del pedido</h4>
                <div className="row min-vh-100">
                  <div className="">
                    {/* <div className="card-body"> */}
                    <form className="multisteps-form__form">
                      {/* <!--single form panel--> */}
                      <div
                        className="multisteps-form__panel border-radius-xl bg-white js-active p-4 position-relative"
                        data-animation="FadeIn"
                      >
                        <div className="multisteps-form__content">
                          <div className="row mt-3">
                            <div className="col">
                            <h4>Información general</h4>
                          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>Quien realizo el pedido</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="Pepito Pérez"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div>
                                <label>Dirección de envio</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="Calle 00 N°00-00"
                                  disabled="true"
                                />
                              </div>
                            </div>
                              <div className="col-12 col-sm-6">
                              <div>
                                <label>Detalles de la dirección</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="Bodega 2"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>Nivel de prioridad</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="Alta"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>proveedor</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="pepe perez"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            </div>
                            <div className="col">
                            <h4>Historial de estados</h4>
                          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>Fecha de creación de Solped</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="00/00/0000"                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div>
                                <label>Fecha de automatización</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="00/00/0000"
                                  disabled="true"
                                />
                              </div>
                            </div>
                              <div className="col-12 col-sm-6">
                              <div>
                                <label>Fecha de cotización</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="00/00/0000"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>Fecha de aprobación</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="00/00/0000"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div>
                                <label>Fecha de creación ODC</label>
                                <input
                                  className="form-control border rounded-pill px-3 border-terciary"
                                  type="text"
                                  placeholder="00/00/0000"
                                  disabled="true"
                                />
                              </div>
                            </div>
                            </div>
                          </div>
                         
                          
                          
                          <div className="row mt-3">
                            <h4>Items solicitados</h4>
                            <div className="col-12">
                            <div className="row">
                    <div className="col-1">
                      <div
                        style={{
                          backgroundImage: `url(${imagen}})`,
                          display: "flex",
                          height: "90px",
                          backgroundPosition: "left",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          alignItems: "flex-end",
                        }}
                      ></div>
                    </div>
                    <div className="col-2">
                      <h6>Nombre del item</h6>
                      <label>Unidad de medida</label>
                    </div>
                    <div className="col-3">
                      <h6>N° Referencia</h6>
                      <div style={{ display: "flex" }}>
                       
                        <label>00</label>
                       
                      </div>
                    </div>
                    <div className="col-3">
                      <h6 style={{ color: "#ff5667" }}>Precio Total</h6>
                      <label>$</label>
                      <label>Precio unitario</label>
                      <label>$</label>
                    </div>
                    
                  </div>
                            </div>
                          </div>

                          <h5 className="text-align-right">
                            Valor total de la orden: $
                          </h5>

                          <div className="row mt-5">
                            <h5>Estado del pedido</h5>
                            <div className="mt-3" style={{display:"flex"}}>
                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${odc})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>ODC generada</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalGenerado}
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${proveedor})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>En proveedor</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalProveedor}
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${liberar})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Liberar</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalLiberado}
                                title="Send"
                             
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${factura})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Facturada</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalFacturado}
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${finalizar})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Finalizar</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                               
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Container>
            </Col>

            <ModalLocal localState={modalGenerado}>
      <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido N°</h3>
              </div>
              <div
                className="col-2"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <button
                  className="ms-4 btn  text-capitalize"
                  onClick={handleCloseModalGenerado}
                >
                  <i class="fa-solid fa-x fs-3"></i>
                </button>
              </div>
            </div>
            <h4 className="mt-3"> Información General</h4>
            <div className="row">
              <div className="col-5 me-5">
                <label style={{ fontWeight: "bold" }}>
                  Creador de la solicitud:
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Nivel de prioridad</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Fecha limite de resolución
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Valor total de la orden
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Dirección del envio
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Detalles de la dirección
                </label>
              </div>
              <div className="col-5 ms-4">
                <h6>Observaciones:</h6>
                <textarea disabled="true"></textarea>
                <br></br>
                <h6>Archivos adjuntos: </h6>
                <div className="col">Espacio para los documentos adjuntos</div>
              </div>
            </div>
            <br></br>
            <div className="my-4">
              <h4>Estado del pedido</h4>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Estado:</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Acción requerida</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
              <br></br>
              <label  style={{ fontWeight: "bold" }}>Proveedor</label>
            </div>

            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
              
            >
              Aceptar
            </button>
            
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalProveedor}>
      <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido N°</h3>
              </div>
              <div
                className="col-2"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <button
                  className="ms-4 btn  text-capitalize"
                  onClick={handleCloseModalProveedor}
                >
                  <i class="fa-solid fa-x fs-3"></i>
                </button>
              </div>
            </div>
            <h4 className="mt-3"> Información General</h4>
            <div className="row">
              <div className="col-5 me-5">
                <label style={{ fontWeight: "bold" }}>
                  Creador de la solicitud:
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Nivel de prioridad</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Fecha limite de resolución
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Valor total de la orden
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Dirección del envio
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Detalles de la dirección
                </label>
              </div>
              <div className="col-5 ms-4">
                <h6>Observaciones:</h6>
                <textarea disabled="true"></textarea>
                <br></br>
                <h6>Archivos adjuntos: </h6>
                <div className="col">Espacio para los documentos adjuntos</div>
              </div>
            </div>
            <br></br>
            <div className="my-4">
              <h4>Estado del pedido</h4>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Estado:</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Acción requerida</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Fecha de recepción</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Fecha de entrega del pedido</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Proveedor</label>
            </div>

            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
              
            >
              Aceptar
            </button>
            
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalLiberado}>
      <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido N°</h3>
              </div>
              <div
                className="col-2"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <button
                  className="ms-4 btn  text-capitalize"
                  onClick={handleCloseModalLiberado}
                >
                  <i class="fa-solid fa-x fs-3"></i>
                </button>
              </div>
            </div>
            <h4 className="mt-3"> Información General</h4>
            <div className="row">
              <div className="col-5 me-5">
                <label style={{ fontWeight: "bold" }}>
                  Creador de la solicitud:
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Nivel de prioridad</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Fecha limite de resolución
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Valor total de la orden
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Dirección del envio
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Detalles de la dirección
                </label>
              </div>
              <div className="col-5 ms-4">
                <h6>Observaciones:</h6>
                <textarea disabled="true"></textarea>
                <br></br>
                <h6>Archivos adjuntos: </h6>
                <div className="col">Espacio para los documentos adjuntos</div>
              </div>
            </div>
            <br></br>
            <div className="my-4">
              <h4>Estado del pedido</h4>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Estado:</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Acción requerida</label>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Fecha de entrega de pedido</label>
              <br></br>
              <label  style={{ fontWeight: "bold" }}>Proveedor</label>
            </div>

            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#1c2355", color: "#ffffff" }}
              
            >
              Reportar un problema 
            </button>

            <button
              className="btn bg-gradient-primary ms-auto mb-0 mx-3 text-capitalize "
              
              
            >
              Liberar ODC
            </button>
            
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalFacturado}>
      <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido N°</h3>
              </div>
              <div
                className="col-2"
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                }}
              >
                <button
                  className="ms-4 btn  text-capitalize"
                  onClick={handleCloseModalFacturado}
                >
                  <i class="fa-solid fa-x fs-3"></i>
                </button>
              </div>
            </div>
            <h4 className="mt-3"> Información General</h4>
            <div className="row">
              <div className="col-5 me-5">
                <label style={{ fontWeight: "bold" }}>
                  Creador de la solicitud:
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Nivel de prioridad</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Fecha limite de resolución
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Valor total de la orden
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Dirección del envio
                </label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>
                  Detalles de la dirección
                </label>
              </div>
              <div className="col-5 ms-4">
                <h6>Observaciones:</h6>
                <textarea disabled="true"></textarea>
                <br></br>
                <h6>Archivos adjuntos: </h6>
                <div className="col">Espacio para los documentos adjuntos</div>
              </div>
            </div>
            <br></br>
            <div className="row">
            <div className=" col my-4">
              <h4>Estado del pedido</h4>
              <br></br>
              <label style={{ fontWeight: "bold" }}>Estado:</label>
              <br></br>
             
              <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
            </div>

            <div className="col">Factuar de venta</div>

            </div>

            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
              
            >
              Aceptar
            </button>
            
          </div>
        </div>
      </ModalLocal>

        </div>
      </div>
    </div>
  );
};
