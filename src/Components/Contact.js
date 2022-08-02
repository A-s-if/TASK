import React from 'react';
import style from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <Container>
            <NavDiv style={{
                backgroundImage:`url('/contact/images.jfif')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',


            }}>
            <Navigation>

                <LeftNav><i>Pesto <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                <MiddleNav>
                <Link to='/home'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/typography'>TYPOGRAPHY</Link>
                <Link to='/contacts'>CONTACTS</Link>
                <Link to='/task2'>TASK2</Link>
                <Link to='task3'>TASK3</Link>
                </MiddleNav>

                <RightNav>
                    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
                </RightNav>

            </Navigation>
            </NavDiv>

            <SecoundDiv>
                <SecoundSubDiv>
                    <div><h3>1-800-123-1234</h3>
                    <p>
                        You can call us anytime
                    </p>
                    </div>
                    <div>
                        <h3>
                            51 Francis Street, San <br />
                            Diego, CA 91702 United <br />
                            States
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Info@demolink.org
                        </h3>
                        <p>
                            Feel free to email us your question
                        </p>
                    </div>
                </SecoundSubDiv>
            </SecoundDiv>

            <ThirdDiv style={{
                backgroundImage:`url('/contact/googl_ED.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',


            }}>

            </ThirdDiv>

            <SignInDiv>
                <h1>Get in Touch</h1>

                <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic"  label="E-mail" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic"  label="Phone" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic" label="Massage" variant="outlined" sx={{
                    width:'500px',
                }} />
                
            </SignInDiv>


            <SeventhDiv>
                    <SeventhSubDiv>
                        <h1>Get Multipurpose  <b>Monstroid</b><sup>2</sup> Template!</h1> <br />
                        <p>400+ HTML Files <span></span> 21 Niche Templates <span></span> All Source Files <span></span> Regular Updates</p>
                        <br />
                        

                        <button>VIEW NOW!</button>
                    </SeventhSubDiv>
            </SeventhDiv>


            <EightDiv>
            <LeftNav><i>Pesto <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                <br />
                <br />
                <br />
                <br />


                <LastNavDiv>
                    <Link to='/'>MENU</Link>
                    <Link to='/'>BLOG</Link>
                    <Link to='/contacts'>CONACTS</Link>
                    <Link to='/'>GALLERY</Link>
                    <Link to='/about'>ABOUT</Link>
                </LastNavDiv>
                <br />
                <br />
                <br />
                <p style={{
                    color:'rgb(220, 217, 217)'
                }}>
                    2022 Pesto.All Rights Reserved.Privacy Policy.Design By Muhammad Asif.
                </p>
            </EightDiv>
        </Container>
    );
};

export default Contact;

const Container=style.div``

const NavDiv=style.div`
height:80vh;
width:100vw;
`;
const Navigation=style.nav`
background-color: rgba(255, 255, 255, 0.1);
width:100vw;
height:100px;
justify-content:space-between;
align-items:center;
display:flex;
position:fixed;
`;
const RightNav=style.div`
height:10px;
width:100px;
display:flex;
align-items:center;
padding-right:40px;
color:black;
a{
    text-decoration:none;
    color:black;
    font-size:13px;
    padding:0px 20px;
    background-color:white;
    height:20px;
    display:flex;
    align-items:center;
}
a:hover{
    color:red;
}
`;
const MiddleNav=style.div`
display:flex;
justify-content:space-between;
align-items:center;
width:400px;
height:50px;

a{
    text-decoration:none;
    color:black;
    font-size:13px;
    :hover{
        color:white;
    }
}
`;
const LeftNav=style.div`
padding-left:40px;
i{
    font-size:30px;
    cursor:pointer;
    color:white;
    
}
sup{
    font-size:12px;
}
p{
    margin-top:-10px;
    font-size:10px;
    margin-left:-38px;
    cursor:pointer;
    color:white;
}
`

const SecoundDiv=style.div`
height:60vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`

const SecoundSubDiv=style.div`
display:flex;
justify-content:space-between;
color:rgb(41, 40, 40);
width:800px;
`

const ThirdDiv=style.div`
background-size:cover;
background-position:center;
height:70vh;
`

const SignInDiv=style.div`
padding:100px 0px;
`

const SeventhDiv=style.div`

`

const SeventhSubDiv=style.div`
background-color: rgb(66, 82, 205);
color:white;
padding-bottom:20px;
p{
    span{
        background-color:blue;
        height:10px;
        width:0.2px;
        cursor:pointer;
    }
}
button{
    background-color: rgb(249, 249, 16);
    font-weight:bold;
    border:none;
    padding:10px 15px;
    cursor:pointer;
}
`

const EightDiv=style.div`
padding:50px 0px;
background-color:rgb(62, 61, 61);
display:flex;
flex-direction:column;
align-items:center;
`

const LastNavDiv=style.div`
width:500px;
display:flex;
justify-content:space-evenly;
a{
    text-decoration:none;
    color:white;
}
`