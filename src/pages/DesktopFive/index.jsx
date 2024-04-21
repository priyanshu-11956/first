import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, TextArea } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { securityone: "images/img_lock_white_a700_59x56.svg" },
  { securityone: "images/img_group_6_white_a700_75x51.svg" },
  { securityone: "images/img_computer_white_a700.svg" },
  { securityone: "images/img_instagram_white_a700_31x78.svg" },
  { securityone: "images/img_thermometer_white_a700.svg" },
  { securityone: "images/img_calculator.svg" },
];
const data1 = [
  {
    image: "images/img_idea_svgrepo_com_white_a700.svg",
    innovative: "Innovative Integration",
    description:
      "Firsthing integrates multiple electronic controllers and sensors into a comprehensive system that enhances accuracy and ensures energy conservation.",
  },
  {
    image: "images/img_mask_group_white_a700.svg",
    innovative: "Future-Forward",
    description:
      "Leveraging AI/ML, we aim to forecast electricity consumption, setting new standards in energy management.",
  },
];
const data2 = [
  {
    sustainability: "Sustainability Focus",
    description:
      "Aligned with global sustainability goals, Firsthing&#39;s solutions are designed to significantly reduce your carbon footprint while optimizing energy usage.",
  },
  {
    sustainability: "Market Opportunity",
    description:
      "With the energy efficiency market in India estimated at INR 150000 Crore and only 5% tapped, Firsthing is positioned to lead this untapped market potential, projected to reach 142000 Crore by 2030.",
  },
];

