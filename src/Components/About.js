import React from 'react';
import {Link} from 'react-router-dom';
import style from 'styled-components';

const About = () => {
    return (
        <Container>
            <NavDiv style={{
                backgroundImage:`url('/about/Capture.PNG')`,
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
                    <img src="/about/images.jfif" alt="" />
                    <div>
                    <h1>About Our Restuarant</h1>
                    <h2>We offered the best italian dishes in a <br />
                    friendly and calm atmosphere </h2>
                    <br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur enim <br /> perspiciatis fugit, a officiis amet accusamus quam, commodi dicta doloremque molestiae, <br /> beatae porro! Exercitationem repellat ipsa sunt unde est.</p>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae, voluptates <br /> expedita voluptas neque cumque suscipit exercitationem! Doloremque magni alias repellendus architecto <br /> eveniet asperiores, fugiat  corporis aliquid adipisci reprehenderit cum qui delectus assumenda <br /> molestiae obcaecati aut modi, officia repellat aperiam.  Cumque ea veritatis animi doloremque.
                    </p>
                    </div>
                </SecoundSubDiv>
            </SecoundDiv>

            <ThirdDiv>
                <h1>Why People Choose Us</h1>

                <ThirdSubDiv>
                    <div> <h1>Friedly Team</h1> <br />
                    <p>Morbi tristique senectus et netus et <br />
                    malesuada fames ac turpis.</p> </div>
                    <div><h1>Fresh Food</h1>
                    <br />
                    <p>
                    Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.</p></div>
                    <div>
                        <h1>Quality Cuisine</h1>
                        <br />
                        <p>
                            Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Best Service
                        </h1>
                        <br />
                        <p>
                    Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.</p>
                    </div>
                    <div>
                        <h1>
                            Diverse Menu
                        </h1>
                        <br />
                        <p>
                            Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Affordable Prices
                        </h1>
                        <br />
                        <p>Morbi tristique senectus et netus et <br />
                    malesuada fames ac turpis.</p>
                    </div>
                </ThirdSubDiv>
            </ThirdDiv>

            <ForthDiv>
                <ForthSubDiv>
                    <h1>Testimonials</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, <br /> ipsum cupiditate ullam similique, magnam fugiat minima corrupti <br /> sequi assumenda dolore molestias consequatur blanditiis modi <br /> sit voluptatem cum. Minus, sequi rem.
                    </p>
                </ForthSubDiv>
            </ForthDiv>

            <FifthDiv>
                <h1>Our Awards</h1>
                <br />
                <br />
                <br />
                <FifthSubDiv>
                    <div>
                        <h3>
                            R I C K <br />
                            M E Y E R S
                        </h3>
                    </div>
                    <div>
                        <h3>B R E D S</h3>
                        <p>A D S V E R T I S I N G</p>
                    </div>
                    <div>
                        <h3>
                            N E U T O N
                        </h3>
                        <p>I N T E R A C T I V E</p>
                    </div>
                    <div>
                        <h3>F R A N C O I S <br />
                        R A D E B L A D E</h3>
                    </div>
                </FifthSubDiv>
            </FifthDiv>
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

export default About;

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
height:100vh;
width:100vw;
background-color: rgb(237, 237, 237);
display:flex;
justify-content:center;
align-items:center;
`

const SecoundSubDiv=style.div`
display:flex;
justify-content:space-between;
width:1200px;
height:400px;
img{
    height:400px;
    width:400px;
}
`

const ThirdDiv=style.div`
width:100vw;
height:80vh;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
h1{
    font-size:40px;
}
`

const ThirdSubDiv=style.div`
width:800px;
height:50vh;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
h1{
    font-size:30px;
}
`

const ForthDiv=style.div`
height:70vh;
background-image:url('/about/images (1).jfif');
color:white;
display:flex;
justify-content:center;
align-items:center;
`

const ForthSubDiv=style.div`
p{
    font-size:20px;
}
`

const FifthDiv=style.div`
height:60vh;
width:100vw;
background-color: white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const FifthSubDiv=style.div`
width:900px;
display:flex;
justify-content:space-evenly;
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