import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Energy Management Solutions - Firsthing Technologies</title>
        <meta
          name="description"
          content="Discover Firsthing's IoT-based energy management solutions for real estate and co-living spaces. Save up to 50% on electricity with EnergiTrack's smart monitoring and control."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-A700 pb-[529px] md:pb-5">
        {/* header section */}
        <div className="h-[774px] bg-[url(/public/images/img_group_61.png)] bg-cover bg-no-repeat md:h-auto">
          <div className="flex flex-col items-start self-end">
            <header className="flex items-start justify-between gap-5 self-stretch bg-gradient1 p-[38px] md:flex-col sm:p-5">
              <Img
                src="images/img_header_logo.png"
                alt="headerlogo_one"
                className="mb-[41px] ml-7 h-[64px] w-[19%] object-cover md:ml-0 md:w-full"
              />
              <div className="mr-[42px] mt-1.5 flex items-center gap-[47px] md:mr-0 md:flex-col">
                <ul className="flex flex-wrap gap-6">
                  <li>
                    <a href="#" className="self-end">
                      <Text as="p" className="text-center !font-inter">
                        Why Firsthing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="text-center !font-inter">
                        Our Solutions
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-end">
                      <Text as="p" className="text-center !font-inter">
                        Technology
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-end">
                      <Text as="p" className="text-center !font-inter">
                        Market Opportunity
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="text-center !font-inter">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
                <Button color="green_400" shape="round" className="min-w-[163px] font-inter font-bold sm:px-5">
                  Request Demo
                </Button>
              </div>
            </header>

            {/* hero section */}
            <div className="flex w-[93%] items-start justify-between gap-5 md:w-full md:flex-col md:p-5">
              <div className="flex w-[75%] items-center justify-center md:w-full md:flex-col">
                <div className="flex flex-1 justify-center bg-gradient2 px-14 py-[95px] md:self-stretch md:p-5">
                  <div className="mb-[339px] flex w-[84%] flex-col items-start gap-[46px] md:w-full">
                    <Heading size="xl" as="h1" className="!font-kaiseidecol leading-[73px]">
                      <>
                        Leading the Way in IoT-
                        <br />
                        Based Energy Management
                      </>
                    </Heading>
                    <Button color="green_400" shape="round" className="min-w-[215px] font-inter font-bold sm:px-5">
                      Explore Our Products
                    </Button>
                  </div>
                </div>
                <div className="mb-[268px] flex w-[8%] flex-col items-center justify-center self-end rounded-[40px] border-2 border-solid border-white-A700_87 p-[11px] opacity-0.5 md:w-full">
                  <Img src="images/img_group_8.svg" alt="image" className="h-[54px] w-[55%]" />
                </div>
              </div>
              <div className="mt-[21px] flex w-[14%] items-start justify-center gap-5 md:w-full">
                <div className="flex flex-col items-center justify-center rounded-[40px] border-2 border-solid border-white-A700_87 p-4 opacity-0.5">
                  <Img src="images/img_computer.svg" alt="computer_one" className="mt-1.5 h-[36px]" />
                </div>
                <div className="mb-[169px] flex w-full flex-col gap-[132px] md:gap-[99px] sm:gap-[66px]">
                  <div className="rounded-[40px] border-2 border-solid border-white-A700 px-[18px] pb-[18px]">
                    <Img src="images/img_user.svg" alt="user_one" className="h-[61px] w-full md:h-auto" />
                  </div>
                  <div className="rounded-[40px] border-2 border-solid border-white-A700_87 p-2.5 opacity-0.5">
                    <Img
                      src="images/img_instagram.svg"
                      alt="instagram_one"
                      className="mb-[15px] mt-3.5 h-[27px] w-full md:h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="relative h-[654px] md:h-auto">
          <div className="flex w-full justify-center md:flex-col">
            <div className="flex flex-1 bg-white-A700 py-36 pl-36 pr-14 md:self-stretch md:p-5">
              <div className="my-[49px] flex w-[59%] flex-col items-start gap-[13px] pt-[11px] md:w-full">
                <Heading size="md" as="h2" className="text-center uppercase !text-black-900_01">
                  About Firsthing
                </Heading>
                <Text size="2xl" as="p" className="leading-[31px] !text-black-900_01">
                  At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in
                  co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and
                  sustainability.
                </Text>
              </div>
            </div>
            <div className="relative ml-[-62px] h-[654px] w-[33%] bg-green-400 md:ml-0 md:p-5" />
          </div>
          <div className="absolute right-[23%] top-[9%] m-auto h-[456px] w-[28%] rounded-[40px] border-[0.5px] border-solid border-black-900_01" />
          <div className="absolute bottom-0 right-[18%] top-0 my-auto h-[505px] w-[31%] md:h-auto">
            <Img
              src="images/img_giant_office_buildings.png"
              alt="giantoffice_one"
              className="h-[505px] w-full rounded-[40px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[505px] w-full md:h-auto">
              <Img
                src="images/img_pexels_italo_crespi_12919801.png"
                alt="pexelsitalo_one"
                className="h-[505px] w-full rounded-[40px] object-cover"
              />
              <Img
                src="images/img_rectangle_48.png"
                alt="image_one"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[505px] w-full rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* solutions section */}
        <div className="flex flex-col items-center justify-center bg-gray-300_01 py-[79px] md:py-5">
          <div className="container-sm flex flex-col items-center gap-[37px] px-[114px] md:p-5 md:px-5">
            <div className="flex w-[96%] flex-col items-center gap-1.5 md:w-full">
              <Heading size="md" as="h2" className="text-center uppercase !text-black-900_01">
                Our Solutions
              </Heading>
              <Text as="p" className="text-center leading-[21px] !text-black-900_01">
                Our flagship product, EnergiTrack, harnesses the power of RetroFit Smart Switch Modules and Motion
                Sensors, combined with our cuttingedge software for real-time monitoring and control, saving up to 50%
                of electricity.
              </Text>
            </div>
            <div className="relative h-[558px] self-stretch md:h-auto">
              <Img src="images/img_group_28.svg" alt="image_two" className="mt-[34px] h-[471px] w-[14px]" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
                <div className="flex w-[36%] flex-col gap-[53px] md:w-full sm:gap-[26px]">
                  <div className="flex items-center">
                    <div className="flex-1 rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3">
                      <Img
                        src="images/img_person_using_sm.png"
                        alt="personusingsm"
                        className="h-[222px] w-[222px] rounded-[50%]"
                      />
                    </div>
                    <div className="h-px w-[34%] rotate-[-90deg] bg-black-900_01" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3">
                      <div className="relative h-[222px] md:h-auto">
                        <Img
                          src="images/img_representation.png"
                          alt="representation"
                          className="h-[222px] w-[222px] rounded-[50%]"
                        />
                        <Img
                          src="images/img_standard_qualit.png"
                          alt="standardqualit"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[222px] w-[222px] rounded-[50%]"
                        />
                      </div>
                    </div>
                    <div className="h-px w-[34%] rotate-[-90deg] bg-black-900_01" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[43px] md:self-stretch">
                  <Heading as="h3" className="ml-20 !text-black-900_01 md:ml-0">
                    Energy Track
                  </Heading>
                  <div className="flex items-center self-stretch md:flex-col">
                    <div className="flex flex-1 flex-col gap-[60px] md:self-stretch sm:gap-[30px]">
                      <div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[21px] sm:p-5">
                        <Text as="p" className="w-[95%] text-center !font-medium leading-[18px] !text-black-900_01">
                          RetroFit Smart Switch Modules for comprehensive monitoring
                        </Text>
                      </div>
                      <div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[23px] sm:p-5">
                        <Text as="p" className="w-[97%] text-center !font-medium leading-[18px] !text-black-900_01">
                          Motion sensors for automated energy savings.
                        </Text>
                      </div>
                      <div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[15px]">
                        <Text as="p" className="w-[98%] text-center !font-medium leading-[18px] !text-black-900_01">
                          Real-time monitoring dashboards for detailed consumption insights.
                        </Text>
                      </div>
                    </div>
                    <div className="h-px w-[19%] rotate-[90deg] bg-black-900_01" />
                    <div className="w-[36%] rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3 md:w-full">
                      <Img
                        src="images/img_full_shot_man_d.png"
                        alt="fullshotmand"
                        className="h-[222px] w-[222px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <Button
                    color="green_400"
                    shape="round"
                    className="ml-[7px] min-w-[287px] !rounded-[14px] font-inter font-bold md:ml-0 sm:px-5"
                  >
                    Learn More about Energi Track
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* why firsthing section */}
        <div className="relative z-[1] mt-[-2px] flex md:flex-col">
          <div className="relative z-[2] flex w-[41%] justify-center bg-gradient px-14 py-[79px] md:w-full md:p-5">
            <div className="flex w-[77%] flex-col items-start gap-[30px] md:w-full">
              <Heading size="md" as="h2" className="text-center uppercase">
                Why Firsthing
              </Heading>
              <div className="flex flex-col items-start gap-[43px] self-stretch">
                <div className="flex w-[81%] flex-col items-start gap-2.5 md:w-full">
                  <Heading as="h3">Sustainability Focus</Heading>
                  <Text as="p" className="leading-[21px]">
                    Aligned with global sustainability goals, Firsthing&#39;s solutions are designed to significantly
                    reduce your carbon footprint while optimizing energy usage.
                  </Text>
                </div>
                <div className="h-px w-full self-stretch bg-white-A700" />
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <Heading as="h4">Market Opportunity</Heading>
                  <Text as="p" className="leading-[21px]">
                    With the energy efficiency market in India estimated at INR 150000 Crore and only 5% tapped,
                    Firsthing is positioned to lead this untapped market potential, projected to reach 142000 Crore by
                    2030.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-[-597px] h-[537px] flex-1 bg-[url(/public/images/img_mask_group.png)] bg-cover bg-no-repeat md:ml-0 md:h-auto md:self-stretch md:p-5">
            <Img
              src="images/img_man_using_smart.png"
              alt="manusingsmart"
              className="h-[537px] w-full object-cover md:h-auto"
            />
          </div>
        </div>

        {/* technology section */}
        <div className="flex gap-10 bg-gray-100 py-20 pl-20 pr-14 md:flex-col md:p-5">
          <div className="flex w-full rounded-[40px] bg-green-400 px-14 py-[62px] md:p-5">
            <Heading size="md" as="h2" className="my-[86px] w-[90%] uppercase">
              <>
                Our <br />
                Technology
              </>
            </Heading>
          </div>
          <div className="flex w-full flex-col justify-center gap-[25px] rounded-[40px] bg-gray-300 p-11 md:p-5">
            <Img src="images/img_idea_svgrepo_com.svg" alt="ideasvgrepo_one" className="mt-4 h-[120px] w-[120px]" />
            <div className="mb-[15px] flex flex-col items-start gap-2.5">
              <Heading as="h2" className="!text-black-900_01">
                Innovative Integration
              </Heading>
              <Text as="p" className="leading-[21px] !text-black-900_01">
                Firsthing integrates multiple electronic controllers and sensors into a comprehensive system that
                enhances accuracy and ensures energy conservation.
              </Text>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-7 rounded-[40px] bg-gray-300_01 p-7 md:p-5">
            <Img
              src="images/img_mask_group_black_900_04.svg"
              alt="image"
              className="ml-4 mt-[33px] h-[120px] w-[120px] md:ml-0"
            />
            <div className="mb-8 ml-4 flex flex-col items-start gap-[13px] md:ml-0">
              <Heading as="h2" className="!text-black-900_01">
                Future-Forward
              </Heading>
              <Text as="p" className="leading-[21px] !text-black-900_01">
                Leveraging AI/ML, we aim to forecast electricity consumption, setting new standards in energy
                management.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
