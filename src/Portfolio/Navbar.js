import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar () {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-md bg-dark py-3">
              <div class="container-fluid">
                {/* <a class="navbar-brand text-warning" href="#">Portfolio</a> */}
                <div className='nav1 text-primary mx-2'>
                  <h3 className='bord m-2'>Hamza Khan</h3>
                </div>
                <button
                  class="navbar-toggler text-warning bg-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon bg-white" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav mx-auto ">
                    <li class="nav-item ">
                      <a
                        class="nav-link active text-warning mx-4 fs-5 "
                        aria-current="page"
                        href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-warning mx-4 fs-5" href="#About">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link  text-warning mx-4 fs-5"
                        href="#services"
                      >
                        Services
                      </a>
                    </li>

                     <li class="nav-item">
                    
                      <a
                        class="nav-link text-warning mx-4 fs-5 "
                        href="#project"
                        aria-disabled="true"
                      >
                        Project{' '}
                      </a>
                    </li>
                  
                    
                    <li class="nav-item">
                      <a
                        class="nav-link text-warning mx-4 fs-5 "
                        href="#contact"
                        aria-disabled="true"
                      >
                        Contact{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
