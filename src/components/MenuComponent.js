import React from "react";
// import { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom'

function RenderMenuItem({dish}){
  return(
    <Card>
      <Link to={`/menu/${dish.id}`}>
    <CardImg width='100%' src={dish.image} alt={dish.name} />
    <CardImgOverlay>
      <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
    </Link>
    </Card>
  )
}

const Menu = (props) => {
 
  const menu = props.dishes.map((dish) => {
    return(
      <div key={dish.id} className='col-12 col-md-3 mt-2 mb-2'>
      <RenderMenuItem dish={dish}/>
      </div>
    )
  })

return (
  <div className='container'>
    <div className='row'>
      <Breadcrumb>
        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Menu</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div className='col-12'>
      <h3>Menu</h3>
      <hr />
    </div>
    <div className='row'>
    {menu}
    </div> 
  </div>
)
}




export default Menu;




































 

// class Menu extends Component {
//   render() {
//     const menu = this.props.dishes.map(dish => {
//       return (
//         // Whenever a list of items is constructed in react, every item requires a key attribute to be specified for it.
//         // The key helps react recognize/identify each one of the elements(items) uniquely while it is updating the screen.

//         // The tag=li specifies that each item is going to be a list item.
//         // Media left middle element helps to  display the image to the left.
//         <div key={dish.id} className="col-12 col-md-3">
//           <Card>
//           {/* <Card onClick={() => this.props.onClick(dish.id)}> */}
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });
//     console.log("Menu Component Render is invoked");

//     return (
//       <div className="container">
//         <div className="row justify-contents-center">{menu}</div>
//       </div>
//     );
//   }
// }

// export default Menu;

// // // The tag=li specifies that each item is going to be a list item.
// // // Media left middle element helps to  display the image to the left.
// // <div key={dish.id} className="col-12 mt-5">
// //   <Media tag="li">
// //     <Media left middle>
// //       <Media object src={dish.image} alt={dish.name} />
// //     </Media>
// //     <Media body className="ml-5">
// //       <Media heading>{kdish.name}</Media>
// //       <p>{dish.description}</p>
// //     </Media>
// //   </Media>
// // </div>

// // return (
// //     <div className="container">
// //       <div className="row">
// //         <Media list>{menu}</Media>
// //       </div>
// //     </div>
