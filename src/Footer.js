import React from "react";
import "./Footer.css";
import { Translate,Facebook,Instagram,Twitter } from "@material-ui/icons";


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__innerbox">
            <div className="footer__inner1">
              <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg"
                alt="Caor eats"
                width="146"
                height="24"
              />

              <div className="footer__inner1footer">
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg"
                  alt="app store"
                />
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png "
                  alt="Descargar en google play store"
                />
              </div>
            </div>
            <div className="footer__inner2">
              <h3> Acerca de Caor Eats </h3>
              <h3> Lee acerca de nosotros en Facebook </h3>
              <h3> Compra tu almuerzo con nosotros </h3>
              <h3> Crea una cuenta de negocios </h3>
              <h3> Agrega tu negocio </h3>
              <h3> Registrate para recibir tu pedido </h3>
            </div>

            <div className="footer__inner3">
              <h3> Obtener ayuda </h3>
              <h3> Ver los lugares donde recibir tu pedido </h3>
              <h3> Ver todos los lugares </h3>
              <h3> Comida cerca de mi </h3>
              <h3> Ahorra en tu primera orden </h3>
              <h3 className="footer__english">
                <Translate /> English{" "}
              </h3>
            </div>
          </div>
          <div className="footer__innerbox2">
            <hr />
            <div className="footer__innerbox21">
              <div className="footer__innerbox2icons">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
              <div className="footer__innerbox2info">
                <h3> Privacidad </h3>
                <h3> Terminos y condiciones de servicio </h3>
                <h3> Precios </h3>
                
<h3> Tu informacion protegida </h3>

              </div>
            </div>
            <div className="footer__innerbox22">
              <h3>
                Este sitio es protegido por reCAPTCHA y Google{" "}
                <span> Politicas de privacidad </span> - {" "}
                <span> Terminos de servicio </span> que aplican.{" "}
              </h3>
              <h3> &copy; 2021 NajeraDev. </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
