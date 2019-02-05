import React, { Component } from "react";
import $ from "jquery";
import RegisterUser from "./registerUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
  scrollMoreInfo = () => {
    $("html, body").animate(
      { scrollTop: $("#moreInfo").offset().top - 64 },
      500
    );
  };
  componentDidMount() {
    $("#root").css({ height: "auto" });
  }
  componentWillUnmount() {
    $("#root").css({ height: "100%" });
  }
  render() {
    let extensionLink = "https://chrome.google.com/webstore/detail/synopsis-your-moodle-hero/ikffeebmjnccffbijpcnlhadgdebadmc";
    return (
      <div className="overflow-scroll">
        <section className="bg-blue-lightest h-full py-24">
          <div className="w-5/6 max-w-lg ml-auto mr-auto h-full">
            <div className="flex items-center justify-center text-center h-full">
              <div>
                <img
                  className="h-64 pb-10"
                  src={process.env.PUBLIC_URL + "/uniboard.svg"}
                />
                <h1 className="text-4xl sm:text-5xl font-semibold leading-none mb-4">
                  This, is Uniboard.
                </h1>
                <h2 className="text-2xl sm:text-3xl text-blue-darker opacity-75 font-normal leading-tight mb-8">
                  We are a team of 5, all on a mission to make Moodle* easy.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center pt-8">
                  <a href={extensionLink}>
                    <button className="bg-blue hover:bg-blue-dark text-2xl leading-none text-white font-semibold h-12 px-8 rounded-full whitespace-no-wrap mb-2 sm:mb-0 sm:mr-2">
                      Download The Extension
                    </button>
                  </a>
                  <button
                    onClick={this.scrollMoreInfo}
                    className="bg-transparent text-2xl leading-none text-blue font-semibold hover:text-blue-dark h-12 px-8 border border-blue-lighter hover:border-blue-light rounded-full whitespace-no-wrap mt-2 sm:mt-0 sm:ml-2"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-lighter py-8">
          <div className="w-full max-w-lg ml-auto mr-auto mt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className="text-xl text-black leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">
                Already have the extension?
              </p>
              <Link to="/login">
                <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap no-underline">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="moreInfo" className="bg-white py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8 text-center">
            <div className="text-5xl sm:text-6xl font-semibold leading-none mb-10">
              Say Hello To Blazing Fast Access
            </div>
            <div className="flex flex-wrap -mx-6 my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-teal-dark">
                  <i className="fas fa-clock" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  Save Your Time
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  No more waiting until eternity for Moodle to load. Use the
                  extra time to watch the next season of Game of Thrones.
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <div className="mb-8 text-5xl text-red-dark">
                  <i className="fas fa-download" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none mb-3">
                  Download Away
                </h3>
                <p className="text-lg sm:text-xl leading-normal text-grey-darker mb-8">
                  Downloading files one by one is so 2018. Enjoy blazing fast
                  batch downloads of your Lectures and Tutes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grey-darker py-8">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className="text-xl text-white leading-normal mr-6 mb-8 md:mb-0 text-center md:text-left">
                What are you waiting for?
              </p>
              <button className="bg-blue hover:bg-blue-dark text-xl leading-none text-white font-semibold h-10 px-6 rounded-full whitespace-no-wrap">
                Download The Extension
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
            <div className="flex flex-col justify-center text-center pb-8">
              <h2 className="text-5xl font-semibold leading-none mb-4">
                Getting Started
              </h2>
            </div>

            <div
              className="bg-white rounded shadow-lg overflow-hidden"
              style={{ height: "350px" }}
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/bWt4Bz8iNHo"
                allowFullScreen=""
                width="100%"
                height="350"
              />
            </div>
          </div>

          <div className="w-5/6 max-w-md ml-auto mr-auto pt-8 mt-8 mb-8">
            <div className="flex flex-wrap -mx-6 -my-6">
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-xl font-semibold leading-tight mb-3">
                  Can I use the app for free?
                </h3>
                <p className="text-lg leading-normal text-grey-darker mb-8">
                  Yes! The app is 100% free. $Free.99. No money. None. Why? I
                  believe in students and, I want to make your lives easier, not
                  harder
                </p>
              </div>
              <div className="w-full sm:w-1/2 px-6 py-6">
                <h3 className="text-xl font-semibold leading-tight mb-3">
                  I dont know much tech. How easy it is to use?
                </h3>
                <p className="text-lg leading-normal text-grey-darker mb-8">
                  Simple as A, B, C.
                  <br />
                  A. <a href={extensionLink}>Download The Extension</a>
                  <br />
                  B. Open Moodle
                  <br />
                  C. Sync Your Data
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grey-lightest py-10">
          <div className="w-5/6 max-w-2xl ml-auto mr-auto mt-8">
            <div className="flex flex-col justify-center text-center pb-8">
              <h2 className="text-5xl font-semibold leading-none mb-4">
                Meet The Creators
              </h2>
            </div>
            <div className="flex flex-wrap -mx-6 -my-6">
              <div className="w-full lg:w-1/2 px-6 py-6 m-auto text-center">
                <img
                  className="rounded-full w-32 m-auto block -mb-6"
                  src="https://media.licdn.com/dms/image/C5603AQEePIBcg8x7Cg/profile-displayphoto-shrink_800_800/0?e=1549497600&v=beta&t=-gSeaaKBcRg-nYhTcHeSBQqbqRhpXN-B7pHhYb_EPnY"
                />
                <div className="bg-yellow-lightest rounded shadow-lg overflow-hidden p-8">
                  <div className="text-2xl font-black text-bold">
                    Deep Bhattacharyya
                  </div>
                  <div className="flex justify-center py-4">
                    <div className="bg-grey-light h-1 w-16 rounded" />
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    Loves Watching Lizard Videos&nbsp;
                    <i className="fab fa-youtube" />
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    IT Director at MASA | Lead Web Developer at Learnmate
                  </div>
                  <div className="text-lg text-black leading-tight p-1">
                    Monash University: Finance & Business Information Systems
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://media.licdn.com/dms/image/C5103AQHJkyVkFguwKg/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=rAC4RmbTxhDX07TE6XL8ahRI7H9cV6kfRgn-FuY-094"
                  />
                  <div className="bg-yellow-lighter rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Sameer Syed
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Loves Big Bang Theory&nbsp;
                      <i className="fas fa-space-shuttle" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      IT Officer at MASA
                    </div>
                    <div className="text-lg text-black leading-tight p-1">
                      Monash University: Accounting & Business Information
                      Systems
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg"
                  />
                  <div className="bg-yellow-lighter rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Haikal Zain
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg"
                  />
                  <div className="bg-yellow-light rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Farharth Faisal
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <img
                    className="rounded-full w-32 m-auto block -mb-6"
                    src="https://scienceoxford.com/wp-content/uploads/2018/03/avatar-male.jpg"
                  />
                  <div className="bg-yellow-light rounded shadow-lg overflow-hidden p-8">
                    <div className="text-2xl font-black text-bold">
                      Nikhil Ramesh
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="bg-grey-light h-1 w-16 rounded" />
                    </div>
                    <div className="text-lg text-black leading-tight p-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf-e8QvjtMvr7kv-jzWblMLQSX2bjzyF0Efrj0OcWvMkiq2vg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </section>
        <footer className="bg-green-lightest py-8">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between px-8">
            <small className="block text-sm text-grey p-3">
              &copy; UniBoard
            </small>
            <small className="block text-sm text-grey p-3">
              *We do not have any stake in Monash University. No data is sent to
              UniBoard unless explicitly specified by the user.
            </small>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;
