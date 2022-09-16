import React from 'react'
import PortfolioC from '../components/portfolio_content'
import PortfolioP from '../components/portfolio_photos'

const Portfolio = () => {
  return (
    <div>
    <div className="barra">
    </div>
    <div className="portfolio">
        <PortfolioC />
        <PortfolioP />
        <PortfolioP />
        <PortfolioP />
        <PortfolioP />
        <PortfolioP />
    </div>
    <div className="barra"> </div>
    </div>
  )
}

export default Portfolio