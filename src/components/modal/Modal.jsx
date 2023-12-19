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
  
    render() {
        const {onClose, photo } = this.props
        
        return (
            <div className={css.Overlay} onClick={onClose}>
                <div className={css.Modal} onClick={this.handlerClick}>
                    <img src={photo.largeImageURL} alt={photo.tag} />
                </div>
            </div>
        )
    }
}
