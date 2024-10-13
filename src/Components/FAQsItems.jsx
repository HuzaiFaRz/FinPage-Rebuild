import React, { Fragment } from "react";

import "../Components/FaqItems.css";

function FAQsItems() {
  const faqsItemsContent = [
    {
      heading: "How secure is my financial information on the app?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      heading: "Can I link multiple bank accounts to the app?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      heading: "How quickly are transactions processed through the app?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      heading: "Are there any fees associated with using the app?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
    {
      heading:
        "What support options are available if I encounter issues or have questions?",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    },
  ];

  const [visibleFAQ, setVisibleFAQ] = React.useState(
    Array(faqsItemsContent.length).fill(false)
  );

  const toggleFAQ = (index) => {
    setVisibleFAQ((prevState) => {
      const newVisibleFAQ = [...prevState];
      newVisibleFAQ[index] = !newVisibleFAQ[index];
      return newVisibleFAQ;
    });
  };
  return (
    <Fragment>
      {faqsItemsContent.map((element, index) => {
        return (
          <Fragment key={index}>
            <div
              className="Faqs-Item w-full transition-[height] lg:w-[850px] cursor-pointer flex flex-col justify-center items-start py-8 border border-[#000] border-b-[#ffffff33]"
              key={index}
              onClick={() => {
                toggleFAQ(index);
              }}
            >
              <div className="w-full flex flex-row justify-between items-center relative">
                <h2 className="Faqs-Title text-[#fff] text-2xl font-sora font-normal text-start">
                  {element.heading}
                </h2>
                <div className="w-[60px] h-full">
                  <div
                    className={`Faqs-Close border border-[#ffffff33] rounded-full w-[48px] h-[48px] ml-8 relative overflow-hidden cursor-pointer flex flex-col justify-center items-center
                    ${visibleFAQ[index] ? "bg-[#fff]" : "bg-[#ffffff33]"}`}
                  >
                    <span
                      className={`w-[60%] h-[2px] ${
                        visibleFAQ[index]
                          ? "absolute left-[15px] -translate-x-[5px] rotate-45 bg-[#000]"
                          : "absolute left-[15px] -translate-x-[5px] bg-[#fff] "
                      }`}
                    ></span>

                    <span
                      className={`w-[60%] h-[2px]
                        
                        ${
                          visibleFAQ[index]
                            ? `absolute left-[15px] -translate-x-[5px] -rotate-45 bg-[#000]`
                            : "absolute left-[15px] -translate-x-[5px] opacity-0 bg-[#fff]"
                        }`}
                    ></span>
                  </div>
                </div>
              </div>
              <p
                className={`Faqs-Detail text-start text-[#ffffffb3] text-xl font-dmsans mt-8 w-full sm:w-[90%] transition-all duration-500 ease-in-out
                ${
                  visibleFAQ[index]
                    ? "opacity-1 max-h-[200px]"
                    : "opacity-0 max-h-[0px]"
                }`}
              >
                {element.detail}
              </p>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default FAQsItems;
