import React from 'react'
import ClientPanel from '../components/clientpanel'
import Footer from '../components/footer'
import NavbarAdmin from '../components/navbar-admin'
import Photopanel from '../components/photopanel'

const Admin = () => {
  return (
    <div className="admin">
      <NavbarAdmin />
      <ClientPanel />
      <Photopanel />
      <Footer />
    </div>
  )
}

export default Admin