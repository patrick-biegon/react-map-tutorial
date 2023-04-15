import React, { useState } from "react";
import MapboxComponent from "../MapComponents/MapboxComponent.js";
import TabNavItem from "../TabNavigationUtil/TabNavItem.js";
import TabContent from "../TabNavigationUtil/TabContent.js";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Mapbox" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Leaflet" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="OpenLayers" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="ArcGIS" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Carto" id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
            <MapboxComponent/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <p>Tab 4 works!</p>
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <p>Tab 5 works!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;