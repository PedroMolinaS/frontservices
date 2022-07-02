import React from 'react'
import ContentLoader from 'react-content-loader'

const FallbackCards = (props) => {

    const { rows = 4, columns = 3, coverHeight = 305, coverWidth = 385, padding = 55, speed = 1 } = props;
    const coverHeightWithPadding = coverHeight + padding
    const coverWidthWithPadding = coverWidth + padding
    const initial = 35
    const covers = Array(columns * rows).fill(1)

  return (
    <div className='fallback__container'>
        <ContentLoader
                speed={speed}
                className='fallback__cards'
                {...props}
            >
                <rect
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    width={columns * coverWidthWithPadding - padding}
                    height="20"
                />

                {covers.map((g, i) => {
                    let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
                    let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
                    return (
                        <rect
                            key={i}
                            x={vx}
                            y={vy}
                            rx="0"
                            ry="0"
                            width={coverWidth}
                            height={coverHeight}
                        />
                    )
                })}
            </ContentLoader>
    </div>
  )
}

export default FallbackCards