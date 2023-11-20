import React from 'react';

function Card({title,subtitle,text,image}) {
  return (
    <div>
      <div className="card cardion  text-white border-white my-3 mx-2 py-4 text-center word-break">
        <img src={image}  alt="" className='w-100' />
        <div className="card-body">
          <div className="card-title icon">
            <h3>{title}</h3>
          </div>
          <div className="card-subtitile  py-2 fw-bold">
                <span>{subtitle}</span>
          </div>
          <div className="card-text lh-base fw-light">
                <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
