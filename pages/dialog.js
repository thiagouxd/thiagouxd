import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React from 'react'

const dialog = (props) => {
  return (
    <div className="dialog">
      <header className="dialog_header">
        <h2 className="dialog_title">{props.title}</h2>
      </header>
      <div className="dialog_container">

      </div>
      <footer className="dialog_rodape">
        {props.footer}
      </footer>
    </div>
  )
}

export default dialog;