import React, { useEffect, useState } from 'react';
import Video from './Video';
import db from './firebase';
import './App.css';

function App() {
  const [ videos, setVideos ] = useState([]);

  const fetchVideos = async () => {
    const response = db.collection('videos');
    
    const data = await response.get();
    data.docs.forEach(item=> {
      setVideos(prev => [...prev,item.data()])
     })
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(({ url,
            channel,
            description,
            song,
            likes,
            messages,
            shares }) => (
              <Video 
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            ))
        }
      </div>
    </div>
  );
}

export default App;
