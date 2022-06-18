import "./CategoryList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { CategoryRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicUrl } from "../../config";
import { useEffect } from "react";

export default function CategoryList() {
    const [data, setData] = useState(CategoryRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
       
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
                        <Link to={"/Category/" + params.row.id}>
                            <button className='CategoryListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='CategoryListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    useEffect(() => {
        const getCategorys = async () => {
            const res = await publicUrl.get("/Categorys");
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
        getCategorys();
    }, []);

    return (
        <div className='CategoryList'>
            <div className='CategoryTitleContainer'>
                <h1 className='CategoryTitle'>Category</h1>
                <Link to='/newCategory'>
                    <button className='CategoryAddButton'>Create</button>
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
