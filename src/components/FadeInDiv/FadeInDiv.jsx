import "./FadeInDiv.scss";
import { useEffect, useState, useRef } from "react";

const FadeInDiv = ({
    children,
    fadeInClass
  }) => {
    const domRef = useRef();
    
    const [isVisible, setVisible] = useState(false);
  
    const options = {
      root: null,
      threshold: 0.35,
    }

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        // In this case there's only one element to observe:     
        if (entries[0].isIntersecting) {
        
          // Not possible to set it back to false like this:
          setVisible(true);
          
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      }, options);
      
      observer.observe(domRef.current);
      
      return () => observer.unobserve(domRef.current);
    }, []);
  
    return (
        <div ref={ domRef } className={ isVisible ? `fade-in-${fadeInClass || '1'}` : 'hide' }>
          { children }
        </div>
    );
  };

export default FadeInDiv;