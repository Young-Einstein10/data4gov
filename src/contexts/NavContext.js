import React, { Component, createContext } from 'react';
export const NavContext = createContext();

export default class NavContextProvider extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render() {
    return (
      <NavContext.Provider value={{...this.state, drawerToggleClickHandler: this.drawerToggleClickHandler, backdropClickHandler: this.backdropClickHandler}}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}
