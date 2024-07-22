import { useAuth } from "hooks";
import { PrivateBackground, PrivateContentWrapper, PrivateH1, PrivateH2, PrivateWelcom, PrivateWrapper } from "./private.styled";
import EstimateMath from "components/Estimate/EstimateMath";
import EstimateInf from "components/Estimate/EstimateInf";
import ResultMath from "components/Estimate/ResultMath";
import ResultInf from "components/Estimate/ResultInf";


export default function Private() { 
    const { user } = useAuth();
    // console.log( user.rating );
    return (
    <>
        <PrivateBackground> 
            <PrivateWelcom>
                <PrivateH1>Вітаю, {user.name}</PrivateH1> 
            </PrivateWelcom>           
            <PrivateWrapper>                   
                <PrivateContentWrapper>
                    <PrivateH2>Оцінювання з математики</PrivateH2>                        
                    <EstimateMath/> 
                    <ResultMath/>                       
                </PrivateContentWrapper> 
                
                <PrivateContentWrapper>
                    <PrivateH2>Оцінювання з інформатики</PrivateH2>
                    <EstimateInf/>
                    <ResultInf/>
                </PrivateContentWrapper>
            </PrivateWrapper>    
        </PrivateBackground>
            
    </>
       
    );
}
  