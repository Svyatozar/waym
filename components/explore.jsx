import UiSection from "./UiSection";
import UiVideo from "./uiVideo";

export default function Explore() {
  const getChildrenOutOfContainer = () => {
    return <div className="ui-section__bg">
      <UiVideo 
        horizontal="https://ik.imagekit.io/9uamvjevwkkw/hyperreality_land.m4v"
        vertical="https://ik.imagekit.io/9uamvjevwkkw/hyperreality_portrait.mp4"
       />
    </div>

  }

  return (
    <UiSection
      sectionClass="explore"
      tag="Explore"
      buttonTitle="Start exploring"
      mobileButtonTitle="Start"
      buttonColor="#00D0FF"
      buttonHref="https://web.waym.app/quest/279"
      title="Use your imagination to lose yourself in an infinite variety of text quests"
      text="Become the main character of the WAYM interactive story and make decisions to change the plot."
      childrenOutOfContainer={getChildrenOutOfContainer()}
    >

    </UiSection>
  )
}
