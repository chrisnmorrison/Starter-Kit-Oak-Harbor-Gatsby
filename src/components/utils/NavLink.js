import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
    render() {
        console.log(window.location.pathname, this.props.to)
        let isActive = window.location.pathname == this.props.to;
        let className = isActive ? 'active' : '';

        return(
            <Link activeClassName="active" className={className} {...this.props} style={this.props.style}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;