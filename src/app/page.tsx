'use client';

import React from 'react';
import HomePage from './Home';

export default function Home() {
  const bioText = `Starting out, I was only interested in cyber security, but
    eventually I became passionate about programming.
    My main interest is with low level languages like
    Rust and C, though I have been falling in love with Web
    Development as well.`

  return (
    <HomePage
      title="Derek Russell"
      summary="Web Developer, Cyber Security Enthusiast"
      body={bioText}
      alignType='justify-between'
      button="My Showcase ->"
    />
  );
}
