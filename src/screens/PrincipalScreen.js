import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Select from "react-select";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BGPrincipal from "../assets/logos/icons/Bannerprincipal.png";
import gridImg1 from "../assets/logos/icons/Ilus-Optimiza.svg";
import gridImg2 from "../assets/logos/icons/Ilus-Ahorra.svg";
import gridImg3 from "../assets/logos/icons/Ilus-Compara.svg";
import gridImg4 from "../assets/logos/icons/Ilus-Agiliza.svg";
import BGGrid from "../assets/logos/icons/backgrid.png";
import fondo from "../assets/logos/fondo.png";
import asiLoHacemos from "../assets/logos/Asi_lo_hacemos.png";
import imgApolo from "../assets/logos/icons/Mask_group.png";
import imgApoloBanner from "../assets/logos/icons/Logo_Apolo.png";
import iconoApolo from "../assets/logos/icons/Frame.svg";
import iconoApolo2 from "../assets/logos/icons/Frame-1.svg";
import iconoApolo3 from "../assets/logos/icons/Frame-2.svg";
import nuevaSolicitud from "../assets/logos/icons/Nueva_solicitud.svg"

function PrincipalScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

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
    <div>
      <Header />
      <Container
        fluid
        style={{ height: "100vh", backgroundImage: `url(${BGPrincipal})` }}
      >
        <Row className="px-5" style={{ height: "100%", width: "100%" }}>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container>
              <h2>
                La mejor soluci??n para optimizar los procesos de compra de tu
                empresa
              </h2>
              <p>
                Trabajamos para generar ahorros en la gesti??n de abastecimiento
                en las diferentes ??reas empresariales de nuestro clientes.
              </p>
              <button
                type="submit"
                className="btn bg-gradient-primary  my-4 mb-2"
              >
                Contactanos
              </button>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col>
            <Container>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <h4 className="w-80">
                  Incremento de ahorros y beneficios en un 20%{" "}
                </h4>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <h4 className="w-80">
                  Optimizaci??n del 90% del tiempo de los procesos de tratamiento
                  de SOLPED
                </h4>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <h4 className="w-80">
                  Mejoramiento de los ??ndices de productividad de las
                  negociaciones
                </h4>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>

      <Container fluid>
        <Row>
          <Col
            xs={5}
            style={{
              backgroundImage: `url(${BGGrid})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container className="h-100">
              <Row className="h-100">
                <Col>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br> <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2>Comprar con nosotros es comprar con confianza</h2>
                  <p>
                    Mediante el uso de nuestro aplicativo web, podr??s tener la
                    informaci??n de toda tu ??rea de abastecimiento en un mismo
                    lugar.{" "}
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={7}>
            <Container>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Row style={{ paddingBottom: "40px" }}>
                <Col style={{ paddingRight: "50px" }}>
                  <div
                    style={{
                      backgroundImage: `url(${gridImg1})`,
                      display: "flex",
                      height: "180px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4 style={{ margin: "0" }}>Optimiza</h4>
                  </div>
                  <div>
                    <p>
                      Haz un seguimiento detallado de la ejecuci??n de los
                      procesos de compra llevados acabo por tu equipo de
                      trabajo, monitoreando el presupuesto y la trazabilidad de
                      las solicitudes generadas.{" "}
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      backgroundImage: `url(${gridImg3})`,
                      display: "flex",
                      height: "180px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4>Compara</h4>
                  </div>
                  <div>
                    <p>
                      Te brindamos informaci??n actualizada de los precios de
                      distintos proveedores para que elijas el que mejor se
                      ajusta a tus necesidades.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row style={{ paddingBottom: "40px" }}>
                <Col style={{ paddingRight: "50px" }}>
                  <div
                    style={{
                      backgroundImage: `url(${gridImg4})`,
                      display: "flex",
                      height: "180px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4>Agiliza</h4>
                  </div>
                  <div>
                    <p>
                      Ahorra tiempo gracias a nuestra sistematizaci??n,
                      automatizaci??n y estandarizaci??n de los procesos de
                      compra.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      backgroundImage: `url(${gridImg2})`,
                      display: "flex",
                      height: "180px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4>Ahorra</h4>
                  </div>
                  <div>
                    <p>
                      Gracias a la posibilidad de comparaci??n informativa en
                      tiempo real, identifica oportunidades de estrat??gias de
                      negociaci??n con tus provedores y generar as?? un ahorro de
                      los costos de tu empresa.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container style={{  backgroundImage: `url(${fondo})`,
                height: "800px",
                width:"1600px",
 }}>
        <br></br>
        <br></br>

        <Row className="px-5" style={{ height: "100%", width: "100%" }}>
          <h4 style={{ color: "white" }}>As?? lo hacemos</h4>
          <Row>
            <Col>
              <h2 style={{ color: "white" }}>01</h2>
              <h4 style={{ color: "white" }}>An??lisis</h4>
              <p style={{ color: "white" }}>
                Revisamos el estado de trus procesos de abastecimiento{" "}
              </p>
            </Col>
            <Col>
              <h2 style={{ color: "white" }}>03</h2>
              <h4 style={{ color: "white" }}>Objetivos</h4>
              <p style={{ color: "white" }}>
                Definimos las metas a alcanzar y las pol??ticas de los procesos
                de compra de tu empresa.
              </p>
            </Col>
            <Col>
              <h2 style={{ color: "white" }}>05</h2>
              <h4 style={{ color: "white" }}>Evaluacion</h4>
              <p style={{ color: "white" }}>
                Realizamos revisiones peri??dicas del proceso y generamos
                informes detallando los ahorros generados.
              </p>
            </Col>
          </Row>
          <Row>
            <div
              style={{
                height: "9vh",
                backgroundImage: `url(${asiLoHacemos})`,
                display: "flex",
                height: "175px",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                alignItems: "flex-end",
              }}
            ></div>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ color: "white" }}>02</h2>
              <h4 style={{ color: "white" }}>Oportunidad de mejora</h4>
              <p style={{ color: "white" }}>
                Identificamos las falencias en los procesos actualies con el fin
                de optimizar los recursos.
              </p>
            </Col>
            <Col>
              <h2 style={{ color: "white" }}>04</h2>
              <h4 style={{ color: "white" }}>Ejecuci??n</h4>
              <p style={{ color: "white" }}>
                Sistematizamos el proceso de abastecimiento para agilizar y
                controlar la trazabilidad.
              </p>
            </Col>
          </Row>
          <br></br>
        </Row>
      </Container>
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <div
            style={{
              height: "100vh",
              backgroundImage: `url(${imgApolo})`,
              display: "flex",
              height: "450px",
              width: "450px",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              alignItems: "flex-end",
            }}
          ></div>
          <Col>
            <Row>
              <Col>
                <br></br>
                <div
                  style={{
                    height: "90vh",
                    backgroundImage: `url(${imgApoloBanner})`,
                    display: "flex",
                    height: "80px",
                    width: "400px",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    alignItems: "flex-end",
                  }}
                ></div>
                <h5>Obt??n datos relevantes sobre tus habitos de compra </h5>
                <p>
                  Gracias a la sistematizaci??n del proceso de compra, podr??s
                  tener a la mano los datos de tu empresa y de manera digital.
                  Lo que te permite obtener en tiempo real el estado de las
                  diferentes solicitudes del ??rea de abastecimiento.
                </p>
              </Col>
            </Row>
            <br>
            </br>
             <Container>
              <Row>
                <Col style={{display:"flex"}}>
                  <div
                    style={{
                      height: "90vh",
                      backgroundImage: `url(${iconoApolo3})`,
                      display: "flex",
                      height: "40px",
                      width: "40px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  ></div>
               
                  <p>Obt??n un comparativo mes a mes de tus gastos</p>
                </Col>
              </Row>
              <br></br>
              <Row>
              <Col style={{display:"flex"}}>
                  <div
                    style={{
                      height: "90vh",
                      backgroundImage: `url(${iconoApolo2})`,
                      display: "flex",
                      height: "40px",
                      width: "40px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  ></div>
                
                  <p>
                    Ten un control de gastos comparando tu presupuesto vs tus
                    gastos reales
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
              <Col style={{display:"flex"}} className="me-2 ">
                  <div
                    style={{
                      height: "90vh",
                      backgroundImage: `url(${iconoApolo})`,
                      display: "flex",
                      height: "40px",
                      width: "40px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignItems: "flex-end",
                    }}
                  ></div>
                
                  <p className="ms-2">
                    Aprovecha nuestros indicadores de gesti??n para la planeaci??n
                    de tus operaciones
                  </p>
                </Col>
              </Row>
            </Container> 
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Row>
          <br></br>
          <br></br>
          <Col>
            <h2>??Quieres saber c??mo podemos ayudarte a cumplir tus metas?</h2>
          </Col>
          <Col>
            <Container>
              <div className="row min-vh-100">
                <div className="">
                  <div className="card">
                    {/* <div className="card-body"> */}
                    <form className="multisteps-form__form">
                      {/* <!--single form panel--> */}
                      <div
                        className="multisteps-form__panel border-radius-xl bg-white js-active p-4 position-relative"
                        data-animation="FadeIn"
                      >
                        <h5 className="font-weight-bolder">
                          D??ja tus datos y muy pronto te contactaremos
                        </h5>
                        <div className="multisteps-form__content">
                          <div className="row mt-3">
                            <div className="col-12 col-sm-6">
                              <div className="input-group input-group-dynamic border rounded-pill px-3 border-terciary">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Nombre
                                </label>
                                <input
                                  className="multisteps-form__input form-control rounded-pill px-3"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                              <div className="input-group input-group-dynamic border rounded-pill px-3 border-terciary"> 
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Apellido
                                </label>
                                <input
                                  className="multisteps-form__input form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="input-group input-group-dynamic border rounded-pill px-3 border-terciary">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Correo electronico
                                </label>
                                <input
                                  className="multisteps-form__input form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="input-group input-group-dynamic border rounded-pill px-3 border-terciary">
                                <label
                                  htmlFor="exampleFormControlInput1"
                                  className="form-label"
                                >
                                  Nombre de la empresa
                                </label>
                                <input
                                  className="multisteps-form__input form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="button-row d-flex mt-4">
                            <button
                              className="btn bg-gradient-primary ms-auto mb-0"
                              type="button"
                              title="Send"
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default PrincipalScreen;
