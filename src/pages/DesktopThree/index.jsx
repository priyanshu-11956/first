import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Text, Input, Heading, Img } from "../../components";
import Footer from "../../components/Footer";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Smart Energy Solutions - Firsthing Technologies</title>
        <meta
          name="description"
          content="Lead the way in energy efficiency with Firsthing's IoT solutions. Tap into India's growing energy market and achieve sustainability with our innovative products."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-center bg-white-A700">
        {/* header section */}
        <div className="flex h-[789px] flex-col items-center gap-[76px] self-stretch bg-[url(/public/images/img_mask_group_789x1440.png)] bg-cover bg-no-repeat py-[26px] md:h-auto md:gap-[57px] sm:gap-[38px] sm:py-5">
          <header className="flex w-[90%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
            <Img
              src="images/img_screenshot_2024_04_03_at_4_37.png"
              alt="screenshot2024"
              className="h-[75px] w-[22%] object-cover md:w-full"
            />
            <div className="mx-auto flex w-full max-w-[843px] items-center justify-center gap-10 md:flex-col">
              <ul className="flex flex-wrap gap-6">
                <li>
                  <a href="#" className="self-end">
                    <Text as="p" className="text-center !font-inter !text-black-900_01">
                      Why Firsthing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Text as="p" className="text-center !font-inter !text-black-900_01">
                      Our Solutions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Text as="p" className="text-center !font-inter !text-black-900_01">
                      Technology
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end">
                    <Text as="p" className="text-center !font-inter !text-black-900_01">
                      Market Opportunity
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Text as="p" className="text-center !font-inter !text-black-900_01">
                      Contact Us
                    </Text>
                  </a>
                </li>
              </ul>
              <Button shape="round" className="min-w-[163px] !rounded-[14px] font-inter font-bold sm:px-5">
                Request Demo
              </Button>
            </div>
          </header>

          {/* hero section */}
          <div className="container-sm mb-[357px] px-[164px] md:p-5 md:px-5">
            <div className="flex flex-col items-center gap-9">
              <Heading size="2xl" as="h1" className="text-center uppercase leading-[70px] !text-black-900_01">
                <>
                  Leading the Way in IoT-Based <br />
                  Energy Management
                </>
              </Heading>
              <Button shape="round" className="min-w-[215px] !rounded-[14px] font-inter font-bold sm:px-5">
                Explore Our Products
              </Button>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="relative mt-[-2px] h-[654px] self-stretch md:h-auto">
          <div className="flex w-full justify-center md:flex-col">
            <div className="flex flex-1 bg-white-A700 py-[163px] pl-[163px] pr-14 md:self-stretch md:p-5">
              <div className="my-[30px] flex w-[60%] flex-col items-start gap-[13px] pt-[11px] md:w-full">
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
            <div className="relative ml-[-62px] h-[654px] w-[33%] bg-teal-400 md:ml-0 md:p-5" />
          </div>
          <div className="absolute right-[20%] top-[9%] m-auto h-[456px] w-[28%] rounded-[40px] border-[0.5px] border-solid border-black-900_01" />
          <div className="absolute bottom-0 right-[16%] top-0 my-auto h-[505px] w-[31%] md:h-auto">
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
                alt="image"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[505px] w-full rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* solutions section */}
        <div className="flex flex-col items-center justify-center self-stretch bg-gray-300_01 py-[79px] md:py-5">
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
              <Img src="images/img_group_28.svg" alt="image_one" className="mt-[34px] h-[471px] w-[14px]" />
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

        {/* why choose us section */}
        <div className="relative z-[1] mt-[-2px] flex self-stretch md:flex-col">
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
        <div className="relative mt-[-2px] flex gap-px self-stretch bg-gray-100 py-20 pl-20 pr-14 md:flex-col md:p-5">
          <div className="flex w-[28%] flex-col items-end justify-center rounded-[183px] border border-solid border-black-900_04 p-11 md:w-full md:p-5">
            <Heading size="md" as="h2" className="mb-[93px] mt-[92px] w-[92%] uppercase !text-black-900_01 md:w-full">
              <>
                Our <br />
                Technology
              </>
            </Heading>
          </div>
          <div className="h-px w-[43%] bg-black-900_04 md:p-5" />
          <div className="flex flex-1 flex-col justify-center gap-[25px] rounded-[40px] bg-gray-300 p-11 md:p-5">
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
          <div className="flex flex-1 flex-col justify-center gap-7 rounded-[40px] bg-gray-300_01 p-7 md:p-5">
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

        {/* target customers section */}
        <div className="container-sm mt-[79px] flex flex-col items-center gap-12 md:p-5">
          <div className="flex w-[79%] flex-col items-center gap-1.5 md:w-full">
            <Heading size="md" as="h2" className="text-center uppercase !text-black-900_01">
              Target Customers & Industries
            </Heading>
            <Text as="p" className="text-center leading-[21px] !text-black-900_01">
              <>
                From commercial buildings and residential complexes to industrial facilities, Firsthing serves a wide
                range of sectors looking for
                <br />
                smart energy solutions.
              </>
            </Text>
          </div>
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <Img src="images/img_armalite.svg" alt="armalite_one" className="h-[32px] w-[14%] md:w-full" />
            <Img src="images/img_nickhits_1.svg" alt="nickhitsone_one" className="h-[38px] w-[13%] md:w-full" />
            <Img src="images/img_cardpm_1.svg" alt="cardpmone_one" className="h-[38px] w-[12%] md:w-full" />
            <Img src="images/img_group_45.svg" alt="image_two" className="h-[35px] w-[12%] md:w-full" />
            <Img src="images/img_vector_teal_900.svg" alt="vector_one" className="h-[32px] w-[20%] md:w-full" />
          </div>
        </div>

        {/* contact section */}
        <div className="mt-20 h-[976px] self-stretch bg-[url(/public/images/img_group_72.png)] bg-cover bg-no-repeat md:h-auto">
          <div className="bg-black-900_b2 pt-20 md:pt-5">
            <div className="flex flex-col items-center gap-[23px]">
              <div className="container-sm px-[119px] md:p-5 md:px-5">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[43%] flex-col items-start gap-[18px] md:w-full">
                    <a href="#">
                      <Heading size="md" as="h2" className="uppercase">
                        Contact Us
                      </Heading>
                    </a>
                    <Text size="2xl" as="p" className="leading-[31px]">
                      Ready to transform your energy management? Contact us today to see Firsthing in action and start
                      saving on your energy bills.
                    </Text>
                  </div>
                  <div className="flex w-[51%] flex-col items-center gap-[22px] rounded-[40px] border border-solid border-white-A700_3e bg-black-900_48 p-11 md:w-full md:p-5">
                    <div className="flex flex-col gap-3 self-stretch">
                      <div className="flex flex-col items-start gap-2.5">
                        <Text as="p">Name*</Text>
                        <Input shape="round" name="name" />
                      </div>
                      <div className="flex flex-col items-start gap-2.5">
                        <Text as="p">Email*</Text>
                        <Input shape="round" name="email" />
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <Text as="p">Message*</Text>
                        <TextArea shape="round" name="textarea" className="self-stretch" />
                      </div>
                    </div>
                    <Button shape="round" className="min-w-[162px] !rounded-[14px] font-inter font-bold sm:px-5">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>

              {/* footer section */}
              <Footer className="flex items-start justify-center self-stretch bg-gradient3 py-[37px] sm:py-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
