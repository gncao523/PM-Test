export interface ChartDataPoint {
    x: number
    y: number
    month: string
}

export const getChartData = (timeframe: string): ChartDataPoint[] => {
    const baseData: Record<string, ChartDataPoint[]> = {
        '1h': [
            { x: 0, y: 30, month: 'Jan' },
            { x: 9, y: 35, month: 'Feb' },
            { x: 18, y: 40, month: 'Mar' },
            { x: 27, y: 45, month: 'Apr' },
            { x: 36, y: 50, month: 'May' },
            { x: 45, y: 55, month: 'Jun' },
            { x: 54, y: 80, month: 'Jul' },
            { x: 63, y: 52, month: 'Aug' },
            { x: 72, y: 58, month: 'Sep' },
            { x: 81, y: 80, month: 'Oct' },
            { x: 90, y: 65, month: 'Nov' },
            { x: 100, y: 70, month: 'Dec' },
        ],
        '1d': [
            { x: 0, y: 25, month: 'Jan' },
            { x: 9, y: 30, month: 'Feb' },
            { x: 18, y: 35, month: 'Mar' },
            { x: 27, y: 40, month: 'Apr' },
            { x: 36, y: 45, month: 'May' },
            { x: 45, y: 50, month: 'Jun' },
            { x: 54, y: 55, month: 'Jul' },
            { x: 63, y: 52, month: 'Aug' },
            { x: 72, y: 58, month: 'Sep' },
            { x: 81, y: 60, month: 'Oct' },
            { x: 90, y: 65, month: 'Nov' },
            { x: 100, y: 70, month: 'Dec' },
        ],
        '4h': [
            { x: 0, y: 28, month: 'Jan' },
            { x: 9, y: 33, month: 'Feb' },
            { x: 18, y: 38, month: 'Mar' },
            { x: 27, y: 43, month: 'Apr' },
            { x: 36, y: 48, month: 'May' },
            { x: 45, y: 53, month: 'Jun' },
            { x: 54, y: 75, month: 'Jul' },
            { x: 63, y: 50, month: 'Aug' },
            { x: 72, y: 56, month: 'Sep' },
            { x: 81, y: 70, month: 'Oct' },
            { x: 90, y: 63, month: 'Nov' },
            { x: 100, y: 68, month: 'Dec' },
        ],
        '1m': [
            { x: 0, y: 32, month: 'Jan' },
            { x: 9, y: 37, month: 'Feb' },
            { x: 18, y: 42, month: 'Mar' },
            { x: 27, y: 47, month: 'Apr' },
            { x: 36, y: 52, month: 'May' },
            { x: 45, y: 57, month: 'Jun' },
            { x: 54, y: 85, month: 'Jul' },
            { x: 63, y: 54, month: 'Aug' },
            { x: 72, y: 60, month: 'Sep' },
            { x: 81, y: 85, month: 'Oct' },
            { x: 90, y: 67, month: 'Nov' },
            { x: 100, y: 72, month: 'Dec' },
        ],
        '5m': [
            { x: 0, y: 31, month: 'Jan' },
            { x: 9, y: 36, month: 'Feb' },
            { x: 18, y: 41, month: 'Mar' },
            { x: 27, y: 46, month: 'Apr' },
            { x: 36, y: 51, month: 'May' },
            { x: 45, y: 56, month: 'Jun' },
            { x: 54, y: 82, month: 'Jul' },
            { x: 63, y: 53, month: 'Aug' },
            { x: 72, y: 59, month: 'Sep' },
            { x: 81, y: 82, month: 'Oct' },
            { x: 90, y: 66, month: 'Nov' },
            { x: 100, y: 71, month: 'Dec' },
        ],
        '15m': [
            { x: 0, y: 29, month: 'Jan' },
            { x: 9, y: 34, month: 'Feb' },
            { x: 18, y: 39, month: 'Mar' },
            { x: 27, y: 44, month: 'Apr' },
            { x: 36, y: 49, month: 'May' },
            { x: 45, y: 54, month: 'Jun' },
            { x: 54, y: 78, month: 'Jul' },
            { x: 63, y: 51, month: 'Aug' },
            { x: 72, y: 57, month: 'Sep' },
            { x: 81, y: 75, month: 'Oct' },
            { x: 90, y: 64, month: 'Nov' },
            { x: 100, y: 69, month: 'Dec' },
        ],
        '30m': [
            { x: 0, y: 27, month: 'Jan' },
            { x: 9, y: 32, month: 'Feb' },
            { x: 18, y: 37, month: 'Mar' },
            { x: 27, y: 42, month: 'Apr' },
            { x: 36, y: 47, month: 'May' },
            { x: 45, y: 52, month: 'Jun' },
            { x: 54, y: 72, month: 'Jul' },
            { x: 63, y: 49, month: 'Aug' },
            { x: 72, y: 55, month: 'Sep' },
            { x: 81, y: 68, month: 'Oct' },
            { x: 90, y: 62, month: 'Nov' },
            { x: 100, y: 67, month: 'Dec' },
        ],
        '1w': [
            { x: 0, y: 26, month: 'Jan' },
            { x: 9, y: 31, month: 'Feb' },
            { x: 18, y: 36, month: 'Mar' },
            { x: 27, y: 41, month: 'Apr' },
            { x: 36, y: 46, month: 'May' },
            { x: 45, y: 51, month: 'Jun' },
            { x: 54, y: 68, month: 'Jul' },
            { x: 63, y: 48, month: 'Aug' },
            { x: 72, y: 54, month: 'Sep' },
            { x: 81, y: 65, month: 'Oct' },
            { x: 90, y: 61, month: 'Nov' },
            { x: 100, y: 66, month: 'Dec' },
        ],
    }
    return baseData[timeframe] || baseData['1h']
}

export const generatePath = (data: ChartDataPoint[]): string => {
    return data.map((point, index) => {
        const x = point.x
        const y = 100 - point.y
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')
}

export const TIMEFRAMES = ['1d', '1h', '4h', '1m', '5m', '15m', '30m', '1w'] as const

