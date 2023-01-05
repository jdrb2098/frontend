import React from "react";
import Aside from "../../components/Aside";
import ayqlogo from "../../assets/logos/icons/A&Q_Logo.svg";
import { Col, Container, Row, Progres } from "react-bootstrap";
import buscar from "../../assets/logos/icons/buscar.svg";
import { VictoryPie } from "victory";

export const OrdenCompraScreen = () => {
  const data = [
    { product: "Producto A", sales: 45 },
    { product: "Producto B", sales: 25 },
    { product: "Producto C", sales: 20 },
    { product: "Producto D", sales: 10 },
  ];

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
              <h4>Así van tus ordenes de compra</h4>
              <div className="row min-vh-100">
                <div style={{display:"flex"}}>
                  {/* <div className="card-body"> */}

                  <div className="col-7">
                    <label>ODC Generadas:</label>
                    <br></br>
                    <label>En proveedor:</label>
                    <br></br>
                    <label>Liberar ODC: </label>
                    <br></br>
                  </div>

                  <div className="col-4"> 
                    <label>Facturadas:</label>
                    <br></br>
                    <label>Retorno a Solped:</label>
                    <br></br>
                    <label>ODC finalizadas: </label>
                    <br></br>
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </div>
      </div>
    </div>
  );
};
