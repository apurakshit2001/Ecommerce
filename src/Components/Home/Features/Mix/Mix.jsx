import React from 'react'
import ac from '../../../../assets/ac.jpg';
import fridge from '../../../../assets/fridge.jpg';
import microwave from '../../../../assets/microwavw.jpg'
import wash from '../../../../assets/washing.jpg';

import mop from '../../../../assets/mop.jpg';
import bathroom from '../../../../assets/bathroom.jpg';
import boat from '../../../../assets/boat.jpg';
import boult from '../../../../assets/boult.jpg';
import hammer from '../../../../assets/hammer.jpg';
import noise from '../../../../assets/noise.jpg';
import cushon from '../../../../assets/cushon.jpg';
import storage from '../../../../assets/storage.jpg';
import zebronic from  '../../../../assets/zebronic.jpg';
import plug from '../../../../assets/plug.jpg';
import light from  '../../../../assets/ligjht.jpg';
import figure from '../../../../assets/figure.jpg';
import './Mix.css';
import { Link } from 'react-router-dom';

const Mix = () => {
   
  return (
    <div className='mixFiture'>
      <div className="card">
        <h1 className="cardHeading">Appliances for your home | Up to 55% off</h1>
        <div className="cardProducts">
            <div className="imageDiv">
                <img src={ac} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Air conditioners</caption>
            </div>
            <div className="imageDiv">
                <img src={fridge} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Refrigerators</caption>
            </div>
            <div className="imageDiv">
                <img src={microwave} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Microwaves</caption>
            </div>
            <div className="imageDiv">
                <img src={wash} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Washing machines</caption>
            </div>
        </div>
        <Link to='/MixProductPage' className='seemore'>See More..</Link>
      </div>
      <div className="card">
        <h1 className="cardHeading">Starting ₹99 | Home improvement essentials</h1>
        <div className="cardProducts">
            <div className="imageDiv">
                <img src={mop} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>SpinMops, wipes</caption>
            </div>
            <div className="imageDiv">
                <img src={bathroom} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Bath accessories</caption>
            </div>
            <div className="imageDiv">
                <img src={hammer} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Hammers, screwdrivers & more</caption>
            </div>
            <div className="imageDiv">
                <img src={plug} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Extension boards, plugs & more</caption>
            </div>
        </div>
        <Link to='/MixProductPage' className='seemore'>See More..</Link>
      </div>
      <div className="card">
        <h1 className="cardHeading">Starting ₹149 | Headphones</h1>
        <div className="cardProducts">
            <div className="imageDiv">
                <img src={boat} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Starting ₹249 | boAt</caption>
            </div>
            <div className="imageDiv">
                <img src={boult} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Starting ₹349 | boult</caption>
            </div>
            <div className="imageDiv">
                <img src={noise} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Starting ₹649 | Noise</caption>
            </div>
            <div className="imageDiv">
                <img src={zebronic} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Starting ₹149 | Zebronics</caption>
            </div>
        </div>
        <Link to='/MixProductPage' className='seemore'>See More..</Link>
      </div>
      <div className="card">
        <h1 className="cardHeading">Revamp your home in style</h1>
        <div className="cardProducts">
            <div className="imageDiv">
                <img src={cushon} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Cushion covers, bedsheets & more</caption>
            </div>
            <div className="imageDiv">
                <img src={figure} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Figurines, vases & more</caption>
            </div>
            <div className="imageDiv">
                <img src={storage} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Home storage</caption>
            </div>
            <div className="imageDiv">
                <img src={light} alt="" className='cardProductImg'/>
                <caption className='imgCaption'>Lighting solutions</caption>
            </div>
        </div>
        <Link to='/MixProductPage' className='seemore'>See More..</Link>
      </div>
    </div>
  )
}

export default Mix
