import React, { Component } from 'react'
//import * as images from '../images/shoes/4/4.png'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://www.upsieutoc.com/images/2021/01/05/1.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://www.upsieutoc.com/images/2021/01/05/2.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://www.upsieutoc.com/images/2021/01/05/3.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://www.upsieutoc.com/images/2021/01/05/4.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://www.upsieutoc.com/images/2021/01/05/5.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2021/01/05/6.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Shoes 07",
                "src": "https://www.upsieutoc.com/images/2021/01/05/1.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nike Shoes 08",
                "src": "https://www.upsieutoc.com/images/2021/01/05/2.png",
                "description": "Description of shoes",
                "content": "Content of shoes",
                "price": 150,
                "price2": 120,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    render() {
        const {products} = this.state;
        //const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}