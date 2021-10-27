import './About.css';



const Aboutitem = ({textHeader = 'Title', textDescription = "description", imgLink = '#'}) => {
    return  <div class="about__item">
                <div class="about__img"><img width="60"
                    height="60" src={imgLink} alt="donat"/></div>
                    <div class="about__divider"></div>
                <h3>{textHeader}</h3>
                <span>{textDescription}</span>
            </div>
}



const About = () => {
    return <section class="about">
            <div class="container">
                <div class="about__wrapper">
                    
                   <Aboutitem textHeader = 'GET INSPIRED' textDescription = 'Lorem ipsum dolor sit amet, consectetur adipisc 
                        Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.' imgLink ='icons/donat.png'/>

                    <Aboutitem textHeader = 'GET REWARDED' textDescription = 'Lorem ipsum dolor sit amet, consectetur adipisc 
                            Pellentesque vel enim a elit viverra elementuma.
                             Aliquam erat volutpat.' imgLink ='icons/money.png'/>

                    <Aboutitem textHeader = 'GET SOCIAL' textDescription = 'Lorem ipsum dolor sit amet, consectetur adipisc 
                            Pellentesque vel enim a elit viverra elementuma.
                             Aliquam erat volutpat.' imgLink ='icons/kok.png'/>

                </div>
            </div>
        </section>
}


export default About;
