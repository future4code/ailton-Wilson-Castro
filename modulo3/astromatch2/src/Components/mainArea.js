import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProfileCard from './profileCard';
import SmallProfileCard from './smallProfilesCards';
import Matchs from './Images/matchs.svg'
import Voltar from './Images/voltar.svg'
import Like from './Images/heart.svg'
import Dislike from './Images/button-close.svg'

const MainAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #d0d0d0;
    font-family: sans-serif;
    font-weight: bolder;
    button {
        margin-top: 5px;
        padding: 2px;
        font-family: sans-serif;
        font-weight: 600;
    }
`;

const MainAreaWindow = styled.div`
    display: flex;
    background-color: rgb(40,56,137,0.3);
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 30vw;
    border: 1px solid transparent;
    border-radius: 5px;
`;

const MainAreaHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid lightgrey;
`;

const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 15%;
    border-top: 1px solid white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const AcceptButton = styled.img`
    height: 65%;
    width: auto;
    cursor: pointer;
    :hover{
        background-color: red;
    }
`;

const ProfileHeader = styled.img`
    cursor: pointer;
    :hover{
        background-color: red;
    }
`;

const ProfileHeaderSpan1 = styled.span`
    color: white;
    font-weight: 600;
`;

const Button = styled.button`
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
`


const MainArea = () => {
    const [profiles, setProfiles] = useState([]);
    const [id, setId] = useState('');
    const [chosenPersonId, setChosenPersonId] = useState('');
    const [notChovenPersonId, setNotChosenPersonId] = useState('');
    const [actualScreen, setActualScreen] = useState('MainArea');
    const [match, setMatch] = useState('')

    useEffect(() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wilson-castro/person`)
        .then((profile) => {
            setProfiles(profile.data.profile)
            setId(profile.data.profile.id)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [chosenPersonId, notChovenPersonId]);

    const setChosenId = () => {
        setChosenPersonId(id)
        if(match === true) {
            alert(`Você deu um Match! Envie uma mensagem para ele(a)`)
        }
    }

    const setNotChosenId = () => {
        setNotChosenPersonId(id)
    }

    useEffect(() => {
        const body = {
            id: chosenPersonId,
            choice: true
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wilson-castro/choose-person`, body, {
            headers: {
                ContentType: 'application/json'
            }
        }).then((profile) => {
            setMatch(profile.data.isMatch)
        }).catch((error) =>{
            console.log('Erro:', error)
        })
    }, [chosenPersonId])

    const changeScreen = () => {
        if(actualScreen === 'MainArea') {
            setActualScreen('MatchArea')
        } else if (actualScreen === 'MatchArea') {
            setActualScreen('MainArea')
        }
    }

    const clearMatches = () => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wilson-castro/clear`, {
            headers: {
                ContentType: 'application/json'
            }
        }).then((profile) => {
            setNotChosenPersonId(profile.data)
            alert('Matches deletados');
            window.location.reload();
        }).catch((error) => {
            console.log(error)
        })
    }

    const actualScreenDisplay = () => {
        switch (actualScreen) {
            case 'MainArea':
                return (
                    <MainAreaWindow>
                        <MainAreaHeader>
                            <ProfileHeader src={Voltar} 
                            onClick={changeScreen}
                            />
                            <h2><ProfileHeaderSpan1>astromatch</ProfileHeaderSpan1></h2>
                            <ProfileHeader src={Matchs} 
                            onClick={changeScreen}
                            />
                        </MainAreaHeader>
                        <ProfileCard 
                        profiles={profiles} 
                        />
                        <ButtonArea>
                            <AcceptButton src={Dislike} 
                            onClick={setNotChosenId}
                            />
                            <AcceptButton src={Like} 
                            onClick={setChosenId}
                            />
                        </ButtonArea>
                    </MainAreaWindow>
                )
            case 'MatchArea':
                return (
                    <MainAreaWindow>
                        <MainAreaHeader>
                            <ProfileHeader src={Voltar} 
                            onClick={changeScreen}
                            />
                            <h2><ProfileHeaderSpan1>astromatch</ProfileHeaderSpan1></h2>
                            <ProfileHeader src={Matchs} 
                            onClick={changeScreen}
                            />
                        </MainAreaHeader>
                        <SmallProfileCard />
                    </MainAreaWindow>
                )
            default:
                return (
                    <MainAreaWindow>
                    <MainAreaHeader>
                        <ProfileHeader src={Voltar} />
                        <h2>astromatch</h2>
                        <ProfileHeader src={Matchs} />
                    </MainAreaHeader>
                    <ProfileCard 
                    profiles={profiles} 
                    />
                    <ButtonArea>
                        <AcceptButton src={Dislike} 
                        onClick={setNotChosenId}
                        />
                        <AcceptButton src={Like} 
                        onClick={setChosenId}
                        />
                    </ButtonArea>
                </MainAreaWindow>
                )
        }
    }

return (
    <MainAreaContainer>
        <MainAreaWindow>
            {actualScreenDisplay()}
        </MainAreaWindow>
        <Button onClick={clearMatches}>Limpar histórico de matches</Button>
    </MainAreaContainer>
);
}

export default MainArea; 