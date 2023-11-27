import './Nav.scss';
import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import { motion } from 'framer-motion';
import mobile from '../../hooks/useCheckMobileScreen';
import Signature from '../../Assets/Signature';

let Nav = () => {
  const isMobile = mobile();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarWidth = 'min(75vw, 400px)';
  let nav = document.getElementById('mySidenav');
  let menuRef = useRef();
  let menuToggleButtonRef = useRef();
  let disabledButtonSelector = $('#root button:not(.nav-btn)');
  let diabledAnchorSelector = $('a:not(aside a)');

  // "click-out" of sidebar
  useEffect(() => {
    document.addEventListener('mousedown', event => {
      if (
        !menuRef.current.contains(event.target) &&
        !menuToggleButtonRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    });
  });

  // shows nav on scroll-up and hide nav on scroll-down
  useEffect(() => {
    $(document).ready(() => {
      var previousScroll = 0;

      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        // If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
        if (
          currentScroll > 0 &&
          currentScroll < $(document).height() - $(window).height()
        ) {
          // If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
          if (currentScroll > previousScroll) {
            window.setTimeout(hideNav, 50);

            // Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
          } else {
            window.setTimeout(showNav, 50);
          }

          // Set the previous scroll value equal to the current scroll.
          previousScroll = currentScroll;
        }
      });
    });
  });

  // closes sidebar if screen was mobile size then switched to desktop
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'inherit';
      $('#root > *:not(aside)').css({ filter: 'none' });
      $('.sidenav').width(0);
    }
  }, [isMobile]);

  // shows nav if scrolled up all the way
  useEffect(() => {
    if ($(window).scrollTop() === 0) showNav();
  });

  let closeSidebar = () => {
    // hide sidebar
    setSidebarIsOpen(false);
    nav.style.width = '0';
    // allow scrolling
    document.body.style.overflow = 'inherit';
    // unblur everything
    $('#root > *:not(aside)').css({ filter: 'none' });
    $('.nav-btn').removeClass('changed');
    //re-enable all buttons
    $(disabledButtonSelector).removeAttr('disabled');
    // re-enable all links
    window.setTimeout(
      () => $(diabledAnchorSelector).unbind('click').click(),
      200
    );
  };

  // blur everything besides sidebar and stop scrolling when sidebar is open
  let toggleSidebar = () => {
    if (sidebarIsOpen) {
      closeSidebar();
    } else {
      // show sidebar
      setSidebarIsOpen(true);
      nav.style.width = sidebarWidth;
      // prevent scrolling
      document.body.style.overflow = 'hidden';
      // blur behind sidebar
      $('#root > *:not(aside)').css({ filter: 'blur(4px)' });
      // disable all buttons
      $(disabledButtonSelector).attr('disabled', 'disabled');
      // disable all links
      $(() => $(diabledAnchorSelector).on('click', e => e.preventDefault()));

      $('.nav-btn').addClass('changed');
    }
  };

  let hideNav = () =>
    $('#navbar').removeClass('is-visible').addClass('is-hidden');
  let showNav = () =>
    $('#navbar').removeClass('is-hidden').addClass('is-visible sticky');

  let SidebarAnchorItem = ({ txt, href }) => {
    let smoothScroll = () => {
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
      });
    };
    return (
      <li>
        <button
          onClick={() => {
            smoothScroll();
            closeSidebar();
          }}
        >
          {txt}
        </button>
      </li>
    );
  };

  let smoothScroll = href => {
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className='skip-nav-link' onClick={() => smoothScroll('#about')}>
        Skip navigation
      </button>
      <nav id='navbar' class='navbar navbar-light sticky'>
        <button class='navbar-brand' onClick={() => window.scrollTo(0, 0)}>
          <Signature />
        </button>
        <div id='navbarNav'>
          {isMobile ? (
            <div style={{ display: 'block' }}>
              <button
                className='nav-btn'
                aria-label='Menu'
                ref={menuToggleButtonRef}
                onClick={toggleSidebar}
              >
                <div className='ham-box'>
                  <div className='ham-box-inner'></div>
                </div>
              </button>
              <aside ref={menuRef} id='mySidenav' class='sidenav'>
                <ol>
                  <SidebarAnchorItem txt='About' href='#about' />
                  <SidebarAnchorItem txt='Projects' href='#featured-projects' />
                  <SidebarAnchorItem txt='Contact' href='#contact' />
                </ol>
                <motion.a
                  href={`${process.env.PUBLIC_URL}/resume`}
                  whileHover={{ backgroundColor: 'hsl(166, 100%, 70% / 0.1)' }}
                  onClick={closeSidebar}
                  className='sidebar-resume-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Resume
                </motion.a>
              </aside>
            </div>
          ) : (
            <ol class='navbar-nav ml-auto'>
              <motion.li
                initial={{ x: '10px', y: '-25px', opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className='nav-item'
              >
                <button class='nav-link' onClick={() => smoothScroll('#about')}>
                  About
                </button>
              </motion.li>
              <motion.li
                initial={{ x: '10px', y: '-25px', opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className='nav-item'
              >
                <button
                  class='nav-link'
                  onClick={() => smoothScroll('#featured-projects')}
                >
                  Projects
                </button>
              </motion.li>
              <motion.li
                initial={{ x: '10px', y: '-25px', opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className='nav-item'
              >
                <button
                  class='nav-link'
                  onClick={() => smoothScroll('#contact')}
                >
                  Contact
                </button>
              </motion.li>
              <motion.a
                href={`${process.env.PUBLIC_URL}/resume`}
                initial={{ x: '10px', y: '-25px', opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className='resume-button'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
              </motion.a>
            </ol>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
