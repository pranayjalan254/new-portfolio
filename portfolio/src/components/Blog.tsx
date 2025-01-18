import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { blogs } from "../data/Blogs";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const totalSlides = blogs.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // mobile
        setVisibleSlides(1);
        setSlideWidth(window.innerWidth - 32);
      } else if (window.innerWidth < 1024) {
        // tablet
        setVisibleSlides(2);
        setSlideWidth((window.innerWidth - 60) / 2);
      } else {
        // desktop
        setVisibleSlides(3);
        setSlideWidth((window.innerWidth - 150) / 3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          Blogs
        </motion.h2>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (slideWidth + 16)}px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  style={{ width: slideWidth }}
                  className="flex-shrink-0 bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-40 md:h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 mb-2">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold line-clamp-2">
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-2 mb-4">
                      {blog.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs md:text-sm text-blue-500 hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Read More{" "}
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 md:-left-8 md:-right-8 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-1.5 md:p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-1.5 md:p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4 md:mt-6">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-3 md:w-4"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
