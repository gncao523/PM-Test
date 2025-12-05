import React, { useState } from 'react'
import { TIMEFRAMES, getChartData, generatePath } from './utils'

interface PriceChartProps {
    timeframe: string
    onTimeframeChange: (timeframe: string) => void
}

const PriceChart: React.FC<PriceChartProps> = ({ timeframe, onTimeframeChange }) => {
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(6) // July point highlighted by default

    const chartData = getChartData(timeframe)
    const secondaryData = chartData.map((point) => ({ ...point, y: point.y * 0.5 }))

    const primaryPath = generatePath(chartData)
    const secondaryPath = generatePath(secondaryData)

    const handleTimeframeChange = (newTimeframe: string) => {
        onTimeframeChange(newTimeframe)
        setHoveredPoint(6) // Reset to July
    }

    return (
        <div className="mt-6 bg-white rounded-lg p-4 relative">
            {/* Chart Title */}
            <div className="mb-4">
                <h3 className="font-['Gilroy'] text-black text-lg">XAU/USD</h3>
            </div>

            {/* Chart Container */}
            <div className="relative w-full">
                <svg width="100%" height="300" viewBox="0 0 120 110" className="overflow-visible">
                    {/* Grid Lines */}
                    {[0, 20, 40, 80, 100].map((value) => {
                        const y = 100 - value
                        return (
                            <g key={value}>
                                <line
                                    x1="0"
                                    y1={y}
                                    x2="100"
                                    y2={y}
                                    stroke="#ED1D25"
                                    strokeWidth="0.5"
                                    strokeDasharray="2,2"
                                    opacity="0.3"
                                />
                            </g>
                        )
                    })}

                    {/* Secondary Area (lighter red shaded) */}
                    <defs>
                        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ED1D25" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ED1D25" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                    <path d={`${secondaryPath} L 100 100 L 0 100 Z`} fill="url(#secondaryGradient)" />

                    {/* Secondary Line */}
                    <path
                        d={secondaryPath}
                        fill="none"
                        stroke="#ED1D25"
                        strokeWidth="1"
                        opacity="0.4"
                    />

                    {/* Primary Line */}
                    <path d={primaryPath} fill="none" stroke="#ED1D25" strokeWidth="2" />

                    {/* Data Points */}
                    {chartData.map((point, index) => {
                        const x = point.x
                        const y = 100 - point.y
                        const isHighlighted = hoveredPoint === index
                        return (
                            <g key={index}>
                                {/* Highlight bar for July (index 6) */}
                                {isHighlighted && (
                                    <>
                                        <line
                                            x1={x}
                                            y1={100}
                                            x2={x}
                                            y2={0}
                                            stroke="#ED1D25"
                                            strokeWidth="0.5"
                                            opacity="0.3"
                                        />
                                    </>
                                )}
                                {/* Point marker */}
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={isHighlighted ? '2.5' : '1.5'}
                                    fill={isHighlighted ? '#8B5CF6' : '#ED1D25'}
                                    stroke="white"
                                    strokeWidth={isHighlighted ? '1.5' : '1'}
                                    style={{ cursor: 'pointer' }}
                                    onMouseEnter={() => setHoveredPoint(index)}
                                    onMouseLeave={() => setHoveredPoint(6)} // Keep July highlighted by default
                                />
                            </g>
                        )
                    })}

                    {/* Tooltip for highlighted point */}
                    {hoveredPoint !== null && (
                        <g>
                            <rect
                                x={chartData[hoveredPoint].x - 25}
                                y={100 - chartData[hoveredPoint].y - 35}
                                width="50"
                                height="25"
                                rx="4"
                                fill="#ED1D25"
                            />
                            <text
                                x={chartData[hoveredPoint].x}
                                y={100 - chartData[hoveredPoint].y - 22}
                                textAnchor="middle"
                                fill="white"
                                fontSize="6"
                                fontFamily="RobotoRegular"
                                fontWeight="bold"
                            >
                                $1,425.00
                            </text>
                            <text
                                x={chartData[hoveredPoint].x}
                                y={100 - chartData[hoveredPoint].y - 12}
                                textAnchor="middle"
                                fill="white"
                                fontSize="5"
                                fontFamily="RobotoRegular"
                            >
                                28 Okt 2023
                            </text>
                        </g>
                    )}
                </svg>

                {/* X-axis Labels */}
                <div className="flex justify-between mt-16 px-2">
                    {chartData.map((point, index) => (
                        <span
                            key={index}
                            className="text-[#ED1D25] text-xs font-['RobotoRegular']"
                            style={{ fontSize: '10px' }}
                        >
                            {point.month}
                        </span>
                    ))}
                </div>

                {/* Y-axis Labels */}
                <div className="absolute left-0 top-8 h-[300px] flex flex-col justify-between py-2">
                    {[0, 20, 40, 80, 100].map((value) => (
                        <span
                            key={value}
                            className="text-[#ED1D25] text-xs font-['RobotoRegular']"
                            style={{ fontSize: '10px' }}
                        >
                            {value}
                        </span>
                    ))}
                </div>
            </div>

            {/* Timeframe Buttons */}
            <div className="absolute right-4 top-16 flex flex-col gap-1">
                {TIMEFRAMES.map((tf) => (
                    <button
                        key={tf}
                        onClick={() => handleTimeframeChange(tf)}
                        className={`px-2 py-3 rounded-2xl text-xs font-['RobotoRegular'] transition-colors ${
                            timeframe === tf
                                ? 'bg-[#ED1D25] text-white'
                                : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    >
                        {tf}
                    </button>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                >
                    <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1" />
                    <text
                        x="8"
                        y="11"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="10"
                        fontFamily="Arial"
                        fontWeight="bold"
                    >
                        i
                    </text>
                </svg>
                <span className="font-['RobotoRegular'] text-md">
                    Past performance is not a reliable indicator of future results
                </span>
            </div>
        </div>
    )
}

export default PriceChart

