import React from "react";
import logos from "./img/logos.png";
import './Main2.css'


const Main2 = () => (

<div class="main"> 
    <div class="text">
<div class="lnb">

 <div id="button" class="button">
    <a id="button" class="large" id="Btn">+</a>
  </div> 
  <div class="chatbot">
    <ul class="card">
      <iframe class="real_chatbot" src="https://stage.coginsight.net/service/#/e1209138-2a2b-4e0d-9d38-a6eafa3dccb7"></iframe>
    </ul>
  </div>

        </div>
        <img class="logos"src={logos} alt="logos"/>
        <br/>
        본 활동은  프로젝트 활동으로, 비공식 홈페이지 입니다. <br/>온라인 청년센터(정부)와 관련없습니다.
</div>
</div>

)

export default Main2;