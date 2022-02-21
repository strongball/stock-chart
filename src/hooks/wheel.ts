import React, { useEffect, useRef } from 'react';

interface WheelControlOptions {
    onWheel: (value: number) => void;
    delay?: number;
}
export function useWheelControl({ onWheel, delay = 10 }: WheelControlOptions) {
    const wheelTimeout = useRef<number>();
    const wheelValue = useRef<number>(0);
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        wheelValue.current += e.deltaY;
        if (wheelTimeout.current) {
            clearTimeout(wheelTimeout.current);
        }
        wheelTimeout.current = setTimeout(() => {
            onWheel(wheelValue.current);
            wheelValue.current = 0;
        }, delay);
    };
    useEffect(() => {
        return () => {
            if (wheelTimeout.current) {
                clearTimeout(wheelTimeout.current);
            }
        };
    }, []);

    return { handleWheel };
}
