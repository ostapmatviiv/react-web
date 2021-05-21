import ReactDOM from "react-dom"
import React from "react"
import {BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { Register } from "./Register";
import { Buy } from "./Buy";
import { Cart } from "./Cart";
import { Delete } from "./Delete";
import Demand from "./Demand";
import { EditProfile } from "./EditProfile";
import { Item } from "./Item";
import { ItemDelete } from "./ItemDelete";
import { ItemEdit } from "./ItemEdit";
import { Order } from "./Order";
import { OrderDelete } from "./OrderDelete";
import { OrderDemand } from "./OrderDemand";
import { OrderEdit } from "./OrderEdit";
import { Profile } from "./Profile";
import { ProvisorOrderEdit } from "./ProvisorOrderEdit";
import { ProvisorOrderDelete } from "./ProvisorOrderDelete";
import { ProvisorOrders } from "./ProvisorOrders";
import { ProvisorOrderView } from "./ProvisorOrderView";
import { Reserve } from "./Reserve";
import { Items } from "./Items";
import { ItemForm } from "./ItemsForm";
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";
import Navbar from "./Navbar/Navbar";
import Footer1 from "./Footer/Footer";

it("Navnolog renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Navbar/></Router>,div);
})


localStorage.setItem("useremail","1")
localStorage.setItem("userpass","1")
localStorage.setItem("provisoremail","p")
localStorage.setItem("provisorpass","p")
localStorage.setItem("order_id",1)
// it("Navlog renders without crashes",()=>{
//     const div=document.createElement('div');
//     ReactDOM.render(<Router><Navbar/></Router>,div);
// })

it("Footer renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Footer1/></Router>,div);
})


it("Login renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Login/></Router>,div);
})

it("Register renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Register/></Router>,div);
})

it("Buy renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Buy/></Router>,div);
})

it("Cart renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Cart/></Router>,div);
})

it("Delete renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Delete/></Router>,div);
})

it("Demand renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Demand/></Router>,div);
})

it("EditProfile renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><EditProfile/></Router>,div);
})

it("Item renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Item/></Router>,div);
})

it("ItemDelete renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ItemDelete/></Router>,div);
})

it("ItemEdit renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ItemEdit/></Router>,div);
})

it("Items renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Items/></Router>,div);
})

it("ItemForm renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ItemForm/></Router>,div);
})

it("Order renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Order/></Router>,div);
})

it("OrderDelete renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><OrderDelete/></Router>,div);
})

it("OrderDemand renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><OrderDemand/></Router>,div);
})

it("OrderEdit renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><OrderEdit/></Router>,div);
})

it("Profile renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Profile/></Router>,div);
})

it("ProvisorOrderEdit renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ProvisorOrderEdit/></Router>,div);
})

it("ProvisorOrderDelete renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ProvisorOrderDelete/></Router>,div);
})

it("ProvisorOrders renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ProvisorOrders/></Router>,div);
})

it("ProvisorOrderView renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ProvisorOrderView/></Router>,div);
})

it("Reserve renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Reserve/></Router>,div);
})

it('Login renders without crashes on submit',()=>{
    render(<Router><Login /></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('password');
    const  input3 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('Register renders without crashes on submit',()=>{
    render(<Router><Register /></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('email');
    const  input3 = screen.getByPlaceholderText('password');
    const  input4 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('ItemForm renders without crashes on submit',()=>{
    render(<Router><ItemForm /></Router>);
    const  input1 = screen.getByPlaceholderText('name');
    const  input2 = screen.getByPlaceholderText('price');
    const  input3 = screen.getByPlaceholderText('quantity');
    const  input4 = screen.getByPlaceholderText('description');
    const  input5 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent.change(input5, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('ProvisorOrderEdit renders without crashes on submit',()=>{
    render(<Router><ProvisorOrderEdit /></Router>);
    const  input1 = screen.getByPlaceholderText('Quantity');
    const  input2 = screen.getByTestId('submit1');
    const  input3 = screen.getByTestId('submit2');

    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit1'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    }),
    screen.getByTestId('submit2'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })

    )

});


it('OrderEdit renders without crashes on submit',()=>{
    render(<Router><OrderEdit /></Router>);
    const  input1 = screen.getByPlaceholderText('Quantity');
    fireEvent.change(input1, { target: { value: '1' }});
});


it('ItemEdit renders without crashes on submit',()=>{
    render(<Router><ItemEdit /></Router>);
    const  input1 = screen.getByPlaceholderText('Name');
    const  input2 = screen.getByTestId('submit1');
    const  input3 = screen.getByTestId('submit2');
    const  input4 = screen.getByPlaceholderText('Description');
    const  input5 = screen.getByPlaceholderText('Price');
    const  input6 = screen.getByPlaceholderText('Quantity');

    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent.change(input5, { target: { value: '1' }});
    fireEvent.change(input6, { target: { value: '1' }});
    fireEvent(
    screen.getByTestId('submit1'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    }),
    screen.getByTestId('submit2'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })

    )

});

it('Reserve renders without crashes on submit',()=>{
    render(<Router><Reserve /></Router>);
    const  input1 = screen.getByPlaceholderText('Quantity');
    fireEvent.change(input1, { target: { value: '1' }});
});

it('Buy renders without crashes on submit',()=>{
    render(<Router><Buy /></Router>);
    const  input1 = screen.getByPlaceholderText('Quantity');
    fireEvent.change(input1, { target: { value: '1' }});
});

it('EditProfile renders without crashes on submit',()=>{
    render(<Router><EditProfile /></Router>);
    const  input1 = screen.getByPlaceholderText('username');
    const  input2 = screen.getByPlaceholderText('useremail');
    const  input3 = screen.getByPlaceholderText('userpass');
    const  input4 = screen.getByPlaceholderText('provisorname');
    const  input5 = screen.getByPlaceholderText('provisoremail');
    const  input6 = screen.getByPlaceholderText('provisorpass');

    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});
    fireEvent.change(input5, { target: { value: '1' }});
    fireEvent.change(input6, { target: { value: '1' }});


});

it('Del renders without crashes on submit',()=>{
    render(<Router><Delete /></Router>);
    const  input1 = screen.getByTestId('submit1');
    const  input2 = screen.getByTestId('submit2');
    const  input3 = screen.getByTestId('submit3');
    const  input4 = screen.getByTestId('submit4');

    fireEvent.change(input1, { target: { value: '1' }});
    fireEvent.change(input2, { target: { value: '1' }});
    fireEvent.change(input3, { target: { value: '1' }});
    fireEvent.change(input4, { target: { value: '1' }});

    fireEvent(
    screen.getByTestId('submit1'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    }),
    screen.getByTestId('submit2'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    }),
        screen.getByTestId('submit3'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    }),
    screen.getByTestId('submit4'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })

    )

});