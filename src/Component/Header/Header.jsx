import React from "react";
import { Link } from "react-router-dom";
import './haeder.css';

function Header() {
    return(
        <>
        <div className="nav">
            <div className="container">
                <Link className="nav_link " to={'/home'}>الرئيسية</Link>
                <Link className="nav_link" to={'/library'}>المكتبة المركزية</Link>
                <Link className="nav_link" to={'/network'}>حول الشبكة</Link>
            </div>
            <div className="logo">
                <Link className="nav_logo" to={'/home'}>الصراط</Link>
            </div>
        </div>
        </>
    );
    
}
export default Header;