import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Calendar, User, ArrowRight } from "lucide-react";
import BlogConp from "@/components/BlogConp";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Understanding Property Rights in Nepal: A Complete Guide",
//     excerpt: "Property rights in Nepal are governed by various laws and regulations. This comprehensive guide covers everything you need to know about owning and transferring property.",
//     author: "Mr. Jyoti Adhikari",
//     date: "December 1, 2024",
//     category: "Property Law",
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
//   },
//   {
//     id: 2,
//     title: "New Business Registration Laws 2024: What Entrepreneurs Need to Know",
//     excerpt: "Recent changes to Nepal's business registration laws have significant implications for entrepreneurs. Learn about the new requirements and compliance measures.",
//     author: "Mr. Rajesh Thapa",
//     date: "November 25, 2024",
//     category: "Business Law",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Navigating Family Law Disputes: Mediation vs Litigation",
//     excerpt: "When facing family law disputes, understanding your options is crucial. This article explores the benefits of mediation compared to traditional litigation.",
//     author: "Ms. Sunita Sharma",
//     date: "November 18, 2024",
//     category: "Family Law",
//     image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
//   },
//   {
//     id: 4,
//     title: "Intellectual Property Protection for Startups in Nepal",
//     excerpt: "Protecting your intellectual property is essential for any startup. Learn about trademark registration, copyright protection, and patent filing in Nepal.",
//     author: "Ms. Kamala Devi",
//     date: "November 10, 2024",
//     category: "IP Law",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
//   },
//   {
//     id: 5,
//     title: "Employment Law Updates: Rights and Obligations",
//     excerpt: "Stay informed about the latest employment law updates in Nepal. This article covers employee rights, employer obligations, and recent legal changes.",
//     author: "Mr. Jyoti Adhikari",
//     date: "November 5, 2024",
//     category: "Employment Law",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
//   },
//   {
//     id: 6,
//     title: "The Importance of Legal Documentation in Business Transactions",
//     excerpt: "Proper legal documentation can protect your business from disputes and liability. Learn about essential documents every business should have.",
//     author: "Mr. Rajesh Thapa",
//     date: "October 28, 2024",
//     category: "Corporate Law",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
//   },
// ];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHeader
        title="Our Blog"
        subtitle="Legal insights, news, and updates from our team"
      />

      <BlogConp />

      <Footer />
    </main>
  );
};

export default Blog;
