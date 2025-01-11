import React from "react";
import ProductImages from "../components/SinglePage/ProductImages";
import CustomizeProducts from "../components/SinglePage/CustomizeProducts";
import Add from "../components/SinglePage/Add";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image Container */}
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
          Product Name
        </h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          earum perspiciatis non mollitia, eum suscipit a eveniet. Id
          perspiciatis, et voluptates consequuntur eius numquam dolorem aperiam
          quia qui error non voluptatem. Eius quaerat velit delectus illum.
          Corrupti accusamus esse neque vero autem. Pariatur nobis voluptates
          quis mollitia in commodi id.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-lg md:text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-xl font-medium md:text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            excepturi tempora similique, veritatis deleniti debitis repellendus
            consequuntur officiis magni quos, quibusdam magnam assumenda harum
            maxime neque blanditiis. Eum, quia vero.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            excepturi tempora similique, veritatis deleniti debitis repellendus
            consequuntur officiis magni quos, quibusdam magnam assumenda harum
            maxime neque blanditiis. Eum, quia vero.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            excepturi tempora similique, veritatis deleniti debitis repellendus
            consequuntur officiis magni quos, quibusdam magnam assumenda harum
            maxime neque blanditiis. Eum, quia vero.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
