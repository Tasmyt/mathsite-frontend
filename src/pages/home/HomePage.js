import Schedule from "./Schedule";
import { HomeBackground, HomeH1, HomeH2, HomeP, HomeTitleContainer} from "./homepage.styled";

export default function HomePage() { 
  return (
  <>
    <HomeBackground>
      <HomeTitleContainer>
        <HomeH1>Just Science</HomeH1>
        <HomeH2>Навчальна платформа з математики та інформатики</HomeH2>
        <HomeP>Розвивайся та йди вперед разом з JustScience!</HomeP>
      </HomeTitleContainer>        
    </HomeBackground>
    <section>
        <Schedule/>
    </section>
  </>
    );
  }