import { useRef } from 'react'
import {
  EpubViewer,
  ReactEpubViewer
} from 'react-epub-viewer'
import testEpub from '../Epub/test.epub'

const Epub = () => {
  const viewerRef = useRef(null);
  const nextPage =()=>{
    viewerRef.current.nextPage();
}
const prevPage =()=>{
  viewerRef.current.prevPage();
}
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer 
        url={testEpub}
        ref={viewerRef}
      />
      <button onClick={prevPage}>이전</button>
      <button onClick={nextPage}>다음</button>
    </div>
  );
}

export default Epub