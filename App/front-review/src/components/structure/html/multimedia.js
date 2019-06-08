import React from 'react';
import frontEnd from '../../common/constDefinitions';
import codeImage from '../../common/assets/videoCode.png';
import DisplayDefinition from './general/displayDef';

function Multimedia(props) {
  return (
    <div className = "document">
    <h1>Multimedia - Audio & Video</h1>
    <hr />

    <div className="html5-introduction">
    <section>
      <article>
        Multimedia on the web is sound, music, videos, movies, and animations.<br/>
        HTML5 multimedia promises an easier future for multimedia by using audio and video tags.<br/>
        Note:<br/>
        Only MP4, WebM, and Ogg video are supported by the HTML5 standard.<br/>
        Only MP3, WAV, and Ogg audio are supported by the HTML5 standard.<br/>
      </article>
    </section>
    </div>

    <hr />

    <div className="example">

      <div className="result center">
        <section>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <div className="example">

      <div className="result">
        <section>
        <video controls={true}>
          <source src="https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4" />
        </video>
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <hr/>

    <div className="displayDefinition">
      <table>
        <tbody>
        <DisplayDefinition data={frontEnd.HTML5.multimedia} />
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default Multimedia;
