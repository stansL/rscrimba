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
            </header>
        );
    }
}

export default Header;