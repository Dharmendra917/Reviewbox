"use client";
import React from "react";
import Link from "next/link";
import GoogleMapEmbed from "./GoogleMapEmbed";
const Show = () => {
  return (
    <>
      <div className="main overflow-hidden flex items-center size-full ">
        <div className="scroll overflow-x-scroll">
          <div className="cards  flex ml-80 h-max gap-60 whitespace-nowrap ">
            <div className="card  size-1/1   rounded-md  p-2  bg-slate-50 m-1 pb-4">
              <nav className="bg-slate-100 font-semibold flex justify-between px-6 py-2">
                <div className="text-lg  flex item-center gap-2">
                  <i className="ri-mail-open-fill"></i> <span>Coffee?</span>
                </div>
                <i class="ri-mic-fill"></i>
              </nav>
              <div className="container   pt-6 px-6">
                <p className="text-2xl mb-2 ">tejas</p>
                <h1 className="text-3xl font-bold mb-4">Coffee?</h1>
                <div className="text-lg">
                  <p className="mb-4">hey tejas,</p>
                  <p className="mr-10 ">
                    Was wondering if you'd be intrested in metting my team at{" "}
                    <br />
                    Phiz Coffee at 11 AM today, No Pressure if you can't make
                    it, <br /> although i think you guys would really get along!
                  </p>
                  <p className="mt-4 mb-2">Tejas</p>
                </div>
                <div className="Action my-4">
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Reply
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Forward
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Delete
                  </button>
                </div>

                <Link href="">
                  {" "}
                  <i class="ri-more-2-fill"></i> More actions
                </Link>
              </div>
            </div>
            <div className="card  size-1/2 w-auto rounded-md  p-2  bg-slate-50 m-1 pb-4">
              <nav className="bg-slate-100 font-semibold flex justify-between px-6 py-2">
                <div className="text-lg  flex item-center gap-2">
                  <span>See my availabity today</span>
                </div>
                <i class="ri-mic-fill"></i>
              </nav>
              <div className="container  pt-6 px-6">
                <h1 className="text-3xl font-bold mb-4">
                  Available until 1PM today
                </h1>
                <div className="text-lg my-2">
                  <p>
                    Would you like to create an event far <br /> Coffee with
                    Tejas at 11AM?
                  </p>
                </div>
                <div className="w-500 h-auto bg-slate-200">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> <br />
                </div>
                <div className="Action my-4">
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Create Event
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Edit Event
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Full Calender
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Dismiss
                  </button>
                </div>

                <Link href="">
                  <i class="ri-more-2-fill"></i> More actions
                </Link>
              </div>
            </div>{" "}
            <div className="card  size-1/2  rounded-md w-auto  p-2  bg-slate-50 m-1 pb-4">
              <nav className="bg-slate-100 font-semibold flex justify-between px-6 py-2">
                <div className="text-lg  flex item-center gap-2">
                  <i class="ri-map-pin-2-fill"></i>
                  <span>Phizz Coffee</span>
                </div>
                <i class="ri-mic-fill"></i>
              </nav>
              <div className="container   pt-6 px-6">
                <div className="text-lg bg-slate-300 ">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="bg-slate-100">
                    <h2 className="p-2 text-xl font-semibold">Phizz Coffee</h2>
                    <h4>Custom blanded java in Casual setting</h4>
                    <p>200202,Stevens Creek Bivd Cupertino, CA 95014</p>
                  </div>
                </div>
                <div className="Action my-4">
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Get Direction
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    See Details
                  </button>
                  <button className="px-8 py-2 bg-stone-200 m-1 rounded-md font-semibold">
                    Find more caffee nearby
                  </button>
                </div>

                <Link href="">
                  <i class="ri-more-2-fill"></i> More actions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
