import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="index">
      <nav>
        <span className="logo"><Link href="/"><a>Logo</a></Link></span>
        <span className="linkBtn-container">
          <li className="linkBtn"><Link href=""><a>linkBtn</a></Link></li>
          <li className="linkBtn"><Link href="/community"><a>community</a></Link></li>
          <li className="linkBtn"><Link href="/backtest"><a>dashboard</a></Link></li>
        </span>
        
        <span className="profile"><Link href="/profile"><a>profile</a></Link></span>
      </nav>
      <section className="main">
        {/* main */}
        <article>
          <div>Welcome!</div>
          <div>
            Maxturn - 수익률을 확인하고 투자하세요.
            <br></br>
            맥스턴은 백테스트를 진행하고, 이에 대한 전략을 수립하고 유저들과 공유하는 플랫폼입니다.
          </div>
          <div>
            맥스턴은 여러분의 시간, 노력을 절감시켜줄 수 있습니다.
          </div>
        </article>
      </section>

      <section className="introduction">
        {/* introduction */}
        <div className="introduction_title">INTRODUCTION</div>
        <article>
          <div>
            <figure>photo</figure>
            <figcaption>설명</figcaption>
          </div>
        </article>

        {/* <Pagination/> */}

        {/* <article>
          <figure>photo</figure>
          <figcaption>설명</figcaption>
        </article>
        <article>
          <figure>photo</figure>
          <figcaption>설명</figcaption>
        </article> */}
      </section>

      <section className="login">
        {/* 로그인 */}
        <article>
          <form>
            <div>Log in to your account</div>
            <div className="idBox">
              <label for="user_id">Username</label>
              <input type="text" id="user_id"></input>
            </div>
            <div className="pwBox">
              <label for="user_password">Password</label>
              <input type="password"></input>
            </div>
            <button type="submit"></button>
          </form>
        </article>
      </section>
      <footer>

      </footer>
    </div>
  );
};

export default Home;