import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Filter from '../components/backtest/Filter';

const BackTest = () => {

    return (
        <div>
            <DashboardLayout>
                {/* 결과section */}
                <section>
                    <div className="result-firstLine">
                        <article className="items">종목(items)</article>
                        <article className="result">결과(result)</article>
                        <article className="subGraph1">graph1(월간 수익률)</article>
                        <article className="subGraph2">graph2(승률)</article>
                    </div>
                    <div>
                        <article className="mainGraph">메인그래프</article>
                    </div>
                    
                </section>
                
                {/* 파라미터 section */}
                <section>
                    <div>Intro </div>
                    <article className="filterContainer">
                        <form>
                            <Filter/>
                        </form>
                    </article>
                </section>
            </DashboardLayout>
        </div>
    );
}

export default BackTest;