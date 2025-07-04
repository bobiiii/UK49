
import React from 'react';

interface LotteryBallsProps {
  numbers: number[];
  boosterBall?: number;
  size?: 'small' | 'medium' | 'large';
  mobileLayout?: boolean;
}

const LotteryBalls = ({ numbers, boosterBall, size = 'medium', mobileLayout = false }: LotteryBallsProps) => {
  const sizeClasses = {
    small: 'w-8 h-8 text-xs sm:text-sm min-w-[32px]',
    medium: 'w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-lg min-w-[40px] sm:min-w-[48px]',
    large: 'w-12 h-12 sm:w-16 sm:h-16 text-lg sm:text-xl min-w-[48px] sm:min-w-[64px]'
  };

  const getBallColor = (number: number, isBooster = false) => {
    if (isBooster) return 'bg-gradient-to-br from-red-500 to-red-600';
    if (number <= 10) return 'bg-gradient-to-br from-blue-500 to-blue-600';
    if (number <= 20) return 'bg-gradient-to-br from-green-500 to-green-600';
    if (number <= 30) return 'bg-gradient-to-br from-purple-500 to-purple-600';
    if (number <= 40) return 'bg-gradient-to-br from-orange-500 to-orange-600';
    return 'bg-gradient-to-br from-pink-500 to-pink-600';
  };

  if (mobileLayout && boosterBall) {
    return (
      <div className="flex flex-col items-center space-y-2">
        {/* Main numbers */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {numbers.map((number, index) => (
            <div
              key={index}
              className={`${sizeClasses[size]} ${getBallColor(number)} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white flex-shrink-0`}
            >
              {number}
            </div>
          ))}
        </div>
        {/* Bonus ball on next line for mobile */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 text-base sm:text-lg font-bold">Bonus:</span>
          <div
            className={`${sizeClasses[size]} ${getBallColor(boosterBall, true)} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white flex-shrink-0`}
          >
            {boosterBall}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-2">
      {numbers.map((number, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${getBallColor(number)} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white flex-shrink-0`}
        >
          {number}
        </div>
      ))}
      {boosterBall && (
        <>
          <span className="text-gray-400 text-sm sm:text-lg mx-1 sm:mx-2 flex-shrink-0">+</span>
          <div
            className={`${sizeClasses[size]} ${getBallColor(boosterBall, true)} rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white flex-shrink-0`}
          >
            {boosterBall}
          </div>
        </>
      )}
    </div>
  );
};

export default LotteryBalls;
