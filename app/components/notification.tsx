// NotificationBell.js
'use cleint'
import React from 'react';

const NotificationBell = ({ notifications }:any) => {
  const unreadCount = notifications.filter((notification:any) => !notification.read).length;

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19s-8 4.5-8 4.5 2-5.5 8-5.5 8 4.5 8 4.5-6-4.5-8-4.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.88 15L19 13M15.12 15L15 13M6 9a2 2 0 012-2h8a2 2 0 012 2v0M9 7s4 0 4 3v1H6v-1c0-3 4-3 4-3z"
        />
      </svg>
      {unreadCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
          {unreadCount}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
