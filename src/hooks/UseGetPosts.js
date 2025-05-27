import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const parsePrice = (price) => {
  if (!price) return 0;
  if (typeof price === "number") return price;
  const cleaned = price.toString().replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

const hasOffer = (offer) => {
  if (offer === undefined || offer === null) return false;
  if (typeof offer === "boolean") return offer;
  if (typeof offer === "string") {
    const val = offer.toLowerCase();
    return val === "yes" || val === "true" || val === "hasoffer" || val === "1";
  }
  if (typeof offer === "number") return offer > 0;
  return false;
};

const fetchProducts = async () => {
  const res = await axios.get("/img/product.json"); // لازم يكون في public
  return res.data.map((p) => ({
    ...p,
    price: parsePrice(p.price),
    hasOffer: hasOffer(p.offers),
  }));
};
const useGetProducts = () => {
    return useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      staleTime: 5 * 60 * 1000,  // بيانات صالحة 5 دقائق بدون طلب جديد
      cacheTime: 10 * 60 * 1000, // البيانات تبقى في الكاش 10 دقائق بعد آخر استخدام
      refetchOnWindowFocus: false, // ما تعيدش تحميل البيانات لما ترجع لتبويب المتصفح
    });
  };
  

export default useGetProducts;
