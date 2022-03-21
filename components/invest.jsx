import MainButton from "./mainButton";
import Rocket from "./rocket";
import UiSection from "./UiSection";

export default function Invest() {
    const setMedia = () => {
        return <Rocket />
    }

    return (
        <UiSection
            sectionClass="invest"
            tag="Invest"
            buttonTitle="About <br> WAYM <br> Tokens"
            buttonColor="#3AA76D"
            buttonHref="/token"
            isButtonHrefLocal={true}
            title="Support the economics <br> based on intellectual <br> property"
            text="First NFTs based on the <br> original stories. <br> Learn how it works <br> and grow fast with us."
            media={setMedia()}
        >

        </UiSection>
    )
}
