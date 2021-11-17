import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://afternoon-tundra-98967.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    };

    return (
        <>
            <Navigation></Navigation>

            <div className="add-product">
                <h1>Add a product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />
                    <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddProduct;