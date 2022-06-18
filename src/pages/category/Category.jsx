import { Link } from "react-router-dom";
import "./Category.css";
import Chart from "../../components/chart/Chart";
import { CategoryData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function Category() {
    return (
        <>
            {/* <Link to='/newCategory'>
                <Button>Add Category</Button>
            </Link> */}
            <div className='Category'>
                <div className='CategoryTitleContainer'>
                    <h1 className='CategoryTitle'>Category</h1>
                    <Link to='/newCategory'>
                        <button className='CategoryAddButton'>Create</button>
                    </Link>
                </div>
                <div className='CategoryTop'>
                    <div className='CategoryTopLeft'>
                        <Chart
                            data={CategoryData}
                            dataKey='Sales'
                            title='Sales Performance'
                        />
                    </div>
                    <div className='CategoryTopRight'>
                        <div className='CategoryInfoTop'>
                            <img
                                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt=''
                                className='CategoryInfoImg'
                            />
                            <span className='CategoryName'>Apple Airpods</span>
                        </div>
                        <div className='CategoryInfoBottom'>
                            <div className='CategoryInfoItem'>
                                <span className='CategoryInfoKey'>id:</span>
                                <span className='CategoryInfoValue'>123</span>
                            </div>
                            <div className='CategoryInfoItem'>
                                <span className='CategoryInfoKey'>sales:</span>
                                <span className='CategoryInfoValue'>5123</span>
                            </div>
                            <div className='CategoryInfoItem'>
                                <span className='CategoryInfoKey'>active:</span>
                                <span className='CategoryInfoValue'>yes</span>
                            </div>
                            <div className='CategoryInfoItem'>
                                <span className='CategoryInfoKey'>
                                    in stock:
                                </span>
                                <span className='CategoryInfoValue'>no</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='CategoryBottom'>
                    <form className='CategoryForm'>
                        <div className='CategoryFormLeft'>
                            <label>Category Name</label>
                            <input type='text' placeholder='Apple AirPod' />
                            <label>In Stock</label>
                            <select name='inStock' id='idStock'>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                            <label>Active</label>
                            <select name='active' id='active'>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                            </select>
                        </div>
                        <div className='CategoryFormRight'>
                            <div className='CategoryUpload'>
                                <img
                                    src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                    alt=''
                                    className='CategoryUploadImg'
                                />
                                <label for='file'>
                                    <Publish />
                                </label>
                                <input
                                    type='file'
                                    id='file'
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className='CategoryButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
