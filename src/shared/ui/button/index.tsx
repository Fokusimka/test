import { Link } from 'react-router-dom'
import { ButtonPorps } from 'types'

import './button.css'

const Button = ({ href, title }: ButtonPorps) => {
    return (
        <Link to={href} className='button'>{title}</Link>
    )
}

export default Button