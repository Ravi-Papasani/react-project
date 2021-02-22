import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    const onClickEvent = () => {
        console.log('Button clicked');
    }
    return (
        <div>
            <h1 className='header'>{title}</h1>
            <Button 
            text={showAdd ? 'Close' : 'Add'} 
            color={showAdd ? 'red' : 'green'} 
            onClick={onAdd}/>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
//CSS in JS
//<h1 style={headingStyle}>{title}</h1>
// const headingStyle = {color:'red', backgroundColor:'blanchedalmond'}

export default Header
