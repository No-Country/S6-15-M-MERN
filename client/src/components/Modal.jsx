
function Modal({children, isOpen, closeModal}) {


  isOpen? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

  
     return ( 
        <article className={` fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 items-center justify-items-center ${isOpen? "flex":"hidden"}`} onClick={closeModal}>
  
        <div className="flex mx-auto" onClick={(e)=>e.stopPropagation()}>
          
          {children}

        </div>
      </article>
     );
}

export default Modal;