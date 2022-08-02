import React from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';



const Home = () => {
    return (
        <Container>
            <NavDiv style={{
                backgroundImage:`url('/New folder/images (1).jfif')`,
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
                <Link to='/task3'>TASK3</Link>
                </MiddleNav>

                <RightNav>
                    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
                </RightNav>

            </Navigation>
            </NavDiv>
            <Paper elevation={10}>
                

            <TaskDiv>
            <div><h2>Name</h2>
                <p>You'r name</p></div>
                <div><h2>Phone</h2>
                <p>You'r phone number</p></div>
                <div><h2>Date</h2>
                <p>08/06/22</p></div>
                <div><h2>No. Of people</h2>
                <p>2</p></div>
                <div> 
                    <button style={{
  backgroundColor:'rgb(62, 61, 61)',
  color:'white',
  border:'none',
  padding:'5px 10px',
  cursor:'pointer'
                    }}><h4>CHECK AVAILABILITY</h4></button>
                </div>
            </TaskDiv>
            </Paper>


            <SecoundDiv>
                <SecoundSubDiv>
                    <img src="/New folder/Capture7.PNG" alt="" /> 
                    <div>
                        <h1>About Us</h1><br />
                        <i>Pesto is a family owende and operated Italian Restuarant offering a <br />
                        combination of fresh gredients and othentic Italian cooking <br />
                        <br />
                        We will make sure you are served the most authentic and fresh <br />
                        Italian dishes, while offering the best customer service. Our kitchen <br />
                        is commited to providing our gests with the best Italian Cuisine.</i>
                    </div>
                </SecoundSubDiv>
            </SecoundDiv>

            <ThirdDiv>
                <div>
                <h1>Featured Offers</h1>
                <p>We offered the great variety of the best Italian dishes to our visitors and guests.Below are some of <br />
                our most popular dishes and dessert.</p> <br />
                <img src="/New folder/Capture.PNG" alt="" /><img src="/New folder/Capture1.PNG" alt="" /><img src="/New folder/Capture2.PNG" alt="" />
                </div>
                
            </ThirdDiv>

            <ForthDiv>
                <ForthSubDiv>
                    <h1>Our Restaurant Menu</h1> <br />
                    <br />
                    <div 
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:'100vw'
                    }}
                    >
                    <nav>
                        <div>
                        <a href="/">Mains</a> <a href="/">Desserts</a> <a href="/">Drinks</a>
                        </div>

                        

                        
                    </nav>
                    </div>

                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'white',
                        width:'800px',
                        paddingBottom:'50px'
                    }}>
                            <p >
                                <br />
                                <span style={{
                                    color:'green'
                                 }}>$25.89</span>
                                 <br />
                                <br />
                                 <h2>Osso Buco</h2>
                                 <br />
                                 Occo Buco is one of the most Italian greats show cooked veal in a white wine tomato sauce.Meltingly <br />
                                 tender,this is most hearty and luxirious.

                                 <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$16.89</span>
                                  <br />
                                 <br />
                                 <h2>Pupper Delle</h2>
                                 <br />
                                 This delicius dish tops long wide pasta with scallops lobstar,asparagus,butter,sage and <br />
                                  truffle oil to cutter every plate. <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$17.89</span>
                                  <br />
                                 <br />
                                 <h2>Trippa Satriano</h2><br />
                                 <br />
                                 Thinly sliced herb encrusted ahi tuna topped with diced tomatoes,olives,capers,red onions <br />
                                 and fennel.Perfect chioce even for the first time visitors! <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$18.89</span>
                                  <br />
                                 <br />
                                 <h2>Filetto Di Manzo</h2>
                                 <br />
                                 Wonderful combination of prime tenderloin,winter greens,Jerusalem artichok puree and <br />
                                 oxtile reduction sause.

                            </p>
                        </div>
                </ForthSubDiv>
            </ForthDiv>

            <FivthDiv>
                <img src="/New folder/Capture3.PNG" alt="" /><img src="/New folder/Capture4.PNG" alt="" /><img src="/New folder/Capture5.PNG" alt="" /><br /><img src="/New folder/Capture6.PNG" alt="" style={{
                    width:'660px'
                }} />
            </FivthDiv>

            <SixthDiv>
                <h1>Recent News</h1>
                <br />
                <br />
                <div>
                    <p>
                        <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>July02,2019</span>  <br />
                        <h2>Genuine Italian Pizza: <br />
                        Authenticity and Choice</h2>
                        <br />
                        As an Italian restuarant, we are very proud for our <br />
                         delicious pizzas. Our most popular <br />
                          choice are the Rustica,the Toskana and.....

                    </p>

                    <p>
                    <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>July12,2019</span> <br />
                        <h2>Italian vs American Spaghetti: <br />
                        Top 5 differences</h2>
                        <br />
                        commonly, when we here there is spaghetti for <br />
                        dinner we will be expecting a red tomato sause <br />
                        with meet and seasonings pourd over long.....
                    </p>

                    <p>
                    <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>Aug02,2019</span> <br />
                        <h2>The Delicious History of <br />
                        Lasagna and its Origin</h2>
                        <br />
                        commonly, when we here there is spaghetti for <br />
                        dinner we will be expecting a red tomato sause <br />
                        with meet and seasonings pourd over long.....
                    </p>
                </div>
            </SixthDiv>

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

export default Home;

const Container=style.div``;
const NavDiv=style.div`
height:100vh;
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
    color:rgb(229, 228, 228);
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
height:70vh;
width:100vw;
background-color: rgb(240, 237, 237);
display:flex;
align-items:center;
margin-top:-77px;
`

const SecoundSubDiv=style.div`
color:black;
display:flex;
justify-content:space-evenly;
align-items:center;
width:100vw;
padding-top:50px;
div{
    h1{
        font-size:40px;
        :hover{
            color:white;
        }
    }
}


`

const ThirdDiv=style.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
div{
    height:400px;
}
h1{
    font-size:35px;
}
img{
    height:280px;
    margin:0px 10px;

}
`

const ForthDiv=style.div``

const ForthSubDiv=style.div`
display:flex;
flex-wrap:wrap;
text-align:center;
justify-content:center;
padding:100px 0px;
width:100vw;

background-color: rgb(240, 237, 237);
nav{
    background-color:rgb(21, 20, 20);
    width:800px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px 8px 0px 0px;
    margin-top:50px;
    div{
        width:400px;
        display:flex;
        justify-content:space-between;
    }
    a{
        text-decoration:none;
        color:white;
        font-weight: bold;
        }

        
}

`

const FivthDiv=style.div`
width:100vw;
display:flex;
flex-wrap:wrap;
img{
    width:455px;
}
`

const SixthDiv=style.div`
padding-top:150px;
height:70vh;
div{
    display:flex;
    justify-content:space-evenly;
    width:100vw;
}
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

const TaskDiv=style.div`
width:750px;
display:flex;
display: flex;
justify-content: space-around;
align-items: center;
height: 150px;
position: absolute;
background-color:white;
top:420px;
left:300px;
box-shadow:10px 10px 5px  rgb(202, 199, 199);
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