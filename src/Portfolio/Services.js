import React from 'react';
import Card from './Card';
import './Services.css';
import {DiWebplatform} from 'react-icons/di';
import {MdOutlineNoPhotography} from 'react-icons/md';
import {SiAdobeindesign} from 'react-icons/si';

function Services () {
  return (
    <div>
      <div className="container-fluid">
        <div className="services bg-dark" id='services'>
          <div className="row">
            <div className="text-center fs-3 my-3">
              <span className="text-white">
                {' '}MY<span className="text-warning mx-2">SERVICES</span>
              </span>
              <hr className="text-white w-75 mx-auto h-25" />
            </div>
            <div className="col-md-3  offset-md-2">
              <Card
                title={<DiWebplatform />}
                subtitle={'Web Development'}
                text={
                  ' Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic my name is hamza khan bangash.'
                }
              />
            </div>
            <div className="col-md-3 ">
              <Card
                title={<MdOutlineNoPhotography />}
                subtitle={'Best Photographer'}
                text={
                  ' A photographer is an artist who captures and creates images using a camera. Photography is both a science and an art, requiring technical skill and artistic . and their work in our global.'
                }
              />
            </div>
            <div className="col-md-3">
              <Card
                title={<SiAdobeindesign />}
                subtitle={'UX/UI Designer'}
                text={
                  'UX designers combine market research, product development, strategy, and design to create seamless user experiences for products, services,practices to create a flawless user experience.'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
