import { useState, useEffect } from "react";
import styles from './Notice.module.css';

export default function Notice() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const notices = [
        "새해맞이 특별 상영 이벤트 안내",
        "최신 개봉작 사전 예매 오픈!",
        "주말 가족 영화 할인 프로모션",
        "명절 연휴 극장 운영시간 변경 공지",
        "영화 관람권 기획상품 출시 안내",
        "시네마 포인트 적립률 변경 안내",
        "감독과의 대화 상영회 초청 이벤트",
        "여름 방학 어린이 영화 특별 상영",
        "고객 감사 영화 할인 쿠폰 발급",
        "주요 상영관 업그레이드 완료 공지"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [notices.length]);

    return (
        <div className={styles.notice_wrapper}>
            <ul
                className={styles.notice_list}
                style={{ top: `-${currentIndex * 1.5}rem` }}
            >
                {notices.map((notice, index) => (
                    <li key={index}><a href={`notice${index + 1}`}>{notice}</a></li>
                ))}
            </ul>
        </div>
    );
}
