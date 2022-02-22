import React, { useState } from 'react';

export interface FormData {
    stockCode: string;
}
interface Props {
    initValue?: Partial<FormData>;
    onSubmit?: (data: FormData) => void;
}
const StockForm: React.FC<Props> = (props) => {
    const { onSubmit } = props;
    const [formData, setFormData] = useState<Partial<FormData>>({ ...props?.initValue });
    const handleValueChange =
        <T extends keyof FormData>(name: T) =>
        (value: FormData[T]) => {
            setFormData({
                ...formData,
                [name]: value,
            });
        };
    const handleSubmit = () => {
        if (!formData.stockCode) {
            alert('編號不可為空');
            return;
        }
        onSubmit &&
            onSubmit({
                stockCode: formData.stockCode,
            });
    };
    return (
        <div>
            <input value={formData.stockCode || ''} onChange={(e) => handleValueChange('stockCode')(e.target.value)} />
            <button onClick={handleSubmit}>查詢</button>
        </div>
    );
};
export default StockForm;
