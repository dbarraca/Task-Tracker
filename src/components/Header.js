import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log("test");
        console.log(e);
    };

    return (
        <header className="header">
             {/* style={headingStyling} */}
            <h1>{title}</h1>
            <Button onClick={onClick} color='green' text='Add'></Button>
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