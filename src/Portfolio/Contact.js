import React from 'react';
import pakmap from './PortImages/pakmap.jpg';

function Contact () {
  return (
    <div>
      <div className="container-fluid">
        <div className="contact bg-dark text-center" id='contact'>
          <div className="row">
          <div className="text-center fs-3 my-3">
              <span className="text-white">
                {' '}MY<span className="text-warning mx-2">CONTACT</span>
              </span>
              <hr className="text-white w-75 mx-auto h-25" />
            </div>
            <div className="col-md-11 mx-auto offset-md-1">
              <div className="card mx-3 my-3">
                <div>
                  <img src={pakmap} alt="" className=" mx-auto w-100 h-25" />
                </div>

              </div>
            </div>
            <div className="col-md-5 offset-md-3">
              <div className="text-white mx-3 my-3">
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      UserName
                    </label>
                    <input
                      placeholder="UserName"
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class=" mx-auto">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      placeholder="Email Address"
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  {/* <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div> */}
                  <div class="form-floating my-3 text-white">
                  <label for="floatingTextarea text-white">Comments</label>
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    />
                  </div>
                  <button type="submit" class="btn btn-warning">Message Me</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
