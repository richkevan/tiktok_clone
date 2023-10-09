import { PropsWithChildren, useState } from "react"

type PropsWithClassName = PropsWithChildren & {className?: string}

const useModal = () => {
  const [show, setShow] = useState(false)


  const showModal = () => { 
    setShow(true)
  }

  const Modal = ({children, className = ""}:PropsWithClassName) => {
    return(
      <div className={`${show ? " opacity-100" : " opacity-0 hidden"}`}>
    <div className="w-screen h-screen top-0 bg-black bg-opacity-80 absolute"
    onClick={() => {setShow(false)}}>
    </div>
    <div 
    className={"transition-all duration-1000 ease-in-out bg-white absolute top-32 left-1/3 w-1/3 h-2/3 rounded p-12" + className}
    >
      <span 
      className="text-black absolute top-4 right-4 font-bold text-2xl cursor-pointer"
      onClick={() => setShow(false)}>X</span>
      {children}
    </div>
    </div>
    )
  }
  return {Modal, show, showModal}
}

export default useModal