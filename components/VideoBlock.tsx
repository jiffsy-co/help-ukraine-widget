import React from "react";
// import {Video} from '../public/videos/MyMovie.mp4';

const VideoBlock = () => (
    <div className='w-full  rounded-3xl
    '>
        <video controls width="250">
                <source src="../public/MyMovie.mp4"
                        type="video/mp4"/>

        </video>
    </div>
);

export default VideoBlock;