import React from 'react'
import '../style/Post.css'
import { Avatar } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import FlagIcon from '@mui/icons-material/Flag';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';

import {colors} from "../colors"

const Post = ({profilePicture, image, username, timestamp, message}) => {
  return (
    <div className="Post">
        <div className="Post_top">
              <div className="Post_info">
                  <Avatar src={profilePicture} className="Post_avatar" />
                   <h3> {username}</h3>
                  <p>Date: {timestamp}</p>
              </div>
        </div>
          <div className="Post_bot">
              <p>{message}</p>
          </div>
          <div className="Post_image">
              <img src={image} alt=""/>
          </div>
          <div className="Post_options">
              <div className="Post_option">
                  <ThumbUpIcon style={{color: colors.blue}} />
                  <p>Like</p>
              </div>
              <div className="Post_option">
                  <SubdirectoryArrowLeftIcon style={{color: "grey"}} />
                  <p>Repost</p>
              </div>
              <div className="Post_option">
                  <ModeCommentIcon style={{color: "grey"}} />
                  <p>Comment</p>
              </div>
              <div className="Post_option">
                  <ShareIcon style={{color: "grey"}} />
                  <p>Share</p>
              </div>
              <div className="Post_option">
                  <BookmarkIcon style={{color: colors.yellow}} />
                  <p>Save</p>
              </div>
              <div className="Post_option">
                  <FlagIcon style={{color: colors.pink}}/>
                  <p>Report</p>
              </div>
          </div>
    </div>
  )
}

export default Post
