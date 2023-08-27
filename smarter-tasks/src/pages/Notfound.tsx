import React from "react";

const NotfoundPage: React.FC = () => {
  return (
    <>
       <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not available!</p>

                                              <button 
             id="backToHomeButton" 
             className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-green-600 active:bg-green-600 hover:bg-green-700" 
           > 
             <a href="/home">Back to home</a> 
           </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
        .centered-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif; }
          .four_zero_four_bg {
            background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
            height: 400px;
            background-position: center;
          }
          .four_zero_four_bg h1 { font-size:80px; }
          .four_zero_four_bg h3 { font-size:80px; }
          .link_404 {      
            color: #fff!important;
            padding: 10px 20px;
            background: #39ac31;
            margin: 20px 0;
            display: inline-block;
          }
          .contant_box_404 { margin-top: -50px; }
        `}
      </style>
      </div>
    </>
  );
};

export default NotfoundPage;
