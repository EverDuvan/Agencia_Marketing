import { connect } from 'react-redux';

function Navbar () {
    return (
        <nav className="navbar">
            Navbar
        </nav>
    )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Navbar);