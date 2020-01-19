import React from 'react';

// const Header = (props) => {
//     return (
//         <header style={{ backgroundColor: '#33f3' }}>
//             <nav className="nav justify-content-center" >
//                 <a className="nav-link active" href="#">Active</a>
//                 <a className="nav-link" href="#">Link</a>
//                 <a className="nav-link" href="#">Link</a>
//                 <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//             </nav>
//         </header>
//     );

// };

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <header style={{ backgroundColor: '#33f3' }}>
                <nav className="nav justify-content-center" >
                    <a className="nav-link active" href="#">Active</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </nav>
                {/* {this.state.isLoggedIn && <div style={{ float: "right" }}>You are  </div>} */}
                 <div style={{ float: "right" }}>You are currently logged {this.state.isLoggedIn ? "in": "out"} </div>
            </header>

        );
    }
}

export default Header;