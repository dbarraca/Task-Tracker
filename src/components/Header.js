import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
             {/* style={headingStyling} */}
            <h1>{title}</h1>
            <Button onClick={onAdd}
                color={ showAdd ? 'red' : 'green'} 
                text={ showAdd ? 'Close' : 'Add'}/>
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