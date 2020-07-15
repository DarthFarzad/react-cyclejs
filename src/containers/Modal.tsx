import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deselectMovie } from '../actions';

class Modal extends React.Component<any, any>{
    private el: HTMLDivElement;
    private MODAL_NODE: HTMLElement | null;
    constructor(props:any) {
        super(props);
        this.handleDeselectMovie = this.handleDeselectMovie.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
        this.MODAL_NODE = document.getElementById('modal');
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.MODAL_NODE?.addEventListener('click', this.handleDeselectMovie);
        this.el.addEventListener('click', this.handleChildClick);
        this.handleShowModal();
        // @ts-ignore
        this.MODAL_NODE.appendChild(this.el);
    }

    componentWillUnmount() {
        this.MODAL_NODE?.removeEventListener('click', this.handleDeselectMovie);
        this.el.removeEventListener('click', this.handleChildClick);
        this.handleShowModal();
        // @ts-ignore
        this.MODAL_NODE.removeChild(this.el);
    }

    handleShowModal(){
        const classNames = ['d-none', 'modal--open', 'show'];
        classNames.map((name:string)=> this.MODAL_NODE?.classList.toggle(name));
    }

    handleDeselectMovie(){
        this.props.deselectMovie();
    }
    handleChildClick(event:Event){
        event.stopPropagation();
    }

    render() {
        const {} = this.props;
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        )
    }
}


export default connect(() =>({}), { deselectMovie })(Modal);