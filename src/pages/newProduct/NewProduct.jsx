import { useState } from "react";
import { publicUrl } from "../../config";
import "./newProduct.css";

export default function NewProduct() {
    const [productData, setProductData] = useState();
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
    const handleArrayChange = (e) => {
        // let x = e.target.value.split(",");
        // console.log(x);
        setProductData({
            ...productData,
            [e.target.name]: e.target.value.split(","),
        });
    };
    const handleSubmit = async (e) => {
        // console.log(produc);
        e.preventDefault();
        console.log(productData.file);
        const user = JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        const newForm = new FormData();
        newForm.append("file", productData.file);
        newForm.append("title", productData.title);
        newForm.append("categories", productData.categories);
        newForm.append("desc", productData.desc);
        newForm.append("price", productData.price);
        newForm.append("availablePieces", productData.availablePieces);
        // newForm.append("typeOf", productData.typeOf);
        newForm.append("inStock", productData.inStock);
        // newForm.append('file',productData.file)
        try {
            
            const res = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    Authorization: `Barear ${user.accessToken}`
                },
                body: newForm,
            });
        } catch (error) {
            console.log(error);
        }
        // const res = await publicUrl.post(
        //     "/products",
        //     { newForm },
        //     {
        //         headers: {
        //             Authorization: `Barear ${user.accessToken}`,
        //             "Content-Type": "multipart/form-data",
        //         },
        //     }
        // );
    };
    return (
        <div className='newProduct'>
            <h1 className='addProductTitle'>New Product</h1>
            <form className='addProductForm' onSubmit={handleSubmit}>
                <div className='addProductItem'>
                    <label>Image</label>
                    <input
                        type='file'
                        name='file'
                        id='file'
                        accept='image/*'
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                [e.target.name]: e.target.files[0],
                            })
                        }
                    />
                </div>
                <div className='addProductItem'>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Product Title'
                        onChange={handleChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Categories</label>
                    <input
                        type='text'
                        name='categories'
                        placeholder='Eg:Male,Summer..(Space seperated)'
                        onChange={handleArrayChange}
                    />
                </div>
                {/* <div className='addProductItem'>
                    <label>Size</label>
                    <input
                        type='text'
                        name='si'
                        placeholder='Eg:Male,Summer..(Space seperated)'
                        onChange={handleArrayChange}
                    />
                </div> */}
                <div className='addProductItem'>
                    <label>Description</label>
                    <textarea
                        name='desc'
                        placeholder='Eg:About the product'
                        onChange={handleChange}
                        style={{ minHeight: "20vh" }}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Stock</label>
                    <input
                        type='number'
                        placeholder='123'
                        name='availablePieces'
                        onWheel={(e) => e.target.blur()}
                        onChange={handleChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Price(Rs)</label>
                    <input
                        type='number'
                        placeholder='10'
                        name='price'
                        onWheel={(e) => e.target.blur()}
                        onChange={handleChange}
                    />
                </div>
                <div className='addProductItem'>
                    <label>Active</label>
                    <select name='inStock' id='active' onChange={handleChange}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                <button className='addProductButton'>Create</button>
            </form>
        </div>
    );
}
