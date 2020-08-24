import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <span className="logo">
          <Link href="/">
            <a></a>
          </Link>
        </span>
        <div>
          <span className="backtest">
            <Link href="/backtest">
              <a>BACKTEST</a>
            </Link>
          </span>
          <span className="community">
            <Link href="/community">
              <a>COMMUNITY</a>
            </Link>
          </span>
          <span className="mypage">
            <Link href="/mypage">
              <a>MYPAGE</a>
            </Link>
          </span>
        </div>
        <span className="profile">
          <Link href="/profile">
            <a></a>
          </Link>
        </span>
      </nav>
      <div className="main-container">
        <aside></aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
