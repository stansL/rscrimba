import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';


// const MyApp = (props) => {
//     return (
//         <div style={{ color: 'blue' }} className = "container">
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     );
// }

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ color: 'blue' }} className="container">
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }


}

export default MyApp;