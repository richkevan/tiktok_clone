import Logo from '../assets/tiktokLogo.svg'

const SvgSprite = ({sprite, className}:{sprite: string, className?: string}) => {
  return (
    <svg className={className}>
    <use xlinkHref={Logo + sprite}/>
    </svg>
  )
}

export default SvgSprite