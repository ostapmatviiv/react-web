import React , {Fragment, useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

function Navbarnolog (props){

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 200);
    });

  }, []);
    return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

        <NavLink className="navbar-brand navbar-logo" to="/">
          Pharmacy 123
        </NavLink>


        <button
          className="navbar-toggler"
          onClick={ function(){
            setTimeout(function(){ animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/" exact>
                  <i
                  className="fas fa-home">
                  </i>Home
                </NavLink>
              </li>
              {!localStorage.getItem('provisorname')&&!localStorage.getItem('username')?(
                <Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" exact>
                <i class="fas fa-sign-in-alt">
                  </i>Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" exact>
                  <i
                  className="far fa-address-book">
                  </i>Register
                </NavLink>
              </li>
              </Fragment>
              ):(null)}           
          </ul>
        </div>
    </nav>
    )
  
}
function Navbarlog (props){

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px",
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px",
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 200);
    });

  }, []);
    return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          Pharmacy 123
        </NavLink>
        <button
          className="navbar-toggler"
          onClick={ function(){
            setTimeout(function(){ animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>

              <li className="nav-item active">
                <NavLink className="nav-link" to="/" exact>
                  <i
                  className="fas fa-home">
                  </i>Home
                </NavLink>
              </li>
              {localStorage.getItem('provisoremail')?(
              <Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add" exact>
                <i className="fas fa-plus-square"></i>Add Item
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/provisor/orders" exact>
                <i class="fas fa-cart-arrow-down"></i>All Orders
                </NavLink>
              </li>
              </Fragment>):(null
            )}
            {localStorage.getItem('useremail')?
            (<Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" >
                <i class="fas fa-shopping-cart"></i>
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cartdemand" >
                <i class="fas fa-cart-plus"></i>
                  Demand
                </NavLink>
              </li>
            </Fragment>):null}
            {localStorage.getItem('provisoremail')||localStorage.getItem('useremail')?
            (<Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile" >
                <i class="fas fa-address-card"></i>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout" >
                <i class="fas fa-sign-out-alt">
                  </i>
                  Logout
                </NavLink>
              </li>
            </Fragment>):null}
          </ul>
        </div>
    </nav>
    )
  
}
function Navbar(props){
  let log=false;
  if(localStorage.getItem('useremail')||localStorage.getItem('provisoremail')){
    log= true;
  }
  console.log(log);
  if(log){
    return <Navbarlog/>
  }
  return <Navbarnolog/>
}
export default Navbar;