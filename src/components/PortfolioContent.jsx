import React, { Component } from 'react';

import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';


class PortfolioContent extends Component {
    render() {
        return (
            <div class="portfolio-content">
                
                <Header/>

                <Summary/>

                <section>
                    <ContactInfo/>
                </section>
            </div>
        )  
    }
}

export default PortfolioContent