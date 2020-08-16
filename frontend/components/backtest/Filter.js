import React from 'react';
import FilterLayout from '../layout/FilterLayout';
// import Link from 'next/link';

const Filter = ({no}) => {
  return(
    <>
      <FilterLayout title="기본설정(필수)">
        <div>
          투자금
          <input type="number" min="500" required/>원 ~ <input type="number"/>원
        </div>
        <div>
          투자기간
          <input type="number" required/>년 <input type="number" required/>월 <input type="number" required/>일 ~ <input type="number" required/>년 <input type="number" required/>월 <input type="number" required/>일
        </div>
        <div>
          최대 보유 종목 수
          <input type="number" required/>개
        </div>
        <div>
          시가총액
          <input type="number" required/>원 이상
        </div>
      </FilterLayout>

      <FilterLayout title="퀄리티 항목(재무제표 항목)">
        <div>
          <details open>
            <summary>퀄리티 항목(재무제표 항목)</summary>
            <div>수익성 지표</div>
            <div>
              <input type="checkbox"/> ROE <input type="number"/>이상
            </div>
            <div>
              <input type="checkbox"/> ROA <input type="number"/>이상
            </div>
            <div>
              <input type="checkbox"/> 매출액 대비 손이익률 <input type="number"/>이상
            </div>
            <div>
              <input type="checkbox"/> 매출액 대비 영업이익률 <input type="number"/>이상
            </div>
            <div>
              <input type="checkbox"/> 매출액 증가율 <input type="number"/>이상
            </div>

            <div>성장성 지표</div>
            <div>
              <input type="checkbox"/> 영업이익 증가율 <input type="number"/>이상
            </div>
            <div>
              <input type="checkbox"/> 순이익 증가율 <input type="number"/>이상
            </div>

            <div>안정성 지표</div>
            <div>
              <input type="checkbox"/> 부재비율 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 유동비율 <input type="number"/>이상
            </div>
          
            <div>현금흐름표 항목</div>
            <div>
              영업활동현금흐름
              <label><input type="radio" name="영업" value="-"/>-</label>
              <label><input type="radio" name="영업" value="+"/>+</label>
            </div>
            <div>
              투자활동현금흐름
              <label><input type="radio" name="투자" value="-"/>-</label>
              <label><input type="radio" name="투자" value="+"/>+</label>
            </div>
            <div>
              재무활동현금흐름
              <label><input type="radio" name="재무" value="-"/>-</label>
              <label><input type="radio" name="재무" value="+"/>+</label>
            </div>
          </details>
        </div>
      </FilterLayout>

      <FilterLayout title="벨류 항목">
        <div>
          <details open>
            <summary>벨류 항목</summary>
            <div>주당 가치평가 지표</div>
            <div>
              <input type="checkbox"/> 주당순이익(EPS) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주당순자산(BPS) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주당현금흐름(CFPS) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주당매출액(SPS) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주당배당금(DPS) <input type="number"/>이상 <input type="number"/>이하
            </div>

            <div>주가 가치 평가 지표</div>
            <div>
              <input type="checkbox"/> 주당수익배수(PER) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주가순자산배수(PBR) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주가현금흐름배수(PCR) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 주가매출액배수(PSR) <input type="number"/>이상 <input type="number"/>이하
            </div>
            <div>
              <input type="checkbox"/> 시가 배당률 <input type="number"/>이상 <input type="number"/>이하
            </div>
          </details>
        </div>
      </FilterLayout>

      <FilterLayout title="매수/매도 조건">
        <div>
          <details open>
            <summary>매수/매도 조건</summary>
            <div>매수 조건</div>
            <div>시작 날짜 증가 대비 <input type="number"/>%(마이너스 가능)</div>

            <div>매도 조건(조건 부합시 매도, 가격 기준은 전일 송가)</div>
            <div>목표가: 매수가+ <input type="number"/>%</div>
            <div>손절가: 매수가+ <input type="number"/>%</div>
            <div>
              리밴런싱:
              <label><input type="radio" name="리밸런싱" value="분기별"/>분기별</label>
              <label><input type="radio" name="리밸런싱" value="연간"/>연간</label>
              <label><input type="radio" name="리밸런싱" value="선택안함"/>선택안함</label>
            </div>
          </details>
        </div>

      </FilterLayout>
    </>
  );
};

export default Filter;
