import React from 'react';
import '../App.css';

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
            {repeatUI()}
        </div>
    )
}

export default StudyLesson;