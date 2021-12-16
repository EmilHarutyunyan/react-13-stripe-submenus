import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen, location, page:{page, links} } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {

    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if(links.length === 3) {
      setColumns('col-3')
    }
    if(links.length > 3) {
      setColumns('col-4')
    }
    // console.log('🍠');
  }, [location,links]);

  return (
    <article
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link,index)=> {
        const {label,icon,url} = link
        return <a key={index} href={url}>
          {icon}
          {label}
        </a>
      })}
    </div>
      {/* {page.map((link,index) => {
        const { label, icon, url } = link;
        return (
          <a key={index} href={url}>
            {icon}
            {label}
          </a>
        );
      })} */}
    </article>
  );
};

export default Submenu;
