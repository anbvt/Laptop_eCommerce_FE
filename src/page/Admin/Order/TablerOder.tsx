import type { TableColumnsType } from 'antd';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from 'src/util/CustomHook';

interface ExpandedDataType {
    key: React.Key;
    id: string;
    product: {
        name: string;
    };
}
interface DataType {
    key: React.Key;
    id: string;
    name: string;
    place: string;
    buyDate: string;
    customerName: String;
    status: number;
    order_details: Array<ExpandedDataType>
}


const TableOrder: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    useEffect(() => {
        const init = async () => {
            if (data.length === 0) {
                const { data: result } = await useFetch.get("/api/order");
                result.forEach((s: any) => {
                    s = {
                        ...s,
                        key: s.id
                    }
                })
                console.log(result);
                setData(result);
            }
        }
        init();
    })
    console.log(data);

    const columns: TableColumnsType<DataType> = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Nơi nhận', dataIndex: 'place', key: 'place' },
        { title: 'Khách hàng', dataIndex: 'customerName', key: 'customerName' },
        { title: 'Ngày tạo', dataIndex: 'buyDate', key: 'buyDate' },
        { title: "", dataIndex: "view", render: (value, record, index) => <Link to={"/admin/order/detail?ordId=" + record.id}>Xem chi tiết</Link> },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: () => <a href='#1'>Đang lên đơn</a> },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
            />
        </>
    );
};

export default TableOrder;