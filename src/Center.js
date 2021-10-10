import React from 'react';
import './Center.css';
import { Android, Apple } from '@material-ui/icons';
import CenterBox from './CenterBox';



function Center() {
    return (
        <>
            <div className="center">
                <div className="center__header">
                    <div className="center__headerbox">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/0c6de4f0b3884eb89b28a29ecbc10d59.svg" alt="uber eats" />
                        <h1>   Aqui va el slogan </h1>
                        <p>
                            <Apple />
                            <span>   iPhone </span>
                        </p>
                        <p>
                            <Android />
                            <span>  Android </span>
                        </p>

                    </div>

                </div>
                <div className="center__center">
                    <CenterBox title="Califica el servicio" description="Crear una cuenta para tu negocio" imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cef389b486cb4827e6ba007f26ebddab.svg" />
                    <CenterBox title="Mas clientes a tu alcance" description="Agrega tu local" imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7f56b34e6c253cb54a35bacf5150dde9.svg" />
                    <CenterBox title="Gran servicio de entrega" description="Registrate para tu entrega" imgurl="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/84d6770ca439c4b1ba2d6f53adc1d039.svg" />


                </div>
                <div className="center__footer">
                    <div className="center__footercity">
                        <div className="city__header">
                            <h3>   Restaurantes cerca de ti </h3>
                            <h2>   Mayor variedad  </h2>


                        </div>
                        <div className="city__map">
                            <iframe

                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14805.855470340182!2d-101.97237802017472!3d21.916711818384908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a1a44e35b56d9%3A0xc88da97b90b9a00e!2s20330%20Palo%20Alto%2C%20Aguascalientes!5e0!3m2!1sen!2smx!4v1633892811896!5m2!1sen!2smx"

                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                title="cities near me "
                            />
                        </div>
                        {/* <div className="city__citylist">
                            <p> Atlanta</p>
                            <p> Austin</p>
                            <p>Baltimore-Maryland </p>
                            <p> Boston</p>
                            <p> Charlotte</p>
                            <p>Chicago </p>

                            <p> Dallas-Fort Worth </p>
                            <p>Denver</p>
                            <p>Las Vegas</p>
                            <p>Los Angeles</p>
                            <p>Miami </p>
                            <p>Minneapolis - St. Paul </p>

                            <p> New York City </p>
                            <p> Orange County</p>
                            <p> Palm Springs </p>
                            <p> Philadelphia</p>
                            <p> Phoenix</p>
                            <p> Portland</p>

                            <p> Sacramento</p>
                            <p> San Diego</p>
                            <p> San Francisco Bay Area</p>
                            <p> Seattle</p>
                            <p> Tampa Bay</p>
                            <p> Washington D.C.</p>

                        </div> */}

                    </div>
                    <div className="center__footercountry">

                        <h3> Lugares con Caor Eats  </h3>
                        <div className="country__countrylist">

                            <p> Palo Altote</p>
                            <p>Playotas </p>
                            <p>El moquete</p>
                            <p>La luz</p>
                            <p>La paz</p>
                            <p>Etc... Etc... </p>
                            
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}



export default Center