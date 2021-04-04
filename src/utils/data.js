import React from 'react';
import anh_2 from '../assets/backGround/anh_2.jpg';
import anh_5 from '../assets/backGround/anh_5.jpg';
import anh_6 from '../assets/backGround/anh_6.jpg';
import anh_8 from '../assets/backGround/anh_8.jpg';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import banner_1 from '../assets/banner/banner_1.jpg';
import banner_2 from '../assets/banner/banner_2.jpg';
import blog_1 from '../assets/blog/blog_1.jpeg';
import blog_2 from '../assets/blog/blog_2.jpg';
import blog_3 from '../assets/blog/blog_3.jpg';

export const blogs = [
  {
    img: blog_1,
    postTitle: 'Spring – Summer Trending 2020',
    author: 'Henrry',
    content:
      'Typography is the work of typesetters, compositors,typographers, graphic designers, art directors, mangartists, ...',
  },
  {
    img: blog_2,
    postTitle: 'The Easiest Way to Break Out on Top',
    author: 'john',
    content:
      'Typography is the work of typesetters, compositors,typographers, graphic designers, art directors, mangartists, ...',
  },
  {
    img: blog_3,
    postTitle: 'Style for couple in Weeding season',
    author: 'nam',
    content:
      'Typography is the work of typesetters, compositors,typographers, graphic designers, art directors, mangartists, ...',
  },
];

export const banners = [
  { img: banner_1, smallText: 'LOOKBOOK 2020', bigText: 'MAKE LOVE THIS LOOK' },
  { img: banner_2, smallText: 'SUMMER SALE', bigText: 'UP TO 70%' },
];

export const footers = [
  {
    menu: 'Categories',
    items: [
      { name: 'Men', link: '#' },
      { name: 'Women', link: '#' },
      { name: 'Accessories', link: '#' },
      { name: 'Shoes', link: '#' },
      { name: 'Denim', link: '#' },
      { name: 'Dress', link: '#' },
    ],
  },
  {
    menu: 'Infomation',
    items: [
      { name: 'About Us', link: '#' },
      { name: 'Contact Us', link: '#' },
      { name: 'Terms & Conditions', link: '#' },
      { name: 'Returns & Exchanges', link: '#' },
      { name: 'Shipping & Delivery', link: '#' },
      { name: 'Privacy Policy', link: '#' },
    ],
  },
  {
    menu: 'Useful links',
    items: [
      { name: 'Store Location', link: '#' },
      { name: 'Latest News', link: '#' },
      { name: 'My Account', link: '#' },
      { name: 'Size Guide', link: '#' },
      { name: 'FAQs 2', link: '#' },
      { name: 'FAQs', link: '#' },
    ],
  },
];

export const slide = [
  {
    image: anh_6,
    position: 'right',
    title: 'SUMMER SALE',
    text: 'Lookbook Collection',
  },
  {
    image: anh_2,
    position: 'left',
    title: 'NEW SEASON',
    text: 'Save up to 70%',
  },

  {
    image: anh_5,
    position: 'left',
    title: 'NEW SEASON 2021',
    text: 'New Arrival Collection',
  },

  {
    image: anh_8,
    position: 'left',
    title: 'SUMMER SALE',
    text: 'Save up to 90%',
  },
];

export const icons = [
  { icon: <FaFacebookF />, text: 'Follow on Facebook', name: 'facebook' },
  { icon: <FaLinkedinIn />, text: 'Follow on Linkedin', name: 'linkedin' },

  { icon: <AiOutlineTwitter />, text: 'Follow on Twitter', name: 'twitter' },
  {
    icon: <AiOutlineInstagram />,
    text: 'Follow on Instagram',
    name: 'instagram',
  },
  { icon: <FaPinterestP />, text: 'Follow on Pinterest', name: 'pinterest' },
];
