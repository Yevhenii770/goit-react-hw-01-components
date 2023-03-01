import styled from "@emotion/styled";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: -5px 6px 8px -2px rgb(200 200 200 / 75%);
`;

export const Title = styled.h2`
    font-size: 1.4rem;
    color: rgb(0, 0, 0);
    display: flex;
    position: absolute;
    top: 40%;
    left: 36%;
`;

export const DivTitle = styled.h2`
    position: relative;
    width: 100%;
    height: 100px;
`;

export const StatList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    width: 100%;
    border-radius: 20px;
    `;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
    `;

export const Label = styled.span`
    color: white;
    filter: drop-shadow(0 0 2px black);
    `;

export const Percentage = styled.span`
    color: white;
    filter: drop-shadow(0 0 2px black);
    `;

