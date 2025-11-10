import { Heading } from "./Heading";
import { products } from "../constants/products";
import { Link } from "react-router-dom";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { themeClass } from "../constants/colors";
import { twMerge } from "tailwind-merge";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {products.map((product, idx) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            {product.slug ? (
              <Link
                to={`/projects/${product.slug}`}
                key={product.href}
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              >
                <img
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-lg "
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      {product.description}
                    </Paragraph>
                  </div>
                  <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                    {product.stack?.map((stack) => (
                      <span
                        key={stack}
                        className={twMerge(
                          "text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm",
                          themeClass("tag")
                        )}
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ) : (
              <a
                href={product.href}
                key={product.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              >
                <img
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md"
                />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack) => (
                    <span
                      key={stack}
                      className={twMerge(
                        "text-xs md:text-xs lg:text-xs px-2 py-1 rounded-sm",
                        themeClass("tag")
                      )}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
