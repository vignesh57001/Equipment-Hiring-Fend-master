import React from "react";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/colorful-welcome-composition-with-origami-style_23-2147919827.jpg?w=2000")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      ></div>
      <div>
        <h2 className="text-center">Hello...!</h2>
        <h4 className="text-center">
          A customer is the most important visitor on our premises, he is not
          dependent on us. We are dependent on him. He is not an interruption in
          our work. He is the purpose of it. He is not an outsider in our
          business. He is part of it. We are not doing him a favor by serving
          him. He is doing us a favor by giving us an opportunity to do so.
        </h4>
      </div>
    </>
  );
}

export default Home;
