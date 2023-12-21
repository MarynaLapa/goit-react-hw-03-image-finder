import css from './modal.module.css'
import React, { Component } from 'react'

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handlerClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlerClick);
    }
    
    handlerClick = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose(); 
        }
    }
  
    handlerCloseModal = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        
        return (
            <div className={css.Overlay} onClick={this.handlerCloseModal}>
                <div className={css.Modal} onClick={this.handlerClick}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