export default function DesktopFivePage() {
  return (
    <>
      <Helmet>
        <title>Why Smart Home Is Our Future | Firsthing Energy Solutions</title>
        <meta
          name="description"
          content="Explore the future of home automation with Firsthing's IoT-driven energy management. Simplify your home and optimize energy usage for a sustainable future."
        />
      </Helmet>

      {/* main layout section */}
      <div className="w-full bg-white-A700">
        {/* content area section */}
        <div className="flex flex-col items-center gap-[575px] md:gap-[431px] sm:gap-[287px]">
          {/* header section */}
          <div className="relative h-[5000px] self-stretch md:h-auto">
            {/* navigation bar section */}
            <div className="w-full">
              {/* hero section */}
              <div>
                {/* hero header section */}
                <div className="h-[790px] bg-[url(/public/images/img_group_116.png)] bg-cover bg-no-repeat md:h-auto">
                  {/* logo and menu section */}
                  <div className="h-[790px] bg-[url(/public/images/img_group_53.png)] bg-cover bg-no-repeat md:h-auto">
                    {/* main navigation section */}
                    <div className="bg-gradient9 py-5">
                      {/* hero content section */}
                      <div className="mb-[104px] flex flex-col items-center gap-[107px] md:gap-20 sm:gap-[53px]">
                        {/* hero title section */}
                        <header className="flex flex-col items-center gap-6 self-stretch">
                          {/* hero buttons section */}
                          <div className="container-md flex items-center justify-between gap-5 md:flex-col md:p-5">
                            <Img
                              src="images/img_screenshot_2024_04_03_at_4_37.png"
                              alt="screenshot2024"
                              className="h-[61px] w-[18%] object-cover md:w-full"
                            />
                            <div className="flex items-center gap-10 md:flex-col">
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
                              <Button
                                color="cyan_400"
                                shape="round"
                                className="min-w-[163px] !rounded-[14px] font-inter font-bold sm:px-5"
                              >
                                Request Demo
                              </Button>
                            </div>
                          </div>
                          <Img
                            src="images/img_navigation_cyan_900_01.svg"
                            alt="navigation_one"
                            className="h-px w-full"
                          />
                        </header>

                        {/* hero icons section */}
                        <div className="mx-auto flex w-full max-w-[1291px] items-start justify-between gap-5 md:flex-col md:p-5">
                          <div className="mt-[11px] flex w-[60%] items-start justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[68%] flex-col items-start gap-[60px] md:w-full sm:gap-[30px]">
                              <div className="flex flex-col gap-6 self-stretch">
                                <Heading size="2xl" as="h1" className="!font-raleway leading-[70px]">
                                  <>
                                    Pioneering
                                    <br />
                                    IoT-Driven Energy Management
                                  </>
                                </Heading>
                                <Text size="xl" as="p" className="w-[92%] leading-[31px] md:w-full">
                                  At Firsthing, we pioneer IoT-based energy management solutions to empower businesses,
                                  particularly in co-living spaces and real estate.
                                </Text>
                              </div>
                              <Button
                                color="cyan_400"
                                shape="round"
                                className="min-w-[215px] !rounded-[14px] font-inter font-bold sm:px-5"
                              >
                                Explore Our Products
                              </Button>
                            </div>
                            <div className="flex items-start">
                              <Button
                                color="cyan_400_01"
                                size="xs"
                                shape="circle"
                                className="w-[20px] !rounded-[10px] border-[0.5px] border-solid border-cyan-A100"
                              >
                                <Img src="images/img_search.svg" />
                              </Button>
                              <Button
                                color="cyan_400_01"
                                size="xs"
                                shape="circle"
                                className="ml-[19px] mt-24 w-[20px] !rounded-[10px] border-[0.5px] border-solid border-cyan-A100"
                              >
                                <Img src="images/img_lock_white_a700.svg" />
                              </Button>
                              <Button
                                color="cyan_400_01"
                                size="sm"
                                shape="circle"
                                className="mb-[257px] ml-[34px] w-[23px] !rounded-[11px] border-[0.5px] border-solid border-cyan-A100"
                              >
                                <Img src="images/img_group_6_white_a700_23x23.svg" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex w-[16%] items-start justify-between gap-5 md:w-full">
                            <Button
                              color="cyan_400_01"
                              size="sm"
                              shape="circle"
                              className="w-[23px] !rounded-[11px] border-[0.5px] border-solid border-cyan-A100"
                            >
                              <Img src="images/img_computer.svg" />
                            </Button>
                            <div className="mt-[164px] flex w-[43%] items-start justify-between gap-5">
                              <Button
                                color="cyan_400_01"
                                size="sm"
                                shape="circle"
                                className="mb-[97px] w-[23px] !rounded-[11px] border-[0.5px] border-solid border-cyan-A100"
                              >
                                <Img src="images/img_instagram_white_a700.svg" />
                              </Button>
                              <Button
                                color="cyan_400_01"
                                size="sm"
                                shape="circle"
                                className="w-[23px] !rounded-[11px] border-[0.5px] border-solid border-cyan-A100"
                              >
                                <Img src="images/img_group_8.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* features section */}
                <div className="relative mt-[-15px] bg-gradient8 py-2.5">
                  {/* features intro section */}
                  <div className="mb-[57px] flex flex-col items-center gap-[75px] md:gap-14 sm:gap-[37px]">
                    <div className="h-px w-full self-stretch bg-cyan-900_01" />

                    {/* features list section */}
                    <div className="relative h-[1656px] self-stretch">
                      <div className="absolute left-0 right-0 top-[30%] m-auto h-[409px] w-[28%] rounded-[204px] bg-blue_gray-900_05 blur-[194.00px] backdrop-opacity-[0.5]" />
                      <div className="absolute left-[29.00px] top-[26%] m-auto flex w-[54%] items-start justify-between gap-5 sm:relative sm:flex-col">
                        <div className="relative h-[452px] w-[53%] sm:w-full sm:p-5">
                          <Img
                            src="images/img_vector_blue_gray_900_03.svg"
                            alt="vector_one"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[452px] w-full rounded-[50px]"
                          />
                          <div className="absolute left-[0.00px] top-[9%] m-auto flex w-[69%] flex-col items-start gap-[75px] md:gap-14 sm:gap-[37px]">
                            <Img src="images/img_star_2.svg" alt="image" className="h-[20px] w-[19px] self-end" />
                            <Img src="images/img_star_1.svg" alt="image_one" className="h-[20px] w-[19px]" />
                          </div>
                        </div>
                        <div className="mt-[82px] flex w-[14%] items-start justify-between gap-5 sm:w-full sm:p-5">
                          <Img
                            src="images/img_star_5.svg"
                            alt="image_two"
                            className="h-[18px] w-[18px] rotate-[-70deg]"
                          />
                          <Img src="images/img_star_4.svg" alt="image_three" className="mt-[587px] h-[20px] w-[19px]" />
                        </div>
                      </div>
                      <Heading
                        size="lg"
                        as="h2"
                        className="absolute left-[9%] top-[9%] m-auto w-[24%] !font-raleway !font-semibold"
                      >
                        <>
                          Simplify your
                          <br />
                          home with these
                          <br />
                          feature
                        </>
                      </Heading>
                      <Heading
                        size="lg"
                        as="h3"
                        className="absolute bottom-[36%] left-0 right-0 m-auto w-max text-center !font-raleway !font-semibold"
                      >
                        Why smart home is our future
                      </Heading>
                      <Img
                        src="images/img_ellipse_36.png"
                        alt="image_four"
                        className="absolute right-[0.00px] top-[19%] m-auto h-[384px] w-[24%] object-cover"
                      />
                      <div className="container-sm absolute left-0 right-0 top-[34%] my-auto flex justify-center px-[99px] md:p-5 md:px-5">
                        <div className="flex w-full justify-center rounded-[40px] border-[0.5px] border-dashed border-cyan-900_01 bg-gray-900_7f px-14 py-[82px] md:p-5">
                          <div className="mb-[17px] flex w-[89%] flex-col items-center gap-[23px] md:w-full">
                            <Heading size="lg" as="h4" className="text-center !font-raleway !font-semibold">
                              About Us
                            </Heading>
                            <Text size="2xl" as="p" className="text-center leading-[31px]">
                              At Firsthing, we pioneer IoT-based energy management solutions to empower businesses,
                              particularly in co-living spaces and real estate, with the tools to achieve unparalleled
                              energy efficiency and sustainability.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_37.png"
                        alt="image_five"
                        className="absolute bottom-[3%] left-[0.00px] m-auto h-[759px] w-[27%] object-cover"
                      />
                      <div className="absolute bottom-[7.00px] right-[0.00px] m-auto flex w-[28%] flex-col items-end justify-center rounded-[50%] bg-blue_gray-900_05 py-[78px] blur-[194.00px] backdrop-opacity-[0.5] md:py-5">
                        <div className="relative mt-[30px] h-[372px] w-[50%] md:h-auto">
                          <div className="relative h-[372px] w-full overflow-auto md:h-auto">
                            <CircularProgressbar
                              strokeWidth={13}
                              value={50}
                              counterClockwise
                              styles={{ trail: { stroke: "#1eb9c9" }, path: { strokeLinecap: "square" } }}
                              className="h-[372px] w-full shadow-bs"
                            />
                            <div className="absolute bottom-0 right-[-123.35px] top-0 my-auto flex h-max w-full items-center justify-center">
                              <div className="relative z-[1] mb-[106px] h-[44px] w-[44px] self-end rounded-[22px] bg-blue_gray-100_01 shadow-md" />
                              <div className="h-[283px] flex-1 rounded-[50%] bg-blue_gray-900_01" />
                            </div>
                          </div>
                          <div className="absolute right-[30%] top-[28.52px] m-auto flex flex-col items-start gap-[270px] md:gap-[202px] sm:gap-[135px]">
                            <Text size="md" as="p" className="self-end text-center !text-indigo-200">
                              100%
                            </Text>
                            <Text size="md" as="p" className="text-center !text-indigo-50">
                              50%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-[9%] top-[0.00px] m-auto flex w-[50%] rotate-[180deg] items-center justify-between gap-5 rounded-[22px] border border-solid border-cyan-900 bg-gray-900_02 p-[19px] sm:relative sm:flex-col">
                        <div className="flex w-[2%] rotate-[90deg] flex-col gap-[7px] sm:w-full">
                          <div className="h-[12px] w-[11px] rounded-[50%] border border-solid border-cyan-900 bg-gray-900_02" />
                          <div className="h-[44px] w-[9px] rounded border border-solid border-cyan-900 bg-gray-900_02" />
                        </div>
                        <div className="my-[21px] mr-[30px] grid w-[89%] grid-cols-3 gap-9 md:mr-0 md:grid-cols-2 sm:grid-cols-1">
                          {data.map((d, index) => (
                            <div
                              key={"desktopfive" + index}
                              className="flex w-full flex-col items-center justify-center gap-[17px] rounded-[30px] bg-blue_gray-900 p-[35px] sm:p-5"
                            >
                              <Img src={d.securityone} alt="security_one" className="h-[59px] w-[57%]" />
                              <Text as="p" className="text-center !font-medium">
                                Security
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Img
                        src="images/img_vector_5.png"
                        alt="vectorfive_one"
                        className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[524px] w-[48%] object-cover"
                      />
                      <div className="absolute bottom-[10.00px] left-[0.00px] m-auto flex w-[72%] items-center md:relative md:flex-col">
                        <Img
                          src="images/img_vector_6.png"
                          alt="vectorsix_one"
                          className="h-[524px] w-[62%] object-cover md:w-full"
                        />
                        <div className="relative ml-[-169px] flex w-[38%] justify-center rounded-[20px] bg-indigo-900 p-10 md:ml-0 md:w-full md:p-5">
                          <Text size="2xl" as="p" className="my-[5px] text-center leading-[31px]">
                            At Firsthing, we pioneer IoT-based energy management solutions to empower businesses,
                            particularly in co-living spaces and real estate, with the tools to achieve unparalleled
                            energy efficiency and sustainability.
                          </Text>
                        </div>
                      </div>
                    </div>

                    {/* about section */}
                    <div className="flex flex-col items-center gap-[79px] self-stretch md:gap-[59px] sm:gap-[39px]">
                      <div className="h-px w-full self-stretch bg-cyan-900_01" />

                      {/* about content section */}
                      <div className="container-sm md:p-5">
                        <div className="flex items-start justify-between gap-5 md:flex-col">
                          <div className="mt-2 flex w-[44%] flex-col gap-[30px] md:w-full">
                            <div className="flex pt-1">
                              <Heading size="lg" as="h5" className="text-center !font-raleway">
                                Why Firsthing
                              </Heading>
                            </div>
                            <div className="flex flex-col gap-[39px] pr-7 sm:pr-5">
                              {data2.map((d, index) => (
                                <div
                                  key={"listsustainabil" + index}
                                  className="flex w-[86%] flex-col items-start gap-2.5 md:w-full"
                                >
                                  <Heading as="h6">{d.sustainability}</Heading>
                                  <Text as="p" className="leading-[21px]">
                                    {d.description}
                                  </Text>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="relative h-[429px] w-[44%] md:w-full">
                            <div className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[378px] w-[85%] rounded-[31px] border border-solid border-white-A700" />
                            <Img
                              src="images/img_man_using_smart_398x328.png"
                              alt="manusingsmart"
                              className="absolute right-[30.00px] top-[0.00px] m-auto h-[398px] w-[59%] rounded-[40px] object-cover"
                            />
                            <Img
                              src="images/img_man_using_smart_398x170.png"
                              alt="manusingsmart"
                              className="absolute left-[0.00px] top-[0.00px] m-auto h-[398px] w-[30%] rounded-[40px] object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-full self-stretch bg-cyan-900_01" />
                    </div>

                    {/* technology section */}
                    <div className="container-sm flex md:p-5">
                      <div className="flex w-full items-center md:flex-col">
                        <div className="flex w-[29%] flex-col items-center justify-center rounded-[183px] border border-solid border-cyan-400 px-14 py-[60px] md:w-full md:p-5">
                          <Heading
                            size="lg"
                            as="h1"
                            className="mb-[72px] mt-[71px] w-[97%] !font-raleway !text-cyan-400 md:w-full"
                          >
                            <>
                              Our <br />
                              Technology
                            </>
                          </Heading>
                        </div>
                        <div className="relative h-[390px] flex-1 md:w-full md:flex-none md:self-stretch">
                          <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-px w-[61%] bg-cyan-400" />
                          <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex w-[92%] gap-10 md:relative md:flex-col">
                            {data1.map((d, index) => (
                              <div
                                key={"listinnovative" + index}
                                className="flex w-full flex-col justify-center gap-[25px] rounded-[40px] bg-indigo-900 p-11 md:p-5"
                              >
                                <Img src={d.image} alt="image" className="mt-4 h-[120px] w-[120px]" />
                                <div className="mb-[15px] flex flex-col items-start gap-2.5">
                                  <Heading as="h4">{d.innovative}</Heading>
                                  <Text as="p" className="leading-[21px]">
                                    {d.description}
                                  </Text>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px w-full self-stretch bg-cyan-900_01" />

                    {/* target customers section */}
                    <div className="container-sm flex flex-col items-center gap-[43px] md:p-5">
                      <div className="flex w-[79%] flex-col items-center pt-1 md:w-full">
                        <Heading size="lg" as="h1" className="text-center !font-raleway">
                          Target Customers & Industries
                        </Heading>
                        <Text as="p" className="text-center leading-[21px]">
                          <>
                            From commercial buildings and residential complexes to industrial facilities, Firsthing
                            serves a wide range of sectors looking for
                            <br />
                            smart energy solutions.
                          </>
                        </Text>
                      </div>
                      <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                        <Img
                          src="images/img_armalite_white_a700.svg"
                          alt="armalite_one"
                          className="h-[32px] w-[14%] md:w-full"
                        />
                        <Img
                          src="images/img_nickhits_1.svg"
                          alt="nickhitsone_one"
                          className="h-[38px] w-[13%] md:w-full"
                        />
                        <Img
                          src="images/img_cardpm_1_white_a700.svg"
                          alt="cardpmone_one"
                          className="h-[38px] w-[12%] md:w-full"
                        />
                        <Img
                          src="images/img_group_45_red_800.svg"
                          alt="image_six"
                          className="h-[35px] w-[12%] md:w-full"
                        />
                        <Img
                          src="images/img_vector_white_a700.png"
                          alt="vector_three"
                          className="h-[32px] w-[20%] object-cover md:w-full"
                        />
                      </div>
                    </div>

                    {/* contact section */}
                    <div className="container-sm px-[131px] md:p-5 md:px-5">
                      <div className="gray_500_6b_gray_500_66_border flex flex-col items-center rounded-[40px] border border-solid p-10 shadow-xs sm:p-5">
                        <a href="#">
                          <Heading size="lg" as="h1" className="text-center !font-raleway">
                            Contact Us
                          </Heading>
                        </a>
                        <div className="mt-[29px] flex w-[94%] gap-7 md:w-full md:flex-col">
                          <div className="w-full pb-[51px] pl-[21px] pr-[35px] pt-1 text-left text-base text-white-A700 md:pb-5 sm:px-5">
                            Name*
                          </div>
                          <div className="w-full pb-[51px] pl-[21px] pr-[35px] pt-1 text-left text-base text-white-A700 md:pb-5 sm:px-5">
                            Email*
                          </div>
                        </div>
                        <TextArea
                          size="sm"
                          name="input_one"
                          placeholder={`Message*`}
                          className="mt-[18px] w-[94%] text-white-A700 sm:px-5 sm:pb-5"
                        />
                        <Button
                          color="cyan_400"
                          shape="round"
                          className="mt-10 min-w-[242px] !rounded-[14px] font-inter font-bold sm:px-5"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>

                    {/* footer section */}
                    <footer className="flex flex-col items-center gap-[55px] self-stretch sm:gap-[27px]">
                      <div className="h-px w-full self-stretch bg-cyan-900_01" />
                      <div className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
                        <div className="flex w-[18%] flex-col items-start gap-[26px] md:w-full">
                          <Img
                            src="images/img_footer_logo.png"
                            alt="footerlogo_one"
                            className="h-[53px] w-[87%] object-cover"
                          />
                          <div className="flex gap-[11px]">
                            <Button color="indigo_900_01" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                              <Img src="images/img_facebook.svg" />
                            </Button>
                            <Button color="indigo_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                              <Img src="images/img_twitter.svg" />
                            </Button>
                            <Button color="indigo_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                              <Img src="images/img_instagram_white_a700_48x48.svg" />
                            </Button>
                            <Button color="indigo_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
                              <Img src="images/img_warning.svg" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-[26px]">
                          <Heading size="s" as="h4" className="!font-raleway">
                            Who we are
                          </Heading>
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
                              <a href="#">
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
                        <div className="flex w-[18%] flex-col items-start gap-[26px] md:w-full">
                          <a href="#">
                            <Heading size="s" as="h4" className="!font-raleway">
                              Contact us
                            </Heading>
                          </a>
                          <div className="flex items-start justify-between gap-5 self-stretch">
                            <div className="flex flex-col items-start gap-4">
                              <Img src="images/img_phone.svg" alt="phone_one" className="h-[20px] w-[20px]" />
                              <Img src="images/img_lock.svg" alt="lock_three" className="h-[20px] w-[20px] self-end" />
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
                    </footer>
                  </div>
                </div>
              </div>

              {/* copyright section */}
              <div className="relative z-[2] mt-[-8px] flex justify-center bg-blue_gray-900_04 py-4">
                <div className="container-sm flex justify-center self-end px-[516px] md:p-5 md:px-5">
                  <Text size="s" as="p" className="!text-blue_gray-100">
                    ©copyright@firsthing.com. All Right Reserved.
                  </Text>
                </div>
              </div>
            </div>

            {/* about aside section */}
            <div className="absolute bottom-[23%] left-0 right-0 z-[3] m-auto flex w-full flex-col items-center gap-[1286px] md:gap-[964px] sm:gap-[643px]">
              <div className="flex flex-col items-center gap-[199px] self-stretch md:gap-[149px] sm:gap-[99px]">
                <div className="container-sm flex flex-col items-end pl-14 pr-[252px] md:p-5 md:px-5">
                  <div className="flex w-[72%] flex-col items-start gap-8 pt-1 md:w-full">
                    <Heading size="lg" as="h1" className="text-center !font-raleway !text-black-900_01">
                      About Firsthing
                    </Heading>
                    <Text size="xl" as="p" className="leading-[31px] !text-black-900_01">
                      At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly
                      in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and
                      sustainability.
                    </Text>
                    <Text size="xl" as="p" className="leading-[31px] !text-black-900_01">
                      At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly
                      in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and
                      sustainability.
                    </Text>
                  </div>
                </div>
                <Img src="images/img_group_102.svg" alt="image_seven" className="h-[506px] w-full md:h-auto" />
              </div>
              <div className="container-sm flex flex-col items-start pl-[603px] pr-14 md:p-5 md:px-5">
                <Img src="images/img_vector.svg" alt="vector_five" className="h-[39px] w-[40px]" />
              </div>
            </div>
          </div>

          {/* decorative image section */}
          <div className="container-sm flex flex-col items-start pl-[367px] pr-14 md:p-5 md:px-5">
            <Img src="images/img_vector.svg" alt="vector_seven" className="h-[39px] w-[40px]" />
          </div>
        </div>
      </div>
    </>
  );
}
