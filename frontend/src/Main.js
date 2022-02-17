import React from "react";
import headphone from "./img/headphone.png"

const Main = () => {
    const [visible, setVisible] = React.useState(false);
    return(
<div class="main">
<iframe class="mains" src="https://www.youthcenter.go.kr/youngPlcyUnif/youngPlcyUnifList.do"/>
<div class="lnb">

    <button class="button" onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}<img class="headphone" src={headphone} alt="headphone"/></button>
      <div style={{display: visible ? 'block' : 'none'}}><iframe class="real_chatbot" src="https://stage.coginsight.net/service/#/e1209138-2a2b-4e0d-9d38-a6eafa3dccb7"></iframe></div>

</div>
</div>
);
    }

export default Main;