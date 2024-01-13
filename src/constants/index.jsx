import {
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  Facebook,
  Insta,
  Linkedin,
  Twitter,
  dropbox,
  send,
  Nav1,
  Nav2,
  NIMG1,
  shield,
  star,
} from "../assets";
import { CiSearch } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { IoEarthSharp } from "react-icons/io5";
import { GoServer } from "react-icons/go";
import { FaWordpress } from "react-icons/fa";
import { IoIosCloudOutline } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiServer } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscServerEnvironment } from "react-icons/vsc";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineArrowsPointingIn } from "react-icons/hi2";
export const navLinks = [
  {
    id: "domain",
    title: "Domain",
    img: Nav1,
    submenu: [
      {
        title: "Domain Name Search",
        link: "https://client.hoostly.com/cart.php?a=add&domain=register",
        icon: <CiSearch />,
      },
      {
        title: "Transfer Domain Names",
        link: "https://client.hoostly.com/",
        icon: <BiTransfer />,
      },
      {
        title: "WHOIS LookUp",
        link: "https://domain.hoostly.com/whois",
        icon: <IoEarthSharp />,
      },
      {
        title: "Domain Pricing",
        link: "https://client.hoostly.com/index.php?rp=/domain/pricing",
        icon: <FaArrowRightLong />,
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting",
    img: Nav2,

    submenu: [
      {
        title: "Shared Hosting",
        link: "/shared-hosting",
        icon: <GoServer />,
      },
      {
        title: "WordPress Hosting",
        link: "/wordPress-hosting",
        icon: <FaWordpress />,
      },
      {
        title: "Cloud Hosting",
        link: "/Cloud-hosting",
        icon: <IoIosCloudOutline />,
      },
      {
        title: "Python Hosting",
        link: "/Python-hosting",
        icon: <FaPython />,
      },
      {
        title: "E-Commerce Hosting",
        link: "/ecommerce-hosting",
        icon: <IoCartOutline />,
      },
      {
        title: "Reseller Hosting",
        link: "/reseller-hosting",
        icon: <BiTransfer />,
      },
      {
        title: "All Hosting Plans",
        link: "https://client.hoostly.com",
        icon: <FaArrowRightLong />,
      },
    ],
  },
  {
    id: "server",
    title: "Server",
    img: NIMG1,

    submenu: [
      {
        title: "VPS Server",
        link: "/VPS-server",
        icon: <GoServer />,
      },
      {
        title: "Dedicated Server",
        link: "/VPS-server",
        icon: <FiServer />,
      },
      {
        title: "Data Center",
        link: "/",
        icon: <VscServerEnvironment />,
      },
      {
        title: "VPS Reseller",
        link: "/",
        icon: <HiOutlineArrowsPointingIn />,
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    img: Nav2,

    submenu: [
      {
        title: "Announcements",
        link: "https://client.hoostly.com/index.php?rp=/announcements",
        icon: <TfiAnnouncement />,
      },
      {
        title: "Knowledge Base",
        link: "https://client.hoostly.com/index.php?rp=/knowledgebase",
        icon: <SiKnowledgebase />,
      },
      {
        title: "WhatsApp Support",
        link: "https://wa.me/+9779822799880",
        icon: <FaWhatsapp />,
      },
      {
        title: "Create Tickets",
        link: "https://client.hoostly.com/submitticket.php",
        icon: <IoTicketOutline />,
      },
    ],
  },
  {
    id: "blogs",
    title: "Blogs",
    link: "https://blogs.hoostly.net",
  },
  {
    id: "affiliate",
    title: "Affiliate",
    link: "/affiliate",
  },
  //   client area btn
  // number 10 am to 5pm support
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: Insta,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: Twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: Linkedin,
    link: "https://www.linkedin.com/",
  },
];
