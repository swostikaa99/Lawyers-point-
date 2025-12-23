import React, { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogConp({
  itemsPerPage = 3,
  showPagination = true,
  showLink = false,
  linkHref = "/blog",
}) {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Property Rights in Nepal: A Complete Guide",
      excerpt:
        "Property rights in Nepal are governed by various laws and regulations. This comprehensive guide covers everything you need to know about owning and transferring property.",
      author: "Mr. Jyoti Adhikari",
      date: "December 1, 2024",
      category: "Property Law",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title:
        "New Business Registration Laws 2024: What Entrepreneurs Need to Know",
      excerpt:
        "Recent changes to Nepal's business registration laws have significant implications for entrepreneurs. Learn about the new requirements and compliance measures.",
      author: "Mr. Rajesh Thapa",
      date: "November 25, 2024",
      category: "Business Law",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Navigating Family Law Disputes: Mediation vs Litigation",
      excerpt:
        "When facing family law disputes, understanding your options is crucial. This article explores the benefits of mediation compared to traditional litigation.",
      author: "Ms. Sunita Sharma",
      date: "November 18, 2024",
      category: "Family Law",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Intellectual Property Protection for Startups in Nepal",
      excerpt:
        "Protecting your intellectual property is essential for any startup. Learn about trademark registration, copyright protection, and patent filing in Nepal.",
      author: "Ms. Kamala Devi",
      date: "November 10, 2024",
      category: "IP Law",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Employment Law Updates: Rights and Obligations",
      excerpt:
        "Stay informed about the latest employment law updates in Nepal. This article covers employee rights, employer obligations, and recent legal changes.",
      author: "Mr. Jyoti Adhikari",
      date: "November 5, 2024",
      category: "Employment Law",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "The Importance of Legal Documentation in Business Transactions",
      excerpt:
        "Proper legal documentation can protect your business from disputes and liability. Learn about essential documents every business should have.",
      author: "Mr. Rajesh Thapa",
      date: "October 28, 2024",
      category: "Corporate Law",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Conditional Pagination */}
          {showPagination && totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg font-medium ${
                    currentPage === i + 1
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card text-foreground border border-border hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}

          {/* Conditional View More */}
          {showLink && (
            <div className="mt-6 text-right">
              <Link
                to="/about"
                className="text-[#d39b63] font-medium font-semibold"
              >
                View more →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Stay Updated
          </h2>
          <p
            className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Subscribe to our newsletter to receive the latest legal news,
            insights, and updates directly in your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground px-8 py-3 font-semibold tracking-wider uppercase hover:bg-gold-dark transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
