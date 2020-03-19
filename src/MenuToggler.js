import React from 'react';
const MenuToggler = props => {
    const menuStyle = {
        transform: 'rotate(-45deg)',
    }

    const startBarStyle = {
        transform: 'rotate(-90deg) translateX(.8rem)',
    }

    const endBarStyle = {
        transform: 'rotate(-90deg) translateX(-.8rem)',
    }
    return(
        <React.Fragment>
            <div 
                className="menu-toggler" 
                style={props.toggled ? menuStyle : {}}
                onClick={e => props.handleToggle()}
            >
                <div className="bar half start"
                    style={props.toggled ? startBarStyle : {}}
                />
                <div className="bar"></div>
                <div className="bar half end"
                    style={props.toggled ? endBarStyle : {}}
                />
            </div>
        </React.Fragment>
    )
}
export default MenuToggler;