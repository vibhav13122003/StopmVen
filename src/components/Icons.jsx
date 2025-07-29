import React from "react";

export const LogoIcon = ({ className }) => (
  <svg
    className={className}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M24 6L12 13V27L24 34L36 27V13L24 6Z'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinejoin='round'
    />
    <path
      d='M24 34V42'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 13L4 18V32L12 37'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M36 13L44 18V32L36 37'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 20L24 24L31 20'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M24 24V30'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const PlayIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='mr-2 h-4 w-4'
  >
    <polygon points='5 3 19 12 5 21 5 3'></polygon>
  </svg>
);

export const WearableIcon = () => (
  <img src='/watch.svg' alt='' className='w-12 h-12' />
);

export const BrainIcon = () => (
<img src="/monitor.svg" alt="" className="w-12 h-12"/>
);

export const AlertIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M10.3 2.1a2.2 2.2 0 0 1 3.4 0l7.8 12.3a2.2 2.2 0 0 1-1.7 3.6H3.2a2.2 2.2 0 0 1-1.7-3.6l7.8-12.3z' />
    <line x1='12' y1='9' x2='12' y2='13' />
    <line x1='12' y1='17' x2='12.01' y2='17' />
  </svg>
);

export const HeartPlusIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    <path d='M9 12H5' />
    <path d='M7 10v4' />
  </svg>
);
