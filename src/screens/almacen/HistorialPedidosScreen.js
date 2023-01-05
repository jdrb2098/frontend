import React, { useState } from "react";
import "../../App.css"
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "../../components/Aside";
import buscar from "../../assets/logos/icons/buscar.svg";
import ayqlogo from "../../assets/logos/icons/A&Q_Logo.svg";
import nuevaSolicitud from "../../assets/logos/icons/Nueva_solicitud.svg";
import ModalLocal from "../../components/ModalLocal";

const historialSolpedScreen = () => {
  //const [value, setValue] = useState("");

  const options = [
    { label: "Clothing", value: "CL" },
    { label: "Real Estate", value: "RL" },
    { label: "Electronics", value: "EL" },
    { label: "Others", value: "OT" },
  ];

  const optionsSize = [
    { label: "Large", value: "LG" },
    { label: "Extra large", value: "ELG" },
    { label: "Extra small", value: "ESM" },
  ];

  const [modalInfo, setModalInfo] = useState(false)

  const handleOpenModal = () => {
    setModalInfo(true);
  };

  const handleCloseModal = () => {
    setModalInfo(false);
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
      <div className="col-lg-9 col-md-10 col-12 mt-4 mx-auto">
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
                              <Col></Col>
                            </div>
                          </div>

                          <h5 className="text-align-right">
                            Valor total de la orden: $
                          </h5>

                          <div
                            className="button-row d-flex  mt-4"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <button
                              className="btn bg-gradient-primary ms-auto mb-0 text-capitalize"
                              type="button"
                               onClick={handleOpenModal}
                              title="Send"
                            >
                              Ver detalles
                            </button>
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
       <ModalLocal localState={modalInfo}>
          <div className="row min-vh-100">
            <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
                    <h3 style={{textColor:"#ff5667"}}>Detalles del pedido N°</h3>
                       <h4 className="mt-3"> Información General</h4> 

                       <div className=""></div>
                    <button
                      className="ms-4 btn  text-capitalize"
                      onClick={handleCloseModal}
                    >
                      <i className="fa-solid fa-angles-left fs-3"></i>
                    </button>
                  </div>
                </div></ModalLocal> 
    </div>

    // </div>
  );
};
export default historialSolpedScreen;
