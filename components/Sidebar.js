import React from "react";

const Sidebar = (props) => {
  const { data, setData } = props;
  console.log(data[0]);

  return (
    <>
      <div className="h-full w-1/5 px-8   border-r-2 border-slate-600">
        <div className="my-2 font-semibold text-xl mt-16 hover:bg-slate-100 pl-1 rounded-full py-2 ">
          <i className="ri-add-line"></i> New Flow
        </div>

        {data.map((elm, index) => (
          <div
            key={index}
            className="my-2 font-semibold text-lg hover:bg-slate-100 py-2 pl-1 rounded-full"
          >
            <i className="ri-mail-fill"></i>
            <span> {elm.mail.subject}</span>
            <span className="font-normal text-base ml-1">{elm.mail.from}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
