import { ContentWrapper, LoginBackground, LoginConteiner, LoginH1, LoginH2, LoginH3, LoginSending, LpginStyledIcon } from "./login.styled";
import { FiLogIn } from "react-icons/fi";

export default function Login() { 
    return (
        <LoginBackground>
            <ContentWrapper>
                <LoginH1>Вітаю </LoginH1> 
                <LoginConteiner>                
                    <LoginH3>Цей контент можуть використовувати студенти 1 та 2 курсів Дніпропетровського фахового мистецько-художнього коледжу культури</LoginH3>
                    <LoginH2>Якщо ви є студентом відповідних курсів зайдіть на сайт з учбового акаунту</LoginH2> 
                
                    <LoginSending to="https://math-backend.onrender.com/api/auth/google">
                        {' '}
                        Вхід
                        <LpginStyledIcon>
                        <FiLogIn />
                        </LpginStyledIcon>
                    </LoginSending>
                <LoginH3>За технічною підтримкою звертайтеся до викладача</LoginH3>
                </LoginConteiner>
            </ContentWrapper>
        </LoginBackground>
    );
}
  