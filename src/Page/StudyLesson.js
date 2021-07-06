import React, { Component } from 'react';
import '../App.css';

import ReactPlayer from 'react-player'
import videoFilePath from '../videos/video1.mp4'



function repeatUI() {
    var forArray = [];
    for (let i = 1; i < 10; i++) {
        forArray.push(
        <div className = "Flex">
          <div>강의{i}</div>
          <button className="btn">강의 듣기</button>
          
        </div>
        );
    }
    return forArray;
  }

const StudyLesson = () => {
    return(
        <div>
            <h3>유튜브 영상 스트리밍</h3>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=hJxoXR7AOr4' playing controls/>
            <hr></hr>
            <h3>유튜브 영상 플레이어</h3>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=ERGth50aA-M' playing controls/>
            <hr></hr>
            <h3>src 내에 저장 동영상 불러오기</h3>
            <ReactPlayer url={videoFilePath} width="600px" height="300px" controls={true} />
            <hr></hr>
            {repeatUI()}
        </div>
    )
}

export default StudyLesson;