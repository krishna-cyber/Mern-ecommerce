/** @format */

import React from "react";
import styles from "../styles/styles";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className='subscription'></div>
      <footer className={` p-4 bg-black text-white`}>
        <div
          className={`${styles.section} mt-4 flex justify-between flex-wrap`}>
          <span className=' w-3/12 flex flex-col gap-3'>
            <svg
              width='152'
              height='36'
              viewBox='0 0 152 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M48.944 28.504C46.448 28.504 44.348 27.952 42.644 26.848C40.94 25.72 39.74 24.196 39.044 22.276L43.292 19.792C44.276 22.36 46.208 23.644 49.088 23.644C50.48 23.644 51.5 23.392 52.148 22.888C52.796 22.384 53.12 21.748 53.12 20.98C53.12 20.092 52.724 19.408 51.932 18.928C51.14 18.424 49.724 17.884 47.684 17.308C46.556 16.972 45.596 16.636 44.804 16.3C44.036 15.964 43.256 15.52 42.464 14.968C41.696 14.392 41.108 13.672 40.7 12.808C40.292 11.944 40.088 10.936 40.088 9.784C40.088 7.504 40.892 5.692 42.5 4.348C44.132 2.98 46.088 2.296 48.368 2.296C50.408 2.296 52.196 2.8 53.732 3.808C55.292 4.792 56.504 6.172 57.368 7.948L53.192 10.36C52.184 8.2 50.576 7.12 48.368 7.12C47.336 7.12 46.52 7.36 45.92 7.84C45.344 8.296 45.056 8.896 45.056 9.64C45.056 10.432 45.38 11.08 46.028 11.584C46.7 12.064 47.972 12.592 49.844 13.168C50.612 13.408 51.188 13.6 51.572 13.744C51.98 13.864 52.52 14.068 53.192 14.356C53.888 14.62 54.416 14.872 54.776 15.112C55.16 15.352 55.592 15.676 56.072 16.084C56.552 16.492 56.912 16.912 57.152 17.344C57.416 17.776 57.632 18.304 57.8 18.928C57.992 19.528 58.088 20.188 58.088 20.908C58.088 23.236 57.236 25.084 55.532 26.452C53.852 27.82 51.656 28.504 48.944 28.504ZM71.1203 9.496C73.0883 9.496 74.7083 10.156 75.9803 11.476C77.2763 12.796 77.9243 14.62 77.9243 16.948V28H73.2803V17.524C73.2803 16.324 72.9563 15.412 72.3083 14.788C71.6603 14.14 70.7963 13.816 69.7163 13.816C68.5163 13.816 67.5563 14.188 66.8363 14.932C66.1163 15.676 65.7563 16.792 65.7563 18.28V28H61.1123V2.8H65.7563V12.016C66.8843 10.336 68.6723 9.496 71.1203 9.496ZM97.2256 25.768C95.3776 27.592 93.1216 28.504 90.4576 28.504C87.7936 28.504 85.5376 27.592 83.6896 25.768C81.8656 23.92 80.9536 21.664 80.9536 19C80.9536 16.336 81.8656 14.092 83.6896 12.268C85.5376 10.42 87.7936 9.496 90.4576 9.496C93.1216 9.496 95.3776 10.42 97.2256 12.268C99.0736 14.092 99.9976 16.336 99.9976 19C99.9976 21.664 99.0736 23.92 97.2256 25.768ZM86.9656 22.564C87.9016 23.5 89.0656 23.968 90.4576 23.968C91.8496 23.968 93.0136 23.5 93.9496 22.564C94.8856 21.628 95.3536 20.44 95.3536 19C95.3536 17.56 94.8856 16.372 93.9496 15.436C93.0136 14.5 91.8496 14.032 90.4576 14.032C89.0656 14.032 87.9016 14.5 86.9656 15.436C86.0536 16.372 85.5976 17.56 85.5976 19C85.5976 20.44 86.0536 21.628 86.9656 22.564ZM113.741 9.496C116.165 9.496 118.229 10.42 119.933 12.268C121.661 14.092 122.525 16.336 122.525 19C122.525 21.664 121.661 23.92 119.933 25.768C118.229 27.592 116.165 28.504 113.741 28.504C111.221 28.504 109.277 27.628 107.909 25.876V35.2H103.265V10H107.909V12.124C109.277 10.372 111.221 9.496 113.741 9.496ZM109.313 22.672C110.249 23.608 111.437 24.076 112.877 24.076C114.317 24.076 115.505 23.608 116.441 22.672C117.401 21.712 117.881 20.488 117.881 19C117.881 17.512 117.401 16.3 116.441 15.364C115.505 14.404 114.317 13.924 112.877 13.924C111.437 13.924 110.249 14.404 109.313 15.364C108.377 16.3 107.909 17.512 107.909 19C107.909 20.488 108.377 21.712 109.313 22.672Z'
                fill='#ffffff'
              />
              <path
                d='M147.22 24.724C144.676 27.244 141.58 28.504 137.932 28.504C134.284 28.504 131.188 27.244 128.644 24.724C126.124 22.18 124.864 19.072 124.864 15.4C124.864 11.728 126.124 8.632 128.644 6.112C131.188 3.568 134.284 2.296 137.932 2.296C141.58 2.296 144.676 3.568 147.22 6.112C149.764 8.632 151.036 11.728 151.036 15.4C151.036 19.072 149.764 22.18 147.22 24.724ZM132.136 21.34C133.696 22.876 135.628 23.644 137.932 23.644C140.236 23.644 142.168 22.876 143.728 21.34C145.288 19.78 146.068 17.8 146.068 15.4C146.068 13 145.288 11.02 143.728 9.46C142.168 7.9 140.236 7.12 137.932 7.12C135.628 7.12 133.696 7.9 132.136 9.46C130.576 11.02 129.796 13 129.796 15.4C129.796 17.8 130.576 19.78 132.136 21.34Z'
                fill='#001B38'
              />
              <circle
                cx='16'
                cy='16'
                r='14.5'
                stroke='#ffffff'
                stroke-width='3'
              />
              <path
                d='M15.7949 8.03393C15.6791 8.08713 15.5758 8.19666 15.532 8.31245C15.5132 8.36253 15.4976 8.60976 15.4976 8.86638C15.4976 9.3984 15.5289 9.34833 15.169 9.38275C14.8529 9.41405 14.2833 9.53923 13.914 9.66441C12.1959 10.2371 10.7939 11.4608 10.0052 13.0756C9.68916 13.7265 9.43567 14.5621 9.37934 15.1567C9.34491 15.5354 9.40438 15.4947 8.81915 15.5072C8.25584 15.5166 8.21828 15.5291 8.06807 15.7326C7.97731 15.8546 7.97731 16.1488 8.06807 16.2708C8.21828 16.4743 8.25584 16.4868 8.81915 16.4962C9.40438 16.5087 9.34491 16.468 9.37934 16.8467C9.43567 17.4413 9.68916 18.2769 10.0052 18.9278C10.797 20.5458 12.1928 21.7632 13.9265 22.3453C14.2833 22.4642 14.8435 22.5894 15.1721 22.6207C15.5226 22.6551 15.4913 22.6019 15.5038 23.184C15.5132 23.741 15.5257 23.7817 15.7292 23.9319C15.8512 24.0227 16.1454 24.0227 16.2674 23.9319C16.4709 23.7817 16.4834 23.741 16.4928 23.1902C16.499 22.846 16.5147 22.677 16.5397 22.6613C16.5616 22.6488 16.6305 22.6363 16.693 22.6363C16.9184 22.6363 17.6663 22.4767 18.0732 22.3421C19.5847 21.8445 20.8741 20.8181 21.7128 19.4442C22.1822 18.6743 22.5359 17.6478 22.6172 16.8279C22.6517 16.4774 22.5985 16.5087 23.1806 16.4962C23.7376 16.4868 23.7783 16.4743 23.9285 16.2708C24.0193 16.1488 24.0193 15.8546 23.9285 15.7326C23.7783 15.5291 23.7376 15.5166 23.1806 15.5072C22.5985 15.4947 22.6517 15.526 22.6172 15.1755C22.5828 14.8281 22.4545 14.2679 22.3199 13.8705C21.7441 12.1806 20.5236 10.791 18.9213 10.0055C18.2828 9.69258 17.4347 9.43908 16.8276 9.38275C16.4677 9.3452 16.5053 9.40779 16.4928 8.82257C16.4834 8.26238 16.4709 8.2217 16.2737 8.07461C16.1673 7.99637 15.9201 7.97447 15.7949 8.03393ZM15.5664 11.079C15.6947 11.3074 16.0296 11.3919 16.2612 11.248C16.4396 11.1353 16.499 10.9882 16.499 10.6408V10.3498L16.7243 10.3748C17.6256 10.4843 18.5739 10.863 19.3469 11.4263C20.5705 12.3183 21.4061 13.714 21.6127 15.2005L21.6534 15.501H21.3529C21.0994 15.501 21.0337 15.5135 20.9304 15.573C20.5893 15.7639 20.5987 16.2646 20.9461 16.4398C21.04 16.4899 21.1276 16.5024 21.3592 16.5024H21.6534L21.6127 16.8029C21.2684 19.2721 19.2687 21.2718 16.7995 21.6161L16.499 21.6568V21.3626C16.499 21.131 16.4865 21.0434 16.4364 20.9495C16.2612 20.6021 15.7604 20.5927 15.5695 20.9338C15.5101 21.0371 15.4976 21.1028 15.4976 21.3563V21.6568L15.3035 21.6286C14.1769 21.4815 13.188 21.0434 12.3086 20.3048C11.2821 19.4411 10.531 18.0547 10.3714 16.7278L10.3464 16.5024H10.6374C10.869 16.5024 10.9566 16.4899 11.0505 16.4398C11.4041 16.2615 11.4041 15.742 11.0505 15.5636C10.9566 15.5135 10.869 15.501 10.6374 15.501H10.3464L10.3714 15.2757C10.531 13.9487 11.2821 12.5624 12.3086 11.6986C13.0847 11.0477 13.9829 10.6158 14.9186 10.4374C15.1095 10.3999 15.3129 10.3654 15.3724 10.3623L15.4819 10.3529L15.4976 10.6659C15.507 10.8787 15.532 11.0101 15.5664 11.079Z'
                fill='black'
              />
              <path
                d='M15.5644 14.0456C15.2202 14.1207 14.8571 14.3241 14.5911 14.5933C13.8087 15.3756 13.8025 16.6243 14.5755 17.3942C14.9573 17.7729 15.3766 17.9669 15.8867 17.9951C16.8006 18.0451 17.6393 17.463 17.9178 16.5805C18.0148 16.2707 18.0148 15.7324 17.9178 15.4226C17.6017 14.4274 16.5784 13.8265 15.5644 14.0456ZM16.472 15.1284C16.6816 15.2411 16.7787 15.3412 16.9007 15.5759C16.9696 15.7105 16.9821 15.7762 16.9821 16.0015C16.9852 16.2456 16.9758 16.2832 16.8788 16.4647C16.7599 16.6838 16.6597 16.7777 16.425 16.9028C16.2905 16.9717 16.2247 16.9842 15.9994 16.9842C15.7741 16.9842 15.7084 16.9717 15.5738 16.9028C15.3391 16.7777 15.2389 16.6838 15.12 16.4647C15.023 16.2832 15.0136 16.2456 15.0167 16.0015C15.0167 15.6886 15.0918 15.5008 15.2953 15.2974C15.6082 14.9844 16.0745 14.9187 16.472 15.1284Z'
                fill='#ffffff'
              />
            </svg>
            <p>The home and elements needed to created beatutiful ui.</p>
            <span className=' flex items-center text-2xl gap-6'>
              <AiFillFacebook className=' cursor-pointer' />
              <AiFillYoutube className=' cursor-pointer' />
              <AiFillTwitterSquare className=' cursor-pointer' />
              <AiFillInstagram className=' cursor-pointer' />
            </span>
          </span>
          <span>
            <h3 className='text-sm underline font-bold'>Company</h3>
            <ul className=' list-none text-slate-100'>
              <li className=' hover:text-green-300 cursor-pointer'>About us</li>
              <li className=' hover:text-green-300 cursor-pointer'>Careers</li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Store Locations
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>Our Blog</li>
              <li className=' hover:text-green-300 cursor-pointer'>Reviews</li>
            </ul>
          </span>
          <span>
            <h3 className='text-sm underline font-bold'>Shop</h3>
            <ul className=' list-none text-slate-100'>
              <li className=' hover:text-green-300 cursor-pointer'>
                Games & Videos
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Phones & Tablets
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Computers & Laptops
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Sport & Outdoor
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>Events</li>
            </ul>
          </span>
          <span>
            <h3 className='text-sm underline font-bold'>Support</h3>
            <ul className=' list-none text-slate-200'>
              <li className=' hover:text-green-300 cursor-pointer'>FAQ</li>
              <li className=' hover:text-green-300 cursor-pointer'>Reviews</li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Store Locations
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Contact Us
              </li>
              <li className=' hover:text-green-300 cursor-pointer'>Shipping</li>
              <li className=' hover:text-green-300 cursor-pointer'>
                Live Chat
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
