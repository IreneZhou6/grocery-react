import './Footer.styles.scss';
import { AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='footer'>
            <ul>

                <a href='https://github.com/IreneZhou6/grocery-react'><AiFillGithub className='icon' /> github</a>
                <a href='#'><AiFillPhone className='icon' /> phone</a>
                <a href='#'><AiFillMail className='icon' /> e-mail</a>
            </ul>
        </footer>
    )
}