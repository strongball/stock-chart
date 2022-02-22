import React, { useState } from 'react';
import useSWR from 'swr';
import { getStock } from '../api/stock';

import StockForm, { FormData } from '../components/StockForm';
import StockChart from '../components/StockChart';
interface Props {}
const StockPage: React.FC<Props> = (props) => {
    const [stockCode, setStockCode] = useState('AAPL');
    const [date, setDate] = useState('2022-01-01');
    const [displayDay, setDisplayDay] = useState(30);
    const { data } = useSWR(stockCode, (key) => {
        if (!key) {
            return null;
        }
        return getStock(key);
    });
    const handleSubmit = (data: FormData) => {
        setStockCode(data.stockCode);
    };
    return (
        <div>
            <StockForm initValue={{ stockCode }} onSubmit={handleSubmit} />
            {data ? (
                <StockChart
                    height={400}
                    width={600}
                    data={data}
                    date={date}
                    onDateChange={setDate}
                    displayDay={displayDay}
                    onDisplayDayChange={setDisplayDay}
                />
            ) : (
                'loading...'
            )}
        </div>
    );
};
export default StockPage;
