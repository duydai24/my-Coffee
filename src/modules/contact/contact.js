import React from "react";
import { Helmet } from "react-helmet";
import Title from "../../lib/title";
import Fade from "react-reveal/Fade";
import GoogleMap from "react-google-maps";

function Contact() {
  return (
    <div className="">
      <Helmet>
        <title>My Coffee - Contact</title>
      </Helmet>
      <div className="bg-[#f6f6f6] flex items-stretch flex-col min-h-[530px] max-w-[1440px] mx-auto justify-center">
        <Fade bottom>
          <div className="relative">
            <div className="container bg-cover flex flex-col items-center text-center text-white relative">
              <p className="text-4xl text-blacks mb-8">Let's Connect</p>
              <p className="opacity-80 text-blacks max-w-xl leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis.
              </p>
              <div className="flex items-center justify-center mb-36 opacity-80 pt-10">
                <span className="w-8 h-[2px] bg-[#ececed]"></span>
                <p className="uppercase text-xs text-blacks opacity-60 font-bold mx-3">
                  OUR OFFICES
                </p>
                <span className="w-8 h-[2px] bg-[#ececed]"></span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="container relative -top-24 lg:px-0 px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <Fade left>
            <Offices image={"/contact1.jpg"} address={"Canary Wharf, London"} />
          </Fade>
          <Fade right>
            <Offices
              image={"/contact2.jpg"}
              address={"Venice Beach, California"}
            />
          </Fade>
        </div>
      </div>
      <div className="container relative -bottom-[50px]">
        <FormContact />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.787127233779!2d105.6790565!3d18.673546099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce7a81928d49%3A0x24f1322582d21b12!2zNzVhIE5ndXnhu4VuIFRo4buLIE1pbmggS2hhaSwgTMOqIE1hbywgVGjDoG5oIHBo4buRIFZpbmgsIE5naOG7hyBBbg!5e0!3m2!1svi!2s!4v1653475718049!5m2!1svi!2s"
          width="100%"
          height="500"
          loading="lazy"
          gestureHandling="greedy "
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <MapGoogle /> */}
      </div>
      <div className="container py-24">
        <Title text="DIRECTORY" />
        <Fade bottom>
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <Directory
              title={"PRESS"}
              name={"Robb Kohler"}
              phone={"086-374-4962"}
              email={"robb.kohler@coffeestyle.com"}
            />
            <Directory
              title={"PRESS"}
              name={"Robb Kohler"}
              phone={"086-374-4962"}
              email={"robb.kohler@coffeestyle.com"}
            />
            <Directory
              title={"PRESS"}
              name={"Robb Kohler"}
              phone={"086-374-4962"}
              email={"robb.kohler@coffeestyle.com"}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

// function MapGoogle() {
//   const options = {
//     zoom: 16,
//     gestureHandling: "greedy",
//   };
//   return (
//     <div className="App">
//       <GoogleMap
//         googleMapURL={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.787127233779!2d105.6790565!3d18.673546099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce7a81928d49%3A0x24f1322582d21b12!2zNzVhIE5ndXnhu4VuIFRo4buLIE1pbmggS2hhaSwgTMOqIE1hbywgVGjDoG5oIHBo4buRIFZpbmgsIE5naOG7hyBBbg!5e0!3m2!1svi!2s!4v1653475718049!5m2!1svi!2s`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={
//           <div
//             style={{
//               height: `90vh`,
//               width: `100%`,
//             }}
//           />
//         }
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }

function Directory({ name, title, phone, email }) {
  return (
    <div className="text-center mb-10 lg:mb-0">
      <p className="text-xs opacity-60 leading-4 font-bold tracking-[2px] uppercase">
        {title}
      </p>
      <p className="text-lg leading-7 py-4">{name}</p>
      <p className="text-[#1d1f2eb3] pb-2">{phone}</p>
      <p className="text-[#1d1f2eb3] ">{email}</p>
    </div>
  );
}

