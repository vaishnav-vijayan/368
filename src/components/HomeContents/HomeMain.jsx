import styled from "styled-components";
import { CreateSpace } from "./CreateSpace";
import { QandA } from "./QandA";
import { SpacesTofollow } from "./SpacesTofollow";

export const HomeMain = () => {
    return (
        <Home>
            <StyledHome>
               
                <div className="QandA">
                    <QandA />
                </div>
               
            </StyledHome>
        </Home>
    );
};

const StyledHome = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    width: 80%;
    margin: auto;
    background-color: #613670;
    .space {
        position: fixed;
        top: 20px;
        height: fit-content;
    }
    .QandA {
        margin-top: 1rem;
    }

    .follow {
        height: fit-content;
    }
`;

const Home = styled.div`
    background-color: #432f70;
`;
