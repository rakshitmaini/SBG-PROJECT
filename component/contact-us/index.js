import React, { useEffect } from "react";
import ContactWrapper from "./styledComponent/style.contact";
import HeaderBanner from "../baseComponent/headerComponent/HeaderBanner";
import { useState } from "react";
import dynamic from "next/dynamic";
import { contactSchema } from "../../validations/contactValidation";
import { toast, ToastContainer } from "react-toastify";
import { firestore } from "../../firebase.config";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../baseComponent/MapComponent"),
  { ssr: false }
);

const officeData = [
  {
    name: "Lajpat Nagar",
    address: "K-968, 2nd Flr, Lajpat Nagar II, and New Delhi 110024",
    contact: "xx-xxxx-xxxx",
    image: "https://static.toiimg.com/photo/62724656/.jpg",
  },
  {
    name: "Karol Bagh",
    address: "205 Ashoka Place 877, East Park Road Karol Bagh New Delhi 110005",
    contact: "xx-xxxx-xxxx",
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/12/hanuman-1511239340-1513127581.jpg",
  },
  {
    name: "Jaipur",
    address:
      "Totar House 2nd floor above Shope no 72 & 73 Kishanpole Bazar Ajmeri Gate Jaipur 302001",
    contact: "xx-xxxx-xxxx",
    image:
      "https://www.clubmahindra.com/blog/media/section_images/jaipurtour-61d50d492c150ff.jpg",
  },
  {
    name: "Bhadrak",
    address:
      "Bhanumati Complex, 2nd Floor, Dhanigaria Chawak, Above Maa Furniture, By paas Road, Bhadrak - 756100",
    contact: "xx-xxxx-xxxx",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Balasore",
    address:
      "3rd Floor D.I.C office square, O T Road Angargadia Balasore-756001 (Odisha)",
    contact: "xx-xxxx-xxxx",
    image:
      "https://images.static-collegedunia.com/public/college_data/images/appImage/17602_Cover.jpg?tr=c-force",
  },
  {
    name: "Keonjhar",
    address:
      "2nd Floor, Plot no-590,Above Indusland Bank, Pabitradiha, Kamargadia, Keonjhar-758001, Odisha",
    contact: "xx-xxxx-xxxx",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuaXlUtqTAHRN6QMnOJz6w7vjinx3ELfdUQ&usqp=CAU",
  },
  {
    name: "Howrah",
    address: "Basement, 94/1 Dr. Abani Dutta Road Howrah 711101",
    contact: "xx-xxxx-xxxx",
    image:
      "https://www.transindiatravels.com/wp-content/uploads/howrah-bridge-1.jpg",
  },
  {
    name: "Tarakeswar",
    address:
      "Tarakeswar Shakti Bhavan, 3rd Floor Joy Krishna Bazar, Tarakeswar, Hooghly 712410 Near Tarakeswar Electric Office",
    contact: "xx-xxxx-xxxx",
    image:
      "https://www.wbtdcl.com/assets/uploads/lodge/thumb/DSC_1455_lodge_image_08jul2019143844557.jpg",
  },
  {
    name: "Kolkata",
    address: "Suite No.501 & 502 5th Floor, 77 Elliot Road, Kolkata-700016",
    contact: "xx-xxxx-xxxx",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Victoria-Memorial-Sound-and-Light-Show.jpg",
  },
  {
    name: "Nagpur",
    address:
      "Plot no 10/c, Ganeshnagar, Azamshah Layout, Near SD Hospital, Nagpur 440009",
    contact: "xx-xxxx-xxxx",
    image:
      "https://s3.india.com/travel/wp-content/uploads/2017/08/Deekshabhoomi-in-Nagpur.jpg",
  },
  {
    name: "Latur",
    address: "2nd Floor Haranjul BK TQ Latur dist Latur 412413",
    contact: "xx-xxxx-xxxx",
    image:
      "https://res.cloudinary.com/ch/image/upload/c_fill,e_improve,f_auto/v1/hbimages/mobile/location/1502862436621-Ganj-Golai.jpg",
  },
  {
    name: "Ranchi",
    address:
      "Mall D-core 4th Floor room no 404 Lalpur Chock Lalpur Ranchi 834001",
    contact: "xx-xxxx-xxxx",
    image:
      "https://images.financialexpress.com/2019/10/Patratu-lake-resort-top-view-660.jpg",
  },
  {
    name: "Agra",
    address: "4/114/B Church Road Ram Nagar, Agra U.P. 282002",
    contact: "xx-xxxx-xxxx",
    image:
      "https://www.thestatesman.com/wp-content/uploads/2017/10/getty-taj-mahal.jpg",
  },
  {
    name: "Pune",
    address:
      "office No. 301 on Third Floor 'WISTERIAA FORTUNE BUILDING', C WING, Car Parking No. G 142, constructed on S.No.95/2, lying and situated at Village Mouje Wakad, Tal. Mulshi, Dist. Pune-411057",
    contact: "xx-xxxx-xxxx",
    image:
      "https://s3.india.com/travel/wp-content/uploads/2018/02/Pune-photo-4.jpg",
  },
];

