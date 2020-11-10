import React, { Component } from 'react'
import Icon from 'feather-icons-react'
import style from './dialog.module.scss'

let open = false;
let lastElement;
let idOpened;
let allElements;

export default class Dialog extends Component {
  show(id) {
    debugger
    lastElement = document.activeElement;
    idOpened = id;
    open = true;
    let lastElementInternal = document.createElement('SPAN');
    document.getElementById(idOpened).appendChild(lastElementInternal);
    allElements = document.querySelectorAll(`#${idOpened} *`);
    document.getElementById(idOpened).classList.add(style.dialog_active);
    allElements[1].setAttribute('tabindex', '0');
    allElements[1].focus();
    document.body.style.overflowY = 'hidden';
    this.focusInternal();
  }

  focusInternal() {
    allElements[allElements.length - 1].setAttribute('tabindex', '0');
    allElements[allElements.length - 1].addEventListener('focus', () => {
      allElements[1].focus();
    });
    allElements[0].setAttribute('tabindex', '0');
    document.onkeydown = (e) => {
      e = e || window.event;
      this.focusLoop(e);
      if (e.keyCode === 27) {
        this.close();
      }
    };
  }

  focusLoop(e) {
    allElements[0].addEventListener('focus', () => {
      if (e.shiftKey && e.keyCode === 9) {
        allElements[1].focus();
      }
    });
  }

  close() {
    const open = document.getElementById(idOpened);

    if (open.classList.contains(style.dialog_active)) {
      open.classList.remove(style.dialog_active);
      allElements[allElements.length - 1].remove();
      lastElement.focus();
      document.body.style.overflowY = 'auto';
    }
  }

  blockEsc() {
    document.onkeydown = (e) => {
      e = e || window.event;
      this.focusLoop(e);
      if (e.keyCode === 27) {
        return;
      }
    };
  }

  size() {
    if (this.props.size === "xsmall") { return style.dialog_xsm }
    if (this.props.size === "small") { return style.dialog_sm; }
    if (this.props.size === "medium") { return style.dialog_md; }
    if (this.props.size === "large") { return style.dialog_lg; }
    if (this.props.size === "xlarge") { return style.dialog_xlg; }
  }

  preventClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div onClick={() => this.close()} className={[style.dialog, this.size()].join(' ')
      } id={this.props.id} >
        <div onClick={(e) => this.preventClick(e)} className={style.dialog__container}>
          <header className={style.dialog__header}>
            <h2 className={style.dialog__title}>{this.props.title}</h2>
            <p className={style.dialog__subtitle}>{this.props.subtitle}</p>
          </header>

          <div className={style.dialog__content}>
            {this.props.content}
          </div>

          <footer className={style.dialog__footer}>
            {this.props.footer}
          </footer>

          <button className={style.dialog__buttonClose} type="button" onClick={() => this.close()} aria-label="Fechar diálogo">
            <Icon icon="x" />
          </button>
        </div>
      </div >
    )
  }
}