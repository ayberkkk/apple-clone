import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="container mx-auto px-6 py-3 max-w-[980px]">
        <div className="border-b-2 mb-3 mt-3">
          <div className="text-[11px] text-[#6e6e73] mt-3 mb-3">
            <p className="mb-2">
              1.Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In-store trade-in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores, and
              may vary between in-store and online trade-in. Some stores may
              have additional requirements. Apple or its trade-in partners
              reserve the right to refuse or limit quantity of any trade-in
              transaction for any reason. More details are available from
              Apple’s trade-in partner for trade-in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </p>
            <p className="mb-2">
              Apple Vision Pro has not been authorized as required by the rules
              of the Federal Communications Commission. This device is not, and
              may not be, offered for sale or lease, or sold or leased, until
              authorization is obtained.
            </p>
            <p className="mb-2">
              Apple Vision Pro will be available early next year on
              <Link href="/" className="text-[#424245] underline">
                apple.com
              </Link>
              and at Apple retail stores in the U.S.
            </p>
            <p className="mb-2">
              To access and use all Apple Card features and products available
              only to Apple Card users, you must add Apple Card to Wallet on an
              iPhone or iPad that supports and has the latest version of iOS or
              iPadOS. Apple Card is subject to credit approval, available only
              for qualifying applicants in the United States, and issued by
              Goldman Sachs Bank USA, Salt Lake City Branch.
            </p>
            <p className="mb-2">
              If you reside in the U.S. territories, please call Goldman Sachs
              at 877-255-5923 with questions about Apple Card.
            </p>
            <p className="mb-2">
              Learn more about how Apple Card applications are evaluated at
              <Link href="/" className="text-[#424245] underline">
                support.apple.com/kb/HT209218
              </Link>
            </p>
            <p className="mb-2">A subscription is required for Apple TV+.</p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-5 hidden grid-cols-1">
          <div>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium">
              Shop and Learn
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">Store</li>
              <li className="mb-2 hover:underline hover:text-black">Mac</li>
              <li className="mb-2 hover:underline hover:text-black">iPad</li>
              <li className="mb-2 hover:underline hover:text-black">iPhone</li>
              <li className="mb-2 hover:underline hover:text-black">Watch</li>
              <li className="mb-2 hover:underline hover:text-black">AirPods</li>
              <li className="mb-2 hover:underline hover:text-black">
                TV & Home
              </li>
              <li className="mb-2 hover:underline hover:text-black">AirTag</li>
              <li className="mb-2 hover:underline hover:text-black">
                Accessories
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Gift Cards
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium mt-6">
              Apple Wallet
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">Wallet</li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Card
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Pay
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Cash
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium">Account</p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Manage Your Apple ID
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Store Account
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                iCloud.com
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 mt-6 font-medium">
              Entertainment
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Apple One
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple TV+
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Music
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Arcade
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Fitness+
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple News+
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Podcast
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Books
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                App Store
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium">
              Apple Store
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Find a Store
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Genius Bar
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Today at Apple
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Camp
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Store App
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Certified Refurbished
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Trade In
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Financing
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Carrier Deals at Apple
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Order Status
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Shopping Help
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium">
              For Business
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Apple and Business
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Shop for Business
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 mt-6 font-medium">
              For Education
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Apple and Education
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Shop for K-12
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Shop for College
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 mt-6 font-medium">
              For Healthcare
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Apple and Healthcare
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Health on Apple Watch
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Health Records on iPhone
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 mt-6 font-medium">
              For Government
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Shop for Government
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Shop for Veterans and Military
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-[#1d1d1f] mb-2 font-medium">
              Apple Values
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Accessibility
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Education
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Environment
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Inclusion and Diversity
              </li>
              <li className="mb-2 hover:underline hover:text-black">Privacy</li>
              <li className="mb-2 hover:underline hover:text-black">
                Racial Equity and Justice
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Supplier Responsibility
              </li>
            </ul>
            <p className="text-xs text-[#1d1d1f] mb-2 mt-6 font-medium">
              About Apple
            </p>
            <ul className="text-[#424245] text-[11px]">
              <li className="mb-2 hover:underline hover:text-black">
                Newsroom
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Apple Leadership
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Career Opportunities
              </li>
              <li className="mb-2 hover:underline hover:text-black">Garanti</li>
              <li className="mb-2 hover:underline hover:text-black">
                Investors
              </li>
              <li className="mb-2 hover:underline hover:text-black">
                Ethics & Compliance
              </li>
              <li className="mb-2 hover:underline hover:text-black">Events</li>
              <li className="mb-2 hover:underline hover:text-black">
                Contact Apple
              </li>
            </ul>
          </div>
        </div>
        <div className="block lg:hidden">
          <Menu>
            <Menu.Button className="w-full text-left border-b-2">
              <p className="text-xs text-[#1d1d1f] mb-2 font-medium">
                Shop and Learn
              </p>
            </Menu.Button>
            <Menu.Items className="text-[#424245] text-[11px] ml-3">
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">Store</a>
              </Menu.Item>
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">Mac</a>
              </Menu.Item>
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">iPad</a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <Menu>
            <Menu.Button className="w-full text-left border-b-2">
              <p className="text-xs text-[#1d1d1f] mb-2 font-medium">Hesap</p>
            </Menu.Button>
            <Menu.Items className="text-[#424245] text-[11px] ml-3">
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">Store</a>
              </Menu.Item>
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">Mac</a>
              </Menu.Item>
              <Menu.Item className="block mb-2 hover:underline hover:text-black">
                <a href="/account-settings">iPad</a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="border-b-2 mb-3 mt-3">
          <p className="text-[11px] text-[#6e6e73] mt-3 mb-3">
            More ways to shop :
            <a className="underline text-[blue]" href="">
              Find an Apple Store
            </a>
            or
            <a className="underline text-[blue]">other retailer</a>
            near you. Or call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="justify-end items-center lg:grid lg:grid-cols-3 whitespace-nowrap">
          <div>
            <p className="text-[11px] text-[#6e6e73]">
              Copyright © 2023 Apple Inc. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap items-center gap-2 text-[10px] text-[#424245]">
              <li className="hover:underline hover:text-black">
                Privacy Policy
              </li>
              <span>|</span>
              <li className="hover:underline hover:text-black">Terms of Use</li>
              <span>|</span>
              <li className="hover:underline hover:text-black">
                Sales and Refunds
              </li>
              <span>|</span>
              <li className="hover:underline hover:text-black">Legal</li>
              <span>|</span>
              <li className="hover:underline hover:text-black">Site Map</li>
              <span>|</span>
            </ul>
          </div>
          <div className="lg:text-right text-sm">
            <p className="text-[#1d1d1f]">United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
