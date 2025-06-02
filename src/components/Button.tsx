import React from 'react';

interface GlobalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'filled' | 'outlined';
  href?: string;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  children,
  onClick,
  variant = 'filled',
  href,
}) => {
  const baseClasses = "rounded-[6px] font-semibold text-lg  hover:scale-105 transition-transform";

  const filledStyles = {
    buttonClasses: `${baseClasses} bg-gradient-to-r from-[#5E79FF] to-[#3755ED] text-white px-[80px] py-[12px] w-full h-full`,
    buttonStyle: {
      border: 'none',
      background:
        "linear-gradient(86.04deg, #5E79FF 27.69%, #3755ED 96.06%)",
    },
    outerDivClasses: "p-[2px] rounded-[6px]",
    outerDivStyle: {
      background:
        "linear-gradient(93.34deg, #FEFFED 0%, rgba(255,255,255,0) 96.79%)",
      display: "inline-block",
    }
  };

  const outlinedStyles = {
    buttonClasses: `${baseClasses} px-[80px] py-[20px]`,
    buttonStyle: {
      color: '#FFFFFF',
      textDecoration: 'none',
      border: '1px solid #FFFFFF',
      background: 'transparent',
    },
    outerDivClasses: "",
    outerDivStyle: {}
  };

  const currentStyles = variant === 'outlined' ? outlinedStyles : filledStyles;

  if (variant === 'outlined' && href) {
    return (
      <a
        href={href}
        className={currentStyles.buttonClasses}
        style={currentStyles.buttonStyle}
        onClick={onClick}
      >
        {children}
      </a>
    );
  } else {
    return (
      <div className={currentStyles.outerDivClasses} style={currentStyles.outerDivStyle}>
        <button
          className={currentStyles.buttonClasses}
          style={currentStyles.buttonStyle}
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  }
};

export default GlobalButton; 