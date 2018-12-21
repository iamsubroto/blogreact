import React from 'react'

export default function About() {
  return (
    <div className="container">
      <h4 className="display-4">Blog Post</h4>
      <p>V 1.0.0</p>
      <p>A product of <span className="badge badge-primary">templateBazar</span></p>

      <ul className="list-group w-50">
      <li className="list-group-item d-flex justify-content-between">
       <span><i className="fas fa-envelope"></i> E-mail </span>
       <span>templatebazar500@gmail.com</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span><i className="fab fa-whatsapp"></i> Whatsapp</span>
      <span>+91 829 2020 622</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
      <span><i className="fas fa-map-marker-alt"></i> Address</span>
      <span>Ramgarh,Jharkhand,India</span>
      </li>
      </ul>
    </div>
  )
}
