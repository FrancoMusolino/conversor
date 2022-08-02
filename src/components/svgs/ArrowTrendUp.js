import * as React from 'react';

const ArrowTrendUp = props => (
  <svg
    width={37}
    height={32}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M24.907 10c-1.125 0-2-.876-2-2 0-1.063.875-2 2-2h10c1.063 0 2 .937 2 2v10c0 1.124-.937 2-2 2-1.125 0-2-.876-2-2v-5.126L22.282 23.437a1.927 1.927 0 0 1-2.812 0l-6.625-6.563-8.563 8.563a1.927 1.927 0 0 1-2.812 0 1.927 1.927 0 0 1 0-2.813l10-10a1.927 1.927 0 0 1 2.812 0l6.625 6.563 9.125-9.188h-5.125Z'
      fill='url(#a)'
      opacity={0.7}
    />
    <defs>
      <linearGradient
        id='a'
        x1={18.907}
        y1={-0.001}
        x2={18.907}
        y2={31.999}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00FF1A' />
        <stop offset={0.922} stopColor='#21932D' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowTrendUp;
