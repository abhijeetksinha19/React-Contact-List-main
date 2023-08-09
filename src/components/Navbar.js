import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav' style={styles.nav}>
            <div className='container-fluid'>
            <div className="title" style={styles.title}>Contact List</div>
                {/* <Link to='/' className='navbar-brand ml-5'>Contact List App</Link> */}
            </div>
        </nav >
    )
}

export default Navbar

const styles = {
    nav:{
        width: "100%" ,
        height: "70px" ,
         background:"linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)" ,
         display:"flex" ,
         justifyContent:"space-between",
         position:"relative"
    },

    title:{
        paddingTop:18,
        fontSize: "200%",
        color: "#2f4f4f",
        fontWeight: "650",
        fontFamily: '"Montserrat", sans-serif',
        textTransform: "upercase",
        marginLeft: 20,
    }

    
}