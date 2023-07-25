import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import { useFetchVideoDetail } from "./util/custom_Hooks/useFetchVideoDetail";
import { useFetchAllComments } from "./util/custom_Hooks/useFetchAllComments";
import { useFetchChannelData } from "./util/custom_Hooks/useFetchChannelData";
import { useEffect } from "react";
import ChannelData from "./ChannelData";

const CommentContainer = () => {
  const [searchParams] = useSearchParams();

  const videoDetails = useFetchVideoDetail(searchParams.get("v"));
 

  const comments = useFetchAllComments(searchParams.get("v"));
  

  return comments == null ? (
    "Loading"
  ) : videoDetails == null ? (
    "Loading"
  ) : (
    <div>
      {/* console.log(videoDetails.items[0].snippet)  */}

      <div className="text-xl w-[57rem] font-semibold mb-5 mt-2 pb-6 border-b-2 border-gray-500">
        {videoDetails?.items[0]?.snippet?.title}
      </div>
      <div className="flex border-b-2 w-[57rem] border-gray-500">
      <ChannelData/>
        <div className="flex ml-16">
          <div className="h-7 w-7 m-5 mt-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path>
            </svg>
            <span>{videoDetails?.items[0]?.statistics?.likeCount}</span>
          </div>
          <div className="h-7 w-7 m-5 mt-3   ml-14 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path>
            </svg>
            <span>200</span>
          </div>
          <div className="py-1">
            <svg
              className="w-7 h-7 mt-2 ml-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
            </svg>
            <span className="ml-6">
              {videoDetails?.items[0]?.statistics?.viewCount}
            </span>
          </div>
          <div className="w-7 h-7 ml-14  mt-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.00014 10.0003L4 19.0002L6 19.0002L6.00011 12.0003L12.1719 12.0002L8.22222 15.9499L9.63643 17.3642L16.0004 11.0002L9.63643 4.63623L8.22221 6.05044L12.172 10.0002L4.00014 10.0003ZM15.2506 4.63623L13.8364 6.05044L18.7861 11.0002L13.8364 15.9499L15.2506 17.3642L21.6145 11.0002L15.2506 4.63623Z"></path>
            </svg>
            Share
          </div>
        </div>
      </div>
     
     

      <div className="text-xl mt-5 font-bold ">Comments</div>
      {comments.items.map((comment, index) => {
        return (
          <Comments
            key={index}
            comment={comment?.snippet?.topLevelComment?.snippet}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;
