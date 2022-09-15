import React, { useState } from 'react'
import PropTypes from 'prop-types'
import UploadIcon from '../../assets/upload.svg'

const Uploader = ({ setFile }) => {
  const [currentFile, setCurrentFile] = useState(undefined)

  function handleFormSubmit (e) {
    e.preventDefault()
    if (currentFile) setFile(currentFile)
  }

  function handleInputChange (e) {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], 'UTF-8')
    fileReader.onload = e => {
      setCurrentFile(JSON.parse(e.target.result))
    }
  }

  return (
    <div className='uploader'>
      <img src={UploadIcon} alt='importer un fichier JSON' className='upload-icon'/>
      <form id='upload-form' onSubmit={handleFormSubmit}>
        <label htmlFor='file-input'>Importer plusieurs profils en JSON</label>
        <input id='file-input' type='file' onChange={handleInputChange} />
        <button type='submit' className={currentFile ? 'submit-button' : 'submit-button inactive'}>Envoyer</button>
      </form>

    </div>

  )
}

Uploader.propTypes = {
  setFile: PropTypes.func
}

export default Uploader
