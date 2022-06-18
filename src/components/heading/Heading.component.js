import './Heading.styles.scss';
import { Link } from 'react-router-dom';

export default function Heading({ text, site }) {
    return (
        <div className="heading">
            <h1>{text}</h1>
            <p><Link to='/'>{`Home >> `}</Link>{site}</p>
        </div>
    )
}