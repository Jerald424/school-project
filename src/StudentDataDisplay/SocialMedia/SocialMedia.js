import React from "react";

export default function SocialMedia({ data }) {
  console.log(data.social_media_list, "the social media data list");
  if (data.social_media_list.length === 0) {
    return <p className='w3-animate-opacity'>No data to display</p>;
  }
  const userData = data.social_media_list;
  return (
    <div>
      <div className=' w3-animate-opacity social-media-total'>
        <p className='social-media-heading'>User Name</p>
        {userData?.map((res) => {
          return <p className='social-media-data'>{res?.user_name}</p>;
        })}
      </div>
    </div>
  );
}
