import { PropsWithChildren } from "react"
import SvgSprite from "./svg-sprite"
import {ReactComponent as Plus} from "../assets/plus.svg"
import {ReactComponent as VertElipsis} from "../assets/vert-elipsis.svg"
import {ReactComponent as Search} from "../assets/search.svg"
import {ReactComponent as Home} from "../assets/home.svg"
import {ReactComponent as Following} from "../assets/following.svg"
import {ReactComponent as Explore} from "../assets/explore.svg"
import {ReactComponent as Live} from "../assets/live.svg"
// import { useFirebaseAuth } from "../_firebase/auth-context"
import useHoverMenu from "./hover-menu"
import useModal from "./modal"
import SignInForm from "./forms/sign-in"

const mainNav = [
  {
    name: "For You",
    Icon: Home,
    url: "foryou"
  },
  {
    name: "Following",
    Icon: Following,
    url: "following"
  },
  {
    name: "Explore",
    Icon: Explore,
    url: "explore"
  },
  {
    name: "LIVE",
    Icon: Live,
    url: "live"
  },
]

const Layout = ({children}:PropsWithChildren) => {
  // const { user, sign_In, sign_Out} = useFirebaseAuth()
  const { HoverMenu, showHoverMenu } = useHoverMenu()
  const { Modal, showModal } = useModal()

  const handleActiveNav = ({url}:{url: string}) => {
    if(window.location.pathname.includes(url)) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
    {/* Header */}
    <header className="border-b-2 border-b-gray-400 h-16 flex items-center justify-between pl-4 pr-6 fixed top-0 w-full">
      <div className="min-w-[300px]">
      <SvgSprite sprite="#logo-dark-1ef9a37a" className="w-[118px] h-11"/>
      </div>
      <div className="w-[516px] min-w-[200px] px-2">
        <form className=" relative flex items-center py-3 px-4 m-0 bg-gray-300 rounded-full overflow-hidden">
        <input type="search" placeholder="Search" className=" bg-inherit w-full"/>
        <span className=" h-7 w-[2px] bg-black -my-[3px]"></span>
        <button type="submit" className="bg-inherit p-3 -my-3 -mr-4">
          <Search/>
        </button>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <a href="/upload">
        <div className="flex items-center rounded-[2px] px-4 h-9 border-2 border-gray-300 "><Plus />Upload</div>
        </a>
        <button 
        className="flex items-center justify-center rounded-[4px] px-2 py-[6px] min-h-9 min-w-[100px] 
        bg-[#fe2c55] text-white font-semibold"
        onClick={() => showModal()}
        >Log in</button>
        <div 
        className="relative"
        onMouseEnter={() => {showHoverMenu()}}>
        <VertElipsis className=" w-5 h-5" />
        <HoverMenu className="fixed top-16 right-0 rounded shadow-lg font-semibold ">
          <ul>
            <li className="hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2">LIVE Creator Hub</li>
            <li className="hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2">English</li>
            <li className="hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2">Feedback and help</li>
            <li className="hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2">Keyboard shortcuts</li>
          </ul>
        </HoverMenu>
        </div>
      </div>
    </header>
    {/* Main page */}
    <div className="flex mt-16">
      {/* Sidebar Navigation */}
      <aside className="border-r-2 border-r-gray-300 w-[240px] fixed left-0 top-16 px-2 py-4 h-[calc(100vh-64px)] flex flex-col">
        <ul>
          {mainNav.map(({name, Icon, url}) => (
            <li key={url} className=" p-2 hover:bg-gray-300 hover:bg-opacity-30">
              <a id={url} href={import.meta.env.BASE_URL + url} className={'flex items-center' + `${handleActiveNav({url}) ? " text-[#fe2c55] fill-[#fe2c55]":" text-black fill-black"}`}>
                  <Icon className="w-8 h-8 fill-inherit"/>
                  <span className=" text-lg font-semibold text-inherit">{name}</span>
              </a>
            </li>
          ))}
          <hr />
        </ul>
        <div className="px-4 pt-5 pb-6 flex flex-col">
          <p>Log in to follow creators, like videos, and view comments.</p>
          <button className="border-2 border-[#fe2c55] px-2 py-[6px] rounded mt-5 min-w-[168px] text-[#fe2c55] w-full">Log in</button>
        </div>
        <div className="flex-1"></div>
        <hr />
        <div className=" pt-4 pl-2">
          <div className="pr-2 mb-8 flex justify-center items-center rounded-lg bg-[url(./045b2fc7c278b9a30dd0.png)] h-[52px] bg-cover bg-no-repeat w-full bg-center cursor-pointer">
            <div className="flex hover:scale-110 transition-all duration-500">
              <SvgSprite sprite="#eh-logo-a5ac4daf" className=" w-5 h-5 mr-2"/>
              <span>Create effects</span>
            </div>
          </div>
          <section className=" text-xs">
          <div className="mb-3 flex gap-2">
             <a>About</a>
             <a>Newsroom</a>
             <a>Contact</a>
             <a>Careers</a>
          </div>
          <div className="mb-3 flex flex-row flex-wrap">
            <a className="mt-1 mr-2">TikTok for Good</a>
            <a className="mt-1 mr-2">Advertise</a> 
            <a className="mt-1 mr-2">Developers</a>
            <a className="mt-1 mr-2">Transparency</a>
            <a className="mt-1 mr-2">TikTok Rewards</a> 
            <a className="mt-1 mr-2">TikTok Embeds</a>
            </div>
          <div className="mb-3 flex flex-row flex-wrap">
            <a className="mt-1 mr-2">Help</a>
            <a className="mt-1 mr-2">Safety</a> 
            <a className="mt-1 mr-2">Terms</a> 
            <a className="mt-1 mr-2">Privacy</a> 
            <a className="mt-1 mr-2">Creator Portal</a> 
            <a className="mt-1 mr-2">Community Guidlines</a>
            </div>
          <div className=" mb-5">See more ▼</div>
          <span>© 2023 TikTok</span>
          </section>
        </div>
      </aside>
      <div className=" flex-1 w-full flex flex-col items-center">
      {children}
      </div>
    </div>
    <footer></footer>
    {/* Login Modal */}
    <Modal>
      <SignInForm/>
    </Modal>
    </>
  )
}

export default Layout