import React from 'react'
import PortfolioC from '../components/portfolio_content'
import PortfolioP from '../components/portfolio_photos'

import { useState, useEffect } from 'react'
import Axios from 'axios'
import NavbarAdmin from '../components/navbar-admin'
import Footer from '../components/footer'

const Portfolio = () => {
  const [photoinfo, setPhotoinfo] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getphoto").then((response) => {
      setPhotoinfo(response.data);
    });
  });

  return (
    <div>
      <NavbarAdmin />
      <div className="barra">
      </div>
      <div className="portfolio">
        <PortfolioC />
        {typeof photoinfo !== "undefined" &&
          photoinfo.map(item => {

            return (
              <PortfolioP key={item.id} foto={item.foto} titulo={item.titulo} descricao={item.descricao} data={item.data} local={item.local} autor={item.autor} />
            );
          })}
      </div>
      <div className="barra"> </div>
      <Footer />
    </div>
  )
}

export default Portfolio