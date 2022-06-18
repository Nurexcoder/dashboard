import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { publicUrl, url } from "../../config";
import "./NewCategory.css";

export default function NewCategory() {
    const [CategoryData, setCategoryData] = useState();
    const history = useHistory();
    const handleChange = (e) => {
        setCategoryData({ ...CategoryData, [e.target.name]: e.target.value });
    };
    const handleArrayChange = (e) => {
        // let x = e.target.value.split(",");
        // console.log(x);
        setCategoryData({
            ...CategoryData,
            [e.target.name]: e.target.value.split(","),
        });
    };
    const handleSubmit = async (e) => {
        // console.log(produc);
        e.preventDefault();
        console.log(CategoryData.file);
        const user = JSON.parse(localStorage.getItem("user"));
        // console.log(user);
        const newForm = new FormData();
      
        newForm.append("categoryName", CategoryData.title);
        newForm.append("subCategoryName", CategoryData.categories);
        newForm.append("desc", CategoryData.desc);
        try {
            const res = await fetch(`${url}/Categorys`, {
                method: "POST",
                headers: {
                    Authorization: `Barear ${user.accessToken}`,
                },
                body: newForm,
            });
            history.push("/Category");
        } catch (error) {
            Swal.fire("Error","Something went wrong","error")
            console.log(error);
        }
        // const res = await publicUrl.post(
        //     "/Categorys",
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
        <div className='newCategory'>
            <h1 className='addCategoryTitle'>New Category</h1>
            <form className='addCategoryForm' onSubmit={handleSubmit}>
               
                <div className='addCategoryItem'>
                    <label>Category Name</label>
                    <input
                        type='text'
                        name='categoryName'
                        placeholder='Category Title'
                        onChange={handleChange}
                    />
                </div>
                <div className='addCategoryItem'>
                    <label>Sub Categories</label>
                    <input
                        type='text'
                        name='subCategory'
                        placeholder='Eg:Male,Summer..(Space seperated)'
                        onChange={handleArrayChange}
                    />
                </div>
              
                <div className='addCategoryItem'>
                    <label>Description</label>
                    <textarea
                        name='desc'
                        placeholder='Eg:About the Category'
                        onChange={handleChange}
                        style={{ minHeight: "20vh" }}
                    />
                </div>
               
                <button className='addCategoryButton'>Create</button>
            </form>
        </div>
    );
}
