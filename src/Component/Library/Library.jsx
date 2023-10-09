import React,{ useEffect, useState } from 'react';
import './library.css'
import { Link } from 'react-router-dom';
import Prayers from './Prayers';


function Library() {
  // const api_url = "";
  // const [Library, setLibrary] = useState([]);

  // useEffect(() =>{
  //     fetch(api_url)
  //     .then((response)=> response.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="about__Info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">الجهاد</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">فضل العلم</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">صوم رمضان</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>
      
        {/* {Library.map((library)=>{
          return (
            <div key={library.id}>
              <Prayers Prayers={library} />
            </div>
          );
        })} */}
       <div className="about__box">
              <i class='bx bx-award about__icon'></i>
              <h3 className="about__title"><Link to={'/Prayers'} className='Prayers'>الصلاة</Link></h3>
              <span className="about__subtitle">75 حديثا شريفا</span>
            </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">صلاة الليل</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">الاخلاق</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">الزكاة</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">الخمس</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">التقية</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">التوحيد</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">العلماء</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">الامامة</h3>
        <span className="about__subtitle">75 حديثا شريفا</span>
      </div>

    </div>
  );
}

export default Library;