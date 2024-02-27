import { createPortal } from 'react-dom'
import { useState } from 'react'

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  const [clicked, setClicked] = useState(false)

  // TODO: handle button click to change state
  const handleClick = () => setClicked(true)
  // TODO: conditionally show this based on open state
  if (!clicked) {
    return (
      <>
        {createPortal(
          // TODO: style with the specifications given in the README
          <div
            style={{
              height: '20rem',
              width: '20rem',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'lightblue',
            }}
          >
            <button onClick={() => handleClick()}>Click Me!</button>
          </div>,
          modalRoot as Element,
        )}
      </>
    )
  }
}
