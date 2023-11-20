import React from 'react';
import './Home.css';
import hamza from '../Portfolio/PortImages/hamza.jpg'
import {useTypewriter} from 'react-simple-typewriter';
import {RiTwitterXFill, RiFacebookFill} from 'react-icons/ri';
import {SiIndeed} from 'react-icons/si';

function Home () {
  const [text] = useTypewriter ({
    words: ['Web Designer', 'Web Developer', '', 'Learner!'],
    loop: 3,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });
  return (
    <div>

      <div className="container-fluid">
        <div className="home bg-dark text-white py-3" id="home">
          <div className="row">
            <div className="col-md-4 offset-md-1 my-5">
              <div className="fs-4 text-center my-5">
                <h5 className="text-warning">Welcome,</h5>
                I am <span className="text-danger">{text}</span>
                <p className="mt-3 fw-light">
                  Lorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur, adipisicing elit. Autem, dolorem!
                </p>
              </div>
              <div className="text-center  fs-4">
                <RiTwitterXFill href="" className="text-white mx-3 ico " />
                <RiFacebookFill href="" className="text-primary mx-3 ico" />
                <SiIndeed href="" className="text-primary mx-3 ico" />
              </div>
            </div>
            <div className="col-md-5 offset-md-1   my-5">
              <div>
                <img
                  src={hamza}
                  className="w-75 mx-4 h-75 mt-1 mt-md-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
