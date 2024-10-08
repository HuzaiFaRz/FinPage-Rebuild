import React, { useEffect, Fragment } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import PageContent from "./PageContent";
import SpecialCard from "./SpecialCard";
import SpecialHeading from "./SpecialHeading";
import FAQsItems from "./FAQsItems";
import CommentsCards from "./CommentsCards";
import Page_One_Image from "../assets/Images/Page_One_Image.webp";
import Page_One_Icon from "../assets/Images/Page_One_Icon.svg";
import Page_Two_Image from "../assets/Images/Page_Two_Image.webp";
import Page_Two_Icon from "../assets/Images/Page_Two_Icon.svg";
import Page_Three_Image from "../assets/Images/Page_Three_Image.webp";
import Page_Three_Icon from "../assets/Images/Page_Three_Icon.svg";
import Faqs_Icon from "../assets/Images/Faqs_Icon.svg";
import AppStoreIcon from "../assets/Images/App_Store_Icon.svg";
import GooglePlayIcon from "../assets/Images/Google_Play_Icon.svg";
import Page_Six_Image from "../assets/Images/Page_Six_Image.webp";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  window.lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    orientation: "horizontal",
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: true,
    direction: "horizontal",
    smooth: true,
    gestureDirection: "both",
    mouseMultiplier: 1,
  });
  window.lenis = new Lenis({
    infinite: true,
    syncTouch: true,
  });
  const raf = (time) => {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  window.lenis.on("scroll", ScrollTrigger.update);

  // const [scrollXStart, scrollXSet] = useState([]);
  // const container = useRef();
  // const commentsCardRowRefrence = useRef(null);
  // const testimonialRefrence = useRef(null);
  // const gsapTimeLine = gsap.timeline();
  // useEffect(() => {
  //   if (commentsCardRowRefrence.current && testimonialRefrence.current) {
  //     const commentRow = commentsCardRowRefrence.current;
  //     const testimonialRefrenceElem = testimonialRefrence.current;

  //     // commentRow.scrollLeft = commentRow.scrollWidth;
  //     console.log(commentRow.scrollWidth);

  //     console.log(testimonialRefrenceElem.getBoundingClientRect().top);

  //     gsap.fromTo(
  //       commentRow,
  //       { x: 100 },
  //       {
  //         x: -100,
  //         scrollTrigger: {
  //           trigger: testimonialRefrenceElem,
  //           scroller: document.body,
  //           start: `${testimonialRefrenceElem.getBoundingClientRect().top},
  //             0%
  //           `,
  //           end: `top bottom`,
  //           scrub: 2,
  //           pin: true,
  //         },
  //         duration: 2,
  //         ease: "power1.inOut",
  //       }
  //     );
  //   }
  // }, [commentsCardRowRefrence, testimonialRefrence]);

  useEffect(() => {
    Array.from(document.querySelectorAll('a[href^="#"]')).forEach(
      (linkElem) => {
        linkElem.addEventListener("click", (e) => {
          e.preventDefault();
          const anchorHref = linkElem.getAttribute("href");
          if (anchorHref === "#") {
            return;
          }
          window.lenis.scrollTo(anchorHref, {
            immediate: false,
            duration: 5,
            easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
            onComplete() {
              const scrollTriggers = ScrollTrigger.getAll();
              scrollTriggers.forEach((st) => {
                if (st.animation) {
                  st.animation.progress(1);
                }
              });
            },
          });
        });
      }
    );
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    let loadingInterval;
    window.addEventListener("load", () => {
      setIsLoading(true);
      loadingInterval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime === 100 && prevTime <= 100) {
            setIsLoading(false);
            clearInterval(loadingInterval);
            return prevTime;
          }
          return prevTime + 1;
        });
      }, 0);
    });
    return () => clearInterval(loadingInterval);
  }, [timer]);

  document.body.style.overflow = isLoading ? "hidden" : "auto";

  return (
    <Fragment>
      <main
        id="Overview"
        className="main w-full h-full bg-[url('https://assets-global.website-files.com/654642f8b348306163b5ff9c/654653362e267b5cefd2a9fa_Hero.webp')] bg-cover bg-center bg-no-repeat bg-fixed font-dmsans"
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div>
          <div
            className={`loading-screen w-[100vw] h-[100vh] fixed bottom-0 flex flex-col justify-center items-center bg-[#000] z-[1000000] ${
              isLoading
                ? "opacity-100 z-[1000000] top-0 "
                : "opacity-0 z-[-1] -top-full"
            }`}
            style={{ transition: "all 3s linear" }}
          >
            <h1 className={`text-[40vw] text-white font-mono timertext`}>
              {timer}%
            </h1>
          </div>

          <div
            className="main_page bg-[#0000004d]  w-full h-[100vh] flex flex-col items-start justify-center gap-8 px-8 xl:px-16"
            id="Overview"
          >
            <Heading text={"Secure. Simple. Easy to Use."} />
            <Paragraph
              text={
                "Innovative banking app that revolutionizes the way you manage your finances"
              }
            />
            <Button text={"Get The App"} href={"#Downlaod"} />
          </div>

          <PageContent
            flex={"flex-col-reverse sm:flex-row"}
            image={Page_One_Image}
            icon={Page_One_Icon}
            heading={"A Simple Way to Manage Your Financial"}
            title={
              "Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
            }
          />

          <PageContent
            flex={"flex-col-reverse sm:flex-row-reverse"}
            image={Page_Two_Image}
            icon={Page_Two_Icon}
            heading={"Keeps Your Data Private"}
            title={
              "Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
            }
          />

          <PageContent
            flex={"flex-col-reverse sm:flex-row"}
            image={Page_Three_Image}
            icon={Page_Three_Icon}
            heading={"Automating Your Money"}
            title={
              "Lorem ipsum dolor sit amet consectetur. Nunc amet cras accumsan vitae. Quis in quis volutpat mi in"
            }
          />

          <div
            className="page_four w-full h-full flex flex-col justify-center items-center py-5 sm:py-20 bg-[#000]"
            id="Features"
          >
            <SpecialHeading
              leftText={"Big on"}
              specialText={"features."}
              centerText={"Deceptively simple"}
              lineBreak={<br />}
            />
            <div className="flex flex-wrap justify-center items-center gap-12 w-full py-10 px-6 cursor-pointer">
              <SpecialCard />
            </div>
          </div>

          <div
            className="page_five min-h-[100vh]
             w-full h-full flex flex-col justify-center items-center py-5 sm:py-20 bg-[#000] px-2 sm-px-0"
            id="Testimonial"
            // ref={testimonialRefrence}
          >
            <SpecialHeading
              leftText={"Their"}
              specialText={"words"}
              centerText={" speak for us."}
              lineBreak={""}
            />

            <div
              // ref={commentsCardRowRefrence}
              id="commentsCardRow"
              className="flex flex-nowrap items-center justify-start gap-x-6 px-4 pb-10 pt-10 w-full overflow-x-auto"
            >
              <CommentsCards />
            </div>
          </div>

          <div
            className="page_six w-full h-full flex flex-col justify-center items-center text-center py-5 sm:py-20 bg-[#000]"
            id="FAQ"
          >
            <img
              src={Faqs_Icon}
              className="object-center object-cover w-[60px] h-[60px] mb-5"
            />
            <Heading text={"FAQs"} />
            <div className="flex flex-col justify-center items-center gap-5 w-full py-5 px-10">
              <FAQsItems />
            </div>
          </div>

          <div
            className="page_seven bg-gradient-to-br from-[#0100e3] via-[#1b9feb] to-[#8736f3] flex flex-wrap justify-center items-center overflow-hidden"
            id="Downlaod"
          >
            <div className="w-full sm:w-[50%] flex flex-col justify-center items-center text-center gap-7 py-36 font-sora">
              <Heading text={"Get Finpage App Right Now"} />
              <div className="flex flex-wrap justify-center items-center gap-5 px-5 font-dmsans">
                <a
                  href="https://www.apple.com/id/app-store/"
                  target="_blank"
                  className="flex flex-row justify-center items-center w-full sm:w-auto gap-3 px-5 sm:px-8 py-4 bg-transparent hover:bg-[#ffffff33] border border-[#fff] hover:border-[#ffffff33] rounded-3xl text-white text-md md:text-lg"
                >
                  <img src={AppStoreIcon} />
                  AppStore
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  className="flex flex-row justify-center items-center w-full sm:w-auto gap-3 px-5 sm:px-8 py-4 bg-transparent hover:bg-[#ffffff33] border border-[#fff] hover:border-[#ffffff33] rounded-3xl text-white text-md md:text-lg"
                >
                  <img src={GooglePlayIcon} />
                  Google Play
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[50%] h-full  relative  inline-block py-36">
              <img
                src={Page_Six_Image}
                className="w-[300px] lg:w-[400px] h-[full] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
