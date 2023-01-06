import { useState } from "react";
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import nuevaSolicitud from "../../assets/logos/icons/Nueva_solicitud.svg";
import Aside from "../../components/Aside";
import buscar from "../../assets/logos/icons/buscar.svg";
import ayqlogo from "../../assets/logos/icons/A&Q_Logo.svg";
import Subtitle from "../../components/Subtitle";

const NuevaSolicitudScreen = () => {
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

  return (
    <div className="row min-vh-90">
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

      <div className="col-lg-9 col-md-10 col-12 mx-auto">
        {/* <p className="lead font-weight-normal opacity-8 mb-7 text-center">
          This information will let us know more about you.
        </p> */}
        <div className="card" style={{backgroundColor:"#e3edf6"}}> 
          {/* <div className="card-body"> */}
          <form className="multisteps-form__form">
            {/* <!--single form panel--> */}
            <div
              className="multisteps-form__panel border-radius-xl bg-white js-active p-4 position-relative"
              data-animation="FadeIn"
            >
              <h3 className="mt-3 mb-0 text-center mb-4">Nueva SOLPED</h3>

              <div className="multisteps-form__content">
                <Container>
                  <Row>
                    <br></br>
                    <br></br>
                    <Col>
                      <h5 className="font-weight-bolder ms-3">
                        Agregar Nuevo item
                      </h5>

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
                              Lista de pedido
                            </h6>
                          </div>
                        </form>
                      </div>
                      <Subtitle title={""}/>
                      <h5>Valor total de la orden: $</h5>
                    </Col>
                    <Col>
                      <Container>
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
                                        <input
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Nivel de prioridad"
                                        />

                                        {/* <Select
                options={[
                  { label: "Todas las carteras", value: "todo" },
                  { label: "Cartera normal", value: "carnor" },
                  { label: "Cartera mediano riesgo", value: "carmed" },
                  { label: "Cartera alto riesgo", value: "caralto" },
                ]}
                placeholder="Seleccionar"
              /> */}
                                      </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                      <div>
                                        <button
                                          className="btn bg-gradient-primary ms-auto mb-0 text-capitalize"
                                          type="button"
                                          title="Send"
                                        >
                                          Adjuntar archivos
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-12">
                                      <div>
                                        <input
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Dirección de envio"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-12">
                                      <div>
                                        <input
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Detalle de la dirección"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-12">
                                      <div>
                                        <input
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Fecha limite de la resolución"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-12">
                                      <div>
                                        <input
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Centro de costos"
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-3">
                                    <div className="col-12">
                                      <div>
                                        <textarea
                                          className="form-control border rounded-pill px-3 border-terciary"
                                          type="text"
                                          placeholder="Observaciones"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="button-row d-flex mt-4">
                                    <button
                                      className="btn bg-gradient-secondary ms-auto mb-0 text-capitalize"
                                      type="button"
                                      title="Send"
                                      style={{ position: "absolute" }}
                                    >
                                      Generar la solicitud
                                    </button>
                                  </div>
                                  <br></br>
                                  <br></br>
                                  <div
                                    style={{
                                      backgroundImage: `url(${nuevaSolicitud})`,
                                      display: "flex",
                                      height: "100px",
                                      backgroundPosition: "right",
                                      backgroundSize: "contain",
                                      backgroundRepeat: "no-repeat",
                                      alignItems: "flex-end",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default NuevaSolicitudScreen;
