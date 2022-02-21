import React, { useEffect, useState } from 'react';

import { getStock, StockData } from './api/stock';

import StockChart from './components/StockChart';

const App: React.FC = (props) => {
    const [stockData, setStockData] = useState<StockData[]>();
    const [date, setDate] = useState('2022-01-01');
    const [displayDay, setDisplayDay] = useState(30);

    useEffect(() => {
        (async () => {
            const stock = await getStock('AAPL');
            setStockData(stock);
        })();
    }, []);
    return (
        <div>
            <StockChart
                height={400}
                width={600}
                data={stockData}
                date={date}
                onDateChange={setDate}
                displayDay={displayDay}
                onDisplayDayChange={setDisplayDay}
            />
        </div>
    );
};

export default App;
