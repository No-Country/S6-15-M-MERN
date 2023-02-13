import  ReactDom  from "react-dom";

function Modal(children,backgroundStyle,innerStyle,isOpen) {
    if (!isOpen) {
        return null
    }

    return ReactDom.createPortal  (
        <>  
        <div className={backgroundStyle}>
         <div className={innerStyle}>
         <div>
            {children}
         </div>
         </div>   

        </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;