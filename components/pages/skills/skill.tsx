'use client';

import React, { useState } from 'react';

import getIconByName from './getIcon';

type Props = {
  directionLeft?: boolean;
  iconName: string;
  color: string;
  proficiency: string;
};

export default function Skill({ iconName, color, proficiency }: Props) {
  const icon = getIconByName(iconName);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="group relative flex cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.createElement(icon!, { size: 80, color: color })}
      {showTooltip && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md">
          {iconName} {'\n'}
          {proficiency}
        </div>
      )}
    </div>
  );
}
