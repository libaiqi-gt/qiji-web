import React from 'react'
import tw, { styled } from 'twin.macro'
import "styled-components/macro"

export default function DailyPlan() {

  const DailyPlanContainer = styled.div`
    ${tw`w-full h-full`}
  `;
  const NowPlan = styled.div`
    ${tw`w-1/4 bg-white rounded-md shadow-xl p-2.5`}
    margin: 20px;
  `;

  return (
    <DailyPlanContainer>
      <h1 tw='text-center p-2.5 italic bg-gradient-to-r from-blue-400'>每个人的精力有限，泛不如精，请珍惜每日不多的时间。</h1>
      <div tw='flex'>
        <NowPlan>
          <h2 tw='text-center'>目前计划</h2>
        </NowPlan>
      </div>
    </DailyPlanContainer>
  )
}
