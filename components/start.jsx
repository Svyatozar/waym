import MainButton from './mainButton'
import { useRouter } from "next/router"

export default function Start() {
    const quests = [
        { id: 1, title: 'The Wave', description: 'You have achieved everything you dreamed of, but your world is crumbling over a catastrophe...', imgSrc: './wave.png' },
        { id: 2, title: 'President simulator', description: 'What kind of leader will you become?...', imgSrc: './president.png' },
        { id: 3, title: 'In the face of danger', description: 'You found out about a catastrophe bound to happen in a year\'s time. What would you do...', imgSrc: './pandemic.png' },
        { id: 4, title: 'First contact', description: 'What is reality? Seems like everyone has their own reality, but...', imgSrc: './first_contact.png' },
    ]
    const renderQuestCard = () => {
        const { basePath } = useRouter()

        return quests.map(v => {
            return (
                <li key={v.id}>
                    <div className="start__image">
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
                <MainButton title="See <br> more" stroke="#00D0FF" href="#" />
            </div>


        </section>
    )
}