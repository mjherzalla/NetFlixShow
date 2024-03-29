import React from 'react';
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
                        <ShowPervBtn SRC={props.Shows['video-embed']} />
                        <i onClick={() => props.Deselect()} className="far fa-arrow-alt-circle-left GoBackIconMainPage"></i>

                        <p>
                            {props.Shows.description}

                        </p>
                        <EpisodeList episods={props.Shows['episode-list']} />
                    </div>

                    : null}
            </div>



        </div>
    );
};

export default ShowsList;