import React from "react";
import { Text, Img, Button } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="mx-auto mb-[43px] flex w-full max-w-7xl flex-col gap-14 md:p-5 sm:gap-7">
        <div className="h-px bg-white-A700" />
        <div className="flex items-center justify-between gap-5 md:flex-col">
          <div className="flex w-[30%] items-start justify-between gap-5 md:w-full">
            <div className="flex w-[59%] flex-col items-start gap-[26px]">
              <Img src="images/img_footer_logo.png" alt="footerlogo_one" className="h-[53px] w-[87%] object-cover" />
              <div className="flex gap-[11px]">
                <Button color="black_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                  <Img src="images/img_facebook.svg" />
                </Button>
                <Button color="black_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                  <Img src="images/img_twitter.svg" />
                </Button>
                <Button color="black_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                  <Img src="images/img_instagram_white_a700_48x48.svg" />
                </Button>
                <Button color="black_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                  <Img src="images/img_warning.svg" />
                </Button>
              </div>
            </div>
            <div className="h-full w-px bg-white-A700" />
          </div>
          <div className="flex w-[27%] items-center justify-between gap-5 md:w-full">
            <div className="flex flex-col items-start gap-7">
              <Text size="2xl" as="p" className="!font-medium uppercase">
                Who we are
              </Text>
              <ul className="flex flex-col items-start gap-5">
                <li>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-100">
                      Why Firsthing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-100">
                      Our Solutions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Technology" target="_blank" rel="noreferrer">
                    <Text as="p" className="!text-blue_gray-100">
                      Technology
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="!text-blue_gray-100">
                      Market Opportunity
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-[192px] w-px bg-white-A700" />
          </div>
          <div className="flex w-[18%] flex-col items-start gap-7 self-start md:w-full">
            <a href="#">
              <Text size="2xl" as="p" className="!font-medium uppercase">
                Contact us
              </Text>
            </a>
            <div className="flex items-start justify-between gap-5 self-stretch">
              <div className="flex flex-col items-start gap-4">
                <Img src="images/img_phone.svg" alt="phone_one" className="h-[20px] w-[20px]" />
                <Img src="images/img_lock.svg" alt="lock_one" className="h-[20px] w-[20px] self-end" />
              </div>
              <Text as="p" className="w-[89%] !text-blue_gray-100">
                <>
                  8080801010
                  <br />
                  <br />
                  firsting@gmail.com
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
