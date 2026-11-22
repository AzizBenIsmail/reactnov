import React from 'react'

export default function Menu(props) {
    //logic => js
  return (
    <div>
      <button class="btn-solid theme-primary" type="button" data-bs-toggle="menu" aria-expanded="false">
  Toggle menu
</button>
<div class="menu">
  <a class="menu-item" href="#">{props.menu1}</a>
  <a class="menu-item" href="#">{props.menu2}</a>
  <a class="menu-item" href="#">{props.menu3}</a>
</div>
    </div>
  )
}
