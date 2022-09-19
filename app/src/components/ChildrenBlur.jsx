import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const ChildrenBlur = ({ children, onBlur, ...props }) => {
  const handleBlur = useCallback(
    (e) => {
      const currentTarget = e.currentTarget
      requestAnimationFrame(() => {
        if (!currentTarget.contains(document.activeElement)) onBlur()
      })
    },
    [onBlur]
  )

  return (
    <div {...props} onBlur={handleBlur}>
      {children}
    </div>
  )
}

ChildrenBlur.propTypes = {
  children: PropTypes.node,
  onBlur: PropTypes.func

}
export default ChildrenBlur
