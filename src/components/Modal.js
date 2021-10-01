import React, { useRef, useState } from 'react'
import "../Modal.css"



const Modal = ({pic}) => {

    const {caption, setCaption}  = useState();
    const modalRef = useRef(null);
    const modalImgRef = useRef(null);
    const captionRef = useRef(null);

    const enlarge =(e) => {
        modalRef.current.style.display = "block";
    }

    const pushClose=()=> {
        modalRef.current.style.display = "none";
    }
    return (
        <>
            <img  id = "main-img" className="card-img-top" src={pic.thumbnailUrl} alt={pic.title}  onClick={enlarge} />

            <div id="my-modal" className="modal" ref={modalRef}>
                <span className="close" onClick={pushClose} >&times;</span>
                <img className="modal-content"  id="modal-img" src={pic.url}  onClick={pushClose}/>
                <div id="caption" >{pic.title}</div>
            </div>
        </>
    )
}

export default Modal
