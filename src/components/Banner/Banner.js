import React, { useEffect } from 'react'
import $ from 'jquery'
import './style.css'
const Banner = () => {
  useEffect(() => {
    $('.Banner6').delay(4000).fadeIn(500)
    $('.BannerHolderEx6').delay(4000).fadeIn(500)
    $('.BannerBorderEx6,.BannerBorderLineEx6').delay(500).fadeIn(500)
    $('.SaleEx6').delay(6400).fadeIn(500)
    $('.circleEx6').delay(6000).fadeIn(500)
    $('.OffEx6').delay(6600).fadeIn(500)
  })
  return (
    <div>
      <div id='wrapper'>
        <div style={{ width: '100%', marginTop: '15%', marginLeft: '15%' }}>
          {' '}
          <svg class='Banner6' height='160' width='500'>
            <polygon
              class='BannerBorderEx6'
              points='50 20, 30 130, 420 125, 440 40'
              style={{
                opacity: '1',
                fill: 'none',
                stroke: '#000',
                strokeWidth: '4.5',
                position: 'relative',
              }}
            />
            {/* <!– BannerHolder –> */}
            <polygon
              class='BannerHolderEx6'
              points='25 31, 10 125, 410 135, 430 40'
              style={{
                opacity: '0.1',
                fill: '#000',
              }}
            />
            <polygon
              class='BannerHolderEx6'
              points='30 31, 15 120, 410 130, 430 20'
              style={{
                opacity: '1',
                fill: '#ED3C72',
              }}
            />
            <circle
              class='circleEx6Shadow'
              opacity='0.5'
              cx='335'
              cy='75'
              r='65'
              stroke='#fff'
              stroke-width='0'
              fill='#fff'
            />
            <circle
              class='circleEx6'
              cx='330'
              cy='75'
              r='65'
              stroke='#fff'
              stroke-width='0'
              fill='#000'
            />
            <text
              class='SaleEx6'
              font-family='Josefin Sans'
              font-weight='700'
              font-size='70'
            >
              <tspan opacity='0.4' fill='#000' x='63' y='104'>
                Read
              </tspan>
              <tspan fill='#fff' x='63' y='100'>
                Read
              </tspan>
            </text>
            <text class='OffEx6'>
              <tspan
                font-weight='300'
                font-size='20'
                font-family='Josefin Sans'
                fill='#fff'
                x='291'
                y='45'
              >
                M O R E
              </tspan>
              <tspan
                class='OffTextEx6'
                font-family='Frijole'
                font-size='50'
                font-weight='300'
                fill='#FFF'
                x='275'
                y='95'
              >
                50%
              </tspan>
              <tspan
                font-weight='300'
                font-size='20'
                font-family='Josefin Sans'
                fill='#fff'
                x='306'
                y='124'
              >
                O F F
              </tspan>
            </text>
            {/* <!– Border Overlay –>  */}
            <polyline
              class='BorderAnimationEx6 BannerBorderLineEx6'
              points='50 20, 30 130'
              style={{
                opacity: '0.5',
                stroke: '#000',
                strokeWidth: '4.5',
                fill: '#ED3C72',
              }}
            />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Banner
