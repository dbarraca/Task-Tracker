import PropTypes from 'prop-types';
import Button from './Button'
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
             {/* style={headingStyling} */}
            <h1>{title}</h1>
            { location.pathname === '/' && 
                (
                <Button onClick={onAdd}
                color={ showAdd ? 'red' : 'green'} 
                text={ showAdd ? 'Close' : 'Add'}/>
                )
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Page',
}

Header.propTypes = {
    title: PropTypes.string,
}

// const headingStyling = {
//     color: 'blue',
//     backgroundColor: 'yellow'
// }
export default Header;