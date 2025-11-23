import { Fragment } from "react";

function CommentsCards() {
  const commentsCardsContent = [
    {
      testimonialText:
        "“The good thing about this app is that it saves a lot of time so I can do other things – the running of the business part.”",
      writerName: "Robert Fox",
    },
    {
      testimonialText:
        "“Great App. Definitely worthwhile and helps me stay on budget”",
      writerName: "Guy Hawkins",
    },
    {
      testimonialText:
        "“Best Financial Managing App. It’s easy to use and help me gain more money”",
      writerName: "Brooklyn Simmons",
    },
    {
      testimonialText:
        "“Love this. An App that actually does what’s advertised”",
      writerName: "Jenny Wilson",
    },
    {
      testimonialText:
        "“The good thing about this app is that it saves a lot of time so I can do other things – the running of the business part.”",
      writerName: "Jane Cooper",
    },
    {
      testimonialText:
        "“Great App. Definitely worthwhile and helps me stay on budget”",
      writerName: "John Doe",
    },
  ];
  return (
    <Fragment>
      {commentsCardsContent.map((element, index) => {
        return (
          <div
            className="min-w-[18rem] p-8 md:min-w-[20rem] md:p-10 lg:min-w-[25rem] lg:p-14 font-sora font-normal flex flex-col justify-between items-start rounded-3xl bg-gradient-to-br from-[#0100e3] via-[#1b9feb] to-[#8736f3]"
            key={index}
          >
            <p className="w-full text-2xl lg:text-3xl  mb-28  text-white">
              {element.testimonialText}
            </p>
            <span className="w-full text text-xl text-white font-sora">
              {" "}
              {element.writerName}
            </span>
          </div>
        );
      })}
    </Fragment>
  );
}

export default CommentsCards;
