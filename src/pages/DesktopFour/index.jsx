
  import React from "react";
import { Helmet } from 'react-helmet';
  import { Text, Img, Heading, Button, TextArea, Input } from "../../components"

  
 const data = [{"image":"images/img_idea_svgrepo_com.svg","innovative":"Innovative Integration","description":"Firsthing integrates multiple electronic controllers and sensors into a comprehensive system that enhances accuracy and ensures energy conservation."},{"image":"images/img_mask_group_black_900_04.svg","innovative":"Future-Forward","description":"Leveraging AI/ML, we aim to forecast electricity consumption, setting new standards in energy management."}]
 const data1 = [{"securityone":"images/img_lock_white_a700.svg","securitytwo":"Security"},{"securityone":"images/img_group_6_white_a700.svg","securitytwo":"Light"},{"securityone":"images/img_computer.svg","securitytwo":"TV"},{"securityone":"images/img_instagram.svg","securitytwo":"AC"},{"securityone":"images/img_thermometer.svg","securitytwo":"Heating"},{"securityone":"images/img_group_8.svg","securitytwo":"Fridge"}]
  
  
  
  
  export default function DesktopFourPage(){

    

    

    return (
      <>
        <Helmet>
          <title>Pioneering IoT-Driven Energy Management Solutions | Firsthing</title>
          <meta name="description" content="Discover Firsthing's IoT-based energy management solutions for co-living spaces and real estate. Achieve energy efficiency with EnergiTrack and smart technology." />
        </Helmet> 
        

{/* main layout section */}<div className="w-full bg-white-A700">
<div className="flex flex-col items-center">


{/* navigation section */}<div className="self-stretch">


{/* logo section */}<div className="h-[709px] bg-gradient6" />


{/* hero section */}<div className="relative mt-[-709px]">


{/* feature highlights section */}<div>


{/* header menu section */}<div className="h-[787px] bg-[url(/public/images/img_group_111.png)] bg-cover bg-no-repeat md:h-auto">


{/* hero image section */}<div className="h-[787px] bg-[url(/public/images/img_group_44.png)] bg-cover bg-no-repeat md:h-auto">


{/* hero content section */}<div className="bg-gradient7 pb-[102px] md:pb-5">


{/* product features section */}<div className="flex flex-col items-center gap-[41px]">


{/* product benefits section */}<div className="relative h-[182px] self-stretch bg-gradient5 pb-[51px] md:h-auto md:pb-5">


{/* call to action section */}<header className="container-md mt-5 flex items-center justify-between gap-5 md:flex-col md:p-5">


{/* main navigation section */}<Img src="images/img_screenshot_2024_04_03_at_4_37.png" alt="screenshot2024" className="h-[61px] w-[18%] object-cover md:w-full" />


{/* navigation menu section */}<div className="flex items-center gap-10 md:flex-col">


{/* navigation links section */}<ul className="flex flex-wrap gap-6">
<li>
<a href="#" className="self-end">


{/* why firsthing link section */}<Text as="p" className="text-center !font-inter">
Why Firsthing</Text>
</a>
</li>
<li>
<a href="#" className="self-start">


{/* our solutions link section */}<Text as="p" className="text-center !font-inter">
Our Solutions</Text>
</a>
</li>
<li>
<a href="#" className="self-end">


{/* technology link section */}<Text as="p" className="text-center !font-inter">
Technology</Text>
</a>
</li>
<li>
<a href="#" className="self-end">


{/* market opportunity link section */}<Text as="p" className="text-center !font-inter">
Market Opportunity</Text>
</a>
</li>
<li>
<a href="#" className="self-start">


{/* contact us link section */}<Text as="p" className="text-center !font-inter">
Contact Us</Text>
</a>
</li>
</ul>


{/* request demo button section */}<Button shape="round" className="min-w-[163px] !rounded-[14px] font-inter font-bold sm:px-5">
Request Demo</Button>
</div>
</header>


{/* mobile navigation icon section */}<Img src="images/img_navigation.svg" alt="navigation_one" className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[131px] w-full" />
</div>


{/* hero title section */}<div className="container-sm flex flex-col items-start px-[30px] md:p-5 sm:px-5">


{/* hero description section */}<div className="flex w-[90%] items-center justify-between gap-5 md:w-full md:flex-col">


{/* hero cta section */}<div className="flex w-[66%] flex-col items-start gap-[50px] md:w-full">


{/* hero heading section */}<div className="flex flex-col gap-6 self-stretch">


{/* hero subheading section */}<Heading size="2xl" as="h1" className="!font-raleway leading-[70px]">
Pioneering IoT-Driven Energy Management</Heading>


{/* hero text section */}<Text size="xl" as="p" className="w-[96%] leading-[31px] md:w-full">
At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and real estate.</Text>
</div>


{/* explore products button section */}<Button shape="round" className="min-w-[215px] !rounded-[14px] font-inter font-bold sm:px-5">
Explore Our Products</Button>
</div>


{/* benefits grid section */}<div className="flex w-[22%] flex-col items-center rounded-[25px] border border-solid border-white-A700 bg-black-900_4c p-[17px] md:w-full">


{/* benefits row section */}<div className="flex w-[26%] items-center gap-1.5 md:w-full">


{/* benefit item view one section */}<div className="h-[10px] w-[10px] rounded-[5px] border border-solid border-white-A700" />


{/* benefit item view two section */}<div className="h-[9px] w-[36px] flex-1 rounded border border-solid border-white-A700" />
</div>


{/* benefits grid section */}<div className="mt-[54px] grid w-[89%] grid-cols-2 justify-center gap-[35px] sm:grid-cols-1">
{data1.map((d,index) => (

{/* benefit column one section */}<div key={"desktopfour" + index} className="flex w-full flex-col items-center rounded-[36px] border border-solid border-white-A700 bg-black-900_19 p-2">


{/* benefit item security section */}<div className="flex flex-col items-center gap-1">


{/* benefit icon security section */}<Img src={d.securityone} alt="security_one" className="h-[37px]" />


{/* benefit label security section */}<Text size="s" as="p" className="text-center !font-medium">
{d.securitytwo}</Text>
</div>
</div>
 ))}</div>


{/* benefits spacer section */}<div className="mb-[7px] mt-[26px] flex w-[26%] justify-center rounded-[26px] border border-solid border-white-A700 md:w-full">


{/* benefit item view three section */}<div className="h-[43px] w-[45px] rounded-[22px] bg-white-A700" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


{/* about section */}<div className="relative z-[1] mt-[-20px] flex h-[529px] items-center bg-[url(/public/images/img_group_43.svg)] bg-cover bg-no-repeat p-[50px] md:h-auto md:p-5">


{/* about images section */}<div className="mx-auto mb-[54px] mt-[50px] flex w-full max-w-[1310px] items-center justify-between gap-5 md:flex-col">


{/* about image stack section */}<div className="relative h-[325px] w-[34%] md:h-auto md:w-full">


{/* about image giant office section */}<Img src="images/img_giant_office_buildings_325x445.png" alt="giantoffice_one" className="h-[325px] w-full rounded-[40px] object-cover" />


{/* about image pexels italo section */}<div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[325px] w-full md:h-auto">


{/* about image pexels italo one section */}<Img src="images/img_pexels_italo_crespi_12919801_325x445.png" alt="pexelsitalo_one" className="h-[325px] w-full rounded-[40px] object-cover" />


{/* about image stack section */}<div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[325px] w-full md:h-auto">


{/* about image rectangle section */}<Img src="images/img_rectangle_48_325x445.png" alt="image" className="h-[325px] w-full rounded-[40px] object-cover" />


{/* about image 5684 section */}<Img src="images/img_5684_1.png" alt="image_one" className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[325px] w-full rounded-[40px] object-cover" />
</div>
</div>
</div>


{/* about content section */}<div className="flex w-[53%] flex-col items-start gap-8 pt-1 md:w-full">


{/* about heading section */}<Heading size="lg" as="h2" className="text-center !font-raleway !text-black-900_01">
About Firsthing</Heading>


{/* about text one section */}<Text size="xl" as="p" className="leading-[31px] !text-black-900_01">
At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and sustainability.</Text>


{/* about text two section */}<Text size="xl" as="p" className="leading-[31px] !text-black-900_01">
At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and sustainability.</Text>
</div>
</div>
</div>
</div>


{/* solutions section */}<div className="relative z-[2] mt-[-24px] flex justify-center border-b-[0.5px] border-solid border-black-900_01 bg-gray-300_01 py-20 md:py-5">


{/* solutions heading section */}<div className="container-sm flex justify-center px-[114px] md:p-5 md:px-5">


{/* solutions content section */}<div className="flex w-full flex-col gap-8">


{/* solutions title section */}<div className="flex w-[96%] flex-col items-center gap-[5px] md:w-full">


{/* solutions heading section */}<Heading size="lg" as="h3" className="text-center !font-raleway !text-black-900_01">
Our Solutions</Heading>


{/* solutions description section */}<Text as="p" className="text-center leading-[21px] !text-black-900_01">
Our flagship product, EnergiTrack, harnesses the power of RetroFit Smart Switch Modules and Motion Sensors, combined with our cuttingedge software for real-time monitoring and control, saving up to 50% of electricity.</Text>
</div>


{/* solutions images section */}<div className="relative h-[558px] md:h-auto">


{/* solutions image group section */}<Img src="images/img_group_28.svg" alt="image_two" className="mt-[34px] h-[471px] w-[14px]" />


{/* solutions features list section */}<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-between gap-5 md:relative md:flex-col">


{/* solutions list item person section */}<div className="flex w-[25%] flex-col gap-[53px] md:w-full md:flex-row sm:flex-col">


{/* solutions list row person section */}<div className="flex flex-1 items-center">


{/* solutions list column person section */}<div className="flex-1 rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3">


{/* solutions list image person section */}<Img src="images/img_person_using_sm.png" alt="personusingsm" className="h-[222px] w-[222px] rounded-[50%]" />
</div>


{/* solutions list image user section */}<Img src="images/img_user_black_900_01.svg" alt="user_one" className="relative ml-[-16px] h-[29px] w-[30px]" />
</div>


{/* solutions list row representation section */}<div className="flex flex-1 items-center">


{/* solutions list column representation section */}<div className="flex-1 rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3">


{/* solutions list stack representation section */}<div className="relative h-[222px] md:h-auto">


{/* solutions list image representation section */}<Img src="images/img_representation.png" alt="representation" className="h-[222px] w-[222px] rounded-[50%]" />


{/* solutions list image standard quality section */}<Img src="images/img_standard_qualit.png" alt="standardqualit" className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[222px] w-[222px] rounded-[50%]" />
</div>
</div>


{/* solutions list image user two section */}<Img src="images/img_user_black_900_01.svg" alt="user_one" className="relative z-[3] ml-[-16px] h-[29px] w-[30px]" />
</div>
</div>


{/* solutions details section */}<div className="flex w-[64%] flex-col items-start gap-[43px] md:w-full">


{/* solutions feature energy track section */}<Heading as="h4" className="ml-20 !text-black-900_01 md:ml-0">
Energy Track</Heading>


{/* solutions feature list section */}<div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">


{/* solutions feature column retrofit section */}<div className="flex w-[45%] flex-col gap-[60px] sm:w-full sm:gap-[30px]">


{/* solutions feature row retrofit section */}<div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[21px] sm:p-5">


{/* solutions feature text retrofit section */}<Text as="p" className="w-[95%] text-center !font-medium leading-[18px] !text-black-900_01">
RetroFit Smart Switch Modules for comprehensive monitoring</Text>
</div>


{/* solutions feature row motion sensors section */}<div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[23px] sm:p-5">


{/* solutions feature text motion sensors section */}<Text as="p" className="w-[97%] text-center !font-medium leading-[18px] !text-black-900_01">
Motion sensors for automated energy savings.</Text>
</div>


{/* solutions feature row realtime monitoring section */}<div className="flex rounded-[20px] border-[0.5px] border-solid border-black-900_01 bg-gray-300_01 p-[15px]">


{/* solutions feature text realtime monitoring section */}<Text as="p" className="w-[98%] text-center !font-medium leading-[18px] !text-black-900_01">
Real-time monitoring dashboards for detailed consumption insights.</Text>
</div>
</div>


{/* solutions feature row images section */}<div className="flex w-[39%] items-center justify-center sm:w-full">


{/* solutions feature image user three section */}<Img src="images/img_user_black_900_01.svg" alt="user_one" className="relative z-[4] h-[29px] w-[30px]" />


{/* solutions feature column full shot section */}<div className="relative ml-[-15px] flex-1 rounded-[123px] border-[0.5px] border-solid border-black-900_01 p-3">


{/* solutions feature image full shot section */}<Img src="images/img_full_shot_man_d.png" alt="fullshotmand" className="h-[222px] w-[222px] rounded-[50%]" />
</div>
</div>
</div>


{/* learn more about energy track button section */}<Button shape="round" className="ml-[7px] min-w-[287px] !rounded-[14px] font-inter font-bold md:ml-0 sm:px-5">
Learn More about Energi Track</Button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


{/* why firsthing section */}<div className="flex self-stretch md:flex-col">


{/* why firsthing content section */}<div className="relative z-[5] flex w-[41%] items-center justify-center bg-gradient px-14 py-[75px] md:w-full md:p-5 sm:flex-col">


{/* why firsthing heading section */}<div className="mt-[5px] flex w-[77%] flex-col items-start gap-[30px] sm:w-full">


{/* why firsthing heading section */}<Heading size="lg" as="h2" className="flex h-[52px] items-center justify-center bg-black-900_01 pt-1 text-center !font-raleway">
Why Firsthing</Heading>


{/* sustainability focus section */}<div className="flex flex-col items-start gap-[43px] self-stretch">


{/* sustainability focus heading section */}<div className="flex w-[81%] flex-col items-start gap-2.5 md:w-full">


{/* sustainability focus title section */}<Heading as="h3">
Sustainability Focus</Heading>


{/* sustainability focus description section */}<Text as="p" className="leading-[21px]">
Aligned with global sustainability goals, Firsthing&#39;s solutions are designed to significantly reduce your carbon footprint while optimizing energy usage.</Text>
</div>


{/* sustainability focus divider section */}<div className="h-px w-full self-stretch bg-white-A700" />


{/* market opportunity section */}<div className="flex flex-col items-start gap-2.5 self-stretch">


{/* market opportunity title section */}<Heading as="h4">
Market Opportunity</Heading>


{/* market opportunity description section */}<Text as="p" className="leading-[21px]">
With the energy efficiency market in India estimated at INR 150000 Crore and only 5% tapped, Firsthing is positioned to lead this untapped market potential, projected to reach 142000 Crore by 2030.</Text>
</div>
</div>
</div>


{/* why firsthing image section */}<Img src="images/img_vector.svg" alt="vector_one" className="relative mb-[135px] ml-[-2px] h-[39px] w-[40px] self-end sm:ml-0 sm:w-full" />
</div>


{/* why firsthing image section */}<div className="relative ml-[-597px] h-[537px] flex-1 bg-[url(/public/images/img_mask_group.png)] bg-cover bg-no-repeat md:ml-0 md:h-auto md:self-stretch md:p-5">


{/* why firsthing image man using smart section */}<Img src="images/img_man_using_smart.png" alt="manusingsmart" className="h-[537px] w-full object-cover md:h-auto" />
</div>
</div>


{/* technology section */}<div className="flex justify-center self-stretch border-b-[0.5px] border-solid border-black-900_04 bg-gray-100 py-20 md:py-5">


{/* technology content section */}<div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">


{/* technology heading section */}<div className="flex w-[30%] items-center justify-center md:w-full">


{/* technology heading section */}<div className="flex flex-1 flex-col items-center justify-center rounded-[183px] border border-solid border-black-900_04 px-14 py-[60px] md:p-5">


{/* technology title section */}<Heading size="lg" as="h2" className="mb-[72px] mt-[71px] w-[97%] !font-raleway !text-black-900_01 md:w-full">
<>Our <br />Technology</></Heading>
</div>


{/* technology image user section */}<Img src="images/img_user_black_900_01.svg" alt="user_three" className="relative ml-[-16px] h-[29px] w-[30px]" />
</div>


{/* technology features list section */}<div className="flex w-[66%] gap-10 md:w-full md:flex-col">
{data.map((d,index) => (

{/* technology list column section */}<div key={"listinnovative" + index} className="flex w-full flex-col justify-center gap-[25px] rounded-[40px] bg-gray-300 p-11 md:p-5">


{/* technology list image idea section */}<Img src={d.image} alt="image" className="mt-4 h-[120px] w-[120px]" />


{/* technology list column innovative section */}<div className="mb-[15px] flex flex-col items-start gap-2.5">


{/* technology list title innovative section */}<Heading as="h3" className="!text-black-900_01">
{d.innovative}</Heading>


{/* technology list description innovative section */}<Text as="p" className="leading-[21px] !text-black-900_01">
{d.description}</Text>
</div>
</div>
 ))}</div>
</div>
</div>


{/* target customers section */}<div className="container-sm mt-20 flex flex-col items-center gap-[43px] md:p-5">


{/* target customers heading section */}<div className="flex w-[79%] flex-col items-center pt-1 md:w-full">


{/* target customers title section */}<Heading size="lg" as="h2" className="text-center !font-raleway !text-black-900_01">
Target Customers & Industries</Heading>


{/* target customers description section */}<Text as="p" className="text-center leading-[21px] !text-black-900_01">
<>From commercial buildings and residential complexes to industrial facilities, Firsthing serves a wide range of sectors looking for<br />smart energy solutions.</></Text>
</div>


{/* target customers images row section */}<div className="flex items-center justify-between gap-5 self-stretch md:flex-col">


{/* target customer image armalite section */}<Img src="images/img_armalite.svg" alt="armalite_one" className="h-[32px] w-[14%] md:w-full" />


{/* target customer image nickhits section */}<Img src="images/img_nickhits_1.svg" alt="nickhitsone_one" className="h-[38px] w-[13%] md:w-full" />


{/* target customer image cardpm section */}<Img src="images/img_cardpm_1.svg" alt="cardpmone_one" className="h-[38px] w-[12%] md:w-full" />


{/* target customer image group 45 section */}<Img src="images/img_group_45.svg" alt="image_three" className="h-[35px] w-[12%] md:w-full" />


{/* target customer image vector teal section */}<Img src="images/img_vector_teal_900.svg" alt="vector_three" className="h-[32px] w-[20%] md:w-full" />
</div>
</div>


{/* contact section */}<div className="mt-20 h-[976px] self-stretch bg-[url(/public/images/img_group_72.png)] bg-cover bg-no-repeat md:h-auto">


{/* contact content section */}<div className="flex flex-col items-center gap-[23px] bg-black-900_b2 pt-20 md:pt-5">


{/* contact heading section */}<div className="container-sm px-[119px] md:p-5 md:px-5">


{/* contact heading row section */}<div className="flex items-center justify-between gap-5 md:flex-col">


{/* contact heading column section */}<div className="flex w-[43%] flex-col items-start gap-[17px] md:w-full">
<a href="#">


{/* contact title section */}<Heading size="lg" as="h2" className="text-center !font-raleway">
Contact Us</Heading>
</a>


{/* contact description section */}<Text size="2xl" as="p" className="leading-[31px]">
Ready to transform your energy management? Contact us today to see Firsthing in action and start saving on your energy bills.</Text>
</div>


{/* contact form section */}<div className="flex w-[51%] flex-col items-center gap-[22px] rounded-[40px] border border-solid border-white-A700_3e bg-black-900_48 p-11 md:w-full md:p-5">


{/* contact form name section */}<div className="flex flex-col gap-3 self-stretch">


{/* contact form input name section */}<div className="flex flex-col items-start gap-2.5">


{/* contact form label name section */}<Text as="p">
Name*</Text>


{/* contact form field name section */}<Input shape="round" name="name" />
</div>


{/* contact form input email section */}<div className="flex flex-col items-start gap-2.5">


{/* contact form label email section */}<Text as="p">
Email*</Text>


{/* contact form field email section */}<Input shape="round" name="email" />
</div>


{/* contact form input message section */}<div className="flex flex-col items-start gap-2">


{/* contact form label message section */}<Text as="p">
Message*</Text>


{/* contact form field message section */}<TextArea shape="round" name="textarea" className="self-stretch" />
</div>
</div>


{/* contact form submit button section */}<Button shape="round" className="min-w-[162px] !rounded-[14px] font-inter font-bold sm:px-5">
Submit</Button>
</div>
</div>
</div>


{/* footer section */}<footer className="flex items-start justify-center self-stretch bg-gradient3 py-4">


{/* footer content section */}<div className="container-xs mb-[63px] flex flex-col gap-9 md:p-5">


{/* footer vector image section */}<Img src="images/img_vector.svg" alt="vector_five" className="ml-[367px] h-[39px] w-[40px] md:ml-0" />


{/* footer social links row section */}<div className="flex items-start justify-between gap-5 md:flex-col">


{/* footer logo column section */}<div className="flex w-[18%] flex-col items-start gap-[26px] md:w-full">


{/* footer logo image section */}<Img src="images/img_footer_logo.png" alt="footerlogo_one" className="h-[53px] w-[87%] object-cover" />


{/* footer social icons row section */}<div className="flex gap-[11px]">


{/* footer facebook icon section */}<Button color="gray_900_cc" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
<Img src="images/img_facebook.svg" />
</Button>


{/* footer twitter icon section */}<Button color="gray_900_cc_01" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
<Img src="images/img_twitter.svg" />
</Button>


{/* footer instagram icon section */}<Button color="gray_900_cc_01" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
<Img src="images/img_instagram_white_a700_48x48.svg" />
</Button>


{/* footer warning icon section */}<Button color="gray_900_cc_01" size="md" shape="circle" className="w-[48px] !rounded-[24px]">
<Img src="images/img_warning.svg" />
</Button>
</div>
</div>


{/* footer links column section */}<div className="flex flex-col items-start gap-[26px]">


{/* footer links heading section */}<Heading size="s" as="h4" className="!font-raleway">
Who we are</Heading>


{/* footer links list section */}<ul className="flex flex-col items-start gap-5">
<li>
<a href="#">


{/* footer link why firsthing section */}<Text as="p" className="!text-blue_gray-100">
Why Firsthing</Text>
</a>
</li>
<li>
<a href="#">


{/* footer link our solutions section */}<Text as="p" className="!text-blue_gray-100">
Our Solutions</Text>
</a>
</li>
<li>
<a href="#">


{/* footer link technology section */}<Text as="p" className="!text-blue_gray-100">
Technology</Text>
</a>
</li>
<li>
<a href="#">


{/* footer link market opportunity section */}<Text as="p" className="!text-blue_gray-100">
Market Opportunity</Text>
</a>
</li>
</ul>
</div>


{/* footer contact column section */}<div className="flex w-[18%] flex-col items-start gap-[26px] md:w-full">
<a href="#">


{/* footer contact link section */}<Heading size="s" as="h4" className="!font-raleway">
Contact us</Heading>
</a>


{/* footer contact info row section */}<div className="flex items-start justify-between gap-5 self-stretch">


{/* footer contact icons column section */}<div className="flex flex-col items-start gap-4">


{/* footer contact phone icon section */}<Img src="images/img_phone.svg" alt="phone_one" className="h-[20px] w-[20px]" />


{/* footer contact lock icon section */}<Img src="images/img_lock.svg" alt="lock_one" className="h-[20px] w-[20px] self-end" />
</div>


{/* footer contact info text section */}<Text as="p" className="w-[89%] !text-blue_gray-100">
<>8080801010<br /><br />firsting@gmail.com</></Text>
</div>
</div>
</div>
</div>
</footer>
</div>
</div>
</div>
</div>

      </>
    )
  }
  