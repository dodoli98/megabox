import { useState } from "react";
import { videos } from "../data";
import YouTube from "react-youtube";
import styles from "./Banner.module.css";

export default function Banner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const opts = {
        playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            mute: 1,
        },
    };

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    return (
        <div className={styles.BannerWrapper}>
            <div className={styles.movieInfo}>
                <div>
                    <h2>{videos[currentVideoIndex].title}</h2>
                    <a href={`${videos[currentVideoIndex].title}.detail`}>예매하기</a>
                </div>
            </div>
            <div className={styles.video_wrapper}>
                <YouTube
                    className={styles.youtubevideo}
                    videoId={videos[currentVideoIndex].id}
                    opts={opts}
                    onEnd={handleVideoEnd}
                />
            </div>
        </div>
    );
}
