import React from 'react';
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import PhotoCardSkeleton from './components/PhotoCardSkeleton';
import Topbar from './components/Topbar';
import './css/app.css';

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [likedImages, setLikedImages] = React.useState([]);

  // Gets images by calling back-end route.
  const getImages = async () => {
    setLoading(true);
    const response = await axios.get('/api/images/apollo');
    if (response.status !== 200) {
      console.log(response.data);
      return;
    }
    setData(response.data.collection.items);
    setLoading(false);
  };

  // Likes image by id.
  const likeImage = (imageId) => {
    setLikedImages([...likedImages, imageId]);
  };

  // Unlikes image by id.
  const unlikeImage = (imageId) => {
    const arr = [...likedImages];
    const index = arr.findIndex(i => i === imageId);
    arr.splice(index, 1);
    setLikedImages(arr);
  };

  // Toggle image state by id.
  const toggleLikedState = (imageId) => {
    if (likedImages.includes(imageId)) {
      unlikeImage(imageId);
    } else {
      likeImage(imageId);
    }
  };

  // Get images when application loads.
  React.useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="content">
        <div className="gallery">
          { loading && <PhotoCardSkeleton /> }
          { data && !loading && data.map(d => (
            <PhotoCard
              imageUrl={d.links[0].href}
              key={d.data[0].nasa_id}
              dateCaptured={d.data[0].date_created}
              title={d.data[0].title}
              liked={likedImages.includes(d.data[0].nasa_id)}
              toggleAction={() => toggleLikedState(d.data[0].nasa_id)}
            />
          )) }
        </div>
      </div>
    </div>
  );
}
