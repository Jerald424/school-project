import React from "react";

export default function FamilyMobile({ data }) {
  console.log(data, "the mobile view data");
  return (
    <div>
      <div className='seperate-card'>
        <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' />
        <div className='center-card-family'></div>
      </div>
    </div>
  );
}
