import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({children}) => {
  return (
    <div className="dashboard">
      <nav>
        <span className="logo"><Link href="/"><a>Logo</a></Link></span>
        <span className="backtest"><Link href="/backtest"><a>BACKTEST</a></Link></span>
        <span className="mypage"><Link href="/mypage"><a>MYPAGE</a></Link></span>
        <span className="community"><Link href="/community"><a>COMMUNITY</a></Link></span>
        <span className="profile"><Link href="/profile"><a>PROFILE</a></Link></span>
      </nav>
      <aside></aside>
      <main>
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;