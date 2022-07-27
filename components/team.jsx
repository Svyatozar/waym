import { useRouter } from "next/router"

export default function Team() {
    const team = [
        { id: 1, name: 'Svyatozar Minin', job: 'CEO', description: '8 years of experience in programming and PM', imgSrc: './Minin.jpg', greenImg: './Minin-green.jpg', link: 'https://t.me/svyatozar' },
        { id: 2, name: 'Vitaly Vylgin', job: 'CTO', description: '10 years of experience in programming', imgSrc: './Vylgin.jpg', greenImg: './Vylgin-green.jpg', link: 'https://t.me/vylgin' },
        { id: 3, name: 'Olesya Aprelskih', job: 'Main script writer', description: 'Author of the game metaverse concept and the central plot line', imgSrc: './olesya.jpg', greenImg: './olesya_green.png', link: 'https://t.me/oaprelskikh' },
        { id: 4, name: 'Egor Vaganow', job: 'Product Owner', description: '7 years of product management and 2 years of game design', imgSrc: './egor.jpg', greenImg: './egor_green.png', link: 'https://t.me/Egor_404' },
    ]
    const renderTeam = () => {
        const { basePath } = useRouter()

        return team.map(v => {
            return (
                <li key={v.id}>
                    <a href={v.link} target="_blank">
                        <div className="team__img">
                            <img src= {`${basePath}/${v.greenImg}`} alt={v.name} />
                            <img src={`${basePath}/${v.imgSrc}`} alt={v.name} />
                        </div>
                        <h4>{v.name}</h4>
                        <p className='ui-section__text'>{v.job}</p>
                        <p className='ui-section__text' dangerouslySetInnerHTML={{ __html: v.description }}></p>
                    </a>
                </li>
            )
        })

    }
    return (
        <section className="team section ui-section">
            <div className="container">
                <h3>Our team</h3>
                <ul>
                    {renderTeam()}
                </ul>
            </div>
        </section>
    )
}