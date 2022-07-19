import React, { lazy, Suspense } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FamilyMobile from "./Family/FamilyMobile";
import SocialMedia from "./SocialMedia/SocialMedia";
const FamilyPage = lazy(() => import("./Family/Family"));

export default function TabsForStudentData({
  doorDetail,
  place,
  street,
  city,
  taluk,
  district,
  state,
  pincode,
  country,
  data,
}) {
  return (
    <div className='tab-total '>
      <Tabs>
        <TabList>
          <Tab>Adress</Tab>
          <Tab>Family</Tab>
          <Tab>Social Media</Tab>
        </TabList>
        <TabPanel>
          <div className='student-data-tabs w3-animate-opacity'>
            <div className='table-first-key-value'>
              <div className='table-first-key'>
                <p>Door Detail</p>
                <p>Street</p>
                <p>Place</p>
                <p>City</p>
                <p>Taluk</p>
              </div>
              <div className='table-first-value'>
                <p>{doorDetail || "Null"}</p>
                <p>{street}</p>
                <p>{place}</p>
                <p>{city}</p>
                <p>{taluk}</p>
              </div>
            </div>
            <div className='table-second-key-value'>
              <div className='table-second-key'>
                <p>District</p>
                <p>State</p>
                <p>Pincode</p>
                <p>Country</p>
              </div>
              <div className='table-second-value'>
                <p>{district}</p>
                <p>{state}</p>
                <p>{pincode}</p>
                <p>{country}</p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <Suspense fallback={<p>Is Loading</p>}>
            <div className='d-none d-md-block'>
              <FamilyPage data={data} />
            </div>
            <div className='d-block d-md-none'>
              <FamilyMobile data={data} />
            </div>
          </Suspense>
        </TabPanel>
        <TabPanel>
          <SocialMedia data={data} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
