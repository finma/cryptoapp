import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const items = [{ name: "USD" }, { name: "IDR" }];

export const ListBox = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className=" w-16">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className=" relative py-2 w-full sm:text-sm text-center text-white bg-black-custom rounded-lg border border-white shadow-md cursor-default focus:outline-none">
            <span className="block truncate">{selected.name}</span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="overflow-auto absolute py-1 mt-1 w-full max-h-60 text-base sm:text-sm bg-black-custom rounded-md ring-1 ring-white shadow-lg focus:outline-none">
              {items.map((item, itemIdx) => {
                return (
                  <Listbox.Option
                    key={itemIdx}
                    className="relative py-2 text-center text-white cursor-default select-none"
                    value={item}
                  >
                    {({ selected }) => {
                      return (
                        <>
                          <span className={`${selected ? "font-medium" : "font-normal"} block truncate`}>
                            {item.name}
                          </span>
                        </>
                      );
                    }}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
