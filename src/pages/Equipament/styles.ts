import styled from 'styled-components';


export const Container = styled.div`
        display: flex;
        height: 100%;
        background-color: #E5E5E5;
        flex-direction: column;

    `;


    
export const EquipamentsContent = styled.div`

    margin-left: 340px;
    background-color: #E5E5E5;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;

    table {
        border-radius: 15px;
        width: 100%;
        background-color: #FFFFFF
    }

    tr:nth-child(even){
        border-top: solid 1px #E5E5E5;

        border-bottom: solid 1px #E5E5E5
        }

        th {
            height: 50px;
            vertical-align: middle;
            text-align: center;
        }


    td {
    height: 40px;
    vertical-align: middle;
    text-align: center;
    }


@media screen and (max-width: 800px) {
margin-left: 20px;
}

`;

