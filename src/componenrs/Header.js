import { buildQueries } from '@testing-library/dom';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header className="header">
             {/* style={headingStyling} */}
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Page',
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyling = {
    color: 'blue',
    backgroundColor: 'yellow'
}
export default Header;