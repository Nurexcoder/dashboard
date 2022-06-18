import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicUrl } from "../../config";
import { useEffect } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img
                            className='productListImg'
                            src={params.row.img}
                            alt=''
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='productListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    useEffect(() => {
        const getProducts = async () => {
            const res = await publicUrl.get("/products");
            let tempData=[]
            res.data.map((item)=>{
                tempData.push({
                    id:item._id,
                    name:item.title,
                    img:item.img,
                    stock:item.inStock,
                    price:item.price,
                    status:item.status||'Active'

                })
            })
            setData(tempData);
        };
        getProducts();
    }, []);

    return (
        <div className='productList'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to='/newproduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
