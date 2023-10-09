import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
function Home() {
  // const api_url = ''
  // const [home, setHome] = useState([])

  // useEffect(()=>{
  //   fetch()
  //   .then((response)=>response.json())
  //   .then((data)=>console.log(data))
  // },[])
  return (
    
    <section className='container_hom'>
          <div className='left_hom'> 
              <h2 className='title_hom'>الصراط</h2>
              <p className='hom_desc'>شبكة اسلامية تعنى بنشر حديث اهل البيت <br/>
                (صلوات الله وسلامه عليهم اجمعين)
              </p>
              <button className='btn_hom'><Link to={'/hadith'} className='hadith'>تصفح اخر الاحاديث المرفوعة</Link></button>
          </div>
          
      
      
          <div className='rig_home'>
            <div className='tit_rig'>
              <h2 
               >روي عن رسول  الله(صلى الله عليه وآله)انه قال 
              </h2>
            </div>
              <p className='tex_rig'>
              من حفظ على أمتي أربعين حديثا ينتفعون بها في أمر دينهم، بعثه الله يوم القيامة فقيها عالما
              </p>
              <div className='Sour_rig'><p>ميزان الحكمة - ج1</p></div>
          </div>
    </section>
    
  );
}

export default Home;
