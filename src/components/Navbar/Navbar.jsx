import React from 'react';

const Navbar = () => {
    let routesArray = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
      ];
      
      console.log(routesArray);
      
    return (
        <nav>
            {
                routesArray.map((route)=>{
                    return (
                        <div key={route.id}>
                            <ul>
                            <li>{route.name}</li>
                            </ul>
                            
                        </div>
                        
                    )
                })
            }
        </nav>
    );
};

export default Navbar;