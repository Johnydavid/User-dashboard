import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    src: "https://image3.mouthshut.com/images/imagesp/925106606s.jpg",
    width: 500,
    height: 174,
    isSelected: false,
    caption: "Post Office Details",
    alt: "Post Office",
    href: "https://pincodelookup.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://p4.wallpaperbetter.com/wallpaper/266/71/697/game-of-thrones-wallpaper-preview.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Chracters", title: "Characters" },
      { value: "Quotes", title: "Quotes" },
    ],
    alt: "Game of Thrones",
    href: "https://gameofthrones-characters.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
  },

  {
    src: "https://st3.depositphotos.com/4187167/14640/i/1600/depositphotos_146407923-stock-photo-makeup-products-in-shopping-cart.jpg",
    width: 320,
    height: 212,
    alt: "Shopping Cart",
    href: "https://visitshopping-cart.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="text-success fontClass" align="center">
        {" "}
        Projects
      </h1>

      <div align="center" className="mt-5">
        {images.map((image) => {
          const { src, href, target, rel, alt } = image;
          return (
            <a href={href} target={target} rel={rel}>
              <img
                src={src}
                alt={alt}
                style={{ height: 250, width: 400 }}
              ></img>
            </a>
          );
        })}
      </div>
    </>
  );
}