const initState = {
  name: "",
  mobile: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUs = () => {
  const [data, setData] = useState(initState);

  const handleFieldChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    // try {
    //   const dt = await contactSchema.validate(data);
    //   console.log({ dt });
    // } catch (err) {
    //   console.log({ err });
    // }
    const dt = await contactSchema.isValid(data);
    if (dt) {
      console.log({ data });
      firestore
        .collection("contact")
        .add(data)
        .then((res) => {
          console.log(res.id);
          setData(initState);
          toast.success(
            "Form Submitted successfully. We will get back to you soon."
          );
        })
        .catch((error) => {
          console.log({ error });
        });
    } else {
      console.log("fail");
      toast.error("Form field is invalid");
    }
  }
  return (
    <>
      <ToastContainer />
      <ContactWrapper>
        <div className="container-fluid">
          <HeaderBanner
            img="/contactUsAssets/contact.jpg"
            tag="Contact Us"
            intro="Have some Questions ?"
          />
          <div className="contact-outer row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleFieldChange}
                      class="form-control"
                      placeholder="Full Name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <label for="name">Phone Number</label>
                    <input
                      type="text"
                      name="mobile"
                      onChange={handleFieldChange}
                      value={data.mobile}
                      class="form-control"
                      placeholder="9876543210"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6 col-md-12">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      value={data.email}
                      onChange={handleFieldChange}
                      placeholder="Enter Email-Id"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group col-lg-6 col-md-12">
                    <label for="subject">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      class="form-control"
                      value={data.subject}
                      onChange={handleFieldChange}
                      placeholder="Enter Subject"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    class="form-control"
                    value={data.message}
                    onChange={handleFieldChange}
                    rows="2"
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "orangered",
                    color: "white",
                    width: "100%",
                  }}
                  className="btn"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <DynamicComponentWithNoSSR />
              <div className="container-fluid__head-office">
                <h5>
                  205 Ashoka Place 877, East Park Road Karol Bagh New Delhi
                  110005
                </h5>

                <span>xyz@gmail.com | xx-xxxx-xxxx</span>
                <div className="row social-icons">
                  <i className="fa fb fa-facebook " aria-hidden="true"></i>

                  <i
                    className="fa youtube fa-youtube-play "
                    aria-hidden="true"
                  ></i>
                  <i className="fa twitter fa-twitter " aria-hidden="true"></i>
                  <i className="fa google fa-google  " aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid__offices-outer">
            <div
              className="row"
              style={{
                alignItems: "center",
                textAlign: "center",
                alignContent: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                <hr />
                <h2>Connect with one of our offices</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
        {officeData.map((ele, index) => {
          if (index % 2) {
            return (
              <div className="container-fluid__offices-data">
                <div className="row">
                  <div className="container-fluid__office-details ">
                    <div className="container-fluid__offices-text">
                      <h4 className="container-fluid__office-name">
                        {ele.name}
                      </h4>

                      <h4>Address</h4>
                      <span>{ele.address}</span>
                      <h4>Contact</h4>
                      <span>xx-xxxx-xxxx</span>
                    </div>
                  </div>

                  <div className="container-fluid__office-image">
                    <img src={ele.image} className=" img-responsive " />
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="container-fluid__offices-data">
              <div className="row">
                <div className="container-fluid__office-image col-xs-1 col-xs-12 ">
                  <img src={ele.image} className=" img-responsive " />
                </div>
                <div className="container-fluid__office-details ">
                  <div className="container-fluid__offices-text">
                    <h4 className="container-fluid__office-name">{ele.name}</h4>

                    <h4>Address</h4>
                    <span>{ele.address}</span>
                    <h4>Contact</h4>
                    <span>xx-xxxx-xxxx</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ContactWrapper>
    </>
  );
};

export default ContactUs;
