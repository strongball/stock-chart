import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { StockData } from '../api/stock';
import BaseChart from './chart/BaseChart';
import { Point, DataValue } from './chart/types';
import Line from './chart/Line';
import Bar from './chart/Bar';
import XAxis from './chart/XAxis';
import YAxis from './chart/YAxis';
import Tooltip from './chart/Tooltip';

import { useWheelControl } from '../hooks/wheel';
import { useSwipeControl } from '../hooks/swipe';

interface Props {
    width: number;
    height: number;
    date: string;
    onDateChange?: (date: string) => void;
    displayDay: number;
    onDisplayDayChange?: (displayDay: number) => void;
    data?: StockData[];
}
const StockChart: React.FC<Props> = (props) => {
    const { width, height, data, date, onDateChange, displayDay, onDisplayDayChange } = props;

    const dateStart = dayjs(date)
        .add(-displayDay / 2, 'day')
        .format('YYYY-MM-DD');
    const dateEnd = dayjs(date)
        .add(displayDay / 2, 'day')
        .format('YYYY-MM-DD');

    const inTimeStocks = useMemo<StockData[]>(
        () =>
            data?.filter((stock) => {
                const date = dayjs(stock.date);
                return !date.isBefore(dateStart) && !date.isAfter(dateEnd);
            }) || [],
        [data, dateStart, dateEnd]
    );

    const xAxisTicks: DataValue[] = useMemo(() => {
        const dates: string[] = [];
        let cursor = dayjs(dateStart);
        while (!cursor.isAfter(dateEnd)) {
            const date = cursor.format('YYYY-MM-DD');
            if (data?.some((stock) => stock.date === date)) {
                // 有開盤
                dates.push(date);
            }
            cursor = cursor.add(1, 'day');
        }
        return dates;
    }, [dateStart, dateEnd, data]);
    const priceYAxisTicks: DataValue[] = useMemo(() => {
        if (inTimeStocks.length === 0) {
            return [];
        }
        const prices = inTimeStocks.map((pp) => pp.value);

        const min = Math.round(Math.min(...prices) * 0.8 * 100) / 100;
        const max = Math.round(Math.max(...prices) * 1.2 * 100) / 100;
        const interval = Math.round(((max - min) / 5) * 100) / 100;
        const ticks: number[] = [];
        let cursor = max;
        while (cursor >= min) {
            ticks.push(cursor);
            cursor -= interval;
        }
        return ticks;
    }, [inTimeStocks]);

    const volumeYAxisTicks: DataValue[] = useMemo(() => {
        if (inTimeStocks.length === 0) {
            return [];
        }
        const volumes = inTimeStocks.map((pp) => pp.volume as number);

        const min = Math.round(Math.min(...volumes) * 0.1);
        const max = Math.round(Math.max(...volumes) * 1.1);
        const interval = Math.round((max - min) / 5);
        const ticks: number[] = [];
        let cursor = max;
        while (cursor >= min) {
            ticks.push(cursor);
            cursor -= interval;
        }
        return ticks;
    }, [inTimeStocks]);

    const { handleWheel } = useWheelControl({
        onWheel(value) {
            const newDisplayDay = Math.max(6, displayDay + Math.round(value / 20));
            onDisplayDayChange && onDisplayDayChange(newDisplayDay);
        },
    });

    /**
     * move
     */
    const minAllowDate = data?.[data.length - 1].date;
    const maxAllowDate = data?.[0].date;
    const swipeEvent = useSwipeControl({
        onSwipe(value) {
            const changeValue = Math.round(value / 10);
            const targetDay = dayjs(date).add(-changeValue, 'day');
            if (!targetDay.isBefore(minAllowDate) && !targetDay.isAfter(maxAllowDate)) {
                // last day is today.
                onDateChange && onDateChange(targetDay.format('YYYY-MM-DD'));
                return;
            }
        },
    });
    return (
        <div>
            <BaseChart
                width={width}
                height={(height / 3) * 2}
                xAxisTicks={xAxisTicks}
                yAxisTicks={priceYAxisTicks}
                yTickWidth={50}
                DivProps={{
                    onWheel: handleWheel,
                    ...swipeEvent,
                }}
            >
                <XAxis />
                <YAxis label={(data) => Number(data).toFixed(2)} />
                <Line data={inTimeStocks} x="date" y="value" />
                <Tooltip
                    render={(data: StockData) => (
                        <div>
                            <div>{`日期: ${data.date}`}</div>
                            <div>{`價格: ${data.value}`}</div>
                            <div>{`交易量: ${data.volume}`}</div>
                        </div>
                    )}
                />
            </BaseChart>
            <BaseChart
                width={width}
                height={height / 3}
                xAxisTicks={xAxisTicks}
                yAxisTicks={volumeYAxisTicks}
                yTickWidth={50}
                DivProps={{
                    onWheel: handleWheel,
                    ...swipeEvent,
                }}
            >
                <YAxis label={(data) => Number(data).toFixed(0)} />
                <Bar data={inTimeStocks} x="date" y="volume" />
                <Tooltip
                    render={(data: StockData) => (
                        <div>
                            <div>{`日期: ${data.date}`}</div>
                            <div>{`價格: ${data.value}`}</div>
                            <div>{`交易量: ${data.volume}`}</div>
                        </div>
                    )}
                />
            </BaseChart>
        </div>
    );
};
export default StockChart;
