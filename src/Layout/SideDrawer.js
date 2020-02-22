import React from 'react';
import coatOfArms from './../assets/img/1411px-Coat_of_arms_of_Nigeria 1.png';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { NavContext } from './../contexts/NavContext';

const SideDrawer = () => {
  return (
    <NavContext.Consumer>{(context) => {
      const { sideDrawerOpen, drawerToggleClickHandler } = context;

      let drawerClasses = 'sidedrawer';
      if (sideDrawerOpen) {
        drawerClasses = 'sidedrawer open'
      }

      return (
        <section className={drawerClasses}>
          <div onClick={drawerToggleClickHandler} className="close-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M24 2.82811L21.1719 0L12 9.17186L2.82811 0L0 2.82811L9.17186 12L0 21.1719L2.82811 24L12 14.8281L21.1718 24L23.9999 21.1719L14.8281 12L24 2.82811Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
            
          <div className="container m-auto">
            <div className="row">
              <div className="col-4">
                <ul className="sidedrawer__nav list-unstyled">
                  <li className="sidedrawer__nav-item my-4">
                    <img src={coatOfArms} alt="CoatOfArms" />
                  </li>
                  <li className="sidedrawer__nav-item my-4">
                    {/* <Link to="/chartpage">States</Link> */}
                    <a href="/chartpage">States</a>
                  </li>
                  <li className="sidedrawer__nav-item my-4">
                    <a href="/">Projects</a>
                  </li>
                  <li className="sidedrawer__nav-item my-4">
                    {/* <Link to="/">Home</Link> */}
                    <a href="/">Home</a>
                  </li>
                </ul>
              </div>

              <div className="col-8">
                <div className="sidedrawer__para px-3">
                  <h2 className="my-2 text-center">About the Project</h2>
                  <p>
                    Irure adipisicing ex eu laborum aliqua mollit id anim non. Consequat consectetur est aliquip in voluptate exercitation quis officia quis . Nostrudconsectetur ullamco labore consectetur voluptate non sunt nulla excepteur. Magna nulla dolore sunt tempor ex deserunt non. eiusmod eu id aliquip laborum quis eu occaecat tempor incididunt labore ad in. Ad id reprehenderit ullamco occaecat officia aliquip voluptate voluptate voluptate. Eu elit laboris veniam ut est. Fugiat aute nulla commodo laboris ullamco aliquip non cillum id anim aliqua. sit exercitation exercitation amet ex est reprehenderit exercitation consectetur deserunt quis. Sit pariatur officia incididunt dolor non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }}</NavContext.Consumer>    
  )
}
 
export default SideDrawer;
