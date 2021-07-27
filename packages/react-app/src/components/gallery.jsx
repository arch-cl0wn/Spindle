import React from "react";
import "./css/gallery.css";

export default function Gallery() {
    return (
      <div className="product body1 main">
         <svg class="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
            <title>arrow</title>
            <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
            <title>drop</title>
            <path
                d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
            <path
                d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
        </symbol>
        <symbol id="icon-longarrow" viewBox="0 0 54 24">
            <title>longarrow</title>
            <path onclick="slideshow.hideContent()"
                d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z" />
        </symbol>
        <symbol id="icon-navarrow" viewBox="0 0 408 408">
            <title>navarrow</title>
            <polygon fill="#fff" fill-rule="nonzero"
                points="204 0 168.3 35.7 311.1 178.5 0 178.5 0 229.5 311.1 229.5 168.3 372.3 204 408 408 204"></polygon>
        </symbol>
    </svg>
    <main id="setup">
        <div class="frame">
            <header class="spindle-header">
                <h1 class="spindle-header__title"><a href="./index.html"><img src="./img/logo.svg" /></a></h1>
                <div class="spindle-links">
                    <a class="github" href="./index.html">Home</a>
                    <a class="github" href="./addProduct.html">Add Product</a>
                </div>
            </header>
        </div>
        <div class="slideshow">
            <a href="./product.html" class="slideshow__deco">
                <h1>Title</h1>
                <h3>Description</h3>
            </a>
            <button class="nav nav--prev">
                <svg class="icon icon--navarrow-prev">
                    <use xlink:href="#icon-navarrow"></use>
                </svg>
            </button>
            <button class="nav nav--next">
                <svg class="icon icon--navarrow-next">
                    <use xlink:href="#icon-navarrow"></use>
                </svg>
            </button>
        </div>
        <div class="content">
        </div>
    </main>
      </div>
    );
  }