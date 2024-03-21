import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function App() {
let handleBtn=()=>{
  console.log("hi");
}
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src="pic.png" alt="png" />
            </div>
            <div className="mid">
              <div className="location">
                <h4>location</h4>
                <div className="locationDropDwon">
                  <ul>
                    <li>
                      hello world
                      <div className="widghtGet">
                        <ul>
                          <li>side out menu</li>
                          <li>side out menu</li>
                          <li>side out menu</li>
                        </ul>
                      </div>

                    </li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                    <li>hello world</li>
                  </ul>
                </div>
              </div>
              
              <input type="text" placeholder='search'/>
              <span className='searchIcon'> <CiSearch /></span>
            </div>
            
            <div className="add">
              <div className="langTogle">
                en/bn
              </div>
              <button className='addBtn'>adds here</button>
              <button onClick={handleBtn} className='login'><span><FaUserCircle /></span>login</button>
            </div>

          </nav>
        </div>
      </header>
      <section id="AddComponent">

        <div className="menuwarpper">

          <ul className='cataGoryTxt'>
            
            {/* ==================basavara============ */}
            <li className="catagoryTxtItem">
              <a href="#">বাসা <span>ভাড়া</span></a>
              <div className="subCatagory">
                <ul className="subCatagoryList">
                  <li className="subCatagoryListItem">Lorem, ipsum dolor.</li>
                  <li className="subCatagoryListItem">Lorem, ipsum dolor.</li>
                  <li className="subCatagoryListItem">Lorem, ipsum dolor.</li>
                  <li className="subCatagoryListItem">Lorem, ipsum dolor.</li>
                  <li className="subCatagoryListItem">Lorem, ipsum dolor.</li>
                </ul>
              </div>
            </li>
            {/* ===============hotel vara========== */}
            <li className="catagoryTxtItem"><a href="#">হোটেল  <span>ভাড়া</span> </a></li>

            <li className="catagoryTxtItem"><a href="#">গাড়ি  <span>ভাড়া</span> </a></li>

            <li className="catagoryTxtItem"><a href="#">দোকান <span>ভাড়া</span> </a></li>

            <li className="catagoryTxtItem"><a href="#">ডেকরেশন <span>ভাড়া</span> </a></li>

            <li className="catagoryTxtItem"><a href="#">অন্যান <span>ভাড়া</span> </a></li>
            <li className="catagoryTxtItem"><a href="#">সেবা <span></span> </a></li>
          </ul>

        </div>
       
      </section>
      <section id='sliders'>
        <h3>বাসা ভাড়া</h3>
        <div className="slidersWarrpper cntainer">
          <div className="slides">হোটেল</div>
          <div className="slides">বাসা</div>
          <div className="slides"></div>
          <div className="slides"></div>
        </div>
      </section>

      
    </>
  )
}

export default App
