import { PropsWithChildren, useState } from "react"

type PropsWithClassName = PropsWithChildren & {className?: string}

const useHoverMenu = () => {
  const [show, setShow] = useState(false)


  const showHoverMenu = () => { 
    setShow(true)
  }

  const HoverMenu = ({children, className}:PropsWithClassName) => {
    return(
    <div 
    className={"transition-all duration-1000 ease-in-out bg-white " + className + `${show ? " opacity-100" : " opacity-0 hidden"}`}
    onMouseEnter={() => {showHoverMenu()}}
    onMouseLeave={() => {setShow(false)}}
    >
      {children}
    </div>
    )
  }
  return {HoverMenu, show, showHoverMenu}
}

export default useHoverMenu