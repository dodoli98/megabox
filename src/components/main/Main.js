import { boxOfficecardsData, eventsData } from './data'; // data.js에서 데이터 가져오기
import BoxOfficeCard from './BoxOffice/BoxOfficeCard';
import EventCard from './EventCard/EventCard';
import styles from './Main.module.css'
import Banner from './Banner/Banner';
import Notice from './Notice/Notice';

export default function Main() {

    return (
        <main>
            <section className={styles.banner_section}>
                <Banner />
            </section>


            <section className={styles.boxoffice_section}>
                <div className={styles.subTitleWrapper}>
                    <h2>박스오피스</h2>
                    <p>
                        <a href='#boxoffice'>더 보기 +</a>
                    </p>

                </div>
                <div className={styles.BoxOfficeCardWrapper}>
                    {boxOfficecardsData.map((card, index) => (
                        <BoxOfficeCard
                            key={index}
                            title={card.title}
                            image={card.image}
                        />
                    ))}
                </div>
            </section>


            <section>
                <div className={styles.subTitleWrapper}>
                    <h2>이벤트</h2>
                    <p>
                        <a href="#event">더 보기 +</a>
                    </p>
                </div>

                <div className={styles.eventCardWrapper}>
                    {eventsData.map((event, index) => (
                        <EventCard key={index} title={event.title} image={event.image} />
                    ))}
                </div>

            </section>

            <section className={styles.notice_section}>
                <div className={styles.subTitleWrapper}>
                    <h2>이벤트</h2>
                    <p>
                        <a href="#event">더 보기 +</a>
                    </p>
                </div>
                <Notice />
            </section>

        </main >
    );
}

