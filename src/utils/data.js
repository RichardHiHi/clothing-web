import React from 'react';
import anh_2 from '../assets/backGround/anh_2.jpg';
import anh_5 from '../assets/backGround/anh_5.jpg';
import anh_6 from '../assets/backGround/anh_6.jpg';
import anh_8 from '../assets/backGround/anh_8.jpg';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineCar,
} from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import Forward30OutlinedIcon from '@material-ui/icons/Forward30Outlined';
import banner_1 from '../assets/banner/banner_1.jpg';
import banner_2 from '../assets/banner/banner_2.jpg';
import blog_1 from '../assets/blog/blog_1.jpeg';
import blog_2 from '../assets/blog/blog_2.jpg';
import blog_3 from '../assets/blog/blog_3.jpg';
import insta_1 from '../assets/insta/insta_1.jpg';
import insta_2 from '../assets/insta/insta_2.jpg';
import insta_3 from '../assets/insta/insta_3.jpg';
import insta_4 from '../assets/insta/insta_4.jpg';
import insta_5 from '../assets/insta/insta_5.jpg';
import insta_6 from '../assets/insta/insta_6.jpg';
import insta_7 from '../assets/insta/insta_7.jpg';
import insta_8 from '../assets/insta/insta_8.jpg';
import insta_9 from '../assets/insta/insta_9.jpg';

export const secShippings = [
  {
    icon: <AiOutlineCar />,
    title: 'FREE SHIPPING',
    content: 'Free shipping on all US order or order above $100',
  },
  {
    icon: <BiSupport />,
    title: 'SUPPORT 24/7',
    content: 'Contact us 24 hours a day, 7 days a week',
  },
  {
    icon: <Forward30OutlinedIcon />,
    title: '30 DAYS RETURN',
    content: 'Simply return it within 30 days for an exchange.',
  },
  {
    icon: <HttpsOutlinedIcon />,
    title: '100% PAYMENT SECURE',
    content: 'We ensure secure payment with PEV',
  },
];

export const instas = [
  {
    img: insta_1,
    links: [
      {
        link: '',
        top: '34',
        left: '68',
      },
    ],
  },
  {
    img: insta_2,
    links: [
      {
        link: '',
        top: '69',
        left: '45',
      },
      {
        link: '',
        top: '8',
        left: '50',
      },
    ],
  },
  {
    img: insta_3,
    links: [
      {
        link: '',
        top: '57',
        left: '11',
      },
    ],
  },
  {
    img: insta_4,
    links: [
      {
        link: '',
        top: '80',
        left: '50',
      },
    ],
  },
  {
    img: insta_5,
    links: [
      {
        link: '',
        top: '60',
        left: '50',
      },
      {
        link: '',
        top: '8',
        left: '40',
      },
    ],
  },
  {
    img: insta_6,
    links: [
      {
        link: '',
        top: '60',
        left: '50',
      },
    ],
  },
  {
    img: insta_7,
    links: [
      {
        link: '',
        top: '60',
        left: '20',
      },
    ],
  },
  {
    img: insta_8,
    links: [
      {
        link: '',
        top: '50',
        left: '60',
      },
    ],
  },
  {
    img: insta_9,
    links: [
      {
        link: '',
        top: '80',
        left: '60',
      },
      {
        link: '',
        top: '90',
        left: '30',
      },
    ],
  },
];

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
