export const GOOGLE_API_KEY="AIzaSyCf4pe3gB0BtCMQazydVdnbzsEWOtkbOx8"
export const VIDEOS_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_ALL_COMMENTS_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="

export const YOUTUBE_SINGLE_VIDEO_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
// GET https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=WSOFb5Ix2Tc&key=AIzaSyBehR-sSl3dxaxQRiBVhNcWdsbeS8V7FW4
export const YOUTUBE_CHANNEL_DATA_API="https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="
export const YOUTUBE_CATEGORY_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY+"&q="