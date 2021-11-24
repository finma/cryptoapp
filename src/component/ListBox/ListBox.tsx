import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CryptoState } from "src/context/CryptoContex";

export const ListBox = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <div className=" w-24">
      <Listbox value={currency} onChange={setCurrency}>
        <div className="relative mt-1">
          <Listbox.Button className=" relative py-2 w-full sm:text-sm text-center text-white bg-black-custom rounded-lg border border-white shadow-md cursor-default focus:outline-none">
            <span className="block truncate">{currency}</span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="overflow-auto absolute py-1 mt-1 w-full max-h-60 text-base sm:text-sm bg-black-custom rounded-md ring-1 ring-white shadow-lg focus:outline-none">
              <Listbox.Option className="relative py-2 text-center text-white cursor-default select-none" value={"IDR"}>
                <span className={`font-normal block truncate`}>IDR</span>
              </Listbox.Option>
              <Listbox.Option className="relative py-2 text-center text-white cursor-default select-none" value={"USD"}>
                <span className={`font-normal block truncate`}>USD</span>
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
