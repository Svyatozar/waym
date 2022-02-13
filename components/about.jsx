import Puzzle from "./puzzle"
import Section from "./Section"

export default function About() {
    function setMedia() {
        return <Puzzle />
    }

    return (
        <Section
            sectionClass="about"
            buttonTitle="Learn <br> more"
            buttonColor="#ED6E33"
            buttonHref="https://https://whitepaper.waym.app/"
            title="About <br> WayMaker"
            text="<p>The continuously developing chain <br> of interactive stories united <br>  by the central plotline.</p>
                <p>Community members create their <br> own content and <br> vote <br> for the best <br>  WAYM <br> quests, determining <br> the future of the metaverse.</p>"
            media={setMedia()}
        >
        </Section>
    )
}
