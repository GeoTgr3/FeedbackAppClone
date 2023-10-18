import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
        <div className="container" style={{backgroundColor:"purple" }}>
            <h1>{props.text}</h1>
        </div>
    </header>
  )
}
Header.propTypes={
  text: PropTypes.string.isRequired
}
export default Header
