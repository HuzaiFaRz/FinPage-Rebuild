import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";

function App() {
  return (
    <Fragment>
      <main className="main z-10 bg-[url('./assets/Main_Bg.webp')] bg-cover bg-center bg-no-repeat bg-scroll w-full h-screen font-dmsans">
        <div className="main_overlay w-full h-screen bg-[#0000004d] flex flex-col items-center justify-between ">
          <Navbar />
          <div className="main_page w-full hidden flex-col items-start justify-center gap-8 pb-60 px-16">
            <Heading text="Secure. Simple. Easy to Use." />
            <Paragraph text="Innovative banking app that revolutionizes the way you manage your finances" />
            <Button text="Get The App" href="" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et sit,
          asperiores obcaecati, similique repudiandae labore impedit rem eos
          autem porro cum quisquam? Quo officia amet ipsam molestiae mollitia
          fuga tempore debitis. Ad eius animi veritatis. Aut, assumenda magni
          nihil accusamus iste beatae repellat maxime, a harum consequatur
          laboriosam vitae repudiandae tempora dolore, accusantium ad aliquid
          reiciendis? Voluptatibus porro adipisci fuga, ducimus numquam magnam,
          ut eum architecto asperiores ipsum dolore perferendis deserunt labore
          ad fugit alias accusantium expedita dolor nihil molestias impedit
          animi. Voluptates odit eius non at exercitationem natus, maiores
          voluptatibus quas quaerat, ratione corrupti dolore facere vero
          perspiciatis! Esse, distinctio doloribus hic, corporis sapiente porro
          nisi dolore accusantium voluptas cum, dolorem reiciendis iusto? Unde,
          quas. Modi id alias obcaecati eligendi illum. Quia culpa minus, nihil
          magnam deleniti blanditiis qui ab enim possimus esse consequatur
          necessitatibus officia molestiae optio libero, soluta debitis
          exercitationem harum ea unde. Omnis eos consectetur ipsa quidem vel
          adipisci distinctio, atque animi pariatur odit ex, ab minima! Fugiat
          repellendus veritatis velit quidem expedita similique facere vitae.
          Nobis illo mollitia quis sed facere ut eligendi qui, error quisquam
          veniam. Consequatur totam assumenda iste officia repellendus, quisquam
          necessitatibus animi atque sapiente, pariatur neque ipsam ratione
          culpa! Explicabo quibusdam repellat corporis et laborum iure, ullam
          nostrum impedit amet officia doloribus blanditiis voluptatibus
          excepturi similique, asperiores quod suscipit architecto magni
          doloremque. Voluptatum architecto impedit alias, non voluptas
          doloribus earum accusamus molestiae optio, vel nulla id aspernatur
          unde ex! Consectetur, dolorum culpa reiciendis, ipsum suscipit dolor
          perferendis, laboriosam quos doloribus aliquid magnam beatae aperiam
          quisquam accusantium maiores vitae cum cumque tempore non repellendus
          nihil! Similique, aliquam nihil molestias molestiae sapiente
          reiciendis dolorum debitis dolor autem fugit illum, eligendi
          dignissimos aperiam nesciunt a at harum ad cum nobis vel nemo. Quos
          dolore nostrum accusamus soluta fugiat alias provident quas nulla
          odio!
        </p>
      </main>
    </Fragment>
  );
}

export default App;
