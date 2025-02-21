const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const error = false;
      if (error) {
        reject(new Error("error in login"));
      }
  
      console.log("User logged");
      resolve({ email });
    });
  };
  
  const getUserVideos = (email) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(['video1', 'video2', 'video3']);
      }, 1000);
    })
  }
  
  const getVideosDetails = (video) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({ title: 'titulo do vídeo ' + video });
      }, 2500);
    })
  }
  
  const displayUser = async () => {
    
    try{
        const user = await loginUser("email@gmail.com", "!12345");
        const videos = await getUserVideos(user.email);
        const details = await getVideosDetails(videos[1]);
      
        console.log({ user, videos, details });
    }catch(error) {
      console.log({ error });
    }
  }
  
  displayUser();