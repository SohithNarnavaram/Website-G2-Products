import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Flame,
  RotateCcw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const getBadgeVariant = (badge?: string) => {
  switch (badge) {
    case "Bestseller":
    case "Hot":
      return "default";
    case "New":
      return "secondary";
    case "Sale":
      return "destructive";
    default:
      return "outline";
  }
};

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem, setIsOpen } = useCart();

  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [productId]
  );

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter(
        (p) =>
          p.id !== product.id &&
          (p.category === product.category || p.brand === product.brand)
      )
      .slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary text-primary border border-border">
              <Flame className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold">Product not found</h1>
              <p className="text-muted-foreground">
                The product you’re looking for doesn’t exist or has moved.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button variant="outline" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go back
              </Button>
              <Button asChild>
                <Link to="/store">Browse store</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <CartDrawer />
        <FloatingCartButton />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 space-y-12">
          <div className="flex items-center justify-between gap-4 pt-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/store">Store</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {product.badge && (
                <Badge
                  variant={getBadgeVariant(product.badge)}
                  className="absolute top-6 left-6 z-10 gap-1"
                >
                  {product.badge === "Bestseller" || product.badge === "Hot" ? (
                    <Flame className="w-4 h-4" />
                  ) : null}
                  {product.badge}
                </Badge>
              )}

              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-secondary shadow-xl shadow-black/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                {[product.image, product.image, product.image].map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-video rounded-xl overflow-hidden border border-border bg-secondary"
                  >
                    <img
                      src={src}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                  {product.brand} • {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {product.name}
                </h1>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-heading font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <Badge variant="secondary" className="px-3 py-1">
                  {product.inStock ? "In stock" : "Out of stock"}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={handleAddToCart} className="gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    handleAddToCart();
                    setIsOpen(true);
                  }}
                >
                  Buy now
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a
                    href="https://api.whatsapp.com/send?phone=+919000000000&text=I%20want%20to%20know%20more%20about%20this%20product"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat for offer
                  </a>
                </Button>
              </div>

              <Separator />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-border bg-card/70">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm font-semibold">Fast shipping</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dispatched in 24-48 hours with tracking.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/70">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-semibold">1-year warranty</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    100% genuine products with brand warranty.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/70">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-sm font-semibold">Easy returns</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    7-day hassle-free replacement on eligible items.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-lg font-heading font-semibold">
                  Why creators love it
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Pro-grade build and reliability for daily shoots",
                    "Optimized for travel, vlogging, and moto adventures",
                    "Trusted after-sales support with spares & service",
                    "Hand-picked by the G2 crew for creator workflows",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-3 rounded-lg bg-secondary border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {related.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
                    You may also like
                  </p>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Related products
                  </h2>
                </div>
                <Button variant="ghost" asChild>
                  <Link to="/store">View all</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <Link to={`/products/${item.id}`} className="block">
                      <div className="relative h-44 overflow-hidden bg-secondary">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                        {item.badge && (
                          <Badge
                            variant={getBadgeVariant(item.badge)}
                            className="absolute top-3 left-3 gap-1"
                          >
                            {item.badge === "Bestseller" || item.badge === "Hot" ? (
                              <Flame className="w-3 h-3" />
                            ) : null}
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-xs text-primary font-medium">{item.brand}</p>
                        <h3 className="font-heading font-bold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between px-4 pb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-primary">
                          ₹{item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-1"
                        onClick={() =>
                          addItem({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          })
                        }
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-border bg-card/60 p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Need a custom kit?</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us your camera, moto, or creator setup—we’ll tailor a bundle.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link to="/store">Continue browsing</Link>
              </Button>
              <Button asChild>
                <a
                  href="https://api.whatsapp.com/send?phone=+919000000000&text=Need%20a%20custom%20creator%20kit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to expert
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <FloatingCartButton />
      <WhatsAppButton />
    </div>
  );
};

export default Product;


