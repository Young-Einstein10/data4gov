import React, { Component } from 'react';
import Dropdown  from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import coatOfArms from './../assets/img/1411px-Coat_of_arms_of_Nigeria 1.png';
import Nigeria from "./../Nigeria.js";
import { NavContext } from './../contexts/NavContext';
import './ChartPage.css';
import { Link } from 'react-router-dom';

const Column2 = () => {
  return (
    <div className="column2">
      <div className="text-center mt-4">
        <img src={coatOfArms} alt="Coat Of Arms" />
      </div>
    </div>
  )
}

const projects = ['Crop Production', 'Fishery', 'Forestry', 'LiveStock', 'Marketing', 'Poultry', 'Processing', 'Rural Infrastructure']

const Column3 = () => {
  return (
    <div className="column3 text-center">
      <h3>SUB-PROJECT ENTERPRISE</h3>
      <div>
      {
        projects.map((project, index) => (
          <div key={index} className="my-2">
            <p className="mb-0">{project}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}


export default class ChartPage extends Component {
  state = {
    states: ["Bayelsa"],
    LGAs: ["Brass", "Ekeremor", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa", "Kokokuma Opokuma"]
  };

  static contextType = NavContext;

  render() {
    const { LGAs } = this.state;
    const { drawerToggleClickHandler } = this.context;

    return (
      <div>
        <div className="app-item">
          <div className="column1">
            {/* Navigation */}
            <div className="navigation" style={{display: 'flex', margin: '2.5rem 1.5rem', }}>
              <div className="hamburger mx-3" style={{cursor: 'pointer'}} onClick={drawerToggleClickHandler}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M5.39893 3.62073H24.2561V7.04927H5.39893V3.62073Z" fill="white"/>
                  <path d="M5.14258 10.2857H22.2854V13.7143H5.14258V10.2857Z" fill="white"/>
                  <path d="M5.39893 17.8474H24.2561V21.2759H5.39893V17.8474Z" fill="white"/>
                  <path d="M0.0639648 3.62073H3.49251V7.04927H0.0639648V3.62073Z" fill="white"/>
                  <path d="M0.0639648 10.734H3.49251V14.1626H0.0639648V10.734Z" fill="white"/>
                  <path d="M0.0639648 17.8474H3.49251V21.2759H0.0639648V17.8474Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="search mx-3" style={{cursor: 'pointer'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6125 15.4914C18.7935 13.8787 19.4999 11.8977 19.4999 9.7501C19.4999 4.37415 15.1259 0.00012207 9.74993 0.00012207C4.37398 0.00012207 0 4.37415 0 9.7501C0 15.1261 4.37403 19.5001 9.74998 19.5001C11.8975 19.5001 13.8787 18.7936 15.4915 17.6126L21.8789 24L24 21.8789C24 21.8789 17.6125 15.4914 17.6125 15.4914ZM9.74998 16.5001C6.02781 16.5001 3.00001 13.4723 3.00001 9.7501C3.00001 6.02794 6.02781 3.00013 9.74998 3.00013C13.4721 3.00013 16.4999 6.02794 16.4999 9.7501C16.4999 13.4723 13.4721 16.5001 9.74998 16.5001Z" fill="white"/>
                </svg>
              </div>
            </div>
              
            {/* States */}
            <div className="states">
              <select className="states__list mx-auto">
                {
                  Nigeria.map((state, index) => {
                    const { states: { name } } = state;
                    return (
                      <option className="states__list-item" key={index}>{name}</option>
                    )
                  })
                }
              </select>
            </div>
           
    
            {/* LGAs */}
            <div className="LGAs text-center">
              <ListGroup>
              <h4 className="LGA__list-header">LGAs</h4>
                {
                  LGAs.map((lga, index) => {
                    return (
                      <li className="LGA__list-item" key={index}>
                        <Link style={{color: '#fff', textDecoration: 'none'}} to={`/${lga}`}>{lga}</Link>                
                      </li>
                    )
                  })
                }
              </ListGroup>
            </div>
          </div>


          <Column2 />
          <Column3 />
        </div>       
      </div>
    )
  }
}
