import React from 'react';

const Logo = ({ className = '', style = {} }) => {
  return (
    <svg 
      className={className} 
      style={style}
      viewBox="0 0 450 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crossGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b96e6" />
          <stop offset="100%" stopColor="#145da5" />
        </linearGradient>
      </defs>
      
      {/* Medical Cross */}
      <path 
        d="M 45 20
           A 5 5 0 0 1 50 15
           L 70 15
           A 5 5 0 0 1 75 20
           L 75 45
           L 100 45
           A 5 5 0 0 1 105 50
           L 105 70
           A 5 5 0 0 1 100 75
           L 75 75
           L 75 100
           A 5 5 0 0 1 70 105
           L 50 105
           A 5 5 0 0 1 45 100
           L 45 75
           L 20 75
           A 5 5 0 0 1 15 70
           L 15 50
           A 5 5 0 0 1 20 45
           L 45 45
           Z" 
        fill="url(#crossGrad)"
      />
      
      {/* Heartbeat EKG Line */}
      <path 
        d="M 22 60 
           L 42 60 
           L 48 70 
           L 56 32 
           L 64 88 
           L 72 60 
           L 98 60" 
        stroke="white" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* SHARMORA Text */}
      <text 
        x="130" 
        y="68" 
        fontFamily="'Outfit', 'Inter', sans-serif" 
        fontWeight="800" 
        fontSize="46" 
        fill="#143154" 
        letterSpacing="1.5"
      >
        SHARMORA
      </text>
      
      {/* Medical Systems Text */}
      <text 
        x="132" 
        y="98" 
        fontFamily="'Outfit', 'Inter', sans-serif" 
        fontWeight="400" 
        fontSize="22" 
        fill="#2d4a70" 
        letterSpacing="1.8"
      >
        Medical Systems
      </text>
    </svg>
  );
};

export default Logo;
