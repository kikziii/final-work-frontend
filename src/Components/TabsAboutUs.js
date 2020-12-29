import TabContentAbout from './TabContentAbout';
import TabContentJoin from './TabContentJoin';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'


function TabsAboutUs() {
    return (
        <div className="container mt-5 mb-5">
            <Tabs defaultActiveKey="about">
                <Tab eventKey="about" title="About Fungilitous">
                    <TabContentAbout />
                </Tab>
                <Tab eventKey="join" title="Join Community">
                    <TabContentJoin />
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsAboutUs;