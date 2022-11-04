import React from 'react'
import ClientPanel from '../components/clientpanel'
import Footer from '../components/footer'
import Modal from '../components/modal'
import ModalPhoto from '../components/modalphoto'
import NavbarAdmin from '../components/navbar-admin'
import Photopanel from '../components/photopanel'

const Admin = () => {
  return (
    <div className="admin">
      <NavbarAdmin />
      <ClientPanel />
      <Photopanel />
      <Modal />
      <ModalPhoto />
      <Footer />
    </div>
  )
}

export default Admin