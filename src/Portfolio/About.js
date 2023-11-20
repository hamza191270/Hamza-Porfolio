import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import hamza from '../Portfolio/PortImages/hamza.jpg';

function About () {
  useEffect (() => {
    AOS.init ({duration: 3000});
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="about bg-dark text-white py-5 text-center" id="About">
          <div className="row">
            <div className="text-center my-3">
              <h5 className="text-warning ">
                ABOUT<span className="text-white mx-2">US</span>
              </h5>
            </div>
            <hr className="mx-auto w-75 text-white mb-5" />
            <div className="col-md-6" data-aos="zoom-in-right">
              <div>
                <img
                  src={hamza}
                  alt=""
                  className="w-75 h-50"
                />
              </div>
            </div>
            <div className="col-md-6 overflow-hidden" data-aos="zoom-in-left">
              <div>
                <h3>Hello, I am Hamza Khan</h3>
                <p className="mt-3 lh-lg">
                  Web developers create functional, user-friendly websites and web applications.
                  {' '}
                  <br />
                  {' '}
                  develop and test new applications, or monitor site performance and traffic.
                  <br />
                  {' '}
                  Front-end developers focus on the user-facing side of their work,
                  <br />
                  {' '}
                  while back-end developers make websites functional and secure.
                </p>
              </div>
              <div className="my-4 mx-1 lh-lg">
                <div className="d-flex flex-row ">
                  <h6>Name</h6>
                  <span className="mx-5">Hamza Khan</span>
                </div>
                <div className="d-flex flex-row">
                  <h6 className="">Birth date : </h6>
                  <span className="mx-5 ">07/02/2000</span>
                </div>
                <div className="d-flex flex-row">
                  <h6>Address</h6>
                  <span className="mx-5">Peshawer</span>
                </div>
                <div className="d-flex flex-row">
                  <h6>Phone</h6>
                  <span className="mx-5">+923369199190</span>
                </div>
                <div className="d-flex flex-row">
                  <h6 className="my-1">Email</h6>
                  <span className="mx-0  mx-md-5">
                    hamzakhanbangash29@gmail.com
                  </span>
                </div>
                <div className="my-4 ">
                  <button className="btn btn-primary">Download CV</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