function Offices({ image, address }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img className="pb-10" src={image} height={190} width={460} />
      <p className="uppercase text-xs text-blacks opacity-60 font-bold">
        UNITED KINGDOM
      </p>
      <p className="text-lg py-5">{address}</p>
      <p className="opacity-60 text-sm pb-2">Jubilee Place</p>
      <p className="opacity-60 text-sm pb-2">London</p>
      <p className="opacity-60 text-sm pb-2">E14 5NY</p>
      <p className="uppercase text-xs text-blacks opacity-60 font-bold mt-5 mb-3">
        OPENING TIMES
      </p>
      <p className="opacity-60 text-sm pb-2">Mon - Fri 08:00 to 22:00</p>
      <p className="opacity-60 text-sm pb-2">Sat - 09:00 to 20:00</p>
      <p className="opacity-60 text-sm pb-2">Sun - 12:00 to 18:00</p>
    </div>
  );
}

function FormContact({}) {
  return (
    <div className="border-0 border-[#d2d2d580] p-14 flex lg:flex-row flex-col bg-white">
      <Fade bottom>
        <div className="lg:w-3/5 w-full lg:mr-14 mb-14">
          <p className="font-bold text-xs opacity-60 uppercase">CONTACT FORM</p>
          <p className="text-lg opacity-90">
            Drop us your message and I'll get back to you as soon as possible.
          </p>
          <div className="mt-10">
            <p className="font-bold text-xs opacity-50 uppercase">NAME</p>
            <input
              className="py-4 px-5 w-full border-0 border-[#e5e5e7] mt-3 mb-5 text-xs leading-5 uppercase cursor-pointer hover:border-[#1d1f2e80] outline-[1px] outline-[#1d1f2e80]"
              placeholder="James Coffee"
              type="text"
              maxLength={12}
            />
            <p className="font-bold text-xs opacity-50 uppercase">
              EMAIL ADDRESS
            </p>
            <input
              className="py-4 px-5 w-full border-0 border-[#e5e5e7] mt-3 mb-5 text-xs leading-5 uppercase cursor-pointer hover:border-[#1d1f2e80]"
              placeholder="customer@coffeestyle.io"
              type="email"
              maxLength={256}
            />
            <p className="font-bold text-xs opacity-50 uppercase">
              YOUR MESSAGE
            </p>
            <textarea
              className="py-4 px-5 w-full border-0 border-[#e5e5e7] mt-3 mb-5 text-xs leading-5 uppercase cursor-pointer hover:border-[#1d1f2e80]"
              placeholder="Hi! I would like to ask something about mugs."
              maxLength={5000}
            />
          </div>
          <button className="bg-blacks py-5 px-7 w-full lg:w-auto text-white text-xs uppercase">
            send message
          </button>
        </div>
        <div className="lg:w-2/5 w-full lg:border-l-0 border-t-0 border-[#d2d2d580] lg:pl-14 pt-14 text-center lg:text-left">
          <p className="font-bold text-xs opacity-60 uppercase">CONTACT FORM</p>
          <p className="text-lg opacity-90 mb-5">CoffeeStyle. Inc</p>
          <p className="text-xs opacity-60 mb-3">Pride Ave,</p>
          <p className="text-xs opacity-60 mb-3">Hamlyn Heights</p>
          <p className="text-xs opacity-60 mb-3">VIC 3215</p>
          <p className="text-xs opacity-60 mb-3">Australia</p>
          <p className="font-bold text-xs opacity-60 uppercase mt-10 mb-2">
            CALL US
          </p>
          <p className="text-lg opacity-90 mb-5">+1 (415) 555-1212</p>
          <p className="font-bold text-xs opacity-60 uppercase mt-10 mb-2">
            EMAIL US
          </p>
          <p className="text-lg opacity-90 mb-5">us@coffeestyle.io</p>
        </div>
      </Fade>
    </div>
  );
}
export default Contact;
