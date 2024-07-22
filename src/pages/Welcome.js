import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { logIn } from 'customRedux/auth/operations';
import { useAuth } from 'hooks';
import { BiHappyBeaming } from "react-icons/bi";
import { WelcomeBackground, WelcomeContentWrapper, WelcomeH1 } from './welcome.styled';

export default function Welcome() {        

const dispatch = useDispatch();   
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const accessTokenParam = searchParams.get('accessToken');
        const userEmailParam = searchParams.get('email');
                
        if (accessTokenParam && userEmailParam) {
            dispatch(logIn({
                accessToken: accessTokenParam,
                email: userEmailParam,
            }));
        }
    }, [dispatch]);

    const { user } = useAuth();
    return (
        <WelcomeBackground>
            <WelcomeContentWrapper>
                <WelcomeH1>Вітаю, {user.name} </WelcomeH1>
                <h3>Приємного навчання <BiHappyBeaming/> </h3>
                
            </WelcomeContentWrapper>
        </WelcomeBackground>        
    );
}