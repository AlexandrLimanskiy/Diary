import styles from '/src/components/cssModules/Main/Main.module.scss'

export default function Main() {
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className={styles.offer}>
                        <div className="offerContainer">
                        <div className={styles.offerInfo}>
                            <div className={styles.offerTitle}>
                                <p>Open-Source приложение <br /> задуманное для совместной разработки <br /> и улучшения проекта.</p>
                                </div>
                                <div className={styles.offerDescription}>
                                    <p>Diary - приложение, задуманное как дневник, но не ограничивается только таким функционалом. Каждый может привнести свой вклад в разработку этого приложения, перейдя по ссылке на github репозиторий, и предложив свое нововведение. Мейнтор рассмотрит ваш код, и, если он поспособствует улучшению проекта, будет добавлен в главную ветку.</p>
                                </div>
                                <div className={styles.moreInfoButton}>
                                    <p>Узнать больше...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}