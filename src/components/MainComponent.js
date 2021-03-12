import React, { Component } from "react";
import Home from './HomeComponent';
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import Contact from "./ContactComponent"
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {
  // to store the state, we need to define the state in the constructor of the class component
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
      // selectedDish: null
    };
  }
  // onDishSelect(dishId) {
  //   // to change the state, we us the this.setState function call
  //   this.setState({ selectedDish: dishId });
  // }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
        promotion={this.state.promotions.filter(promo => promo.featured)[0]}
        leader={this.state.leaders.filter(leader => leader.featured)[0]}
        
        />
      )
    }

    const DishWIthID = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishid === parseInt(match.params.dishId, 10))} />
      ) 
    }
    
    return (
      <div className="App">
       <Header />
       <Switch>
         <Route path='/home' component={HomePage} />
         {/* i can make the home page a class component and pass the props there instead of defining a homepage function in this page */}
      
         <Route exact path='/menu' component={() => <Menu dishes= {this.state.dishes} />} />
         <Route path='/menu/:dishId' component={DishWIthID} />

         <Route exact path='/contactus' component={Contact} />
         <Redirect to='/home' />
       </Switch>      
        <Footer />
      </div>
    );
  }
}
 <Header/>
        
export default Main;






// render() {
//   return (
//     <div className="App">
//       <Header/>
//       <Menu
//         dishes={this.state.dishes}
//         onClick={dishId => this.onDishSelect(dishId)}
//       />
//       <Dishdetail
//         dish={
//           this.state.dishes.filter(
//             (dish) => dish.id === this.state.selectedDish
//           )[0]
//         }
//       />
//       <Footer/>
//     </div>
//   );
// }