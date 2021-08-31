import PropTypes from 'prop-types';
const Navbar=({name})=>{
return(
    <div className="navbar-container">

        <div className='navbar-title'>
       <h1>Hey {name}</h1> 
       <p>Let's make this day productive</p>
        </div>

       <img src="https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="Avatar" className="avatar"></img>
    </div>
)

}
Navbar.propTypes = {
    name: PropTypes.string.isRequired
  }

export default Navbar