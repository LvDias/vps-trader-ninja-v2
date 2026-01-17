"use client"

import {
    CandlestickSeries,
    ColorType,
    CrosshairMode,
    createChart,
} from "lightweight-charts"
import { useEffect, useRef } from "react"

export function CleanChart() {
    const chartContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!chartContainerRef.current) return

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: "transparent",
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: false },
            },
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
            rightPriceScale: { visible: false },
            timeScale: {
                visible: false,
                rightOffset: 0,
                barSpacing: 10,
                fixLeftEdge: true,
                lockVisibleTimeRangeOnResize: true,
            },
            crosshair: { mode: CrosshairMode.Hidden },
            handleScroll: false,
            handleScale: false,
        })

        const logo = chartContainerRef.current.querySelector(
            "a[href*='tradingview.com']"
        ) as HTMLElement | null
        if (logo) {
            logo.style.display = "none"
        }

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#10b981",
            downColor: "#ef4444",
            borderVisible: false,
            wickUpColor: "#10b981",
            wickDownColor: "#ef4444",
        })

        const data: any[] = []
        const time = Math.floor(Date.now() / 1000) - 100 * 60
        let previousClose = 1000

        for (let i = 0; i < 100; i++) {
            const open = previousClose
            const change = (Math.random() - 0.5) * 10
            const close = open + change
            const high = Math.max(open, close) + Math.random() * 5
            const low = Math.min(open, close) - Math.random() * 5

            data.push({ time: time + i * 60, open, high, low, close })
            previousClose = close
        }

        candleSeries.setData(data)
        chart.timeScale().fitContent()

        let lastCandle = data[data.length - 1]

        const interval = setInterval(() => {
            const open = lastCandle.close
            const change = (Math.random() - 0.5) * 5
            const close = open + change
            const high = Math.max(open, close) + Math.random() * 2
            const low = Math.min(open, close) - Math.random() * 2
            const nextTime = lastCandle.time + 60

            const newCandle = { time: nextTime, open, high, low, close }

            candleSeries.update(newCandle)
            lastCandle = newCandle
        }, 1000)

        const handleResize = () => {
            if (chartContainerRef.current) {
                chart.applyOptions({
                    width: chartContainerRef.current.clientWidth,
                    height: chartContainerRef.current.clientHeight,
                })
                chart.timeScale().fitContent()
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            clearInterval(interval)
            window.removeEventListener("resize", handleResize)
            chart.remove()
        }
    }, [])

    return (
        <div
            ref={chartContainerRef}
            className="pointer-events-none absolute inset-0 -z-20"
        />
    )
}

export function Chart() {
    return (
        <div className="absolute h-full w-full">
            <div className="absolute -z-10 h-full w-full bg-zinc-950/80"></div>
            <CleanChart />
        </div>
    )
}
