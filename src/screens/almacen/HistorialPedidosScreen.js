import React, { useState } from "react";
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "../../components/Aside";
import buscar from "../../assets/logos/icons/buscar.svg";
import ayqlogo from "../../assets/logos/icons/A&Q_Logo.svg";
import nuevaSolicitud from "../../assets/logos/icons/Nueva_solicitud.svg";
import ModalLocal from "../../components/ModalLocal";
import imagen from "../../assets/logos/icons/Rectangle.svg";
import aprobada from "../../assets/logos/icons/En_aprobación.svg";
import autorizacion from "../../assets/logos/icons/En_autorización.svg";
import cotizacion from "../../assets/logos/icons/En_cotización.svg";
import odc from "../../assets/logos/icons/ODC2.svg";
import generada from "../../assets/logos/icons/Solped_Generada2.svg";

const HistorialSolpedScreen = () => {
  //const [value, setValue] = useState("");

  

  const [modalInfo, setModalInfo] = useState(false);

  const handleOpenModal = () => {
    setModalInfo(true);
  };

  const handleCloseModal = () => {
    setModalInfo(false);
  };

  const [modalEditar, setModalEditar] = useState(false);

  const handleOpenModalEditar = () => {
    setModalEditar(true);
  };

  const handleCloseModalEditar = () => {
    setModalEditar(false);
  };

  const [modalEditar2, setModalEditar2] = useState(false);

  const handleOpenModalEditar2 = () => {
    setModalEditar2(true);
  };

  const handleCloseModalEditar2 = () => {
    setModalEditar2(false);
  };

  const [modalCancelar, setModalCancelar] = useState(false);

  const handleOpenModalCancelar = () => {
    setModalCancelar(true);
  };

  const handleCloseModalCancelar = () => {
    setModalCancelar(false);
  };

  const [modalAutorizar, setModalAutorizar] = useState(false);

  const handleOpenModalAutorizar = () => {
    setModalAutorizar(true);
  };

  const handleCloseModalAutorizar = () => {
    setModalAutorizar(false);
  };



//////////////////////////////////////////////////////

const [modalGenerado, setModalGenerado] = useState(false);

  const handleOpenModalGenerado = () => {
    setModalGenerado(true);
  };

  const handleCloseModalGenerado = () => {
    setModalGenerado(false);
  };

  ///////

  const [modalAutorizado, setModalAutorizado] = useState(false);

  const handleOpenModalAutorizado = () => {
    setModalAutorizado(true);
  };

  const handleCloseModalAutorizado = () => {
    setModalAutorizado(false);
  };
  
  
  ////////

  const [modalAprobado, setModalAprobado] = useState(false);

  const handleOpenModalAprobado = () => {
    setModalAprobado(true);
  };

  const handleCloseModalAprobado = () => {
    setModalAprobado(false);
  };

  ////////

  const [modalOrden, setModalOrden] = useState(false);

  const handleOpenModalOrden = () => {
    setModalOrden(true);
  };

  const handleCloseModalOrden = () => {
    setModalOrden(false);
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
      <div className="col-lg-10 col-md-10 col-12 mt-4 mx-auto">
        <Container>
          <div className="row">
            <Col className="mt-4">
              <div className="card" style={{ backgroundColor: "#e3edf6" }}>
                <h3 className="mt-3 ms-3">Nueva Solped</h3>
                <p className="ms-4">
                  Si quieres realizar una Nueva Solped solo dale clic al botón
                </p>
                <div className="button-row d-flex mt-4">
                  <button
                    className="btn bg-gradient-primary ms-5 mb-0 text-capitalize"
                    type="button"
                    title="Send"
                    style={{ position: "absolute" }}
                  >
                    Crear una nueva solicitud
                  </button>
                </div>
                <br></br>
                <br></br>
                <div
                  className="ms-5"
                  style={{
                    backgroundImage: `url(${nuevaSolicitud})`,
                    display: "flex",
                    height: "100px",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    alignItems: "flex-end",
                  }}
                ></div>
              </div>
              <div className="card mt-3">
                <h4 className="mt-3 ms-5 mb-4">Historial de Solped</h4>
                <Row>
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
                        <h6 className="font-weight-bolder">
                          Historial de pedidos
                        </h6>

                        <Col></Col>
                      </div>
                    </form>
                  </div>

                  <Col></Col>
                </Row>
              </div>
            </Col>

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
                          </div>
                          <div className="row mt-3">
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
                                  backgroundImage: `url(${generada})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Solped generada</label>
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
                                  backgroundImage: `url(${autorizacion})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Autorizada</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalAutorizado}
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${cotizacion})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Cotizado</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModal}
                                title="Send"
                             
                              >
                                Ver detalles
                              </button>
                            </div>

                            <div className="col" style={{display:"grid", justifyItems:"end"}}>
                              <div
                                className="ms-5"
                                style={{
                                  backgroundImage: `url(${aprobada})`,
                                  display: "flex",
                                  height: "50px",
                                  width:"100px",
                                  backgroundPosition: "center",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "flex-end",
                                }}
                              ></div>
                              <label>Aprobado</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalAprobado}
                                title="Send"
                              >
                                Ver detalles
                              </button>
                            </div>

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
                              <label>Orden de Compra</label>
                              <button
                                className="btn mt-3 ms-auto mb-0 text-capitalize"
                                type="button"
                                 style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
                                onClick={handleOpenModalOrden}
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
          </div>
        </Container>
      </div>
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
            </div>

            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
              onClick={handleOpenModalEditar}
            >
              Editar la Solped
            </button>
            <button
              className="btn ms-auto mb-0 mx-3 text-capitalize "
              style={{ backgroundColor: "#1c2355", color: "#ffffff" }}
              onClick={handleOpenModalCancelar}
            >
              Cancelar la Solped
            </button>
            <button
              className="btn ms-auto mb-0 text-capitalize "
              style={{ backgroundColor: "gray", color: "#ffffff" }}
              onClick={handleOpenModalAutorizar}
            >
              Autorizar la Solped
            </button>
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalEditar}>
        <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido</h3>
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
                  onClick={handleCloseModalEditar}
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
                <div>Espacio para los documentos adjuntos</div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="my-4">
                <h4>Estado del pedido</h4>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Estado:</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Acción requerida</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Fecha de creación</label>
              </div>

              <div>
                <h5>Items solicitados</h5>
                <label>¿Quieres revisar y editar los items solicitados?</label>
                <button
                  className="btn ms-auto mb-0 mx-3 text-capitalize "
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1c2355",
                    borderColor: "#1c2355",
                  }}
                  onClick={handleOpenModalEditar2}
                >
                  Revisar
                </button>
              </div>
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

      <ModalLocal localState={modalEditar2}>
        <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido</h3>
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
                  onClick={handleCloseModalEditar2}
                >
                  <i class="fa-solid fa-x fs-3"></i>
                </button>
              </div>
            </div>
            <h4 className="mt-3"> Items solicitados</h4>
            <div className="row">
              <div className="col-10 me-5">
                <label style={{ fontWeight: "bold" }}>Agregar nuevo item</label>
                <div style={{ display: "flex" }}>
                  <input
                    className="form-control border rounded-pill px-3 border-terciary"
                    type="text"
                    placeholder="Nombre | Referencia"
                  ></input>
                  <button
                    className="btn bg-gradient-terciary ms-auto mb-0 text-capitalize"
                    type="button"
                    title="Send"
                  >
                    <i class="fa-regular fa-plus fs-3"></i>
                  </button>
                </div>
                <br></br>

                <div className="card">
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
                        <button
                          className="btn ms-auto mb-0  text-capitalize "
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#1c2355",
                            borderColor: "#1c2355",
                          }}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <label>00</label>
                        <button
                          className="btn ms-1 mb-0 text-capitalize "
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#1c2355",
                            borderColor: "#1c2355",
                          }}
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-3">
                      <h6 style={{ color: "#ff5667" }}>Precio Total</h6>
                      <label>$</label>
                      <label>Precio unitario</label>
                      <label>$</label>
                    </div>
                    <div className="col-1">
                      <button
                        className="btn ms-auto mb-0 mx-2 text-capitalize "
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#1c2355",
                          borderColor: "#1c2355",
                        }}
                      >
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="mt-6">
              <button
                className="btn ms-auto mb-0 ms-3 mx-3 text-capitalize "
                style={{ backgroundColor: "#e8b86d", color: "#ffffff" }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalCancelar}>
        <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido</h3>
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
                  onClick={handleCloseModalCancelar}
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
                <h4>Estado del pedido</h4>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Estado:</label>
                <br></br>
                <label style={{ fontWeight: "bold" }}>Acción requerida</label>
                <br></br>

                <h6>Razon de la cancelación:</h6>
                <textarea
                  disabled="true"
                  placeholder="Razon de la cancelación"
                ></textarea>
                <br></br>
              </div>
            </div>
            <br></br>
            <div className="mt-6">
              <h5>¿Estás seguro que deseas cancelar esta Solped?</h5>
              <button
                className="btn ms-auto mb-0 mx-3 text-capitalize "
                style={{ backgroundColor: "#ffffff", color: "#1c2355" }}
                onClick={handleOpenModalEditar}
              >
                Ir atras
              </button>
              <button
                className="btn ms-auto mb-0 ms-3 mx-3 text-capitalize "
                style={{ backgroundColor: "#1c2355", color: "#ffffff" }}
              >
                Si, Cancelar la Solped
              </button>
            </div>
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalAutorizar}>
        <div className="row min-vh-100">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="row">
              <div className="col-10">
                <h3 style={{ color: "#ff5667" }}>Detalles del pedido</h3>
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
                  onClick={handleCloseModalAutorizar}
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
                <textarea
                  disabled="true"
                  placeholder="Obsercaciones"
                ></textarea>
                <br></br>
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
            </div>

            <button
              className="btn bg-gradient-primary ms-auto mb-0 text-capitalize"
              onClick={handleCloseModalAutorizar}
            >
              Autorizar la Solped
            </button>
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalAutorizado}>
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
                  onClick={handleCloseModalAutorizado}
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

      <ModalLocal localState={modalInfo}>
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
                  onClick={handleCloseModal}
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
            </div>

            <button
              className="btn bg-gradient-primary ms-auto mb-0 mx-3 text-capitalize "
              
              
            >
              Rechazar la cotización
            </button>
           
            <button
              className="btn ms-auto mb-0 text-capitalize "
              style={{ backgroundColor: "gray", color: "#ffffff" }}
             
            >
              Aprobar la cotización
            </button>
          </div>
        </div>
      </ModalLocal>

      <ModalLocal localState={modalAprobado}>
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
                  onClick={handleCloseModalAprobado}
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
  );
};
export default HistorialSolpedScreen;