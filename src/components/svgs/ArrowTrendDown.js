import * as React from 'react';

const ArrowTrendDown = props => (
  <svg
    width={37}
    height={32}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m29.57 22-9.125-9.125-6.625 6.562a1.927 1.927 0 0 1-2.813 0l-10-10a1.927 1.927 0 0 1 0-2.812 1.927 1.927 0 0 1 2.813 0l8.562 8.562 6.625-6.562a1.927 1.927 0 0 1 2.813 0l10.625 10.562V14c0-1.063.875-2 2-2 1.062 0 2 .937 2 2v10c0 1.125-.938 2-2 2h-10c-1.125 0-2-.875-2-2 0-1.063.875-2 2-2h5.125Z'
      fill='url(#a)'
      opacity={0.7}
    />
    <defs>
      <linearGradient
        id='a'
        x1={18.445}
        y1={0}
        x2={18.445}
        y2={32}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F21B1B' />
        <stop offset={0.927} stopColor='#D35D5D' stopOpacity={0.073} />
        <stop offset={1} stopColor='#CB2323' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowTrendDown;
