import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pic from '../../imgs/showsImgs/stanger-things_raw.png'
import 'react-tabs/style/react-tabs.css';

const EpisodeList = (episodslist) => {
    console.log(episodslist.episods)
    const seasons1=[];
    const seasons2=[];
    const listItems = episodslist.episods.map((episod) =>
        {episod.season==1?
        seasons1.push(<div className="episodInfo"><img src={pic}/> <i className="fas fa-play"></i> {episod.name} <i className="far fa-star rating">{episod.rating} </i></div>):
        seasons2.push(<div className="episodInfo"><img src={pic}/> <i className="fas fa-play"></i> {episod.name} <i className="far fa-star rating">{episod.rating} </i></div>)
         
        }
    );
    return (
        <div>

            <Tabs>
                <TabList>
                    <Tab>Season 1</Tab>
                    <Tab>Season 2</Tab>
                </TabList>

                <TabPanel>
                  {seasons1}
                </TabPanel>
                <TabPanel>
                    {seasons2} 
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default EpisodeList;