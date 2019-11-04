import React from 'react';
import ReactPlayer from 'react-player'
import ShowPervBtn from './ShowPervModal'
import EpisodeList from './EpisodeList'
const ShowsList = (props) => {

    console.log(props.Shows['video-embed'])
    return (
        <div className="Showscontainer">
            <div className={props.classState} onClick={() => props.xpand()}>

                <img src={props.Shows.gallery[1].src} />
                {props.classState == "expandedshowCard" ?

                    <div>
 
                        <i onClick={() => props.Deselect()} className="far fa-arrow-alt-circle-left GoBackIconMainPage"></i>

                        <p>
                            {props.Shows.description}
                            <ShowPervBtn SRC={props.Shows['video-embed']} />
                        </p>
                        <EpisodeList episods={props.Shows['episode-list']} />
                    </div>

                    : null}
            </div>



        </div>
    );
};

export default ShowsList;