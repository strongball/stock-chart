import React, { PropsWithChildren, useContext } from 'react';
import { DataValue, Point } from './types';
import { ChartContext } from './context';

interface Props<T extends {}> {
    data: T[];
    x: keyof T;
    y: keyof T;
}
const Bar = <T,>(props: PropsWithChildren<Props<T>>) => {
    const { data, x, y } = props;
    const { xAxisFn, yAxisFn, yAxisTicks, onHoverItem } = useContext(ChartContext);
    const baseY = yAxisFn(yAxisTicks[yAxisTicks.length - 1]);
    const barWidth = 10;
    return (
        <g className="line">
            {data.map((point, i) => (
                <React.Fragment key={i}>
                    <rect
                        x={xAxisFn(point[x] as unknown as number) - barWidth / 2}
                        y={yAxisFn(point[y] as unknown as DataValue)}
                        width={barWidth}
                        height={baseY - yAxisFn(point[y] as unknown as DataValue)}
                        fill="blue"
                        onMouseEnter={(e) =>
                            onHoverItem({
                                x: e.clientX,
                                y: e.clientY,
                                data: point,
                            })
                        }
                        onMouseLeave={() => onHoverItem()}
                    />
                </React.Fragment>
            ))}
        </g>
    );
};
export default Bar;
