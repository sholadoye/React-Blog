import React from 'react'

const Main = () => {
    return (
        <div className="page">
            <div className="anymag">
                <img src="./images/anymag.png" alt="anymag"  className="any"/>
                <p>Magazine Style React Blog</p>
                <button>
                    Documentation
                </button>

                <img src="./images/magazine.png" alt="magazine" className="mag"/>
            </div>

            <span className="demo">
                Demos
            </span>

            <div className="demo-pics">
                <div className="demo-main">
                    <img src="./images/demo-main.jpg" alt="main" className="main"/>
                    <span>Main</span>
                </div>

                <div className="demo-dark">
                    <img src="./images/demo-dark.jpg" alt="dark" className="dark"/>
                    <span>Dark</span>
                </div>
            </div>

            <div className="fashion-pics">
                <div className="demo-fashion">
                    <img src="./images/demo-fashion.jpg" alt="fashion" className="fashion"/>
                    <span>Fashion</span>
                </div>
                <div className="demo-lifestyle">
                    <img src="./images/demo-fashion.jpg" alt="lifestyle" className="lifestyle"/>
                    <span>Lifestyle</span>
                </div>
            </div>

            <div className="others">

                <div className="one">
                    <div className="clean">
                        <img src="./images/clean-design.png" alt="design" className="act"/>
                        <p>Clean Design</p>
                    </div>
                    <div className="mail">
                        <img src="./images/mail-chimp.png" alt="mail" className="act"/>
                        <p>Mailchimp</p>
                    </div>
                </div> 

                <div className="two">
                    <div className="fully">
                        <img src="./images/fully-responsive.png" alt="fully" className="act"/>
                        <p>Fully Responsive</p>
                    </div>
                    <div className="color">
                        <img src="./images/color-customization.png" alt="color" className="act"/>
                        <p>Color Customization</p>
                    </div>
                </div>
            
                <div className="three">
                    <div className="advance">
                        <img src="./images/advance-typography.png" alt="advance" className="act"/>
                        <p>Advance Typography</p>
                    </div>
                    <div className="one-click">
                        <img src="./images/one-click.png" alt="one-click" className="act"/>
                        <p>One click Demo Improt</p>
                    </div>
                </div>
                <div className="four">
                    <div className="gutenberg">
                        <img src="./images/gutenberg-ready.png" alt="gutenberg" className="act"/>
                        <p>Gutenberg Ready</p>
                    </div> 
                    <div className="social">
                        <img src="./images/social-integration.png" alt="social" className="act"/>
                        <p>Social Integration</p>
                    </div>
                </div>
            </div>

            

            <div className="not">

                <p className="all">And that's
                    <span> not all!</span>
                </p>
                <button className="buy">
                    Buy Now
                </button>

                <img src="./images/footer-image.jpg" alt="magazines" className="magz"/>
            </div>

        </div>
    )
}

export default Main
