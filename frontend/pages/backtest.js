import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Filter from '../components/backtest/Filter';
import Items from '../components/backtest/Items';
import Result from '../components/backtest/Result';
import MonthGraph from '../components/backtest/MonthGraph';
import OddsGraph from '../components/backtest/OddsGraph';
import MainGraph from '../components/backtest/MainGraph';

const BackTest = () => {

    return (
        <div>
            <DashboardLayout>
                {/* 결과section */}
                <section>
                    <div className="result-firstLine">
                        <article className="items"><Items/></article>
                        <article className="result"><Result/></article>
                        <article className="subGraph1"><MonthGraph/></article>
                        <article className="subGraph2"><OddsGraph/></article>
                    </div>
                    <div>
                        <article className="mainGraph"><MainGraph/></article>
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