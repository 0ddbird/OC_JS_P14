import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ title, content, modalDisplayed, setModalDisplayed }) => {
  function handleCloseModal () {
    setModalDisplayed(false)
  }

  return (
    <div className={modalDisplayed ? 'modal displayed' : 'modal hidden'}>
      <h1 className='modal-title'>{title}</h1>
      <span className='modal-content'>{content}</span>
      <button className='modal-close' onClick={handleCloseModal}>x</button>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  modalDisplayed: PropTypes.bool,
  setModalDisplayed: PropTypes.func
}
export default Modal
