import React from "react";
import Main from './Main';
import Main2 from './Main2'

const Header = () =>(
    <header>
    <div class="top_menu">
  <ul>
      <li><a href="/Main2">메인으로</a></li>
      <li> |</li>
      <li><a href="/Main">정책 페이지</a></li>   
  </ul>
</div>
</header>
)

export default Header;