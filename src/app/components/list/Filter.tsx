import React from "react";

function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebebed]"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />

        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/*  */}
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs focus:outline-none font-medium bg-[#ebebed]"
        >
          <option>Size</option>
          <option value="physical">Size</option>
        </select>

        {/*  */}
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs focus:outline-none font-medium bg-[#ebebed]"
        >
          <option>Color</option>
          <option value="physical">Test</option>
        </select>

        {/*  */}
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs focus:outline-none font-medium bg-[#ebebed]"
        >
          <option>Category</option>
          <option value="physical">New Arrival</option>
          <option value="physical">Popular</option>
        </select>

        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs focus:outline-none font-medium bg-[#ebebed]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="physical">Price (low to high)</option>
          <option value="physical">Price (high to low)</option>
          <option value="physical">Newest</option>
          <option value="physical">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
