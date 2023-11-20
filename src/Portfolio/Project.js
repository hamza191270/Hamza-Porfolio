import React from 'react';
import Card from './Card';
import download from '../Portfolio/PortImages/download.jpg';
import clothes from '../Portfolio/PortImages/clothes.jpg';
import school4 from '../Portfolio/PortImages/school4.jpg';

function Project () {
  return (
    <div>
      <div className="container-fluid ">
        <div className="project bg-dark text-center py-4" id="project">
          <div className="row">
            <div className="text-center my-4">
              <h5 className="text-white">
                MY <span className="text-warning">PROJECT</span>
              </h5>
              <hr className="w-75 text-white mx-auto" />
            </div>
            <div className="col-md-3 offset-md-2">
              <div className="card border-0 mx-3 my-3 shadow-lg ">
                <div className="card-images">
                  <img src={download} alt="" className="w-100" />
                </div>
                <div className="card-body">
                  <div className="title">
                    <h6 className="fw-bolder">Resturent Website</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?
                    </p>
                  </div>
                  <div>
                    <button className="border-0 btn btn-warning text-white">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 mx-3 my-3 shadow-lg">
                <div className="card-images">
                  <img src={clothes} alt="" className="w-100 h-100" />
                </div>

                <div className="card-body">
                  <div className="title">
                    <h6 className="fw-bolder">My School Website</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?
                    </p>
                  </div>
                  <div>
                    <button className="border-0 btn btn-warning text-white">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 mx-3 my-3 shadow-lg">
                <div className="card-images">
                  <img src={school4} alt="" className="w-100" />
                </div>
                <div className="card-body">
                  <div className="title">
                    <h6 className="fw-bolder">Ecommerce For Clothes</h6>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores?
                    </p>
                  </div>
                  <div>
                    <button className="border-0 btn btn-warning text-white">
                      More Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
