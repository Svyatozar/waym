import MainButton from './mainButton'
import { useRouter } from "next/router"

export default function Start() {
    const quests = [
        { id: 1, title: 'The Wave', description: 'You have achieved everything you dreamed of, but your world is ...', imgSrc: './wave.png', url: 'https://web.waym.app/quest/279' },
        { id: 2, title: 'The Geotorox', description: 'Become a special agent in the center of a medieval city ...', imgSrc: './geotorex_small.jpg', url: 'https://web.waym.app/quest/306' },
        { id: 3, title: 'In the face of danger', description: 'You found out about a catastrophe bound to happen in a year\'s time. What ...', imgSrc: './pandemic.png', url: 'https://web.waym.app/quest/268' },
        { id: 4, title: 'A silent killer', description: 'Something dangerous makes people abandon their homes and run away ...', imgSrc: './scilent_killer_small.jpg', url: 'https://web.waym.app/quest/303' },
    ]
    const renderQuestCard = () => {
        const { basePath } = useRouter()

        return quests.map(v => {
            return (
                <li key={v.id} onClick={() => {
                    window.open(v.url, '_blank').focus();
                }}>
                    <div className="start__image" >
                        <img src={`${basePath}/${v.imgSrc}`} width={230} height={132} alt={v.title} />
                    </div>
                    <div className="start__text-border">
                        <div className="start__text">
                            <h4>{v.title}</h4>
                            <p>{v.description}</p>
                        </div>
                    </div>


                </li>
            )
        })
    }

    return (
        <section id="start" className="start section ui-section">
            <div className="container">
                <div>
                    <div className="ui-section__tag">Where to start?</div>
                    <h3>Quests</h3>
                </div>

                <ul>
                    {renderQuestCard()}
                </ul>
                <MainButton title="See <br> more" stroke="#00D0FF" href="https://web.waym.app/quests" />
            </div>


        </section>
    )
}