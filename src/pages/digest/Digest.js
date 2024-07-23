import Textbooks from "components/Textbooks/Textbooks";
import { CriteriaContainer, CriteriaFrame, DigestButton, DigestDiv, DigestH1, DigestH2, SectionDigest } from "./Digest.styled";

export default function Digest() {
    const openLink = () => {
    window.open('https://testportal.gov.ua/', '_blank', 'noopener,noreferrer');
  };
    return (
    <>
        <SectionDigest>
            <DigestH1>Довідник</DigestH1>
        </SectionDigest>
        <SectionDigest>
            <DigestH2>Підручники</DigestH2>
            <Textbooks/>
        </SectionDigest>
        <SectionDigest>
            <DigestH2>Критерії оцінювання</DigestH2>
            <CriteriaContainer> 
            <CriteriaFrame  src='../../criteria.html' title="Критерії оцінювання" allowFullScreen/>            
            </CriteriaContainer>
        </SectionDigest>
        <SectionDigest>
            <DigestH2>ДПА</DigestH2>
            <CriteriaContainer> 
                    <CriteriaFrame src='https://testportal.gov.ua/' title="Офіційний сайт Українського центру оцінювання якості освіти" allowFullScreen />
                    <DigestDiv>
                        <DigestButton onClick={openLink}> Розгорнути  </DigestButton>
                        {/* <Sending href='https://testportal.gov.ua/' target="_blank" rel="noopener noreferrer"> Розгорнути </Sending> */}
                    </DigestDiv>
            </CriteriaContainer>
        </SectionDigest>
        <SectionDigest>
            <DigestH2>Корисні посилання</DigestH2>
            <CriteriaContainer>              
                <CriteriaFrame  src='../../usefulLinks.html' title="Корисні посилання" allowFullScreen/>              
            </CriteriaContainer>
        </SectionDigest>
    </>
    );
}
  