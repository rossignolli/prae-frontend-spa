import styled from 'styled-components';

    export const Container = styled.div`
        display: flex;
        height: 100%;
        background-color: #E5E5E5;
        flex-direction: column;

    `;


    export const Navbar = styled.div`

    img {
        width: 192px;
    }


    display: flex;
    flex-direction: column;
    width: 320px;
    background-color: #FFFFFF;


    a {
        text-decoration: none;
        text-decoration-style: none;
        color: #717478;
    }

`;


export const Userdiv = styled.div`

background-color: red;

`;




export const DashBoardContent = styled.div`
    margin-left: 320px;
    background-color: red;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;




    @media screen and (max-width: 800px) {


    margin-left: 0px;

}

`;







export const HeadersContents = styled.div`
        display: flex;
        margin-left: 320px;
        height: 100%;
        margin-top: 20px;
        background-color: #E5E5E5;
        padding: 20px;
        align-items: center;
        
        div:first-of-type {
            display: flex;
            align-items: center;
            flex: 1;
            h3 {
                
                color: black;
                font-style: normal;
                font-weight: bold;
                font-size: 22px;
                margin-left: 20px;
            }

        }

        
            a {
                text-decoration: none;
                position: relative;
                display: inline-block;
                border-radius: 2px;
                margin-right: 35px;

                    span {
                        display: none;
                        position: absolute;
                        top: -16px;
                        right: -14px;
                        font-size: 14px;
                        font-weight: bold;
                        padding: 7px 10px;
                        border-radius: 50%;
                        background: #EA5455;
                        color: white;
                    }



                    @media screen and (max-width: 800px) {
                        margin-left: 10px;
                        margin-right: 5px;


                        }

                        @media screen and (max-width: 300px) {
                        
                        display: none;



                        }

                }



                
            @media screen and (max-width: 800px) {


                margin-left: 0px;

            }
`;






