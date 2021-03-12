import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from 'react-router-dom'



 function RenderDish({dish}) {
    if (dish != null) {
      return (
        <div>
          <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  function RenderComments({comments}) {
   if (comments != null) {
     console.log(comments)
     return(
       <div>
         <Card>
         <h4>Comments</h4>
            <ul className="list-unstyled">
            {comments.map(comment => (        
            <li key={comment.id}>
              <div>
              <p>{comment.comment}</p>
              <p> {comment.author}</p>
              </div>        
           </li>
            )
             )}
          </ul>
       </Card>
           </div>
     )
   }}

   const DishDetail = (props) => {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div  className="col-12 col-sm-12 col-md-5 m-1" ><RenderDish dish={props.dish} /></div>         
          <div className="col-12 col-sm-12 col-md-5 m-1"><RenderComments comments={props.comments} /></div>
        </div>
        </div>
      
    );
   }
 

export default DishDetail;


  







  //   // const rendComments = comments.map(comment => {
  //   //   return (
  //   //     <div>
  //   //     <ul className="list-unstyled">
    //       <li key={comment.id}>
    //         <p>{comment.comment}</p>
    //         <p>{comment.author}</p>
    //       </li>
    //     </ul>
    //     </div>
    //   );
    // });
    // if (comments != null) {
    //   return rendComments;
    // }
    // //   if (comments != null) {
    //     return (
    //       <div className="col-12 col-md-5 m-1">
    //         <h4>Comments</h4>
    //           {comments.map(comment => {
    //             return (
    //               <ul className="list-unstyled">
    //               <li key={comment.id}>
    //                 <p>{comment.comment}</p>
    //                 <p>{comment.author}</p>
    //               </li>
    //               </ul>
    //             );
    //           })}
    //       </div>
    //     );
    //   } else return <div></div>;
  

 