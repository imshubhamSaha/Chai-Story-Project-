"use strict";
const $ = (id) => document.getElementById(id);
const date = $("date");
const navBtn = $("nav-btn");
const navbar = $("navbar");
const navClose = $("nav-close");

/* Adding functionalites */
date.innerHTML = new Date().getFullYear();

navBtn.addEventListener("click", () => navbar.classList.add("showNav"));

navClose.addEventListener("click", () => navbar.classList.remove("showNav"));
