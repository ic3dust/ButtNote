import React, {useState, useEffect} from 'react'
import "../style/Feed.css"
import StoryReel from "./StoryReel"
import Poster from "./Poster"
import Post from "./Post"
import db from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Feed = () => {

  const [posts, setPosts] = useState([]);

useEffect(() => {
  const q = query(collection(db, "posts"), orderBy("timestamp","desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="feed">
      <StoryReel />
      <Poster />

      {posts.map(post=>{
        return(
          <Post
          key={post.data.id}
          profilePicture={post.data.profilePicture}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          />

        )
      })}
    </div>
  )
}

export default Feed

